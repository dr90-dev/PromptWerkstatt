(function (global) {
    "use strict";

    const registry =
        global.PromptWerkstattDatenV2;


    registry.profilRegistrieren({
        id: "planen-organisieren",
        name: "Planen & Organisieren",
        empfehlungen: {
            rollen: [
                "Planungs- und Organisationsassistent",
                "Strukturierungsberater"
            ],
            ziele: [
                "Einen realistischen und umsetzbaren Plan erstellen.",
                "Aufgaben, Prioritäten und Abhängigkeiten sinnvoll ordnen."
            ],
            kontextHinweise: [
                "Ziel oder gewünschtes Ergebnis",
                "Zeitraum oder fester Termin",
                "verfügbare Zeit",
                "verfügbare Ressourcen und beteiligte Personen",
                "Prioritäten",
                "Einschränkungen und feste Rahmenbedingungen"
            ],
            anforderungen: [
                "Konkrete und umsetzbare Schritte formulieren.",
                "Arbeitsschritte in eine sinnvolle Reihenfolge bringen.",
                "Zeitaufwand und Termine realistisch einplanen.",
                "Prioritäten klar sichtbar machen.",
                "Abhängigkeiten und notwendige Voraussetzungen berücksichtigen.",
                "Den Plan übersichtlich und leicht erfassbar darstellen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Konkrete und umsetzbare Schritte formulieren.",
                "Zeitaufwand und Termine realistisch einplanen.",
                "Abhängigkeiten und notwendige Voraussetzungen berücksichtigen."
            ],
            regeln: [
                "Fehlende Zeit- oder Ressourcenangaben als offene Punkte kennzeichnen.",
                "Schätzungen und Annahmen ausdrücklich kenntlich machen.",
                "Keine nicht genannten fachlichen oder persönlichen Rahmenbedingungen voraussetzen."
            ],
            ausgabeformate: [
                "Priorisierter Maßnahmenplan",
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
                "Vergleichsanalyst",
                "Entscheidungsassistent"
            ],
            ziele: [
                "Mehrere Optionen anhand transparenter Kriterien strukturiert vergleichen.",
                "Eine nachvollziehbare Entscheidungsvorlage mit begründeter Empfehlung erstellen."
            ],
            kontextHinweise: [
                "zu vergleichende Optionen",
                "wichtigste Entscheidungskriterien",
                "Gewichtung und Prioritäten",
                "Budget oder andere feste Grenzen",
                "Muss- und Kann-Anforderungen",
                "Einsatzzweck"
            ],
            anforderungen: [
                "Auf alle Optionen dieselben Vergleichskriterien anwenden.",
                "Vor- und Nachteile jeder Option benennen.",
                "Relevante Unterschiede klar und nachvollziehbar darstellen.",
                "Muss- und Kann-Anforderungen getrennt berücksichtigen.",
                "Eine Empfehlung anhand der genannten Kriterien begründen.",
                "Fehlende Vergleichsinformationen sichtbar kennzeichnen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Auf alle Optionen dieselben Vergleichskriterien anwenden.",
                "Relevante Unterschiede klar und nachvollziehbar darstellen.",
                "Eine Empfehlung anhand der genannten Kriterien begründen."
            ],
            regeln: [
                "Nicht belegte Eigenschaften oder Vergleichswerte nicht erfinden.",
                "Fehlende Angaben nicht durch stillschweigende Annahmen ersetzen.",
                "Subjektive Gewichtungen und Werturteile als solche kennzeichnen."
            ],
            ausgabeformate: [
                "Vergleichstabelle",
                "Vor- und Nachteile-Liste",
                "Gewichtete Bewertungsmatrix",
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
                "Quellenanalyst"
            ],
            ziele: [
                "Informationen zu einer klaren Fragestellung systematisch recherchieren.",
                "Quellen vergleichen und belastbare Erkenntnisse nachvollziehbar zusammenfassen."
            ],
            kontextHinweise: [
                "genaue Fragestellung",
                "gewünschte Aktualität oder Stichtag",
                "geografischer oder sachlicher Geltungsbereich",
                "gewünschte Quellenarten",
                "benötigte Detailtiefe"
            ],
            anforderungen: [
                "Fakten, Bewertungen und Schlussfolgerungen klar trennen.",
                "Verwendete Quellen nachvollziehbar benennen.",
                "Aktualität und Geltungsbereich der Informationen berücksichtigen.",
                "Unsicherheiten und fehlende Nachweise kennzeichnen.",
                "Widersprüchliche Quellen und Aussagen sichtbar machen.",
                "Die wichtigsten Erkenntnisse strukturiert zusammenfassen."
            ],
            besondersEmpfohleneAnforderungen: [
                "Fakten, Bewertungen und Schlussfolgerungen klar trennen.",
                "Verwendete Quellen nachvollziehbar benennen.",
                "Widersprüchliche Quellen und Aussagen sichtbar machen."
            ],
            regeln: [
                "Keine Quellen, Fundstellen oder Rechercheergebnisse erfinden.",
                "Nicht überprüfbare Aussagen als offen markieren.",
                "Aus dem Fehlen eines Nachweises keine Gewissheit ableiten."
            ],
            ausgabeformate: [
                "Strukturierte Recherche-Zusammenfassung",
                "Quellenvergleich mit Kernaussagen",
                "Ergebnisübersicht mit Quellen und offenen Fragen"
            ],
            ausgabeAls: [
                "Text",
                "Word (.docx)"
            ]
        }
    });
})(globalThis);
