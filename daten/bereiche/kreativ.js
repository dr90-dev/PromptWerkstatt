(function (global) {
    "use strict";

    const HAUPTKATEGORIE_PROFILE = {
        "basteln-gestalten": ["anleitung-sicher-umsetzen"],
        "dekoration": ["ideen-kreativ-entwickeln"],
        "geschenkideen": ["ideen-kreativ-entwickeln"],
        "handarbeit": ["anleitung-sicher-umsetzen"],
        "heimwerken-reparieren": ["anleitung-sicher-umsetzen"],
        "upcycling": ["anleitung-sicher-umsetzen"],
        "kreative-projekte-ideen": ["ideen-kreativ-entwickeln"]
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
            grundlagen: {
                rollen: [],
                ziele: [],
                kontextHinweise: [],
                anforderungen: [],
                besondersEmpfohleneAnforderungen: [],
                regeln: [],
                besondersEmpfohleneRegeln: [],
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
                "Kreativbegleiter",
                "DIY-Helfer"
            ],
            ziele: [],
            kontextHinweise: [],
            anforderungen: [
                "Materialien und Werkzeuge klar benennen."
            ],
            regeln: [
                "Sicherheits- und Altershinweise beachten.",
                "Keine Materialeigenschaften behaupten, die nicht geprüft sind."
            ],
            ausgabeformate: [
                "Schritt-für-Schritt-Anleitung",
                "Materialliste mit Arbeitsschritten"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        },
        parameter: [],
        hauptkategorien: [
            {
                id: "basteln-gestalten",
                name: "Basteln & Gestalten",
                grundlagen: {
                    rollen: [
                        "Bastel- und Gestaltungsexperte"
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
                        "Basteln mit Papier",
                        HAUPTKATEGORIE_PROFILE["basteln-gestalten"]
                    ),
                    {
                        id: "basteln-mit-kindern",
                        name: "Basteln mit Kindern",
                        empfehlungen: {
                            rollen: [
                                "Bastelbegleiter für Kinder"
                            ],
                            ziele: [
                                "Eine altersgerechte Bastelidee finden.",
                                "Eine Schritt-für-Schritt-Bastelanleitung erstellen.",
                                "Geeignete Materialien und Werkzeuge zusammenstellen.",
                                "Die Bastelidee an Alter, Zeit und vorhandene Materialien anpassen."
                            ],
                            kontextHinweise: [
                                "Wie alt sind die Kinder?",
                                "Welche Materialien sind verfügbar?",
                                "Wie lange soll das Basteln dauern?",
                                "Wobei können Erwachsene helfen?"
                            ],
                            anforderungen: [
                                "Alter der Kinder und nötige Aufsicht berücksichtigen.",
                                "Die Arbeitsschritte in einer verständlichen Reihenfolge erklären.",
                                "Einfache Alternativen für schwierige Arbeitsschritte nennen.",
                                "Zeit für Vorbereitung und Aufräumen angeben."
                            ],
                            besondersEmpfohleneAnforderungen: [
                                "Materialien und Werkzeuge klar benennen.",
                                "Die Arbeitsschritte in einer verständlichen Reihenfolge erklären.",
                                "Alter der Kinder und nötige Aufsicht berücksichtigen."
                            ],
                            regeln: [
                                "Nur altersgerechte Materialien und Werkzeuge empfehlen.",
                                "Erstickungs-, Schnitt- und Verbrennungsgefahren klar benennen."
                            ],
                            besondersEmpfohleneRegeln: [
                                "Nur altersgerechte Materialien und Werkzeuge empfehlen.",
                                "Erstickungs-, Schnitt- und Verbrennungsgefahren klar benennen."
                            ],
                            ausgabeformate: [
                                "Altersgerechte Anleitung mit Materialliste und Sicherheitshinweisen"
                            ],
                            ausgabeAls: [
                                "PDF (.pdf)"
                            ]
                        }
                    },
                    unterkategorie(
                        "saisonales-basteln",
                        "Saisonales Basteln",
                        HAUPTKATEGORIE_PROFILE["basteln-gestalten"]
                    ),
                    unterkategorie(
                        "karten-einladungen",
                        "Karten & Einladungen",
                        HAUPTKATEGORIE_PROFILE["basteln-gestalten"]
                    ),
                    unterkategorie(
                        "einfache-bastelprojekte",
                        "Einfache Bastelprojekte",
                        HAUPTKATEGORIE_PROFILE["basteln-gestalten"]
                    ),
                    unterkategorie(
                        "basteln-mit-naturmaterialien",
                        "Basteln mit Naturmaterialien",
                        HAUPTKATEGORIE_PROFILE["basteln-gestalten"]
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
