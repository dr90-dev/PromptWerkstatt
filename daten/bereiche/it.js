(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "it",
        name: "IT, KI & Daten",
        icon: "💻",
        standardAktiv: true,
        grundlagen: {
            rollen: [],
            anforderungen: [],
            regeln: [],
            ausgabeformate: [],
            ausgabeAls: []
        },
        parameter: [
            {
                id: "technologie",
                name: "Technologie",
                typ: "select",
                eigeneAngabeErlaubt: true,
                optionen: [
                    { id: "javascript", name: "JavaScript" },
                    { id: "python", name: "Python" },
                    { id: "sql", name: "SQL" },
                    { id: "ki-modelle", name: "KI-Modelle" }
                ]
            }
        ],
        hauptkategorien: []
    });
})(globalThis);
