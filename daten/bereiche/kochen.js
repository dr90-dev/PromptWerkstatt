(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "kochen",
        name: "Kochen & Ernährung",
        icon: "🍳",
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
                id: "ernaehrungsweise",
                name: "Ernährungsweise",
                typ: "select",
                optionen: [
                    { id: "keine-vorgabe", name: "Keine Vorgabe" },
                    { id: "vegetarisch", name: "Vegetarisch" },
                    { id: "vegan", name: "Vegan" },
                    { id: "omnivor", name: "Omnivor" }
                ]
            },
            {
                id: "kochzeit",
                name: "Kochzeit",
                typ: "select",
                optionen: [
                    { id: "keine-vorgabe", name: "Keine Vorgabe" },
                    { id: "bis-15-minuten", name: "Bis 15 Minuten" },
                    { id: "bis-30-minuten", name: "Bis 30 Minuten" },
                    { id: "bis-60-minuten", name: "Bis 60 Minuten" }
                ]
            }
        ],
        hauptkategorien: []
    });
})(globalThis);
