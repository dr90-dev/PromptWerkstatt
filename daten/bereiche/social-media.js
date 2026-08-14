(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "social-media",
        name: "Social Media, Creator & Influencer",
        icon: "📱",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Social-Media-Stratege"
            ],
            anforderungen: [
                "Zielgruppe, Plattform und Kommunikationsziel berücksichtigen.",
                "Inhalte für das gewählte Veröffentlichungsformat optimieren."
            ],
            regeln: [
                "Keine unbelegten Leistungs- oder Erfolgsversprechen formulieren.",
                "Werbliche Aussagen und erforderliche Kennzeichnungen berücksichtigen."
            ],
            ausgabeformate: [
                "Veröffentlichungsfertiger Content-Entwurf"
            ],
            ausgabeAls: [
                "Text",
                "Markdown (.md)"
            ]
        },
        parameter: [
            {
                id: "plattform",
                name: "Plattform",
                typ: "select",
                optionen: [
                    { id: "instagram", name: "Instagram" },
                    { id: "tiktok", name: "TikTok" },
                    { id: "youtube", name: "YouTube" },
                    { id: "linkedin", name: "LinkedIn" },
                    { id: "facebook", name: "Facebook" }
                ]
            }
        ],
        hauptkategorien: [
            {
                id: "kurzvideos-reels",
                name: "Kurzvideos & Reels",
                grundlagen: {
                    rollen: [
                        "Kurzvideo-Redakteur"
                    ],
                    anforderungen: [
                        "Mit einem klaren Einstieg beginnen.",
                        "Szenen und Aussagen zeitlich nachvollziehbar gliedern."
                    ],
                    regeln: [
                        "Die Aufmerksamkeit nicht mit irreführenden Behauptungen erzeugen."
                    ],
                    ausgabeformate: [
                        "Szenenfolge mit Sprechertext"
                    ],
                    ausgabeAls: []
                },
                unterkategorien: [
                    {
                        id: "videoskript",
                        name: "Videoskript",
                        empfehlungen: {
                            rollen: [
                                "Autor für vertikale Kurzvideos"
                            ],
                            anforderungen: [
                                "Hook, Hauptteil und Handlungsaufforderung klar trennen.",
                                "Pro Szene Bildidee, Sprechertext und ungefähre Dauer angeben.",
                                "Sprache und Länge an die gewählte Plattform anpassen."
                            ],
                            regeln: [
                                "Keine nicht belegten Fakten in den Sprechertext aufnehmen.",
                                "Musik-, Bild- und Markenrechte nicht als automatisch geklärt darstellen."
                            ],
                            ausgabeformate: [
                                "Tabelle mit Szene, Bild, Sprechertext und Dauer"
                            ],
                            ausgabeAls: [
                                "Markdown (.md)",
                                "CSV (.csv)"
                            ]
                        }
                    }
                ]
            }
        ]
    });
})(globalThis);
