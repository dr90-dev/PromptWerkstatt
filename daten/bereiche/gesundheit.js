(function (global) {
    "use strict";

    const HAUPTKATEGORIE_PROFILE = {
        "fitness-training": ["training-bewegung-planen"],
        "sport": ["training-bewegung-planen"],
        "bewegung-mobility": ["training-bewegung-planen"],
        "gewohnheiten-motivation": ["gewohnheiten-wohlbefinden"],
        "schlaf-erholung": ["gewohnheiten-wohlbefinden"],
        "wohlbefinden": ["gewohnheiten-wohlbefinden"],
        "gesundheitsinformationen": ["gesundheit-informationen-einordnen"]
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
        id: "gesundheit",
        name: "Gesundheit, Sport & Wohlbefinden",
        icon: "🏃",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Vorsichtiger Gesundheits- und Wohlbefindensbegleiter"
            ],
            anforderungen: [
                "Persönliche Voraussetzungen, Grenzen und vorhandene fachliche Hinweise berücksichtigen."
            ],
            regeln: [
                "Keine Diagnose, individuelle Behandlung oder Medikamentenänderung vorgeben.",
                "Akute Beschwerden oder Warnzeichen nicht verharmlosen und professionelle Hilfe nicht verzögern.",
                "Keine sichere Wirkung oder Heilung versprechen."
            ],
            ausgabeformate: [],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        },
        parameter: [
            {
                id: "trainingsniveau",
                name: "Trainingsniveau",
                typ: "select",
                optionen: [
                    { id: "anfaenger", name: "Anfänger" },
                    { id: "fortgeschritten", name: "Fortgeschritten" },
                    { id: "erfahren", name: "Erfahren" }
                ]
            },
            {
                id: "trainingsziel",
                name: "Trainingsziel",
                typ: "select",
                optionen: [
                    { id: "allgemeine-fitness", name: "Allgemeine Fitness" },
                    { id: "kraft", name: "Kraft" },
                    { id: "ausdauer", name: "Ausdauer" },
                    { id: "beweglichkeit", name: "Beweglichkeit" }
                ]
            }
        ],
        hauptkategorien: [
            hauptkategorie(
                "fitness-training",
                "Fitness & Training",
                [
                    ["trainingsplan", "Trainingsplan"],
                    ["krafttraining", "Krafttraining"],
                    ["ausdauer", "Ausdauer"],
                    ["ganzkoerpertraining", "Ganzkörpertraining"],
                    ["zuhause-trainieren", "Zuhause trainieren"],
                    ["fitnessstudio", "Fitnessstudio"],
                    ["trainingsroutine", "Trainingsroutine"]
                ]
            ),
            hauptkategorie(
                "sport",
                "Sport",
                [
                    ["lauftraining", "Lauftraining"],
                    ["radfahren", "Radfahren"],
                    ["wandern", "Wandern"],
                    ["teamsport", "Teamsport"],
                    ["schwimmen", "Schwimmen"],
                    ["sportartspezifisches-training", "Sportartspezifisches Training"]
                ]
            ),
            hauptkategorie(
                "bewegung-mobility",
                "Bewegung & Mobility",
                [
                    ["beweglichkeit", "Beweglichkeit"],
                    ["dehnen", "Dehnen"],
                    ["mobility-routine", "Mobility-Routine"],
                    ["haltung-bewegung", "Haltung & Bewegung"],
                    ["aufwaermen", "Aufwärmen"],
                    ["regeneration", "Regeneration"]
                ]
            ),
            hauptkategorie(
                "gewohnheiten-motivation",
                "Gewohnheiten & Motivation",
                [
                    ["motivation", "Motivation"],
                    ["routine-aufbauen", "Routine aufbauen"],
                    ["ziele-setzen", "Ziele setzen"],
                    ["fortschritt-verfolgen", "Fortschritt verfolgen"],
                    ["dranbleiben", "Dranbleiben"]
                ]
            ),
            hauptkategorie(
                "schlaf-erholung",
                "Schlaf & Erholung",
                [
                    ["schlafroutine", "Schlafroutine"],
                    ["abendroutine", "Abendroutine"],
                    ["erholung", "Erholung"],
                    ["regeneration", "Regeneration"],
                    ["stress-reduzieren", "Stress reduzieren"]
                ]
            ),
            hauptkategorie(
                "wohlbefinden",
                "Wohlbefinden",
                [
                    ["entspannung", "Entspannung"],
                    ["work-life-balance", "Work-Life-Balance"],
                    ["achtsamkeit", "Achtsamkeit"],
                    ["tagesroutine", "Tagesroutine"],
                    ["selbstfuersorge", "Selbstfürsorge"]
                ]
            ),
            hauptkategorie(
                "gesundheitsinformationen",
                "Gesundheitsinformationen",
                [
                    ["symptome-allgemein-erklaeren", "Symptome allgemein erklären"],
                    ["medizinische-begriffe-erklaeren", "Medizinische Begriffe erklären"],
                    ["arztbesuch-vorbereiten", "Arztbesuch vorbereiten"],
                    ["fragen-fuer-arzt-erstellen", "Fragen für Arzt erstellen"],
                    ["untersuchung-befund-verstaendlich-erklaeren", "Untersuchung & Befund verständlich erklären"]
                ]
            )
        ]
    });
})(globalThis);
