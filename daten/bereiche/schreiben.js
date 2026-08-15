(function (global) {
    "use strict";

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
        id: "schreiben",
        name: "Schreiben & Kommunikation",
        icon: "✍️",
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
                "e-mails",
                "E-Mails",
                [
                    ["geschaeftliche-anfrage", "Geschäftliche Anfrage"],
                    ["antwort-auf-e-mail", "Antwort auf E-Mail"],
                    ["angebotsanfrage", "Angebotsanfrage"],
                    ["nachfrage-erinnerung", "Nachfrage & Erinnerung"],
                    ["terminvereinbarung", "Terminvereinbarung"],
                    ["absage", "Absage"],
                    ["dankeschoen", "Dankeschön"]
                ]
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
                ]
            ),
            hauptkategorie(
                "briefe-formelle-schreiben",
                "Briefe & formelle Schreiben",
                [
                    ["geschaeftsbrief", "Geschäftsbrief"],
                    ["kuendigung", "Kündigung"],
                    ["anfrage", "Anfrage"],
                    ["stellungnahme", "Stellungnahme"],
                    ["anschreiben", "Anschreiben"],
                    ["offizielles-schreiben", "Offizielles Schreiben"]
                ]
            ),
            hauptkategorie(
                "texte-verbessern-korrigieren",
                "Texte verbessern & korrigieren",
                [
                    ["rechtschreibung", "Rechtschreibung"],
                    ["grammatik", "Grammatik"],
                    ["professioneller-formulieren", "Professioneller formulieren"],
                    ["freundlicher-formulieren", "Freundlicher formulieren"],
                    ["text-kuerzen", "Text kürzen"],
                    ["verstaendlicher-formulieren", "Verständlicher formulieren"]
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
                    ["fachtext-verstaendlich-machen", "Fachtext verständlich machen"]
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
                ]
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
                ]
            ),
            hauptkategorie(
                "reden-persoenliche-texte",
                "Reden & persönliche Texte",
                [
                    ["rede", "Rede"],
                    ["geburtstagsrede", "Geburtstagsrede"],
                    ["dankesrede", "Dankesrede"],
                    ["trauertext", "Trauertext"],
                    ["persoenliche-widmung", "Persönliche Widmung"],
                    ["humorvoller-text", "Humorvoller Text"]
                ]
            )
        ]
    });
})(globalThis);
