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
        id: "lernen",
        name: "Lernen, Wissen & Wissenschaft",
        icon: "🎓",
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
                "erklaeren-verstehen",
                "Erklären & Verstehen",
                [
                    ["einfach-erklaeren", "Einfach erklären"],
                    ["schritt-fuer-schritt-erklaeren", "Schritt für Schritt erklären"],
                    ["mit-beispiel-erklaeren", "Mit Beispiel erklären"],
                    ["fachbegriff-erklaeren", "Fachbegriff erklären"],
                    ["zusammenhaenge-erklaeren", "Zusammenhänge erklären"]
                ]
            ),
            hauptkategorie(
                "lernen-lernplaene",
                "Lernen & Lernpläne",
                [
                    ["lernplan", "Lernplan"],
                    ["wochenplan", "Wochenplan"],
                    ["thema-strukturieren", "Thema strukturieren"],
                    ["wiederholungsplan", "Wiederholungsplan"],
                    ["lernmethode-auswaehlen", "Lernmethode auswählen"]
                ]
            ),
            hauptkategorie(
                "pruefungsvorbereitung",
                "Prüfungsvorbereitung",
                [
                    ["pruefung-planen", "Prüfung planen"],
                    ["wichtige-themen", "Wichtige Themen"],
                    ["pruefungssimulation", "Prüfungssimulation"],
                    ["muendliche-pruefung", "Mündliche Prüfung"],
                    ["karteikarten", "Karteikarten"]
                ]
            ),
            hauptkategorie(
                "uebungen-quiz",
                "Übungen & Quiz",
                [
                    ["uebungsaufgaben", "Übungsaufgaben"],
                    ["multiple-choice", "Multiple Choice"],
                    ["quiz", "Quiz"],
                    ["verstaendnisfragen", "Verständnisfragen"],
                    ["loesungen-erklaeren", "Lösungen erklären"]
                ]
            ),
            hauptkategorie(
                "sprachen-lernen",
                "Sprachen lernen",
                [
                    ["vokabeln", "Vokabeln"],
                    ["grammatik", "Grammatik"],
                    ["dialoge", "Dialoge"],
                    ["uebersetzen-ueben", "Übersetzen üben"],
                    ["aussprache", "Aussprache"],
                    ["sprachtraining", "Sprachtraining"]
                ]
            ),
            hauptkategorie(
                "schule-studium",
                "Schule & Studium",
                [
                    ["hausaufgabenhilfe", "Hausaufgabenhilfe"],
                    ["referat", "Referat"],
                    ["praesentation", "Präsentation"],
                    ["mitschrift", "Mitschrift"],
                    ["studienorganisation", "Studienorganisation"]
                ]
            ),
            hauptkategorie(
                "wissenschaftliches-arbeiten",
                "Wissenschaftliches Arbeiten",
                [
                    ["forschungsfrage", "Forschungsfrage"],
                    ["gliederung", "Gliederung"],
                    ["literaturauswertung", "Literaturauswertung"],
                    ["methodik", "Methodik"],
                    ["diskussion", "Diskussion"],
                    ["wissenschaftlicher-stil", "Wissenschaftlicher Stil"]
                ]
            ),
            hauptkategorie(
                "mathematik-statistik",
                "Mathematik & Statistik",
                [
                    ["rechnen", "Rechnen"],
                    ["gleichungen", "Gleichungen"],
                    ["geometrie", "Geometrie"],
                    ["statistik", "Statistik"],
                    ["wahrscheinlichkeitsrechnung", "Wahrscheinlichkeitsrechnung"],
                    ["daten-interpretieren", "Daten interpretieren"]
                ]
            ),
            hauptkategorie(
                "recherche-quellen",
                "Recherche & Quellen",
                [
                    ["literaturrecherche", "Literaturrecherche"],
                    ["quellen-vergleichen", "Quellen vergleichen"],
                    ["faktencheck", "Faktencheck"],
                    ["studien-suchen", "Studien suchen"],
                    ["quellen-bewerten", "Quellen bewerten"]
                ]
            )
        ]
    });
})(globalThis);
