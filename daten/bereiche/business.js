(function (global) {
    "use strict";

    const HAUPTKATEGORIE_PROFILE = {
        "projektmanagement": ["projekt-prozesse-verbessern"],
        "aufgaben-zeitmanagement": ["planen-organisieren"],
        "meetings-zusammenarbeit": ["projekt-prozesse-verbessern"],
        "prozesse-arbeitsablaeufe": ["projekt-prozesse-verbessern"],
        "fuehrung-personal": ["zusammenarbeit-fuehrung"],
        "marketing": ["analyse-strategie"],
        "vertrieb-kunden": ["kunden-vertrieb"],
        "selbststaendigkeit-geschaeftsmodelle": ["analyse-strategie"],
        "angebote-kalkulation": ["berechnen-auswerten"],
        "finanzen-controlling": ["berechnen-auswerten"],
        "einkauf-lieferanten": ["vergleichen-entscheiden"],
        "qualitaet-organisation": ["projekt-prozesse-verbessern"]
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
        id: "business",
        name: "Beruf, Business & Organisation",
        icon: "💼",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Praxisnaher Business- und Organisationsassistent"
            ],
            anforderungen: [
                "Ziele, Beteiligte, Datenbasis und verfügbare Ressourcen berücksichtigen."
            ],
            regeln: [
                "Keine Unternehmensdaten, Kennzahlen, Termine oder Zusagen erfinden.",
                "Vertrauliche Personen-, Kunden- und Unternehmensdaten schützen.",
                "Finanzielle oder rechtliche Entscheidungen fachlich prüfen lassen."
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
                "projektmanagement",
                "Projektmanagement",
                [
                    ["projektplan", "Projektplan"],
                    ["meilensteine", "Meilensteine"],
                    ["aufgabenplan", "Aufgabenplan"],
                    ["risiken", "Risiken"],
                    ["statusbericht", "Statusbericht"],
                    ["projektstruktur", "Projektstruktur"]
                ]
            ),
            hauptkategorie(
                "aufgaben-zeitmanagement",
                "Aufgaben & Zeitmanagement",
                [
                    ["priorisieren", "Priorisieren"],
                    ["tagesplanung", "Tagesplanung"],
                    ["wochenplanung", "Wochenplanung"],
                    ["aufgaben-verteilen", "Aufgaben verteilen"],
                    ["zeitplan", "Zeitplan"]
                ]
            ),
            hauptkategorie(
                "meetings-zusammenarbeit",
                "Meetings & Zusammenarbeit",
                [
                    ["agenda", "Agenda"],
                    ["protokoll", "Protokoll"],
                    ["vorbereitung", "Vorbereitung"],
                    ["entscheidungen-dokumentieren", "Entscheidungen dokumentieren"],
                    ["aufgaben-nachverfolgen", "Aufgaben nachverfolgen"]
                ]
            ),
            hauptkategorie(
                "prozesse-arbeitsablaeufe",
                "Prozesse & Arbeitsabläufe",
                [
                    ["prozess-beschreiben", "Prozess beschreiben"],
                    ["prozess-verbessern", "Prozess verbessern"],
                    ["sop", "SOP"],
                    ["checkliste", "Checkliste"],
                    ["workflow", "Workflow"],
                    ["verantwortlichkeiten", "Verantwortlichkeiten"]
                ]
            ),
            hauptkategorie(
                "fuehrung-personal",
                "Führung & Personal",
                [
                    ["mitarbeitergespraech", "Mitarbeitergespräch"],
                    ["feedback", "Feedback"],
                    ["stellenbeschreibung", "Stellenbeschreibung"],
                    ["onboarding", "Onboarding"],
                    ["teamorganisation", "Teamorganisation"],
                    ["zielvereinbarung", "Zielvereinbarung"]
                ]
            ),
            hauptkategorie(
                "marketing",
                "Marketing",
                [
                    ["marketingstrategie", "Marketingstrategie"],
                    ["kampagne", "Kampagne"],
                    ["zielgruppenanalyse", "Zielgruppenanalyse"],
                    ["werbetext", "Werbetext"],
                    ["positionierung", "Positionierung"],
                    ["marketingplan", "Marketingplan"]
                ]
            ),
            hauptkategorie(
                "vertrieb-kunden",
                "Vertrieb & Kunden",
                [
                    ["verkaufsargumente", "Verkaufsargumente"],
                    ["kundenansprache", "Kundenansprache"],
                    ["angebot", "Angebot"],
                    ["gespraechsvorbereitung", "Gesprächsvorbereitung"],
                    ["follow-up", "Follow-up"],
                    ["lead-qualifizierung", "Lead-Qualifizierung"]
                ]
            ),
            hauptkategorie(
                "selbststaendigkeit-geschaeftsmodelle",
                "Selbstständigkeit & Geschäftsmodelle",
                [
                    ["geschaeftsidee", "Geschäftsidee"],
                    ["geschaeftsmodell", "Geschäftsmodell"],
                    ["angebot-entwickeln", "Angebot entwickeln"],
                    ["marktanalyse", "Marktanalyse"],
                    ["preisgestaltung", "Preisgestaltung"],
                    ["positionierung", "Positionierung"]
                ]
            ),
            hauptkategorie(
                "angebote-kalkulation",
                "Angebote & Kalkulation",
                [
                    ["angebote-vergleichen", "Angebote vergleichen"],
                    ["kostenrechnung", "Kostenrechnung"],
                    ["preisvergleich", "Preisvergleich"],
                    ["wirtschaftlichkeitsvergleich", "Wirtschaftlichkeitsvergleich"],
                    ["stueckkosten", "Stückkosten"]
                ]
            ),
            hauptkategorie(
                "finanzen-controlling",
                "Finanzen & Controlling",
                [
                    ["budget", "Budget"],
                    ["kostenanalyse", "Kostenanalyse"],
                    ["kennzahlen", "Kennzahlen"],
                    ["soll-ist-vergleich", "Soll-Ist-Vergleich"],
                    ["forecast", "Forecast"],
                    ["wirtschaftlichkeit", "Wirtschaftlichkeit"]
                ]
            ),
            hauptkategorie(
                "einkauf-lieferanten",
                "Einkauf & Lieferanten",
                [
                    ["lieferantenvergleich", "Lieferantenvergleich"],
                    ["angebotsauswertung", "Angebotsauswertung"],
                    ["anfrage", "Anfrage"],
                    ["lieferantenbewertung", "Lieferantenbewertung"],
                    ["verhandlungsvorbereitung", "Verhandlungsvorbereitung"]
                ]
            ),
            hauptkategorie(
                "qualitaet-organisation",
                "Qualität & Organisation",
                [
                    ["massnahmenliste", "Maßnahmenliste"],
                    ["audit-vorbereitung", "Audit-Vorbereitung"],
                    ["abweichungen", "Abweichungen"],
                    ["verbesserungsmassnahmen", "Verbesserungsmaßnahmen"],
                    ["dokumentation", "Dokumentation"]
                ]
            )
        ]
    });
})(globalThis);
