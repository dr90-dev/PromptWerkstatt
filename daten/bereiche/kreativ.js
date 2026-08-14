(function (global) {
    "use strict";

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
                    {
                        id: "basteln-mit-kindern",
                        name: "Basteln mit Kindern",
                        empfehlungen: {
                            rollen: [
                                "Pädagogischer Bastelbegleiter"
                            ],
                            anforderungen: [
                                "Alter der Kinder und benötigte Aufsicht berücksichtigen.",
                                "Einfache Alternativen für schwierige Arbeitsschritte nennen.",
                                "Vorbereitungs- und Aufräumaufwand angeben."
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
                    }
                ]
            }
        ]
    });
})(globalThis);
