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
        profilIds,
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
        id: "schreiben",
        name: "Schreiben & Kommunikation",
        icon: "✍️",
        standardAktiv: true,
        grundlagen:
            empfehlungslisten(),
        parameter: [],
        hauptkategorien: [
            hauptkategorie(
                "e-mails",
                "E-Mails",
                [
                    ["geschaeftliche-anfrage", "Geschäftliche Anfrage"],
                    [
                        "antwort-auf-e-mail",
                        "Antwort auf E-Mail",
                        {
                            kontextHinweise: [
                                "Auf welche E-Mail möchtest du antworten?"
                            ]
                        }
                    ],
                    ["angebotsanfrage", "Angebotsanfrage"],
                    ["nachfrage-erinnerung", "Nachfrage & Erinnerung"],
                    [
                        "terminvereinbarung",
                        "Terminvereinbarung",
                        {
                            kontextHinweise: [
                                "Welche Termine oder Zeiträume kommen infrage?"
                            ]
                        }
                    ],
                    ["absage", "Absage"],
                    ["dankeschoen", "Dankeschön"]
                ],
                [
                    "schreiben-kommunizieren"
                ],
                {
                    ziele: [
                        "Eine E-Mail schreiben, in der das Anliegen schnell verständlich wird."
                    ],
                    anforderungen: [
                        "Einen passenden Betreff formulieren."
                    ],
                    ausgabeformate: [
                        "E-Mail-Entwurf",
                        "Kurze E-Mail-Version"
                    ]
                }
            ),
            hauptkategorie(
                "nachrichten-chats",
                "Nachrichten & Chats",
                [
                    ["whatsapp-nachricht", "WhatsApp-Nachricht"],
                    ["teams-slack", "Teams & Slack"],
                    ["private-nachricht", "Private Nachricht"],
                    ["kurze-antwort", "Kurze Antwort"],
                    ["hoefliche-erinnerung", "Höfliche Erinnerung"],
                    ["einladung", "Einladung"]
                ],
                [
                    "schreiben-kommunizieren"
                ],
                {
                    ziele: [
                        "Eine kurze Nachricht schreiben, die direkt und natürlich klingt."
                    ],
                    anforderungen: [
                        "Kurz, direkt und natürlich formulieren."
                    ],
                    ausgabeformate: [
                        "Kurze Nachricht",
                        "Antwort für einen Chat"
                    ]
                }
            ),
            hauptkategorie(
                "briefe-formelle-schreiben",
                "Briefe & formelle Schreiben",
                [
                    ["geschaeftsbrief", "Geschäftsbrief"],
                    [
                        "kuendigung",
                        "Kündigung",
                        {
                            kontextHinweise: [
                                "Welche Vertragsdaten und bekannten Fristen müssen berücksichtigt werden?"
                            ],
                            regeln: [
                                "Keine Wirksamkeit oder Kündigungsfrist behaupten, wenn sie nicht sicher bekannt ist."
                            ],
                            ausgabeformate: [
                                "Kündigungsschreiben"
                            ]
                        }
                    ],
                    ["anfrage", "Anfrage"],
                    [
                        "stellungnahme",
                        "Stellungnahme",
                        {
                            kontextHinweise: [
                                "Zu welchem Vorgang oder welcher Aussage möchtest du Stellung nehmen?"
                            ],
                            ausgabeformate: [
                                "Stellungnahme"
                            ]
                        }
                    ],
                    [
                        "anschreiben",
                        "Anschreiben",
                        {
                            ausgabeformate: [
                                "Anschreiben"
                            ]
                        }
                    ],
                    ["offizielles-schreiben", "Offizielles Schreiben"]
                ],
                [
                    "schreiben-kommunizieren"
                ],
                {
                    ziele: [
                        "Einen sachlichen und höflichen Brief mit klarem Anliegen schreiben."
                    ],
                    anforderungen: [
                        "Einen klaren formellen Aufbau verwenden."
                    ],
                    regeln: [
                        "Keine rechtlichen Aussagen, Fristen oder Folgen erfinden."
                    ],
                    ausgabeformate: [
                        "Briefentwurf",
                        "Versandfertiger Brief"
                    ]
                }
            ),
            hauptkategorie(
                "texte-verbessern-korrigieren",
                "Texte verbessern & korrigieren",
                [
                    [
                        "rechtschreibung",
                        "Rechtschreibung",
                        {
                            ziele: [
                                "Rechtschreibfehler in einem Text finden und korrigieren."
                            ]
                        }
                    ],
                    [
                        "grammatik",
                        "Grammatik",
                        {
                            ziele: [
                                "Grammatikfehler korrigieren und holprige Sätze verbessern."
                            ]
                        }
                    ],
                    [
                        "professioneller-formulieren",
                        "Professioneller formulieren",
                        {
                            ziele: [
                                "Einen Text klarer und professioneller formulieren."
                            ]
                        }
                    ],
                    [
                        "freundlicher-formulieren",
                        "Freundlicher formulieren",
                        {
                            ziele: [
                                "Einen Text freundlicher formulieren, ohne das Anliegen abzuschwächen."
                            ]
                        }
                    ],
                    [
                        "text-kuerzen",
                        "Text kürzen",
                        {
                            ziele: [
                                "Einen Text kürzen und die wichtigen Aussagen erhalten."
                            ]
                        }
                    ],
                    [
                        "verstaendlicher-formulieren",
                        "Verständlicher formulieren",
                        {
                            ziele: [
                                "Einen Text einfacher und leichter verständlich formulieren."
                            ]
                        }
                    ]
                ],
                [
                    "text-ueberarbeiten"
                ]
            ),
            hauptkategorie(
                "zusammenfassen-umformulieren",
                "Zusammenfassen & umformulieren",
                [
                    ["text-zusammenfassen", "Text zusammenfassen"],
                    ["stichpunkte-erstellen", "Stichpunkte erstellen"],
                    ["text-vereinfachen", "Text vereinfachen"],
                    ["neutral-umformulieren", "Neutral umformulieren"],
                    [
                        "fachtext-verstaendlich-machen",
                        "Fachtext verständlich machen",
                        {
                            kontextHinweise: [
                                "Welche Fachbegriffe müssen erhalten und erklärt werden?"
                            ]
                        }
                    ]
                ],
                [
                    "zusammenfassen-umformulieren"
                ]
            ),
            hauptkategorie(
                "einladungen-glueckwuensche",
                "Einladungen & Glückwünsche",
                [
                    ["geburtstag", "Geburtstag"],
                    ["hochzeit", "Hochzeit"],
                    ["veranstaltung", "Veranstaltung"],
                    ["firmenfeier", "Firmenfeier"],
                    ["dankeskarte", "Dankeskarte"],
                    ["persoenliche-gruesse", "Persönliche Grüße"]
                ],
                [
                    "persoenliche-texte-anlaesse"
                ],
                {
                    ziele: [
                        "Eine Einladung oder Glückwünsche passend zum Anlass formulieren."
                    ],
                    ausgabeformate: [
                        "Einladungstext",
                        "Glückwunschtext",
                        "Persönliche Nachricht"
                    ]
                }
            ),
            hauptkategorie(
                "beschwerden-reklamationen",
                "Beschwerden & Reklamationen",
                [
                    ["reklamation", "Reklamation"],
                    ["beschwerde", "Beschwerde"],
                    ["rueckerstattung-verlangen", "Rückerstattung verlangen"],
                    ["mangel-melden", "Mangel melden"],
                    ["sachliche-eskalation", "Sachliche Eskalation"]
                ],
                [
                    "beschweren-reklamieren"
                ]
            ),
            hauptkategorie(
                "reden-persoenliche-texte",
                "Reden & persönliche Texte",
                [
                    ["rede", "Rede"],
                    ["geburtstagsrede", "Geburtstagsrede"],
                    ["dankesrede", "Dankesrede"],
                    [
                        "trauertext",
                        "Trauertext",
                        {
                            anforderungen: [
                                "Respektvoll und einfühlsam formulieren."
                            ],
                            regeln: [
                                "Keine Gefühle, Erinnerungen oder Beziehungen erfinden."
                            ]
                        }
                    ],
                    ["persoenliche-widmung", "Persönliche Widmung"],
                    [
                        "humorvoller-text",
                        "Humorvoller Text",
                        {
                            anforderungen: [
                                "Humor passend zur Person und zur Situation einsetzen."
                            ],
                            regeln: [
                                "Keine abwertenden oder verletzenden Witze hinzufügen."
                            ]
                        }
                    ]
                ],
                [
                    "persoenliche-texte-anlaesse"
                ],
                {
                    ziele: [
                        "Eine persönliche Rede oder Widmung vorbereiten."
                    ],
                    kontextHinweise: [
                        "Soll der Text vorgelesen oder schriftlich übergeben werden?"
                    ],
                    ausgabeformate: [
                        "Redeentwurf",
                        "Persönliche Widmung",
                        "Trauertext"
                    ]
                }
            )
        ]
    });
})(globalThis);
