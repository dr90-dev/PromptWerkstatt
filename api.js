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
    let letzterOriginalPrompt = "";
    let letzterVerbesserterPrompt = "";
    let fokusVorVergleich = null;


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

    const vergleichOeffnenButton =
        document.getElementById(
            "kiVergleichOeffnen"
        );

    const vergleichModal =
        document.getElementById(
            "kiVergleichModal"
        );

    const vergleichSchliessenButton =
        document.getElementById(
            "kiVergleichSchliessen"
        );

    const vergleichOriginal =
        document.getElementById(
            "kiVergleichOriginal"
        );

    const vergleichVerbessert =
        document.getElementById(
            "kiVergleichVerbessert"
        );

    const vergleichStatus =
        document.getElementById(
            "kiVergleichStatus"
        );

    const vergleichKopierenButton =
        document.getElementById(
            "kiVergleichKopieren"
        );

    const promptVorschau =
        document.getElementById(
            "promptVorschau"
        );


    function statusInBereichAnzeigen(
        bereich,
        text,
        typ = ""
    ) {
        bereich.textContent = text;
        bereich.classList.remove(
            "ist-fehler",
            "ist-erfolg",
            "ist-laden"
        );


        if (typ) {
            bereich.classList.add(
                `ist-${typ}`
            );
        }
    }


    function statusAnzeigen(
        text,
        typ = ""
    ) {
        statusInBereichAnzeigen(
            statusBereich,
            text,
            typ
        );
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
        letzterOriginalPrompt = "";
        letzterVerbesserterPrompt = "";
        ergebnisText.textContent = "";
        ergebnisBereich.classList.add(
            "versteckt"
        );
        kopierenButton.disabled = true;
        vergleichOeffnenButton.disabled = true;
        vergleichOeffnenButton.classList.add(
            "versteckt"
        );
    }


    async function verbessertenPromptKopieren() {

        if (!letzterVerbesserterPrompt) {
            return false;
        }


        await navigator.clipboard.writeText(
            letzterVerbesserterPrompt
        );


        return true;
    }


    function vergleichOeffnen() {

        if (
            !letzterOriginalPrompt ||
            !letzterVerbesserterPrompt
        ) {
            return;
        }


        vergleichOriginal.textContent =
            letzterOriginalPrompt;

        vergleichVerbessert.textContent =
            letzterVerbesserterPrompt;

        statusInBereichAnzeigen(
            vergleichStatus,
            ""
        );

        fokusVorVergleich =
            document.activeElement;

        vergleichModal.hidden = false;
        vergleichModal.classList.remove(
            "versteckt"
        );
        vergleichModal.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.classList.add(
            "ki-modal-offen"
        );

        vergleichSchliessenButton.focus();
    }


    function vergleichSchliessen() {

        if (vergleichModal.hidden) {
            return;
        }


        vergleichModal.hidden = true;
        vergleichModal.classList.add(
            "versteckt"
        );
        vergleichModal.setAttribute(
            "aria-hidden",
            "true"
        );
        document.body.classList.remove(
            "ki-modal-offen"
        );


        if (
            fokusVorVergleich &&
            typeof fokusVorVergleich.focus === "function"
        ) {
            fokusVorVergleich.focus();
        }


        fokusVorVergleich = null;
    }


    function vergleichTastaturSteuern(event) {

        if (vergleichModal.hidden) {
            return;
        }


        if (event.key === "Escape") {
            event.preventDefault();
            vergleichSchliessen();
            return;
        }


        if (event.key !== "Tab") {
            return;
        }


        const fokusElemente =
            vergleichModal.querySelectorAll(
                "button:not([disabled]), [tabindex]:not([tabindex='-1'])"
            );


        if (!fokusElemente.length) {
            return;
        }


        const erstesElement =
            fokusElemente[0];

        const letztesElement =
            fokusElemente[
                fokusElemente.length - 1
            ];


        if (
            event.shiftKey &&
            document.activeElement === erstesElement
        ) {
            event.preventDefault();
            letztesElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement === letztesElement
        ) {
            event.preventDefault();
            erstesElement.focus();
        }
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
                const verbesserterPrompt =
                    await promptMitKiVerbessern(
                        prompt
                    );


                letzterOriginalPrompt =
                    prompt;

                letzterVerbesserterPrompt =
                    verbesserterPrompt;

                ergebnisText.textContent =
                    letzterVerbesserterPrompt;

                ergebnisBereich.classList.remove(
                    "versteckt"
                );

                kopierenButton.disabled = false;
                vergleichOeffnenButton.disabled = false;
                vergleichOeffnenButton.classList.remove(
                    "versteckt"
                );

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
                await verbessertenPromptKopieren();

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


    vergleichOeffnenButton.addEventListener(
        "click",
        vergleichOeffnen
    );


    vergleichSchliessenButton.addEventListener(
        "click",
        vergleichSchliessen
    );


    vergleichModal.addEventListener(
        "click",
        function (event) {

            if (event.target === vergleichModal) {
                vergleichSchliessen();
            }
        }
    );


    document.addEventListener(
        "keydown",
        vergleichTastaturSteuern
    );


    vergleichKopierenButton.addEventListener(
        "click",
        async function () {

            try {
                await verbessertenPromptKopieren();

                statusInBereichAnzeigen(
                    vergleichStatus,
                    "Verbesserter Prompt wurde kopiert ✓",
                    "erfolg"
                );
            }
            catch {
                statusInBereichAnzeigen(
                    vergleichStatus,
                    "Der verbesserte Prompt konnte nicht kopiert werden.",
                    "fehler"
                );
            }
        }
    );


    uebernehmenButton.disabled = true;
})();
