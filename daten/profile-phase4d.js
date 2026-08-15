(function (global) {
    "use strict";

    const registry =
        global.PromptWerkstattDatenV2;


    [
        {
            id: "anleitung-sicher-umsetzen",
            name: "Anleitung sicher umsetzen",
            empfehlungen: {
                rollen: [],
                ziele: [
                    "Eine verständliche Schritt-für-Schritt-Anleitung erstellen.",
                    "Benötigte Materialien, Werkzeuge und Vorbereitungen zusammenstellen.",
                    "Schwierige Stellen und mögliche Fehler früh erkennen.",
                    "Passende Alternativen für fehlende Mittel oder schwierige Schritte finden."
                ],
                kontextHinweise: [
                    "Was möchtest du am Ende erreichen?",
                    "Welche Erfahrung hast du bereits?",
                    "Welche Materialien und Werkzeuge sind vorhanden?",
                    "Wie viel Zeit steht zur Verfügung?",
                    "Welche Grenzen oder Vorgaben gibt es?",
                    "Welche Sicherheitsfragen müssen berücksichtigt werden?"
                ],
                anforderungen: [
                    "Alle Schritte klar und in einer sinnvollen Reihenfolge erklären.",
                    "Benötigte Materialien, Werkzeuge und Vorbereitungen vollständig nennen.",
                    "Schwierige oder sicherheitsrelevante Schritte deutlich kennzeichnen.",
                    "Für typische Probleme praktische Lösungen nennen.",
                    "Wenn möglich einfache Alternativen anbieten.",
                    "Am Ende eine kurze Kontrolle des Ergebnisses ermöglichen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Alle Schritte klar und in einer sinnvollen Reihenfolge erklären.",
                    "Benötigte Materialien, Werkzeuge und Vorbereitungen vollständig nennen.",
                    "Schwierige oder sicherheitsrelevante Schritte deutlich kennzeichnen."
                ],
                regeln: [
                    "Gefährliche Arbeitsschritte nicht verharmlosen.",
                    "Unbekannte Material- oder Werkzeugeigenschaften nicht erfinden.",
                    "Fehlende Sicherheitsinformationen klar als offen kennzeichnen."
                ],
                besondersEmpfohleneRegeln: [
                    "Gefährliche Arbeitsschritte nicht verharmlosen.",
                    "Fehlende Sicherheitsinformationen klar als offen kennzeichnen."
                ],
                ausgabeformate: [
                    "Nummerierte Schritt-für-Schritt-Anleitung",
                    "Material- und Werkzeugliste",
                    "Kurzanleitung mit wichtigen Hinweisen"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "ideen-kreativ-entwickeln",
            name: "Kreative Ideen entwickeln",
            empfehlungen: {
                rollen: [
                    "Kreativer Ideenbegleiter"
                ],
                ziele: [
                    "Mehrere deutlich unterschiedliche Ideen entwickeln.",
                    "Ideen an Anlass, Zielgruppe und vorhandene Mittel anpassen.",
                    "Die passendsten Ideen miteinander vergleichen.",
                    "Eine ausgewählte Idee zu einem konkreten Konzept ausarbeiten."
                ],
                kontextHinweise: [
                    "Wofür brauchst du die Ideen?",
                    "Für wen sind sie gedacht?",
                    "Welche Stimmung oder Wirkung soll entstehen?",
                    "Welche Mittel, Materialien oder Fähigkeiten sind vorhanden?",
                    "Wie viel Zeit und Budget stehen zur Verfügung?",
                    "Was soll auf keinen Fall vorkommen?"
                ],
                anforderungen: [
                    "Mehrere wirklich unterschiedliche Ideen vorschlagen.",
                    "Die Ideen verständlich und konkret beschreiben.",
                    "Vorhandene Mittel und feste Grenzen berücksichtigen.",
                    "Aufwand und Umsetzbarkeit realistisch einordnen.",
                    "Die wichtigsten Unterschiede zwischen den Ideen zeigen.",
                    "Für die besten Ideen klare nächste Schritte nennen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Mehrere wirklich unterschiedliche Ideen vorschlagen.",
                    "Vorhandene Mittel und feste Grenzen berücksichtigen.",
                    "Für die besten Ideen klare nächste Schritte nennen."
                ],
                regeln: [
                    "Keine persönlichen Angaben oder vorhandenen Mittel erfinden.",
                    "Genannte Grenzen und Ausschlüsse einhalten.",
                    "Sicherheitsfragen bei der Umsetzung nicht ausblenden."
                ],
                besondersEmpfohleneRegeln: [
                    "Genannte Grenzen und Ausschlüsse einhalten.",
                    "Sicherheitsfragen bei der Umsetzung nicht ausblenden."
                ],
                ausgabeformate: [
                    "Ideenübersicht",
                    "Ideenvergleich mit Aufwand und Wirkung",
                    "Ausgearbeitetes Konzept mit nächsten Schritten"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "rezept-zubereiten",
            name: "Rezept & Zubereitung",
            empfehlungen: {
                rollen: [
                    "Rezepthelfer"
                ],
                ziele: [
                    "Ein passendes Rezept mit klaren Mengen erstellen.",
                    "Vorhandene Zutaten sinnvoll verwenden oder ersetzen.",
                    "Die Zubereitung zeitlich gut planen.",
                    "Das Rezept an Personenanzahl und Ernährungsweise anpassen."
                ],
                kontextHinweise: [
                    "Für wie viele Personen soll das Rezept sein?",
                    "Welche Zutaten sind vorhanden?",
                    "Wie viel Zeit steht zur Verfügung?",
                    "Welche Küchengeräte können genutzt werden?",
                    "Welche Allergien oder Unverträglichkeiten müssen berücksichtigt werden?",
                    "Welche Ernährungsweise oder Vorlieben sind wichtig?"
                ],
                anforderungen: [
                    "Zutaten mit verständlichen Mengenangaben auflisten.",
                    "Die Zubereitung in klaren Schritten erklären.",
                    "Zeitangaben und Reihenfolge sinnvoll abstimmen.",
                    "Geeignete Alternativen für fehlende Zutaten nennen.",
                    "Allergien und Unverträglichkeiten sichtbar berücksichtigen.",
                    "Aufbewahrung oder Vorbereitung nur nennen, wenn sie sicher begründet ist."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Zutaten mit verständlichen Mengenangaben auflisten.",
                    "Die Zubereitung in klaren Schritten erklären.",
                    "Allergien und Unverträglichkeiten sichtbar berücksichtigen."
                ],
                regeln: [
                    "Allergien und Unverträglichkeiten nicht ignorieren.",
                    "Unsichere Angaben zur Lebensmittelhygiene nicht erfinden.",
                    "Keine medizinischen Wirkungen von Lebensmitteln versprechen."
                ],
                besondersEmpfohleneRegeln: [
                    "Allergien und Unverträglichkeiten nicht ignorieren.",
                    "Unsichere Angaben zur Lebensmittelhygiene nicht erfinden."
                ],
                ausgabeformate: [
                    "Rezept mit Zutaten und Zubereitung",
                    "Einkaufsliste",
                    "Zeitplan für Vorbereitung und Kochen"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "ernaehrung-alltag-planen",
            name: "Ernährung im Alltag planen",
            empfehlungen: {
                rollen: [
                    "Helfer für die Essensplanung"
                ],
                ziele: [
                    "Einen alltagstauglichen Essensplan erstellen.",
                    "Abwechslung und persönliche Vorlieben berücksichtigen.",
                    "Einkauf, Vorräte und Resteverwertung miteinander verbinden.",
                    "Den Plan an Budget, Zeit und Personenanzahl anpassen."
                ],
                kontextHinweise: [
                    "Für wie viele Personen wird geplant?",
                    "Für welchen Zeitraum soll der Plan gelten?",
                    "Welche Vorlieben oder Ernährungsweisen sind wichtig?",
                    "Welche Allergien oder Unverträglichkeiten gibt es?",
                    "Wie viel Zeit und Budget stehen zur Verfügung?",
                    "Welche Vorräte sind bereits vorhanden?"
                ],
                anforderungen: [
                    "Den Plan übersichtlich nach Tagen oder Mahlzeiten gliedern.",
                    "Vorlieben, Ernährungsweise und Unverträglichkeiten berücksichtigen.",
                    "Zeitaufwand und Budget realistisch einplanen.",
                    "Vorhandene Vorräte und mögliche Reste sinnvoll nutzen.",
                    "Eine passende Einkaufsliste ableiten.",
                    "Alternativen für einzelne Mahlzeiten anbieten."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Vorlieben, Ernährungsweise und Unverträglichkeiten berücksichtigen.",
                    "Zeitaufwand und Budget realistisch einplanen.",
                    "Eine passende Einkaufsliste ableiten."
                ],
                regeln: [
                    "Keine medizinische Ernährungsberatung oder Heilwirkung behaupten.",
                    "Allergien und Unverträglichkeiten nicht verharmlosen.",
                    "Fehlende Angaben zu Mengen oder Bedarf nicht als sichere Fakten darstellen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine medizinische Ernährungsberatung oder Heilwirkung behaupten.",
                    "Allergien und Unverträglichkeiten nicht verharmlosen."
                ],
                ausgabeformate: [
                    "Essensplan",
                    "Einkaufsliste nach Warengruppen",
                    "Vorbereitungs- und Resteverwertungsplan"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "reise-freizeit-planen",
            name: "Reise & Freizeit planen",
            empfehlungen: {
                rollen: [
                    "Reise- und Ausflugsplaner"
                ],
                ziele: [
                    "Eine passende Reise oder Aktivität planen.",
                    "Sehenswürdigkeiten und interessante Orte auswählen.",
                    "Restaurants oder Food-Spots passend einplanen.",
                    "Tagesabläufe, Wege und verfügbare Zeit sinnvoll abstimmen.",
                    "Alternativen für Wetter, Ausfälle oder wenig Zeit vorsehen."
                ],
                kontextHinweise: [
                    "Wohin oder in welche Region soll es gehen?",
                    "Für welchen Zeitraum oder welches Datum wird geplant?",
                    "Wer reist oder nimmt teil?",
                    "Welche Interessen und Wünsche sind wichtig?",
                    "Wie hoch ist das Budget?",
                    "Welche Mobilität oder Einschränkungen müssen berücksichtigt werden?",
                    "Wo beginnt und endet der Tag oder die Reise?"
                ],
                anforderungen: [
                    "Wege, Zeiten und Tagesabläufe realistisch zusammenstellen.",
                    "Vorschläge an Interessen, Budget und Mitreisende anpassen.",
                    "Zeitabhängige Angaben als aktuell zu prüfen kennzeichnen.",
                    "Wichtige Reservierungen oder Vorbereitungen nennen.",
                    "Passende Alternativen bei Änderungen anbieten.",
                    "Die wichtigsten Entscheidungen kurz begründen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Wege, Zeiten und Tagesabläufe realistisch zusammenstellen.",
                    "Zeitabhängige Angaben als aktuell zu prüfen kennzeichnen.",
                    "Passende Alternativen bei Änderungen anbieten."
                ],
                regeln: [
                    "Aktuelle Öffnungszeiten, Preise, Fahrpläne und Verfügbarkeiten nicht erfinden.",
                    "Zeitabhängige Informationen vor der Nutzung prüfen lassen.",
                    "Wetter oder tatsächliche Verfügbarkeit nicht als sicher darstellen."
                ],
                besondersEmpfohleneRegeln: [
                    "Aktuelle Öffnungszeiten, Preise, Fahrpläne und Verfügbarkeiten nicht erfinden.",
                    "Zeitabhängige Informationen vor der Nutzung prüfen lassen."
                ],
                ausgabeformate: [
                    "Tages- oder Reiseplan",
                    "Orte- und Aktivitätenübersicht",
                    "Reservierungs- und Vorbereitungsliste",
                    "Alternativplan"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "PDF (.pdf)"
                ]
            }
        },
        {
            id: "content-erstellen",
            name: "Content erstellen",
            empfehlungen: {
                rollen: [
                    "Content-Redakteur"
                ],
                ziele: [
                    "Mit dem Inhalt schnell Aufmerksamkeit gewinnen.",
                    "Eine klare Botschaft verständlich vermitteln.",
                    "Die Zielgruppe informieren oder unterhalten.",
                    "Interaktion und Rückmeldungen fördern.",
                    "Eine passende Handlungsaufforderung einbauen."
                ],
                kontextHinweise: [
                    "Für welche Plattform ist der Inhalt?",
                    "Wer ist die Zielgruppe?",
                    "Welche Botschaft soll im Mittelpunkt stehen?",
                    "Was soll der Inhalt erreichen?",
                    "Wie soll der Inhalt klingen?",
                    "Welche Länge und Medien sind vorgesehen?"
                ],
                anforderungen: [
                    "Mit einem zur Plattform passenden Einstieg beginnen.",
                    "Die Kernbotschaft klar und früh nennen.",
                    "Sprache, Länge und Aufbau an die Zielgruppe anpassen.",
                    "Eine Handlungsaufforderung nur passend zum Ziel einsetzen.",
                    "Bei Bedarf mehrere deutlich unterschiedliche Varianten liefern.",
                    "Behauptungen und Werbeaussagen klar prüfbar halten."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Die Kernbotschaft klar und früh nennen.",
                    "Sprache, Länge und Aufbau an die Zielgruppe anpassen.",
                    "Behauptungen und Werbeaussagen klar prüfbar halten."
                ],
                regeln: [
                    "Keine unbelegten Fakten oder Erfolgsversprechen ergänzen.",
                    "Werbung oder Kooperationen nicht als neutrale Information darstellen.",
                    "Nicht annehmen, dass Bild-, Musik- oder Markenrechte geklärt sind."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine unbelegten Fakten oder Erfolgsversprechen ergänzen.",
                    "Nicht annehmen, dass Bild-, Musik- oder Markenrechte geklärt sind."
                ],
                ausgabeformate: [
                    "Veröffentlichungsfertiger Entwurf",
                    "Varianten mit unterschiedlichen Einstiegen",
                    "Inhaltsstruktur mit Handlungsaufforderung"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "lernen-erklaeren",
            name: "Lernen & Erklären",
            empfehlungen: {
                rollen: [
                    "Lernbegleiter"
                ],
                ziele: [
                    "Ein Thema verständlich erklären.",
                    "Zusammenhänge Schritt für Schritt nachvollziehen.",
                    "Passende Beispiele und Anwendungen kennenlernen.",
                    "Das eigene Verständnis mit kurzen Fragen prüfen."
                ],
                kontextHinweise: [
                    "Welches Thema soll erklärt werden?",
                    "Welche Vorkenntnisse sind vorhanden?",
                    "Was ist bisher unklar?",
                    "Wofür wird das Wissen gebraucht?",
                    "Wie ausführlich soll die Erklärung sein?",
                    "Welche Beispiele oder Darstellungsformen helfen dir?"
                ],
                anforderungen: [
                    "Die Erklärung an die vorhandenen Vorkenntnisse anpassen.",
                    "Schwierige Begriffe verständlich erklären.",
                    "Den Gedankengang in klaren Schritten aufbauen.",
                    "Mindestens ein passendes Beispiel verwenden.",
                    "Wichtige Zusammenhänge und Grenzen nennen.",
                    "Am Ende eine kurze Zusammenfassung oder Verständnisfrage anbieten."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Die Erklärung an die vorhandenen Vorkenntnisse anpassen.",
                    "Den Gedankengang in klaren Schritten aufbauen.",
                    "Mindestens ein passendes Beispiel verwenden."
                ],
                regeln: [
                    "Keine Fakten, Quellen oder Rechenschritte erfinden.",
                    "Unsicherheiten und vereinfachte Darstellungen klar kennzeichnen.",
                    "Fachbegriffe nicht so vereinfachen, dass die Bedeutung verloren geht."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Fakten, Quellen oder Rechenschritte erfinden.",
                    "Unsicherheiten und vereinfachte Darstellungen klar kennzeichnen."
                ],
                ausgabeformate: [
                    "Schrittweise Erklärung",
                    "Erklärung mit Beispielen",
                    "Kurzfassung mit Verständnisfragen"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "ueben-pruefungsvorbereiten",
            name: "Üben & Prüfungsvorbereitung",
            empfehlungen: {
                rollen: [
                    "Übungs- und Prüfungsbegleiter"
                ],
                ziele: [
                    "Passende Übungsaufgaben erstellen.",
                    "Wissen mit Fragen oder einem Quiz prüfen.",
                    "Lösungen und typische Fehler verständlich erklären.",
                    "Wichtige Themen gezielt wiederholen.",
                    "Eine Prüfungssituation sinnvoll vorbereiten oder üben."
                ],
                kontextHinweise: [
                    "Welches Fach oder Thema wird geübt?",
                    "Für welches Niveau oder welche Prüfung?",
                    "Wann findet die Prüfung statt?",
                    "Welche Themen sitzen bereits gut?",
                    "Wo bestehen noch Schwierigkeiten?",
                    "Welche Aufgabenform wird erwartet?"
                ],
                anforderungen: [
                    "Aufgaben an Niveau und Lernziel anpassen.",
                    "Schwierigkeit nachvollziehbar steigern.",
                    "Lösungen getrennt und verständlich erklären.",
                    "Typische Fehler und passende Lernhinweise nennen.",
                    "Alle wichtigen Themen angemessen abdecken.",
                    "Bei einer Simulation Form und Zeitrahmen der Prüfung berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Aufgaben an Niveau und Lernziel anpassen.",
                    "Lösungen getrennt und verständlich erklären.",
                    "Typische Fehler und passende Lernhinweise nennen."
                ],
                regeln: [
                    "Keine Prüfungsinhalte oder Bewertungskriterien erfinden.",
                    "Fehlerhafte Lösungen nicht als richtig darstellen.",
                    "Keine unzulässige Hilfe bei laufenden Prüfungen fördern."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Prüfungsinhalte oder Bewertungskriterien erfinden.",
                    "Fehlerhafte Lösungen nicht als richtig darstellen."
                ],
                ausgabeformate: [
                    "Übungsset mit Lösungen",
                    "Quiz oder Prüfungssimulation",
                    "Wiederholungsplan mit Schwerpunkten"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "PDF (.pdf)"
                ]
            }
        },
        {
            id: "analyse-strategie",
            name: "Analyse & Strategie",
            empfehlungen: {
                rollen: [
                    "Analyse- und Strategiehelfer"
                ],
                ziele: [
                    "Die aktuelle Situation nachvollziehbar analysieren.",
                    "Stärken, Schwächen, Chancen und Risiken erkennen.",
                    "Mehrere sinnvolle Handlungsoptionen vergleichen.",
                    "Eine klare Strategie mit nächsten Schritten entwickeln."
                ],
                kontextHinweise: [
                    "Was soll analysiert oder verbessert werden?",
                    "Welches Ziel soll erreicht werden?",
                    "Welche Daten und Erfahrungen liegen vor?",
                    "Wer ist betroffen oder beteiligt?",
                    "Welche Grenzen und Mittel gibt es?",
                    "Für welchen Zeitraum gilt die Betrachtung?"
                ],
                anforderungen: [
                    "Fakten, Annahmen und Einschätzungen klar trennen.",
                    "Die wichtigsten Einflussfaktoren nachvollziehbar darstellen.",
                    "Mehrere realistische Optionen prüfen.",
                    "Vor- und Nachteile der Optionen nennen.",
                    "Empfehlungen mit den vorhandenen Informationen begründen.",
                    "Konkrete nächste Schritte und Prüfpunkte ableiten."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Fakten, Annahmen und Einschätzungen klar trennen.",
                    "Mehrere realistische Optionen prüfen.",
                    "Konkrete nächste Schritte und Prüfpunkte ableiten."
                ],
                regeln: [
                    "Fehlende Daten nicht erfinden.",
                    "Annahmen und persönliche Bewertungen klar kennzeichnen.",
                    "Unsichere Entwicklungen nicht als sichere Prognose darstellen."
                ],
                besondersEmpfohleneRegeln: [
                    "Fehlende Daten nicht erfinden.",
                    "Annahmen und persönliche Bewertungen klar kennzeichnen."
                ],
                ausgabeformate: [
                    "Strukturierte Analyse",
                    "Optionenvergleich",
                    "Strategie mit Maßnahmen und Prüfpunkten"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "projekt-prozesse-verbessern",
            name: "Projekte & Prozesse verbessern",
            empfehlungen: {
                rollen: [
                    "Projekt- und Prozessbegleiter"
                ],
                ziele: [
                    "Ein Projekt oder einen Ablauf klar strukturieren.",
                    "Aufgaben, Verantwortlichkeiten und Termine festlegen.",
                    "Risiken, Engpässe und Abhängigkeiten erkennen.",
                    "Verbesserungsmöglichkeiten nachvollziehbar bewerten.",
                    "Konkrete Maßnahmen für die Umsetzung ableiten."
                ],
                kontextHinweise: [
                    "Welches Projekt oder welcher Ablauf wird betrachtet?",
                    "Was soll erreicht oder verbessert werden?",
                    "Welche Schritte und Beteiligten gibt es bereits?",
                    "Welche Termine und Ressourcen stehen fest?",
                    "Wo treten Probleme oder Verzögerungen auf?",
                    "Welche Vorgaben müssen eingehalten werden?"
                ],
                anforderungen: [
                    "Schritte, Verantwortlichkeiten und Ergebnisse klar zuordnen.",
                    "Abhängigkeiten und Engpässe sichtbar machen.",
                    "Termine und Ressourcen realistisch berücksichtigen.",
                    "Probleme und Ursachen getrennt betrachten.",
                    "Maßnahmen nach Nutzen und Aufwand ordnen.",
                    "Erfolgskriterien und nächste Prüftermine nennen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Schritte, Verantwortlichkeiten und Ergebnisse klar zuordnen.",
                    "Abhängigkeiten und Engpässe sichtbar machen.",
                    "Erfolgskriterien und nächste Prüftermine nennen."
                ],
                regeln: [
                    "Keine Termine, Ressourcen oder Zuständigkeiten erfinden.",
                    "Annahmen und Schätzungen klar kennzeichnen.",
                    "Vorgegebene Freigaben und Pflichten nicht umgehen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Termine, Ressourcen oder Zuständigkeiten erfinden.",
                    "Annahmen und Schätzungen klar kennzeichnen."
                ],
                ausgabeformate: [
                    "Projekt- oder Prozessübersicht",
                    "Maßnahmenplan mit Verantwortlichkeiten",
                    "Risiko- und Engpassliste",
                    "Status- und Prüfpunktübersicht"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "Excel (.xlsx)"
                ]
            }
        }
    ].forEach(
        function (profil) {
            registry.profilRegistrieren(
                profil
            );
        }
    );

    [
        {
            id: "zusammenarbeit-fuehrung",
            name: "Zusammenarbeit & Führung",
            empfehlungen: {
                rollen: [
                    "Gesprächs- und Teamarbeitsbegleiter"
                ],
                ziele: [
                    "Ein Gespräch oder eine Zusammenarbeit gut vorbereiten.",
                    "Erwartungen, Aufgaben und Verantwortlichkeiten klären.",
                    "Konstruktives Feedback verständlich formulieren.",
                    "Konflikte sachlich ansprechen und Lösungswege entwickeln.",
                    "Konkrete nächste Schritte und Vereinbarungen festhalten."
                ],
                kontextHinweise: [
                    "Was ist der Anlass und welches Ergebnis wird gewünscht?",
                    "Wer ist beteiligt und welche Rollen haben die Personen?",
                    "Was wurde bereits besprochen oder vereinbart?",
                    "Welche Beispiele oder Beobachtungen sind wichtig?",
                    "Welche Grenzen und vertraulichen Angaben sind zu beachten?",
                    "Bis wann wird eine Lösung oder Entscheidung benötigt?"
                ],
                anforderungen: [
                    "Beobachtungen, Bewertungen und Wünsche klar voneinander trennen.",
                    "Wertschätzend und zugleich eindeutig formulieren.",
                    "Die Sichtweisen der Beteiligten angemessen berücksichtigen.",
                    "Erwartungen und Verantwortlichkeiten konkret benennen.",
                    "Realistische Vereinbarungen und nächste Schritte vorschlagen.",
                    "Offene Punkte und einen passenden Folgetermin festhalten."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Beobachtungen, Bewertungen und Wünsche klar voneinander trennen.",
                    "Wertschätzend und zugleich eindeutig formulieren.",
                    "Realistische Vereinbarungen und nächste Schritte vorschlagen."
                ],
                regeln: [
                    "Keine Eigenschaften, Motive oder Diagnosen über Personen erfinden.",
                    "Keine vertraulichen oder personenbezogenen Angaben unnötig wiedergeben.",
                    "Keine diskriminierenden oder abwertenden Formulierungen verwenden."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Eigenschaften, Motive oder Diagnosen über Personen erfinden.",
                    "Keine vertraulichen oder personenbezogenen Angaben unnötig wiedergeben."
                ],
                ausgabeformate: [
                    "Gesprächsleitfaden",
                    "Feedback mit Beispielen und Wünschen",
                    "Vereinbarungs- und Maßnahmenübersicht",
                    "Team- oder Rollenübersicht"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "kunden-vertrieb",
            name: "Kunden & Vertrieb",
            empfehlungen: {
                rollen: [
                    "Kunden- und Vertriebsassistent"
                ],
                ziele: [
                    "Den Bedarf eines Kunden besser verstehen.",
                    "Ein Angebot oder eine Lösung überzeugend erklären.",
                    "Ein Kundengespräch oder eine Kontaktaufnahme vorbereiten.",
                    "Einwände sachlich beantworten.",
                    "Einen passenden nächsten Schritt vereinbaren."
                ],
                kontextHinweise: [
                    "Um welches Produkt oder welche Leistung geht es?",
                    "Wer ist die Zielgruppe oder der konkrete Kunde?",
                    "Welcher Bedarf oder welches Problem steht im Mittelpunkt?",
                    "Welche nachweisbaren Vorteile und Grenzen gibt es?",
                    "Welche Preise, Bedingungen oder Termine sind bestätigt?",
                    "Was ist das Ziel der aktuellen Kontaktaufnahme?"
                ],
                anforderungen: [
                    "Den Kundennutzen konkret und verständlich erklären.",
                    "Aussagen mit vorhandenen Fakten und Beispielen belegen.",
                    "Offene Fragen gezielt und respektvoll formulieren.",
                    "Einwände sachlich aufnehmen und beantworten.",
                    "Bedingungen, Grenzen und nächste Schritte transparent nennen.",
                    "Die Sprache an Zielgruppe und Gesprächssituation anpassen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Den Kundennutzen konkret und verständlich erklären.",
                    "Bedingungen, Grenzen und nächste Schritte transparent nennen.",
                    "Die Sprache an Zielgruppe und Gesprächssituation anpassen."
                ],
                regeln: [
                    "Keine Preise, Leistungen, Termine oder Zusagen erfinden.",
                    "Keine unbelegten Erfolgsversprechen oder irreführenden Aussagen machen.",
                    "Vertrauliche Kunden- und Unternehmensdaten schützen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Preise, Leistungen, Termine oder Zusagen erfinden.",
                    "Keine unbelegten Erfolgsversprechen oder irreführenden Aussagen machen."
                ],
                ausgabeformate: [
                    "Gesprächsleitfaden",
                    "Nutzenargumentation",
                    "Antwort auf Einwände",
                    "Kontakt- oder Nachfassnachricht"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "berechnen-auswerten",
            name: "Berechnen & auswerten",
            empfehlungen: {
                rollen: [
                    "Sorgfältiger Berechnungs- und Analyseassistent"
                ],
                ziele: [
                    "Eine Berechnung nachvollziehbar durchführen.",
                    "Daten mit einer passenden Methode auswerten.",
                    "Ergebnisse verständlich einordnen.",
                    "Annahmen, Unsicherheiten und Grenzen sichtbar machen.",
                    "Das Ergebnis mit einer Gegenprobe oder Plausibilitätsprüfung kontrollieren."
                ],
                kontextHinweise: [
                    "Welche Frage soll beantwortet werden?",
                    "Welche Eingabewerte und Einheiten liegen vor?",
                    "Welche Formel oder Methode soll verwendet werden?",
                    "Welche Annahmen und Randbedingungen gelten?",
                    "Welche Genauigkeit wird benötigt?",
                    "Gibt es Referenzwerte oder ein erwartetes Ergebnis?"
                ],
                anforderungen: [
                    "Eingabewerte, Einheiten und Annahmen vor der Berechnung auflisten.",
                    "Formel oder Auswertungsmethode verständlich erklären.",
                    "Rechenschritte nachvollziehbar darstellen.",
                    "Ergebnisse mit Einheit und angemessener Genauigkeit angeben.",
                    "Eine Plausibilitätsprüfung oder Gegenprobe durchführen.",
                    "Unsicherheiten und den Gültigkeitsbereich des Ergebnisses nennen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Eingabewerte, Einheiten und Annahmen vor der Berechnung auflisten.",
                    "Rechenschritte nachvollziehbar darstellen.",
                    "Eine Plausibilitätsprüfung oder Gegenprobe durchführen."
                ],
                regeln: [
                    "Fehlende Werte, Einheiten oder Formeln nicht erfinden.",
                    "Annahmen und Umrechnungen deutlich kennzeichnen.",
                    "Ergebnisse nicht genauer oder sicherer darstellen, als die Daten erlauben.",
                    "Sicherheitsrelevante Ergebnisse fachlich prüfen lassen."
                ],
                besondersEmpfohleneRegeln: [
                    "Fehlende Werte, Einheiten oder Formeln nicht erfinden.",
                    "Ergebnisse nicht genauer oder sicherer darstellen, als die Daten erlauben.",
                    "Sicherheitsrelevante Ergebnisse fachlich prüfen lassen."
                ],
                ausgabeformate: [
                    "Berechnung mit Rechenschritten",
                    "Auswertung mit Ergebnis und Einordnung",
                    "Tabelle mit Eingaben und Ergebnissen",
                    "Plausibilitäts- und Unsicherheitsprüfung"
                ],
                ausgabeAls: [
                    "Text",
                    "Excel (.xlsx)"
                ]
            }
        },
        {
            id: "code-erstellen",
            name: "Code erstellen",
            empfehlungen: {
                rollen: [
                    "Erfahrener Softwareentwicklungsassistent"
                ],
                ziele: [
                    "Eine passende technische Lösung entwerfen.",
                    "Lesbaren und wartbaren Code erstellen.",
                    "Die Lösung in die vorhandene Umgebung einpassen.",
                    "Geeignete Prüfungen und Tests ergänzen.",
                    "Nutzung und wichtige Entscheidungen kurz erklären."
                ],
                kontextHinweise: [
                    "Welche Funktion soll umgesetzt werden?",
                    "Welche Sprache, Laufzeit und Version werden verwendet?",
                    "Welche Dateien, Schnittstellen und Konventionen sind betroffen?",
                    "Welche Eingaben, Ausgaben und Fehlerfälle gibt es?",
                    "Welche Abhängigkeiten dürfen verwendet werden?",
                    "Welche Tests und Qualitätsanforderungen gelten?"
                ],
                anforderungen: [
                    "Die Lösung an vorhandene Architektur und Konventionen anpassen.",
                    "Eingaben, Ausgaben und Fehlerfälle sauber behandeln.",
                    "Code verständlich benennen und unnötige Komplexität vermeiden.",
                    "Sicherheits- und Datenschutzaspekte berücksichtigen.",
                    "Passende Tests oder nachvollziehbare Prüfschritte angeben.",
                    "Geänderte Stellen und wichtige Annahmen kurz dokumentieren."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Die Lösung an vorhandene Architektur und Konventionen anpassen.",
                    "Eingaben, Ausgaben und Fehlerfälle sauber behandeln.",
                    "Passende Tests oder nachvollziehbare Prüfschritte angeben."
                ],
                regeln: [
                    "Keine Zugangsdaten, Schlüssel oder vertraulichen Werte in Code schreiben.",
                    "Keine nicht erlaubten Abhängigkeiten oder APIs voraussetzen.",
                    "Keine destruktiven Aktionen ohne ausdrückliche Freigabe ausführen.",
                    "Versionsabhängige Aussagen klar kennzeichnen oder prüfen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Zugangsdaten, Schlüssel oder vertraulichen Werte in Code schreiben.",
                    "Keine destruktiven Aktionen ohne ausdrückliche Freigabe ausführen.",
                    "Versionsabhängige Aussagen klar kennzeichnen oder prüfen."
                ],
                ausgabeformate: [
                    "Implementierung mit Code",
                    "Technischer Lösungsentwurf",
                    "Testfälle und Prüfschritte",
                    "Kurze Nutzungs- und Änderungshinweise"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)",
                    "TXT (.txt)"
                ]
            }
        },
        {
            id: "debugging-fehlersuche",
            name: "Debugging & Fehlersuche",
            empfehlungen: {
                rollen: [
                    "Systematischer Debugging-Assistent"
                ],
                ziele: [
                    "Einen Fehler zuverlässig nachvollziehen.",
                    "Mögliche Ursachen gezielt eingrenzen.",
                    "Die wahrscheinlichste Ursache mit Belegen bestimmen.",
                    "Eine kleine und sichere Korrektur entwickeln.",
                    "Die Behebung mit passenden Tests bestätigen."
                ],
                kontextHinweise: [
                    "Was ist das erwartete und das tatsächliche Verhalten?",
                    "Wie lässt sich der Fehler reproduzieren?",
                    "Welche Umgebung und Versionen sind betroffen?",
                    "Welche Meldungen, Protokolle oder relevanten Codeausschnitte gibt es?",
                    "Was wurde zuletzt geändert?",
                    "Welche Versuche wurden bereits unternommen?"
                ],
                anforderungen: [
                    "Reproduktionsschritte und Beobachtungen klar festhalten.",
                    "Hypothesen nach Wahrscheinlichkeit und Prüfbarkeit ordnen.",
                    "Für jede Hypothese einen gezielten Test nennen.",
                    "Ursache und sichtbares Symptom voneinander trennen.",
                    "Die kleinste geeignete Korrektur vorschlagen.",
                    "Regressionstests und eine Rückfallmöglichkeit berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Für jede Hypothese einen gezielten Test nennen.",
                    "Ursache und sichtbares Symptom voneinander trennen.",
                    "Regressionstests und eine Rückfallmöglichkeit berücksichtigen."
                ],
                regeln: [
                    "Eine Ursache erst nach ausreichender Prüfung als bestätigt bezeichnen.",
                    "Keine Protokolle, Messwerte oder Testergebnisse erfinden.",
                    "Keine destruktiven Änderungen oder Sicherheitsmechanismen umgehen.",
                    "Zugangsdaten und personenbezogene Daten aus Diagnosedaten schützen."
                ],
                besondersEmpfohleneRegeln: [
                    "Eine Ursache erst nach ausreichender Prüfung als bestätigt bezeichnen.",
                    "Keine destruktiven Änderungen oder Sicherheitsmechanismen umgehen.",
                    "Zugangsdaten und personenbezogene Daten aus Diagnosedaten schützen."
                ],
                ausgabeformate: [
                    "Fehleranalyse mit Hypothesen",
                    "Prüfplan zur Eingrenzung",
                    "Korrekturvorschlag mit Regressionstests",
                    "Ursachen- und Maßnahmenprotokoll"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)",
                    "TXT (.txt)"
                ]
            }
        },
        {
            id: "code-review",
            name: "Code prüfen & verbessern",
            empfehlungen: {
                rollen: [
                    "Sorgfältiger Code-Review-Assistent"
                ],
                ziele: [
                    "Code auf Fehler und unerwartetes Verhalten prüfen.",
                    "Lesbarkeit und Wartbarkeit verbessern.",
                    "Sicherheits- und Leistungsrisiken erkennen.",
                    "Änderungsvorschläge nach Wichtigkeit ordnen.",
                    "Passende Tests für gefundene Risiken ableiten."
                ],
                kontextHinweise: [
                    "Welche Aufgabe erfüllt der Code?",
                    "Welche Sprache, Version und Laufzeit werden verwendet?",
                    "Welche Dateien und Änderungen gehören zum Prüfbereich?",
                    "Welche Konventionen und Qualitätsziele gelten?",
                    "Welche Tests bestehen bereits?",
                    "Welche Sicherheits- oder Leistungsanforderungen sind wichtig?"
                ],
                anforderungen: [
                    "Feststellungen mit konkreten Stellen und Auswirkungen begründen.",
                    "Korrektheit, Lesbarkeit, Sicherheit und Leistung getrennt prüfen.",
                    "Kritische Fehler vor Stilfragen priorisieren.",
                    "Änderungen möglichst klein und kompatibel vorschlagen.",
                    "Für wichtige Befunde einen Test oder ein Beispiel nennen.",
                    "Auch positive, erhaltenswerte Lösungen kurz benennen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Feststellungen mit konkreten Stellen und Auswirkungen begründen.",
                    "Kritische Fehler vor Stilfragen priorisieren.",
                    "Für wichtige Befunde einen Test oder ein Beispiel nennen."
                ],
                regeln: [
                    "Keine Fehler oder Sicherheitslücken ohne nachvollziehbaren Beleg behaupten.",
                    "Kein Verhalten stillschweigend verändern.",
                    "Keine Zugangsdaten oder vertraulichen Inhalte wiedergeben.",
                    "Versionsabhängige Empfehlungen klar kennzeichnen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Fehler oder Sicherheitslücken ohne nachvollziehbaren Beleg behaupten.",
                    "Kein Verhalten stillschweigend verändern.",
                    "Keine Zugangsdaten oder vertraulichen Inhalte wiedergeben."
                ],
                ausgabeformate: [
                    "Review-Befunde nach Priorität",
                    "Verbesserungsvorschläge mit Beispielen",
                    "Risiko- und Testübersicht",
                    "Überarbeitete Codefassung"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)"
                ]
            }
        },
        {
            id: "ki-prompt-workflow",
            name: "KI-Prompts & Workflows",
            empfehlungen: {
                rollen: [
                    "Prompt- und KI-Workflow-Assistent"
                ],
                ziele: [
                    "Einen klaren und wirksamen Prompt entwickeln.",
                    "Einen KI-gestützten Ablauf sinnvoll strukturieren.",
                    "Ein- und Ausgaben eindeutig festlegen.",
                    "Qualitätskriterien und Testfälle definieren.",
                    "Den Prompt oder Workflow anhand von Ergebnissen verbessern."
                ],
                kontextHinweise: [
                    "Welches konkrete Ergebnis soll die KI liefern?",
                    "Welches Modell oder Werkzeug wird verwendet?",
                    "Welche Eingaben und Beispiele stehen zur Verfügung?",
                    "Welche Zielgruppe und welches Ausgabeformat gelten?",
                    "Welche Grenzen, Datenschutzregeln und Freigaben sind wichtig?",
                    "Woran wird ein gutes Ergebnis erkannt?"
                ],
                anforderungen: [
                    "Ziel, Kontext, Aufgabe und Ausgabe klar voneinander abgrenzen.",
                    "Erwartete Eingaben und Ausgaben eindeutig beschreiben.",
                    "Beispiele und Gegenbeispiele nur gezielt einsetzen.",
                    "Qualitätskriterien und Grenzfälle festlegen.",
                    "Einen kleinen Test- und Verbesserungszyklus vorsehen.",
                    "Datenschutz, Kosten und menschliche Prüfung berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Erwartete Eingaben und Ausgaben eindeutig beschreiben.",
                    "Qualitätskriterien und Grenzfälle festlegen.",
                    "Datenschutz, Kosten und menschliche Prüfung berücksichtigen."
                ],
                regeln: [
                    "Keine vertraulichen Daten ungeprüft an ein KI-System übermitteln.",
                    "Kein bestimmtes Modellverhalten oder fehlerfreies Ergebnis garantieren.",
                    "Annahmen und nicht geprüfte Ausgaben klar kennzeichnen.",
                    "Kritische Entscheidungen nicht allein automatisiert treffen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine vertraulichen Daten ungeprüft an ein KI-System übermitteln.",
                    "Kein bestimmtes Modellverhalten oder fehlerfreies Ergebnis garantieren.",
                    "Kritische Entscheidungen nicht allein automatisiert treffen."
                ],
                ausgabeformate: [
                    "Fertiger Prompt",
                    "KI-Workflow mit Ein- und Ausgaben",
                    "Testfälle und Bewertungskriterien",
                    "Verbesserungsvorschläge mit Varianten"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)",
                    "TXT (.txt)"
                ]
            }
        },
        {
            id: "daten-analysieren",
            name: "Daten analysieren",
            empfehlungen: {
                rollen: [
                    "Datenanalyse-Assistent"
                ],
                ziele: [
                    "Daten für eine Auswertung vorbereiten.",
                    "Muster, Unterschiede und Auffälligkeiten erkennen.",
                    "Passende Kennzahlen berechnen und vergleichen.",
                    "Ergebnisse verständlich darstellen.",
                    "Grenzen der Daten und sinnvolle nächste Analysen benennen."
                ],
                kontextHinweise: [
                    "Welche Frage soll mit den Daten beantwortet werden?",
                    "Welche Datenfelder, Formate und Zeiträume liegen vor?",
                    "Woher stammen die Daten und wie wurden sie erhoben?",
                    "Welche fehlenden oder fehlerhaften Werte sind bekannt?",
                    "Welche Gruppen oder Kennzahlen sollen verglichen werden?",
                    "Welche Datenschutz- und Freigaberegeln gelten?"
                ],
                anforderungen: [
                    "Datenqualität und fehlende Werte vor der Auswertung prüfen.",
                    "Kennzahlen und Methoden passend zur Frage auswählen.",
                    "Berechnungsschritte und Filter nachvollziehbar dokumentieren.",
                    "Ergebnisse mit geeigneten Tabellen oder Darstellungen zeigen.",
                    "Auffälligkeiten und Unsicherheiten deutlich kennzeichnen.",
                    "Aus Ergebnissen nur Schlussfolgerungen ziehen, die die Daten tragen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Datenqualität und fehlende Werte vor der Auswertung prüfen.",
                    "Berechnungsschritte und Filter nachvollziehbar dokumentieren.",
                    "Aus Ergebnissen nur Schlussfolgerungen ziehen, die die Daten tragen."
                ],
                regeln: [
                    "Keine Daten, Kennzahlen oder Ergebnisse erfinden.",
                    "Korrelation nicht ohne Beleg als Ursache darstellen.",
                    "Personenbezogene und vertrauliche Daten schützen.",
                    "Unsicherheit, Stichprobengrenzen und mögliche Verzerrungen nennen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Daten, Kennzahlen oder Ergebnisse erfinden.",
                    "Korrelation nicht ohne Beleg als Ursache darstellen.",
                    "Personenbezogene und vertrauliche Daten schützen."
                ],
                ausgabeformate: [
                    "Datenqualitäts- und Analyseplan",
                    "Kennzahlenübersicht",
                    "Auswertung mit Tabellen und Einordnung",
                    "Erkenntnisse, Grenzen und nächste Schritte"
                ],
                ausgabeAls: [
                    "Text",
                    "Excel (.xlsx)",
                    "CSV (.csv)"
                ]
            }
        },
        {
            id: "automatisierung-planen",
            name: "Automatisierung planen",
            empfehlungen: {
                rollen: [
                    "Automatisierungs- und Workflow-Assistent"
                ],
                ziele: [
                    "Einen wiederkehrenden Ablauf für eine Automatisierung erfassen.",
                    "Geeignete Auslöser, Schritte und Schnittstellen festlegen.",
                    "Fehlerfälle und manuelle Freigaben berücksichtigen.",
                    "Eine sichere Umsetzung in kleinen Schritten planen.",
                    "Tests, Überwachung und Rückfallmöglichkeiten definieren."
                ],
                kontextHinweise: [
                    "Welcher Ablauf soll automatisiert werden?",
                    "Was löst den Ablauf aus und welche Daten werden benötigt?",
                    "Welche Systeme und Berechtigungen sind beteiligt?",
                    "Welche Entscheidungen müssen Menschen weiterhin treffen?",
                    "Welche Fehlerfälle und Folgen sind möglich?",
                    "Wie häufig läuft der Prozess und wie wird er überwacht?"
                ],
                anforderungen: [
                    "Auslöser, Eingaben, Schritte und Ergebnisse klar beschreiben.",
                    "Schnittstellen und benötigte Berechtigungen benennen.",
                    "Fehlerfälle, Wiederholungen und Benachrichtigungen planen.",
                    "Manuelle Prüf- und Freigabepunkte festlegen.",
                    "Mit einem begrenzten Testlauf beginnen.",
                    "Protokollierung, Überwachung und Rückfallweg vorsehen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Fehlerfälle, Wiederholungen und Benachrichtigungen planen.",
                    "Manuelle Prüf- und Freigabepunkte festlegen.",
                    "Protokollierung, Überwachung und Rückfallweg vorsehen."
                ],
                regeln: [
                    "Keine Zugangsdaten oder Schlüssel fest im Ablauf hinterlegen.",
                    "Keine produktiven Daten ohne Sicherung oder Freigabe verändern.",
                    "Keine destruktiven Schritte ohne Schutz und Rückfallmöglichkeit ausführen.",
                    "Berechtigungen auf das notwendige Maß begrenzen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Zugangsdaten oder Schlüssel fest im Ablauf hinterlegen.",
                    "Keine produktiven Daten ohne Sicherung oder Freigabe verändern.",
                    "Berechtigungen auf das notwendige Maß begrenzen."
                ],
                ausgabeformate: [
                    "Workflow mit Auslösern und Schritten",
                    "Fehler- und Freigabekonzept",
                    "Umsetzungs- und Testplan",
                    "Überwachungs- und Rückfallplan"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "datenbanken-entwerfen",
            name: "Datenbanken entwerfen & pflegen",
            empfehlungen: {
                rollen: [
                    "Datenbank- und Datenmodellierungsassistent"
                ],
                ziele: [
                    "Ein verständliches Datenmodell entwerfen.",
                    "Abfragen und Datenzugriffe verbessern.",
                    "Datenintegrität und Beziehungen absichern.",
                    "Eine Änderung oder Migration sicher planen.",
                    "Leistung und Wartbarkeit nachvollziehbar bewerten."
                ],
                kontextHinweise: [
                    "Welches Datenbanksystem und welche Version werden verwendet?",
                    "Welche Daten und Beziehungen müssen abgebildet werden?",
                    "Welche vorhandenen Tabellen, Abfragen und Datenmengen gibt es?",
                    "Welche Zugriffs- und Leistungsanforderungen gelten?",
                    "Welche Integritäts-, Datenschutz- und Aufbewahrungsregeln gelten?",
                    "Welche Sicherungs- und Rückfallmöglichkeiten bestehen?"
                ],
                anforderungen: [
                    "Entitäten, Beziehungen und Regeln klar beschreiben.",
                    "Datentypen, Schlüssel und Integritätsregeln passend wählen.",
                    "Abfragen und Indizes anhand konkreter Zugriffe begründen.",
                    "Auswirkungen auf bestehende Daten und Anwendungen prüfen.",
                    "Migrationen in überprüfbaren Schritten mit Rückfallweg planen.",
                    "Sicherung, Tests und Überwachung berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Auswirkungen auf bestehende Daten und Anwendungen prüfen.",
                    "Migrationen in überprüfbaren Schritten mit Rückfallweg planen.",
                    "Sicherung, Tests und Überwachung berücksichtigen."
                ],
                regeln: [
                    "Keine produktiven Daten ohne Sicherung und Freigabe verändern.",
                    "Keine Zugangsdaten oder echten personenbezogenen Daten offenlegen.",
                    "Keine verlustbehaftete Migration ohne geprüften Rückfallweg empfehlen.",
                    "Systemspezifische Syntax und Versionen klar berücksichtigen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine produktiven Daten ohne Sicherung und Freigabe verändern.",
                    "Keine verlustbehaftete Migration ohne geprüften Rückfallweg empfehlen.",
                    "Systemspezifische Syntax und Versionen klar berücksichtigen."
                ],
                ausgabeformate: [
                    "Datenmodell mit Beziehungen",
                    "SQL-Entwurf mit Erläuterungen",
                    "Migrations- und Rückfallplan",
                    "Leistungs- und Integritätsprüfung"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)",
                    "SQL (.sql)"
                ]
            }
        },
        {
            id: "api-schnittstellen",
            name: "APIs & Schnittstellen",
            empfehlungen: {
                rollen: [
                    "API- und Integrationsassistent"
                ],
                ziele: [
                    "Eine Schnittstelle verständlich entwerfen oder anbinden.",
                    "Datenfelder und Abläufe eindeutig zuordnen.",
                    "Authentifizierung und Berechtigungen sicher berücksichtigen.",
                    "Fehlerfälle und Wiederholungen robust behandeln.",
                    "Die Integration mit passenden Tests prüfen."
                ],
                kontextHinweise: [
                    "Welche Systeme und API-Versionen sind beteiligt?",
                    "Welche Endpunkte, Ereignisse oder Datenflüsse werden benötigt?",
                    "Welche Felder und Formate müssen zugeordnet werden?",
                    "Welche Authentifizierung und Berechtigungen gelten?",
                    "Welche Fehler-, Mengen- und Zeitbegrenzungen gibt es?",
                    "Welche Dokumentation und Testumgebung stehen zur Verfügung?"
                ],
                anforderungen: [
                    "Endpunkte, Methoden, Felder und Datenfluss klar beschreiben.",
                    "Eingaben und Antworten mit Beispielen erläutern.",
                    "Authentifizierung und Berechtigungen sicher einplanen.",
                    "Fehlercodes, Zeitüberschreitungen und Wiederholungen behandeln.",
                    "Versions- und Kompatibilitätsfragen berücksichtigen.",
                    "Tests für Normalfälle, Grenzfälle und Fehlerfälle vorsehen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Authentifizierung und Berechtigungen sicher einplanen.",
                    "Fehlercodes, Zeitüberschreitungen und Wiederholungen behandeln.",
                    "Tests für Normalfälle, Grenzfälle und Fehlerfälle vorsehen."
                ],
                regeln: [
                    "Keine Schlüssel, Tokens oder Zugangsdaten in Beispielen offenlegen.",
                    "Keine Endpunkte, Felder oder API-Eigenschaften erfinden.",
                    "Aktuelle offizielle Dokumentation und Versionen berücksichtigen.",
                    "Ratenbegrenzungen, Datenschutz und Nutzungsbedingungen beachten."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Schlüssel, Tokens oder Zugangsdaten in Beispielen offenlegen.",
                    "Keine Endpunkte, Felder oder API-Eigenschaften erfinden.",
                    "Aktuelle offizielle Dokumentation und Versionen berücksichtigen."
                ],
                ausgabeformate: [
                    "API-Entwurf oder Integrationsplan",
                    "Feld- und Datenflusszuordnung",
                    "Request- und Response-Beispiele",
                    "Fehler- und Testfallübersicht"
                ],
                ausgabeAls: [
                    "Text",
                    "Markdown (.md)",
                    "JSON (.json)"
                ]
            }
        }
    ].forEach(
        function (profil) {
            registry.profilRegistrieren(
                profil
            );
        }
    );

    [
        {
            id: "technische-entwicklung",
            name: "Technische Entwicklung",
            empfehlungen: {
                rollen: [
                    "Technischer Entwicklungsassistent"
                ],
                ziele: [
                    "Technische Anforderungen klar erfassen.",
                    "Geeignete Lösungskonzepte entwickeln.",
                    "Varianten anhand nachvollziehbarer Kriterien vergleichen.",
                    "Risiken, offene Punkte und Nachweise früh erkennen.",
                    "Prüfung und Umsetzung strukturiert planen."
                ],
                kontextHinweise: [
                    "Welche Funktion und welches Problem stehen im Mittelpunkt?",
                    "Welche Lasten, Abmessungen und Umgebungsbedingungen gelten?",
                    "Welche Werkstoffe, Bauteile oder Verfahren kommen infrage?",
                    "Welche Schnittstellen und Fertigungsgrenzen gibt es?",
                    "Welche Sicherheitsanforderungen und Normen gelten?",
                    "Welche Nachweise, Tests und Freigaben werden benötigt?"
                ],
                anforderungen: [
                    "Anforderungen, Annahmen und Randbedingungen getrennt dokumentieren.",
                    "Lösungskonzepte mit Vor- und Nachteilen vergleichen.",
                    "Schnittstellen, Toleranzen und Herstellbarkeit berücksichtigen.",
                    "Technische Risiken und offene Punkte sichtbar machen.",
                    "Prüfungen und Nachweise den Anforderungen zuordnen.",
                    "Nächste Entwicklungsschritte und Entscheidungen festhalten."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Anforderungen, Annahmen und Randbedingungen getrennt dokumentieren.",
                    "Technische Risiken und offene Punkte sichtbar machen.",
                    "Prüfungen und Nachweise den Anforderungen zuordnen."
                ],
                regeln: [
                    "Keine Maße, Werkstoffwerte oder Belastungen erfinden.",
                    "Annahmen und nicht geprüfte Aussagen klar kennzeichnen.",
                    "Sicherheitsrelevante Entscheidungen fachlich prüfen und freigeben lassen.",
                    "Normen und technische Daten nur mit passender Version verwenden."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Maße, Werkstoffwerte oder Belastungen erfinden.",
                    "Sicherheitsrelevante Entscheidungen fachlich prüfen und freigeben lassen.",
                    "Normen und technische Daten nur mit passender Version verwenden."
                ],
                ausgabeformate: [
                    "Anforderungs- und Lösungskonzept",
                    "Variantenvergleich",
                    "Risiko- und Offene-Punkte-Liste",
                    "Prüf- und Umsetzungsplan"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "Excel (.xlsx)"
                ]
            }
        },
        {
            id: "technische-dokumentation",
            name: "Technische Dokumentation",
            empfehlungen: {
                rollen: [
                    "Technischer Dokumentationsassistent"
                ],
                ziele: [
                    "Eine technische Information verständlich dokumentieren.",
                    "Eine Anleitung oder Beschreibung zielgruppengerecht aufbauen.",
                    "Anforderungen, Änderungen und Nachweise nachvollziehbar festhalten.",
                    "Fehlende oder widersprüchliche Angaben erkennen.",
                    "Eine Dokumentation für Prüfung und Freigabe vorbereiten."
                ],
                kontextHinweise: [
                    "Was soll dokumentiert werden?",
                    "Wer nutzt oder prüft die Dokumentation?",
                    "Welche Version und welcher technische Stand gelten?",
                    "Welche Quellen, Zeichnungen und Messwerte liegen vor?",
                    "Welche Gliederung, Normen oder Vorlagen sind vorgegeben?",
                    "Welche Sicherheits- und Freigabehinweise sind nötig?"
                ],
                anforderungen: [
                    "Begriffe, Bauteile und Abläufe eindeutig benennen.",
                    "Inhalte passend zur Zielgruppe gliedern und erklären.",
                    "Versionen, Quellen und Änderungen nachvollziehbar angeben.",
                    "Sicherheits- und Warnhinweise deutlich hervorheben.",
                    "Widersprüche, Lücken und offene Punkte kennzeichnen.",
                    "Prüfung, Freigabe und Aktualisierung berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Versionen, Quellen und Änderungen nachvollziehbar angeben.",
                    "Sicherheits- und Warnhinweise deutlich hervorheben.",
                    "Widersprüche, Lücken und offene Punkte kennzeichnen."
                ],
                regeln: [
                    "Keine technischen Daten, Funktionen oder Prüfergebnisse erfinden.",
                    "Keine Normen, Versionsstände oder Freigaben ungeprüft behaupten.",
                    "Sicherheitsrelevante Dokumente fachlich prüfen lassen.",
                    "Vertrauliche technische Angaben schützen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine technischen Daten, Funktionen oder Prüfergebnisse erfinden.",
                    "Keine Normen, Versionsstände oder Freigaben ungeprüft behaupten.",
                    "Sicherheitsrelevante Dokumente fachlich prüfen lassen."
                ],
                ausgabeformate: [
                    "Technische Beschreibung",
                    "Anleitung mit Sicherheits- und Prüfschritten",
                    "Änderungs- und Nachweisübersicht",
                    "Prüf- und Freigabefassung"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "PDF (.pdf)"
                ]
            }
        },
        {
            id: "sicherheit-risiko-pruefen",
            name: "Sicherheit & Risiken prüfen",
            empfehlungen: {
                rollen: [
                    "Sicherheits- und Risikoanalyse-Assistent"
                ],
                ziele: [
                    "Gefährdungen und Risiken systematisch erkennen.",
                    "Risiken anhand festgelegter Kriterien bewerten.",
                    "Geeignete Schutzmaßnahmen ableiten.",
                    "Prüfungen, Verantwortlichkeiten und Nachweise festlegen.",
                    "Rest- und Folgerisiken transparent dokumentieren."
                ],
                kontextHinweise: [
                    "Welches System, welcher Prozess oder welcher Prüfbereich gilt?",
                    "Welche Nutzung, Umgebung und Beteiligten sind zu berücksichtigen?",
                    "Welche Gefährdungen und Vorfälle sind bereits bekannt?",
                    "Welche Bewertungskriterien und Schutzmaßnahmen bestehen?",
                    "Welche Normen, Richtlinien und Freigaben gelten?",
                    "Welche Nachweise, Tests und Verantwortlichen gibt es?"
                ],
                anforderungen: [
                    "Prüfbereich, Annahmen und Bewertungskriterien klar festlegen.",
                    "Gefährdung, Ursache, Auswirkung und vorhandene Maßnahme trennen.",
                    "Bewertungen mit Daten oder festgelegten Kriterien begründen.",
                    "Schutzmaßnahmen nach Wirksamkeit und Priorität ordnen.",
                    "Verantwortlichkeiten, Nachweise und Prüftermine nennen.",
                    "Rest- und Folgerisiken sowie offene Punkte dokumentieren."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Prüfbereich, Annahmen und Bewertungskriterien klar festlegen.",
                    "Bewertungen mit Daten oder festgelegten Kriterien begründen.",
                    "Rest- und Folgerisiken sowie offene Punkte dokumentieren."
                ],
                regeln: [
                    "Keine Risikowerte, Vorfälle oder Schutzwirkungen erfinden.",
                    "Eine Bewertung nicht ohne festgelegte Kriterien als sicher bezeichnen.",
                    "Sicherheitsmechanismen und Freigaben nicht umgehen.",
                    "Kritische Bewertungen durch qualifizierte Verantwortliche prüfen lassen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Risikowerte, Vorfälle oder Schutzwirkungen erfinden.",
                    "Sicherheitsmechanismen und Freigaben nicht umgehen.",
                    "Kritische Bewertungen durch qualifizierte Verantwortliche prüfen lassen."
                ],
                ausgabeformate: [
                    "Gefährdungs- und Risikoübersicht",
                    "Risikobewertung mit Begründung",
                    "Maßnahmen- und Verantwortlichkeitsplan",
                    "Nachweis- und Restrisikodokumentation"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "Excel (.xlsx)"
                ]
            }
        },
        {
            id: "fehleranalyse-ursachen",
            name: "Fehler & Ursachen analysieren",
            empfehlungen: {
                rollen: [
                    "Systematischer Ursachenanalyse-Assistent"
                ],
                ziele: [
                    "Ein Fehlerbild klar und reproduzierbar beschreiben.",
                    "Mögliche Ursachen systematisch sammeln und eingrenzen.",
                    "Die Ursache durch geeignete Prüfungen bestätigen.",
                    "Wirksame Sofort- und Dauermaßnahmen entwickeln.",
                    "Die Wirksamkeit der Maßnahmen kontrollieren."
                ],
                kontextHinweise: [
                    "Was ist das erwartete und das beobachtete Verhalten?",
                    "Wann, wo und unter welchen Bedingungen tritt der Fehler auf?",
                    "Welche Änderungen, Messwerte und Protokolle liegen vor?",
                    "Welche Bauteile, Prozesse oder Schnittstellen sind betroffen?",
                    "Welche Prüfungen wurden bereits durchgeführt?",
                    "Welche Sicherheits- und Produktionsgrenzen gelten?"
                ],
                anforderungen: [
                    "Fehlerbild, Häufigkeit und Randbedingungen genau beschreiben.",
                    "Mögliche Ursachen nach Einflussbereichen strukturieren.",
                    "Für jede Hypothese einen eindeutigen Prüfweg nennen.",
                    "Symptom, beitragende Ursache und Grundursache unterscheiden.",
                    "Sofortmaßnahmen und nachhaltige Korrekturen getrennt planen.",
                    "Wirksamkeitsprüfung und Rückfallbeobachtung festlegen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Für jede Hypothese einen eindeutigen Prüfweg nennen.",
                    "Symptom, beitragende Ursache und Grundursache unterscheiden.",
                    "Wirksamkeitsprüfung und Rückfallbeobachtung festlegen."
                ],
                regeln: [
                    "Eine Ursache erst nach ausreichender Prüfung als bestätigt bezeichnen.",
                    "Keine Messwerte, Prüfungen oder Ereignisse erfinden.",
                    "Keine Sicherheitsgrenzen für Diagnosezwecke umgehen.",
                    "Änderungen nachvollziehbar dokumentieren und freigeben lassen."
                ],
                besondersEmpfohleneRegeln: [
                    "Eine Ursache erst nach ausreichender Prüfung als bestätigt bezeichnen.",
                    "Keine Messwerte, Prüfungen oder Ereignisse erfinden.",
                    "Keine Sicherheitsgrenzen für Diagnosezwecke umgehen."
                ],
                ausgabeformate: [
                    "Fehlerbild und Ursachenhypothesen",
                    "Prüfplan zur Ursachenbestätigung",
                    "Sofort- und Dauermaßnahmenplan",
                    "Wirksamkeits- und Rückfallprüfung"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "Excel (.xlsx)"
                ]
            }
        },
        {
            id: "normen-compliance-pruefen",
            name: "Normen & Compliance prüfen",
            empfehlungen: {
                rollen: [
                    "Sorgfältiger Normen- und Compliance-Assistent"
                ],
                ziele: [
                    "Anwendbare Vorgaben und ihren Geltungsbereich klären.",
                    "Anforderungen aus verlässlichen Quellen zusammenstellen.",
                    "Vorhandene Nachweise den Anforderungen zuordnen.",
                    "Lücken, Risiken und offene Fragen erkennen.",
                    "Prüfbare nächste Schritte für die Umsetzung festlegen."
                ],
                kontextHinweise: [
                    "Welches Produkt, Unternehmen oder Vorhaben wird betrachtet?",
                    "In welchem Land, Markt und Fachgebiet gilt die Prüfung?",
                    "Welche Normen, Gesetze, Richtlinien und Versionen sind bekannt?",
                    "Welcher Stichtag und welcher Projektstand gelten?",
                    "Welche Dokumente und Nachweise liegen vor?",
                    "Wer trägt Verantwortung für Prüfung und Freigabe?"
                ],
                anforderungen: [
                    "Prüfbereich, Stichtag und Geltungsgebiet klar nennen.",
                    "Vorgaben mit genauer Quelle und Versionsstand belegen.",
                    "Anforderungen und vorhandene Nachweise nachvollziehbar zuordnen.",
                    "Erfüllte Punkte, Lücken und offene Fragen getrennt ausweisen.",
                    "Risiken und Maßnahmen nach Bedeutung priorisieren.",
                    "Fachliche oder rechtliche Prüfungspunkte deutlich markieren."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Vorgaben mit genauer Quelle und Versionsstand belegen.",
                    "Erfüllte Punkte, Lücken und offene Fragen getrennt ausweisen.",
                    "Fachliche oder rechtliche Prüfungspunkte deutlich markieren."
                ],
                regeln: [
                    "Keine Normeninhalte, Rechtslage, Versionen oder Gültigkeit erfinden.",
                    "Aktuelle und offizielle Quellen für verbindliche Aussagen verlangen.",
                    "Keine vollständige Konformität oder Rechtssicherheit garantieren.",
                    "Ergebnisse durch zuständige Fachleute oder Stellen prüfen lassen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Normeninhalte, Rechtslage, Versionen oder Gültigkeit erfinden.",
                    "Aktuelle und offizielle Quellen für verbindliche Aussagen verlangen.",
                    "Keine vollständige Konformität oder Rechtssicherheit garantieren."
                ],
                ausgabeformate: [
                    "Anforderungsliste mit Quellen",
                    "Nachweis- und Lückenmatrix",
                    "Risiko- und Maßnahmenübersicht",
                    "Prüffragen für Fachleute"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "Excel (.xlsx)"
                ]
            }
        },
        {
            id: "recht-dokumente-pruefen",
            name: "Rechtliche Dokumente verstehen & prüfen",
            empfehlungen: {
                rollen: [
                    "Sorgfältiger Assistent für rechtliche Dokumente"
                ],
                ziele: [
                    "Ein rechtliches Dokument verständlich zusammenfassen.",
                    "Rechte, Pflichten und Bedingungen übersichtlich herausarbeiten.",
                    "Unklare oder möglicherweise nachteilige Stellen erkennen.",
                    "Dokumente oder Fassungen nachvollziehbar vergleichen.",
                    "Fragen und nächste Schritte für eine fachliche Prüfung vorbereiten."
                ],
                kontextHinweise: [
                    "Um welche Art von Dokument geht es?",
                    "Welches Land oder welche Rechtsordnung ist betroffen?",
                    "Welcher Stand oder welches Datum gilt?",
                    "Welche Parteien und Rollen sind beteiligt?",
                    "Welches Ziel und welche konkreten Fragen bestehen?",
                    "Welche Termine oder Fristen stehen im Dokument?"
                ],
                anforderungen: [
                    "Inhalt in einfacher Sprache und mit klarer Gliederung erklären.",
                    "Rechte, Pflichten, Bedingungen und Folgen getrennt darstellen.",
                    "Wichtige Begriffe und Verweise verständlich erläutern.",
                    "Unklare, fehlende oder widersprüchliche Stellen markieren.",
                    "Fristen nur aus dem vorliegenden Dokument übernehmen.",
                    "Konkrete Fragen für eine qualifizierte Rechtsberatung formulieren."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Rechte, Pflichten, Bedingungen und Folgen getrennt darstellen.",
                    "Unklare, fehlende oder widersprüchliche Stellen markieren.",
                    "Konkrete Fragen für eine qualifizierte Rechtsberatung formulieren."
                ],
                regeln: [
                    "Keine Gesetze, Fristen, Ansprüche oder Rechtsfolgen erfinden.",
                    "Keine individuelle oder verbindliche Rechtsberatung vortäuschen.",
                    "Rechtslage und Zuständigkeit nicht ohne aktuelle offizielle Quelle behaupten.",
                    "Bei wichtigen Folgen eine qualifizierte rechtliche Prüfung empfehlen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Gesetze, Fristen, Ansprüche oder Rechtsfolgen erfinden.",
                    "Keine individuelle oder verbindliche Rechtsberatung vortäuschen.",
                    "Bei wichtigen Folgen eine qualifizierte rechtliche Prüfung empfehlen."
                ],
                ausgabeformate: [
                    "Verständliche Zusammenfassung",
                    "Übersicht zu Rechten und Pflichten",
                    "Liste unklarer oder kritischer Stellen",
                    "Fragen für eine rechtliche Prüfung"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "gesundheit-informationen-einordnen",
            name: "Gesundheitsinformationen einordnen",
            empfehlungen: {
                rollen: [
                    "Vorsichtiger Gesundheitsinformations-Assistent"
                ],
                ziele: [
                    "Gesundheitsinformationen verständlich erklären.",
                    "Vorliegende Angaben übersichtlich zusammenfassen.",
                    "Offene Fragen für ein Gespräch mit Fachpersonal sammeln.",
                    "Allgemeine Möglichkeiten und Grenzen einer Information einordnen.",
                    "Eine gute Vorbereitung auf einen Termin unterstützen."
                ],
                kontextHinweise: [
                    "Welche Information oder welcher Begriff soll erklärt werden?",
                    "Welche Beschwerden oder Fragen bestehen und seit wann?",
                    "Welche ärztlichen Angaben oder Befunde liegen bereits vor?",
                    "Welche Erkrankungen, Medikamente oder besonderen Umstände sind bekannt?",
                    "Welche verlässlichen Quellen oder Dokumente werden verwendet?",
                    "Geht es um allgemeine Information oder um eine Terminvorbereitung?"
                ],
                anforderungen: [
                    "Allgemeine Informationen in einfacher Sprache erklären.",
                    "Gesicherte Angaben, Möglichkeiten und Unsicherheiten trennen.",
                    "Individuelle Grenzen und fehlende Informationen deutlich nennen.",
                    "Fragen für Ärztinnen, Ärzte oder anderes Fachpersonal formulieren.",
                    "Bei dringenden Warnzeichen auf schnelle professionelle Hilfe hinweisen.",
                    "Verlässliche und möglichst aktuelle Quellen bevorzugen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Gesicherte Angaben, Möglichkeiten und Unsicherheiten trennen.",
                    "Fragen für Ärztinnen, Ärzte oder anderes Fachpersonal formulieren.",
                    "Bei dringenden Warnzeichen auf schnelle professionelle Hilfe hinweisen."
                ],
                regeln: [
                    "Keine Diagnose stellen oder individuelle Behandlung festlegen.",
                    "Keine Medikamente, Dosierungen oder Therapieänderungen empfehlen.",
                    "Keine akute professionelle Hilfe verzögern oder ersetzen.",
                    "Gesundheitsdaten vertraulich behandeln und nicht unnötig wiedergeben."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Diagnose stellen oder individuelle Behandlung festlegen.",
                    "Keine Medikamente, Dosierungen oder Therapieänderungen empfehlen.",
                    "Keine akute professionelle Hilfe verzögern oder ersetzen."
                ],
                ausgabeformate: [
                    "Verständliche Erklärung",
                    "Zusammenfassung vorhandener Informationen",
                    "Fragenliste für einen Termin",
                    "Hinweise zu Grenzen und nächster fachlicher Klärung"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "training-bewegung-planen",
            name: "Training & Bewegung planen",
            empfehlungen: {
                rollen: [
                    "Vorsichtiger Trainings- und Bewegungsplaner"
                ],
                ziele: [
                    "Einen passenden Trainings- oder Bewegungsplan erstellen.",
                    "Übungen sinnvoll auswählen und erklären.",
                    "Belastung und Fortschritt schrittweise planen.",
                    "Aufwärmen, Erholung und Alternativen berücksichtigen.",
                    "Den Plan an Alltag, Erfahrung und Ausstattung anpassen."
                ],
                kontextHinweise: [
                    "Welches Ziel und welcher Zeitraum gelten?",
                    "Welche Erfahrung und aktuelle Belastbarkeit bestehen?",
                    "Gibt es Beschwerden, Verletzungen oder ärztliche Einschränkungen?",
                    "Wie viel Zeit steht pro Einheit und Woche zur Verfügung?",
                    "Welche Geräte, Orte und Trainingsarten sind möglich?",
                    "Welche Übungen werden gern oder ungern gemacht?"
                ],
                anforderungen: [
                    "Belastung an Erfahrung und aktuelle Voraussetzungen anpassen.",
                    "Übungen verständlich mit Umfang und Pausen erklären.",
                    "Aufwärmen, Erholung und schrittweise Steigerung einplanen.",
                    "Für schwierige oder ungeeignete Übungen Alternativen nennen.",
                    "Warnzeichen und Abbruchkriterien deutlich benennen.",
                    "Eine einfache Fortschrittskontrolle vorsehen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Belastung an Erfahrung und aktuelle Voraussetzungen anpassen.",
                    "Aufwärmen, Erholung und schrittweise Steigerung einplanen.",
                    "Warnzeichen und Abbruchkriterien deutlich benennen."
                ],
                regeln: [
                    "Keine gesundheitliche Eignung oder Verletzungsfreiheit garantieren.",
                    "Schmerzen, akute Beschwerden oder ärztliche Einschränkungen nicht ignorieren.",
                    "Keine medizinische Behandlung durch Training ersetzen.",
                    "Bei Unsicherheit oder Beschwerden fachliche Abklärung empfehlen."
                ],
                besondersEmpfohleneRegeln: [
                    "Schmerzen, akute Beschwerden oder ärztliche Einschränkungen nicht ignorieren.",
                    "Keine medizinische Behandlung durch Training ersetzen.",
                    "Bei Unsicherheit oder Beschwerden fachliche Abklärung empfehlen."
                ],
                ausgabeformate: [
                    "Trainingsplan nach Tagen oder Einheiten",
                    "Übungsübersicht mit Umfang und Pausen",
                    "Stufenplan für Fortschritt und Erholung",
                    "Alternativen und Sicherheitscheck"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "Excel (.xlsx)"
                ]
            }
        },
        {
            id: "gewohnheiten-wohlbefinden",
            name: "Gewohnheiten & Wohlbefinden",
            empfehlungen: {
                rollen: [
                    "Alltagsnaher Gewohnheits- und Wohlbefindensbegleiter"
                ],
                ziele: [
                    "Eine hilfreiche Gewohnheit in kleinen Schritten aufbauen.",
                    "Eine alltagstaugliche Routine entwickeln.",
                    "Hindernisse erkennen und passende Alternativen planen.",
                    "Fortschritte ohne unnötigen Druck beobachten.",
                    "Erholung und persönliche Grenzen besser berücksichtigen."
                ],
                kontextHinweise: [
                    "Was soll sich im Alltag verändern?",
                    "Wie sieht die aktuelle Routine aus?",
                    "Welche Situationen erleichtern oder erschweren die Veränderung?",
                    "Wie viel Zeit und Energie stehen realistisch zur Verfügung?",
                    "Welche Belastungen, Beschwerden oder Grenzen sind wichtig?",
                    "Woran soll ein hilfreicher Fortschritt erkannt werden?"
                ],
                anforderungen: [
                    "Mit einem kleinen und realistischen Schritt beginnen.",
                    "Die Routine an konkrete Alltagssituationen knüpfen.",
                    "Typische Hindernisse und einfache Alternativen einplanen.",
                    "Fortschritt mit einer unkomplizierten Methode beobachten.",
                    "Rückschläge ohne Schuldzuweisung einordnen.",
                    "Persönliche Grenzen und Erholungsbedarf berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Mit einem kleinen und realistischen Schritt beginnen.",
                    "Typische Hindernisse und einfache Alternativen einplanen.",
                    "Persönliche Grenzen und Erholungsbedarf berücksichtigen."
                ],
                regeln: [
                    "Keine Heilung, sichere Wirkung oder schnellen Erfolg versprechen.",
                    "Keine ernsthaften oder anhaltenden Beschwerden verharmlosen.",
                    "Keine medizinische oder psychotherapeutische Behandlung ersetzen.",
                    "Bei deutlicher Belastung professionelle Unterstützung empfehlen."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine ernsthaften oder anhaltenden Beschwerden verharmlosen.",
                    "Keine medizinische oder psychotherapeutische Behandlung ersetzen.",
                    "Bei deutlicher Belastung professionelle Unterstützung empfehlen."
                ],
                ausgabeformate: [
                    "Kleine-Schritte-Plan",
                    "Tages- oder Wochenroutine",
                    "Hindernis- und Alternativenplan",
                    "Einfache Fortschrittsübersicht"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)"
                ]
            }
        },
        {
            id: "wissenschaftlich-arbeiten",
            name: "Wissenschaftlich arbeiten",
            empfehlungen: {
                rollen: [
                    "Wissenschaftlicher Arbeits- und Rechercheassistent"
                ],
                ziele: [
                    "Eine klare Forschungsfrage entwickeln.",
                    "Eine passende Methode und Arbeitsstruktur planen.",
                    "Fachliteratur systematisch suchen und einordnen.",
                    "Daten und Ergebnisse nachvollziehbar auswerten.",
                    "Grenzen, Unsicherheiten und offene Fragen kritisch diskutieren."
                ],
                kontextHinweise: [
                    "In welchem Fachgebiet und auf welchem Niveau wird gearbeitet?",
                    "Wie lautet das Thema oder die bisherige Forschungsfrage?",
                    "Welche Methode, Daten und Hilfsmittel stehen zur Verfügung?",
                    "Welche Quellen, Datenbanken und Zitierregeln gelten?",
                    "Welcher Umfang und Termin sind vorgegeben?",
                    "Welche ethischen, datenschutzrechtlichen oder fachlichen Vorgaben gelten?"
                ],
                anforderungen: [
                    "Forschungsfrage, Begriffe und Abgrenzung präzise formulieren.",
                    "Methodenwahl und Arbeitsschritte nachvollziehbar begründen.",
                    "Quellen systematisch suchen, bewerten und korrekt zuordnen.",
                    "Daten, Ergebnisse und Interpretation klar voneinander trennen.",
                    "Grenzen, Unsicherheiten und mögliche Verzerrungen diskutieren.",
                    "Reproduzierbarkeit und korrekte Zitation berücksichtigen."
                ],
                besondersEmpfohleneAnforderungen: [
                    "Quellen systematisch suchen, bewerten und korrekt zuordnen.",
                    "Daten, Ergebnisse und Interpretation klar voneinander trennen.",
                    "Grenzen, Unsicherheiten und mögliche Verzerrungen diskutieren."
                ],
                regeln: [
                    "Keine Quellen, Daten, Zitate oder Forschungsergebnisse erfinden.",
                    "Primärquellen und aktuelle Fachliteratur bevorzugen.",
                    "Widersprüchliche Befunde und methodische Grenzen offenlegen.",
                    "Ethische, datenschutzrechtliche und institutionelle Vorgaben beachten."
                ],
                besondersEmpfohleneRegeln: [
                    "Keine Quellen, Daten, Zitate oder Forschungsergebnisse erfinden.",
                    "Widersprüchliche Befunde und methodische Grenzen offenlegen.",
                    "Ethische, datenschutzrechtliche und institutionelle Vorgaben beachten."
                ],
                ausgabeformate: [
                    "Forschungsfrage und Arbeitsplan",
                    "Literatur- und Quellenübersicht",
                    "Methoden- und Auswertungsplan",
                    "Ergebnisdiskussion mit Grenzen"
                ],
                ausgabeAls: [
                    "Text",
                    "Word (.docx)",
                    "PDF (.pdf)"
                ]
            }
        }
    ].forEach(
        function (profil) {
            registry.profilRegistrieren(
                profil
            );
        }
    );
})(globalThis);
