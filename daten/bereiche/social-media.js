(function (global) {
    "use strict";

    function unterkategorie(
        id,
        name
    ) {
        return {
            id: id,
            name: name,
            empfehlungen: {
                rollen: [],
                ziele: [],
                kontextHinweise: [],
                anforderungen: [],
                besondersEmpfohleneAnforderungen: [],
                regeln: [],
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
            grundlagen: {
                rollen: [],
                ziele: [],
                kontextHinweise: [],
                anforderungen: [],
                besondersEmpfohleneAnforderungen: [],
                regeln: [],
                ausgabeformate: [],
                ausgabeAls: []
            },
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
        id: "social-media",
        name: "Social Media, Creator & Influencer",
        icon: "📱",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Social-Media-Stratege"
            ],
            ziele: [],
            kontextHinweise: [],
            anforderungen: [
                "Zielgruppe, Plattform und gewünschte Wirkung berücksichtigen.",
                "Die Inhalte an das gewählte Veröffentlichungsformat anpassen."
            ],
            regeln: [
                "Keine unbelegten Leistungs- oder Erfolgsversprechen machen.",
                "Werbliche Aussagen und nötige Kennzeichnungen beachten."
            ],
            ausgabeformate: [
                "Veröffentlichungsfertiger Entwurf"
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
            hauptkategorie(
                "content-ideen",
                "Content-Ideen",
                [
                    ["themenideen", "Themenideen"],
                    ["serienformate", "Serienformate"],
                    ["trend-ideen", "Trend-Ideen"],
                    ["content-pillars", "Content-Pillars"],
                    ["saisonale-inhalte", "Saisonale Inhalte"]
                ]
            ),
            hauptkategorie(
                "posts-captions",
                "Posts & Captions",
                [
                    ["caption", "Caption"],
                    ["posttext", "Posttext"],
                    ["hook", "Hook"],
                    ["call-to-action", "Call-to-Action"],
                    ["hashtags", "Hashtags"],
                    ["story-text", "Story-Text"]
                ]
            ),
            {
                id: "kurzvideos-reels",
                name: "Kurzvideos & Reels",
                grundlagen: {
                    rollen: [
                        "Kurzvideo-Redakteur"
                    ],
                    ziele: [],
                    kontextHinweise: [],
                    anforderungen: [
                        "Mit einem klaren Einstieg beginnen.",
                        "Szenen und Aussagen in einer klaren zeitlichen Reihenfolge anordnen."
                    ],
                    regeln: [
                        "Keine Aufmerksamkeit mit irreführenden Behauptungen erzeugen."
                    ],
                    ausgabeformate: [
                        "Szenenfolge mit Sprechertext"
                    ],
                    ausgabeAls: []
                },
                unterkategorien: [
                    unterkategorie(
                        "reel-idee",
                        "Reel-Idee"
                    ),
                    unterkategorie(
                        "tiktok-idee",
                        "TikTok-Idee"
                    ),
                    unterkategorie(
                        "youtube-short",
                        "YouTube Short"
                    ),
                    {
                        id: "videoskript",
                        name: "Videoskript",
                        empfehlungen: {
                            rollen: [
                                "Autor für vertikale Kurzvideos"
                            ],
                            ziele: [
                                "Ein kompaktes Kurzvideo-Skript erstellen.",
                                "Einen klaren Ablauf für die Szenen erstellen."
                            ],
                            kontextHinweise: [
                                "Für welche Plattform ist das Video?",
                                "Wer ist die Zielgruppe?",
                                "Wie lang soll das Video sein?",
                                "Worum geht es?",
                                "Welche Handlungsaufforderung (Call-to-Action) soll enthalten sein?"
                            ],
                            anforderungen: [
                                "Hook, Hauptteil und Handlungsaufforderung klar voneinander trennen.",
                                "Für jede Szene Bildidee, Sprechertext und ungefähre Dauer angeben.",
                                "Sprache und Länge an die Plattform anpassen."
                            ],
                            besondersEmpfohleneAnforderungen: [
                                "Zielgruppe, Plattform und gewünschte Wirkung berücksichtigen.",
                                "Mit einem klaren Einstieg beginnen.",
                                "Für jede Szene Bildidee, Sprechertext und ungefähre Dauer angeben."
                            ],
                            regeln: [
                                "Keine nicht belegten Fakten in den Sprechertext aufnehmen.",
                                "Nicht davon ausgehen, dass Musik-, Bild- und Markenrechte automatisch geklärt sind."
                            ],
                            ausgabeformate: [
                                "Tabelle mit Szene, Bild, Sprechertext und Dauer",
                                "Szenenplan",
                                "Strukturiertes Videoskript"
                            ],
                            ausgabeAls: [
                                "Markdown (.md)",
                                "CSV (.csv)"
                            ]
                        }
                    },
                    unterkategorie(
                        "szenenplan",
                        "Szenenplan"
                    ),
                    unterkategorie(
                        "video-hook",
                        "Video-Hook"
                    )
                ]
            },
            hauptkategorie(
                "content-planung",
                "Content-Planung",
                [
                    ["wochenplan", "Wochenplan"],
                    ["monatsplan", "Monatsplan"],
                    ["redaktionsplan", "Redaktionsplan"],
                    ["kampagne", "Kampagne"],
                    ["posting-rhythmus", "Posting-Rhythmus"]
                ]
            ),
            hauptkategorie(
                "community-interaktion",
                "Community & Interaktion",
                [
                    ["kommentare-beantworten", "Kommentare beantworten"],
                    ["community-fragen", "Community-Fragen"],
                    ["engagement-ideen", "Engagement-Ideen"],
                    ["umfragen", "Umfragen"]
                ]
            ),
            hauptkategorie(
                "kooperationen-sponsoring",
                "Kooperationen & Sponsoring",
                [
                    ["kooperationsanfrage", "Kooperationsanfrage"],
                    ["media-kit-inhalte", "Media-Kit-Inhalte"],
                    ["sponsoring-pitch", "Sponsoring-Pitch"],
                    ["markenansprache", "Markenansprache"]
                ]
            ),
            hauptkategorie(
                "personal-branding",
                "Personal Branding",
                [
                    ["positionierung", "Positionierung"],
                    ["profiltext", "Profiltext"],
                    ["bio", "Bio"],
                    ["markenstimme", "Markenstimme"],
                    ["themenprofil", "Themenprofil"]
                ]
            ),
            hauptkategorie(
                "wachstum-strategie",
                "Wachstum & Strategie",
                [
                    ["zielgruppenstrategie", "Zielgruppenstrategie"],
                    ["content-strategie", "Content-Strategie"],
                    ["reichweite", "Reichweite"],
                    ["themenanalyse", "Themenanalyse"],
                    ["konkurrenzanalyse", "Konkurrenzanalyse"]
                ]
            )
        ]
    });
})(globalThis);
