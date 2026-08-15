(function (global) {
    "use strict";

    const HAUPTKATEGORIE_PROFILE = {
        "konstruktion-produktentwicklung": ["technische-entwicklung"],
        "mechanik-maschinenbau": ["technische-entwicklung"],
        "elektrotechnik-elektronik": ["technische-entwicklung"],
        "fertigung-produktion": ["technische-entwicklung"],
        "werkstoffe-materialien": ["technische-entwicklung"],
        "berechnung-simulation": ["berechnen-auswerten"],
        "qualitaet-risiko": ["sicherheit-risiko-pruefen"],
        "fehlersuche-ursachenanalyse": ["fehleranalyse-ursachen"],
        "technische-dokumentation": ["technische-dokumentation"],
        "normgerechte-entwicklung": ["normen-compliance-pruefen"]
    };

    const HAUPTKATEGORIE_GRUNDLAGEN = {
        "berechnung-simulation": {
            kontextHinweise: [
                "Welche Geometrie, Lasten, Werkstoffwerte und Randbedingungen gelten?",
                "Welche Einheiten, Sicherheitsfaktoren und zulässigen Werte sind vorgegeben?"
            ],
            anforderungen: [
                "Eingabedaten, Einheiten, Formeln und Sicherheitsfaktoren vollständig dokumentieren."
            ],
            regeln: [
                "Sicherheitsrelevante Berechnungen durch qualifizierte Fachleute prüfen lassen."
            ]
        },
        "normgerechte-entwicklung": {
            kontextHinweise: [
                "Welche genaue Norm, Ausgabe, Sprache und welcher Stichtag gelten?"
            ],
            anforderungen: [
                "Normanforderungen mit genauer Fundstelle und gültiger Ausgabe belegen."
            ],
            regeln: [
                "Normeninhalte und Gültigkeit nur anhand der aktuellen Originalquelle angeben."
            ]
        }
    };

    function unterkategorie(
        id,
        name,
        profilIds
    ) {
        return {
            id: id,
            name: name,
            profilIds: profilIds,
            empfehlungen: {
                rollen: [],
                ziele: [],
                kontextHinweise: [],
                anforderungen: [],
                besondersEmpfohleneAnforderungen: [],
                regeln: [],
                besondersEmpfohleneRegeln: [],
                ausgabeformate: [],
                ausgabeAls: []
            }
        };
    }


    function hauptkategorie(
        id,
        name,
        eintraege
    ) {
        return {
            id: id,
            name: name,
            profilIds: HAUPTKATEGORIE_PROFILE[id],
            grundlagen: Object.assign({
                rollen: [],
                ziele: [],
                kontextHinweise: [],
                anforderungen: [],
                besondersEmpfohleneAnforderungen: [],
                regeln: [],
                besondersEmpfohleneRegeln: [],
                ausgabeformate: [],
                ausgabeAls: []
            }, HAUPTKATEGORIE_GRUNDLAGEN[id]),
            unterkategorien:
                eintraege.map(
                    function ([unterId, unterName]) {
                        return unterkategorie(
                            unterId,
                            unterName
                        );
                    }
                )
        };
    }

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "technik",
        name: "Technik & Engineering",
        icon: "⚙️",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Technischer Fachexperte"
            ],
            ziele: [],
            kontextHinweise: [],
            anforderungen: [
                "Technische Zusammenhänge nachvollziehbar und prüfbar darstellen."
            ],
            regeln: [
                "Keine technischen Werte oder Materialkennwerte erfinden.",
                "Annahmen klar kennzeichnen.",
                "Einheiten eindeutig angeben.",
                "Bekannte Fakten, Annahmen und Schlussfolgerungen klar trennen."
            ],
            ausgabeformate: [
                "Technische Analyse mit Annahmen und offenen Punkten"
            ],
            ausgabeAls: [
                "Text",
                "PDF (.pdf)"
            ]
        },
        parameter: [
            {
                id: "entwicklungsphase",
                name: "Entwicklungsphase",
                typ: "select",
                optionen: [
                    { id: "konzept", name: "Konzept" },
                    { id: "entwurf", name: "Entwurf" },
                    { id: "validierung", name: "Validierung" },
                    { id: "serie", name: "Serie" },
                    { id: "betrieb", name: "Betrieb" }
                ]
            }
        ],
        hauptkategorien: [
            hauptkategorie(
                "konstruktion-produktentwicklung",
                "Konstruktion & Produktentwicklung",
                [
                    ["konzeptentwicklung", "Konzeptentwicklung"],
                    ["bauteil-entwickeln", "Bauteil entwickeln"],
                    ["baugruppe-entwickeln", "Baugruppe entwickeln"],
                    ["variantenvergleich", "Variantenvergleich"],
                    ["bauraumoptimierung", "Bauraumoptimierung"],
                    ["design-review", "Design Review"]
                ]
            ),
            hauptkategorie(
                "mechanik-maschinenbau",
                "Mechanik & Maschinenbau",
                [
                    ["kraefte-momente", "Kräfte & Momente"],
                    ["verbindungen", "Verbindungen"],
                    ["lagerungen", "Lagerungen"],
                    ["getriebe", "Getriebe"],
                    ["verriegelungen", "Verriegelungen"],
                    ["federn", "Federn"],
                    ["seile", "Seile"],
                    ["mechanismen", "Mechanismen"]
                ]
            ),
            hauptkategorie(
                "elektrotechnik-elektronik",
                "Elektrotechnik & Elektronik",
                [
                    ["schaltung", "Schaltung"],
                    ["bauteilauswahl", "Bauteilauswahl"],
                    ["sensorik", "Sensorik"],
                    ["aktorik", "Aktorik"],
                    ["stromversorgung", "Stromversorgung"],
                    ["batterie-akku", "Batterie & Akku"],
                    ["pcb", "PCB"],
                    ["emv", "EMV"]
                ]
            ),
            hauptkategorie(
                "fertigung-produktion",
                "Fertigung & Produktion",
                [
                    ["cnc", "CNC"],
                    ["drehen", "Drehen"],
                    ["fraesen", "Fräsen"],
                    ["spritzguss", "Spritzguss"],
                    ["blech", "Blech"],
                    ["schweissen", "Schweißen"],
                    ["additive-fertigung", "Additive Fertigung"],
                    ["montage", "Montage"]
                ]
            ),
            hauptkategorie(
                "werkstoffe-materialien",
                "Werkstoffe & Materialien",
                [
                    ["metall", "Metall"],
                    ["kunststoff", "Kunststoff"],
                    ["elastomer", "Elastomer"],
                    ["verbundwerkstoff", "Verbundwerkstoff"],
                    ["korrosion", "Korrosion"],
                    ["oberflaechen", "Oberflächen"],
                    ["materialvergleich", "Materialvergleich"]
                ]
            ),
            hauptkategorie(
                "berechnung-simulation",
                "Berechnung & Simulation",
                [
                    ["festigkeitsberechnung", "Festigkeitsberechnung"],
                    ["fem", "FEM"],
                    ["kinematik", "Kinematik"],
                    ["toleranzanalyse", "Toleranzanalyse"],
                    ["waerme", "Wärme"],
                    ["elektrische-berechnung", "Elektrische Berechnung"]
                ]
            ),
            {
                id: "qualitaet-risiko",
                name: "Qualität & Risikoanalyse",
                grundlagen: {
                    rollen: [
                        "Qualitäts- und Risikoingenieur"
                    ],
                    ziele: [],
                    kontextHinweise: [],
                    anforderungen: [
                        "Bewertungskriterien und Datengrundlagen klar benennen."
                    ],
                    regeln: [
                        "Annahmen klar kennzeichnen.",
                        "Ohne belastbare Grundlage keine Risikowerte vergeben."
                    ],
                    ausgabeformate: [
                        "Nachvollziehbare Risikoanalyse in Tabellenform"
                    ],
                    ausgabeAls: [
                        "Excel (.xlsx)"
                    ]
                },
                unterkategorien: [
                    {
                        id: "design-fmea",
                        name: "Design-FMEA",
                        empfehlungen: {
                            rollen: [
                                "Design-FMEA-Moderator"
                            ],
                            ziele: [
                                "Eine klar gegliederte Design-FMEA erstellen.",
                                "Mögliche Produktfehler systematisch untersuchen.",
                                "Risiken anhand der vorgegebenen Bewertungsgrundlage bewerten.",
                                "Geeignete Maßnahmen zur Risikominderung ableiten.",
                                "Kritische Punkte übersichtlich hervorheben."
                            ],
                            kontextHinweise: [
                                "Produkt oder Baugruppe",
                                "Produktfunktionen",
                                "Einsatzbedingungen",
                                "Belastungen",
                                "bekannte Fehler",
                                "vorhandene Vermeidungsmaßnahmen",
                                "vorhandene Entdeckungsmaßnahmen",
                                "verwendete Bewertungsmatrix"
                            ],
                            anforderungen: [
                                "Funktionen systematisch betrachten.",
                                "Fehlerfolge, Fehlerart und Fehlerursache getrennt behandeln.",
                                "Vorhandene Vermeidungs- und Entdeckungsmaßnahmen berücksichtigen."
                            ],
                            besondersEmpfohleneAnforderungen: [
                                "Funktionen systematisch betrachten.",
                                "Fehlerfolge, Fehlerart und Fehlerursache getrennt behandeln.",
                                "Vorhandene Vermeidungs- und Entdeckungsmaßnahmen berücksichtigen."
                            ],
                            regeln: [
                                "Keine Risikobewertung ohne festgelegte Bewertungsgrundlage vornehmen.",
                                "Nicht bekannte Bewertungen und Nachweise als offen kennzeichnen."
                            ],
                            besondersEmpfohleneRegeln: [
                                "Keine technischen Werte oder Materialkennwerte erfinden.",
                                "Bekannte Fakten, Annahmen und Schlussfolgerungen klar trennen.",
                                "Ohne belastbare Grundlage keine Risikowerte vergeben."
                            ],
                            ausgabeformate: [
                                "FMEA-Tabelle mit Funktionen, Fehlern, Ursachen und Maßnahmen",
                                "FMEA-Tabelle",
                                "Risikotabelle"
                            ],
                            ausgabeAls: [
                                "Excel (.xlsx)",
                                "CSV (.csv)"
                            ]
                        }
                    },
                    unterkategorie(
                        "prozess-fmea",
                        "Prozess-FMEA",
                        HAUPTKATEGORIE_PROFILE["qualitaet-risiko"]
                    ),
                    unterkategorie(
                        "risikoanalyse",
                        "Risikoanalyse",
                        HAUPTKATEGORIE_PROFILE["qualitaet-risiko"]
                    ),
                    unterkategorie(
                        "fehlerbaumanalyse",
                        "Fehlerbaumanalyse",
                        HAUPTKATEGORIE_PROFILE["qualitaet-risiko"]
                    ),
                    unterkategorie(
                        "pruefplanung",
                        "Prüfplanung",
                        HAUPTKATEGORIE_PROFILE["qualitaet-risiko"]
                    ),
                    unterkategorie(
                        "qualitaetspruefung",
                        "Qualitätsprüfung",
                        HAUPTKATEGORIE_PROFILE["qualitaet-risiko"]
                    )
                ]
            },
            hauptkategorie(
                "fehlersuche-ursachenanalyse",
                "Fehlersuche & Ursachenanalyse",
                [
                    ["fuenf-why", "5-Why"],
                    ["ishikawa", "Ishikawa"],
                    ["fehlerbild-analysieren", "Fehlerbild analysieren"],
                    ["versuch-planen", "Versuch planen"],
                    ["ursache-eingrenzen", "Ursache eingrenzen"]
                ]
            ),
            hauptkategorie(
                "technische-dokumentation",
                "Technische Dokumentation",
                [
                    ["technische-beschreibung", "Technische Beschreibung"],
                    ["spezifikation", "Spezifikation"],
                    ["lastenheft", "Lastenheft"],
                    ["pflichtenheft", "Pflichtenheft"],
                    ["bedienungsanleitung", "Bedienungsanleitung"],
                    ["pruefbericht", "Prüfbericht"]
                ]
            ),
            hauptkategorie(
                "normgerechte-entwicklung",
                "Normgerechte Entwicklung",
                [
                    ["normenrecherche", "Normenrecherche"],
                    ["anforderungen-ableiten", "Anforderungen ableiten"],
                    ["konformitaet", "Konformität"],
                    ["pruefkriterien", "Prüfkriterien"],
                    ["technische-richtlinien", "Technische Richtlinien"]
                ]
            )
        ]
    });
})(globalThis);
