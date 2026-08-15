(function (global) {
    "use strict";

    function empfehlungslisten(
        werte = {}
    ) {
        return {
            rollen: [
                ...(werte.rollen || [])
            ],
            ziele: [
                ...(werte.ziele || [])
            ],
            kontextHinweise: [
                ...(werte.kontextHinweise || [])
            ],
            anforderungen: [
                ...(werte.anforderungen || [])
            ],
            besondersEmpfohleneAnforderungen: [
                ...(werte.besondersEmpfohleneAnforderungen || [])
            ],
            regeln: [
                ...(werte.regeln || [])
            ],
            besondersEmpfohleneRegeln: [
                ...(werte.besondersEmpfohleneRegeln || [])
            ],
            ausgabeformate: [
                ...(werte.ausgabeformate || [])
            ],
            ausgabeAls: [
                ...(werte.ausgabeAls || [])
            ]
        };
    }

    function hauptkategorie(
        id,
        name,
        eintraege,
        profilIds = [],
        grundlagen = {}
    ) {
        return {
            id: id,
            name: name,
            profilIds: [
                ...profilIds
            ],
            grundlagen:
                empfehlungslisten(
                    grundlagen
                ),
            unterkategorien:
                eintraege.map(
                    function ([
                        unterId,
                        unterName,
                        empfehlungen = {}
                    ]) {
                        return {
                            id: unterId,
                            name: unterName,
                            empfehlungen:
                                empfehlungslisten(
                                    empfehlungen
                                )
                        };
                    }
                )
        };
    }

    global.PromptWerkstattDatenV2.bereichRegistrieren({
        id: "allgemein",
        name: "Allgemein & Alltag",
        icon: "🧭",
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
                "alltag-organisieren",
                "Alltag organisieren",
                [
                    ["tagesplanung", "Tagesplanung"],
                    ["wochenplanung", "Wochenplanung"],
                    ["termine-organisieren", "Termine organisieren"],
                    ["aufgaben-priorisieren", "Aufgaben priorisieren"],
                    ["routinen-erstellen", "Routinen erstellen"],
                    ["haushalt-privates-koordinieren", "Haushalt & Privates koordinieren"]
                ],
                [
                    "planen-organisieren"
                ],
                {
                    kontextHinweise: [
                        "Welche Termine und festen Verpflichtungen gibt es bereits?"
                    ],
                    anforderungen: [
                        "Pufferzeiten einplanen und auf eine realistische tägliche Belastung achten."
                    ]
                }
            ),
            hauptkategorie(
                "planen-vorbereiten",
                "Planen & Vorbereiten",
                [
                    ["veranstaltung-planen", "Veranstaltung planen"],
                    ["umzug-planen", "Umzug planen"],
                    ["einkauf-vorbereiten", "Einkauf vorbereiten"],
                    ["besuch-gaeste-vorbereiten", "Besuch & Gäste vorbereiten"],
                    ["alltagsprojekt-planen", "Alltagsprojekt planen"],
                    ["schritt-fuer-schritt-plan", "Schritt-für-Schritt-Plan"]
                ],
                [
                    "planen-organisieren"
                ]
            ),
            hauptkategorie(
                "entscheidungen-vergleiche",
                "Entscheidungen & Vergleiche",
                [
                    ["produkte-vergleichen", "Produkte vergleichen"],
                    ["angebote-vergleichen", "Angebote vergleichen"],
                    ["vor-nachteile", "Vor- & Nachteile"],
                    ["entscheidungsmatrix", "Entscheidungsmatrix"],
                    ["kaufentscheidung", "Kaufentscheidung"],
                    ["alternativen-bewerten", "Alternativen bewerten"]
                ],
                [
                    "vergleichen-entscheiden"
                ]
            ),
            hauptkategorie(
                "recherche-informationen",
                "Recherche & Informationen",
                [
                    ["thema-recherchieren", "Thema recherchieren"],
                    ["fakten-sammeln", "Fakten sammeln"],
                    ["quellen-vergleichen", "Quellen vergleichen"],
                    ["produktrecherche", "Produktrecherche"],
                    ["anbieter-recherchieren", "Anbieter recherchieren"],
                    ["informationen-strukturieren", "Informationen strukturieren"]
                ],
                [
                    "recherchieren-quellen"
                ]
            ),
            hauptkategorie(
                "ideen-problemloesung",
                "Ideen & Problemlösung",
                [
                    ["ideen-sammeln", "Ideen sammeln"],
                    ["brainstorming", "Brainstorming"],
                    ["alternativen-finden", "Alternativen finden"],
                    ["problem-analysieren", "Problem analysieren"],
                    ["loesungsvorschlaege", "Lösungsvorschläge"],
                    ["verbesserungsmoeglichkeiten", "Verbesserungsmöglichkeiten"]
                ],
                [
                    "ideen-problemloesung"
                ]
            ),
            hauptkategorie(
                "checklisten-uebersichten",
                "Checklisten & Übersichten",
                [
                    ["checkliste-erstellen", "Checkliste erstellen"],
                    ["packliste", "Packliste"],
                    ["einkaufsliste", "Einkaufsliste"],
                    ["to-do-liste", "To-do-Liste"],
                    [
                        "uebersicht-tabelle",
                        "Übersicht & Tabelle",
                        {
                            ausgabeAls: [
                                "Excel (.xlsx)"
                            ]
                        }
                    ],
                    ["ablaufplan", "Ablaufplan"]
                ],
                [
                    "strukturieren-checklisten"
                ]
            ),
            hauptkategorie(
                "behoerden-alltagspapierkram",
                "Behörden & Alltagspapierkram",
                [
                    [
                        "formular-verstehen",
                        "Formular verstehen",
                        {
                            ziele: [
                                "Das Formular Schritt für Schritt verstehen und erkennen, welche Angaben ich machen muss."
                            ],
                            kontextHinweise: [
                                "Welche Felder oder Abschnitte des Formulars sind unklar?"
                            ],
                            anforderungen: [
                                "Unklare Begriffe und Felder in einfacher Sprache erklären."
                            ],
                            ausgabeformate: [
                                "Erklärung Abschnitt für Abschnitt"
                            ]
                        }
                    ],
                    [
                        "schreiben-verstehen",
                        "Schreiben verstehen",
                        {
                            ziele: [
                                "Ein Schreiben verständlich zusammenfassen und erkennen, was ich tun muss oder was noch unklar ist."
                            ],
                            kontextHinweise: [
                                "Welcher Wortlaut oder welche Abschnitte des Schreibens sind wichtig?"
                            ],
                            anforderungen: [
                                "Geforderte Schritte, mögliche Rückfragen und erkennbare Fristen getrennt darstellen."
                            ],
                            ausgabeformate: [
                                "Verständliche Zusammenfassung mit nächsten Schritten"
                            ]
                        }
                    ],
                    [
                        "antrag-vorbereiten",
                        "Antrag vorbereiten",
                        {
                            ausgabeformate: [
                                "Vorbereitungsentwurf für den Antrag"
                            ]
                        }
                    ],
                    ["unterlagen-zusammenstellen", "Unterlagen zusammenstellen"],
                    ["behoerdengang-vorbereiten", "Behördengang vorbereiten"]
                ],
                [
                    "unterlagen-antraege"
                ]
            )
        ]
    });
})(globalThis);
