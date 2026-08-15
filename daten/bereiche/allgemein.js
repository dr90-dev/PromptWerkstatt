(function (global) {
    "use strict";

    function hauptkategorie(
        id,
        name,
        eintraege,
        profilIds = []
    ) {
        return {
            id: id,
            name: name,
            profilIds: [
                ...profilIds
            ],
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
                ]
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
                    ["uebersicht-tabelle", "Übersicht & Tabelle"],
                    ["ablaufplan", "Ablaufplan"]
                ]
            ),
            hauptkategorie(
                "behoerden-alltagspapierkram",
                "Behörden & Alltagspapierkram",
                [
                    ["formular-verstehen", "Formular verstehen"],
                    ["schreiben-verstehen", "Schreiben verstehen"],
                    ["antrag-vorbereiten", "Antrag vorbereiten"],
                    ["unterlagen-zusammenstellen", "Unterlagen zusammenstellen"],
                    ["behoerdengang-vorbereiten", "Behördengang vorbereiten"]
                ]
            )
        ]
    });
})(globalThis);
