(function (global) {
    "use strict";

    const HAUPTKATEGORIE_PROFILE = {
        "programmierung": ["code-erstellen"],
        "webentwicklung": ["code-erstellen"],
        "apps-software": ["code-erstellen"],
        "debugging-fehlersuche": ["debugging-fehlersuche"],
        "code-review-verbesserung": ["code-review"],
        "ki-prompt-engineering": ["ki-prompt-workflow"],
        "automatisierung": ["automatisierung-planen"],
        "datenanalyse": ["daten-analysieren"],
        "excel-tabellen": ["daten-analysieren"],
        "datenbanken": ["datenbanken-entwerfen"],
        "apis-schnittstellen": ["api-schnittstellen"],
        "it-sicherheit": ["sicherheit-risiko-pruefen"]
    };

    const HAUPTKATEGORIE_GRUNDLAGEN = {
        "it-sicherheit": {
            anforderungen: [
                "Berechtigten Prüfbereich, Testumgebung und erlaubte Methoden eindeutig festlegen.",
                "Schutzmaßnahmen, Sicherungen und einen Abbruchweg vor jeder Prüfung vorsehen."
            ],
            regeln: [
                "Keine Systeme, Konten oder Daten ohne ausdrückliche Berechtigung prüfen oder verändern.",
                "Keine schädlichen, heimlichen oder destruktiven Schritte anleiten."
            ]
        }
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
            grundlagen: Object.assign({
                rollen: [],
                anforderungen: [],
                regeln: [],
                ausgabeformate: [],
                ausgabeAls: []
            }, HAUPTKATEGORIE_GRUNDLAGEN[id]),
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
        id: "it",
        name: "IT, KI & Daten",
        icon: "💻",
        standardAktiv: true,
        grundlagen: {
            rollen: [
                "Sorgfältiger IT- und Datenassistent"
            ],
            anforderungen: [
                "Technologie, Version, Umgebung und vorhandene Schnittstellen berücksichtigen."
            ],
            regeln: [
                "Keine Secrets, Tokens, Zugangsdaten oder personenbezogenen Daten offenlegen.",
                "Keine produktiven oder destruktiven Aktionen ohne ausdrückliche Freigabe ausführen.",
                "Versionsabhängige Aussagen anhand aktueller Dokumentation prüfen."
            ],
            ausgabeformate: [],
            ausgabeAls: [
                "Text",
                "Markdown (.md)"
            ]
        },
        parameter: [
            {
                id: "technologie",
                name: "Technologie",
                typ: "select",
                eigeneAngabeErlaubt: true,
                optionen: [
                    { id: "javascript", name: "JavaScript" },
                    { id: "python", name: "Python" },
                    { id: "sql", name: "SQL" },
                    { id: "ki-modelle", name: "KI-Modelle" }
                ]
            }
        ],
        hauptkategorien: [
            hauptkategorie(
                "programmierung",
                "Programmierung",
                [
                    ["neuen-code-erstellen", "Neuen Code erstellen"],
                    ["funktion-ergaenzen", "Funktion ergänzen"],
                    ["algorithmus-entwickeln", "Algorithmus entwickeln"],
                    ["skript-erstellen", "Skript erstellen"],
                    ["bestehenden-code-erweitern", "Bestehenden Code erweitern"]
                ]
            ),
            hauptkategorie(
                "webentwicklung",
                "Webentwicklung",
                [
                    ["html-css", "HTML & CSS"],
                    ["javascript", "JavaScript"],
                    ["frontend", "Frontend"],
                    ["backend", "Backend"],
                    ["responsive-design", "Responsive Design"],
                    ["pwa", "PWA"],
                    ["web-api", "Web-API"]
                ]
            ),
            hauptkategorie(
                "apps-software",
                "Apps & Software",
                [
                    ["app-planen", "App planen"],
                    ["softwarearchitektur", "Softwarearchitektur"],
                    ["benutzeroberflaeche", "Benutzeroberfläche"],
                    ["feature-entwickeln", "Feature entwickeln"],
                    ["desktop-app", "Desktop-App"],
                    ["mobile-app", "Mobile-App"]
                ]
            ),
            hauptkategorie(
                "debugging-fehlersuche",
                "Debugging & Fehlersuche",
                [
                    ["fehlermeldung-analysieren", "Fehlermeldung analysieren"],
                    ["bug-finden", "Bug finden"],
                    ["ursache-eingrenzen", "Ursache eingrenzen"],
                    ["laufzeitfehler", "Laufzeitfehler"],
                    ["logikfehler", "Logikfehler"],
                    ["performanceproblem", "Performanceproblem"]
                ]
            ),
            hauptkategorie(
                "code-review-verbesserung",
                "Code Review & Verbesserung",
                [
                    ["code-pruefen", "Code prüfen"],
                    ["refactoring", "Refactoring"],
                    ["lesbarkeit", "Lesbarkeit"],
                    ["performance", "Performance"],
                    ["sicherheit", "Sicherheit"],
                    ["best-practices", "Best Practices"]
                ]
            ),
            hauptkategorie(
                "ki-prompt-engineering",
                "KI & Prompt Engineering",
                [
                    ["prompt-erstellen", "Prompt erstellen"],
                    ["prompt-verbessern", "Prompt verbessern"],
                    ["systemprompt", "Systemprompt"],
                    ["ki-workflow", "KI-Workflow"],
                    ["agenten", "Agenten"],
                    ["ki-anwendung-planen", "KI-Anwendung planen"]
                ]
            ),
            hauptkategorie(
                "automatisierung",
                "Automatisierung",
                [
                    ["arbeitsablauf-automatisieren", "Arbeitsablauf automatisieren"],
                    ["skripte", "Skripte"],
                    ["office-automation", "Office-Automation"],
                    ["dateiverarbeitung", "Dateiverarbeitung"],
                    ["wiederkehrende-aufgaben", "Wiederkehrende Aufgaben"]
                ]
            ),
            hauptkategorie(
                "datenanalyse",
                "Datenanalyse",
                [
                    ["daten-untersuchen", "Daten untersuchen"],
                    ["daten-bereinigen", "Daten bereinigen"],
                    ["muster-erkennen", "Muster erkennen"],
                    ["kennzahlen", "Kennzahlen"],
                    ["visualisierung", "Visualisierung"],
                    ["auswertung", "Auswertung"]
                ]
            ),
            hauptkategorie(
                "excel-tabellen",
                "Excel & Tabellen",
                [
                    ["formeln", "Formeln"],
                    ["tabellen-erstellen", "Tabellen erstellen"],
                    ["pivot", "Pivot"],
                    ["auswertung", "Auswertung"],
                    ["diagramme", "Diagramme"],
                    ["power-query", "Power Query"],
                    ["vba", "VBA"]
                ]
            ),
            hauptkategorie(
                "datenbanken",
                "Datenbanken",
                [
                    ["datenmodell", "Datenmodell"],
                    ["sql-abfrage", "SQL-Abfrage"],
                    ["tabellenstruktur", "Tabellenstruktur"],
                    ["datenbankdesign", "Datenbankdesign"],
                    ["migration", "Migration"],
                    ["fehleranalyse", "Fehleranalyse"]
                ]
            ),
            hauptkategorie(
                "apis-schnittstellen",
                "APIs & Schnittstellen",
                [
                    ["api-entwickeln", "API entwickeln"],
                    ["api-verwenden", "API verwenden"],
                    ["rest", "REST"],
                    ["authentifizierung", "Authentifizierung"],
                    ["json", "JSON"],
                    ["integration", "Integration"]
                ]
            ),
            hauptkategorie(
                "it-sicherheit",
                "IT-Sicherheit",
                [
                    ["sicherheitsanalyse", "Sicherheitsanalyse"],
                    ["berechtigungen", "Berechtigungen"],
                    ["datenschutztechnik", "Datenschutztechnik"],
                    ["sichere-architektur", "Sichere Architektur"],
                    ["schwachstellenbewertung", "Schwachstellenbewertung"]
                ]
            )
        ]
    });
})(globalThis);
