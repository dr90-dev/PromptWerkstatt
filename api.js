(function () {
    "use strict";

    const IST_LOKALE_ENTWICKLUNG =
        location.origin === "http://localhost:8000";

    const API_URL =
        "https://promptwerkstatt-api-staging.danielrunge90.workers.dev" +
        "/v1/prompts/improve";

    const REQUEST_TIMEOUT_MS =
        35000;

    let testToken = "";
    let aktiveAnfrage = null;
    let letzterVerbesserterPrompt = "";


    const entwicklungsBereich =
        document.getElementById(
            "kiEntwicklungsBereich"
        );


    if (!entwicklungsBereich) {
        return;
    }


    if (!IST_LOKALE_ENTWICKLUNG) {
        entwicklungsBereich.hidden = true;
        entwicklungsBereich.classList.add(
            "versteckt"
        );

        return;
    }


    entwicklungsBereich.hidden = false;
    entwicklungsBereich.classList.remove(
        "versteckt"
    );


    const tokenButton =
        document.getElementById(
            "kiTokenButton"
        );

    const tokenFormular =
        document.getElementById(
            "kiTokenFormular"
        );

    const tokenEingabe =
        document.getElementById(
            "kiTokenEingabe"
        );

    const tokenAbbrechen =
        document.getElementById(
            "kiTokenAbbrechen"
        );

    const verbessernButton =
        document.getElementById(
            "kiVerbessernButton"
        );

    const statusBereich =
        document.getElementById(
            "kiStatus"
        );

    const ergebnisBereich =
        document.getElementById(
            "kiErgebnis"
        );

    const ergebnisText =
        document.getElementById(
            "kiErgebnisText"
        );

    const uebernehmenButton =
        document.getElementById(
            "kiUebernehmenButton"
        );

    const kopierenButton =
        document.getElementById(
            "kiErgebnisKopieren"
        );

    const promptVorschau =
        document.getElementById(
            "promptVorschau"
        );


    function statusAnzeigen(
        text,
        typ = ""
    ) {
        statusBereich.textContent = text;
        statusBereich.classList.remove(
            "ist-fehler",
            "ist-erfolg",
            "ist-laden"
        );


        if (typ) {
            statusBereich.classList.add(
                `ist-${typ}`
            );
        }
    }


    function tokenFormularSchliessen() {
        tokenEingabe.value = "";
        tokenFormular.classList.add(
            "versteckt"
        );
    }


    function anfrageStatusSetzen(aktiv) {
        verbessernButton.disabled = aktiv;
        tokenButton.disabled = aktiv;


        verbessernButton.textContent = aktiv
            ? "Prompt wird verbessert …"
            : "Prompt mit KI verbessern";
    }


    function ergebnisZuruecksetzen() {
        letzterVerbesserterPrompt = "";
        ergebnisText.textContent = "";
        ergebnisBereich.classList.add(
            "versteckt"
        );
        kopierenButton.disabled = true;
    }


    async function promptMitKiVerbessern(prompt) {

        if (aktiveAnfrage) {
            throw new Error(
                "Eine KI-Anfrage läuft bereits."
            );
        }


        const controller =
            new AbortController();

        const timeoutId =
            setTimeout(
                function () {
                    controller.abort();
                },
                REQUEST_TIMEOUT_MS
            );


        aktiveAnfrage = controller;


        try {
            const response = await fetch(
                API_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                        "X-Test-Token":
                            testToken
                    },

                    body: JSON.stringify({
                        prompt: prompt
                    }),

                    signal:
                        controller.signal
                }
            );


            let daten = null;


            try {
                daten = await response.json();
            }
            catch {
                throw new Error(
                    "Der Staging-Dienst hat keine gültige Antwort geliefert."
                );
            }


            if (!response.ok) {

                if (response.status === 401) {
                    throw new Error(
                        "Das Staging-Token wurde nicht akzeptiert."
                    );
                }


                if (response.status === 403) {
                    throw new Error(
                        "Dieser Ursprung darf den Staging-Dienst nicht verwenden."
                    );
                }


                if (response.status === 429) {
                    throw new Error(
                        "Das Nutzungslimit ist erreicht. Bitte später erneut versuchen."
                    );
                }


                throw new Error(
                    typeof daten.fehler === "string"
                        ? daten.fehler
                        : "Die KI-Anfrage konnte nicht verarbeitet werden."
                );
            }


            if (
                !daten ||
                typeof daten.verbesserterPrompt !== "string" ||
                !daten.verbesserterPrompt.trim()
            ) {
                throw new Error(
                    "Der Staging-Dienst hat keinen verbesserten Prompt geliefert."
                );
            }


            return daten.verbesserterPrompt.trim();
        }
        catch (fehler) {

            if (
                fehler &&
                fehler.name === "AbortError"
            ) {
                throw new Error(
                    "Die KI-Anfrage hat zu lange gedauert und wurde abgebrochen."
                );
            }


            if (fehler instanceof TypeError) {
                throw new Error(
                    "Der Staging-Dienst ist derzeit nicht erreichbar."
                );
            }


            throw fehler;
        }
        finally {
            clearTimeout(timeoutId);
            aktiveAnfrage = null;
        }
    }


    tokenButton.addEventListener(
        "click",
        function () {
            const wirdGeoeffnet =
                tokenFormular.classList.contains(
                    "versteckt"
                );


            tokenFormular.classList.toggle(
                "versteckt",
                !wirdGeoeffnet
            );


            if (wirdGeoeffnet) {
                tokenEingabe.focus();
            } else {
                tokenEingabe.value = "";
            }
        }
    );


    tokenFormular.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();


            const eingegebenesToken =
                tokenEingabe.value.trim();


            if (!eingegebenesToken) {
                statusAnzeigen(
                    "Bitte ein Staging-Token eingeben.",
                    "fehler"
                );

                tokenEingabe.focus();
                return;
            }


            testToken = eingegebenesToken;
            tokenFormularSchliessen();
            statusAnzeigen(
                "Staging-Token wurde für diese Browsersitzung gesetzt.",
                "erfolg"
            );
        }
    );


    tokenAbbrechen.addEventListener(
        "click",
        function () {
            tokenFormularSchliessen();
        }
    );


    verbessernButton.addEventListener(
        "click",
        async function () {

            if (!testToken) {
                statusAnzeigen(
                    "Bitte zuerst das Staging-Token eingeben.",
                    "fehler"
                );

                return;
            }


            const prompt =
                promptVorschau.textContent.trim();


            if (!prompt) {
                statusAnzeigen(
                    "Der aktuelle Prompt ist leer.",
                    "fehler"
                );

                return;
            }


            ergebnisZuruecksetzen();
            anfrageStatusSetzen(true);
            statusAnzeigen(
                "Der Prompt wird im Staging-System verbessert …",
                "laden"
            );


            try {
                letzterVerbesserterPrompt =
                    await promptMitKiVerbessern(
                        prompt
                    );


                ergebnisText.textContent =
                    letzterVerbesserterPrompt;

                ergebnisBereich.classList.remove(
                    "versteckt"
                );

                kopierenButton.disabled = false;

                statusAnzeigen(
                    "Verbesserung abgeschlossen. Der ursprüngliche Prompt wurde nicht verändert.",
                    "erfolg"
                );
            }
            catch (fehler) {
                statusAnzeigen(
                    fehler instanceof Error
                        ? fehler.message
                        : "Die KI-Anfrage konnte nicht verarbeitet werden.",
                    "fehler"
                );
            }
            finally {
                anfrageStatusSetzen(false);
            }
        }
    );


    kopierenButton.addEventListener(
        "click",
        async function () {

            if (!letzterVerbesserterPrompt) {
                return;
            }


            try {
                await navigator.clipboard.writeText(
                    letzterVerbesserterPrompt
                );

                statusAnzeigen(
                    "Verbesserter Prompt wurde kopiert ✓",
                    "erfolg"
                );
            }
            catch {
                statusAnzeigen(
                    "Der verbesserte Prompt konnte nicht kopiert werden.",
                    "fehler"
                );
            }
        }
    );


    uebernehmenButton.disabled = true;
})();
