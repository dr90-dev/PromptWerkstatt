(function (global) {
    "use strict";

    const registry =
        global.PromptWerkstattDatenV2;


    registry.bereichsDefinitionenSetzen([
        {
            id: "allgemein",
            name: "Allgemein & Alltag",
            icon: "🧭"
        },
        {
            id: "schreiben",
            name: "Schreiben & Kommunikation",
            icon: "✍️"
        },
        {
            id: "familie",
            name: "Familie, Haushalt & Wohnen",
            icon: "🏠"
        },
        {
            id: "kreativ",
            name: "Kreativ, Basteln & DIY",
            icon: "🎨"
        },
        {
            id: "kochen",
            name: "Kochen & Ernährung",
            icon: "🍳"
        },
        {
            id: "freizeit",
            name: "Freizeit, Reisen & Hobbys",
            icon: "✈️"
        },
        {
            id: "social-media",
            name: "Social Media, Creator & Influencer",
            icon: "📱"
        },
        {
            id: "gesundheit",
            name: "Gesundheit, Sport & Wohlbefinden",
            icon: "🏃"
        },
        {
            id: "lernen",
            name: "Lernen, Wissen & Wissenschaft",
            icon: "🎓"
        },
        {
            id: "business",
            name: "Beruf, Business & Organisation",
            icon: "💼"
        },
        {
            id: "it",
            name: "IT, KI & Daten",
            icon: "💻"
        },
        {
            id: "technik",
            name: "Technik & Engineering",
            icon: "⚙️"
        },
        {
            id: "recht",
            name: "Recht, Verwaltung & Regelwerke",
            icon: "⚖️"
        }
    ]);


    registry.globaleGrundlagenSetzen({
        rollen: [
            "Strukturierter Assistent"
        ],
        anforderungen: [
            "Ziel und Rahmenbedingungen klar berücksichtigen."
        ],
        regeln: [
            "Fehlende Informationen nicht als Fakten darstellen."
        ],
        ausgabeformate: [
            "Strukturierte Antwort"
        ],
        ausgabeAls: []
    });
})(globalThis);
