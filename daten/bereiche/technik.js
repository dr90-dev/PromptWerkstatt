(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "technik",
        name: "Technik & Engineering",
        icon: "⚙️",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Technischer Fachexperte"
            ],
            anforderungen: [
                "Technische Zusammenhänge nachvollziehbar und prüfbar darstellen."
            ],
            regeln: [
                "Keine technischen Werte oder Materialkennwerte erfinden.",
                "Annahmen klar kennzeichnen.",
                "Einheiten eindeutig angeben.",
                "Bekannte Fakten, Annahmen und Schlussfolgerungen sauber trennen."
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
            {
                id: "qualitaet-risiko",
                name: "Qualität & Risikoanalyse",
                grundlagen: {
                    rollen: [
                        "Qualitäts- und Risikoingenieur"
                    ],
                    anforderungen: [
                        "Bewertungskriterien und Datengrundlagen transparent benennen."
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
                            anforderungen: [
                                "Funktionen systematisch betrachten.",
                                "Fehlerfolge, Fehlerart und Fehlerursache getrennt behandeln.",
                                "Vorhandene Vermeidungs- und Entdeckungsmaßnahmen berücksichtigen."
                            ],
                            regeln: [
                                "Keine Risikobewertung ohne definierte Bewertungsgrundlage erfinden.",
                                "Unbekannte Bewertungen und Nachweise als offen markieren."
                            ],
                            ausgabeformate: [
                                "FMEA-Tabelle mit Funktionen, Fehlern, Ursachen und Maßnahmen"
                            ],
                            ausgabeAls: [
                                "Excel (.xlsx)",
                                "CSV (.csv)"
                            ]
                        }
                    }
                ]
            }
        ]
    });
})(globalThis);
