(function (global) {
    "use strict";

    const registry =
        global.PromptWerkstattDatenV2;


    registry.profilRegistrieren({
        id: "planen-organisieren",
        name: "Planen & Organisieren",
        empfehlungen: {
            rollen: [
                "Planungsassistent",
                "Organisationshelfer"
            ],
            ziele: [
                "Einen realistischen und umsetzbaren Plan erstellen.",
                "Aufgaben, Prioritäten und Abhängigkeiten sinnvoll ordnen."
            ],
            kontextHinweise: [
                "Was möchtest du erreichen?",
                "Bis wann soll es erledigt sein?",
                "Wie viel Zeit steht zur Verfügung?",
                "Welche Mittel und Personen stehen zur Verfügung?",
                "Was ist besonders wichtig?",
                "Welche festen Vorgaben oder Grenzen gibt es?"
            ],
            anforderungen: [
                "Konkrete Schritte nennen, die sich wirklich umsetzen lassen.",
                "Die Schritte in eine sinnvolle Reihenfolge bringen.",
                "Zeitaufwand und Termine realistisch planen.",
                "Die wichtigsten Aufgaben klar hervorheben.",
                "Zeigen, welche Schritte voneinander abhängen und was vorher erledigt sein muss.",
                "Den Plan übersichtlich und leicht verständlich darstellen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Konkrete Schritte nennen, die sich wirklich umsetzen lassen.",
                "Zeitaufwand und Termine realistisch planen.",
                "Zeigen, welche Schritte voneinander abhängen und was vorher erledigt sein muss."
            ],
            regeln: [
                "Fehlende Angaben zu Zeit oder verfügbaren Mitteln klar kennzeichnen.",
                "Schätzungen und Annahmen klar kennzeichnen.",
                "Keine fachlichen oder persönlichen Voraussetzungen annehmen, die nicht genannt wurden."
            ],
            ausgabeformate: [
                "Plan mit klaren Prioritäten",
                "Zeit- und Meilensteinplan",
                "Checkliste mit Reihenfolge und Verantwortlichkeiten"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "vergleichen-entscheiden",
        name: "Vergleichen & Entscheiden",
        empfehlungen: {
            rollen: [
                "Vergleichshelfer",
                "Entscheidungshelfer"
            ],
            ziele: [
                "Mehrere Möglichkeiten nach klaren Kriterien miteinander vergleichen.",
                "Eine Entscheidungshilfe mit einer klar begründeten Empfehlung erstellen."
            ],
            kontextHinweise: [
                "Welche Möglichkeiten möchtest du vergleichen?",
                "Welche Kriterien sind dir besonders wichtig?",
                "Welche Kriterien zählen mehr als andere?",
                "Wie hoch ist dein Budget und welche festen Grenzen gibt es?",
                "Was muss erfüllt sein und was wäre nur wünschenswert?",
                "Wofür möchtest du die Möglichkeiten nutzen?"
            ],
            anforderungen: [
                "Alle Möglichkeiten nach denselben Kriterien vergleichen.",
                "Die wichtigsten Vor- und Nachteile jeder Möglichkeit nennen.",
                "Die wichtigsten Unterschiede klar erklären.",
                "Zwischen notwendigen und zusätzlichen Anforderungen unterscheiden.",
                "Die Empfehlung mit den genannten Kriterien begründen.",
                "Fehlende Angaben für den Vergleich klar kennzeichnen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Alle Möglichkeiten nach denselben Kriterien vergleichen.",
                "Die wichtigsten Unterschiede klar erklären.",
                "Die Empfehlung mit den genannten Kriterien begründen."
            ],
            regeln: [
                "Keine Eigenschaften oder Vergleichswerte erfinden.",
                "Fehlende Angaben nicht einfach durch Annahmen ersetzen.",
                "Persönliche Gewichtungen und Bewertungen klar als solche kennzeichnen."
            ],
            ausgabeformate: [
                "Vergleichstabelle",
                "Vor- und Nachteile-Liste",
                "Bewertungstabelle mit Gewichtung",
                "Entscheidungsempfehlung mit Begründung"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "recherchieren-quellen",
        name: "Recherchieren & Quellen bewerten",
        empfehlungen: {
            rollen: [
                "Rechercheassistent",
                "Quellenprüfer"
            ],
            ziele: [
                "Gezielt nach Informationen zu einer klaren Frage suchen.",
                "Quellen vergleichen und verlässliche Ergebnisse verständlich zusammenfassen."
            ],
            kontextHinweise: [
                "Welche genaue Frage soll beantwortet werden?",
                "Wie aktuell sollen die Informationen sein?",
                "Für welchen Ort oder Themenbereich sollen die Informationen gelten?",
                "Welche Arten von Quellen sollen genutzt werden?",
                "Wie ausführlich soll die Recherche sein?"
            ],
            anforderungen: [
                "Fakten, Einschätzungen und Schlussfolgerungen klar voneinander trennen.",
                "Die verwendeten Quellen klar nennen.",
                "Darauf achten, wie aktuell die Informationen sind und wofür sie gelten.",
                "Unsicherheiten und fehlende Belege klar kennzeichnen.",
                "Widersprüche zwischen Quellen klar zeigen.",
                "Die wichtigsten Ergebnisse übersichtlich zusammenfassen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Fakten, Einschätzungen und Schlussfolgerungen klar voneinander trennen.",
                "Die verwendeten Quellen klar nennen.",
                "Widersprüche zwischen Quellen klar zeigen."
            ],
            regeln: [
                "Keine Quellen, Fundstellen oder Rechercheergebnisse erfinden.",
                "Nicht überprüfbare Aussagen klar als unsicher kennzeichnen.",
                "Aus einem fehlenden Beleg keine sichere Aussage ableiten."
            ],
            ausgabeformate: [
                "Übersichtliche Recherche-Zusammenfassung",
                "Quellenvergleich mit Kernaussagen",
                "Ergebnisübersicht mit Quellen und offenen Fragen"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "ideen-problemloesung",
        name: "Ideen & Problemlösung",
        empfehlungen: {
            rollen: [
                "Ideenfinder",
                "Problemlösungshelfer"
            ],
            ziele: [
                "Mehrere gute Ideen finden, die ich wirklich umsetzen kann.",
                "Das Problem besser verstehen und passende Lösungen dafür finden."
            ],
            kontextHinweise: [
                "Wie sieht die aktuelle Situation aus?",
                "Was möchtest du erreichen?",
                "Was hast du schon ausprobiert?",
                "Welche festen Grenzen gibt es?",
                "Welche Mittel stehen zur Verfügung?",
                "Was ist besonders wichtig?"
            ],
            anforderungen: [
                "Mehrere deutlich unterschiedliche Ideen vorschlagen.",
                "Konkrete Vorschläge machen, die sich wirklich umsetzen lassen.",
                "Die wichtigsten Vor- und Nachteile der besten Ideen nennen.",
                "Verfügbare Mittel und feste Grenzen berücksichtigen.",
                "Annahmen und offene Fragen klar kennzeichnen.",
                "Begründen, welche Ideen am besten passen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Mehrere deutlich unterschiedliche Ideen vorschlagen.",
                "Konkrete Vorschläge machen, die sich wirklich umsetzen lassen.",
                "Begründen, welche Ideen am besten passen."
            ],
            regeln: [
                "Fehlende Informationen nicht erfinden.",
                "Annahmen klar kennzeichnen.",
                "Genannte Grenzen und Ausschlüsse einhalten."
            ],
            ausgabeformate: [
                "Ideenliste",
                "Lösungsideen mit Vor- und Nachteilen",
                "Vorschläge nach Wichtigkeit mit Begründung",
                "Maßnahmenplan"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "strukturieren-checklisten",
        name: "Strukturieren & Checklisten",
        empfehlungen: {
            rollen: [
                "Übersichtshelfer",
                "Checklistenhelfer"
            ],
            ziele: [
                "Informationen übersichtlich ordnen, damit sie sich leicht nutzen lassen.",
                "Eine vollständige Checkliste erstellen, die sich direkt nutzen lässt."
            ],
            kontextHinweise: [
                "Wofür brauchst du die Liste oder Übersicht?",
                "Wer wird sie verwenden?",
                "Wie ausführlich soll sie sein?",
                "Welche Reihenfolge ist sinnvoll?",
                "Was ist besonders wichtig?",
                "Für welchen Termin oder welche Situation ist sie gedacht?"
            ],
            anforderungen: [
                "Die Einträge klar und eindeutig formulieren.",
                "Zusammengehörige Inhalte sinnvoll gruppieren.",
                "Die Punkte in eine sinnvolle Reihenfolge bringen.",
                "Unnötige Dopplungen vermeiden.",
                "Wichtige oder dringende Punkte klar hervorheben.",
                "Die Liste so aufbauen, dass sie direkt genutzt werden kann."
            ],
            besondersEmpfohleneAnforderungen: [
                "Die Einträge klar und eindeutig formulieren.",
                "Zusammengehörige Inhalte sinnvoll gruppieren.",
                "Die Liste so aufbauen, dass sie direkt genutzt werden kann."
            ],
            regeln: [
                "Fehlende Punkte nicht ohne Grundlage als Pflicht darstellen.",
                "Unklare oder vom Einzelfall abhängige Angaben klar kennzeichnen.",
                "Widersprüchliche oder doppelte Einträge vermeiden."
            ],
            ausgabeformate: [
                "Checkliste",
                "Gegliederte Übersicht",
                "To-do-Liste",
                "Tabelle"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "unterlagen-antraege",
        name: "Unterlagen & Anträge vorbereiten",
        empfehlungen: {
            rollen: [
                "Helfer für Unterlagen und Anträge",
                "Begleiter für Anträge und Behördengänge"
            ],
            ziele: [
                "Herausfinden, welche Angaben und Unterlagen ich brauche und was noch fehlt.",
                "Mich Schritt für Schritt auf einen Antrag oder Behördengang vorbereiten und wissen, was als Nächstes zu tun ist."
            ],
            kontextHinweise: [
                "Welche Stelle oder Behörde ist zuständig?",
                "Für welches Land, welche Region oder welchen Ort gilt das Anliegen?",
                "Worum geht es genau?",
                "Welche Unterlagen hast du bereits?",
                "Welche Fristen sind dir bekannt?",
                "Wie ist der aktuelle Stand?"
            ],
            anforderungen: [
                "Die benötigten Angaben und Unterlagen übersichtlich auflisten.",
                "Klar zeigen, welche Informationen und Unterlagen noch fehlen.",
                "Die Vorbereitung Schritt für Schritt erklären.",
                "Bekannte Fristen und zeitliche Abhängigkeiten klar nennen.",
                "Keine offiziellen Anforderungen erfinden oder selbst ergänzen.",
                "Fakten, Annahmen und offene Fragen klar trennen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Die benötigten Angaben und Unterlagen übersichtlich auflisten.",
                "Klar zeigen, welche Informationen und Unterlagen noch fehlen.",
                "Keine offiziellen Anforderungen erfinden oder selbst ergänzen."
            ],
            regeln: [
                "Unbekannte Anforderungen, Fristen oder Zuständigkeiten nicht erfinden.",
                "Bei Fristen oder behördenspezifischen Angaben auf aktuelle offizielle Informationen verweisen.",
                "Unsicherheiten klar kennzeichnen.",
                "Nicht den Eindruck einer verbindlichen Rechtsberatung erwecken."
            ],
            ausgabeformate: [
                "Unterlagen-Checkliste",
                "Schritt-für-Schritt-Vorgehen",
                "Übersicht der fehlenden Angaben"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });
})(globalThis);
