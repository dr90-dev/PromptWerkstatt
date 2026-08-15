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
        id: "recht",
        name: "Recht, Verwaltung & Regelwerke",
        icon: "⚖️",
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
                "vertraege",
                "Verträge",
                [
                    ["vertrag-verstehen", "Vertrag verstehen"],
                    ["vertrag-zusammenfassen", "Vertrag zusammenfassen"],
                    ["klauseln-vergleichen", "Klauseln vergleichen"],
                    ["risiken-markieren", "Risiken markieren"],
                    ["vertragsentwurf-vorbereiten", "Vertragsentwurf vorbereiten"]
                ]
            ),
            hauptkategorie(
                "behoerden-verwaltung",
                "Behörden & Verwaltung",
                [
                    ["behoerdenschreiben-verstehen", "Behördenschreiben verstehen"],
                    ["antwort-vorbereiten", "Antwort vorbereiten"],
                    ["unterlagen-zusammenstellen", "Unterlagen zusammenstellen"],
                    ["verwaltungsablauf", "Verwaltungsablauf"]
                ]
            ),
            hauptkategorie(
                "formulare-antraege",
                "Formulare & Anträge",
                [
                    ["formular-erklaeren", "Formular erklären"],
                    ["antrag-vorbereiten", "Antrag vorbereiten"],
                    ["angaben-strukturieren", "Angaben strukturieren"],
                    ["benoetigte-unterlagen", "Benötigte Unterlagen"]
                ]
            ),
            hauptkategorie(
                "rechtliche-recherche",
                "Rechtliche Recherche",
                [
                    ["rechtslage-recherchieren", "Rechtslage recherchieren"],
                    ["vorschriften-finden", "Vorschriften finden"],
                    ["urteile-recherchieren", "Urteile recherchieren"],
                    ["rechtsgebiete-vergleichen", "Rechtsgebiete vergleichen"]
                ]
            ),
            hauptkategorie(
                "datenschutz",
                "Datenschutz",
                [
                    ["dsgvo-fragen", "DSGVO-Fragen"],
                    ["datenschutzerklaerung", "Datenschutzerklärung"],
                    ["auftragsverarbeitung", "Auftragsverarbeitung"],
                    ["datenverarbeitung-pruefen", "Datenverarbeitung prüfen"]
                ]
            ),
            hauptkategorie(
                "normen-standards",
                "Normen & Standards",
                [
                    ["norm-recherchieren", "Norm recherchieren"],
                    ["anforderungen-extrahieren", "Anforderungen extrahieren"],
                    ["normen-vergleichen", "Normen vergleichen"],
                    ["pruefanforderungen", "Prüfanforderungen"]
                ]
            ),
            hauptkategorie(
                "compliance",
                "Compliance",
                [
                    ["anforderungen-pruefen", "Anforderungen prüfen"],
                    ["kontrollmassnahmen", "Kontrollmaßnahmen"],
                    ["dokumentation", "Dokumentation"],
                    ["compliance-check", "Compliance-Check"]
                ]
            ),
            hauptkategorie(
                "richtlinien-vorgaben",
                "Richtlinien & Vorgaben",
                [
                    ["richtlinie-analysieren", "Richtlinie analysieren"],
                    ["anforderungen-ableiten", "Anforderungen ableiten"],
                    ["umsetzung-pruefen", "Umsetzung prüfen"],
                    ["aenderungen-vergleichen", "Änderungen vergleichen"]
                ]
            ),
            hauptkategorie(
                "dokumente-pruefen",
                "Dokumente prüfen",
                [
                    ["vertrag", "Vertrag"],
                    ["nda", "NDA"],
                    ["agb", "AGB"],
                    ["technische-vorgabe", "Technische Vorgabe"],
                    ["richtlinie", "Richtlinie"],
                    ["behoerdliches-schreiben", "Behördliches Schreiben"]
                ]
            )
        ]
    });
})(globalThis);
