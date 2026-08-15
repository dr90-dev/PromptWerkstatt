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
                "Die wichtigsten Aufgaben und Prioritäten festlegen.",
                "Die Schritte in eine sinnvolle Reihenfolge bringen.",
                "Termine und verfügbare Zeit realistisch berücksichtigen.",
                "Abhängigkeiten und nötige Vorarbeiten erkennen."
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
            besondersEmpfohleneRegeln: [
                "Fehlende Angaben zu Zeit oder verfügbaren Mitteln klar kennzeichnen.",
                "Schätzungen und Annahmen klar kennzeichnen."
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
                "Die wichtigsten Vor- und Nachteile der Möglichkeiten herausarbeiten.",
                "Die Möglichkeit finden, die am besten zu meinen Anforderungen passt.",
                "Die Entscheidung anhand der wichtigsten Kriterien nachvollziehbar begründen."
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
            besondersEmpfohleneRegeln: [
                "Keine Eigenschaften oder Vergleichswerte erfinden.",
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
                "Geeignete und verlässliche Quellen finden.",
                "Aussagen verschiedener Quellen vergleichen und Widersprüche erkennen.",
                "Die wichtigsten Ergebnisse verständlich zusammenfassen."
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
            besondersEmpfohleneRegeln: [
                "Keine Quellen, Fundstellen oder Rechercheergebnisse erfinden.",
                "Nicht überprüfbare Aussagen klar als unsicher kennzeichnen."
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
                "Das Problem und seine möglichen Ursachen besser verstehen.",
                "Verschiedene Lösungswege mit ihren Vor- und Nachteilen vergleichen.",
                "Die passendsten Lösungen für die nächsten Schritte auswählen."
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
            besondersEmpfohleneRegeln: [
                "Fehlende Informationen nicht erfinden.",
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
                "Eine vollständige Checkliste erstellen, die sich direkt nutzen lässt.",
                "Die Punkte in eine praktische Reihenfolge bringen.",
                "Wichtige oder dringende Punkte klar hervorheben."
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
            besondersEmpfohleneRegeln: [
                "Fehlende Punkte nicht ohne Grundlage als Pflicht darstellen.",
                "Unklare oder vom Einzelfall abhängige Angaben klar kennzeichnen."
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
                "Herausfinden, welche Angaben und Unterlagen ich brauche.",
                "Erkennen, welche Angaben oder Unterlagen noch fehlen.",
                "Mich Schritt für Schritt auf einen Antrag oder Behördengang vorbereiten.",
                "Die nächsten sinnvollen Schritte für den Antrag oder Behördengang festlegen."
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
            besondersEmpfohleneRegeln: [
                "Unbekannte Anforderungen, Fristen oder Zuständigkeiten nicht erfinden.",
                "Unsicherheiten klar kennzeichnen."
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


    registry.profilRegistrieren({
        id: "schreiben-kommunizieren",
        name: "Schreiben & Kommunizieren",
        empfehlungen: {
            rollen: [
                "Schreibhelfer",
                "Kommunikationshelfer"
            ],
            ziele: [
                "Eine passende Nachricht klar und verständlich formulieren.",
                "Eine Nachricht höflich und passend zum Anlass schreiben.",
                "Um eine Antwort oder Rückmeldung bitten."
            ],
            kontextHinweise: [
                "Wer soll die Nachricht bekommen?",
                "Was möchtest du mit der Nachricht erreichen?",
                "Welche Informationen müssen enthalten sein?",
                "Wie förmlich soll der Text sein?",
                "Gibt es einen Anlass oder wichtigen Hintergrund?",
                "Wie lang soll die Nachricht ungefähr sein?"
            ],
            anforderungen: [
                "Das Anliegen früh und verständlich nennen.",
                "Alle wichtigen Informationen vollständig aufnehmen.",
                "Eine passende Anrede und einen passenden Abschluss verwenden.",
                "Kurze und verständliche Sätze schreiben.",
                "Den Ton an Empfänger und Anlass anpassen.",
                "Unnötige Wiederholungen vermeiden."
            ],
            besondersEmpfohleneAnforderungen: [
                "Das Anliegen früh und verständlich nennen.",
                "Alle wichtigen Informationen vollständig aufnehmen.",
                "Den Ton an Empfänger und Anlass anpassen."
            ],
            regeln: [
                "Keine Informationen erfinden.",
                "Keine Zusagen oder Behauptungen ergänzen, die nicht genannt wurden.",
                "Unsicherheiten nicht als Fakten darstellen."
            ],
            besondersEmpfohleneRegeln: [
                "Keine Informationen erfinden.",
                "Keine Zusagen oder Behauptungen ergänzen, die nicht genannt wurden."
            ],
            ausgabeformate: [
                "Fertiger Text"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "text-ueberarbeiten",
        name: "Text überarbeiten",
        empfehlungen: {
            rollen: [
                "Textüberarbeiter",
                "Korrekturhelfer"
            ],
            ziele: [
                "Einen vorhandenen Text flüssiger und natürlicher formulieren.",
                "Fehler korrigieren, ohne die Aussage unbeabsichtigt zu verändern.",
                "Stil und Wortwahl an die Zielgruppe anpassen."
            ],
            kontextHinweise: [
                "Welcher Text soll überarbeitet werden?",
                "Was soll verbessert werden?",
                "Wie soll der Text klingen?",
                "Wie lang soll der Text ungefähr sein?",
                "Für wen ist der Text gedacht?",
                "Sollen Inhalt und Aussage unverändert bleiben?"
            ],
            anforderungen: [
                "Die Bedeutung nicht unbeabsichtigt verändern.",
                "Rechtschreibung und Grammatik korrigieren.",
                "Unnötige Wiederholungen entfernen.",
                "Klare und verständliche Sätze verwenden.",
                "Den bisherigen Ton beibehalten oder wie gewünscht anpassen.",
                "Nur dort ändern, wo es den Text wirklich verbessert."
            ],
            besondersEmpfohleneAnforderungen: [
                "Die Bedeutung nicht unbeabsichtigt verändern.",
                "Rechtschreibung und Grammatik korrigieren.",
                "Klare und verständliche Sätze verwenden."
            ],
            regeln: [
                "Keine neuen Fakten hinzufügen.",
                "Aussagen nicht stärker oder verbindlicher machen, wenn das nicht gewünscht ist.",
                "Eigennamen, Zahlen und wichtige Daten nicht ungeprüft verändern."
            ],
            besondersEmpfohleneRegeln: [
                "Keine neuen Fakten hinzufügen.",
                "Eigennamen, Zahlen und wichtige Daten nicht ungeprüft verändern."
            ],
            ausgabeformate: [
                "Überarbeiteter Text",
                "Korrigierter Text",
                "Vorher-Nachher-Vergleich",
                "Änderungsvorschläge"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "zusammenfassen-umformulieren",
        name: "Zusammenfassen & Umformulieren",
        empfehlungen: {
            rollen: [
                "Zusammenfassungshelfer",
                "Umformulierungshelfer"
            ],
            ziele: [
                "Einen langen Text kurz und verständlich zusammenfassen.",
                "Einen Text einfacher erklären.",
                "Denselben Inhalt passend anders formulieren."
            ],
            kontextHinweise: [
                "Welcher Text soll bearbeitet werden?",
                "Wie kurz oder ausführlich soll das Ergebnis sein?",
                "Für wen ist der neue Text gedacht?",
                "Wie viele Details sollen erhalten bleiben?",
                "Welche Form soll das Ergebnis haben?",
                "Welche Informationen müssen unbedingt erhalten bleiben?"
            ],
            anforderungen: [
                "Die wichtigsten Aussagen erhalten.",
                "Keine neuen Fakten hinzufügen.",
                "Wichtige Einschränkungen nicht weglassen.",
                "Klar und verständlich formulieren.",
                "Die gewünschte Länge einhalten.",
                "Beim Umformulieren die Bedeutung beibehalten."
            ],
            besondersEmpfohleneAnforderungen: [
                "Die wichtigsten Aussagen erhalten.",
                "Wichtige Einschränkungen nicht weglassen.",
                "Beim Umformulieren die Bedeutung beibehalten."
            ],
            regeln: [
                "Nichts erfinden.",
                "Keine wichtige Aussage durch die Kürzung verfälschen.",
                "Unsicherheiten im Original nicht als Gewissheiten darstellen."
            ],
            besondersEmpfohleneRegeln: [
                "Nichts erfinden.",
                "Keine wichtige Aussage durch die Kürzung verfälschen."
            ],
            ausgabeformate: [
                "Kurzfassung",
                "Stichpunkte",
                "Verständliche Zusammenfassung",
                "Umformulierter Text"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "persoenliche-texte-anlaesse",
        name: "Persönliche Texte & Anlässe",
        empfehlungen: {
            rollen: [
                "Schreibhelfer für persönliche Texte",
                "Ideenhelfer für Anlässe"
            ],
            ziele: [
                "Einen persönlichen Text schreiben, der zum Anlass und zur Person passt.",
                "Eine Botschaft herzlich und glaubwürdig formulieren."
            ],
            kontextHinweise: [
                "Was ist der Anlass?",
                "Für wen ist der Text gedacht?",
                "Wie ist dein Verhältnis zu der Person?",
                "Welche persönlichen Erlebnisse oder Informationen sollen hinein?",
                "Welche Stimmung soll der Text vermitteln?",
                "Wie lang soll der Text ungefähr sein?"
            ],
            anforderungen: [
                "Persönlich und glaubwürdig formulieren.",
                "Den Text passend zum Anlass schreiben.",
                "Nicht unnötig kitschig formulieren.",
                "Vorhandene persönliche Details sinnvoll verwenden.",
                "Natürlich und nicht wie eine Vorlage klingen.",
                "Keine gemeinsamen Erlebnisse oder persönlichen Fakten erfinden."
            ],
            besondersEmpfohleneAnforderungen: [
                "Persönlich und glaubwürdig formulieren.",
                "Den Text passend zum Anlass schreiben.",
                "Keine gemeinsamen Erlebnisse oder persönlichen Fakten erfinden."
            ],
            regeln: [
                "Keine persönlichen Fakten erfinden.",
                "Keine unangemessenen Aussagen hinzufügen.",
                "Die gewünschte Stimmung respektieren."
            ],
            besondersEmpfohleneRegeln: [
                "Keine persönlichen Fakten erfinden.",
                "Die gewünschte Stimmung respektieren."
            ],
            ausgabeformate: [
                "Persönlicher Text"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });


    registry.profilRegistrieren({
        id: "beschweren-reklamieren",
        name: "Beschweren & Reklamieren",
        empfehlungen: {
            rollen: [
                "Beschwerdehelfer",
                "Reklamationshelfer"
            ],
            ziele: [
                "Eine klare und sachliche Beschwerde formulieren.",
                "Klar erklären, was passiert ist.",
                "Die gewünschte Lösung verständlich nennen.",
                "Um eine Antwort oder Klärung bitten."
            ],
            kontextHinweise: [
                "Was ist passiert?",
                "Wann ist es passiert?",
                "Um welches Produkt oder welche Dienstleistung geht es?",
                "Was wurde bisher dazu besprochen oder geschrieben?",
                "Welche Lösung wünschst du dir?",
                "Welche Belege oder Bestell- und Vorgangsnummern gibt es?"
            ],
            anforderungen: [
                "Klar und in zeitlicher Reihenfolge erklären, was passiert ist.",
                "Die gewünschte Lösung deutlich nennen.",
                "Höflich, aber bestimmt formulieren.",
                "Wichtige Daten und Belege nennen.",
                "Die Situation nicht unnötig verschärfen.",
                "Fakten und Vermutungen klar trennen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Klar und in zeitlicher Reihenfolge erklären, was passiert ist.",
                "Die gewünschte Lösung deutlich nennen.",
                "Höflich, aber bestimmt formulieren."
            ],
            regeln: [
                "Keine Rechtsansprüche erfinden.",
                "Keine unbekannten Fristen ergänzen.",
                "Keine Drohungen oder Behauptungen hinzufügen, die nicht genannt wurden.",
                "Rechtliche Aussagen nur bei ausreichender Grundlage machen."
            ],
            besondersEmpfohleneRegeln: [
                "Keine Rechtsansprüche erfinden.",
                "Keine unbekannten Fristen ergänzen."
            ],
            ausgabeformate: [
                "Beschwerde-E-Mail",
                "Reklamationsschreiben",
                "Sachliche Nachricht",
                "Kurze Zusammenfassung des Falls"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });
})(globalThis);
