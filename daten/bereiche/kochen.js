(function (global) {
    "use strict";

    function hauptkategorie(
        id,
        name,
        eintraege
    ) {
        return {
            id: id,
            name: name,
            grundlagen: {
                rollen: [],
                anforderungen: [],
                regeln: [],
                ausgabeformate: [],
                ausgabeAls: []
            },
            unterkategorien:
                eintraege.map(
                    function ([unterId, unterName]) {
                        return {
                            id: unterId,
                            name: unterName,
                            empfehlungen: {
                                rollen: [],
                                anforderungen: [],
                                regeln: [],
                                ausgabeformate: [],
                                ausgabeAls: []
                            }
                        };
                    }
                )
        };
    }

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
        hauptkategorien: [
            hauptkategorie(
                "rezepte-kochen",
                "Rezepte & Kochen",
                [
                    ["hauptgerichte", "Hauptgerichte"],
                    ["suppen", "Suppen"],
                    ["salate", "Salate"],
                    ["snacks", "Snacks"],
                    ["fruehstueck", "Frühstück"],
                    ["beilagen", "Beilagen"],
                    ["desserts", "Desserts"]
                ]
            ),
            hauptkategorie(
                "schnelle-gerichte",
                "Schnelle Gerichte",
                [
                    ["unter-15-minuten", "Unter 15 Minuten"],
                    ["unter-30-minuten", "Unter 30 Minuten"],
                    ["wenige-zutaten", "Wenige Zutaten"],
                    ["feierabendkueche", "Feierabendküche"],
                    ["schnelle-familiengerichte", "Schnelle Familiengerichte"]
                ]
            ),
            hauptkategorie(
                "backen",
                "Backen",
                [
                    ["kuchen", "Kuchen"],
                    ["brot", "Brot"],
                    ["gebaeck", "Gebäck"],
                    ["muffins", "Muffins"],
                    ["desserts", "Desserts"],
                    ["backen-mit-kindern", "Backen mit Kindern"]
                ]
            ),
            hauptkategorie(
                "essensplanung",
                "Essensplanung",
                [
                    ["tagesplan", "Tagesplan"],
                    ["wochenplan", "Wochenplan"],
                    ["familienplan", "Familienplan"],
                    ["meal-prep", "Meal Prep"],
                    ["mehrere-personen", "Mehrere Personen"],
                    ["budgetplan", "Budgetplan"]
                ]
            ),
            hauptkategorie(
                "einkauf-vorraete",
                "Einkauf & Vorräte",
                [
                    ["einkaufsliste", "Einkaufsliste"],
                    ["vorraete-planen", "Vorräte planen"],
                    ["guenstig-einkaufen", "Günstig einkaufen"],
                    ["mengen-berechnen", "Mengen berechnen"],
                    ["saisonprodukte", "Saisonprodukte"]
                ]
            ),
            hauptkategorie(
                "resteverwertung",
                "Resteverwertung",
                [
                    ["kuehlschrankreste", "Kühlschrankreste"],
                    ["gemuese-verwerten", "Gemüse verwerten"],
                    ["brot-verwerten", "Brot verwerten"],
                    ["kreative-restekueche", "Kreative Resteküche"]
                ]
            ),
            hauptkategorie(
                "ernaehrung-ernaehrungsplanung",
                "Ernährung & Ernährungsplanung",
                [
                    ["ausgewogene-ernaehrung", "Ausgewogene Ernährung"],
                    ["vegetarisch", "Vegetarisch"],
                    ["vegan", "Vegan"],
                    ["proteinreich", "Proteinreich"],
                    ["low-carb", "Low Carb"],
                    ["kalorienplanung", "Kalorienplanung"]
                ]
            )
        ]
    });
})(globalThis);
