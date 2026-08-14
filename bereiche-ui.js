(function (global) {
    "use strict";

    const bereichSelect =
        document.getElementById(
            "bereichAuswahl"
        );

    const verwaltenButton =
        document.getElementById(
            "bereicheVerwalten"
        );

    const modal =
        document.getElementById(
            "bereicheModal"
        );


    if (
        !bereichSelect ||
        !verwaltenButton ||
        !modal
    ) {
        console.error(
            "V2-Bereichsauswahl: Benötigte HTML-Elemente fehlen."
        );

        return;
    }


    const registry =
        global.PromptWerkstattDatenV2;


    if (
        !registry ||
        !Array.isArray(
            registry.bereichsDefinitionen
        ) ||
        !registry.bereiche
    ) {
        console.error(
            "V2-Bereichsauswahl: PromptWerkstattDatenV2 wurde nicht korrekt geladen."
        );

        bereichSelect.disabled = true;
        verwaltenButton.disabled = true;

        return;
    }


    const alleBereiche =
        registry.bereichsDefinitionen
            .map(
                function (definition) {
                    return registry.bereiche[
                        definition.id
                    ] || null;
                }
            )
            .filter(
                function (bereich) {
                    return Boolean(bereich);
                }
            );


    if (alleBereiche.length === 0) {
        console.error(
            "V2-Bereichsauswahl: Es sind keine Bereiche verfügbar."
        );

        bereichSelect.disabled = true;
        verwaltenButton.disabled = true;

        return;
    }


    if (alleBereiche.length !== 13) {
        console.error(
            `V2-Bereichsauswahl: Erwartet wurden 13 Bereiche, geladen wurden ${alleBereiche.length}.`
        );
    }


    const modalListe =
        document.getElementById(
            "bereicheModalListe"
        );

    const modalStatus =
        document.getElementById(
            "bereicheModalStatus"
        );

    const modalSchliessenButton =
        document.getElementById(
            "bereicheModalSchliessen"
        );

    const alleAuswaehlenButton =
        document.getElementById(
            "bereicheAlleAuswaehlen"
        );

    const standardButton =
        document.getElementById(
            "bereicheStandard"
        );

    const abbrechenButton =
        document.getElementById(
            "bereicheAbbrechen"
        );

    const speichernButton =
        document.getElementById(
            "bereicheSpeichern"
        );


    let fokusVorModal = null;


    const bekannteIds =
        new Set(
            alleBereiche.map(
                function (bereich) {
                    return bereich.id;
                }
            )
        );


    function idsBereinigen(ids) {
        const ausgewaehlteIds =
            new Set(
                Array.isArray(ids)
                    ? ids.filter(
                        function (id) {
                            return (
                                typeof id === "string" &&
                                bekannteIds.has(id)
                            );
                        }
                    )
                    : []
            );


        return alleBereiche
            .filter(
                function (bereich) {
                    return ausgewaehlteIds.has(
                        bereich.id
                    );
                }
            )
            .map(
                function (bereich) {
                    return bereich.id;
                }
            );
    }


    function standardIdsErmitteln() {
        const standardIds =
            alleBereiche
                .filter(
                    function (bereich) {
                        return (
                            bereich.standardAktiv ===
                            true
                        );
                    }
                )
                .map(
                    function (bereich) {
                        return bereich.id;
                    }
                );


        return standardIds.length > 0
            ? standardIds
            : [
                alleBereiche[0].id
            ];
    }


    const standardIds =
        standardIdsErmitteln();

    const storageService =
        global.StorageService;

    const storageServiceVerfuegbar =
        storageService &&
        typeof storageService.aktiveBereicheV2Laden === "function" &&
        typeof storageService.aktiveBereicheV2Speichern === "function" &&
        typeof storageService.aktiverBereichV2Laden === "function" &&
        typeof storageService.aktiverBereichV2Speichern === "function";


    if (!storageServiceVerfuegbar) {
        console.error(
            "V2-Bereichsauswahl: globalThis.StorageService wurde nicht vollständig geladen."
        );

        bereichSelect.disabled = true;
        verwaltenButton.disabled = true;

        return;
    }


    function aktiveBereicheLaden() {
        return storageService
            .aktiveBereicheV2Laden();
    }


    function aktiveBereicheSpeichern(ids) {
        return storageService
            .aktiveBereicheV2Speichern(ids);
    }


    function aktuellenBereichLaden() {
        return storageService
            .aktiverBereichV2Laden();
    }


    function aktuellenBereichSpeichern(id) {
        return storageService
            .aktiverBereichV2Speichern(id);
    }


    const gespeicherteIds =
        aktiveBereicheLaden();

    let aktiveIds =
        idsBereinigen(
            gespeicherteIds
        );


    if (aktiveIds.length === 0) {
        aktiveIds = [
            ...standardIds
        ];
    }


    function bereichOptionErstellen(bereich) {
        const option =
            document.createElement(
                "option"
            );

        const sichtbarerText =
            `${bereich.icon} ${bereich.name}`;


        option.value =
            bereich.id;

        option.text =
            sichtbarerText;

        option.label =
            sichtbarerText;


        return option;
    }


    function dropdownAktualisieren(
        bevorzugteId
    ) {
        bereichSelect.innerHTML = "";


        alleBereiche.forEach(
            function (bereich) {

                if (
                    aktiveIds.includes(
                        bereich.id
                    )
                ) {
                    bereichSelect.appendChild(
                        bereichOptionErstellen(
                            bereich
                        )
                    );
                }
            }
        );


        let auswahl =
            aktiveIds.includes(
                bevorzugteId
            )

                ? bevorzugteId

                : aktiveIds[0];


        const passendeOption =
            [
                ...bereichSelect.options
            ].find(
                function (option) {
                    return (
                        option.value ===
                        auswahl
                    );
                }
            );


        if (!passendeOption) {
            auswahl =
                bereichSelect.options[0]
                    .value;
        }


        bereichSelect.value =
            auswahl;


        const ausgewaehlteOption =
            [
                ...bereichSelect.options
            ].find(
                function (option) {
                    return (
                        option.value ===
                        auswahl
                    );
                }
            );


        if (ausgewaehlteOption) {
            ausgewaehlteOption.selected =
                true;
        }


        return auswahl;
    }


    let aktuelleId =
        dropdownAktualisieren(
            aktuellenBereichLaden()
        );


    aktiveBereicheSpeichern(
        aktiveIds
    );

    aktuellenBereichSpeichern(
        aktuelleId
    );


    function modalStatusAnzeigen(
        text,
        istFehler = false
    ) {
        modalStatus.textContent = text;
        modalStatus.classList.toggle(
            "ist-fehler",
            istFehler
        );
    }


    function checkboxenErstellen() {
        modalListe.innerHTML = "";


        alleBereiche.forEach(
            function (bereich) {
                const label =
                    document.createElement(
                        "label"
                    );

                const checkbox =
                    document.createElement(
                        "input"
                    );

                const text =
                    document.createElement(
                        "span"
                    );


                label.classList.add(
                    "bereich-option"
                );

                checkbox.type =
                    "checkbox";

                checkbox.value =
                    bereich.id;

                checkbox.checked =
                    aktiveIds.includes(
                        bereich.id
                    );

                text.textContent =
                    `${bereich.icon} ${bereich.name}`;


                label.appendChild(
                    checkbox
                );

                label.appendChild(
                    text
                );

                modalListe.appendChild(
                    label
                );
            }
        );
    }


    function modalOeffnen() {
        checkboxenErstellen();
        modalStatusAnzeigen("");

        fokusVorModal =
            document.activeElement;

        modal.hidden = false;
        modal.classList.remove(
            "versteckt"
        );
        modal.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.classList.add(
            "bereich-modal-offen"
        );

        modalSchliessenButton.focus();
    }


    function modalSchliessen() {

        if (modal.hidden) {
            return;
        }


        modal.hidden = true;
        modal.classList.add(
            "versteckt"
        );
        modal.setAttribute(
            "aria-hidden",
            "true"
        );
        document.body.classList.remove(
            "bereich-modal-offen"
        );


        if (
            fokusVorModal &&
            typeof fokusVorModal.focus ===
                "function"
        ) {
            fokusVorModal.focus();
        }


        fokusVorModal = null;
    }


    function modalCheckboxen() {
        return [
            ...modalListe.querySelectorAll(
                "input[type='checkbox']"
            )
        ];
    }


    function checkboxAuswahlSetzen(ids) {
        const idSet =
            new Set(ids);


        modalCheckboxen().forEach(
            function (checkbox) {
                checkbox.checked =
                    idSet.has(
                        checkbox.value
                    );
            }
        );


        modalStatusAnzeigen("");
    }


    function auswahlSpeichern() {
        const neueIds =
            idsBereinigen(
                modalCheckboxen()
                    .filter(
                        function (checkbox) {
                            return checkbox.checked;
                        }
                    )
                    .map(
                        function (checkbox) {
                            return checkbox.value;
                        }
                    )
            );


        if (neueIds.length === 0) {
            modalStatusAnzeigen(
                "Mindestens ein Bereich muss aktiviert bleiben.",
                true
            );

            return;
        }


        const neueAktuelleId =
            neueIds.includes(
                aktuelleId
            )

                ? aktuelleId

                : neueIds[0];


        const bereicheGespeichert =
            aktiveBereicheSpeichern(
                neueIds
            );

        const auswahlGespeichert =
            aktuellenBereichSpeichern(
                neueAktuelleId
            );


        if (
            !bereicheGespeichert ||
            !auswahlGespeichert
        ) {
            modalStatusAnzeigen(
                "Die Auswahl konnte nicht dauerhaft gespeichert werden.",
                true
            );

            return;
        }


        aktiveIds = [
            ...neueIds
        ];

        aktuelleId =
            dropdownAktualisieren(
                neueAktuelleId
            );

        modalSchliessen();
    }


    function modalTastaturSteuern(event) {

        if (modal.hidden) {
            return;
        }


        if (event.key === "Escape") {
            event.preventDefault();
            modalSchliessen();
            return;
        }


        if (event.key !== "Tab") {
            return;
        }


        const fokusElemente =
            modal.querySelectorAll(
                "button:not([disabled]), input:not([disabled])"
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
            document.activeElement ===
                erstesElement
        ) {
            event.preventDefault();
            letztesElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement ===
                letztesElement
        ) {
            event.preventDefault();
            erstesElement.focus();
        }
    }


    bereichSelect.addEventListener(
        "change",
        function () {
            aktuelleId =
                bereichSelect.value;

            aktuellenBereichSpeichern(
                aktuelleId
            );
        }
    );


    verwaltenButton.addEventListener(
        "click",
        modalOeffnen
    );


    modalSchliessenButton.addEventListener(
        "click",
        modalSchliessen
    );


    abbrechenButton.addEventListener(
        "click",
        modalSchliessen
    );


    alleAuswaehlenButton.addEventListener(
        "click",
        function () {
            checkboxAuswahlSetzen(
                alleBereiche.map(
                    function (bereich) {
                        return bereich.id;
                    }
                )
            );
        }
    );


    standardButton.addEventListener(
        "click",
        function () {
            checkboxAuswahlSetzen(
                standardIds
            );
        }
    );


    speichernButton.addEventListener(
        "click",
        auswahlSpeichern
    );


    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {
                modalSchliessen();
            }
        }
    );


    document.addEventListener(
        "keydown",
        modalTastaturSteuern
    );
})(globalThis);
