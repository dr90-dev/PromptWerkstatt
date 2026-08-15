(function (global) {
    "use strict";

    const HAUPTKATEGORIE_PROFILE = {
        "reiseplanung": ["reise-freizeit-planen"],
        "reiseziele-sehenswuerdigkeiten": ["reise-freizeit-planen"],
        "restaurants-food-spots": ["reise-freizeit-planen"],
        "ausfluege-aktivitaeten": ["reise-freizeit-planen"],
        "veranstaltungen-freizeit": ["reise-freizeit-planen"],
        "fotografie": ["ideen-kreativ-entwickeln"],
        "hobbys-persoenliche-projekte": ["ideen-kreativ-entwickeln"]
    };

    function hauptkategorie(
        id,
        name,
        eintraege
    ) {
        return {
            id: id,
            name: name,
            profilIds: HAUPTKATEGORIE_PROFILE[id],
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
        id: "freizeit",
        name: "Freizeit, Reisen & Hobbys",
        icon: "✈️",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Freizeit- und Reiseplaner"
            ],
            anforderungen: [
                "Interessen, Zeitraum, Ort und Budget angemessen berücksichtigen."
            ],
            regeln: [
                "Öffnungszeiten, Preise, Verfügbarkeit und Reisehinweise nicht erfinden.",
                "Zeitabhängige Angaben vor der Nutzung über aktuelle Quellen prüfen lassen."
            ],
            ausgabeformate: [],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        },
        parameter: [],
        hauptkategorien: [
            hauptkategorie(
                "reiseplanung",
                "Reiseplanung",
                [
                    ["staedtereise", "Städtereise"],
                    ["rundreise", "Rundreise"],
                    ["wochenendtrip", "Wochenendtrip"],
                    ["familienreise", "Familienreise"],
                    ["roadtrip", "Roadtrip"],
                    ["tagesplanung", "Tagesplanung"]
                ]
            ),
            hauptkategorie(
                "reiseziele-sehenswuerdigkeiten",
                "Reiseziele & Sehenswürdigkeiten",
                [
                    ["sehenswuerdigkeiten", "Sehenswürdigkeiten"],
                    ["geheimtipps", "Geheimtipps"],
                    ["fotospots", "Fotospots"],
                    ["kultur", "Kultur"],
                    ["natur", "Natur"],
                    ["highlights", "Highlights"]
                ]
            ),
            hauptkategorie(
                "restaurants-food-spots",
                "Restaurants & Food-Spots",
                [
                    ["restaurants", "Restaurants"],
                    ["cafes", "Cafés"],
                    ["bars", "Bars"],
                    ["streetfood", "Streetfood"],
                    ["regionale-spezialitaeten", "Regionale Spezialitäten"],
                    ["fruehstueck", "Frühstück"]
                ]
            ),
            hauptkategorie(
                "ausfluege-aktivitaeten",
                "Ausflüge & Aktivitäten",
                [
                    ["tagesausflug", "Tagesausflug"],
                    ["outdoor", "Outdoor"],
                    ["indoor", "Indoor"],
                    ["familienaktivitaeten", "Familienaktivitäten"],
                    ["schlechtwetterprogramm", "Schlechtwetterprogramm"]
                ]
            ),
            hauptkategorie(
                "veranstaltungen-freizeit",
                "Veranstaltungen & Freizeit",
                [
                    ["events", "Events"],
                    ["konzerte", "Konzerte"],
                    ["maerkte", "Märkte"],
                    ["festivals", "Festivals"],
                    ["abendprogramm", "Abendprogramm"]
                ]
            ),
            hauptkategorie(
                "fotografie",
                "Fotografie",
                [
                    ["landschaft", "Landschaft"],
                    ["street", "Street"],
                    ["portrait", "Portrait"],
                    ["reisefotografie", "Reisefotografie"],
                    ["fotoideen", "Fotoideen"],
                    ["fotospots", "Fotospots"]
                ]
            ),
            hauptkategorie(
                "hobbys-persoenliche-projekte",
                "Hobbys & persönliche Projekte",
                [
                    ["neues-hobby-finden", "Neues Hobby finden"],
                    ["hobby-vertiefen", "Hobby vertiefen"],
                    ["projektideen", "Projektideen"],
                    ["sammeln", "Sammeln"],
                    ["kreative-freizeit", "Kreative Freizeit"]
                ]
            )
        ]
    });
})(globalThis);
