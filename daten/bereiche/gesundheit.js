(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "gesundheit",
        name: "Gesundheit, Sport & Wohlbefinden",
        icon: "🏃",
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
                id: "trainingsniveau",
                name: "Trainingsniveau",
                typ: "select",
                optionen: [
                    { id: "anfaenger", name: "Anfänger" },
                    { id: "fortgeschritten", name: "Fortgeschritten" },
                    { id: "erfahren", name: "Erfahren" }
                ]
            },
            {
                id: "trainingsziel",
                name: "Trainingsziel",
                typ: "select",
                optionen: [
                    { id: "allgemeine-fitness", name: "Allgemeine Fitness" },
                    { id: "kraft", name: "Kraft" },
                    { id: "ausdauer", name: "Ausdauer" },
                    { id: "beweglichkeit", name: "Beweglichkeit" }
                ]
            }
        ],
        hauptkategorien: []
    });
})(globalThis);
