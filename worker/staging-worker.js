const ERLAUBTE_ORIGIN = "http://localhost:8000";
const MAXIMALE_PROMPT_LAENGE = 12000;


export default {
    async fetch(request, env) {

        const corsHeaders =
            erstelleCorsHeaders(request);


        if (request.method === "OPTIONS") {

            if (
                request.headers.get("Origin") !==
                ERLAUBTE_ORIGIN
            ) {
                return jsonAntwort(
                    {
                        ok: false,
                        fehler: "Origin nicht erlaubt."
                    },
                    403,
                    corsHeaders
                );
            }


            return new Response(null, {
                status: 204,
                headers: corsHeaders
            });
        }


        const url = new URL(request.url);


        // Gesundheitscheck
        if (
            request.method === "GET" &&
            url.pathname === "/health"
        ) {
            return jsonAntwort(
                {
                    ok: true,
                    service: "PromptWerkstatt Staging API",
                    status: "bereit"
                },
                200,
                corsHeaders
            );
        }


        // Prompt mit OpenAI verbessern
        if (
            request.method === "POST" &&
            url.pathname === "/v1/prompts/improve"
        ) {
            return promptVerbessern(
                request,
                env,
                corsHeaders
            );
        }


        if (
            url.pathname === "/v1/prompts/improve"
        ) {
            return jsonAntwort(
                {
                    ok: false,
                    fehler: "Methode nicht erlaubt."
                },
                405,
                corsHeaders,
                {
                    "Allow": "POST, OPTIONS"
                }
            );
        }


        return jsonAntwort(
            {
                ok: false,
                fehler: "Route nicht gefunden."
            },
            404,
            corsHeaders
        );
    }
};


async function promptVerbessern(
    request,
    env,
    corsHeaders
) {

    const origin =
        request.headers.get("Origin");


    if (
        origin &&
        origin !== ERLAUBTE_ORIGIN
    ) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Origin nicht erlaubt."
            },
            403,
            corsHeaders
        );
    }


    const testToken =
        request.headers.get("X-Test-Token");


    if (
        !env.TEST_TOKEN ||
        testToken !== env.TEST_TOKEN
    ) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Nicht autorisiert."
            },
            401,
            corsHeaders
        );
    }


    const contentType =
        request.headers.get("Content-Type") || "";


    if (
        contentType
            .split(";", 1)[0]
            .trim()
            .toLowerCase() !== "application/json"
    ) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Content-Type muss application/json sein."
            },
            415,
            corsHeaders
        );
    }


    let daten;


    try {
        daten = await request.json();
    }
    catch {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Ungültiges JSON."
            },
            400,
            corsHeaders
        );
    }


    if (
        !daten ||
        typeof daten !== "object" ||
        Array.isArray(daten)
    ) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der JSON-Inhalt muss ein Objekt sein."
            },
            400,
            corsHeaders
        );
    }


    const prompt =
        typeof daten.prompt === "string"
            ? daten.prompt.trim()
            : "";


    if (!prompt) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Kein Prompt übermittelt."
            },
            400,
            corsHeaders
        );
    }


    if (
        prompt.length >
        MAXIMALE_PROMPT_LAENGE
    ) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der Prompt ist zu lang."
            },
            400,
            corsHeaders
        );
    }


    if (!env.OPENAI_API_KEY) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der KI-Dienst ist derzeit nicht verfügbar."
            },
            503,
            corsHeaders
        );
    }


    let openAIResponse;


    try {
        openAIResponse = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Authorization":
                        `Bearer ${env.OPENAI_API_KEY}`,
                    "Content-Type":
                        "application/json"
                },

                signal:
                    AbortSignal.timeout(30000),

                body: JSON.stringify({
                    model: "gpt-5.6-luna",

                    store: false,

                    // Schließt auch Reasoning-Tokens ein.
                    max_output_tokens: 8000,

                    reasoning: {
                        effort: "low"
                    },

                    instructions:
                        "Du bist ein professioneller Prompt-Optimierer. " +
                        "Verbessere den übergebenen Prompt, ohne seine eigentliche Absicht zu verändern. " +
                        "Mache ihn klarer, präziser und besser strukturiert. " +
                        "Erfinde keine fehlenden Fakten. " +
                        "Gib ausschließlich den verbesserten Prompt zurück.",

                    input: prompt
                })
            }
        );
    }
    catch {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der KI-Dienst konnte nicht erreicht werden."
            },
            502,
            corsHeaders
        );
    }


    let openAIDaten;


    try {
        openAIDaten =
            await openAIResponse.json();
    }
    catch {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der KI-Dienst hat eine ungültige Antwort geliefert."
            },
            502,
            corsHeaders
        );
    }


    if (!openAIResponse.ok) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der KI-Dienst konnte die Anfrage nicht verarbeiten."
            },
            502,
            corsHeaders
        );
    }


    const verbesserterPrompt =
        textAusAntwort(openAIDaten);


    if (!verbesserterPrompt) {
        return jsonAntwort(
            {
                ok: false,
                fehler: "Der KI-Dienst hat keinen Text zurückgegeben."
            },
            502,
            corsHeaders
        );
    }


    return jsonAntwort(
        {
            ok: true,
            verbesserterPrompt:
                verbesserterPrompt
        },
        200,
        corsHeaders
    );
}


function erstelleCorsHeaders(request) {

    const headers = {
        "Access-Control-Allow-Methods":
            "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers":
            "Content-Type, X-Test-Token",
        "Vary": "Origin"
    };


    if (
        request.headers.get("Origin") ===
        ERLAUBTE_ORIGIN
    ) {
        headers["Access-Control-Allow-Origin"] =
            ERLAUBTE_ORIGIN;
    }


    return headers;
}


function textAusAntwort(daten) {

    if (!Array.isArray(daten.output)) {
        return "";
    }


    const texte = [];


    for (const element of daten.output) {

        if (
            element.type !== "message" ||
            !Array.isArray(element.content)
        ) {
            continue;
        }


        for (const inhalt of element.content) {

            if (
                inhalt.type === "output_text" &&
                typeof inhalt.text === "string"
            ) {
                texte.push(inhalt.text);
            }
        }
    }


    return texte.join("\n").trim();
}


function jsonAntwort(
    daten,
    status,
    corsHeaders,
    weitereHeaders = {}
) {

    return new Response(
        JSON.stringify(
            daten,
            null,
            2
        ),
        {
            status: status,

            headers: {
                ...corsHeaders,
                ...weitereHeaders,
                "Content-Type":
                    "application/json; charset=utf-8"
            }
        }
    );
}
