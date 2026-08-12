export default {
    async fetch(request, env) {

        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, X-Test-Token"
        };


        if (request.method === "OPTIONS") {
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
                    service: "PromptWerkstatt API",
                    status: "bereit"
                },
                200,
                corsHeaders
            );
        }

        
        // Prompt mit OpenAI verbessern
        if (
            request.method === "POST" &&
            url.pathname === "/prompt-verbessern"
        ) {
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
            try {

                const daten = await request.json();

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


                // Schutz gegen extrem große Eingaben
                if (prompt.length > 12000) {
                    return jsonAntwort(
                        {
                            ok: false,
                            fehler: "Der Prompt ist zu lang."
                        },
                        400,
                        corsHeaders
                    );
                }


                const openAIResponse = await fetch(
                    "https://api.openai.com/v1/responses",
                    {
                        method: "POST",

                        headers: {
                            "Authorization":
                                `Bearer ${env.OPENAI_API_KEY}`,
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            model: "gpt-5.6-luna",

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


                const openAIDaten =
                    await openAIResponse.json();


                if (!openAIResponse.ok) {
                    console.error(
                        "OpenAI API Fehler:",
                        openAIDaten
                    );

                    return jsonAntwort(
                        {
                            ok: false,
                            fehler:
                                "OpenAI konnte die Anfrage nicht verarbeiten."
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
                            fehler:
                                "OpenAI hat keinen Text zurückgegeben."
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
            catch (fehler) {

                console.error(fehler);

                return jsonAntwort(
                    {
                        ok: false,
                        fehler:
                            "Die Anfrage konnte nicht verarbeitet werden."
                    },
                    500,
                    corsHeaders
                );
            }
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
    corsHeaders
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
                "Content-Type":
                    "application/json; charset=utf-8"
            }
        }
    );
}