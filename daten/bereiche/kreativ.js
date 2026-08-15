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
        id: "kreativ",
        name: "Kreativ, Basteln & DIY",
        icon: "🎨",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Kreativpädagoge",
                "DIY-Berater"
            ],
            ziele: [],
            kontextHinweise: [],
            anforderungen: [
                "Materialien und Werkzeuge klar benennen.",
                "Arbeitsschritte nachvollziehbar strukturieren."
            ],
            regeln: [
                "Sicherheits- und Altershinweise berücksichtigen.",
                "Keine ungeprüften Materialeigenschaften behaupten."
            ],
            ausgabeformate: [
                "Schritt-für-Schritt-Anleitung",
                "Materialliste mit Arbeitsschritten"
            ],
            ausgabeAls: [
                "Text",
                "Markdown (.md)"
            ]
        },
        parameter: [],
        hauptkategorien: [
            {
                id: "basteln-gestalten",
                name: "Basteln & Gestalten",
                grundlagen: {
                    rollen: [
                        "Bastel- und Gestaltungspädagoge"
                    ],
                    ziele: [],
                    kontextHinweise: [],
                    anforderungen: [
                        "Schwierigkeitsgrad und benötigte Zeit angeben."
                    ],
                    regeln: [
                        "Klebe-, Schneid- und Hitzearbeiten sicher erläutern."
                    ],
                    ausgabeformate: [
                        "Materialliste und nummerierte Anleitung"
                    ],
                    ausgabeAls: []
                },
                unterkategorien: [
                    unterkategorie(
                        "basteln-mit-papier",
                        "Basteln mit Papier"
                    ),
                    {
                        id: "basteln-mit-kindern",
                        name: "Basteln mit Kindern",
                        empfehlungen: {
                            rollen: [
                                "Pädagogischer Bastelbegleiter"
                            ],
                            ziele: [
                                "Eine altersgerechte Bastelidee entwickeln.",
                                "Eine Schritt-für-Schritt-Bastelanleitung erstellen."
                            ],
                            kontextHinweise: [
                                "Alter der Kinder",
                                "verfügbare Materialien",
                                "gewünschte Basteldauer",
                                "notwendige Hilfe durch Erwachsene"
                            ],
                            anforderungen: [
                                "Alter der Kinder und benötigte Aufsicht berücksichtigen.",
                                "Einfache Alternativen für schwierige Arbeitsschritte nennen.",
                                "Vorbereitungs- und Aufräumaufwand angeben."
                            ],
                            besondersEmpfohleneAnforderungen: [
                                "Materialien und Werkzeuge klar benennen.",
                                "Arbeitsschritte nachvollziehbar strukturieren.",
                                "Alter der Kinder und benötigte Aufsicht berücksichtigen."
                            ],
                            regeln: [
                                "Nur altersgerechte Materialien und Werkzeuge empfehlen.",
                                "Erstickungs-, Schnitt- und Verbrennungsgefahren klar benennen."
                            ],
                            ausgabeformate: [
                                "Altersgerechte Anleitung mit Materialliste und Sicherheitshinweisen"
                            ],
                            ausgabeAls: [
                                "PDF (.pdf)",
                                "Markdown (.md)"
                            ]
                        }
                    },
                    unterkategorie(
                        "saisonales-basteln",
                        "Saisonales Basteln"
                    ),
                    unterkategorie(
                        "karten-einladungen",
                        "Karten & Einladungen"
                    ),
                    unterkategorie(
                        "einfache-bastelprojekte",
                        "Einfache Bastelprojekte"
                    ),
                    unterkategorie(
                        "basteln-mit-naturmaterialien",
                        "Basteln mit Naturmaterialien"
                    )
                ]
            },
            hauptkategorie(
                "dekoration",
                "Dekoration",
                [
                    ["tischdekoration", "Tischdekoration"],
                    ["saisonale-dekoration", "Saisonale Dekoration"],
                    ["wohnungsdekoration", "Wohnungsdekoration"],
                    ["party-dekoration", "Party-Dekoration"],
                    ["weihnachtsdekoration", "Weihnachtsdekoration"],
                    ["diy-dekoration", "DIY-Dekoration"]
                ]
            ),
            hauptkategorie(
                "geschenkideen",
                "Geschenkideen",
                [
                    ["persoenliche-geschenke", "Persönliche Geschenke"],
                    ["last-minute-geschenke", "Last-Minute-Geschenke"],
                    ["selbstgemachte-geschenke", "Selbstgemachte Geschenke"],
                    ["geschenke-fuer-kinder", "Geschenke für Kinder"],
                    ["geschenke-fuer-partner-familie", "Geschenke für Partner & Familie"]
                ]
            ),
            hauptkategorie(
                "handarbeit",
                "Handarbeit",
                [
                    ["naehen", "Nähen"],
                    ["stricken", "Stricken"],
                    ["haekeln", "Häkeln"],
                    ["sticken", "Sticken"],
                    ["einfache-handarbeitsprojekte", "Einfache Handarbeitsprojekte"]
                ]
            ),
            hauptkategorie(
                "heimwerken-reparieren",
                "Heimwerken & Reparieren",
                [
                    ["kleine-reparaturen", "Kleine Reparaturen"],
                    ["holzprojekte", "Holzprojekte"],
                    ["moebel-aufarbeiten", "Möbel aufarbeiten"],
                    ["bohren-befestigen", "Bohren & Befestigen"],
                    ["einfache-renovierungsarbeiten", "Einfache Renovierungsarbeiten"]
                ]
            ),
            hauptkategorie(
                "upcycling",
                "Upcycling",
                [
                    ["moebel-upcycling", "Möbel-Upcycling"],
                    ["verpackungen-wiederverwenden", "Verpackungen wiederverwenden"],
                    ["dekoration-aus-altmaterial", "Dekoration aus Altmaterial"],
                    ["kleidung-umgestalten", "Kleidung umgestalten"]
                ]
            ),
            hauptkategorie(
                "kreative-projekte-ideen",
                "Kreative Projekte & Ideen",
                [
                    ["ideenfindung", "Ideenfindung"],
                    ["moodboard", "Moodboard"],
                    ["kreative-konzepte", "Kreative Konzepte"],
                    ["hobbyprojekt-planen", "Hobbyprojekt planen"],
                    ["materialideen", "Materialideen"]
                ]
            )
        ]
    });
})(globalThis);
