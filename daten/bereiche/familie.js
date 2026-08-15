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
        id: "familie",
        name: "Familie, Haushalt & Wohnen",
        icon: "🏠",
        standardAktiv: true,
        grundlagen: {
            rollen: [],
            anforderungen: [],
            regeln: [],
            ausgabeformate: [],
            ausgabeAls: []
        },
        parameter: [],
        hauptkategorien: [
            hauptkategorie(
                "haushalt-reinigung",
                "Haushalt & Reinigung",
                [
                    ["reinigungsplan", "Reinigungsplan"],
                    ["putzplan", "Putzplan"],
                    ["flecken-entfernen", "Flecken entfernen"],
                    ["ordnung-schaffen", "Ordnung schaffen"],
                    ["haushaltsroutine", "Haushaltsroutine"],
                    ["aufraeumplan", "Aufräumplan"]
                ]
            ),
            hauptkategorie(
                "familie-familienalltag",
                "Familie & Familienalltag",
                [
                    ["familienorganisation", "Familienorganisation"],
                    ["wochenplanung", "Wochenplanung"],
                    ["gemeinsame-aktivitaeten", "Gemeinsame Aktivitäten"],
                    ["familienkalender", "Familienkalender"],
                    ["aufgaben-verteilen", "Aufgaben verteilen"],
                    ["familienbudget", "Familienbudget"]
                ]
            ),
            hauptkategorie(
                "kinder-beschaeftigung",
                "Kinder & Beschäftigung",
                [
                    ["beschaeftigungsideen", "Beschäftigungsideen"],
                    ["regentag", "Regentag"],
                    ["spiele", "Spiele"],
                    ["basteln-mit-kindern", "Basteln mit Kindern"],
                    ["lernspiele", "Lernspiele"],
                    ["kindergeburtstag", "Kindergeburtstag"],
                    ["ausflugsideen", "Ausflugsideen"]
                ]
            ),
            hauptkategorie(
                "wohnen-einrichten",
                "Wohnen & Einrichten",
                [
                    ["raumgestaltung", "Raumgestaltung"],
                    ["moebelplanung", "Möbelplanung"],
                    ["farbkonzept", "Farbkonzept"],
                    ["dekoration", "Dekoration"],
                    ["kleine-raeume", "Kleine Räume"],
                    ["einrichtungsideen", "Einrichtungsideen"]
                ]
            ),
            hauptkategorie(
                "garten-pflanzen",
                "Garten & Pflanzen",
                [
                    ["gartenplanung", "Gartenplanung"],
                    ["pflanzenpflege", "Pflanzenpflege"],
                    ["balkon", "Balkon"],
                    ["gemuese-kraeuter", "Gemüse & Kräuter"],
                    ["rasen", "Rasen"],
                    ["pflanzideen", "Pflanzideen"],
                    ["saisonale-gartenarbeiten", "Saisonale Gartenarbeiten"]
                ]
            ),
            hauptkategorie(
                "haushaltsplanung",
                "Haushaltsplanung",
                [
                    ["haushaltsbudget", "Haushaltsbudget"],
                    ["einkaufsplanung", "Einkaufsplanung"],
                    ["vorraete", "Vorräte"],
                    ["kosten-senken", "Kosten senken"],
                    ["wochenorganisation", "Wochenorganisation"]
                ]
            ),
            hauptkategorie(
                "feste-feiern-zu-hause",
                "Feste & Feiern zu Hause",
                [
                    ["geburtstag", "Geburtstag"],
                    ["grillabend", "Grillabend"],
                    ["familienfeier", "Familienfeier"],
                    ["motto-party", "Motto-Party"],
                    ["weihnachtsfeier", "Weihnachtsfeier"],
                    ["menue-ablauf", "Menü & Ablauf"]
                ]
            )
        ]
    });
})(globalThis);
