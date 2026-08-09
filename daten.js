// ======================================================
// PROMPTWERKSTATT
// ZENTRALE DATENSTRUKTUR
// ======================================================
//
// Aufbau:
//
// Hauptkategorie
//     ↓
// Unterkategorie
//     ↓
// Rollen
// Ziele
// Anforderungen
// Ausgabeformate
//
// ======================================================


const hauptkategorien = {

    // ==================================================
    // 1. BILD & VISUELLE MEDIEN
    // ==================================================

    bild: {

        name: "Bild & visuelle Medien",
        icon: "🖼️",

        unterkategorien: {

            fotografie: {

                name: "Fotografie",

                rollen: [
                    "Professioneller Fotograf",
                    "Fotografie-Coach",
                    "Landschaftsfotograf",
                    "Porträtfotograf",
                    "Tierfotograf",
                    "Makrofotograf",
                    "Architekturfotograf",
                    "Produktfotograf",
                    "Kamera- und Objektivberater",
                    "Fotoredakteur"
                ],

                ziele: [
                    "Aufnahme planen",
                    "Kameraeinstellungen empfehlen",
                    "Bildidee entwickeln",
                    "Standort und Perspektive planen",
                    "Licht beurteilen",
                    "Komposition verbessern",
                    "Ausrüstung auswählen",
                    "Fotoserie planen",
                    "Aufnahmefehler analysieren",
                    "Fotografischen Stil entwickeln"
                ],

                anforderungen: [
                    "Praxisnahe Empfehlungen geben",
                    "Konkrete Einstellungen nennen",
                    "Alternativen nennen",
                    "Vor- und Nachteile erklären",
                    "Schwierigkeitsgrad berücksichtigen",
                    "Vorhandene Ausrüstung berücksichtigen",
                    "Wichtigste Maßnahmen priorisieren"
                ],

                ausgabeformate: [
                    "Schritt-für-Schritt-Anleitung",
                    "Aufnahme-Checkliste",
                    "Tabelle",
                    "Kurzempfehlung",
                    "Ausführliche Analyse",
                    "Einstellungsübersicht"
                ]
            },


            bildbearbeitung: {

                name: "Bildbearbeitung",

                rollen: [
                    "Professioneller Bildbearbeiter",
                    "Retuscheur",
                    "Color-Grading-Experte",
                    "Luminar-Neo-Experte",
                    "Photoshop-Experte",
                    "Lightroom-Experte",
                    "Fine-Art-Bildbearbeiter",
                    "Foto-Coach"
                ],

                ziele: [
                    "Bearbeitungsworkflow erstellen",
                    "Farben optimieren",
                    "Belichtung verbessern",
                    "Kontrast optimieren",
                    "Hautretusche planen",
                    "Störende Elemente erkennen",
                    "Bildlook entwickeln",
                    "Schwarz-Weiß-Version entwickeln",
                    "Bild für Web oder Druck optimieren",
                    "Vorhandenen Bearbeitungsstil verbessern"
                ],

                anforderungen: [
                    "Reihenfolge der Bearbeitung nennen",
                    "Konkrete Regler oder Werkzeuge nennen",
                    "Änderungen begründen",
                    "Natürliche Ergebnisse bevorzugen",
                    "Alternativen anbieten",
                    "Überbearbeitung vermeiden",
                    "Wichtigste Änderungen priorisieren"
                ],

                ausgabeformate: [
                    "Bearbeitungsrezept",
                    "Schritt-für-Schritt-Anleitung",
                    "Regler-Tabelle",
                    "Prioritätenliste",
                    "Ausführliche Analyse",
                    "Kurzworkflow"
                ]
            },


            kiBildgenerierung: {

                name: "KI-Bildgenerierung",

                rollen: [
                    "Prompt Engineer für Bildmodelle",
                    "Art Director",
                    "Concept Artist",
                    "KI-Bilddesigner",
                    "Fotografischer Art Director",
                    "Visual Storyteller",
                    "Character Designer",
                    "Szenen-Designer"
                ],

                ziele: [
                    "Bildprompt erstellen",
                    "Bestehenden Prompt verbessern",
                    "Bildstil definieren",
                    "Szene beschreiben",
                    "Lichtstimmung entwickeln",
                    "Kameraperspektive festlegen",
                    "Charakterkonzept entwickeln",
                    "Mehrere Varianten erstellen",
                    "Konsistente Bildserie planen",
                    "Negative Prompt entwickeln"
                ],

                anforderungen: [
                    "Motiv klar definieren",
                    "Perspektive festlegen",
                    "Licht beschreiben",
                    "Bildaufbau definieren",
                    "Stil eindeutig formulieren",
                    "Unnötige Prompt-Wörter vermeiden",
                    "Seitenverhältnis berücksichtigen"
                ],

                ausgabeformate: [
                    "Fertiger Bildprompt",
                    "Prompt mit Negative Prompt",
                    "Kompakter Prompt",
                    "Detaillierter Prompt",
                    "Mehrere Promptvarianten",
                    "Strukturierter Prompt"
                ]
            },


            grafikdesign: {

                name: "Grafikdesign",

                rollen: [
                    "Grafikdesigner",
                    "Art Director",
                    "Visual Designer",
                    "Editorial Designer",
                    "Layout-Designer",
                    "Corporate-Design-Spezialist",
                    "Werbegrafiker"
                ],

                ziele: [
                    "Layout entwickeln",
                    "Gestaltung verbessern",
                    "Farbkonzept erstellen",
                    "Typografie auswählen",
                    "Informationshierarchie verbessern",
                    "Poster entwickeln",
                    "Flyer gestalten",
                    "Infografik planen",
                    "Visuelles Konzept entwickeln"
                ],

                anforderungen: [
                    "Klare visuelle Hierarchie",
                    "Gute Lesbarkeit",
                    "Konsistente Gestaltung",
                    "Zielgruppe berücksichtigen",
                    "Format berücksichtigen",
                    "Farben begründen",
                    "Typografie begründen"
                ],

                ausgabeformate: [
                    "Design-Briefing",
                    "Layoutbeschreibung",
                    "Style Guide",
                    "Checkliste",
                    "Gestaltungsvorschlag",
                    "Variantenvergleich"
                ]
            },


            illustration: {

                name: "Illustration",

                rollen: [
                    "Illustrator",
                    "Concept Artist",
                    "Kinderbuchillustrator",
                    "Editorial Illustrator",
                    "Character Designer",
                    "Storyboard Artist",
                    "Digital Artist"
                ],

                ziele: [
                    "Illustrationsidee entwickeln",
                    "Charakter gestalten",
                    "Szene entwickeln",
                    "Stil festlegen",
                    "Farbwelt entwickeln",
                    "Bildserie planen",
                    "Visuelle Geschichte erzählen",
                    "Illustrationsprompt erzeugen"
                ],

                anforderungen: [
                    "Klare Silhouette",
                    "Passende Farbpalette",
                    "Konsistenten Stil verwenden",
                    "Zielgruppe berücksichtigen",
                    "Bildwirkung definieren",
                    "Wiedererkennbarkeit sicherstellen"
                ],

                ausgabeformate: [
                    "Concept Brief",
                    "Character-Sheet-Beschreibung",
                    "Illustrationsprompt",
                    "Szenenbeschreibung",
                    "Stilbeschreibung",
                    "Mehrere Varianten"
                ]
            },


            bildanalyse: {

                name: "Bildanalyse",

                rollen: [
                    "Bildanalyst",
                    "Fotografie-Coach",
                    "Bildkompositions-Experte",
                    "Art Director",
                    "Technischer Bildprüfer",
                    "Visueller Qualitätsprüfer"
                ],

                ziele: [
                    "Bild objektiv beschreiben",
                    "Technische Qualität beurteilen",
                    "Komposition analysieren",
                    "Licht analysieren",
                    "Farben analysieren",
                    "Stärken erkennen",
                    "Schwachstellen erkennen",
                    "Verbesserungsvorschläge geben",
                    "Bildwirkung beurteilen"
                ],

                anforderungen: [
                    "Beobachtung und Interpretation trennen",
                    "Konkrete Bildbereiche nennen",
                    "Wichtigste Probleme priorisieren",
                    "Verbesserungen begründen",
                    "Positive Aspekte ebenfalls nennen"
                ],

                ausgabeformate: [
                    "Strukturierte Bildanalyse",
                    "Stärken-und-Schwächen-Liste",
                    "Tabelle",
                    "Verbesserungsliste",
                    "Bewertung nach Kriterien",
                    "Kurzdiagnose"
                ]
            },


            komposition: {

                name: "Komposition & Bildgestaltung",

                rollen: [
                    "Kompositions-Experte",
                    "Fotograf",
                    "Art Director",
                    "Visual Designer",
                    "Fotografie-Coach"
                ],

                ziele: [
                    "Bildaufbau verbessern",
                    "Hauptmotiv hervorheben",
                    "Blickführung verbessern",
                    "Perspektive optimieren",
                    "Ausschnitt bestimmen",
                    "Balance erzeugen",
                    "Störende Elemente reduzieren",
                    "Bildwirkung verstärken"
                ],

                anforderungen: [
                    "Konkrete Positionen beschreiben",
                    "Mehrere Varianten anbieten",
                    "Wirkung jeder Variante erklären",
                    "Motiv und Ziel berücksichtigen",
                    "Empfehlungen priorisieren"
                ],

                ausgabeformate: [
                    "Kompositionsanalyse",
                    "Verbesserungsschritte",
                    "Varianten A/B/C",
                    "Checkliste",
                    "Crop-Empfehlungen"
                ]
            },


            socialMedia: {

                name: "Social-Media-Grafiken",

                rollen: [
                    "Social-Media-Designer",
                    "Content Designer",
                    "Art Director",
                    "Social-Media-Stratege",
                    "Branding-Designer"
                ],

                ziele: [
                    "Post gestalten",
                    "Story gestalten",
                    "Thumbnail entwickeln",
                    "Carousel planen",
                    "Titelbild entwickeln",
                    "Visuelle Serie erstellen",
                    "Aufmerksamkeit erhöhen",
                    "Branding konsistent halten"
                ],

                anforderungen: [
                    "Mobil gut lesbar",
                    "Klare Hauptbotschaft",
                    "Wenig Text",
                    "Starke visuelle Hierarchie",
                    "Plattform berücksichtigen",
                    "Wiedererkennbaren Stil verwenden"
                ],

                ausgabeformate: [
                    "Design-Brief",
                    "Layoutbeschreibung",
                    "Carousel-Struktur",
                    "Mehrere Varianten",
                    "Produktionscheckliste"
                ]
            },


            produktbilder: {

                name: "Produktbilder",

                rollen: [
                    "Produktfotograf",
                    "Werbefotograf",
                    "E-Commerce-Fotograf",
                    "Art Director",
                    "Produktbild-Retuscheur"
                ],

                ziele: [
                    "Produktaufnahme planen",
                    "Hintergrund wählen",
                    "Beleuchtung planen",
                    "Produkt hervorheben",
                    "E-Commerce-Bildserie entwickeln",
                    "Werbemotiv entwickeln",
                    "Retusche planen"
                ],

                anforderungen: [
                    "Produkt realistisch darstellen",
                    "Materialeigenschaften berücksichtigen",
                    "Form gut erkennbar machen",
                    "Konsistente Perspektiven",
                    "Reproduzierbaren Workflow entwickeln"
                ],

                ausgabeformate: [
                    "Shot List",
                    "Setup-Anleitung",
                    "Lichtplan",
                    "Bildserie",
                    "Bearbeitungsworkflow",
                    "Checkliste"
                ]
            },


            branding: {

                name: "Logos & Branding",

                rollen: [
                    "Brand Designer",
                    "Logo Designer",
                    "Markenstratege",
                    "Art Director",
                    "Corporate-Design-Spezialist"
                ],

                ziele: [
                    "Markenidentität entwickeln",
                    "Logoidee entwickeln",
                    "Farbpalette erstellen",
                    "Typografie bestimmen",
                    "Designsystem entwickeln",
                    "Markenwirkung definieren",
                    "Mehrere Konzepte vergleichen"
                ],

                anforderungen: [
                    "Einfach gestalten",
                    "Wiedererkennbarkeit berücksichtigen",
                    "Skalierbarkeit beachten",
                    "Monochrome Nutzung berücksichtigen",
                    "Zielgruppe berücksichtigen",
                    "Konsistente Gestaltung"
                ],

                ausgabeformate: [
                    "Brand Brief",
                    "Logo-Konzept",
                    "Style Guide",
                    "Farbpalette",
                    "Designsystem",
                    "Variantenvergleich"
                ]
            },


            druckExport: {

                name: "Druck & Export",

                rollen: [
                    "Prepress-Spezialist",
                    "Druckvorstufen-Experte",
                    "Bildbearbeiter",
                    "Print Designer",
                    "Farbmanagement-Spezialist"
                ],

                ziele: [
                    "Datei für Druck vorbereiten",
                    "Auflösung prüfen",
                    "Exportformat bestimmen",
                    "Farbraum auswählen",
                    "Bildgröße berechnen",
                    "Webexport vorbereiten",
                    "Qualitätsverlust minimieren"
                ],

                anforderungen: [
                    "Maße nennen",
                    "Auflösung nennen",
                    "Dateiformat nennen",
                    "Farbraum berücksichtigen",
                    "Verwendungszweck berücksichtigen",
                    "Kompression erklären"
                ],

                ausgabeformate: [
                    "Export-Checkliste",
                    "Einstellungstabelle",
                    "Schritt-für-Schritt-Anleitung",
                    "Druckvorstufen-Check",
                    "Web-vs.-Print-Vergleich"
                ]
            },


            inspiration: {

                name: "Bildideen & Inspiration",

                rollen: [
                    "Creative Director",
                    "Fotograf",
                    "Concept Artist",
                    "Visual Storyteller",
                    "Ideen-Coach",
                    "Art Director"
                ],

                ziele: [
                    "Fotoideen entwickeln",
                    "Bildserie entwickeln",
                    "Ungewöhnliche Perspektiven finden",
                    "Thema visuell interpretieren",
                    "Mood entwickeln",
                    "Kreative Varianten erzeugen",
                    "Projektkonzept entwickeln"
                ],

                anforderungen: [
                    "Mehrere unterschiedliche Ideen liefern",
                    "Nicht nur offensichtliche Vorschläge machen",
                    "Umsetzbarkeit berücksichtigen",
                    "Aufwand einschätzen",
                    "Kreative Varianten liefern"
                ],

                ausgabeformate: [
                    "Ideenliste",
                    "Drei Konzepte",
                    "Moodboard-Beschreibung",
                    "Shot List",
                    "Projektplan",
                    "Inspirationsmatrix"
                ]
            }
        }
    },


    // ==================================================
    // 2. VIDEO & AUDIO
    // ==================================================

    videoAudio: {

        name: "Video & Audio",
        icon: "🎬",

        unterkategorien: {

            // ==================================================
            // VIDEOERSTELLUNG
            // ==================================================

            videoerstellung: {

                name: "Videoerstellung",

                rollen: [
                    "Videoproduzent",
                    "Regisseur",
                    "Content Producer",
                    "Kameramann",
                    "Video-Konzeptentwickler"
                ],

                ziele: [
                    "Video vollständig planen",
                    "Videokonzept entwickeln",
                    "Drehablauf erstellen",
                    "Aufnahmen und Szenen planen",
                    "Video mit vorhandener Technik umsetzen",
                    "Bestehende Videoidee verbessern"
                ],

                anforderungen: [
                    "Zielgruppe und Plattform berücksichtigen",
                    "Gewünschte Videolänge beachten",
                    "Konkrete Szenen und Aufnahmen nennen",
                    "Umsetzbarkeit mit vorhandener Technik berücksichtigen",
                    "Bild und Ton gemeinsam planen",
                    "Wichtigste Produktionsschritte priorisieren",
                    "Realistischen Aufwand einschätzen"
                ],

                ausgabeformate: [
                    "Kompletter Produktionsplan",
                    "Drehplan",
                    "Shot List",
                    "Schritt-für-Schritt-Anleitung",
                    "Szenenübersicht",
                    "Produktions-Checkliste"
                ]
            },


            // ==================================================
            // VIDEOSCHNITT & NACHBEARBEITUNG
            // ==================================================

            videoschnitt: {

                name: "Videoschnitt & Nachbearbeitung",

                rollen: [
                    "Videoeditor",
                    "Postproduktions-Experte",
                    "Color-Grading-Experte",
                    "YouTube-Editor",
                    "Audio- und Videoeditor"
                ],

                ziele: [
                    "Videoschnitt planen",
                    "Bestehenden Schnitt verbessern",
                    "Videolänge reduzieren",
                    "Tempo und Rhythmus verbessern",
                    "Übergänge sinnvoll einsetzen",
                    "Farblook entwickeln",
                    "Ton verbessern",
                    "Video für eine Plattform exportieren"
                ],

                anforderungen: [
                    "Konkrete Schnittreihenfolge nennen",
                    "Unnötige Szenen identifizieren",
                    "Effekte nur gezielt einsetzen",
                    "Bild und Ton aufeinander abstimmen",
                    "Gewünschte Plattform berücksichtigen",
                    "Vorhandene Software berücksichtigen",
                    "Exportqualität und Dateigröße beachten"
                ],

                ausgabeformate: [
                    "Schnittplan",
                    "Bearbeitungsworkflow",
                    "Timeline-Anleitung",
                    "Prioritätenliste",
                    "Schritt-für-Schritt-Anleitung",
                    "Export-Einstellungen"
                ]
            },


            // ==================================================
            // KI-VIDEOGENERIERUNG
            // ==================================================

            kiVideo: {

                name: "KI-Videogenerierung",

                rollen: [
                    "Prompt Engineer für KI-Video",
                    "KI-Video-Regisseur",
                    "Art Director",
                    "Cinematic Prompt Designer",
                    "Visual Storyteller"
                ],

                ziele: [
                    "KI-Videoprompt erstellen",
                    "Bestehenden Videoprompt verbessern",
                    "Filmszene beschreiben",
                    "Kamerabewegung festlegen",
                    "Visuellen Stil entwickeln",
                    "Mehrere Videovarianten erstellen",
                    "Konsistente Szenenserie entwickeln"
                ],

                anforderungen: [
                    "Motiv und Handlung eindeutig beschreiben",
                    "Kameraperspektive festlegen",
                    "Kamerabewegung beschreiben",
                    "Licht und Stimmung definieren",
                    "Visuellen Stil klar formulieren",
                    "Dauer und Seitenverhältnis berücksichtigen",
                    "Unnötige oder widersprüchliche Angaben vermeiden"
                ],

                ausgabeformate: [
                    "Fertiger KI-Videoprompt",
                    "Detaillierter Szenenprompt",
                    "Kompakter Videoprompt",
                    "Prompt mit Kamerabewegung",
                    "Mehrere Promptvarianten",
                    "Szenenserie mit konsistentem Stil"
                ]
            },


            // ==================================================
            // DREHBUCH & SKRIPT
            // ==================================================

            drehbuch: {

                name: "Drehbuch & Skript",

                rollen: [
                    "Drehbuchautor",
                    "Skriptwriter",
                    "Story Editor",
                    "Video-Autor",
                    "Dramaturg"
                ],

                ziele: [
                    "Drehbuch erstellen",
                    "Videoskript schreiben",
                    "Bestehendes Skript verbessern",
                    "Szenen strukturieren",
                    "Dialoge entwickeln",
                    "Starken Einstieg schreiben",
                    "Skript auf gewünschte Länge anpassen"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Gewünschte Länge einhalten",
                    "Klare Dramaturgie verwenden",
                    "Natürlich klingende Sprache schreiben",
                    "Unnötige Wiederholungen vermeiden",
                    "Szenen logisch miteinander verbinden",
                    "Kernbotschaft klar herausarbeiten"
                ],

                ausgabeformate: [
                    "Komplettes Drehbuch",
                    "Videoskript",
                    "Skript mit Szenen",
                    "Skript mit Sprechertext",
                    "Szenenübersicht",
                    "Überarbeitete Skriptversion"
                ]
            },


            // ==================================================
            // STORYBOARD & SZENENPLANUNG
            // ==================================================

            storyboard: {

                name: "Storyboard & Szenenplanung",

                rollen: [
                    "Storyboard Artist",
                    "Regisseur",
                    "Kameramann",
                    "Szenenplaner",
                    "Visual Storyteller"
                ],

                ziele: [
                    "Storyboard entwickeln",
                    "Video in einzelne Einstellungen zerlegen",
                    "Kameraperspektiven planen",
                    "Szenenfolge optimieren",
                    "Bild- und Tonablauf koordinieren",
                    "Shot List aus einer Handlung erstellen"
                ],

                anforderungen: [
                    "Jede Einstellung eindeutig nummerieren",
                    "Bildinhalt konkret beschreiben",
                    "Einstellungsgröße nennen",
                    "Kameraperspektive und Bewegung nennen",
                    "Handlung und Sprechertext zuordnen",
                    "Übergänge zwischen Szenen berücksichtigen",
                    "Unnötige Einstellungen vermeiden"
                ],

                ausgabeformate: [
                    "Storyboard-Tabelle",
                    "Shot List",
                    "Szenenplan",
                    "Einstellung-für-Einstellung-Plan",
                    "Storyboard mit Bild und Ton",
                    "Produktionsübersicht"
                ]
            },


            // ==================================================
            // YOUTUBE
            // ==================================================

            youtube: {

                name: "YouTube & Online-Videos",

                rollen: [
                    "YouTube-Stratege",
                    "YouTube-Produzent",
                    "Video-Skriptwriter",
                    "Content Creator",
                    "Audience-Retention-Experte"
                ],

                ziele: [
                    "YouTube-Video planen",
                    "Videoidee entwickeln",
                    "Videoskript erstellen",
                    "Starken Videoeinstieg entwickeln",
                    "Videostruktur verbessern",
                    "Zuschauerbindung erhöhen",
                    "Titelideen entwickeln",
                    "Videoreihe planen"
                ],

                anforderungen: [
                    "Zielgruppe klar berücksichtigen",
                    "Nutzen des Videos früh vermitteln",
                    "Starken Einstieg entwickeln",
                    "Lange oder unnötige Einleitungen vermeiden",
                    "Klare Kapitelstruktur verwenden",
                    "Konkrete visuelle Elemente vorschlagen",
                    "Call-to-Action nur sinnvoll einsetzen"
                ],

                ausgabeformate: [
                    "YouTube-Videokonzept",
                    "Komplettes Videoskript",
                    "Kapitelstruktur",
                    "Video-Outline",
                    "Titel- und Hook-Varianten",
                    "Produktionsplan"
                ]
            },


            // ==================================================
            // KURZVIDEOS & REELS
            // ==================================================

            kurzvideos: {

                name: "Kurzvideos & Reels",

                rollen: [
                    "Short-Form-Content-Stratege",
                    "Reels-Creator",
                    "TikTok-Videoexperte",
                    "Video-Skriptwriter",
                    "Social-Media-Content-Creator"
                ],

                ziele: [
                    "Kurzvideo entwickeln",
                    "Reel oder Short planen",
                    "Starken Hook entwickeln",
                    "Kurzes Videoskript schreiben",
                    "Mehrere Kurzvideoideen erstellen",
                    "Bestehendes Kurzvideo verbessern"
                ],

                anforderungen: [
                    "Hauptaussage sofort erkennbar machen",
                    "Starken Einstieg in den ersten Sekunden verwenden",
                    "Nur eine zentrale Botschaft pro Video verwenden",
                    "Kurze und natürliche Sprache verwenden",
                    "Visuelle Wechsel gezielt einplanen",
                    "Plattform und Seitenverhältnis berücksichtigen",
                    "Unnötige Einleitungen vermeiden"
                ],

                ausgabeformate: [
                    "Kurzvideo-Skript",
                    "Hook-Sammlung",
                    "Shot-by-Shot-Plan",
                    "Reel-Konzept",
                    "Mehrere Kurzvideovarianten",
                    "15-, 30- oder 60-Sekunden-Skript"
                ]
            },


            // ==================================================
            // PODCAST
            // ==================================================

            podcast: {

                name: "Podcast",

                rollen: [
                    "Podcast-Produzent",
                    "Podcast-Redakteur",
                    "Podcast-Host-Coach",
                    "Audio-Storyteller",
                    "Formatentwickler"
                ],

                ziele: [
                    "Podcastfolge planen",
                    "Podcastformat entwickeln",
                    "Folgenstruktur erstellen",
                    "Moderationsleitfaden entwickeln",
                    "Podcastserie planen",
                    "Intro und Outro entwickeln",
                    "Bestehende Folge verbessern"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Gewünschte Folgenlänge beachten",
                    "Klare Themenstruktur entwickeln",
                    "Natürliches Gespräch ermöglichen",
                    "Wichtige Kernpunkte priorisieren",
                    "Übergänge zwischen Themen planen",
                    "Wiederholungen vermeiden"
                ],

                ausgabeformate: [
                    "Podcast-Outline",
                    "Moderationsleitfaden",
                    "Folgenplan",
                    "Podcast-Skript",
                    "Fragen- und Themenliste",
                    "Serienkonzept"
                ]
            },


            // ==================================================
            // SPRACHAUFNAHMEN & VOICE-OVER
            // ==================================================

            voiceover: {

                name: "Sprachaufnahmen & Voice-over",

                rollen: [
                    "Voice-over-Regisseur",
                    "Sprechertext-Autor",
                    "Audio-Produzent",
                    "Sprachaufnahme-Coach",
                    "Werbesprecher-Texteditor"
                ],

                ziele: [
                    "Voice-over-Text erstellen",
                    "Sprechertext natürlicher formulieren",
                    "Text auf gewünschte Sprechdauer kürzen",
                    "Betonungen planen",
                    "Sprechtempo optimieren",
                    "Mehrere Sprechertextvarianten entwickeln"
                ],

                anforderungen: [
                    "Für gesprochene Sprache schreiben",
                    "Kurze und verständliche Sätze verwenden",
                    "Gewünschte Sprechdauer berücksichtigen",
                    "Betonungen und Pausen kenntlich machen",
                    "Schwierige Formulierungen vermeiden",
                    "Tonalität zur Zielgruppe passend wählen"
                ],

                ausgabeformate: [
                    "Fertiger Sprechertext",
                    "Sprechertext mit Pausen",
                    "Sprechertext mit Betonungshinweisen",
                    "Kurz- und Langversion",
                    "Mehrere Tonalitätsvarianten",
                    "Aufnahme-Skript"
                ]
            },


            // ==================================================
            // AUDIOBEARBEITUNG
            // ==================================================

            audiobearbeitung: {

                name: "Audiobearbeitung",

                rollen: [
                    "Audio Engineer",
                    "Mixing Engineer",
                    "Podcast-Audioeditor",
                    "Tonmeister",
                    "Audio-Postproduktions-Experte"
                ],

                ziele: [
                    "Audioaufnahme verbessern",
                    "Störgeräusche reduzieren",
                    "Sprachverständlichkeit erhöhen",
                    "Lautstärke ausgleichen",
                    "EQ und Kompression planen",
                    "Podcast-Audio bearbeiten",
                    "Audio für Veröffentlichung exportieren"
                ],

                anforderungen: [
                    "Vorhandene Software berücksichtigen",
                    "Bearbeitung in sinnvoller Reihenfolge erklären",
                    "Konkrete Werkzeuge und Einstellungen nennen",
                    "Originalaufnahme möglichst natürlich erhalten",
                    "Übermäßige Bearbeitung vermeiden",
                    "Lautheit und Exportziel berücksichtigen",
                    "Unsichere Einstellwerte als Ausgangspunkt kennzeichnen"
                ],

                ausgabeformate: [
                    "Audio-Bearbeitungsworkflow",
                    "Schritt-für-Schritt-Anleitung",
                    "Einstellungstabelle",
                    "Fehlerdiagnose",
                    "Mixing-Checkliste",
                    "Export-Checkliste"
                ]
            },


            // ==================================================
            // MUSIK & SOUNDDESIGN
            // ==================================================

            musik: {

                name: "Musik & Sounddesign",

                rollen: [
                    "Musikproduzent",
                    "Komponist",
                    "Sound Designer",
                    "Arrangeur",
                    "Creative Audio Director"
                ],

                ziele: [
                    "Musikkonzept entwickeln",
                    "Sounddesign planen",
                    "Arrangement entwickeln",
                    "Passende Instrumentierung auswählen",
                    "Musik für Video oder Projekt planen",
                    "Stimmung musikalisch umsetzen",
                    "Mehrere musikalische Konzepte entwickeln"
                ],

                anforderungen: [
                    "Gewünschte Stimmung berücksichtigen",
                    "Genre und Einsatzgebiet beachten",
                    "Tempo sinnvoll festlegen",
                    "Instrumentierung konkret beschreiben",
                    "Musikalische Entwicklung strukturieren",
                    "Mehrere kreative Varianten ermöglichen"
                ],

                ausgabeformate: [
                    "Musikkonzept",
                    "Arrangement-Plan",
                    "Sounddesign-Briefing",
                    "Struktur nach Abschnitten",
                    "Instrumentierungsübersicht",
                    "Mehrere Konzeptvarianten"
                ]
            },


            // ==================================================
            // KI-MUSIKGENERIERUNG
            // ==================================================

            kiMusik: {

                name: "KI-Musikgenerierung",

                rollen: [
                    "Prompt Engineer für KI-Musik",
                    "KI-Musikproduzent",
                    "Komponist",
                    "Sound Designer",
                    "Musikalischer Art Director"
                ],

                ziele: [
                    "KI-Musikprompt erstellen",
                    "Bestehenden Musikprompt verbessern",
                    "Musikstil präzise beschreiben",
                    "Instrumentierung definieren",
                    "Songstruktur festlegen",
                    "Mehrere musikalische Varianten erzeugen",
                    "Musik für einen konkreten Einsatzzweck entwickeln"
                ],

                anforderungen: [
                    "Genre und Stimmung klar beschreiben",
                    "Tempo oder Tempobereich angeben",
                    "Instrumentierung konkret definieren",
                    "Song- oder Musikstruktur beschreiben",
                    "Einsatzzweck berücksichtigen",
                    "Widersprüchliche Stilvorgaben vermeiden",
                    "Musikalische Eigenschaften statt vager Begriffe verwenden"
                ],

                ausgabeformate: [
                    "Fertiger KI-Musikprompt",
                    "Detaillierter Musikprompt",
                    "Kompakter Musikprompt",
                    "Prompt mit Songstruktur",
                    "Mehrere Musikvarianten",
                    "Instrumental-Prompt"
                ]
            },


            // ==================================================
            // INTERVIEWS
            // ==================================================

            interviews: {

                name: "Interviews & Gesprächsformate",

                rollen: [
                    "Interview-Redakteur",
                    "Journalistischer Interviewer",
                    "Podcast-Host",
                    "Gesprächsmoderator",
                    "Interview-Coach"
                ],

                ziele: [
                    "Interview vorbereiten",
                    "Interviewfragen entwickeln",
                    "Gesprächsstruktur erstellen",
                    "Nachfragen vorbereiten",
                    "Interview interessanter gestalten",
                    "Fragen für ein Experteninterview entwickeln"
                ],

                anforderungen: [
                    "Offene Fragen bevorzugen",
                    "Suggestivfragen vermeiden",
                    "Fragen logisch aufeinander aufbauen",
                    "Einfache Einstiegsfragen vorsehen",
                    "Vertiefende Nachfragen vorbereiten",
                    "Zentrale Themen priorisieren",
                    "Unbelegte Annahmen über den Gesprächspartner vermeiden"
                ],

                ausgabeformate: [
                    "Interviewleitfaden",
                    "Fragenliste",
                    "Fragen mit möglichen Nachfragen",
                    "Gesprächsablauf",
                    "Kurz- und Langinterview",
                    "Themenblöcke"
                ]
            },


            // ==================================================
            // PRÄSENTATIONS- & ERKLÄRVIDEOS
            // ==================================================

            erklaervideos: {

                name: "Präsentations- & Erklärvideos",

                rollen: [
                    "Erklärvideo-Autor",
                    "Instructional Designer",
                    "Video-Produzent",
                    "Präsentationscoach",
                    "Visual Storytelling-Experte"
                ],

                ziele: [
                    "Erklärvideo planen",
                    "Komplexes Thema verständlich erklären",
                    "Skript für ein Erklärvideo erstellen",
                    "Visualisierungen zu einem Sprechertext entwickeln",
                    "Präsentation in ein Video umwandeln",
                    "Lernvideo strukturieren"
                ],

                anforderungen: [
                    "Vorwissen der Zielgruppe berücksichtigen",
                    "Komplexe Inhalte schrittweise erklären",
                    "Pro Abschnitt eine klare Kernaussage verwenden",
                    "Konkrete Visualisierungsideen nennen",
                    "Beispiele gezielt einsetzen",
                    "Gewünschte Videolänge berücksichtigen",
                    "Fachbegriffe erklären, wenn nötig"
                ],

                ausgabeformate: [
                    "Erklärvideo-Skript",
                    "Szenenplan mit Sprechertext",
                    "Storyboard-Tabelle",
                    "Kapitelstruktur",
                    "Präsentations-zu-Video-Plan",
                    "Schritt-für-Schritt-Konzept"
                ]
            },


            // ==================================================
            // VIDEOIDEEN & KONZEPTE
            // ==================================================

            videoideen: {

                name: "Videoideen & Konzepte",

                rollen: [
                    "Creative Director",
                    "Video-Konzeptentwickler",
                    "Content-Stratege",
                    "Visual Storyteller",
                    "Ideen-Coach"
                ],

                ziele: [
                    "Neue Videoideen entwickeln",
                    "Mehrere Videokonzepte erstellen",
                    "Ungewöhnliche Videoideen finden",
                    "Videoserie entwickeln",
                    "Ideen mit geringem Produktionsaufwand finden",
                    "Bestehende Videoidee weiterentwickeln"
                ],

                anforderungen: [
                    "Mehrere deutlich unterschiedliche Ideen liefern",
                    "Zielgruppe und Plattform berücksichtigen",
                    "Nicht nur offensichtliche Vorschläge machen",
                    "Produktionsaufwand einschätzen",
                    "Benötigte Technik berücksichtigen",
                    "Kernidee jeder Variante klar beschreiben",
                    "Umsetzbarkeit berücksichtigen"
                ],

                ausgabeformate: [
                    "10 Videoideen",
                    "Drei ausgearbeitete Konzepte",
                    "Ideenmatrix",
                    "Videoreihen-Konzept",
                    "Ideen nach Aufwand",
                    "Konzeptvergleich"
                ]
            }
        }
    },


    // ==================================================
    // 3. SCHREIBEN & KOMMUNIKATION
    // ==================================================

    schreiben: {

        name: "Schreiben & Kommunikation",
        icon: "✍️",

        unterkategorien: {

            // ==================================================
            // E-MAILS
            // ==================================================

            emails: {

                name: "E-Mails",

                rollen: [
                    "Professioneller Kommunikationsberater",
                    "E-Mail-Redakteur",
                    "Business-Kommunikationscoach",
                    "Textredakteur"
                ],

                ziele: [
                    "E-Mail formulieren",
                    "Bestehende E-Mail verbessern",
                    "E-Mail höflicher formulieren",
                    "E-Mail klarer und kürzer schreiben",
                    "Professionelle Antwort erstellen",
                    "Schwierige Nachricht diplomatisch formulieren"
                ],

                anforderungen: [
                    "Anlass und Empfänger berücksichtigen",
                    "Kernaussage schnell verständlich machen",
                    "Passende Tonalität verwenden",
                    "Unnötige Wiederholungen vermeiden",
                    "Konkrete nächste Schritte deutlich nennen",
                    "Professionell und natürlich formulieren"
                ],

                ausgabeformate: [
                    "Fertige E-Mail",
                    "Kurze E-Mail",
                    "Formelle E-Mail",
                    "Freundliche E-Mail",
                    "Mehrere Formulierungsvarianten",
                    "E-Mail mit Betreff"
                ]
            },


            // ==================================================
            // BRIEFE & FORMELLE SCHREIBEN
            // ==================================================

            briefe: {

                name: "Briefe & formelle Schreiben",

                rollen: [
                    "Experte für formelle Kommunikation",
                    "Geschäftskorrespondenz-Redakteur",
                    "Textredakteur",
                    "Kommunikationsberater"
                ],

                ziele: [
                    "Formellen Brief erstellen",
                    "Offizielles Schreiben formulieren",
                    "Bestehenden Brief verbessern",
                    "Sachverhalt schriftlich darstellen",
                    "Höfliche Aufforderung formulieren",
                    "Formelle Antwort erstellen"
                ],

                anforderungen: [
                    "Sachverhalt präzise darstellen",
                    "Höfliche und professionelle Sprache verwenden",
                    "Wichtige Fakten vollständig übernehmen",
                    "Keine nicht genannten Fakten ergänzen",
                    "Klare Forderung oder Erwartung formulieren",
                    "Unnötig komplizierte Sprache vermeiden"
                ],

                ausgabeformate: [
                    "Fertiger Brief",
                    "Formelles Schreiben",
                    "Geschäftsbrief",
                    "Kurze offizielle Mitteilung",
                    "Brief mit Betreff",
                    "Mehrere Tonalitätsvarianten"
                ]
            },


            // ==================================================
            // TEXTE VERBESSERN & UMFORMULIEREN
            // ==================================================

            umformulieren: {

                name: "Texte verbessern & umformulieren",

                rollen: [
                    "Professioneller Textredakteur",
                    "Lektor",
                    "Stilberater",
                    "Kommunikationsexperte"
                ],

                ziele: [
                    "Text verständlicher formulieren",
                    "Text professioneller formulieren",
                    "Text flüssiger schreiben",
                    "Schreibstil verbessern",
                    "Wiederholungen reduzieren",
                    "Bestehende Aussage überzeugender formulieren"
                ],

                anforderungen: [
                    "Inhalt und Bedeutung erhalten",
                    "Keine neuen Fakten hinzufügen",
                    "Unnötige Wiederholungen entfernen",
                    "Natürlich und verständlich formulieren",
                    "Tonalität des Originals berücksichtigen",
                    "Änderungen nicht stärker als nötig vornehmen"
                ],

                ausgabeformate: [
                    "Überarbeitete Fassung",
                    "Original und Verbesserung",
                    "Mehrere Varianten",
                    "Professionelle Version",
                    "Vereinfachte Version",
                    "Kurzfassung"
                ]
            },


            // ==================================================
            // RECHTSCHREIBUNG & GRAMMATIK
            // ==================================================

            rechtschreibung: {

                name: "Rechtschreibung & Grammatik",

                rollen: [
                    "Deutschlektor",
                    "Korrektor",
                    "Sprachredakteur",
                    "Grammatik-Experte"
                ],

                ziele: [
                    "Rechtschreibung korrigieren",
                    "Grammatik korrigieren",
                    "Zeichensetzung prüfen",
                    "Text sprachlich korrigieren",
                    "Fehler erklären",
                    "Korrigierte Fassung erstellen"
                ],

                anforderungen: [
                    "Inhalt nicht verändern",
                    "Nur notwendige sprachliche Änderungen vornehmen",
                    "Rechtschreibung und Grammatik vollständig prüfen",
                    "Zeichensetzung berücksichtigen",
                    "Unsichere Fälle kenntlich machen",
                    "Stiländerungen von echten Fehlerkorrekturen trennen"
                ],

                ausgabeformate: [
                    "Korrigierter Text",
                    "Korrigierter Text mit Änderungen",
                    "Fehlerliste mit Erklärung",
                    "Original und Korrektur",
                    "Nur notwendige Korrekturen"
                ]
            },


            // ==================================================
            // ZUSAMMENFASSUNGEN
            // ==================================================

            zusammenfassungen: {

                name: "Zusammenfassungen",

                rollen: [
                    "Informationsredakteur",
                    "Analytischer Zusammenfasser",
                    "Fachredakteur",
                    "Textanalyst"
                ],

                ziele: [
                    "Text zusammenfassen",
                    "Wichtigste Aussagen extrahieren",
                    "Langen Text auf Kernaussagen reduzieren",
                    "Management-Zusammenfassung erstellen",
                    "Aufgaben und Entscheidungen extrahieren",
                    "Mehrere Texte zusammenfassen"
                ],

                anforderungen: [
                    "Nur Informationen aus dem Ausgangstext verwenden",
                    "Keine fehlenden Informationen ergänzen",
                    "Wichtigste Aussagen priorisieren",
                    "Details nur bei Relevanz übernehmen",
                    "Fakten und Schlussfolgerungen unterscheiden",
                    "Bedeutung des Originals erhalten"
                ],

                ausgabeformate: [
                    "Kurzzusammenfassung",
                    "Stichpunkte",
                    "Executive Summary",
                    "Kernaussagen mit Details",
                    "Zusammenfassung mit Aufgaben",
                    "Strukturierte Übersicht"
                ]
            },


            // ==================================================
            // ÜBERSETZUNGEN
            // ==================================================

            uebersetzungen: {

                name: "Übersetzungen",

                rollen: [
                    "Professioneller Übersetzer",
                    "Sprachredakteur",
                    "Fachübersetzer",
                    "Lokalisierungsexperte"
                ],

                ziele: [
                    "Text übersetzen",
                    "Natürlich klingende Übersetzung erstellen",
                    "Fachtext übersetzen",
                    "Bestehende Übersetzung verbessern",
                    "Tonalität in der Zielsprache erhalten",
                    "Text für eine Zielgruppe lokalisieren"
                ],

                anforderungen: [
                    "Bedeutung des Originals erhalten",
                    "Keine Informationen hinzufügen oder entfernen",
                    "Natürlich in der Zielsprache formulieren",
                    "Fachbegriffe konsistent übersetzen",
                    "Tonalität und Höflichkeitsgrad erhalten",
                    "Mehrdeutige Stellen kenntlich machen"
                ],

                ausgabeformate: [
                    "Fertige Übersetzung",
                    "Original und Übersetzung",
                    "Übersetzung mit Anmerkungen",
                    "Formelle Übersetzung",
                    "Natürlich formulierte Übersetzung",
                    "Mehrere Varianten für schwierige Stellen"
                ]
            },


            // ==================================================
            // BEWERBUNGSSCHREIBEN
            // ==================================================

            bewerbung: {

                name: "Bewerbungsschreiben",

                rollen: [
                    "Bewerbungscoach",
                    "Karriereberater",
                    "HR-Kommunikationsexperte",
                    "Professioneller Bewerbungstexter"
                ],

                ziele: [
                    "Bewerbungsschreiben erstellen",
                    "Anschreiben auf Stellenanzeige zuschneiden",
                    "Bestehendes Anschreiben verbessern",
                    "Motivation überzeugend formulieren",
                    "Eigene Erfahrung passend darstellen",
                    "Kurzes modernes Anschreiben erstellen"
                ],

                anforderungen: [
                    "Stellenanforderungen konkret berücksichtigen",
                    "Nur tatsächlich genannte Erfahrungen verwenden",
                    "Keine Fähigkeiten oder Erfahrungen erfinden",
                    "Konkreten Bezug zum Unternehmen herstellen",
                    "Allgemeine Floskeln vermeiden",
                    "Motivation glaubwürdig formulieren"
                ],

                ausgabeformate: [
                    "Fertiges Bewerbungsschreiben",
                    "Modernes kurzes Anschreiben",
                    "Formelles Anschreiben",
                    "Anschreiben mit Stellenbezug",
                    "Mehrere Einstiegsvarianten",
                    "Optimierte Fassung"
                ]
            },


            // ==================================================
            // LEBENSLAUF & PROFILTEXTE
            // ==================================================

            lebenslauf: {

                name: "Lebenslauf & Profiltexte",

                rollen: [
                    "Lebenslauf-Experte",
                    "Karriereberater",
                    "Personal-Branding-Texter",
                    "Recruiting-Spezialist"
                ],

                ziele: [
                    "Lebenslauf verbessern",
                    "Berufserfahrung prägnant formulieren",
                    "Profiltext erstellen",
                    "Kompetenzen übersichtlich darstellen",
                    "Lebenslauf auf Stelle ausrichten",
                    "LinkedIn- oder Kurzprofil formulieren"
                ],

                anforderungen: [
                    "Nur tatsächlich genannte Erfahrungen verwenden",
                    "Keine Qualifikationen erfinden",
                    "Konkrete Tätigkeiten klar formulieren",
                    "Relevante Erfahrungen priorisieren",
                    "Unnötige Wiederholungen vermeiden",
                    "Kurz und professionell formulieren"
                ],

                ausgabeformate: [
                    "Lebenslauf-Textbausteine",
                    "Kurzprofil",
                    "Berufserfahrung in Stichpunkten",
                    "Kompetenzprofil",
                    "Optimierte Formulierungen",
                    "LinkedIn-Profiltext"
                ]
            },


            // ==================================================
            // GESCHÄFTLICHE KOMMUNIKATION
            // ==================================================

            geschaeftlich: {

                name: "Geschäftliche Kommunikation",

                rollen: [
                    "Business-Kommunikationsberater",
                    "Geschäftskorrespondenz-Experte",
                    "Corporate-Communication-Redakteur",
                    "Textredakteur"
                ],

                ziele: [
                    "Geschäftlichen Text formulieren",
                    "Professionelle Nachricht erstellen",
                    "Sachverhalt klar kommunizieren",
                    "Geschäftlichen Text verbessern",
                    "Entscheidung schriftlich kommunizieren",
                    "Professionelle Anfrage formulieren"
                ],

                anforderungen: [
                    "Sachlich und professionell formulieren",
                    "Kernaussage klar hervorheben",
                    "Empfänger und Beziehung berücksichtigen",
                    "Wichtige Termine und Fakten erhalten",
                    "Konkrete nächste Schritte nennen",
                    "Unnötige Floskeln vermeiden"
                ],

                ausgabeformate: [
                    "Geschäftliche E-Mail",
                    "Kurze Mitteilung",
                    "Formelles Schreiben",
                    "Professionelle Nachricht",
                    "Management-Kurzfassung",
                    "Mehrere Tonalitätsvarianten"
                ]
            },


            // ==================================================
            // KUNDENKOMMUNIKATION
            // ==================================================

            kundenkommunikation: {

                name: "Kundenkommunikation",

                rollen: [
                    "Kundenkommunikations-Experte",
                    "Customer-Service-Berater",
                    "Account-Management-Kommunikationscoach",
                    "Professioneller Textredakteur"
                ],

                ziele: [
                    "Kundenanfrage beantworten",
                    "Kundeninformation formulieren",
                    "Schwierige Nachricht kundenfreundlich formulieren",
                    "Verzögerung kommunizieren",
                    "Lösung oder Alternative anbieten",
                    "Bestehende Kundenantwort verbessern"
                ],

                anforderungen: [
                    "Kundenperspektive berücksichtigen",
                    "Freundlich und professionell formulieren",
                    "Problem oder Anliegen konkret beantworten",
                    "Keine Zusagen erfinden",
                    "Nächste Schritte klar erklären",
                    "Verantwortung nicht unnötig abschieben"
                ],

                ausgabeformate: [
                    "Fertige Kundenantwort",
                    "Kurze Kunden-E-Mail",
                    "Service-Nachricht",
                    "Formelle Kundeninformation",
                    "Mehrere Antwortvarianten",
                    "Antwort mit Lösungsvorschlag"
                ]
            },


            // ==================================================
            // BESCHWERDEN & REKLAMATIONEN
            // ==================================================

            reklamationen: {

                name: "Beschwerden & Reklamationen",

                rollen: [
                    "Reklamationsberater",
                    "Verbraucherkommunikations-Experte",
                    "Konfliktkommunikations-Coach",
                    "Professioneller Textredakteur"
                ],

                ziele: [
                    "Reklamation formulieren",
                    "Beschwerde sachlich schreiben",
                    "Mangel dokumentieren",
                    "Konkrete Lösung fordern",
                    "Bestehende Beschwerde verbessern",
                    "Antwort auf Reklamation formulieren"
                ],

                anforderungen: [
                    "Nur bekannte Fakten verwenden",
                    "Sachverhalt chronologisch darstellen",
                    "Emotionale Übertreibungen vermeiden",
                    "Gewünschte Lösung konkret nennen",
                    "Fristen nur verwenden, wenn sie bekannt oder gewünscht sind",
                    "Bestimmt, aber respektvoll formulieren"
                ],

                ausgabeformate: [
                    "Fertige Reklamation",
                    "Sachliche Beschwerde",
                    "Kurze Reklamations-E-Mail",
                    "Formelles Reklamationsschreiben",
                    "Chronologische Darstellung",
                    "Antwort auf eine Beschwerde"
                ]
            },


            // ==================================================
            // ARGUMENTATION & ÜBERZEUGUNG
            // ==================================================

            argumentation: {

                name: "Argumentation & Überzeugung",

                rollen: [
                    "Argumentationscoach",
                    "Kommunikationsstratege",
                    "Rhetorik-Experte",
                    "Kritischer Sparringspartner"
                ],

                ziele: [
                    "Argumentation aufbauen",
                    "Eigene Position überzeugend darstellen",
                    "Argumente priorisieren",
                    "Gegenargumente vorbereiten",
                    "Schwache Argumentation verbessern",
                    "Entscheidung überzeugend begründen"
                ],

                anforderungen: [
                    "Fakten und Meinungen unterscheiden",
                    "Stärkste Argumente priorisieren",
                    "Realistische Gegenargumente berücksichtigen",
                    "Keine unbelegten Behauptungen als Fakten darstellen",
                    "Logische Sprünge vermeiden",
                    "Argumente an die Zielgruppe anpassen"
                ],

                ausgabeformate: [
                    "Argumentationsstruktur",
                    "Pro-und-Contra-Tabelle",
                    "Argumente mit Gegenargumenten",
                    "Gesprächsleitfaden",
                    "Überzeugender Text",
                    "Kurzargumentation"
                ]
            },


            // ==================================================
            // PRÄSENTATIONSTEXTE
            // ==================================================

            praesentationstexte: {

                name: "Präsentationstexte",

                rollen: [
                    "Präsentationscoach",
                    "Business-Storytelling-Experte",
                    "Redenschreiber",
                    "Kommunikationsberater"
                ],

                ziele: [
                    "Präsentationstext erstellen",
                    "Sprechertext für Folien schreiben",
                    "Präsentation verständlicher machen",
                    "Einleitung formulieren",
                    "Übergänge zwischen Folien erstellen",
                    "Schluss und Kernaussage formulieren"
                ],

                anforderungen: [
                    "Für gesprochene Sprache formulieren",
                    "Eine klare Kernbotschaft pro Abschnitt verwenden",
                    "Folientext und Sprechertext unterscheiden",
                    "Unnötig lange Sätze vermeiden",
                    "Übergänge logisch gestalten",
                    "Zielgruppe und Vorwissen berücksichtigen"
                ],

                ausgabeformate: [
                    "Sprechertext nach Folien",
                    "Präsentationsskript",
                    "Einleitung und Schluss",
                    "Kurzsprechtext",
                    "Foliennotizen",
                    "Sprechertext mit Übergängen"
                ]
            },


            // ==================================================
            // REDEN & VORTRÄGE
            // ==================================================

            reden: {

                name: "Reden & Vorträge",

                rollen: [
                    "Redenschreiber",
                    "Rhetorik-Coach",
                    "Vortragscoach",
                    "Storytelling-Experte"
                ],

                ziele: [
                    "Rede schreiben",
                    "Vortrag strukturieren",
                    "Starken Einstieg entwickeln",
                    "Rede emotionaler gestalten",
                    "Bestehende Rede verbessern",
                    "Schluss mit klarer Botschaft entwickeln"
                ],

                anforderungen: [
                    "Für gesprochene Sprache schreiben",
                    "Zielgruppe berücksichtigen",
                    "Klare Dramaturgie verwenden",
                    "Natürlich klingende Formulierungen verwenden",
                    "Gewünschte Redezeit berücksichtigen",
                    "Kernbotschaft deutlich herausarbeiten"
                ],

                ausgabeformate: [
                    "Komplette Rede",
                    "Vortragsmanuskript",
                    "Rede-Outline",
                    "Sprechkarten",
                    "Kurzrede",
                    "Rede mit Pausen und Betonungen"
                ]
            },


            // ==================================================
            // SOCIAL-MEDIA-TEXTE
            // ==================================================

            socialTexte: {

                name: "Social-Media-Texte",

                rollen: [
                    "Social-Media-Texter",
                    "Content Creator",
                    "Copywriter",
                    "Content-Stratege"
                ],

                ziele: [
                    "Social-Media-Post schreiben",
                    "Caption erstellen",
                    "Bestehenden Post verbessern",
                    "Starken Einstieg formulieren",
                    "Mehrere Textvarianten entwickeln",
                    "Text an Plattform anpassen"
                ],

                anforderungen: [
                    "Plattform berücksichtigen",
                    "Hauptbotschaft früh vermitteln",
                    "Kurze verständliche Sprache verwenden",
                    "Zur Zielgruppe passend formulieren",
                    "Unnötige Floskeln vermeiden",
                    "Call-to-Action nur einsetzen, wenn sinnvoll"
                ],

                ausgabeformate: [
                    "Fertiger Social-Media-Post",
                    "Kurze Caption",
                    "Drei Textvarianten",
                    "Post mit Hook",
                    "Kurz- und Langversion",
                    "Plattformspezifische Varianten"
                ]
            },


            // ==================================================
            // BLOGARTIKEL
            // ==================================================

            blog: {

                name: "Blogartikel",

                rollen: [
                    "Blogautor",
                    "Content-Redakteur",
                    "Fachautor",
                    "SEO-Content-Writer"
                ],

                ziele: [
                    "Blogartikel schreiben",
                    "Artikelstruktur entwickeln",
                    "Bestehenden Artikel verbessern",
                    "Komplexes Thema verständlich erklären",
                    "Einleitung und Schluss entwickeln",
                    "Artikel auf Zielgruppe ausrichten"
                ],

                anforderungen: [
                    "Klare Überschriftenstruktur verwenden",
                    "Zielgruppe berücksichtigen",
                    "Kernaussagen verständlich erklären",
                    "Unbelegte Fakten vermeiden",
                    "Wiederholungen reduzieren",
                    "Konkrete Beispiele verwenden, wenn sinnvoll"
                ],

                ausgabeformate: [
                    "Kompletter Blogartikel",
                    "Artikel-Outline",
                    "Artikel mit Zwischenüberschriften",
                    "Kurzartikel",
                    "Ausführlicher Fachartikel",
                    "Artikelentwurf"
                ]
            },


            // ==================================================
            // PRODUKTBESCHREIBUNGEN
            // ==================================================

            produkttexte: {

                name: "Produktbeschreibungen",

                rollen: [
                    "Produkttexter",
                    "E-Commerce-Copywriter",
                    "Marketing-Texter",
                    "Produktkommunikations-Experte"
                ],

                ziele: [
                    "Produktbeschreibung erstellen",
                    "Produkteigenschaften verständlich erklären",
                    "Kundennutzen hervorheben",
                    "Bestehenden Produkttext verbessern",
                    "Kurzen Verkaufstext erstellen",
                    "Mehrere Produkttextvarianten entwickeln"
                ],

                anforderungen: [
                    "Nur bekannte Produkteigenschaften verwenden",
                    "Keine technischen Eigenschaften erfinden",
                    "Eigenschaften und Kundennutzen unterscheiden",
                    "Zielgruppe berücksichtigen",
                    "Übertriebene Werbeversprechen vermeiden",
                    "Wichtigste Vorteile priorisieren"
                ],

                ausgabeformate: [
                    "Produktbeschreibung",
                    "E-Commerce-Kurztext",
                    "Produkttext mit Stichpunkten",
                    "Technische und werbliche Beschreibung",
                    "Mehrere Textvarianten",
                    "Kurz- und Langbeschreibung"
                ]
            },


            // ==================================================
            // KREATIVES SCHREIBEN
            // ==================================================

            kreativSchreiben: {

                name: "Kreatives Schreiben",

                rollen: [
                    "Kreativautor",
                    "Schreibcoach",
                    "Romanautor",
                    "Creative Writing Mentor"
                ],

                ziele: [
                    "Kreativen Text schreiben",
                    "Geschichte entwickeln",
                    "Szene schreiben",
                    "Schreibidee weiterentwickeln",
                    "Figuren lebendiger gestalten",
                    "Bestehenden kreativen Text verbessern"
                ],

                anforderungen: [
                    "Gewünschten Stil berücksichtigen",
                    "Atmosphäre konkret erzeugen",
                    "Anschauliche statt abstrakte Beschreibungen bevorzugen",
                    "Figuren konsistent darstellen",
                    "Klischees möglichst vermeiden",
                    "Kreative Varianten zulassen"
                ],

                ausgabeformate: [
                    "Fertige Szene",
                    "Kurzgeschichte",
                    "Textentwurf",
                    "Mehrere Varianten",
                    "Szenenbeschreibung",
                    "Schreibimpuls"
                ]
            },


            // ==================================================
            // STORYTELLING
            // ==================================================

            storytelling: {

                name: "Storytelling",

                rollen: [
                    "Storytelling-Experte",
                    "Dramaturg",
                    "Creative Writer",
                    "Narrativer Kommunikationsberater"
                ],

                ziele: [
                    "Geschichte strukturieren",
                    "Botschaft als Geschichte erzählen",
                    "Spannungsbogen entwickeln",
                    "Stärkeren Einstieg entwickeln",
                    "Story emotionaler gestalten",
                    "Bestehende Geschichte verbessern"
                ],

                anforderungen: [
                    "Klare Ausgangssituation schaffen",
                    "Konflikt oder Herausforderung definieren",
                    "Nachvollziehbare Entwicklung verwenden",
                    "Kernbotschaft in die Handlung integrieren",
                    "Unnötige Nebenhandlungen vermeiden",
                    "Passenden Abschluss entwickeln"
                ],

                ausgabeformate: [
                    "Story-Struktur",
                    "Komplette Geschichte",
                    "Story-Outline",
                    "Drei Storyvarianten",
                    "Story nach Spannungsbogen",
                    "Kurzgeschichte"
                ]
            },


            // ==================================================
            // TON & SCHREIBSTIL
            // ==================================================

            schreibstil: {

                name: "Ton & Schreibstil",

                rollen: [
                    "Stilberater",
                    "Lektor",
                    "Kommunikationsexperte",
                    "Tone-of-Voice-Spezialist"
                ],

                ziele: [
                    "Schreibstil verändern",
                    "Tonalität professioneller machen",
                    "Text freundlicher formulieren",
                    "Text direkter formulieren",
                    "Text lockerer oder formeller machen",
                    "Einheitlichen Schreibstil entwickeln"
                ],

                anforderungen: [
                    "Bedeutung des Textes erhalten",
                    "Gewünschte Tonalität konsequent verwenden",
                    "Zielgruppe berücksichtigen",
                    "Keine neuen Fakten hinzufügen",
                    "Natürlich klingende Sprache verwenden",
                    "Übertriebene Stilmittel vermeiden"
                ],

                ausgabeformate: [
                    "Überarbeiteter Text",
                    "Mehrere Tonalitätsvarianten",
                    "Vorher-Nachher-Version",
                    "Style Guide",
                    "Formelle und lockere Variante",
                    "Tone-of-Voice-Beispiele"
                ]
            },


            // ==================================================
            // GESPRÄCHSVORBEREITUNG
            // ==================================================

            gespraechsvorbereitung: {

                name: "Gesprächsvorbereitung",

                rollen: [
                    "Kommunikationscoach",
                    "Gesprächsberater",
                    "Verhandlungscoach",
                    "Rhetorik-Trainer"
                ],

                ziele: [
                    "Gespräch vorbereiten",
                    "Gesprächsziele definieren",
                    "Argumente vorbereiten",
                    "Mögliche Reaktionen durchdenken",
                    "Fragen vorbereiten",
                    "Gesprächsablauf planen"
                ],

                anforderungen: [
                    "Eigenes Gesprächsziel klar definieren",
                    "Perspektive der anderen Person berücksichtigen",
                    "Fakten und Annahmen unterscheiden",
                    "Mögliche Einwände vorbereiten",
                    "Konkrete Fragen formulieren",
                    "Realistische Gesprächsoptionen entwickeln"
                ],

                ausgabeformate: [
                    "Gesprächsleitfaden",
                    "Vorbereitungs-Checkliste",
                    "Fragenliste",
                    "Argumente und Gegenargumente",
                    "Gesprächssimulation",
                    "Stichpunkte für das Gespräch"
                ]
            },


            // ==================================================
            // SCHWIERIGE GESPRÄCHE
            // ==================================================

            schwierigeGespraeche: {

                name: "Schwierige Gespräche",

                rollen: [
                    "Konfliktkommunikations-Coach",
                    "Gesprächsberater",
                    "Mediationsorientierter Kommunikationscoach",
                    "Rhetorik-Trainer"
                ],

                ziele: [
                    "Schwieriges Gespräch vorbereiten",
                    "Kritisches Thema sachlich ansprechen",
                    "Grenzen klar formulieren",
                    "Konflikt deeskalierend ansprechen",
                    "Kritik respektvoll äußern",
                    "Mögliche Gesprächsverläufe vorbereiten"
                ],

                anforderungen: [
                    "Beobachtungen und Bewertungen trennen",
                    "Konkretes Verhalten statt Persönlichkeit ansprechen",
                    "Eigene Erwartungen klar formulieren",
                    "Respektvolle und direkte Sprache verwenden",
                    "Keine Motive der anderen Person als Fakten unterstellen",
                    "Mögliche Reaktionen berücksichtigen"
                ],

                ausgabeformate: [
                    "Gesprächsleitfaden",
                    "Konkrete Formulierungen",
                    "Gesprächseinstieg",
                    "Gesprächssimulation",
                    "Stichpunkte",
                    "Mehrere Formulierungsvarianten"
                ]
            },


            // ==================================================
            // FEEDBACK FORMULIEREN
            // ==================================================

            feedback: {

                name: "Feedback formulieren",

                rollen: [
                    "Feedback-Coach",
                    "Kommunikationsberater",
                    "Führungskommunikations-Experte",
                    "Gesprächscoach"
                ],

                ziele: [
                    "Konstruktives Feedback formulieren",
                    "Positives Feedback schreiben",
                    "Kritisches Feedback sachlich formulieren",
                    "Feedbackgespräch vorbereiten",
                    "Bestehendes Feedback verbessern",
                    "Konkrete Verbesserungserwartung formulieren"
                ],

                anforderungen: [
                    "Konkrete Beobachtungen nennen",
                    "Beobachtung und Bewertung unterscheiden",
                    "Auswirkungen des Verhaltens erklären",
                    "Respektvoll und klar formulieren",
                    "Konkrete Verbesserung oder Erwartung nennen",
                    "Pauschale Aussagen vermeiden"
                ],

                ausgabeformate: [
                    "Fertiges Feedback",
                    "Feedback nach Struktur",
                    "Gesprächsleitfaden",
                    "Kurzes schriftliches Feedback",
                    "Positive und kritische Punkte",
                    "Mehrere Formulierungsvarianten"
                ]
            },


            // ==================================================
            // TEXTE KÜRZEN & VEREINFACHEN
            // ==================================================

            kuerzen: {

                name: "Texte kürzen & vereinfachen",

                rollen: [
                    "Textredakteur",
                    "Lektor",
                    "Experte für verständliche Sprache",
                    "Informationsdesigner"
                ],

                ziele: [
                    "Text kürzen",
                    "Text vereinfachen",
                    "Kernaussage herausarbeiten",
                    "Komplexe Sätze vereinfachen",
                    "Text auf bestimmte Länge reduzieren",
                    "Text verständlicher machen"
                ],

                anforderungen: [
                    "Kernaussagen vollständig erhalten",
                    "Keine neuen Informationen hinzufügen",
                    "Unnötige Wiederholungen entfernen",
                    "Kurze verständliche Sätze bevorzugen",
                    "Wichtige Fachbegriffe erhalten, wenn nötig",
                    "Bedeutung des Originals nicht verändern"
                ],

                ausgabeformate: [
                    "Gekürzte Fassung",
                    "Vereinfachte Fassung",
                    "Kurzfassung",
                    "Original und Kurzfassung",
                    "Stichpunkte",
                    "Version mit maximaler Wortzahl"
                ]
            }
        }
    },


    // ==================================================
    // 4. SOCIAL MEDIA & CONTENT
    // ==================================================

    socialContent: {

        name: "Social Media & Content",
        icon: "📱",

        unterkategorien: {


            // ==================================================
            // CONTENT-IDEEN
            // ==================================================

            contentIdeen: {

                name: "Content-Ideen",

                rollen: [
                    "Content-Stratege",
                    "Social-Media-Creator",
                    "Creative Director",
                    "Content-Ideen-Coach",
                    "Social-Media-Berater"
                ],

                ziele: [
                    "Neue Content-Ideen entwickeln",
                    "Ideen für mehrere Wochen erstellen",
                    "Ungewöhnliche Content-Ideen finden",
                    "Content passend zur Zielgruppe entwickeln",
                    "Content-Ideen aus einem Thema ableiten",
                    "Bestehende Ideen weiterentwickeln"
                ],

                anforderungen: [
                    "Mehrere deutlich unterschiedliche Ideen liefern",
                    "Zielgruppe berücksichtigen",
                    "Plattform berücksichtigen",
                    "Nicht nur offensichtliche Ideen nennen",
                    "Umsetzbarkeit berücksichtigen",
                    "Aufwand grob einschätzen",
                    "Jede Idee mit einer klaren Kernbotschaft versehen"
                ],

                ausgabeformate: [
                    "10 Content-Ideen",
                    "Ideenliste mit Kurzbeschreibung",
                    "Ideenmatrix",
                    "Ideen nach Aufwand",
                    "Drei ausgearbeitete Konzepte",
                    "Content-Ideen nach Plattform"
                ]
            },


            // ==================================================
            // REDAKTIONSPLANUNG
            // ==================================================

            redaktionsplanung: {

                name: "Redaktionsplanung",

                rollen: [
                    "Content-Manager",
                    "Redaktionsplaner",
                    "Social-Media-Stratege",
                    "Content-Marketing-Manager",
                    "Redaktionskoordinator"
                ],

                ziele: [
                    "Redaktionsplan erstellen",
                    "Content über mehrere Wochen verteilen",
                    "Themen sinnvoll abwechslungsreich planen",
                    "Posting-Frequenz strukturieren",
                    "Bestehenden Redaktionsplan verbessern",
                    "Content-Produktion realistisch planen"
                ],

                anforderungen: [
                    "Plattformen berücksichtigen",
                    "Zielgruppe berücksichtigen",
                    "Themen sinnvoll abwechseln",
                    "Produktionsaufwand realistisch verteilen",
                    "Wiederholungen vermeiden",
                    "Wichtige Termine und Ereignisse berücksichtigen",
                    "Puffer für spontane Inhalte einplanen"
                ],

                ausgabeformate: [
                    "Wochen-Redaktionsplan",
                    "Monats-Redaktionsplan",
                    "Redaktionskalender als Tabelle",
                    "Plan nach Plattform",
                    "Content-Produktionsplan",
                    "Redaktionsplan mit Statusspalten"
                ]
            },


            // ==================================================
            // INSTAGRAM
            // ==================================================

            instagram: {

                name: "Instagram",

                rollen: [
                    "Instagram-Stratege",
                    "Instagram-Content-Creator",
                    "Social-Media-Manager",
                    "Instagram-Copywriter",
                    "Content Designer"
                ],

                ziele: [
                    "Instagram-Post entwickeln",
                    "Instagram-Profil strategisch verbessern",
                    "Carousel planen",
                    "Story-Ideen entwickeln",
                    "Caption erstellen",
                    "Instagram-Content-Serie entwickeln",
                    "Bestehenden Beitrag verbessern"
                ],

                anforderungen: [
                    "Mobile Nutzung berücksichtigen",
                    "Hauptbotschaft schnell vermitteln",
                    "Visuelle und textliche Inhalte abstimmen",
                    "Zielgruppe berücksichtigen",
                    "Klaren Einstieg verwenden",
                    "Call-to-Action nur sinnvoll einsetzen",
                    "Plattformtypische Formate berücksichtigen"
                ],

                ausgabeformate: [
                    "Instagram-Post",
                    "Carousel-Struktur",
                    "Story-Sequenz",
                    "Caption mit Hook",
                    "Content-Serie",
                    "Mehrere Postvarianten"
                ]
            },


            // ==================================================
            // TIKTOK
            // ==================================================

            tiktok: {

                name: "TikTok",

                rollen: [
                    "TikTok-Content-Stratege",
                    "Short-Form-Video-Creator",
                    "TikTok-Skriptwriter",
                    "Social-Media-Trend-Analyst",
                    "Content Creator"
                ],

                ziele: [
                    "TikTok-Idee entwickeln",
                    "Kurzvideo-Skript erstellen",
                    "Starken Einstieg entwickeln",
                    "TikTok-Serie planen",
                    "Bestehendes Video verbessern",
                    "Mehrere Videoideen entwickeln"
                ],

                anforderungen: [
                    "In den ersten Sekunden Aufmerksamkeit erzeugen",
                    "Eine klare Kernbotschaft verwenden",
                    "Kurze natürliche Sprache einsetzen",
                    "Visuelle Wechsel einplanen",
                    "Zielgruppe berücksichtigen",
                    "Unnötige Einleitungen vermeiden",
                    "Idee auch ohne aufwendige Produktion umsetzbar machen"
                ],

                ausgabeformate: [
                    "TikTok-Skript",
                    "Shot-by-Shot-Plan",
                    "Hook plus Skript",
                    "15-, 30- oder 60-Sekunden-Konzept",
                    "TikTok-Serie",
                    "Mehrere Videoideen"
                ]
            },


            // ==================================================
            // YOUTUBE
            // ==================================================

            youtube: {

                name: "YouTube",

                rollen: [
                    "YouTube-Stratege",
                    "YouTube-Content-Creator",
                    "Video-Skriptwriter",
                    "YouTube-Kanalberater",
                    "Audience-Retention-Experte"
                ],

                ziele: [
                    "YouTube-Video planen",
                    "Videoidee entwickeln",
                    "Videoskript erstellen",
                    "Videoreihe entwickeln",
                    "Titel und Einstieg verbessern",
                    "Zuschauerbindung verbessern",
                    "YouTube-Kanal thematisch strukturieren"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Nutzen des Videos früh erklären",
                    "Starken Einstieg verwenden",
                    "Klare Kapitelstruktur entwickeln",
                    "Unnötig lange Einleitungen vermeiden",
                    "Visuelle Elemente berücksichtigen",
                    "Call-to-Action gezielt einsetzen"
                ],

                ausgabeformate: [
                    "YouTube-Videokonzept",
                    "Videoskript",
                    "Kapitelstruktur",
                    "Titel- und Hook-Varianten",
                    "Videoreihen-Konzept",
                    "Content-Plan für YouTube"
                ]
            },


            // ==================================================
            // LINKEDIN
            // ==================================================

            linkedin: {

                name: "LinkedIn",

                rollen: [
                    "LinkedIn-Content-Stratege",
                    "Personal-Branding-Berater",
                    "B2B-Content-Creator",
                    "LinkedIn-Copywriter",
                    "Business-Kommunikationsberater"
                ],

                ziele: [
                    "LinkedIn-Beitrag schreiben",
                    "Fachwissen sichtbar machen",
                    "Persönliche Marke stärken",
                    "Unternehmensbeitrag entwickeln",
                    "Diskussion auslösen",
                    "Bestehenden LinkedIn-Post verbessern"
                ],

                anforderungen: [
                    "Professionell und natürlich formulieren",
                    "Kernaussage früh vermitteln",
                    "Konkrete Erfahrung oder Erkenntnis verwenden",
                    "Unnötige Business-Floskeln vermeiden",
                    "Lesbare Absätze verwenden",
                    "Zielgruppe berücksichtigen",
                    "Call-to-Action nur bei echtem Mehrwert einsetzen"
                ],

                ausgabeformate: [
                    "LinkedIn-Post",
                    "Fachbeitrag",
                    "Story-basierter LinkedIn-Post",
                    "Kurzer Business-Post",
                    "Mehrere Einstiegsvarianten",
                    "Post mit Diskussionsfrage"
                ]
            },


            // ==================================================
            // FACEBOOK
            // ==================================================

            facebook: {

                name: "Facebook",

                rollen: [
                    "Facebook-Content-Manager",
                    "Community-Manager",
                    "Social-Media-Texter",
                    "Facebook-Marketing-Berater",
                    "Content Creator"
                ],

                ziele: [
                    "Facebook-Beitrag erstellen",
                    "Community-Beitrag entwickeln",
                    "Veranstaltung bewerben",
                    "Information verständlich kommunizieren",
                    "Diskussion anregen",
                    "Bestehenden Beitrag verbessern"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Kernaussage klar formulieren",
                    "Natürlich und verständlich schreiben",
                    "Lesbare Absätze verwenden",
                    "Unnötig werbliche Sprache vermeiden",
                    "Passenden Call-to-Action einsetzen",
                    "Beitrag zum gewählten Zweck passend halten"
                ],

                ausgabeformate: [
                    "Facebook-Post",
                    "Community-Beitrag",
                    "Veranstaltungsbeitrag",
                    "Kurze Ankündigung",
                    "Mehrere Textvarianten",
                    "Post mit Frage an die Community"
                ]
            },


            // ==================================================
            // PINTEREST
            // ==================================================

            pinterest: {

                name: "Pinterest",

                rollen: [
                    "Pinterest-Stratege",
                    "Pinterest-Content-Creator",
                    "Visual-Content-Berater",
                    "Pinterest-SEO-Texter",
                    "Content Designer"
                ],

                ziele: [
                    "Pinterest-Pin entwickeln",
                    "Pin-Titel formulieren",
                    "Pin-Beschreibung erstellen",
                    "Pinterest-Board strukturieren",
                    "Mehrere Pin-Ideen entwickeln",
                    "Bestehenden Pin optimieren"
                ],

                anforderungen: [
                    "Suchintention berücksichtigen",
                    "Klare Hauptbotschaft formulieren",
                    "Visuelle Wirkung berücksichtigen",
                    "Relevante Keywords natürlich verwenden",
                    "Beschreibung verständlich halten",
                    "Zielseite oder gewünschte Aktion berücksichtigen"
                ],

                ausgabeformate: [
                    "Pin-Titel und Beschreibung",
                    "Pinterest-Pin-Konzept",
                    "Board-Struktur",
                    "Keyword-orientierte Pin-Texte",
                    "Mehrere Pinvarianten",
                    "Pinterest-Content-Plan"
                ]
            },


            // ==================================================
            // X / TWITTER
            // ==================================================

            xTwitter: {

                name: "X / Twitter",

                rollen: [
                    "Social-Media-Copywriter",
                    "X-Content-Stratege",
                    "Kurztext-Redakteur",
                    "Community-Manager",
                    "Thought-Leadership-Texter"
                ],

                ziele: [
                    "Kurzen Beitrag formulieren",
                    "Thread erstellen",
                    "Komplexe Aussage knapp formulieren",
                    "Diskussion anregen",
                    "Mehrere Varianten entwickeln",
                    "Bestehenden Beitrag verbessern"
                ],

                anforderungen: [
                    "Kernaussage sofort verständlich machen",
                    "Knapp und präzise formulieren",
                    "Unnötige Wörter entfernen",
                    "Keine unbelegten Behauptungen als Fakten darstellen",
                    "Tonalität zur Zielgruppe passend wählen",
                    "Bei Threads logische Reihenfolge verwenden"
                ],

                ausgabeformate: [
                    "Einzelner Post",
                    "Thread",
                    "Drei Kurzvarianten",
                    "Post mit Frage",
                    "Post mit klarer Kernaussage",
                    "Kurzfassung eines längeren Textes"
                ]
            },


            // ==================================================
            // BEITRÄGE & POSTS
            // ==================================================

            posts: {

                name: "Beiträge & Posts",

                rollen: [
                    "Social-Media-Texter",
                    "Content Creator",
                    "Copywriter",
                    "Content-Redakteur",
                    "Social-Media-Stratege"
                ],

                ziele: [
                    "Social-Media-Post schreiben",
                    "Bestehenden Post verbessern",
                    "Mehrere Postvarianten entwickeln",
                    "Information als Post aufbereiten",
                    "Post an Zielgruppe anpassen",
                    "Post für verschiedene Plattformen umschreiben"
                ],

                anforderungen: [
                    "Kernaussage früh vermitteln",
                    "Plattform berücksichtigen",
                    "Zielgruppe berücksichtigen",
                    "Natürlich und verständlich schreiben",
                    "Unnötige Floskeln vermeiden",
                    "Passende Länge verwenden"
                ],

                ausgabeformate: [
                    "Fertiger Social-Media-Post",
                    "Drei Postvarianten",
                    "Kurz- und Langversion",
                    "Plattformspezifische Varianten",
                    "Post mit Hook",
                    "Post mit Call-to-Action"
                ]
            },


            // ==================================================
            // REELS & SHORTS
            // ==================================================

            reels: {

                name: "Reels & Shorts",

                rollen: [
                    "Short-Form-Content-Creator",
                    "Reels-Stratege",
                    "Kurzvideo-Skriptwriter",
                    "Social-Media-Videoexperte",
                    "Content Creator"
                ],

                ziele: [
                    "Reel entwickeln",
                    "Short planen",
                    "Kurzvideo-Skript erstellen",
                    "Hook entwickeln",
                    "Reels-Serie entwickeln",
                    "Bestehendes Kurzvideo verbessern"
                ],

                anforderungen: [
                    "In den ersten Sekunden Aufmerksamkeit erzeugen",
                    "Nur eine zentrale Botschaft verwenden",
                    "Kurze verständliche Sprache verwenden",
                    "Visuelle Wechsel einplanen",
                    "Plattform berücksichtigen",
                    "Unnötige Einleitungen vermeiden",
                    "Klare Schlussaktion definieren"
                ],

                ausgabeformate: [
                    "Reel-Skript",
                    "Short-Skript",
                    "Shot-by-Shot-Plan",
                    "Hook plus Ablauf",
                    "Mehrere Kurzvideoideen",
                    "15-, 30- oder 60-Sekunden-Version"
                ]
            },


            // ==================================================
            // CAPTIONS & BILDTEXTE
            // ==================================================

            captions: {

                name: "Captions & Bildtexte",

                rollen: [
                    "Social-Media-Copywriter",
                    "Caption-Texter",
                    "Content Creator",
                    "Markenkommunikations-Texter",
                    "Social-Media-Redakteur"
                ],

                ziele: [
                    "Caption schreiben",
                    "Bildtext verbessern",
                    "Kurze Caption entwickeln",
                    "Storytelling-Caption erstellen",
                    "Mehrere Tonalitäten entwickeln",
                    "Caption an Plattform anpassen"
                ],

                anforderungen: [
                    "Bild oder Inhalt konkret berücksichtigen",
                    "Kernaussage früh vermitteln",
                    "Natürlich schreiben",
                    "Zielgruppe berücksichtigen",
                    "Unnötig lange Einleitungen vermeiden",
                    "Call-to-Action nur sinnvoll einsetzen"
                ],

                ausgabeformate: [
                    "Kurze Caption",
                    "Längere Storytelling-Caption",
                    "Drei Caption-Varianten",
                    "Caption mit Hook",
                    "Caption mit Call-to-Action",
                    "Plattformspezifische Caption"
                ]
            },


            // ==================================================
            // HASHTAGS & KEYWORDS
            // ==================================================

            hashtags: {

                name: "Hashtags & Keywords",

                rollen: [
                    "Social-Media-SEO-Experte",
                    "Keyword-Stratege",
                    "Content-Stratege",
                    "Social-Media-Manager",
                    "Rechercheorientierter Content-Berater"
                ],

                ziele: [
                    "Passende Hashtags entwickeln",
                    "Keywords für einen Beitrag strukturieren",
                    "Hashtag-Sets erstellen",
                    "Themenbegriffe sammeln",
                    "Bestehende Hashtags verbessern",
                    "Keywords nach Relevanz gruppieren"
                ],

                anforderungen: [
                    "Thema und Zielgruppe berücksichtigen",
                    "Plattform berücksichtigen",
                    "Relevanz vor Menge priorisieren",
                    "Allgemeine und spezifische Begriffe mischen",
                    "Keine garantiert hohe Reichweite versprechen",
                    "Unpassende Trendbegriffe vermeiden"
                ],

                ausgabeformate: [
                    "Hashtag-Liste",
                    "Hashtag-Sets nach Größe",
                    "Keyword-Liste",
                    "Keywords nach Themen",
                    "Priorisierte Begriffe",
                    "Hashtags plus Begründung"
                ]
            },


            // ==================================================
            // HOOKS & EINSTIEGE
            // ==================================================

            hooks: {

                name: "Hooks & Einstiege",

                rollen: [
                    "Hook-Copywriter",
                    "Content-Stratege",
                    "Short-Form-Skriptwriter",
                    "Social-Media-Texter",
                    "Audience-Retention-Experte"
                ],

                ziele: [
                    "Starken Einstieg entwickeln",
                    "Mehrere Hook-Varianten erstellen",
                    "Schwachen Einstieg verbessern",
                    "Neugier erzeugen",
                    "Nutzen früh kommunizieren",
                    "Hooks für verschiedene Plattformen entwickeln"
                ],

                anforderungen: [
                    "Hauptthema sofort erkennbar machen",
                    "Neugier ohne irreführendes Clickbait erzeugen",
                    "Kurze Formulierungen bevorzugen",
                    "Zur Zielgruppe passend formulieren",
                    "Mehrere unterschiedliche Ansätze liefern",
                    "Keine falschen Versprechen verwenden"
                ],

                ausgabeformate: [
                    "10 Hook-Varianten",
                    "Hooks nach Stil",
                    "Hooks nach Plattform",
                    "Drei starke Einstiege",
                    "Vorher-Nachher-Varianten",
                    "Hook plus erste Sätze"
                ]
            },


            // ==================================================
            // CONTENT-SERIEN
            // ==================================================

            contentSerien: {

                name: "Content-Serien",

                rollen: [
                    "Content-Formatentwickler",
                    "Social-Media-Stratege",
                    "Redaktionsplaner",
                    "Creative Director",
                    "Content Creator"
                ],

                ziele: [
                    "Content-Serie entwickeln",
                    "Wiederkehrendes Format entwickeln",
                    "Serie für mehrere Wochen planen",
                    "Themen logisch aufeinander aufbauen",
                    "Bestehende Serie erweitern",
                    "Mehrere Serienkonzepte entwickeln"
                ],

                anforderungen: [
                    "Klare wiedererkennbare Struktur verwenden",
                    "Genügend Themen für mehrere Folgen vorsehen",
                    "Zielgruppe berücksichtigen",
                    "Plattform berücksichtigen",
                    "Produktionsaufwand realistisch halten",
                    "Einzelne Beiträge auch eigenständig verständlich machen"
                ],

                ausgabeformate: [
                    "Serienkonzept",
                    "10 Folgenideen",
                    "Serienplan",
                    "Redaktionsplan für eine Serie",
                    "Mehrere Formatvarianten",
                    "Serienstruktur mit wiederkehrenden Elementen"
                ]
            },


            // ==================================================
            // COMMUNITY-MANAGEMENT
            // ==================================================

            community: {

                name: "Community-Management",

                rollen: [
                    "Community-Manager",
                    "Social-Media-Moderator",
                    "Kundenkommunikations-Experte",
                    "Online-Community-Berater",
                    "Kommunikationsstratege"
                ],

                ziele: [
                    "Community-Kommunikation verbessern",
                    "Antwortstrategie entwickeln",
                    "Community-Regeln formulieren",
                    "Umgang mit Kritik vorbereiten",
                    "Interaktion erhöhen",
                    "Community-Routine entwickeln"
                ],

                anforderungen: [
                    "Respektvolle Kommunikation verwenden",
                    "Marken- oder Personenton berücksichtigen",
                    "Kritik sachlich behandeln",
                    "Keine unnötigen Konflikte verschärfen",
                    "Antworten an Situation und Ton anpassen",
                    "Grenzen bei unangemessenen Inhalten klar definieren"
                ],

                ausgabeformate: [
                    "Community-Leitfaden",
                    "Antwortvorlagen",
                    "Moderationsregeln",
                    "Reaktionsmatrix",
                    "Community-Checkliste",
                    "Kommunikationsstrategie"
                ]
            },


            // ==================================================
            // KOMMENTARE & ANTWORTEN
            // ==================================================

            kommentare: {

                name: "Kommentare & Antworten",

                rollen: [
                    "Community-Manager",
                    "Kommunikationsberater",
                    "Social-Media-Redakteur",
                    "Customer-Care-Texter",
                    "Konfliktkommunikations-Coach"
                ],

                ziele: [
                    "Kommentar beantworten",
                    "Kritischen Kommentar beantworten",
                    "Freundliche Antwort formulieren",
                    "Mehrere Antwortvarianten entwickeln",
                    "Diskussion professionell weiterführen",
                    "Bestehende Antwort verbessern"
                ],

                anforderungen: [
                    "Konkreten Kommentar berücksichtigen",
                    "Respektvoll und natürlich antworten",
                    "Keine unbekannten Fakten oder Zusagen erfinden",
                    "Kritik nicht unnötig defensiv beantworten",
                    "Bei Bedarf klar Grenzen setzen",
                    "Antwort möglichst kurz und passend halten"
                ],

                ausgabeformate: [
                    "Fertige Antwort",
                    "Drei Antwortvarianten",
                    "Kurze freundliche Antwort",
                    "Professionelle Antwort auf Kritik",
                    "Antwort mit Rückfrage",
                    "Deeskalierende Antwort"
                ]
            },


            // ==================================================
            // ZIELGRUPPENANSPRACHE
            // ==================================================

            zielgruppenansprache: {

                name: "Zielgruppenansprache",

                rollen: [
                    "Zielgruppenstratege",
                    "Content-Stratege",
                    "Kommunikationsberater",
                    "Copywriter",
                    "Audience-Research-Berater"
                ],

                ziele: [
                    "Content auf Zielgruppe zuschneiden",
                    "Tonalität für Zielgruppe entwickeln",
                    "Botschaft verständlicher machen",
                    "Mehrere Zielgruppen unterschiedlich ansprechen",
                    "Bestehenden Content zielgruppengerechter machen",
                    "Relevante Bedürfnisse herausarbeiten"
                ],

                anforderungen: [
                    "Nur bekannte Zielgruppeninformationen verwenden",
                    "Keine unbelegten Eigenschaften unterstellen",
                    "Sprache und Vorwissen berücksichtigen",
                    "Nutzen für die Zielgruppe klar machen",
                    "Tonalität passend wählen",
                    "Klischeehafte Ansprache vermeiden"
                ],

                ausgabeformate: [
                    "Zielgruppenangepasster Text",
                    "Mehrere Zielgruppenvarianten",
                    "Tone-of-Voice-Vorschlag",
                    "Botschaften nach Zielgruppe",
                    "Vorher-Nachher-Version",
                    "Ansprache-Leitfaden"
                ]
            },


            // ==================================================
            // CONTENT-RECYCLING
            // ==================================================

            recycling: {

                name: "Content-Recycling",

                rollen: [
                    "Content-Repurposing-Stratege",
                    "Content-Manager",
                    "Social-Media-Stratege",
                    "Redakteur",
                    "Multi-Channel-Content-Berater"
                ],

                ziele: [
                    "Bestehenden Content wiederverwenden",
                    "Langen Inhalt in mehrere Posts zerlegen",
                    "Content für andere Plattformen anpassen",
                    "Aus einem Inhalt mehrere Formate entwickeln",
                    "Bestehenden Content aktualisieren",
                    "Content-Ausbeute erhöhen"
                ],

                anforderungen: [
                    "Kernaussage des Originals erhalten",
                    "Keine neuen Fakten erfinden",
                    "Inhalt an jeweilige Plattform anpassen",
                    "Wiederholungen zwischen Varianten reduzieren",
                    "Format und Länge passend wählen",
                    "Original nicht unnötig verfälschen"
                ],

                ausgabeformate: [
                    "Repurposing-Plan",
                    "Content-Paket für mehrere Plattformen",
                    "Mehrere Social-Media-Posts",
                    "Kurz- und Langformate",
                    "Content-Recycling-Matrix",
                    "Plattformspezifische Varianten"
                ]
            },


            // ==================================================
            // CONTENT-STRATEGIE
            // ==================================================

            strategie: {

                name: "Content-Strategie",

                rollen: [
                    "Content-Stratege",
                    "Social-Media-Stratege",
                    "Content-Marketing-Berater",
                    "Redaktionsleiter",
                    "Digital-Content-Berater"
                ],

                ziele: [
                    "Content-Strategie entwickeln",
                    "Themenfelder definieren",
                    "Plattformen sinnvoll auswählen",
                    "Content-Ziele festlegen",
                    "Bestehende Strategie verbessern",
                    "Content systematisch auf Zielgruppe ausrichten"
                ],

                anforderungen: [
                    "Konkrete Ziele definieren",
                    "Zielgruppe berücksichtigen",
                    "Ressourcen und Produktionsaufwand berücksichtigen",
                    "Themenbereiche klar strukturieren",
                    "Plattformen nach Zweck auswählen",
                    "Messbare Kriterien vorschlagen",
                    "Realistische Strategie entwickeln"
                ],

                ausgabeformate: [
                    "Content-Strategie",
                    "Strategie nach Themenfeldern",
                    "Content-Pillar-Modell",
                    "Plattformstrategie",
                    "90-Tage-Plan",
                    "Strategie mit Kennzahlen"
                ]
            },


            // ==================================================
            // REICHWEITEN-IDEEN
            // ==================================================

            reichweite: {

                name: "Reichweiten-Ideen",

                rollen: [
                    "Social-Media-Wachstumsstratege",
                    "Content-Stratege",
                    "Community-Growth-Berater",
                    "Social-Media-Analyst",
                    "Content Creator"
                ],

                ziele: [
                    "Ideen für mehr Reichweite entwickeln",
                    "Organische Sichtbarkeit verbessern",
                    "Neue Content-Formate testen",
                    "Interaktion erhöhen",
                    "Bestehende Reichweitenstrategie verbessern",
                    "Realistische Wachstumsexperimente entwickeln"
                ],

                anforderungen: [
                    "Keine garantierten Reichweitenversprechen machen",
                    "Organische und realistische Maßnahmen bevorzugen",
                    "Zielgruppe berücksichtigen",
                    "Plattform berücksichtigen",
                    "Aufwand jeder Maßnahme einschätzen",
                    "Messbare Experimente vorschlagen",
                    "Qualität nicht zugunsten reiner Reichweite vernachlässigen"
                ],

                ausgabeformate: [
                    "10 Reichweiten-Ideen",
                    "Wachstumsplan",
                    "Testplan mit Experimenten",
                    "Maßnahmen nach Aufwand",
                    "Priorisierte Ideenliste",
                    "30-Tage-Wachstumsplan"
                ]
            },


            // ==================================================
            // PERSONAL BRANDING
            // ==================================================

            personalBranding: {

                name: "Personal Branding",

                rollen: [
                    "Personal-Branding-Stratege",
                    "Content-Stratege",
                    "Positionierungsberater",
                    "LinkedIn- und Social-Media-Berater",
                    "Markenkommunikations-Experte"
                ],

                ziele: [
                    "Persönliche Marke entwickeln",
                    "Eigene Positionierung schärfen",
                    "Content-Themen definieren",
                    "Wiedererkennbaren Kommunikationsstil entwickeln",
                    "Expertise sichtbar machen",
                    "Personal-Branding-Strategie verbessern"
                ],

                anforderungen: [
                    "Tatsächliche Fähigkeiten und Erfahrungen verwenden",
                    "Keine Expertise erfinden",
                    "Klare Positionierung entwickeln",
                    "Wiedererkennbare Themenfelder definieren",
                    "Authentische Tonalität bevorzugen",
                    "Zielgruppe berücksichtigen",
                    "Langfristig umsetzbare Strategie entwickeln"
                ],

                ausgabeformate: [
                    "Personal-Branding-Strategie",
                    "Positionierungsprofil",
                    "Content-Säulen",
                    "Tone-of-Voice-Leitfaden",
                    "30-Tage-Content-Plan",
                    "Profil- und Themenkonzept"
                ]
            },


            // ==================================================
            // UNTERNEHMENS-CONTENT
            // ==================================================

            unternehmensContent: {

                name: "Unternehmens-Content",

                rollen: [
                    "Corporate-Content-Stratege",
                    "Unternehmenskommunikations-Experte",
                    "B2B-Content-Manager",
                    "Social-Media-Manager",
                    "Corporate-Redakteur"
                ],

                ziele: [
                    "Unternehmensbeitrag entwickeln",
                    "Unternehmen verständlich präsentieren",
                    "Produkt oder Dienstleistung erklären",
                    "Mitarbeiter- oder Projektbeitrag entwickeln",
                    "Unternehmens-Content-Serie planen",
                    "Bestehenden Unternehmensbeitrag verbessern"
                ],

                anforderungen: [
                    "Nur bekannte Unternehmensinformationen verwenden",
                    "Keine Leistungen oder Erfolge erfinden",
                    "Markenton berücksichtigen",
                    "Zielgruppe berücksichtigen",
                    "Werbliche Übertreibungen vermeiden",
                    "Konkrete Botschaft pro Beitrag verwenden",
                    "Professionell und verständlich formulieren"
                ],

                ausgabeformate: [
                    "Unternehmens-Post",
                    "B2B-Beitrag",
                    "Projektvorstellung",
                    "Mitarbeiter-Story",
                    "Content-Serie",
                    "Mehrere Textvarianten"
                ]
            },


            // ==================================================
            // ANALYSE & OPTIMIERUNG
            // ==================================================

            analyse: {

                name: "Analyse & Optimierung",

                rollen: [
                    "Social-Media-Analyst",
                    "Content-Performance-Analyst",
                    "Social-Media-Stratege",
                    "Content-Optimierungsberater",
                    "Digital-Analytics-Berater"
                ],

                ziele: [
                    "Social-Media-Ergebnisse analysieren",
                    "Content-Performance bewerten",
                    "Stärken und Schwächen erkennen",
                    "Beiträge miteinander vergleichen",
                    "Verbesserungsmaßnahmen entwickeln",
                    "Content-Strategie anhand von Daten optimieren"
                ],

                anforderungen: [
                    "Nur bereitgestellte Daten als Fakten verwenden",
                    "Kennzahlen korrekt unterscheiden",
                    "Keine Ursachen ohne Beleg als Fakten darstellen",
                    "Beobachtung und Interpretation trennen",
                    "Wichtigste Erkenntnisse priorisieren",
                    "Konkrete Verbesserungsmaßnahmen ableiten",
                    "Fehlende Daten kenntlich machen"
                ],

                ausgabeformate: [
                    "Performance-Analyse",
                    "Kennzahlen-Tabelle",
                    "Stärken-und-Schwächen-Analyse",
                    "Optimierungsplan",
                    "Priorisierte Maßnahmenliste",
                    "Vergleich mehrerer Beiträge"
                ]
            }
        }
    },


    // ==================================================
    // 5. MARKETING & WERBUNG
    // ==================================================

    marketing: {

        name: "Marketing & Werbung",
        icon: "📣",

        unterkategorien: {


            // ==================================================
            // MARKETINGSTRATEGIE
            // ==================================================

            strategie: {

                name: "Marketingstrategie",

                rollen: [
                    "Marketingstratege",
                    "Strategischer Marketingberater",
                    "Growth-Marketing-Berater",
                    "Markenstratege",
                    "Marketing-Manager"
                ],

                ziele: [
                    "Marketingstrategie entwickeln",
                    "Bestehende Marketingstrategie verbessern",
                    "Marketingziele definieren",
                    "Geeignete Marketingkanäle auswählen",
                    "Marketingmaßnahmen priorisieren",
                    "Strategie für einen Markteintritt entwickeln"
                ],

                anforderungen: [
                    "Zielgruppe konkret berücksichtigen",
                    "Klare Marketingziele definieren",
                    "Maßnahmen nach Wirkung und Aufwand priorisieren",
                    "Verfügbare Ressourcen berücksichtigen",
                    "Realistische Kennzahlen vorschlagen",
                    "Annahmen klar kennzeichnen",
                    "Kurzfristige und langfristige Maßnahmen unterscheiden"
                ],

                ausgabeformate: [
                    "Marketingstrategie",
                    "90-Tage-Marketingplan",
                    "Strategie-Roadmap",
                    "Maßnahmenmatrix",
                    "Priorisierte Maßnahmenliste",
                    "Strategie mit Zielen und Kennzahlen"
                ]
            },


            // ==================================================
            // ZIELGRUPPENANALYSE
            // ==================================================

            zielgruppen: {

                name: "Zielgruppenanalyse",

                rollen: [
                    "Zielgruppenanalyst",
                    "Marketing-Research-Berater",
                    "Customer-Insights-Experte",
                    "Marktforschungsberater",
                    "Marketingstratege"
                ],

                ziele: [
                    "Zielgruppe strukturieren",
                    "Kundensegmente entwickeln",
                    "Bedürfnisse der Zielgruppe analysieren",
                    "Kaufmotive untersuchen",
                    "Zielgruppenbeschreibung verbessern",
                    "Mehrere Zielgruppen vergleichen"
                ],

                anforderungen: [
                    "Nur bekannte Informationen als Fakten darstellen",
                    "Vermutungen deutlich als Annahmen kennzeichnen",
                    "Keine Eigenschaften der Zielgruppe erfinden",
                    "Bedürfnisse und Probleme getrennt betrachten",
                    "Unterschiedliche Segmente unterscheiden",
                    "Relevante Informationslücken benennen"
                ],

                ausgabeformate: [
                    "Zielgruppenprofil",
                    "Segmentübersicht",
                    "Persona-Entwurf",
                    "Bedürfnis-Matrix",
                    "Vergleich mehrerer Zielgruppen",
                    "Analyse mit offenen Fragen"
                ]
            },


            // ==================================================
            // WERBEKAMPAGNEN
            // ==================================================

            kampagnen: {

                name: "Werbekampagnen",

                rollen: [
                    "Kampagnenstratege",
                    "Marketing-Manager",
                    "Creative Strategist",
                    "Werbeberater",
                    "Campaign Manager"
                ],

                ziele: [
                    "Werbekampagne entwickeln",
                    "Kampagnenidee strukturieren",
                    "Kampagne für mehrere Kanäle planen",
                    "Bestehende Kampagne verbessern",
                    "Kampagnenziele definieren",
                    "Kampagnenablauf entwickeln"
                ],

                anforderungen: [
                    "Kampagnenziel klar definieren",
                    "Zielgruppe berücksichtigen",
                    "Kernbotschaft konsistent halten",
                    "Kanäle sinnvoll aufeinander abstimmen",
                    "Budget und Ressourcen berücksichtigen",
                    "Messbare Kennzahlen definieren",
                    "Realistischen Zeitplan entwickeln"
                ],

                ausgabeformate: [
                    "Kampagnenkonzept",
                    "Kampagnen-Roadmap",
                    "Kanalplan",
                    "Creative Brief",
                    "Kampagnenplan mit Kennzahlen",
                    "Schritt-für-Schritt-Kampagne"
                ]
            },


            // ==================================================
            // WERBETEXTE
            // ==================================================

            werbetexte: {

                name: "Werbetexte",

                rollen: [
                    "Werbetexter",
                    "Conversion-Copywriter",
                    "Marketing-Copywriter",
                    "Brand Copywriter",
                    "Direct-Response-Texter"
                ],

                ziele: [
                    "Werbetext erstellen",
                    "Bestehenden Werbetext verbessern",
                    "Nutzen verständlicher formulieren",
                    "Mehrere Textvarianten entwickeln",
                    "Werbetext an Zielgruppe anpassen",
                    "Kürzeren und stärkeren Werbetext erstellen"
                ],

                anforderungen: [
                    "Nur bekannte Produktvorteile verwenden",
                    "Keine Eigenschaften oder Ergebnisse erfinden",
                    "Kundennutzen klar herausarbeiten",
                    "Zielgruppe berücksichtigen",
                    "Übertriebene Werbeversprechen vermeiden",
                    "Klare und natürliche Sprache verwenden",
                    "Call-to-Action passend zum Ziel formulieren"
                ],

                ausgabeformate: [
                    "Fertiger Werbetext",
                    "Drei Werbetextvarianten",
                    "Kurz- und Langversion",
                    "Headline plus Werbetext",
                    "Werbetext mit Call-to-Action",
                    "Vorher-Nachher-Version"
                ]
            },


            // ==================================================
            // ANZEIGEN & ADS
            // ==================================================

            ads: {

                name: "Anzeigen & Ads",

                rollen: [
                    "Performance-Marketing-Experte",
                    "Ad-Copywriter",
                    "Paid-Social-Stratege",
                    "Google-Ads-Berater",
                    "Conversion-Marketer"
                ],

                ziele: [
                    "Anzeige entwickeln",
                    "Ad-Text erstellen",
                    "Mehrere Anzeigenvarianten entwickeln",
                    "Bestehende Anzeige verbessern",
                    "Anzeigenwinkel entwickeln",
                    "Testvarianten für eine Kampagne erstellen"
                ],

                anforderungen: [
                    "Plattform berücksichtigen",
                    "Zielgruppe klar ansprechen",
                    "Eine zentrale Botschaft pro Anzeige verwenden",
                    "Keine unbelegten Leistungsversprechen machen",
                    "Mehrere unterschiedliche Anzeigenwinkel entwickeln",
                    "Call-to-Action passend zum Kampagnenziel wählen",
                    "Testbare Varianten erzeugen"
                ],

                ausgabeformate: [
                    "Ad-Varianten",
                    "Headline plus Beschreibung",
                    "Anzeigenmatrix",
                    "A/B-Test-Varianten",
                    "Paid-Social-Ad",
                    "Google-Ad-Text"
                ]
            },


            // ==================================================
            // MARKENPOSITIONIERUNG
            // ==================================================

            positionierung: {

                name: "Markenpositionierung",

                rollen: [
                    "Markenstratege",
                    "Positionierungsberater",
                    "Brand Consultant",
                    "Marketingstratege",
                    "Wettbewerbsstratege"
                ],

                ziele: [
                    "Markenpositionierung entwickeln",
                    "Positionierung schärfen",
                    "Unterscheidungsmerkmale herausarbeiten",
                    "Markenversprechen formulieren",
                    "Positionierung gegenüber Wettbewerbern prüfen",
                    "Bestehende Positionierung verbessern"
                ],

                anforderungen: [
                    "Nur tatsächlich vorhandene Stärken verwenden",
                    "Keine Alleinstellungsmerkmale erfinden",
                    "Zielgruppe berücksichtigen",
                    "Wettbewerbsumfeld berücksichtigen",
                    "Positionierung klar und verständlich formulieren",
                    "Austauschbare Aussagen vermeiden"
                ],

                ausgabeformate: [
                    "Positionierungsstatement",
                    "Positionierungsprofil",
                    "Markenversprechen",
                    "Differenzierungsmatrix",
                    "Positionierungsvarianten",
                    "Kurzpositionierung"
                ]
            },


            // ==================================================
            // BRANDING
            // ==================================================

            branding: {

                name: "Branding",

                rollen: [
                    "Brand Strategist",
                    "Markenberater",
                    "Brand Manager",
                    "Creative Director",
                    "Markenkommunikations-Experte"
                ],

                ziele: [
                    "Markenidentität entwickeln",
                    "Markenwerte definieren",
                    "Markenpersönlichkeit entwickeln",
                    "Markensprache festlegen",
                    "Bestehendes Branding verbessern",
                    "Konsistente Markenkommunikation entwickeln"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Markenwerte klar definieren",
                    "Konsistente Markenpersönlichkeit entwickeln",
                    "Austauschbare Aussagen vermeiden",
                    "Visuelle und sprachliche Wirkung aufeinander abstimmen",
                    "Langfristige Nutzbarkeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Branding-Konzept",
                    "Markenprofil",
                    "Brand Guidelines",
                    "Tone-of-Voice-Leitfaden",
                    "Markenwerte und Persönlichkeit",
                    "Branding-Checkliste"
                ]
            },


            // ==================================================
            // NAMING & SLOGANS
            // ==================================================

            naming: {

                name: "Naming & Slogans",

                rollen: [
                    "Naming-Experte",
                    "Brand Copywriter",
                    "Markenstratege",
                    "Creative Director",
                    "Slogan-Texter"
                ],

                ziele: [
                    "Markennamen entwickeln",
                    "Produktnamen entwickeln",
                    "Slogan erstellen",
                    "Bestehenden Namen verbessern",
                    "Mehrere Namensrichtungen entwickeln",
                    "Kurze Markenbotschaft formulieren"
                ],

                anforderungen: [
                    "Mehrere deutlich unterschiedliche Ansätze liefern",
                    "Gewünschte Markenwirkung berücksichtigen",
                    "Zielgruppe berücksichtigen",
                    "Leicht aussprechbare Varianten bevorzugen",
                    "Unnötig komplizierte Namen vermeiden",
                    "Keine Verfügbarkeit von Marken oder Domains behaupten"
                ],

                ausgabeformate: [
                    "20 Namensideen",
                    "Namensideen nach Stil",
                    "Slogan-Liste",
                    "Name plus Slogan",
                    "Top-5 mit Begründung",
                    "Mehrere kreative Richtungen"
                ]
            },


            // ==================================================
            // PRODUKTMARKETING
            // ==================================================

            produktmarketing: {

                name: "Produktmarketing",

                rollen: [
                    "Product-Marketing-Manager",
                    "Marketingstratege",
                    "Go-to-Market-Berater",
                    "Produktkommunikations-Experte",
                    "Positionierungsberater"
                ],

                ziele: [
                    "Produkt vermarkten",
                    "Produkteinführung planen",
                    "Produktnutzen kommunizieren",
                    "Go-to-Market-Strategie entwickeln",
                    "Produktpositionierung verbessern",
                    "Marketingbotschaften entwickeln"
                ],

                anforderungen: [
                    "Nur bekannte Produkteigenschaften verwenden",
                    "Keine Leistungsmerkmale erfinden",
                    "Eigenschaften und Kundennutzen unterscheiden",
                    "Zielgruppe konkret berücksichtigen",
                    "Wichtigste Kaufargumente priorisieren",
                    "Wettbewerbsumfeld berücksichtigen"
                ],

                ausgabeformate: [
                    "Product-Marketing-Plan",
                    "Go-to-Market-Plan",
                    "Messaging-Framework",
                    "Produktpositionierung",
                    "Nutzenargumentation",
                    "Launch-Checkliste"
                ]
            },


            // ==================================================
            // CONTENT-MARKETING
            // ==================================================

            contentMarketing: {

                name: "Content-Marketing",

                rollen: [
                    "Content-Marketing-Stratege",
                    "Content Manager",
                    "Inbound-Marketing-Berater",
                    "SEO-Content-Stratege",
                    "Marketing-Redakteur"
                ],

                ziele: [
                    "Content-Marketing-Strategie entwickeln",
                    "Content entlang der Customer Journey planen",
                    "Themenfelder entwickeln",
                    "Content zur Leadgewinnung einsetzen",
                    "Bestehende Content-Strategie verbessern",
                    "Content-Formate auswählen"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Marketingziel pro Inhalt definieren",
                    "Customer Journey berücksichtigen",
                    "Mehrwert vor Werbung priorisieren",
                    "Geeignete Formate auswählen",
                    "Messbare Kennzahlen vorschlagen"
                ],

                ausgabeformate: [
                    "Content-Marketing-Strategie",
                    "Content-Funnel",
                    "Themenplan",
                    "Customer-Journey-Content-Matrix",
                    "90-Tage-Plan",
                    "Content-Portfolio"
                ]
            },


            // ==================================================
            // E-MAIL-MARKETING
            // ==================================================

            emailMarketing: {

                name: "E-Mail-Marketing",

                rollen: [
                    "E-Mail-Marketing-Experte",
                    "Lifecycle-Marketer",
                    "Conversion-Copywriter",
                    "CRM-Marketing-Berater",
                    "Newsletter-Stratege"
                ],

                ziele: [
                    "Marketing-E-Mail erstellen",
                    "E-Mail-Serie entwickeln",
                    "Automatisierte E-Mail-Strecke planen",
                    "Bestehende Marketing-E-Mail verbessern",
                    "Betreffzeilen entwickeln",
                    "Kampagnen-E-Mails strukturieren"
                ],

                anforderungen: [
                    "Empfänger und Funnel-Stufe berücksichtigen",
                    "Eine klare Kernbotschaft pro E-Mail verwenden",
                    "Betreff und Inhalt aufeinander abstimmen",
                    "Übertriebene Werbeversprechen vermeiden",
                    "Call-to-Action eindeutig formulieren",
                    "Mehrwert für den Empfänger deutlich machen"
                ],

                ausgabeformate: [
                    "Marketing-E-Mail",
                    "E-Mail-Serie",
                    "Betreffzeilen-Varianten",
                    "Willkommenssequenz",
                    "Sales-E-Mail",
                    "E-Mail-Funnel"
                ]
            },


            // ==================================================
            // NEWSLETTER
            // ==================================================

            newsletter: {

                name: "Newsletter",

                rollen: [
                    "Newsletter-Redakteur",
                    "E-Mail-Marketing-Experte",
                    "Content-Marketing-Texter",
                    "CRM-Redakteur",
                    "Marketing-Copywriter"
                ],

                ziele: [
                    "Newsletter schreiben",
                    "Newsletter strukturieren",
                    "Betreffzeile entwickeln",
                    "Bestehenden Newsletter verbessern",
                    "Regelmäßiges Newsletterformat entwickeln",
                    "Newsletter kürzer und klarer machen"
                ],

                anforderungen: [
                    "Kernaussage früh vermitteln",
                    "Lesbare Abschnitte verwenden",
                    "Zielgruppe berücksichtigen",
                    "Mehrwert für Leser priorisieren",
                    "Unnötige Werbung vermeiden",
                    "Call-to-Action klar formulieren"
                ],

                ausgabeformate: [
                    "Kompletter Newsletter",
                    "Newsletter-Vorlage",
                    "Betreff plus Preheader",
                    "Kurznewsletter",
                    "Mehrere Betreffvarianten",
                    "Newsletter mit mehreren Themenblöcken"
                ]
            },


            // ==================================================
            // SEO
            // ==================================================

            seo: {

                name: "SEO",

                rollen: [
                    "SEO-Stratege",
                    "SEO-Content-Experte",
                    "Technical-SEO-Berater",
                    "Suchmaschinenmarketing-Berater",
                    "Content-Optimierungs-Experte"
                ],

                ziele: [
                    "SEO-Strategie entwickeln",
                    "Seite für Suchmaschinen optimieren",
                    "Content-Struktur verbessern",
                    "SEO-Potenziale identifizieren",
                    "Bestehende Inhalte optimieren",
                    "SEO-Maßnahmen priorisieren"
                ],

                anforderungen: [
                    "Suchintention berücksichtigen",
                    "Nutzerfreundlichkeit vor Keyword-Stuffing priorisieren",
                    "Keine Ranking-Garantien geben",
                    "Technische und inhaltliche Maßnahmen unterscheiden",
                    "Maßnahmen nach Wirkung und Aufwand priorisieren",
                    "Unsichere SEO-Annahmen kennzeichnen"
                ],

                ausgabeformate: [
                    "SEO-Audit",
                    "SEO-Maßnahmenplan",
                    "Onpage-Checkliste",
                    "Content-Optimierungsplan",
                    "Prioritätenliste",
                    "SEO-Roadmap"
                ]
            },


            // ==================================================
            // KEYWORD-RECHERCHE
            // ==================================================

            keywords: {

                name: "Keyword-Recherche",

                rollen: [
                    "Keyword-Research-Experte",
                    "SEO-Stratege",
                    "Search-Marketing-Berater",
                    "Content-Stratege",
                    "Suchintention-Analyst"
                ],

                ziele: [
                    "Keyword-Ideen entwickeln",
                    "Keywords nach Suchintention gruppieren",
                    "Themencluster entwickeln",
                    "Long-Tail-Keywords finden",
                    "Keyword-Set strukturieren",
                    "Content-Ideen aus Keywords ableiten"
                ],

                anforderungen: [
                    "Keywords thematisch gruppieren",
                    "Suchintention unterscheiden",
                    "Breite und spezifische Begriffe kombinieren",
                    "Keine Suchvolumina erfinden",
                    "Keine Ranking-Chancen als sicher darstellen",
                    "Informations- und Kaufintention unterscheiden"
                ],

                ausgabeformate: [
                    "Keyword-Liste",
                    "Keyword-Cluster",
                    "Suchintention-Matrix",
                    "Long-Tail-Liste",
                    "Content-Cluster",
                    "Priorisierte Keyword-Ideen"
                ]
            },


            // ==================================================
            // LANDINGPAGES
            // ==================================================

            landingpages: {

                name: "Landingpages",

                rollen: [
                    "Landingpage-Copywriter",
                    "Conversion-Experte",
                    "UX-Copywriter",
                    "Performance-Marketer",
                    "Web-Marketing-Stratege"
                ],

                ziele: [
                    "Landingpage strukturieren",
                    "Landingpage-Texte erstellen",
                    "Conversion verbessern",
                    "Value Proposition schärfen",
                    "Bestehende Landingpage verbessern",
                    "Call-to-Action optimieren"
                ],

                anforderungen: [
                    "Eine zentrale Zielhandlung definieren",
                    "Nutzen früh und klar kommunizieren",
                    "Nur bekannte Vorteile und Belege verwenden",
                    "Einwände der Zielgruppe berücksichtigen",
                    "Unnötige Ablenkungen vermeiden",
                    "Call-to-Action eindeutig formulieren"
                ],

                ausgabeformate: [
                    "Komplette Landingpage-Struktur",
                    "Landingpage-Texte",
                    "Wireframe mit Textinhalten",
                    "Headline-Varianten",
                    "Conversion-Checkliste",
                    "Vorher-Nachher-Optimierung"
                ]
            },


            // ==================================================
            // VERKAUFSSEITEN
            // ==================================================

            verkaufsseiten: {

                name: "Verkaufsseiten",

                rollen: [
                    "Sales-Page-Copywriter",
                    "Conversion-Copywriter",
                    "Direct-Response-Texter",
                    "Marketingstratege",
                    "Verkaufspsychologie-Berater"
                ],

                ziele: [
                    "Verkaufsseite entwickeln",
                    "Sales-Page-Texte schreiben",
                    "Produktnutzen überzeugend erklären",
                    "Einwände behandeln",
                    "Bestehende Verkaufsseite verbessern",
                    "Angebot klar strukturieren"
                ],

                anforderungen: [
                    "Nur belegbare Eigenschaften und Vorteile verwenden",
                    "Keine Ergebnisse garantieren",
                    "Problem und Nutzen konkret formulieren",
                    "Einwände der Zielgruppe berücksichtigen",
                    "Klare Informationshierarchie verwenden",
                    "Call-to-Action eindeutig platzieren"
                ],

                ausgabeformate: [
                    "Komplette Verkaufsseite",
                    "Sales-Page-Outline",
                    "Verkaufstext",
                    "Headline- und CTA-Varianten",
                    "Einwandbehandlung",
                    "Conversion-orientierte Struktur"
                ]
            },


            // ==================================================
            // LEADGENERIERUNG
            // ==================================================

            leads: {

                name: "Leadgenerierung",

                rollen: [
                    "Lead-Generation-Stratege",
                    "Growth-Marketer",
                    "B2B-Marketing-Berater",
                    "Inbound-Marketing-Experte",
                    "Funnel-Stratege"
                ],

                ziele: [
                    "Leadstrategie entwickeln",
                    "Leadmagnet entwickeln",
                    "Funnel zur Leadgewinnung planen",
                    "Mehr qualifizierte Leads gewinnen",
                    "Bestehende Leadstrategie verbessern",
                    "Leadquellen priorisieren"
                ],

                anforderungen: [
                    "Zielgruppe klar definieren",
                    "Qualität der Leads vor reiner Menge berücksichtigen",
                    "Konkreten Mehrwert für Interessenten bieten",
                    "Kanäle nach Aufwand und Potenzial bewerten",
                    "Messbare Funnel-Schritte definieren",
                    "Realistische Erwartungen verwenden"
                ],

                ausgabeformate: [
                    "Leadgenerierungs-Strategie",
                    "Lead-Funnel",
                    "Leadmagnet-Konzept",
                    "Maßnahmenplan",
                    "Kanalvergleich",
                    "30-Tage-Leadplan"
                ]
            },


            // ==================================================
            // KUNDENANSPRACHE
            // ==================================================

            kundenansprache: {

                name: "Kundenansprache",

                rollen: [
                    "Kundenkommunikations-Stratege",
                    "Sales-Copywriter",
                    "Marketing-Texter",
                    "Akquise-Berater",
                    "B2B-Kommunikations-Experte"
                ],

                ziele: [
                    "Potenzielle Kunden ansprechen",
                    "Erstkontakt formulieren",
                    "Marketingbotschaft personalisieren",
                    "Bestehende Kundenansprache verbessern",
                    "Mehrere Ansprachevarianten entwickeln",
                    "Nutzen für Kunden klarer erklären"
                ],

                anforderungen: [
                    "Zielgruppe und Situation berücksichtigen",
                    "Keine persönlichen Informationen erfinden",
                    "Kundennutzen konkret formulieren",
                    "Unnötig aggressive Verkaufssprache vermeiden",
                    "Kurz und verständlich formulieren",
                    "Nächsten Schritt klar benennen"
                ],

                ausgabeformate: [
                    "Erstkontakt-Nachricht",
                    "Akquise-E-Mail",
                    "Kurze Kundenansprache",
                    "Drei Varianten",
                    "B2B-Anschreiben",
                    "Ansprache mit Call-to-Action"
                ]
            },


            // ==================================================
            // WETTBEWERBSANALYSE
            // ==================================================

            wettbewerb: {

                name: "Wettbewerbsanalyse",

                rollen: [
                    "Wettbewerbsanalyst",
                    "Marketingstratege",
                    "Market-Intelligence-Berater",
                    "Positionierungsberater",
                    "Strategieberater"
                ],

                ziele: [
                    "Wettbewerber vergleichen",
                    "Marktpositionen analysieren",
                    "Stärken und Schwächen vergleichen",
                    "Differenzierungsmöglichkeiten erkennen",
                    "Wettbewerbslandschaft strukturieren",
                    "Eigene Position verbessern"
                ],

                anforderungen: [
                    "Nur bereitgestellte oder belegbare Informationen als Fakten verwenden",
                    "Keine Eigenschaften von Wettbewerbern erfinden",
                    "Vergleichskriterien einheitlich anwenden",
                    "Fakten und Interpretation trennen",
                    "Informationslücken benennen",
                    "Chancen und Risiken ableiten"
                ],

                ausgabeformate: [
                    "Wettbewerbstabelle",
                    "SWOT-Vergleich",
                    "Positionierungsmatrix",
                    "Stärken-und-Schwächen-Analyse",
                    "Differenzierungsanalyse",
                    "Wettbewerbsübersicht"
                ]
            },


            // ==================================================
            // MARKTANALYSE
            // ==================================================

            marktanalyse: {

                name: "Marktanalyse",

                rollen: [
                    "Marktanalyst",
                    "Marktforschungsberater",
                    "Business-Analyst",
                    "Marketingstratege",
                    "Market-Intelligence-Experte"
                ],

                ziele: [
                    "Markt strukturieren",
                    "Marktchancen analysieren",
                    "Trends untersuchen",
                    "Kundengruppen und Wettbewerber einordnen",
                    "Marktrisiken erkennen",
                    "Entscheidungsgrundlage erstellen"
                ],

                anforderungen: [
                    "Fakten und Annahmen unterscheiden",
                    "Keine Marktgrößen oder Kennzahlen erfinden",
                    "Zeitraum und Region berücksichtigen",
                    "Informationslücken klar benennen",
                    "Chancen und Risiken getrennt darstellen",
                    "Quellenbedarf kenntlich machen"
                ],

                ausgabeformate: [
                    "Marktanalyse",
                    "Marktübersicht",
                    "Chancen-Risiken-Matrix",
                    "Segmentanalyse",
                    "Trendübersicht",
                    "Management-Zusammenfassung"
                ]
            },


            // ==================================================
            // ANGEBOTSGESTALTUNG
            // ==================================================

            angebote: {

                name: "Angebotsgestaltung",

                rollen: [
                    "Angebotsstratege",
                    "Marketingberater",
                    "Value-Proposition-Experte",
                    "Sales-Berater",
                    "Produktmarketing-Experte"
                ],

                ziele: [
                    "Angebot entwickeln",
                    "Bestehendes Angebot verbessern",
                    "Leistungsumfang strukturieren",
                    "Kundennutzen klarer darstellen",
                    "Angebotspakete entwickeln",
                    "Angebot differenzieren"
                ],

                anforderungen: [
                    "Nur tatsächlich angebotene Leistungen verwenden",
                    "Leistung und Kundennutzen unterscheiden",
                    "Zielgruppe berücksichtigen",
                    "Leistungsumfang eindeutig beschreiben",
                    "Unklare oder übertriebene Versprechen vermeiden",
                    "Pakete sinnvoll voneinander unterscheiden"
                ],

                ausgabeformate: [
                    "Angebotsstruktur",
                    "Leistungspakete",
                    "Value Proposition",
                    "Angebotstext",
                    "Paketvergleich",
                    "Angebotsübersicht"
                ]
            },


            // ==================================================
            // PREISARGUMENTATION
            // ==================================================

            preisargumentation: {

                name: "Preisargumentation",

                rollen: [
                    "Pricing-Berater",
                    "Verkaufscoach",
                    "Value-Selling-Experte",
                    "Marketingstratege",
                    "Verhandlungsberater"
                ],

                ziele: [
                    "Preis überzeugend erklären",
                    "Preisargumentation entwickeln",
                    "Einwände zum Preis vorbereiten",
                    "Wert des Angebots verdeutlichen",
                    "Bestehende Preisargumentation verbessern",
                    "Preisgespräch vorbereiten"
                ],

                anforderungen: [
                    "Keine erfundenen Einsparungen oder Ergebnisse verwenden",
                    "Wert und Preis voneinander unterscheiden",
                    "Konkrete Leistungen berücksichtigen",
                    "Typische Einwände sachlich behandeln",
                    "Druck oder manipulative Formulierungen vermeiden",
                    "Alternativen transparent darstellen"
                ],

                ausgabeformate: [
                    "Preisargumentation",
                    "Einwandbehandlung",
                    "Gesprächsleitfaden",
                    "Argumente nach Priorität",
                    "Kurzargumentation",
                    "Preisgespräch-Simulation"
                ]
            },


            // ==================================================
            // CONVERSION-OPTIMIERUNG
            // ==================================================

            conversion: {

                name: "Conversion-Optimierung",

                rollen: [
                    "Conversion-Rate-Optimizer",
                    "CRO-Berater",
                    "UX-Marketing-Experte",
                    "Performance-Marketer",
                    "Conversion-Copywriter"
                ],

                ziele: [
                    "Conversion verbessern",
                    "Schwachstellen in Funnel oder Seite finden",
                    "Testideen entwickeln",
                    "Call-to-Action verbessern",
                    "Nutzerführung optimieren",
                    "Bestehende Seite analysieren"
                ],

                anforderungen: [
                    "Beobachtung und Vermutung unterscheiden",
                    "Keine Conversion-Steigerungen garantieren",
                    "Maßnahmen nach Wirkung und Aufwand priorisieren",
                    "Testbare Hypothesen formulieren",
                    "Zielgruppe und Nutzerintention berücksichtigen",
                    "Eine Änderung pro Test bevorzugen"
                ],

                ausgabeformate: [
                    "CRO-Analyse",
                    "Priorisierte Testideen",
                    "A/B-Test-Plan",
                    "Conversion-Checkliste",
                    "Hypothesenliste",
                    "Optimierungs-Roadmap"
                ]
            },


            // ==================================================
            // KAMPAGNENIDEEN
            // ==================================================

            kampagnenideen: {

                name: "Kampagnenideen",

                rollen: [
                    "Creative Strategist",
                    "Creative Director",
                    "Kampagnenentwickler",
                    "Marketing-Ideen-Coach",
                    "Werbekonzeptioner"
                ],

                ziele: [
                    "Neue Kampagnenideen entwickeln",
                    "Ungewöhnliche Werbeideen finden",
                    "Mehrere kreative Richtungen entwickeln",
                    "Kampagne aus einem Produktvorteil entwickeln",
                    "Bestehende Idee weiterentwickeln",
                    "Ideen für verschiedene Kanäle erstellen"
                ],

                anforderungen: [
                    "Mehrere deutlich unterschiedliche Ideen liefern",
                    "Zielgruppe berücksichtigen",
                    "Markenwirkung berücksichtigen",
                    "Nicht nur offensichtliche Ideen nennen",
                    "Umsetzbarkeit grob einschätzen",
                    "Kernidee jeder Variante klar erklären"
                ],

                ausgabeformate: [
                    "10 Kampagnenideen",
                    "Drei ausgearbeitete Konzepte",
                    "Ideenmatrix",
                    "Kampagnenrichtungen",
                    "Ideen nach Aufwand",
                    "Creative Concepts"
                ]
            },


            // ==================================================
            // MARKETINGPLAN
            // ==================================================

            marketingplan: {

                name: "Marketingplan",

                rollen: [
                    "Marketingplaner",
                    "Marketing-Manager",
                    "Strategischer Marketingberater",
                    "Projektorientierter Marketingberater",
                    "Growth-Marketing-Experte"
                ],

                ziele: [
                    "Marketingplan erstellen",
                    "Maßnahmen über einen Zeitraum verteilen",
                    "Marketingbudget strukturieren",
                    "Prioritäten festlegen",
                    "Marketingaktivitäten koordinieren",
                    "Bestehenden Marketingplan verbessern"
                ],

                anforderungen: [
                    "Zeitraum klar strukturieren",
                    "Ziele pro Maßnahme definieren",
                    "Budget und Ressourcen berücksichtigen",
                    "Verantwortlichkeiten berücksichtigen",
                    "Messbare Kennzahlen festlegen",
                    "Maßnahmen realistisch verteilen"
                ],

                ausgabeformate: [
                    "Monats-Marketingplan",
                    "Quartalsplan",
                    "Jahres-Marketingplan",
                    "Tabelle mit Maßnahmen und Kennzahlen",
                    "Marketing-Roadmap",
                    "Priorisierter Aktionsplan"
                ]
            },


            // ==================================================
            // GUERILLA-MARKETING
            // ==================================================

            guerilla: {

                name: "Guerilla-Marketing & kreative Aktionen",

                rollen: [
                    "Guerilla-Marketing-Stratege",
                    "Creative Director",
                    "Experiential-Marketing-Berater",
                    "Kreativkonzeptioner",
                    "Marketing-Ideen-Coach"
                ],

                ziele: [
                    "Ungewöhnliche Marketingaktion entwickeln",
                    "Aufmerksamkeit mit kleinem Budget erzeugen",
                    "Lokale Marketingidee entwickeln",
                    "Kreative Aktivierung planen",
                    "Mehrere Guerilla-Ideen entwickeln",
                    "Bestehende Aktionsidee verbessern"
                ],

                anforderungen: [
                    "Kreative und unterschiedliche Ideen liefern",
                    "Budget berücksichtigen",
                    "Praktische Umsetzbarkeit berücksichtigen",
                    "Sicherheit und Rechte Dritter berücksichtigen",
                    "Keine irreführenden Aktionen empfehlen",
                    "Mögliche Risiken jeder Idee nennen"
                ],

                ausgabeformate: [
                    "10 Guerilla-Ideen",
                    "Aktionskonzept",
                    "Drei kreative Varianten",
                    "Ideen nach Budget",
                    "Umsetzungsplan",
                    "Risiko-und-Aufwand-Matrix"
                ]
            },


            // ==================================================
            // OFFLINE-WERBUNG
            // ==================================================

            offline: {

                name: "Offline-Werbung",

                rollen: [
                    "Offline-Marketing-Berater",
                    "Werbekonzeptioner",
                    "Print-Marketing-Experte",
                    "Lokaler Marketingstratege",
                    "Media-Planner"
                ],

                ziele: [
                    "Offline-Werbemaßnahme entwickeln",
                    "Flyer- oder Plakatkampagne planen",
                    "Lokale Werbung verbessern",
                    "Geeignete Offline-Kanäle auswählen",
                    "Online- und Offline-Marketing verbinden",
                    "Bestehende Werbemaßnahme verbessern"
                ],

                anforderungen: [
                    "Zielgruppe und Standort berücksichtigen",
                    "Werbemittel an Nutzungssituation anpassen",
                    "Botschaft schnell verständlich machen",
                    "Budget berücksichtigen",
                    "Erfolgsmessung mitdenken",
                    "Unnötig komplexe Maßnahmen vermeiden"
                ],

                ausgabeformate: [
                    "Offline-Marketingplan",
                    "Flyer-Konzept",
                    "Plakat-Konzept",
                    "Kanalvergleich",
                    "Aktionsplan",
                    "Online-Offline-Kombination"
                ]
            },


            // ==================================================
            // EVENT-MARKETING
            // ==================================================

            eventMarketing: {

                name: "Event-Marketing",

                rollen: [
                    "Event-Marketing-Stratege",
                    "Event Manager",
                    "Experiential-Marketing-Berater",
                    "Marketing-Manager",
                    "Event-Kommunikations-Experte"
                ],

                ziele: [
                    "Event vermarkten",
                    "Besuchergewinnung planen",
                    "Kommunikationsplan für Event entwickeln",
                    "Event-Kampagne erstellen",
                    "Vor- und Nachkommunikation planen",
                    "Bestehendes Event-Marketing verbessern"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Eventnutzen klar formulieren",
                    "Zeitraum vor dem Event berücksichtigen",
                    "Geeignete Kanäle auswählen",
                    "Anmeldung oder gewünschte Aktion klar machen",
                    "Nachkommunikation berücksichtigen"
                ],

                ausgabeformate: [
                    "Event-Marketingplan",
                    "Kommunikationszeitplan",
                    "Kampagnenkonzept",
                    "Content-Plan für Event",
                    "Besuchergewinnungs-Plan",
                    "Vorher-Während-Nachher-Plan"
                ]
            },


            // ==================================================
            // KUNDENBINDUNG
            // ==================================================

            kundenbindung: {

                name: "Kundenbindung",

                rollen: [
                    "Customer-Retention-Stratege",
                    "CRM-Marketing-Berater",
                    "Customer-Experience-Berater",
                    "Lifecycle-Marketer",
                    "Kundenbindungs-Experte"
                ],

                ziele: [
                    "Kundenbindung verbessern",
                    "Wiederkäufe fördern",
                    "Bestandskundenkommunikation entwickeln",
                    "Loyalitätsmaßnahmen planen",
                    "Kundenabwanderung reduzieren",
                    "Bestehende Kundenstrategie verbessern"
                ],

                anforderungen: [
                    "Bestehende Kundenbeziehung berücksichtigen",
                    "Konkreten Kundennutzen bieten",
                    "Aufdringliche Kommunikation vermeiden",
                    "Maßnahmen nach Aufwand und Wirkung priorisieren",
                    "Messbare Kennzahlen definieren",
                    "Langfristige Kundenbeziehung berücksichtigen"
                ],

                ausgabeformate: [
                    "Kundenbindungsstrategie",
                    "Retention-Plan",
                    "CRM-Maßnahmenplan",
                    "Loyalitätskonzept",
                    "Bestandskunden-Kommunikationsplan",
                    "90-Tage-Plan"
                ]
            },


            // ==================================================
            // ERFOLGSMESSUNG & KENNZAHLEN
            // ==================================================

            kennzahlen: {

                name: "Erfolgsmessung & Kennzahlen",

                rollen: [
                    "Marketing-Analyst",
                    "Performance-Marketing-Analyst",
                    "Marketing-Controller",
                    "Digital-Analytics-Berater",
                    "KPI-Experte"
                ],

                ziele: [
                    "Marketingkennzahlen auswählen",
                    "Kampagnenerfolg bewerten",
                    "Marketingdaten analysieren",
                    "KPI-System entwickeln",
                    "Ergebnisse mehrerer Maßnahmen vergleichen",
                    "Verbesserungspotenziale erkennen"
                ],

                anforderungen: [
                    "Nur bereitgestellte Daten als Fakten verwenden",
                    "Kennzahlen korrekt definieren",
                    "Absolute und relative Werte unterscheiden",
                    "Keine Ursachen ohne Beleg als Fakten darstellen",
                    "Beobachtung und Interpretation trennen",
                    "Fehlende Daten klar benennen",
                    "Kennzahlen am Marketingziel ausrichten"
                ],

                ausgabeformate: [
                    "KPI-Übersicht",
                    "Marketing-Dashboard-Konzept",
                    "Performance-Analyse",
                    "Kennzahlen-Tabelle",
                    "Management-Zusammenfassung",
                    "Optimierungsmaßnahmen aus Kennzahlen"
                ]
            }
        }
    },


    // ==================================================
    // 6. PROGRAMMIERUNG & SOFTWAREENTWICKLUNG
    // ==================================================

    programmierung: {

        name: "Programmierung & Softwareentwicklung",
        icon: "💻",

        unterkategorien: {


            // ==================================================
            // PROGRAMMIEREN LERNEN
            // ==================================================

            lernen: {

                name: "Programmieren lernen",

                rollen: [
                    "Programmier-Tutor",
                    "Softwareentwicklungs-Coach",
                    "Coding-Mentor",
                    "Didaktischer Programmierlehrer",
                    "Praxisorientierter Entwickler"
                ],

                ziele: [
                    "Programmieren von Grund auf lernen",
                    "Ein bestimmtes Programmierthema verstehen",
                    "Lernplan für Programmierung erstellen",
                    "Mit einem Praxisprojekt lernen",
                    "Bestehende Wissenslücken schließen",
                    "Programmierkonzepte schrittweise üben"
                ],

                anforderungen: [
                    "Kenntnisstand berücksichtigen",
                    "Fachbegriffe verständlich erklären",
                    "Mit kleinen nachvollziehbaren Beispielen arbeiten",
                    "Theorie und praktische Übungen verbinden",
                    "Schwierigkeit schrittweise erhöhen",
                    "Keine unnötig fortgeschrittenen Konzepte voraussetzen",
                    "Nach wichtigen Abschnitten kurze Übungen anbieten"
                ],

                ausgabeformate: [
                    "Schritt-für-Schritt-Lektion",
                    "Lernplan",
                    "Praxisübung mit Lösung",
                    "Mini-Projekt",
                    "Erklärung mit Codebeispielen",
                    "Lernpfad nach Schwierigkeitsgrad"
                ]
            },


            // ==================================================
            // CODE GENERIEREN
            // ==================================================

            codeGenerieren: {

                name: "Code generieren",

                rollen: [
                    "Senior Softwareentwickler",
                    "Software Engineer",
                    "Full-Stack-Entwickler",
                    "Code-Generator mit Qualitätsfokus",
                    "Technischer Lösungsentwickler"
                ],

                ziele: [
                    "Funktionierenden Code erstellen",
                    "Funktion implementieren",
                    "Kleine Anwendung entwickeln",
                    "Algorithmus umsetzen",
                    "Bestehende Anforderungen in Code umwandeln",
                    "Mehrere technische Lösungsvarianten entwickeln"
                ],

                anforderungen: [
                    "Verwendete Programmiersprache berücksichtigen",
                    "Code vollständig und ausführbar liefern",
                    "Keine nicht genannten Abhängigkeiten voraussetzen",
                    "Sinnvolle Fehlerbehandlung berücksichtigen",
                    "Wichtige Annahmen kenntlich machen",
                    "Code verständlich strukturieren",
                    "Benötigte Dateien eindeutig benennen"
                ],

                ausgabeformate: [
                    "Vollständige Codedatei",
                    "Codeblock mit Erklärung",
                    "Mehrere Dateien mit Dateinamen",
                    "Minimal funktionierende Lösung",
                    "Produktionsnahe Lösung",
                    "Code plus Testbeispiel"
                ]
            },


            // ==================================================
            // CODE ERKLÄREN
            // ==================================================

            codeErklaeren: {

                name: "Code erklären",

                rollen: [
                    "Programmier-Tutor",
                    "Senior Softwareentwickler",
                    "Code-Reviewer",
                    "Softwareentwicklungs-Coach",
                    "Technischer Erklärer"
                ],

                ziele: [
                    "Bestehenden Code verstehen",
                    "Code Zeile für Zeile erklären",
                    "Programmfluss erklären",
                    "Funktionen und Variablen erklären",
                    "Komplexen Code vereinfachen",
                    "Zusammenhänge zwischen Dateien erklären"
                ],

                anforderungen: [
                    "Nur tatsächlich vorhandenen Code erklären",
                    "Keine nicht sichtbaren Funktionen erfinden",
                    "Fachbegriffe verständlich erklären",
                    "Programmfluss logisch nachvollziehbar darstellen",
                    "Wichtige Abhängigkeiten hervorheben",
                    "Unklare oder fehlende Teile kennzeichnen"
                ],

                ausgabeformate: [
                    "Zeile-für-Zeile-Erklärung",
                    "Abschnittsweise Erklärung",
                    "Programmablauf in Schritten",
                    "Kurzfassung plus Detailerklärung",
                    "Kommentierte Codeversion",
                    "Dateiübergreifende Übersicht"
                ]
            },


            // ==================================================
            // FEHLER FINDEN & DEBUGGING
            // ==================================================

            debugging: {

                name: "Fehler finden & Debugging",

                rollen: [
                    "Debugging-Experte",
                    "Senior Softwareentwickler",
                    "Software-Fehleranalyst",
                    "Code-Reviewer",
                    "Technischer Troubleshooter"
                ],

                ziele: [
                    "Programmfehler finden",
                    "Fehlermeldung analysieren",
                    "Ursache eines Fehlers bestimmen",
                    "Defekten Code reparieren",
                    "Unterschied zwischen erwartetem und tatsächlichem Verhalten erklären",
                    "Systematisch mehrere Fehlerquellen prüfen"
                ],

                anforderungen: [
                    "Fehlermeldung vollständig berücksichtigen",
                    "Ursache und Symptom unterscheiden",
                    "Keine unbekannte Ursache als Fakt darstellen",
                    "Mit der wahrscheinlichsten Ursache beginnen",
                    "Änderungen möglichst klein und gezielt halten",
                    "Bestehende funktionierende Teile nicht unnötig verändern",
                    "Nach jedem Schritt eine konkrete Prüfung nennen"
                ],

                ausgabeformate: [
                    "Fehlerdiagnose",
                    "Schritt-für-Schritt-Debugging",
                    "Korrigierte Codedatei",
                    "Ursache plus Lösung",
                    "Prüfplan",
                    "Minimaler Fix"
                ]
            },


            // ==================================================
            // CODE VERBESSERN & REFAKTORIEREN
            // ==================================================

            refactoring: {

                name: "Code verbessern & refaktorieren",

                rollen: [
                    "Senior Softwareentwickler",
                    "Softwarearchitekt",
                    "Refactoring-Experte",
                    "Code-Reviewer",
                    "Clean-Code-Berater"
                ],

                ziele: [
                    "Code besser strukturieren",
                    "Lesbarkeit verbessern",
                    "Doppelten Code reduzieren",
                    "Wartbarkeit erhöhen",
                    "Komplexität reduzieren",
                    "Bestehenden Code modernisieren"
                ],

                anforderungen: [
                    "Bestehende Funktionalität erhalten",
                    "Keine unnötigen Funktionsänderungen durchführen",
                    "Änderungen nachvollziehbar begründen",
                    "Lesbarkeit vor Cleverness priorisieren",
                    "Doppelte Logik reduzieren",
                    "Schnittstellen möglichst stabil halten",
                    "Risiken größerer Änderungen kennzeichnen"
                ],

                ausgabeformate: [
                    "Komplett refaktorierte Datei",
                    "Vorher-Nachher-Vergleich",
                    "Refactoring-Plan",
                    "Priorisierte Verbesserungsliste",
                    "Code mit Änderungsbegründung",
                    "Schrittweise Refactoring-Vorschläge"
                ]
            },


            // ==================================================
            // HTML & CSS
            // ==================================================

            htmlCss: {

                name: "HTML & CSS",

                rollen: [
                    "Frontend-Entwickler",
                    "HTML- und CSS-Experte",
                    "UI-Entwickler",
                    "Responsive-Web-Developer",
                    "Webdesign-Entwickler"
                ],

                ziele: [
                    "HTML-Struktur erstellen",
                    "CSS-Styling entwickeln",
                    "Layout verbessern",
                    "Responsive Design umsetzen",
                    "Darstellungsfehler beheben",
                    "Bestehende Oberfläche überarbeiten"
                ],

                anforderungen: [
                    "Semantisches HTML verwenden",
                    "Responsive Darstellung berücksichtigen",
                    "Bestehendes Design möglichst erhalten",
                    "CSS übersichtlich strukturieren",
                    "Unnötige Wiederholungen vermeiden",
                    "Barrierearme Grundstruktur berücksichtigen",
                    "Browserkompatible Lösungen bevorzugen"
                ],

                ausgabeformate: [
                    "Vollständige index.html",
                    "Vollständige style.css",
                    "HTML und CSS getrennt",
                    "Responsive Layout",
                    "Korrigierter Code",
                    "UI-Komponente"
                ]
            },


            // ==================================================
            // JAVASCRIPT
            // ==================================================

            javascript: {

                name: "JavaScript",

                rollen: [
                    "JavaScript-Entwickler",
                    "Frontend-Softwareentwickler",
                    "Senior JavaScript Engineer",
                    "Web-App-Entwickler",
                    "JavaScript-Tutor"
                ],

                ziele: [
                    "JavaScript-Funktion entwickeln",
                    "Interaktivität hinzufügen",
                    "DOM-Manipulation umsetzen",
                    "Event-Handling entwickeln",
                    "JavaScript-Fehler beheben",
                    "Bestehenden JavaScript-Code erweitern"
                ],

                anforderungen: [
                    "Vorhandene HTML-Struktur berücksichtigen",
                    "Bestehende Funktionen nicht unnötig verändern",
                    "Variablen und Funktionen verständlich benennen",
                    "Fehlerfälle berücksichtigen",
                    "Unnötige globale Variablen vermeiden",
                    "Browserumgebung berücksichtigen",
                    "Code modular und nachvollziehbar halten"
                ],

                ausgabeformate: [
                    "Vollständige script.js",
                    "JavaScript-Funktion",
                    "Code mit Erklärung",
                    "Event-Handling-Code",
                    "Korrigierte JavaScript-Datei",
                    "Modulare JavaScript-Lösung"
                ]
            },


            // ==================================================
            // PYTHON
            // ==================================================

            python: {

                name: "Python",

                rollen: [
                    "Python-Entwickler",
                    "Python-Tutor",
                    "Automation Engineer",
                    "Backend-Entwickler",
                    "Data- und Script-Developer"
                ],

                ziele: [
                    "Python-Skript erstellen",
                    "Python-Code erklären",
                    "Automatisierung entwickeln",
                    "Dateien oder Daten verarbeiten",
                    "Python-Fehler beheben",
                    "Bestehendes Python-Programm erweitern"
                ],

                anforderungen: [
                    "Python-Version berücksichtigen",
                    "Benötigte Bibliotheken nennen",
                    "Keine unnötigen externen Abhängigkeiten verwenden",
                    "Fehlerfälle berücksichtigen",
                    "Code verständlich strukturieren",
                    "Ein- und Ausgaben klar definieren",
                    "Installationsschritte nennen, wenn nötig"
                ],

                ausgabeformate: [
                    "Vollständige Python-Datei",
                    "Python-Skript",
                    "Code mit Erklärung",
                    "Schritt-für-Schritt-Lösung",
                    "Python-Funktion",
                    "Skript plus Beispielausgabe"
                ]
            },


            // ==================================================
            // JAVA
            // ==================================================

            java: {

                name: "Java",

                rollen: [
                    "Java-Entwickler",
                    "Senior Java Engineer",
                    "Backend-Entwickler",
                    "Java-Architekt",
                    "Java-Tutor"
                ],

                ziele: [
                    "Java-Code erstellen",
                    "Java-Anwendung strukturieren",
                    "Klassen und Objekte entwickeln",
                    "Java-Fehler beheben",
                    "Bestehende Java-Anwendung erweitern",
                    "Java-Code erklären"
                ],

                anforderungen: [
                    "Java-Version berücksichtigen",
                    "Klassen sinnvoll strukturieren",
                    "Datentypen korrekt verwenden",
                    "Fehlerbehandlung berücksichtigen",
                    "Abhängigkeiten eindeutig nennen",
                    "Bestehende Schnittstellen berücksichtigen",
                    "Lesbaren objektorientierten Code bevorzugen"
                ],

                ausgabeformate: [
                    "Vollständige Java-Klasse",
                    "Mehrere Java-Dateien",
                    "Java-Code mit Erklärung",
                    "Projektstruktur",
                    "Korrigierter Java-Code",
                    "Beispielanwendung"
                ]
            },


            // ==================================================
            // C#
            // ==================================================

            csharp: {

                name: "C#",

                rollen: [
                    "C#-Entwickler",
                    ".NET-Entwickler",
                    "Senior Software Engineer",
                    "Backend-Entwickler",
                    "C#-Tutor"
                ],

                ziele: [
                    "C#-Code erstellen",
                    ".NET-Anwendung entwickeln",
                    "Klassen und Methoden erstellen",
                    "C#-Fehler beheben",
                    "Bestehenden C#-Code erweitern",
                    "C#-Code erklären"
                ],

                anforderungen: [
                    ".NET-Version berücksichtigen",
                    "Datentypen korrekt verwenden",
                    "Fehlerbehandlung berücksichtigen",
                    "Abhängigkeiten nennen",
                    "Bestehende Architektur berücksichtigen",
                    "Lesbaren Code bevorzugen",
                    "Asynchrone Abläufe korrekt behandeln, wenn relevant"
                ],

                ausgabeformate: [
                    "Vollständige C#-Datei",
                    "C#-Klasse",
                    ".NET-Beispielprojekt",
                    "Code mit Erklärung",
                    "Korrigierter C#-Code",
                    "Mehrere zusammengehörige Dateien"
                ]
            },


            // ==================================================
            // C / C++
            // ==================================================

            cpp: {

                name: "C / C++",

                rollen: [
                    "C++-Entwickler",
                    "C-Entwickler",
                    "Systems Programmer",
                    "Embedded-Softwareentwickler",
                    "C/C++-Tutor"
                ],

                ziele: [
                    "C- oder C++-Code erstellen",
                    "Algorithmus implementieren",
                    "Speicherfehler analysieren",
                    "Bestehenden Code verbessern",
                    "Performancekritischen Code entwickeln",
                    "C/C++-Code erklären"
                ],

                anforderungen: [
                    "Verwendeten Sprachstandard berücksichtigen",
                    "Speicherverwaltung beachten",
                    "Datentypen und Grenzen berücksichtigen",
                    "Undefined Behavior vermeiden",
                    "Fehlerfälle behandeln",
                    "Abhängigkeiten nennen",
                    "Sicherheitskritische Stellen kennzeichnen"
                ],

                ausgabeformate: [
                    "Vollständige C-Datei",
                    "Vollständige C++-Datei",
                    "Header- und Quelldatei",
                    "Code mit Erklärung",
                    "Korrigierte Implementierung",
                    "Minimalbeispiel"
                ]
            },


            // ==================================================
            // SQL
            // ==================================================

            sql: {

                name: "SQL",

                rollen: [
                    "SQL-Entwickler",
                    "Datenbankentwickler",
                    "Database Engineer",
                    "SQL-Optimierungs-Experte",
                    "Datenbank-Tutor"
                ],

                ziele: [
                    "SQL-Abfrage erstellen",
                    "Daten filtern und gruppieren",
                    "Tabellen verbinden",
                    "SQL-Fehler beheben",
                    "Abfrage optimieren",
                    "Datenbankabfrage erklären"
                ],

                anforderungen: [
                    "Verwendetes Datenbanksystem berücksichtigen",
                    "Tabellen- und Spaltennamen exakt verwenden",
                    "Keine unbekannten Felder erfinden",
                    "NULL-Werte berücksichtigen",
                    "Datenändernde Befehle klar kennzeichnen",
                    "Performance bei großen Datenmengen berücksichtigen",
                    "Sichere Parametrisierung empfehlen, wenn relevant"
                ],

                ausgabeformate: [
                    "SQL-Abfrage",
                    "SQL-Skript",
                    "Abfrage mit Erklärung",
                    "Optimierte SQL-Version",
                    "Vorher-Nachher-Vergleich",
                    "Schrittweise Abfrageentwicklung"
                ]
            },


            // ==================================================
            // WEBENTWICKLUNG
            // ==================================================

            webentwicklung: {

                name: "Webentwicklung",

                rollen: [
                    "Webentwickler",
                    "Full-Stack-Entwickler",
                    "Frontend-Entwickler",
                    "Backend-Entwickler",
                    "Web-Softwarearchitekt"
                ],

                ziele: [
                    "Webprojekt technisch umsetzen",
                    "Frontend und Backend verbinden",
                    "Webfunktion entwickeln",
                    "Bestehende Webanwendung erweitern",
                    "Technische Struktur verbessern",
                    "Webentwicklungsproblem lösen"
                ],

                anforderungen: [
                    "Verwendete Technologien berücksichtigen",
                    "Frontend und Backend klar trennen",
                    "Bestehende Struktur möglichst erhalten",
                    "Sicherheit berücksichtigen",
                    "Responsive Nutzung berücksichtigen",
                    "Fehlerfälle behandeln",
                    "Benötigte Dateien und Abhängigkeiten nennen"
                ],

                ausgabeformate: [
                    "Projektstruktur",
                    "Mehrere vollständige Dateien",
                    "Technischer Implementierungsplan",
                    "Frontend-Backend-Beispiel",
                    "Code plus Erklärung",
                    "Schrittweise Umsetzung"
                ]
            },


            // ==================================================
            // BACKEND-ENTWICKLUNG
            // ==================================================

            backend: {

                name: "Backend-Entwicklung",

                rollen: [
                    "Backend-Entwickler",
                    "Backend-Softwarearchitekt",
                    "API-Entwickler",
                    "Server-Side Engineer",
                    "Database-Backend-Engineer"
                ],

                ziele: [
                    "Backend entwickeln",
                    "Serverlogik implementieren",
                    "Datenverarbeitung entwickeln",
                    "Authentifizierung integrieren",
                    "Backend-Fehler beheben",
                    "Bestehendes Backend erweitern"
                ],

                anforderungen: [
                    "Framework und Laufzeitumgebung berücksichtigen",
                    "Eingaben validieren",
                    "Fehlerbehandlung vorsehen",
                    "Sensible Daten schützen",
                    "Datenbankzugriffe sicher gestalten",
                    "API-Schnittstellen klar definieren",
                    "Logging und Wartbarkeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Backend-Dateien",
                    "API-Implementierung",
                    "Serverstruktur",
                    "Service-Schicht",
                    "Backend-Beispielprojekt",
                    "Technischer Implementierungsplan"
                ]
            },


            // ==================================================
            // APIs
            // ==================================================

            api: {

                name: "APIs",

                rollen: [
                    "API-Entwickler",
                    "Backend-Engineer",
                    "Integration Engineer",
                    "Softwarearchitekt",
                    "REST-API-Experte"
                ],

                ziele: [
                    "API entwickeln",
                    "API integrieren",
                    "API-Aufruf erstellen",
                    "REST-Endpunkte planen",
                    "API-Fehler analysieren",
                    "Bestehende Schnittstelle verbessern"
                ],

                anforderungen: [
                    "API-Dokumentation berücksichtigen",
                    "HTTP-Methoden korrekt verwenden",
                    "Statuscodes sinnvoll behandeln",
                    "Authentifizierung berücksichtigen",
                    "Fehlerantworten behandeln",
                    "Keine Endpunkte oder Parameter erfinden",
                    "Rate Limits und Sicherheit berücksichtigen"
                ],

                ausgabeformate: [
                    "API-Aufruf",
                    "REST-Endpunkt",
                    "API-Client-Code",
                    "Request-und-Response-Beispiel",
                    "Integrationsplan",
                    "API-Dokumentation"
                ]
            },


            // ==================================================
            // DATENBANKEN
            // ==================================================

            datenbanken: {

                name: "Datenbanken",

                rollen: [
                    "Datenbankentwickler",
                    "Database Architect",
                    "Backend-Entwickler",
                    "SQL-Experte",
                    "Datenmodellierungs-Experte"
                ],

                ziele: [
                    "Datenbankstruktur entwickeln",
                    "Datenmodell erstellen",
                    "Tabellenbeziehungen planen",
                    "Bestehendes Schema verbessern",
                    "Datenbankproblem analysieren",
                    "Datenbank für Anwendung entwerfen"
                ],

                anforderungen: [
                    "Anwendungsfälle berücksichtigen",
                    "Entitäten und Beziehungen klar definieren",
                    "Redundanzen sinnvoll vermeiden",
                    "Datentypen passend wählen",
                    "Indizes berücksichtigen",
                    "Datenintegrität sicherstellen",
                    "Migration bestehender Daten berücksichtigen"
                ],

                ausgabeformate: [
                    "Datenbankschema",
                    "Tabellenübersicht",
                    "SQL-DDL",
                    "ER-Modell als Text",
                    "Migrationsplan",
                    "Datenmodell mit Beziehungen"
                ]
            },


            // ==================================================
            // GIT & GITHUB
            // ==================================================

            git: {

                name: "Git & GitHub",

                rollen: [
                    "Git-Experte",
                    "Softwareentwickler",
                    "DevOps-Engineer",
                    "GitHub-Berater",
                    "Versionskontroll-Tutor"
                ],

                ziele: [
                    "Git-Befehl erklären",
                    "Repository einrichten",
                    "Änderungen versionieren",
                    "Branch-Problem lösen",
                    "Merge-Konflikt beheben",
                    "GitHub-Workflow einrichten"
                ],

                anforderungen: [
                    "Aktuellen Repository-Zustand berücksichtigen",
                    "Datenverlust vermeiden",
                    "Destruktive Befehle klar kennzeichnen",
                    "Befehle in korrekter Reihenfolge nennen",
                    "Lokale und Remote-Änderungen unterscheiden",
                    "Vor riskanten Schritten Sicherungsoption nennen"
                ],

                ausgabeformate: [
                    "Befehlsfolge",
                    "Schritt-für-Schritt-Anleitung",
                    "Git-Workflow",
                    "Fehlerdiagnose",
                    "Branch-Strategie",
                    "GitHub-Setup"
                ]
            },


            // ==================================================
            // SOFTWAREARCHITEKTUR
            // ==================================================

            architektur: {

                name: "Softwarearchitektur",

                rollen: [
                    "Softwarearchitekt",
                    "Senior Software Engineer",
                    "System Designer",
                    "Technical Lead",
                    "Solution Architect"
                ],

                ziele: [
                    "Softwarearchitektur entwickeln",
                    "Anwendung in Komponenten aufteilen",
                    "Bestehende Architektur verbessern",
                    "Technologieentscheidungen strukturieren",
                    "Abhängigkeiten reduzieren",
                    "Erweiterbare Architektur planen"
                ],

                anforderungen: [
                    "Funktionale Anforderungen berücksichtigen",
                    "Nichtfunktionale Anforderungen berücksichtigen",
                    "Komponenten klar voneinander trennen",
                    "Abhängigkeiten transparent darstellen",
                    "Einfachste geeignete Architektur bevorzugen",
                    "Skalierbarkeit nur bei tatsächlichem Bedarf einplanen",
                    "Vor- und Nachteile wichtiger Entscheidungen nennen"
                ],

                ausgabeformate: [
                    "Architekturübersicht",
                    "Komponentenmodell",
                    "Schichtenmodell",
                    "Entscheidungsmatrix",
                    "Technische Roadmap",
                    "Architektur mit Begründung"
                ]
            },


            // ==================================================
            // APP-LOGIK
            // ==================================================

            appLogik: {

                name: "App-Logik",

                rollen: [
                    "Softwareentwickler",
                    "Application Engineer",
                    "Softwarearchitekt",
                    "Business-Logic-Entwickler",
                    "Full-Stack-Entwickler"
                ],

                ziele: [
                    "Anwendungslogik entwickeln",
                    "Abläufe zwischen Funktionen planen",
                    "Statusänderungen definieren",
                    "Geschäftsregeln umsetzen",
                    "Bestehende App-Logik verbessern",
                    "Fehlerhafte Zustandslogik analysieren"
                ],

                anforderungen: [
                    "Eingaben und Ausgaben klar definieren",
                    "Zustände und Übergänge berücksichtigen",
                    "Sonderfälle berücksichtigen",
                    "Geschäftsregeln eindeutig formulieren",
                    "Unnötige Abhängigkeiten vermeiden",
                    "Fehlerzustände behandeln",
                    "Logik unabhängig von Darstellung halten, wenn sinnvoll"
                ],

                ausgabeformate: [
                    "Logikablauf",
                    "Pseudocode",
                    "Vollständige Implementierung",
                    "Zustandsmodell",
                    "Entscheidungstabelle",
                    "Funktionsübersicht"
                ]
            },


            // ==================================================
            // AUTOMATISIERUNG MIT CODE
            // ==================================================

            automatisierung: {

                name: "Automatisierung mit Code",

                rollen: [
                    "Automation Engineer",
                    "Python-Entwickler",
                    "Softwareentwickler",
                    "Workflow-Automatisierungs-Experte",
                    "Scripting Engineer"
                ],

                ziele: [
                    "Wiederkehrende Aufgabe automatisieren",
                    "Dateiverarbeitung automatisieren",
                    "Daten automatisch verarbeiten",
                    "Arbeitsablauf mit Code automatisieren",
                    "Bestehende Automatisierung verbessern",
                    "Manuelle Schritte reduzieren"
                ],

                anforderungen: [
                    "Ausgangsprozess zuerst klar beschreiben",
                    "Ein- und Ausgaben definieren",
                    "Fehlerfälle berücksichtigen",
                    "Dateien oder Daten nicht ungefragt überschreiben",
                    "Protokollierung sinnvoll vorsehen",
                    "Wiederholbare Ausführung ermöglichen",
                    "Abhängigkeiten und Voraussetzungen nennen"
                ],

                ausgabeformate: [
                    "Automatisierungsskript",
                    "Vollständige Codedatei",
                    "Workflow plus Code",
                    "Schritt-für-Schritt-Setup",
                    "Skript mit Logging",
                    "Automatisierungsplan"
                ]
            },


            // ==================================================
            // SKRIPTE & KLEINE TOOLS
            // ==================================================

            skripte: {

                name: "Skripte & kleine Tools",

                rollen: [
                    "Scripting-Entwickler",
                    "Tool-Entwickler",
                    "Python-Entwickler",
                    "Software Engineer",
                    "Automation Developer"
                ],

                ziele: [
                    "Kleines Hilfsprogramm erstellen",
                    "Skript für eine konkrete Aufgabe entwickeln",
                    "Dateien automatisch bearbeiten",
                    "Daten konvertieren",
                    "Kommandozeilen-Tool entwickeln",
                    "Bestehendes Skript erweitern"
                ],

                anforderungen: [
                    "Aufgabe möglichst einfach lösen",
                    "Benötigte Eingaben definieren",
                    "Ausgabe eindeutig festlegen",
                    "Fehlerfälle behandeln",
                    "Keine unnötigen Abhängigkeiten verwenden",
                    "Bestehende Dateien schützen",
                    "Benutzung kurz dokumentieren"
                ],

                ausgabeformate: [
                    "Vollständiges Skript",
                    "Kommandozeilen-Tool",
                    "Ein-Datei-Lösung",
                    "Skript plus Anleitung",
                    "Minimalversion",
                    "Erweiterbare Version"
                ]
            },


            // ==================================================
            // TESTS & QUALITÄTSSICHERUNG
            // ==================================================

            testing: {

                name: "Tests & Qualitätssicherung",

                rollen: [
                    "Software-Testingenieur",
                    "QA-Engineer",
                    "Testautomatisierungs-Entwickler",
                    "Senior Softwareentwickler",
                    "Quality Engineer"
                ],

                ziele: [
                    "Testfälle entwickeln",
                    "Automatisierte Tests schreiben",
                    "Edge Cases finden",
                    "Bestehende Tests verbessern",
                    "Fehler reproduzierbar machen",
                    "Teststrategie entwickeln"
                ],

                anforderungen: [
                    "Normale und kritische Sonderfälle berücksichtigen",
                    "Erwartetes Ergebnis pro Test definieren",
                    "Tests unabhängig voneinander halten",
                    "Fehlerfälle gezielt prüfen",
                    "Bestehende Funktionalität nicht als korrekt voraussetzen",
                    "Testdaten nachvollziehbar halten",
                    "Wichtige Risiken priorisieren"
                ],

                ausgabeformate: [
                    "Testfall-Tabelle",
                    "Unit Tests",
                    "Integrationstests",
                    "Teststrategie",
                    "QA-Checkliste",
                    "Automatisierte Testdatei"
                ]
            },


            // ==================================================
            // PERFORMANCE-OPTIMIERUNG
            // ==================================================

            performance: {

                name: "Performance-Optimierung",

                rollen: [
                    "Performance Engineer",
                    "Senior Softwareentwickler",
                    "Profiling-Experte",
                    "Backend-Performance-Experte",
                    "Frontend-Performance-Experte"
                ],

                ziele: [
                    "Langsamen Code analysieren",
                    "Performance verbessern",
                    "Flaschenhals identifizieren",
                    "Speicherverbrauch reduzieren",
                    "Ladezeit verbessern",
                    "Bestehende Implementierung optimieren"
                ],

                anforderungen: [
                    "Erst messen, dann optimieren",
                    "Vermutete und gemessene Ursachen unterscheiden",
                    "Keine Performancegewinne garantieren",
                    "Lesbarkeit nicht unnötig opfern",
                    "Maßnahmen nach Wirkung und Aufwand priorisieren",
                    "Nebenwirkungen der Optimierung nennen",
                    "Vorher-Nachher-Messung empfehlen"
                ],

                ausgabeformate: [
                    "Performance-Analyse",
                    "Optimierungsplan",
                    "Priorisierte Maßnahmenliste",
                    "Optimierter Code",
                    "Profiling-Plan",
                    "Vorher-Nachher-Vergleich"
                ]
            },


            // ==================================================
            // SICHERHEIT IM CODE
            // ==================================================

            sicherheit: {

                name: "Sicherheit im Code",

                rollen: [
                    "Application-Security-Engineer",
                    "Secure-Code-Reviewer",
                    "Softwareentwickler mit Security-Fokus",
                    "Backend-Security-Experte",
                    "Security-Architekt"
                ],

                ziele: [
                    "Code auf Sicherheitsprobleme prüfen",
                    "Sichere Implementierung entwickeln",
                    "Eingabevalidierung verbessern",
                    "Authentifizierung sicherer gestalten",
                    "Sensible Daten schützen",
                    "Bestehende Sicherheitslücken beheben"
                ],

                anforderungen: [
                    "Eingaben grundsätzlich validieren",
                    "Sensible Daten nicht unnötig speichern",
                    "Geheimnisse nicht im Quellcode hinterlegen",
                    "Berechtigungen nach Minimalprinzip vergeben",
                    "Unsichere Annahmen kennzeichnen",
                    "Aktuelle Sicherheitsmechanismen bevorzugen",
                    "Sicherheitsrelevante Änderungen begründen"
                ],

                ausgabeformate: [
                    "Security-Review",
                    "Sicherer Code",
                    "Schwachstellenliste",
                    "Priorisierte Sicherheitsmaßnahmen",
                    "Secure-Coding-Checkliste",
                    "Vorher-Nachher-Verbesserung"
                ]
            },


            // ==================================================
            // DOKUMENTATION FÜR ENTWICKLER
            // ==================================================

            dokumentation: {

                name: "Dokumentation für Entwickler",

                rollen: [
                    "Technical Writer",
                    "Softwareentwickler",
                    "API-Dokumentations-Experte",
                    "Developer-Experience-Berater",
                    "Softwarearchitekt"
                ],

                ziele: [
                    "Code dokumentieren",
                    "README erstellen",
                    "Entwicklerdokumentation schreiben",
                    "Setup-Anleitung erstellen",
                    "API dokumentieren",
                    "Bestehende Dokumentation verbessern"
                ],

                anforderungen: [
                    "Nur tatsächlich vorhandene Funktionen dokumentieren",
                    "Keine Befehle oder Schnittstellen erfinden",
                    "Voraussetzungen klar nennen",
                    "Installations- und Startschritte trennen",
                    "Beispiele verwenden",
                    "Fehlerquellen und Besonderheiten nennen",
                    "Dokumentation aktuell und nachvollziehbar strukturieren"
                ],

                ausgabeformate: [
                    "README.md",
                    "Entwicklerdokumentation",
                    "Setup-Anleitung",
                    "API-Dokumentation",
                    "Code-Kommentare",
                    "Technische Kurzdokumentation"
                ]
            },


            // ==================================================
            // ANFORDERUNGEN IN CODE ÜBERSETZEN
            // ==================================================

            anforderungen: {

                name: "Anforderungen in Code übersetzen",

                rollen: [
                    "Softwareanalyst",
                    "Senior Softwareentwickler",
                    "Requirements Engineer",
                    "Softwarearchitekt",
                    "Technical Lead"
                ],

                ziele: [
                    "Anforderung technisch strukturieren",
                    "Funktion aus Beschreibung ableiten",
                    "Anforderung in Arbeitspakete zerlegen",
                    "Akzeptanzkriterien entwickeln",
                    "Technische Lösung planen",
                    "Anforderung direkt implementieren"
                ],

                anforderungen: [
                    "Funktionale Anforderungen eindeutig formulieren",
                    "Fehlende Angaben benennen",
                    "Keine Anforderungen hinzuerfinden",
                    "Randfälle berücksichtigen",
                    "Akzeptanzkriterien definieren",
                    "Technische Abhängigkeiten nennen",
                    "Implementierung in sinnvolle Schritte zerlegen"
                ],

                ausgabeformate: [
                    "Technische Spezifikation",
                    "Umsetzungsplan",
                    "User Story mit Akzeptanzkriterien",
                    "Pseudocode",
                    "Komplette Implementierung",
                    "Aufgabenliste für Entwicklung"
                ]
            },


            // ==================================================
            // BESTEHENDEN CODE ERWEITERN
            // ==================================================

            erweitern: {

                name: "Bestehenden Code erweitern",

                rollen: [
                    "Senior Softwareentwickler",
                    "Software Maintainer",
                    "Full-Stack-Entwickler",
                    "Code-Integrations-Experte",
                    "Softwarearchitekt"
                ],

                ziele: [
                    "Neue Funktion hinzufügen",
                    "Bestehende Anwendung erweitern",
                    "Neue Option integrieren",
                    "Bestehende Logik ergänzen",
                    "Mehrere neue Features implementieren",
                    "Erweiterung ohne Regression umsetzen"
                ],

                anforderungen: [
                    "Bestehende Funktionen erhalten",
                    "Vorhandene Architektur berücksichtigen",
                    "Nur notwendige Dateien ändern",
                    "Keine funktionierenden Teile unnötig umschreiben",
                    "Neue Fehlerfälle berücksichtigen",
                    "Abwärtskompatibilität prüfen",
                    "Geänderte Dateien vollständig benennen"
                ],

                ausgabeformate: [
                    "Vollständige geänderte Datei",
                    "Mehrere vollständige Dateien",
                    "Erweiterungsplan",
                    "Neue Funktion plus Integration",
                    "Änderungsübersicht",
                    "Code plus Testschritte"
                ]
            },


            // ==================================================
            // CODE ZWISCHEN SPRACHEN ÜBERTRAGEN
            // ==================================================

            konvertieren: {

                name: "Code zwischen Sprachen übertragen",

                rollen: [
                    "Softwareentwickler",
                    "Code-Migrations-Experte",
                    "Polyglot Programmer",
                    "Softwarearchitekt",
                    "Portierungs-Experte"
                ],

                ziele: [
                    "Code in andere Programmiersprache übertragen",
                    "Algorithmus portieren",
                    "Bibliothek ersetzen",
                    "Bestehende Logik in neues Framework übertragen",
                    "Programmierparadigma an Zielsprache anpassen",
                    "Migration planen"
                ],

                anforderungen: [
                    "Funktionalität des Originals erhalten",
                    "Sprachspezifische Besonderheiten berücksichtigen",
                    "Keine Funktionen des Originals weglassen",
                    "Nicht verfügbare Bibliotheken kenntlich machen",
                    "Idiome der Zielsprache sinnvoll verwenden",
                    "Verhaltensunterschiede transparent nennen",
                    "Tests zur Gleichheit des Verhaltens vorschlagen"
                ],

                ausgabeformate: [
                    "Konvertierte Codedatei",
                    "Original-und-Zielcode",
                    "Migrationsplan",
                    "Code plus Unterschiede",
                    "Mehrere konvertierte Dateien",
                    "Portierungs-Checkliste"
                ]
            },


            // ==================================================
            // KI-GESTÜTZTE SOFTWAREENTWICKLUNG
            // ==================================================

            kiCoding: {

                name: "KI-gestützte Softwareentwicklung",

                rollen: [
                    "AI Coding Coach",
                    "Senior Softwareentwickler",
                    "Prompt Engineer für Coding",
                    "AI-Assisted-Development-Berater",
                    "Technical Lead"
                ],

                ziele: [
                    "Software mit KI entwickeln",
                    "Guten Coding-Prompt erstellen",
                    "KI für Debugging einsetzen",
                    "Große Coding-Aufgabe sinnvoll zerlegen",
                    "KI-generierten Code prüfen",
                    "Effizienten KI-Coding-Workflow entwickeln"
                ],

                anforderungen: [
                    "Anforderungen eindeutig formulieren",
                    "Bestehenden Code als Kontext berücksichtigen",
                    "Keine unbekannte Projektstruktur erfinden",
                    "KI-Code immer auf Fehler und Nebenwirkungen prüfen",
                    "Änderungen in testbare Schritte zerlegen",
                    "Für größere Änderungen vollständige Dateien bevorzugen",
                    "Test- und Rückfallstrategie berücksichtigen"
                ],

                ausgabeformate: [
                    "Coding-Prompt",
                    "AI-Coding-Workflow",
                    "Implementierungsplan",
                    "Code-Review-Checkliste",
                    "Debugging-Prompt",
                    "Feature-Prompt mit Testkriterien"
                ]
            },


            // ==================================================
            // PROJEKTSTRUKTUR & DATEIAUFBAU
            // ==================================================

            projektstruktur: {

                name: "Projektstruktur & Dateiaufbau",

                rollen: [
                    "Softwarearchitekt",
                    "Senior Softwareentwickler",
                    "Technical Lead",
                    "Projektstruktur-Experte",
                    "Full-Stack-Architekt"
                ],

                ziele: [
                    "Projektstruktur entwickeln",
                    "Dateien sinnvoll aufteilen",
                    "Bestehende Struktur verbessern",
                    "Ordnerhierarchie planen",
                    "Zuständigkeiten von Dateien definieren",
                    "Projekt für spätere Erweiterungen vorbereiten"
                ],

                anforderungen: [
                    "Projektgröße berücksichtigen",
                    "Verwendete Technologien berücksichtigen",
                    "Klare Verantwortlichkeiten pro Datei definieren",
                    "Unnötig tiefe Ordnerstrukturen vermeiden",
                    "Zusammengehörige Funktionen sinnvoll gruppieren",
                    "Erweiterbarkeit berücksichtigen",
                    "Einfachste sinnvolle Struktur bevorzugen"
                ],

                ausgabeformate: [
                    "Ordnerbaum",
                    "Projektstruktur mit Erklärung",
                    "Dateiliste mit Zuständigkeiten",
                    "Refactoring-Vorschlag",
                    "Architekturübersicht",
                    "Startstruktur für neues Projekt"
                ]
            }
        }
    },


    // ==================================================
    // 7. WEBSEITEN & APPS
    // ==================================================

    webApps: {

        name: "Webseiten & Apps",
        icon: "🌐",

        unterkategorien: {


            // ==================================================
            // WEBSITE PLANEN
            // ==================================================

            websitePlanen: {

                name: "Website planen",

                rollen: [
                    "Webprojekt-Berater",
                    "UX-Stratege",
                    "Webdesigner",
                    "Informationsarchitekt",
                    "Digital Product Consultant"
                ],

                ziele: [
                    "Website-Konzept entwickeln",
                    "Seitenstruktur planen",
                    "Ziele der Website definieren",
                    "Inhalte und Funktionen strukturieren",
                    "Technische Anforderungen bestimmen",
                    "Bestehende Website neu planen"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Hauptziel der Website klar definieren",
                    "Notwendige und optionale Funktionen unterscheiden",
                    "Seitenstruktur übersichtlich halten",
                    "Mobile Nutzung berücksichtigen",
                    "Technischen Aufwand realistisch einschätzen",
                    "Spätere Erweiterbarkeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Website-Konzept",
                    "Sitemap",
                    "Seiten- und Funktionsübersicht",
                    "Projektplan",
                    "Anforderungsliste",
                    "Website-Roadmap"
                ]
            },


            // ==================================================
            // WEBSITE ERSTELLEN
            // ==================================================

            websiteErstellen: {

                name: "Website erstellen",

                rollen: [
                    "Full-Stack-Webentwickler",
                    "Frontend-Entwickler",
                    "Webdesigner",
                    "UI-Entwickler",
                    "Webprojekt-Entwickler"
                ],

                ziele: [
                    "Komplette Website erstellen",
                    "Website aus Anforderungen umsetzen",
                    "Bestehendes Design technisch umsetzen",
                    "Mehrseitige Website entwickeln",
                    "Responsive Website erstellen",
                    "Website-Prototyp entwickeln"
                ],

                anforderungen: [
                    "Vollständige benötigte Dateien liefern",
                    "Responsive Darstellung berücksichtigen",
                    "Semantisches HTML verwenden",
                    "Code verständlich strukturieren",
                    "Bestehende Anforderungen vollständig berücksichtigen",
                    "Barrierearme Grundstruktur berücksichtigen",
                    "Keine unnötigen Abhängigkeiten verwenden"
                ],

                ausgabeformate: [
                    "Komplette Website-Dateien",
                    "index.html plus style.css plus script.js",
                    "Mehrseitige Website-Struktur",
                    "Funktionsfähiger Prototyp",
                    "Projektstruktur mit Dateien",
                    "Website plus Testschritte"
                ]
            },


            // ==================================================
            // WEB-APP ENTWICKELN
            // ==================================================

            webApp: {

                name: "Web-App entwickeln",

                rollen: [
                    "Full-Stack-Webentwickler",
                    "Web-App-Architekt",
                    "Frontend-Entwickler",
                    "Backend-Entwickler",
                    "Product Engineer"
                ],

                ziele: [
                    "Web-App entwickeln",
                    "Web-App-Prototyp erstellen",
                    "Bestehende Web-App erweitern",
                    "App-Logik und Benutzeroberfläche entwickeln",
                    "Daten in einer Web-App verarbeiten",
                    "Web-App für spätere Erweiterungen strukturieren"
                ],

                anforderungen: [
                    "Funktionen klar voneinander trennen",
                    "Bestehende Projektstruktur berücksichtigen",
                    "Responsive Nutzung berücksichtigen",
                    "Fehlerfälle behandeln",
                    "Datenhaltung eindeutig planen",
                    "Sicherheit berücksichtigen",
                    "Nur notwendige Technologien einsetzen"
                ],

                ausgabeformate: [
                    "Komplette Web-App",
                    "Mehrere vollständige Dateien",
                    "Projektstruktur",
                    "MVP",
                    "Implementierungsplan",
                    "Web-App plus Testanleitung"
                ]
            },


            // ==================================================
            // MOBILE APP
            // ==================================================

            mobileApp: {

                name: "Mobile App entwickeln",

                rollen: [
                    "Mobile-App-Entwickler",
                    "App-Architekt",
                    "Mobile-UX-Designer",
                    "Cross-Platform-Developer",
                    "Product Engineer"
                ],

                ziele: [
                    "Mobile-App-Konzept entwickeln",
                    "Mobile App technisch planen",
                    "App-Prototyp erstellen",
                    "Android- oder iOS-App entwickeln",
                    "Cross-Platform-App planen",
                    "Bestehende App erweitern"
                ],

                anforderungen: [
                    "Zielplattform klar berücksichtigen",
                    "Mobile Bedienung priorisieren",
                    "Navigation einfach halten",
                    "Offline- und Online-Verhalten berücksichtigen",
                    "Berechtigungen nur bei Bedarf verwenden",
                    "Speicher- und Netzwerkzugriffe berücksichtigen",
                    "Veröffentlichung im App-Store mitdenken"
                ],

                ausgabeformate: [
                    "App-Konzept",
                    "Screen-Übersicht",
                    "Projektstruktur",
                    "MVP-Plan",
                    "Technische Architektur",
                    "Implementierungs-Roadmap"
                ]
            },


            // ==================================================
            // PWA
            // ==================================================

            pwa: {

                name: "PWA / installierbare Web-App",

                rollen: [
                    "PWA-Entwickler",
                    "Web-App-Entwickler",
                    "Frontend-Engineer",
                    "Progressive-Web-App-Architekt",
                    "Mobile-Web-Entwickler"
                ],

                ziele: [
                    "Website als PWA installierbar machen",
                    "PWA entwickeln",
                    "Offline-Funktionen integrieren",
                    "Manifest erstellen",
                    "Service Worker integrieren",
                    "Bestehende Web-App zur PWA erweitern"
                ],

                anforderungen: [
                    "Manifest korrekt konfigurieren",
                    "Service Worker sinnvoll einsetzen",
                    "HTTPS-Anforderung berücksichtigen",
                    "Offline-Verhalten definieren",
                    "Installierbarkeit auf Mobilgerät und Desktop berücksichtigen",
                    "Caching-Strategie erklären",
                    "Bestehende Web-App möglichst wenig verändern"
                ],

                ausgabeformate: [
                    "PWA-Dateien",
                    "manifest.json",
                    "Service-Worker-Datei",
                    "PWA-Integrationsplan",
                    "Komplette Erweiterung",
                    "Installations- und Testanleitung"
                ]
            },


            // ==================================================
            // LANDINGPAGES
            // ==================================================

            landingpage: {

                name: "Landingpages",

                rollen: [
                    "Landingpage-Designer",
                    "Frontend-Entwickler",
                    "UX-Designer",
                    "Conversion-Designer",
                    "Web-Copy-Experte"
                ],

                ziele: [
                    "Landingpage erstellen",
                    "Landingpage strukturieren",
                    "Bestehende Landingpage verbessern",
                    "Conversion-orientiertes Layout entwickeln",
                    "Produkt oder Angebot präsentieren",
                    "Call-to-Action hervorheben"
                ],

                anforderungen: [
                    "Eine zentrale Zielhandlung definieren",
                    "Wichtigste Botschaft früh sichtbar machen",
                    "Mobile Nutzung berücksichtigen",
                    "Unnötige Ablenkungen vermeiden",
                    "Nur belegbare Inhalte verwenden",
                    "Klare visuelle Hierarchie schaffen",
                    "Ladezeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Komplette Landingpage",
                    "HTML-CSS-JavaScript-Dateien",
                    "Wireframe-Struktur",
                    "Landingpage-Outline",
                    "Responsive Prototyp",
                    "Conversion-Checkliste"
                ]
            },


            // ==================================================
            // UNTERNEHMENSWEBSITE
            // ==================================================

            unternehmenswebsite: {

                name: "Unternehmenswebseiten",

                rollen: [
                    "Corporate-Webdesigner",
                    "Webentwickler",
                    "UX-Stratege",
                    "Unternehmenskommunikations-Berater",
                    "Informationsarchitekt"
                ],

                ziele: [
                    "Unternehmenswebsite planen",
                    "Unternehmen professionell präsentieren",
                    "Leistungen übersichtlich darstellen",
                    "Kontaktmöglichkeiten verbessern",
                    "Bestehende Unternehmenswebsite modernisieren",
                    "Vertrauenswürdige Webpräsenz entwickeln"
                ],

                anforderungen: [
                    "Nur bekannte Unternehmensinformationen verwenden",
                    "Zielgruppe berücksichtigen",
                    "Leistungen verständlich strukturieren",
                    "Kontaktmöglichkeiten leicht auffindbar machen",
                    "Mobile Darstellung berücksichtigen",
                    "Vertrauenswürdige Gestaltung bevorzugen",
                    "Wartbarkeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Website-Konzept",
                    "Sitemap",
                    "Komplette Unternehmenswebsite",
                    "Seitenstruktur",
                    "Content-Struktur",
                    "Modernisierungskonzept"
                ]
            },


            // ==================================================
            // PORTFOLIO
            // ==================================================

            portfolio: {

                name: "Portfolio-Webseiten",

                rollen: [
                    "Portfolio-Webdesigner",
                    "UX-Designer",
                    "Frontend-Entwickler",
                    "Personal-Branding-Designer",
                    "Creative Web Developer"
                ],

                ziele: [
                    "Portfolio-Website entwickeln",
                    "Projekte überzeugend präsentieren",
                    "Persönliches Profil darstellen",
                    "Bestehendes Portfolio verbessern",
                    "Visuelles Portfolio strukturieren",
                    "Kontaktaufnahme erleichtern"
                ],

                anforderungen: [
                    "Wichtigste Arbeiten priorisieren",
                    "Visuelle Inhalte hervorheben",
                    "Persönliche Informationen nur nach Vorgabe verwenden",
                    "Navigation einfach halten",
                    "Mobile Darstellung berücksichtigen",
                    "Ladezeiten großer Medien berücksichtigen",
                    "Eigene Rolle an Projekten klar darstellen"
                ],

                ausgabeformate: [
                    "Portfolio-Konzept",
                    "Komplette Portfolio-Website",
                    "Projektseiten-Struktur",
                    "Sitemap",
                    "Responsive Layout",
                    "Portfolio-Wireframe"
                ]
            },


            // ==================================================
            // BLOG
            // ==================================================

            blog: {

                name: "Blogs",

                rollen: [
                    "Blog-Webentwickler",
                    "Content-Website-Architekt",
                    "Frontend-Entwickler",
                    "UX-Designer",
                    "CMS-Berater"
                ],

                ziele: [
                    "Blog technisch planen",
                    "Blog-Website erstellen",
                    "Artikelstruktur entwickeln",
                    "Kategorien und Navigation planen",
                    "Bestehenden Blog verbessern",
                    "Blog für regelmäßige Inhalte vorbereiten"
                ],

                anforderungen: [
                    "Artikel gut lesbar darstellen",
                    "Kategorien und Tags sinnvoll strukturieren",
                    "Mobile Nutzung berücksichtigen",
                    "Suchfunktion berücksichtigen",
                    "SEO-Grundstruktur berücksichtigen",
                    "Wartbare Inhaltspflege ermöglichen",
                    "Ladezeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Blog-Struktur",
                    "Blog-Website",
                    "Artikeltemplate",
                    "Kategorienkonzept",
                    "CMS-Konzept",
                    "Projektstruktur"
                ]
            },


            // ==================================================
            // ONLINE-SHOP
            // ==================================================

            shop: {

                name: "Online-Shops",

                rollen: [
                    "E-Commerce-Entwickler",
                    "Shop-UX-Designer",
                    "Full-Stack-Entwickler",
                    "E-Commerce-Architekt",
                    "Conversion-Designer"
                ],

                ziele: [
                    "Online-Shop planen",
                    "Produktkatalog strukturieren",
                    "Warenkorb entwickeln",
                    "Checkout-Prozess planen",
                    "Bestehenden Shop verbessern",
                    "Shop-MVP entwickeln"
                ],

                anforderungen: [
                    "Produkte klar strukturieren",
                    "Preis- und Produktdaten korrekt behandeln",
                    "Warenkorbzustand zuverlässig verwalten",
                    "Checkout möglichst einfach halten",
                    "Sicherheit bei Zahlungs- und Kundendaten berücksichtigen",
                    "Mobile Nutzung priorisieren",
                    "Rechtliche Anforderungen als gesonderten Prüfpunkt kennzeichnen"
                ],

                ausgabeformate: [
                    "Shop-Konzept",
                    "Produkt- und Kategorienstruktur",
                    "Checkout-Flow",
                    "Shop-MVP",
                    "Technische Architektur",
                    "Implementierungsplan"
                ]
            },


            // ==================================================
            // UI
            // ==================================================

            ui: {

                name: "Benutzeroberfläche / UI",

                rollen: [
                    "UI-Designer",
                    "Frontend-Designer",
                    "Design-System-Experte",
                    "Product Designer",
                    "UI-Entwickler"
                ],

                ziele: [
                    "Benutzeroberfläche gestalten",
                    "Bestehendes UI verbessern",
                    "Designsystem entwickeln",
                    "Komponenten gestalten",
                    "Visuelle Hierarchie verbessern",
                    "Oberfläche konsistenter machen"
                ],

                anforderungen: [
                    "Klare visuelle Hierarchie verwenden",
                    "Konsistente Komponenten verwenden",
                    "Lesbarkeit sicherstellen",
                    "Zustände von Bedienelementen berücksichtigen",
                    "Mobile und Desktop-Nutzung berücksichtigen",
                    "Barrierearme Gestaltung berücksichtigen",
                    "Unnötige visuelle Komplexität vermeiden"
                ],

                ausgabeformate: [
                    "UI-Konzept",
                    "Komponentenliste",
                    "Designsystem",
                    "Layoutbeschreibung",
                    "UI-Verbesserungsplan",
                    "Frontend-Komponenten"
                ]
            },


            // ==================================================
            // UX
            // ==================================================

            ux: {

                name: "Nutzererlebnis / UX",

                rollen: [
                    "UX-Designer",
                    "UX-Researcher",
                    "Product Designer",
                    "Usability-Berater",
                    "Interaction Designer"
                ],

                ziele: [
                    "Nutzererlebnis verbessern",
                    "Nutzerfluss analysieren",
                    "Bedienprobleme erkennen",
                    "User Journey entwickeln",
                    "Interaktionsablauf vereinfachen",
                    "Bestehende Anwendung auf Usability prüfen"
                ],

                anforderungen: [
                    "Zielgruppe berücksichtigen",
                    "Nutzerziel pro Ablauf definieren",
                    "Unnötige Schritte reduzieren",
                    "Beobachtung und Vermutung unterscheiden",
                    "Fehler- und Leerzustände berücksichtigen",
                    "Mobile Nutzung berücksichtigen",
                    "Verbesserungen nach Wirkung priorisieren"
                ],

                ausgabeformate: [
                    "UX-Analyse",
                    "User Journey",
                    "User Flow",
                    "Usability-Checkliste",
                    "Priorisierte Verbesserungen",
                    "UX-Konzept"
                ]
            },


            // ==================================================
            // NAVIGATION
            // ==================================================

            navigation: {

                name: "Navigation & Seitenstruktur",

                rollen: [
                    "Informationsarchitekt",
                    "UX-Designer",
                    "Webdesigner",
                    "Navigationsexperte",
                    "Product Designer"
                ],

                ziele: [
                    "Navigation entwickeln",
                    "Seitenstruktur vereinfachen",
                    "Menü verbessern",
                    "Informationsarchitektur entwickeln",
                    "Mobile Navigation planen",
                    "Bestehende Seitenhierarchie überarbeiten"
                ],

                anforderungen: [
                    "Wichtigste Inhalte leicht erreichbar machen",
                    "Navigationstiefe möglichst gering halten",
                    "Bezeichnungen eindeutig formulieren",
                    "Mobile Nutzung berücksichtigen",
                    "Verwandte Inhalte sinnvoll gruppieren",
                    "Aktuellen Standort im System erkennbar machen",
                    "Unnötige Menüeinträge vermeiden"
                ],

                ausgabeformate: [
                    "Sitemap",
                    "Navigationsstruktur",
                    "Menübaum",
                    "User Flow",
                    "Vorher-Nachher-Struktur",
                    "Mobile-und-Desktop-Navigation"
                ]
            },


            // ==================================================
            // RESPONSIVE DESIGN
            // ==================================================

            responsive: {

                name: "Responsive Design",

                rollen: [
                    "Responsive-Webdesigner",
                    "Frontend-Entwickler",
                    "CSS-Experte",
                    "Mobile-First-Designer",
                    "UI-Entwickler"
                ],

                ziele: [
                    "Website responsive machen",
                    "Mobile Darstellung verbessern",
                    "Layout für verschiedene Bildschirmgrößen entwickeln",
                    "Responsive Fehler beheben",
                    "Desktop-Layout für Mobilgeräte optimieren",
                    "Breakpoints sinnvoll planen"
                ],

                anforderungen: [
                    "Mobile-First-Ansatz berücksichtigen",
                    "Flexible Layouts bevorzugen",
                    "Inhalte nicht unnötig ausblenden",
                    "Touch-Bedienung berücksichtigen",
                    "Text lesbar halten",
                    "Horizontales Scrollen vermeiden",
                    "Mehrere typische Bildschirmgrößen testen"
                ],

                ausgabeformate: [
                    "Responsive CSS",
                    "Vollständige style.css",
                    "Breakpoint-Konzept",
                    "Responsive-Checkliste",
                    "Vorher-Nachher-Code",
                    "Mobile-und-Desktop-Layout"
                ]
            },


            // ==================================================
            // FORMULARE
            // ==================================================

            formulare: {

                name: "Formulare",

                rollen: [
                    "Frontend-Entwickler",
                    "UX-Formular-Designer",
                    "Webentwickler",
                    "Accessibility-Designer",
                    "Form-Validation-Experte"
                ],

                ziele: [
                    "Webformular erstellen",
                    "Formular vereinfachen",
                    "Validierung integrieren",
                    "Fehlermeldungen verbessern",
                    "Bestehendes Formular optimieren",
                    "Mehrstufiges Formular planen"
                ],

                anforderungen: [
                    "Nur notwendige Felder verwenden",
                    "Labels eindeutig zuordnen",
                    "Eingaben validieren",
                    "Fehlermeldungen verständlich formulieren",
                    "Tastaturbedienung berücksichtigen",
                    "Sensible Daten nur bei Bedarf abfragen",
                    "Erfolgszustand klar anzeigen"
                ],

                ausgabeformate: [
                    "HTML-Formular",
                    "Formular mit JavaScript-Validierung",
                    "Formular-Konzept",
                    "Mehrstufiger Formular-Flow",
                    "UX-Optimierung",
                    "Komplette Formular-Komponente"
                ]
            },


            // ==================================================
            // LOGIN & BENUTZERKONTEN
            // ==================================================

            login: {

                name: "Login & Benutzerkonten",

                rollen: [
                    "Full-Stack-Entwickler",
                    "Authentication Engineer",
                    "Backend-Entwickler",
                    "Application-Security-Engineer",
                    "Web-App-Architekt"
                ],

                ziele: [
                    "Login-System planen",
                    "Benutzerregistrierung entwickeln",
                    "Sitzungsverwaltung integrieren",
                    "Passwort-Reset entwickeln",
                    "Benutzerkonten verwalten",
                    "Bestehende Authentifizierung verbessern"
                ],

                anforderungen: [
                    "Passwörter niemals im Klartext speichern",
                    "Sichere Authentifizierung verwenden",
                    "Eingaben validieren",
                    "Sitzungen sicher verwalten",
                    "Fehlermeldungen nicht unnötig informationsreich gestalten",
                    "Berechtigungen berücksichtigen",
                    "Sensible Daten schützen"
                ],

                ausgabeformate: [
                    "Authentifizierungskonzept",
                    "Login-Flow",
                    "Backend-und-Frontend-Implementierung",
                    "Benutzerkonten-Architektur",
                    "Security-Checkliste",
                    "Implementierungsplan"
                ]
            },


            // ==================================================
            // DATEN SPEICHERN
            // ==================================================

            datenSpeichern: {

                name: "Daten speichern",

                rollen: [
                    "Web-App-Entwickler",
                    "Frontend-Entwickler",
                    "Backend-Entwickler",
                    "Datenarchitekt",
                    "Application Engineer"
                ],

                ziele: [
                    "App-Daten speichern",
                    "Lokale Speicherung integrieren",
                    "Speicherstrategie entwickeln",
                    "Bestehende Speicherung verbessern",
                    "Daten zwischen Sitzungen erhalten",
                    "Lokale und serverseitige Speicherung vergleichen"
                ],

                anforderungen: [
                    "Art und Sensibilität der Daten berücksichtigen",
                    "Geeigneten Speicherort wählen",
                    "Datenformat eindeutig definieren",
                    "Fehler beim Laden und Speichern behandeln",
                    "Bestehende Daten nicht ungefragt überschreiben",
                    "Versionsänderungen der Datenstruktur berücksichtigen",
                    "Datenschutz bei sensiblen Daten berücksichtigen"
                ],

                ausgabeformate: [
                    "Speicherkonzept",
                    "localStorage-Implementierung",
                    "Datenmodell",
                    "Backend-Speicherung",
                    "Code plus Migrationsstrategie",
                    "Vergleich der Speicheroptionen"
                ]
            },


            // ==================================================
            // DATENBANKEN ANBINDEN
            // ==================================================

            datenbanken: {

                name: "Datenbanken anbinden",

                rollen: [
                    "Full-Stack-Entwickler",
                    "Backend-Entwickler",
                    "Database Engineer",
                    "Web-App-Architekt",
                    "Datenbankentwickler"
                ],

                ziele: [
                    "Datenbank an Web-App anbinden",
                    "CRUD-Funktionen entwickeln",
                    "Datenmodell integrieren",
                    "Bestehende Datenbankverbindung verbessern",
                    "Frontend und Datenbank sicher verbinden",
                    "Datenbankzugriffe strukturieren"
                ],

                anforderungen: [
                    "Datenbankzugriff nicht unsicher direkt aus dem Browser durchführen",
                    "Eingaben validieren",
                    "Parametrisierte Abfragen verwenden",
                    "Verbindungsdaten schützen",
                    "Fehlerfälle behandeln",
                    "Datenmodell berücksichtigen",
                    "Berechtigungen nach Minimalprinzip vergeben"
                ],

                ausgabeformate: [
                    "Datenbankintegration",
                    "Backend-Endpunkte",
                    "CRUD-Beispiel",
                    "Projektstruktur",
                    "Datenbank-Service",
                    "Integrationsplan"
                ]
            },


            // ==================================================
            // APIs INTEGRIEREN
            // ==================================================

            api: {

                name: "APIs integrieren",

                rollen: [
                    "API-Integration-Engineer",
                    "Full-Stack-Entwickler",
                    "Frontend-Entwickler",
                    "Backend-Entwickler",
                    "Web-App-Entwickler"
                ],

                ziele: [
                    "Externe API integrieren",
                    "API-Daten in Website anzeigen",
                    "API-Anfrage aus Web-App durchführen",
                    "API-Fehler behandeln",
                    "Bestehende Integration verbessern",
                    "Backend-Proxy für API entwickeln"
                ],

                anforderungen: [
                    "API-Dokumentation berücksichtigen",
                    "Keine Endpunkte oder Parameter erfinden",
                    "API-Schlüssel schützen",
                    "Fehlerantworten behandeln",
                    "Ladezustände berücksichtigen",
                    "Rate Limits berücksichtigen",
                    "Response-Daten validieren"
                ],

                ausgabeformate: [
                    "API-Integration",
                    "Frontend-und-Backend-Code",
                    "API-Service",
                    "Request-Response-Beispiel",
                    "Integrationsplan",
                    "Fehlerbehandlungs-Konzept"
                ]
            },


            // ==================================================
            // KI-FUNKTIONEN
            // ==================================================

            kiFunktionen: {

                name: "KI-Funktionen integrieren",

                rollen: [
                    "AI Application Developer",
                    "Full-Stack-Entwickler",
                    "KI-Integration-Engineer",
                    "Prompt Engineer",
                    "AI Product Engineer"
                ],

                ziele: [
                    "KI-Funktion in Web-App integrieren",
                    "KI-API anbinden",
                    "Prompt-Funktion entwickeln",
                    "KI-generierte Ergebnisse anzeigen",
                    "Bestehende App um KI erweitern",
                    "KI-Workflow in Anwendung entwickeln"
                ],

                anforderungen: [
                    "API-Schlüssel niemals im Frontend offenlegen",
                    "Eingaben klar strukturieren",
                    "KI-Ausgaben nicht ungeprüft als Fakten behandeln",
                    "Fehler- und Ladezustände berücksichtigen",
                    "Kosten und Tokenverbrauch berücksichtigen",
                    "Nutzerdaten nur im notwendigen Umfang übertragen",
                    "Modell- und API-Abhängigkeiten klar benennen"
                ],

                ausgabeformate: [
                    "KI-Integrationskonzept",
                    "Frontend-und-Backend-Code",
                    "API-Workflow",
                    "Prompt-und-Code-Lösung",
                    "MVP",
                    "Implementierungsplan"
                ]
            },


            // ==================================================
            // ZAHLUNGSFUNKTIONEN
            // ==================================================

            zahlung: {

                name: "Zahlungsfunktionen",

                rollen: [
                    "Payment-Integration-Entwickler",
                    "Full-Stack-Entwickler",
                    "E-Commerce-Engineer",
                    "Backend-Entwickler",
                    "Application-Security-Engineer"
                ],

                ziele: [
                    "Zahlungsanbieter integrieren",
                    "Checkout entwickeln",
                    "Zahlungsstatus verarbeiten",
                    "Abonnements technisch planen",
                    "Bestehenden Zahlungsflow verbessern",
                    "Webhook-Verarbeitung planen"
                ],

                anforderungen: [
                    "Offizielle Zahlungsanbieter-Schnittstellen verwenden",
                    "Zahlungsdaten nicht unnötig selbst speichern",
                    "Serverseitige Validierung verwenden",
                    "Zahlungsstatus nicht nur dem Frontend vertrauen",
                    "Fehler- und Abbruchfälle behandeln",
                    "Testumgebung des Anbieters verwenden",
                    "Sicherheits- und Compliance-Anforderungen berücksichtigen"
                ],

                ausgabeformate: [
                    "Payment-Integrationsplan",
                    "Checkout-Flow",
                    "Backend-Implementierung",
                    "Webhook-Konzept",
                    "Testplan",
                    "Technische Architektur"
                ]
            },


            // ==================================================
            // SUCHFUNKTIONEN
            // ==================================================

            suche: {

                name: "Suchfunktionen",

                rollen: [
                    "Search-UX-Designer",
                    "Frontend-Entwickler",
                    "Full-Stack-Entwickler",
                    "Search Engineer",
                    "Web-App-Entwickler"
                ],

                ziele: [
                    "Suchfunktion entwickeln",
                    "Live-Suche integrieren",
                    "Suchergebnisse verbessern",
                    "Bestehende Suche optimieren",
                    "Suchindex planen",
                    "Suche für große Datenmengen entwickeln"
                ],

                anforderungen: [
                    "Suchbereich klar definieren",
                    "Groß- und Kleinschreibung sinnvoll behandeln",
                    "Leere Suchanfragen berücksichtigen",
                    "Keine Treffer verständlich darstellen",
                    "Performance bei großen Datenmengen berücksichtigen",
                    "Mobile Bedienung berücksichtigen",
                    "Suchergebnisse nachvollziehbar sortieren"
                ],

                ausgabeformate: [
                    "Suchfunktion",
                    "JavaScript-Suche",
                    "Backend-Suche",
                    "Such-UX-Konzept",
                    "Suchalgorithmus",
                    "Komplette Suchkomponente"
                ]
            },


            // ==================================================
            // FILTER & SORTIERUNG
            // ==================================================

            filter: {

                name: "Filter & Sortierung",

                rollen: [
                    "Frontend-Entwickler",
                    "UX-Designer",
                    "Web-App-Entwickler",
                    "Data-UI-Designer",
                    "Product Engineer"
                ],

                ziele: [
                    "Filterfunktion entwickeln",
                    "Sortierung integrieren",
                    "Mehrere Filter kombinieren",
                    "Bestehende Filterlogik verbessern",
                    "Filterzustand speichern",
                    "Mobile Filteroberfläche entwickeln"
                ],

                anforderungen: [
                    "Filterkriterien eindeutig definieren",
                    "Mehrere aktive Filter korrekt kombinieren",
                    "Zurücksetzen ermöglichen",
                    "Aktive Filter sichtbar machen",
                    "Leere Ergebnislisten behandeln",
                    "Sortierung nachvollziehbar halten",
                    "Bestehende Daten nicht verändern"
                ],

                ausgabeformate: [
                    "Filterlogik",
                    "JavaScript-Implementierung",
                    "Filter-und-Sortier-Komponente",
                    "UX-Konzept",
                    "Komplette Codedatei",
                    "Testfälle"
                ]
            },


            // ==================================================
            // DASHBOARDS
            // ==================================================

            dashboards: {

                name: "Dashboards",

                rollen: [
                    "Dashboard-Designer",
                    "Frontend-Entwickler",
                    "Data-Visualization-Designer",
                    "UX-Designer",
                    "Full-Stack-Entwickler"
                ],

                ziele: [
                    "Dashboard entwickeln",
                    "Kennzahlen übersichtlich darstellen",
                    "Dashboard-Layout planen",
                    "Interaktive Filter integrieren",
                    "Bestehendes Dashboard verbessern",
                    "Responsive Dashboard erstellen"
                ],

                anforderungen: [
                    "Wichtigste Kennzahlen priorisieren",
                    "Informationsüberladung vermeiden",
                    "Kennzahlen korrekt beschriften",
                    "Filterzustände nachvollziehbar machen",
                    "Mobile Darstellung berücksichtigen",
                    "Lade- und Fehlerzustände anzeigen",
                    "Diagramme nur bei echtem Informationsgewinn einsetzen"
                ],

                ausgabeformate: [
                    "Dashboard-Konzept",
                    "Responsive Dashboard",
                    "Komponentenstruktur",
                    "Kennzahlenlayout",
                    "Frontend-Code",
                    "Wireframe"
                ]
            },


            // ==================================================
            // ADMIN-BEREICHE
            // ==================================================

            admin: {

                name: "Admin-Bereiche",

                rollen: [
                    "Full-Stack-Entwickler",
                    "Admin-Interface-Designer",
                    "Backend-Entwickler",
                    "Application-Security-Engineer",
                    "Web-App-Architekt"
                ],

                ziele: [
                    "Admin-Bereich entwickeln",
                    "Benutzer verwalten",
                    "Inhalte administrieren",
                    "Rollen und Rechte integrieren",
                    "Bestehenden Admin-Bereich verbessern",
                    "Interne Verwaltungsoberfläche entwickeln"
                ],

                anforderungen: [
                    "Zugriff auf berechtigte Nutzer beschränken",
                    "Rollen und Rechte klar definieren",
                    "Kritische Aktionen absichern",
                    "Lösch- und Änderungsaktionen eindeutig kennzeichnen",
                    "Eingaben validieren",
                    "Änderungen nachvollziehbar machen",
                    "Sensible Daten schützen"
                ],

                ausgabeformate: [
                    "Admin-Konzept",
                    "Rollen-und-Rechte-Modell",
                    "Admin-Dashboard",
                    "CRUD-Oberfläche",
                    "Backend-und-Frontend-Struktur",
                    "Security-Checkliste"
                ]
            },


            // ==================================================
            // PERFORMANCE
            // ==================================================

            performance: {

                name: "Performance",

                rollen: [
                    "Web-Performance-Engineer",
                    "Frontend-Performance-Experte",
                    "Full-Stack-Entwickler",
                    "Performance-Analyst",
                    "Web-Optimierungs-Experte"
                ],

                ziele: [
                    "Website schneller machen",
                    "Ladezeiten analysieren",
                    "Frontend-Performance verbessern",
                    "Ressourcen optimieren",
                    "Performance-Flaschenhälse finden",
                    "Bestehende Web-App optimieren"
                ],

                anforderungen: [
                    "Erst messen, dann optimieren",
                    "Vermutete und gemessene Ursachen unterscheiden",
                    "Bilder und Medien berücksichtigen",
                    "JavaScript- und CSS-Kosten berücksichtigen",
                    "Netzwerkzugriffe analysieren",
                    "Keine Performancegewinne garantieren",
                    "Vorher-Nachher-Messung vorsehen"
                ],

                ausgabeformate: [
                    "Performance-Audit",
                    "Optimierungsplan",
                    "Priorisierte Maßnahmen",
                    "Optimierter Code",
                    "Messplan",
                    "Vorher-Nachher-Vergleich"
                ]
            },


            // ==================================================
            // BARRIEREFREIHEIT
            // ==================================================

            barrierefreiheit: {

                name: "Barrierefreiheit",

                rollen: [
                    "Accessibility-Experte",
                    "Frontend-Entwickler",
                    "Inclusive-Design-Berater",
                    "UX-Designer",
                    "WCAG-orientierter Webentwickler"
                ],

                ziele: [
                    "Website barriereärmer machen",
                    "Accessibility-Probleme finden",
                    "Tastaturbedienung verbessern",
                    "Formulare zugänglicher gestalten",
                    "Kontraste und Struktur prüfen",
                    "Bestehende Web-App verbessern"
                ],

                anforderungen: [
                    "Semantisches HTML bevorzugen",
                    "Tastaturbedienung berücksichtigen",
                    "Fokuszustände sichtbar machen",
                    "Formulare korrekt beschriften",
                    "Alternativtexte sinnvoll einsetzen",
                    "Farbe nicht als einziges Signal verwenden",
                    "Automatische und manuelle Prüfung unterscheiden"
                ],

                ausgabeformate: [
                    "Accessibility-Audit",
                    "WCAG-orientierte Checkliste",
                    "Korrigierter HTML-Code",
                    "Priorisierte Verbesserungen",
                    "Barrierearme Komponente",
                    "Testplan"
                ]
            },


            // ==================================================
            // SICHERHEIT
            // ==================================================

            sicherheit: {

                name: "Sicherheit",

                rollen: [
                    "Web-Security-Engineer",
                    "Application-Security-Experte",
                    "Secure-Web-Developer",
                    "Full-Stack-Entwickler",
                    "Security-Architekt"
                ],

                ziele: [
                    "Web-App auf Sicherheitsprobleme prüfen",
                    "Sicherheitskonzept entwickeln",
                    "Authentifizierung absichern",
                    "Eingaben sicher verarbeiten",
                    "Sensible Daten schützen",
                    "Bestehende Sicherheitsprobleme beheben"
                ],

                anforderungen: [
                    "Alle externen Eingaben validieren",
                    "Ausgaben kontextgerecht behandeln",
                    "Geheimnisse nicht im Frontend oder Repository speichern",
                    "Berechtigungen serverseitig prüfen",
                    "Sichere Transportverschlüsselung voraussetzen",
                    "Sitzungen und Tokens sicher behandeln",
                    "Sicherheitsrelevante Annahmen kennzeichnen"
                ],

                ausgabeformate: [
                    "Security-Audit",
                    "Priorisierte Schwachstellenliste",
                    "Sicherheitskonzept",
                    "Secure-Code-Verbesserungen",
                    "Security-Checkliste",
                    "Maßnahmenplan"
                ]
            },


            // ==================================================
            // TESTING
            // ==================================================

            testing: {

                name: "Testing",

                rollen: [
                    "Web-QA-Engineer",
                    "Testautomatisierungs-Entwickler",
                    "Frontend-Test-Engineer",
                    "Full-Stack-Tester",
                    "Quality Engineer"
                ],

                ziele: [
                    "Website testen",
                    "Web-App-Testfälle entwickeln",
                    "UI-Tests planen",
                    "Automatisierte Tests entwickeln",
                    "Regressionen verhindern",
                    "Bestehende Testabdeckung verbessern"
                ],

                anforderungen: [
                    "Kritische Nutzerabläufe priorisieren",
                    "Normale und fehlerhafte Eingaben testen",
                    "Mobile und Desktop-Nutzung berücksichtigen",
                    "Mehrere Browser berücksichtigen",
                    "Erwartetes Ergebnis je Test definieren",
                    "Tests reproduzierbar halten",
                    "Regressionstests berücksichtigen"
                ],

                ausgabeformate: [
                    "Testfall-Tabelle",
                    "Testplan",
                    "Automatisierte Tests",
                    "Browser-Testmatrix",
                    "QA-Checkliste",
                    "Regressionstest-Suite"
                ]
            },


            // ==================================================
            // VERÖFFENTLICHUNG & HOSTING
            // ==================================================

            hosting: {

                name: "Veröffentlichung & Hosting",

                rollen: [
                    "Web-Hosting-Berater",
                    "DevOps-Engineer",
                    "Webentwickler",
                    "Deployment Engineer",
                    "Cloud-Hosting-Berater"
                ],

                ziele: [
                    "Website veröffentlichen",
                    "Passendes Hosting auswählen",
                    "Statische Website hosten",
                    "Web-App bereitstellen",
                    "Hosting-Struktur planen",
                    "Bestehendes Hosting verbessern"
                ],

                anforderungen: [
                    "Art der Anwendung berücksichtigen",
                    "Frontend- und Backend-Anforderungen unterscheiden",
                    "Kosten berücksichtigen",
                    "HTTPS berücksichtigen",
                    "Backup und Wiederherstellung berücksichtigen",
                    "Skalierung nur bei tatsächlichem Bedarf einplanen",
                    "Abhängigkeiten des Hostings transparent nennen"
                ],

                ausgabeformate: [
                    "Hosting-Vergleich",
                    "Veröffentlichungsplan",
                    "Hosting-Setup",
                    "Schritt-für-Schritt-Anleitung",
                    "Architekturübersicht",
                    "Deployment-Checkliste"
                ]
            },


            // ==================================================
            // DOMAIN & DEPLOYMENT
            // ==================================================

            deployment: {

                name: "Domain & Deployment",

                rollen: [
                    "Deployment Engineer",
                    "DevOps-Engineer",
                    "Webentwickler",
                    "DNS-Berater",
                    "Release Engineer"
                ],

                ziele: [
                    "Domain mit Website verbinden",
                    "Deployment einrichten",
                    "DNS konfigurieren",
                    "HTTPS aktivieren",
                    "Automatisches Deployment planen",
                    "Bestehendes Deployment reparieren"
                ],

                anforderungen: [
                    "Hosting-Anbieter berücksichtigen",
                    "DNS-Einträge exakt behandeln",
                    "Bestehende Domain-Konfiguration berücksichtigen",
                    "HTTPS-Zertifikat berücksichtigen",
                    "Produktiv- und Testumgebung unterscheiden",
                    "Rollback-Möglichkeit berücksichtigen",
                    "Riskante DNS-Änderungen klar kennzeichnen"
                ],

                ausgabeformate: [
                    "Deployment-Anleitung",
                    "DNS-Konfiguration",
                    "Release-Checkliste",
                    "CI/CD-Konzept",
                    "Domain-Setup",
                    "Fehlerdiagnose"
                ]
            },


            // ==================================================
            // WARTUNG & ERWEITERUNG
            // ==================================================

            wartung: {

                name: "Wartung & Erweiterung",

                rollen: [
                    "Web-App-Maintainer",
                    "Senior Webentwickler",
                    "Softwarearchitekt",
                    "Technical Lead",
                    "Maintenance Engineer"
                ],

                ziele: [
                    "Website langfristig wartbar halten",
                    "Web-App sicher erweitern",
                    "Technische Schulden reduzieren",
                    "Update-Strategie entwickeln",
                    "Bestehende Anwendung modernisieren",
                    "Wartungsplan erstellen"
                ],

                anforderungen: [
                    "Bestehende Funktionen erhalten",
                    "Änderungen möglichst rückwärtskompatibel durchführen",
                    "Abhängigkeiten regelmäßig prüfen",
                    "Backups vor kritischen Änderungen berücksichtigen",
                    "Änderungen testbar gestalten",
                    "Nur notwendige Teile verändern",
                    "Dokumentation aktuell halten"
                ],

                ausgabeformate: [
                    "Wartungsplan",
                    "Update-Checkliste",
                    "Erweiterungs-Roadmap",
                    "Refactoring-Plan",
                    "Priorisierte Maßnahmenliste",
                    "Release-Plan"
                ]
            },


            // ==================================================
            // APP-IDEEN & KONZEPTE
            // ==================================================

            ideen: {

                name: "App-Ideen & Konzepte",

                rollen: [
                    "Digital Product Strategist",
                    "App-Ideen-Coach",
                    "Product Designer",
                    "Startup Product Consultant",
                    "Creative Technologist"
                ],

                ziele: [
                    "Neue App-Ideen entwickeln",
                    "Web-App-Idee entwickeln",
                    "Bestehende App-Idee verbessern",
                    "MVP aus einer Idee ableiten",
                    "Mehrere Produktkonzepte entwickeln",
                    "Idee auf technische Umsetzbarkeit prüfen"
                ],

                anforderungen: [
                    "Mehrere deutlich unterschiedliche Ideen entwickeln",
                    "Konkretes Nutzerproblem benennen",
                    "Zielgruppe berücksichtigen",
                    "Kernfunktion jeder Idee definieren",
                    "MVP möglichst klein halten",
                    "Technischen Aufwand grob einschätzen",
                    "Unnötige Funktionen vermeiden"
                ],

                ausgabeformate: [
                    "10 App-Ideen",
                    "Drei ausgearbeitete Konzepte",
                    "MVP-Konzept",
                    "Ideenmatrix",
                    "Feature-Priorisierung",
                    "Produktkonzept"
                ]
            }
        }
    },


    // ==================================================
    // 8. KI & PROMPT ENGINEERING
    // ==================================================

    ki: {

        name: "KI & Prompt Engineering",
        icon: "🤖",

        unterkategorien: {

            promptEngineering: {
                name: "Prompt Engineering",
                rollen: ["Prompt Engineer", "KI-Berater", "Prompt-Architekt"],
                ziele: ["Wirksamen Prompt erstellen", "Prompt systematisch strukturieren", "Prompt an eine konkrete Aufgabe anpassen"],
                anforderungen: ["Ziel eindeutig formulieren", "Relevanten Kontext berücksichtigen", "Anforderungen und Grenzen klar trennen", "Gewünschtes Ausgabeformat festlegen"],
                ausgabeformate: ["Fertiger Prompt", "Strukturierter Prompt", "Prompt plus kurze Begründung"]
            },

            promptsVerbessern: {
                name: "Prompts verbessern",
                rollen: ["Prompt-Reviewer", "Prompt Engineer", "KI-Optimierungsberater"],
                ziele: ["Bestehenden Prompt verbessern", "Unklare Stellen erkennen", "Prompt präziser und zuverlässiger machen"],
                anforderungen: ["Ursprüngliche Absicht erhalten", "Keine neuen Anforderungen ungefragt ergänzen", "Mehrdeutige Formulierungen beseitigen", "Wesentliche Änderungen nachvollziehbar machen"],
                ausgabeformate: ["Optimierter Prompt", "Vorher-Nachher-Version", "Verbesserungsvorschläge plus neuer Prompt"]
            },

            systemprompts: {
                name: "Systemprompts",
                rollen: ["System-Prompt-Architekt", "KI-Assistenten-Designer", "Prompt Engineer"],
                ziele: ["Systemprompt entwickeln", "Verhalten eines Assistenten definieren", "Regeln und Grenzen für einen KI-Assistenten strukturieren"],
                anforderungen: ["Rolle und Zweck eindeutig definieren", "Prioritäten und Grenzen festlegen", "Widersprüchliche Regeln vermeiden", "Umgang mit fehlenden Informationen definieren"],
                ausgabeformate: ["Kompletter Systemprompt", "Systemprompt nach Abschnitten", "Systemprompt plus Regelübersicht"]
            },

            rollenprompts: {
                name: "Rollenprompts",
                rollen: ["Prompt Engineer", "Rollen-Designer für KI", "KI-Kommunikationsberater"],
                ziele: ["Passende KI-Rolle definieren", "Rolle präziser formulieren", "Mehrere Rollen für eine Aufgabe vergleichen"],
                anforderungen: ["Rolle an der tatsächlichen Aufgabe ausrichten", "Keine unnötig übertriebene Expertise verwenden", "Arbeitsweise der Rolle konkretisieren", "Zielgruppe berücksichtigen"],
                ausgabeformate: ["Fertiger Rollenprompt", "Drei Rollenvarianten", "Rolle plus Aufgabenbeschreibung"]
            },

            fewShot: {
                name: "Few-Shot-Prompts",
                rollen: ["Few-Shot-Prompt-Designer", "Prompt Engineer", "KI-Trainer"],
                ziele: ["Prompt mit Beispielen entwickeln", "Gewünschtes Antwortmuster zeigen", "Bestehenden Prompt durch Beispiele verbessern"],
                anforderungen: ["Repräsentative Beispiele verwenden", "Eingabe und gewünschte Ausgabe klar trennen", "Beispiele konsistent formatieren", "Beispiele nicht als allgemeingültige Fakten behandeln"],
                ausgabeformate: ["Few-Shot-Prompt", "Prompt mit zwei bis fünf Beispielen", "Beispielset plus finaler Prompt"]
            },

            strukturiertePrompts: {
                name: "Strukturierte Prompts",
                rollen: ["Prompt-Architekt", "Prompt Engineer", "Informationsdesigner"],
                ziele: ["Komplexen Prompt strukturieren", "Prompt übersichtlicher machen", "Wiederverwendbare Prompt-Struktur entwickeln"],
                anforderungen: ["Rolle, Aufgabe und Kontext trennen", "Anforderungen und Ausschlüsse getrennt darstellen", "Klare Abschnittsüberschriften verwenden", "Ausgabeformat eindeutig definieren"],
                ausgabeformate: ["Strukturierter Prompt", "Prompt-Template", "Prompt nach festen Abschnitten"]
            },

            modelle: {
                name: "KI-Modelle vergleichen",
                rollen: ["KI-Modell-Berater", "AI-Technology-Analyst", "KI-Auswahlberater"],
                ziele: ["KI-Modelle vergleichen", "Passendes Modell für eine Aufgabe auswählen", "Stärken und Grenzen verschiedener Modelle einordnen"],
                anforderungen: ["Einheitliche Vergleichskriterien verwenden", "Keine unbekannten Fähigkeiten erfinden", "Aktualität von Modellinformationen berücksichtigen", "Unsichere Angaben kennzeichnen"],
                ausgabeformate: ["Vergleichstabelle", "Modell-Empfehlung", "Stärken-Schwächen-Vergleich"]
            },

            assistenten: {
                name: "KI-Assistenten",
                rollen: ["KI-Assistenten-Designer", "Conversation Designer", "AI Product Consultant"],
                ziele: ["KI-Assistenten konzipieren", "Aufgabenbereich eines Assistenten definieren", "Bestehenden Assistenten verbessern"],
                anforderungen: ["Zweck klar begrenzen", "Benötigten Kontext definieren", "Erlaubte und unerwünschte Aufgaben unterscheiden", "Umgang mit Unsicherheit festlegen"],
                ausgabeformate: ["Assistenten-Konzept", "Rollen- und Aufgabenprofil", "Systemprompt plus Funktionsübersicht"]
            },

            agenten: {
                name: "KI-Agenten",
                rollen: ["AI-Agent-Architekt", "Agentic-Workflow-Designer", "KI-Automatisierungsberater"],
                ziele: ["KI-Agenten planen", "Agentenworkflow entwickeln", "Aufgaben und Werkzeuge eines Agenten definieren"],
                anforderungen: ["Ziel und Abbruchbedingungen definieren", "Verfügbare Werkzeuge klar begrenzen", "Berechtigungen berücksichtigen", "Menschliche Freigaben für kritische Aktionen vorsehen"],
                ausgabeformate: ["Agenten-Konzept", "Agenten-Workflow", "Tool- und Entscheidungsstruktur"]
            },

            workflows: {
                name: "KI-Workflows",
                rollen: ["KI-Workflow-Architekt", "Automation Consultant", "AI Process Designer"],
                ziele: ["KI-Workflow entwickeln", "Mehrere KI-Schritte verbinden", "Bestehenden KI-Ablauf optimieren"],
                anforderungen: ["Eingaben und Ausgaben je Schritt definieren", "Prüfpunkte vorsehen", "Fehlerfälle berücksichtigen", "Manuelle und automatisierte Schritte unterscheiden"],
                ausgabeformate: ["Workflow in Schritten", "Prozessdiagramm als Text", "KI-Workflow-Plan"]
            },

            texte: {
                name: "KI für Texte",
                rollen: ["KI-Schreibberater", "Prompt Engineer für Texte", "AI Content Specialist"],
                ziele: ["KI für Textarbeit einsetzen", "Textprompt entwickeln", "Schreibworkflow mit KI verbessern"],
                anforderungen: ["Zielgruppe und Ton definieren", "Fakten nicht ungeprüft ergänzen", "Gewünschte Länge festlegen", "Originalinhalt bei Überarbeitungen erhalten"],
                ausgabeformate: ["Textprompt", "KI-Schreibworkflow", "Prompt-Vorlage für Texte"]
            },

            bilder: {
                name: "KI für Bilder",
                rollen: ["Prompt Engineer für Bildmodelle", "KI-Art-Director", "Visual Prompt Designer"],
                ziele: ["Bildprompt entwickeln", "KI-Bilder gezielter erzeugen", "Konsistenten visuellen Stil definieren"],
                anforderungen: ["Motiv eindeutig definieren", "Licht, Perspektive und Stil beschreiben", "Gewünschte und unerwünschte Elemente nennen", "Seitenverhältnis berücksichtigen"],
                ausgabeformate: ["Fertiger Bildprompt", "Promptvarianten", "Visuelles Prompt-Template"]
            },

            video: {
                name: "KI für Video",
                rollen: ["KI-Video-Prompt-Designer", "AI Video Director", "Prompt Engineer"],
                ziele: ["KI-Videoprompt entwickeln", "Filmszene mit KI planen", "Konsistente Videosequenzen erzeugen"],
                anforderungen: ["Handlung konkret beschreiben", "Kamera und Bewegung definieren", "Dauer und Format berücksichtigen", "Visuelle Kontinuität beachten"],
                ausgabeformate: ["KI-Videoprompt", "Szenenprompt", "Mehrere Videopromptvarianten"]
            },

            audio: {
                name: "KI für Audio",
                rollen: ["AI-Audio-Spezialist", "KI-Musik-Prompt-Designer", "Audio-Prompt-Engineer"],
                ziele: ["KI für Audio einsetzen", "Musik- oder Sprachprompt entwickeln", "Audio-Workflow mit KI planen"],
                anforderungen: ["Audioart klar definieren", "Stil und Einsatzzweck berücksichtigen", "Technische Zielparameter nennen", "Rechte und Nutzungsbedingungen gesondert prüfen"],
                ausgabeformate: ["Audio-Prompt", "Musik-Prompt", "KI-Audio-Workflow"]
            },

            coding: {
                name: "KI für Programmierung",
                rollen: ["AI Coding Coach", "Senior Softwareentwickler", "Prompt Engineer für Coding"],
                ziele: ["Coding-Prompt erstellen", "KI beim Entwickeln gezielt einsetzen", "KI-generierten Code besser kontrollieren"],
                anforderungen: ["Projektkontext berücksichtigen", "Keine unbekannte Projektstruktur erfinden", "Änderungen testbar gestalten", "KI-Code auf Fehler und Nebenwirkungen prüfen"],
                ausgabeformate: ["Coding-Prompt", "KI-Coding-Workflow", "Feature-Prompt mit Testkriterien"]
            },

            recherche: {
                name: "KI für Recherche",
                rollen: ["KI-Rechercheberater", "Research Prompt Engineer", "Informationsanalyst"],
                ziele: ["Rechercheprompt entwickeln", "KI-Recherche strukturieren", "Quellenorientierte Recherche verbessern"],
                anforderungen: ["Recherchefrage klar definieren", "Quellen und Aussagen trennen", "Keine Quellen erfinden", "Informationslücken sichtbar machen"],
                ausgabeformate: ["Rechercheprompt", "Rechercheplan", "Quellenorientierte Ergebnisstruktur"]
            },

            daten: {
                name: "KI für Datenanalyse",
                rollen: ["AI Data Analyst", "Datenanalyse-Berater", "Prompt Engineer für Daten"],
                ziele: ["Daten mit KI analysieren", "Analyseprompt entwickeln", "KI bei Interpretation von Daten einsetzen"],
                anforderungen: ["Nur bereitgestellte Daten als Fakten verwenden", "Berechnung und Interpretation trennen", "Fehlende Daten kennzeichnen", "Keine Kausalität ohne Beleg behaupten"],
                ausgabeformate: ["Analyseprompt", "Analyseplan", "Strukturierte Datenauswertung"]
            },

            automatisierung: {
                name: "KI-Automatisierung",
                rollen: ["AI Automation Architect", "Workflow-Automatisierungsberater", "KI-Integrationsberater"],
                ziele: ["KI-gestützte Automatisierung entwickeln", "Manuelle KI-Schritte automatisieren", "KI in bestehenden Workflow integrieren"],
                anforderungen: ["Auslöser und Ziel definieren", "Datenfluss beschreiben", "Fehlerfälle und Freigaben berücksichtigen", "Kritische Aktionen nicht ungeprüft automatisieren"],
                ausgabeformate: ["Automatisierungskonzept", "KI-Workflow", "Implementierungsplan"]
            },

            tools: {
                name: "KI-Tools auswählen",
                rollen: ["KI-Tool-Berater", "Software-Auswahlberater", "AI Technology Consultant"],
                ziele: ["Passendes KI-Tool auswählen", "Mehrere KI-Tools vergleichen", "Tool-Stack für eine Aufgabe planen"],
                anforderungen: ["Konkreten Anwendungsfall berücksichtigen", "Kosten und Datenschutz berücksichtigen", "Einheitliche Kriterien verwenden", "Keine aktuellen Funktionen oder Preise erfinden"],
                ausgabeformate: ["Tool-Vergleich", "Auswahlliste", "Empfehlungsmatrix"]
            },

            projekte: {
                name: "KI-Projekte planen",
                rollen: ["AI Project Manager", "KI-Projektberater", "AI Product Strategist"],
                ziele: ["KI-Projekt planen", "KI-Idee in Arbeitspakete zerlegen", "MVP für KI-Projekt entwickeln"],
                anforderungen: ["Projektziel klar definieren", "Daten und technische Voraussetzungen berücksichtigen", "Risiken und Abhängigkeiten nennen", "MVP möglichst klein halten"],
                ausgabeformate: ["KI-Projektplan", "MVP-Roadmap", "Arbeitspaket-Liste"]
            },

            halluzinationen: {
                name: "Halluzinationen erkennen",
                rollen: ["KI-Qualitätsprüfer", "Faktenprüfer", "AI Reliability Analyst"],
                ziele: ["Mögliche Halluzinationen erkennen", "Unsichere Aussagen identifizieren", "KI-Antwort kritisch prüfen"],
                anforderungen: ["Belegte und unbelegte Aussagen trennen", "Keine fehlenden Fakten selbst ergänzen", "Unsicherheit kennzeichnen", "Prüfbare Aussagen für Verifikation markieren"],
                ausgabeformate: ["Halluzinations-Check", "Aussagenprüfung", "Liste verdächtiger Aussagen"]
            },

            faktenpruefung: {
                name: "Faktenprüfung",
                rollen: ["Faktenprüfer", "Research Analyst", "KI-Qualitätsprüfer"],
                ziele: ["KI-Aussagen überprüfen", "Fakten und Behauptungen trennen", "Prüfbedarf priorisieren"],
                anforderungen: ["Keine Quelle erfinden", "Fakten und Schlussfolgerungen trennen", "Widersprüche kenntlich machen", "Nicht überprüfbare Aussagen als solche markieren"],
                ausgabeformate: ["Faktencheck-Tabelle", "Prüfbericht", "Aussagen mit Prüfstatus"]
            },

            datenschutz: {
                name: "Datenschutz & KI",
                rollen: ["KI-Datenschutzberater", "Privacy-by-Design-Berater", "AI Governance Consultant"],
                ziele: ["KI-Nutzung datenschutzfreundlicher gestalten", "Datenrisiken erkennen", "KI-Workflow auf sensible Daten prüfen"],
                anforderungen: ["Datenminimierung berücksichtigen", "Sensible Daten identifizieren", "Lokale und externe Verarbeitung unterscheiden", "Rechtliche Bewertung als gesonderten Prüfpunkt kennzeichnen"],
                ausgabeformate: ["Datenschutz-Checkliste", "Risikoanalyse", "Privacy-by-Design-Konzept"]
            },

            qualitaet: {
                name: "KI-Ausgaben bewerten",
                rollen: ["KI-Qualitätsprüfer", "Evaluation Designer", "AI Quality Analyst"],
                ziele: ["KI-Ausgabe systematisch bewerten", "Qualitätskriterien entwickeln", "Mehrere Antworten vergleichen"],
                anforderungen: ["Bewertungskriterien vorher definieren", "Faktenqualität getrennt bewerten", "Subjektive Kriterien kenntlich machen", "Fehler konkret belegen"],
                ausgabeformate: ["Bewertungsmatrix", "Qualitätscheck", "Vergleichstabelle"]
            },

            bibliotheken: {
                name: "Prompt-Bibliotheken",
                rollen: ["Prompt-Library-Designer", "Informationsarchitekt", "Prompt Engineer"],
                ziele: ["Prompt-Sammlung strukturieren", "Prompts kategorisieren", "Prompt-Bibliothek leichter durchsuchbar machen"],
                anforderungen: ["Einheitliche Kategorien verwenden", "Prompts mit Zweck und Einsatzgebiet kennzeichnen", "Dubletten vermeiden", "Versionierung berücksichtigen"],
                ausgabeformate: ["Bibliotheksstruktur", "Kategorienbaum", "Prompt-Katalog"]
            },

            vorlagen: {
                name: "Prompt-Vorlagen",
                rollen: ["Prompt-Template-Designer", "Prompt Engineer", "Workflow-Designer"],
                ziele: ["Wiederverwendbare Prompt-Vorlage erstellen", "Variable Prompt-Bausteine definieren", "Vorlage für wiederkehrende Aufgabe entwickeln"],
                anforderungen: ["Variable Felder eindeutig markieren", "Pflicht- und optionale Angaben unterscheiden", "Struktur einfach wiederverwendbar halten", "Beispielbefüllung ermöglichen"],
                ausgabeformate: ["Prompt-Template", "Ausfüllbare Vorlage", "Vorlage plus Beispiel"]
            },

            assistentenEntwickeln: {
                name: "KI-Assistenten entwickeln",
                rollen: ["AI Application Architect", "KI-Assistenten-Entwickler", "Conversation Designer"],
                ziele: ["KI-Assistenten technisch planen", "Assistent mit Regeln und Funktionen entwickeln", "MVP für KI-Assistenten definieren"],
                anforderungen: ["Aufgabenbereich begrenzen", "Systemprompt und Anwendungslogik unterscheiden", "Benötigte Werkzeuge und Daten definieren", "Fehler- und Sicherheitsfälle berücksichtigen"],
                ausgabeformate: ["Assistenten-Architektur", "MVP-Plan", "Systemprompt plus technische Struktur"]
            },

            api: {
                name: "API-basierte KI-Anwendungen",
                rollen: ["AI Application Developer", "API-Integration-Engineer", "KI-Softwarearchitekt"],
                ziele: ["KI-API in Anwendung integrieren", "API-basierten KI-Workflow entwickeln", "KI-Anwendung technisch planen"],
                anforderungen: ["API-Schlüssel schützen", "Offizielle API-Dokumentation berücksichtigen", "Fehler und Rate Limits behandeln", "Kosten und Datenübertragung berücksichtigen"],
                ausgabeformate: ["Integrationsplan", "API-Workflow", "Frontend-Backend-Architektur"]
            },

            lokaleModelle: {
                name: "Lokale KI-Modelle",
                rollen: ["Local-AI-Berater", "AI Infrastructure Consultant", "KI-Systemarchitekt"],
                ziele: ["Lokales KI-Modell auswählen", "Lokale KI-Nutzung planen", "Hardwareanforderungen vergleichen"],
                anforderungen: ["Hardware und Betriebssystem berücksichtigen", "Modellgröße und Ressourcenbedarf beachten", "Keine Leistungswerte erfinden", "Datenschutz- und Wartungsvorteile realistisch einordnen"],
                ausgabeformate: ["Lokales-KI-Konzept", "Modellvergleich", "Hardware-und-Setup-Plan"]
            },

            trends: {
                name: "KI-Trends & neue Technologien",
                rollen: ["KI-Trendanalyst", "Technology Scout", "AI Research Analyst"],
                ziele: ["Neue KI-Entwicklungen einordnen", "KI-Trends bewerten", "Relevante Technologien für einen Anwendungsfall identifizieren"],
                anforderungen: ["Zeitraum berücksichtigen", "Hype und belegte Entwicklung unterscheiden", "Unsichere Prognosen kennzeichnen", "Quellenbedarf bei aktuellen Aussagen deutlich machen"],
                ausgabeformate: ["Trendübersicht", "Technologie-Radar", "Chancen-Risiken-Einordnung"]
            }
        }
    },


    // ==================================================
    // 9. AUTOMATISIERUNG & PRODUKTIVITÄT
    // ==================================================

    produktivitaet: {

        name: "Automatisierung & Produktivität",
        icon: "⚙️",

        unterkategorien: {

            workflows: {
                name: "Arbeitsabläufe automatisieren",
                rollen: ["Workflow-Automatisierungsberater", "Prozessdesigner", "Automation Engineer"],
                ziele: ["Arbeitsablauf automatisieren", "Manuelle Schritte reduzieren", "Bestehenden Workflow verbessern"],
                anforderungen: ["Ausgangsprozess zuerst beschreiben", "Auslöser und Ergebnis definieren", "Fehlerfälle berücksichtigen", "Manuelle Freigaben bei kritischen Schritten vorsehen"],
                ausgabeformate: ["Automatisierungsworkflow", "Prozessplan", "Schritt-für-Schritt-Umsetzung"]
            },

            wiederkehrend: {
                name: "Wiederkehrende Aufgaben",
                rollen: ["Produktivitätsberater", "Automation Specialist", "Prozessoptimierer"],
                ziele: ["Wiederkehrende Aufgabe automatisieren", "Routine vereinfachen", "Zeitaufwand reduzieren"],
                anforderungen: ["Häufigkeit berücksichtigen", "Eingaben und Ausgaben definieren", "Ausnahmen berücksichtigen", "Automatisierungsnutzen gegen Aufwand abwägen"],
                ausgabeformate: ["Automatisierungsplan", "Routine-Workflow", "Umsetzungscheckliste"]
            },

            office: {
                name: "Office-Automatisierung",
                rollen: ["Office-Automatisierungsberater", "Microsoft-365-Spezialist", "Workflow-Designer"],
                ziele: ["Office-Arbeit automatisieren", "Dokument- oder Datenprozess vereinfachen", "Mehrere Office-Schritte verbinden"],
                anforderungen: ["Verwendete Office-Anwendungen berücksichtigen", "Dateiformate erhalten", "Bestehende Daten nicht ungefragt überschreiben", "Berechtigungen berücksichtigen"],
                ausgabeformate: ["Office-Workflow", "Automatisierungskonzept", "Schritt-für-Schritt-Anleitung"]
            },

            email: {
                name: "E-Mail-Automatisierung",
                rollen: ["E-Mail-Workflow-Designer", "Automation Consultant", "Produktivitätsberater"],
                ziele: ["E-Mail-Prozess automatisieren", "E-Mails automatisch sortieren oder vorbereiten", "Wiederkehrende E-Mail-Arbeit reduzieren"],
                anforderungen: ["Auslöser eindeutig definieren", "Automatisches Senden von Entwürfen unterscheiden", "Empfänger korrekt behandeln", "Fehlversandrisiken berücksichtigen"],
                ausgabeformate: ["E-Mail-Workflow", "Regelkonzept", "Automatisierungsplan"]
            },

            dateien: {
                name: "Datei- und Ordnerverwaltung",
                rollen: ["Datei-Automatisierungsberater", "Automation Engineer", "Digital-Organisation-Experte"],
                ziele: ["Dateien automatisch sortieren", "Dateien umbenennen oder verschieben", "Ordnerstruktur automatisieren"],
                anforderungen: ["Dateien nicht ungefragt löschen", "Namenskonvention definieren", "Dubletten berücksichtigen", "Backup vor großen Änderungen vorsehen"],
                ausgabeformate: ["Datei-Workflow", "Ordnerkonzept", "Automatisierungsskript-Konzept"]
            },

            daten: {
                name: "Datenübertragung",
                rollen: ["Integration Specialist", "Daten-Automatisierungsberater", "Workflow Engineer"],
                ziele: ["Daten zwischen Systemen übertragen", "Manuelle Dateneingabe reduzieren", "Datenfluss automatisieren"],
                anforderungen: ["Quelle und Ziel eindeutig definieren", "Feldzuordnung festlegen", "Datenformate berücksichtigen", "Fehlerhafte oder fehlende Werte behandeln"],
                ausgabeformate: ["Datenflussplan", "Mapping-Tabelle", "Integrationsworkflow"]
            },

            berichte: {
                name: "Berichte automatisch erstellen",
                rollen: ["Reporting-Automatisierungsberater", "Data Automation Specialist", "Produktivitätsberater"],
                ziele: ["Bericht automatisch erzeugen", "Regelmäßiges Reporting vereinfachen", "Daten automatisch in Bericht überführen"],
                anforderungen: ["Datenquellen definieren", "Kennzahlen korrekt übernehmen", "Berichtszeitraum festlegen", "Fehlende Daten kennzeichnen"],
                ausgabeformate: ["Reporting-Workflow", "Berichtsvorlage", "Automatisierungsplan"]
            },

            zusammenfassungen: {
                name: "Automatische Zusammenfassungen",
                rollen: ["KI-Workflow-Designer", "Informationsmanager", "Automation Consultant"],
                ziele: ["Inhalte automatisch zusammenfassen", "Regelmäßige Zusammenfassungen erzeugen", "Informationsmenge reduzieren"],
                anforderungen: ["Nur vorhandene Inhalte zusammenfassen", "Keine fehlenden Fakten ergänzen", "Quellenbezug erhalten", "Gewünschte Länge definieren"],
                ausgabeformate: ["Zusammenfassungsworkflow", "Prompt plus Ablauf", "Automatisierungskonzept"]
            },

            kalender: {
                name: "Kalender-Workflows",
                rollen: ["Kalender-Automatisierungsberater", "Produktivitätscoach", "Workflow-Designer"],
                ziele: ["Kalenderprozess automatisieren", "Termine und Folgeaufgaben verbinden", "Terminorganisation vereinfachen"],
                anforderungen: ["Zeitzonen berücksichtigen", "Bestehende Termine nicht ungefragt verändern", "Auslöser und Folgeaktion definieren", "Konflikte berücksichtigen"],
                ausgabeformate: ["Kalender-Workflow", "Terminprozess", "Automatisierungsplan"]
            },

            aufgaben: {
                name: "Aufgabenmanagement",
                rollen: ["Task-Management-Berater", "Produktivitätscoach", "Workflow-Designer"],
                ziele: ["Aufgabenprozess strukturieren", "Aufgaben automatisch erzeugen oder sortieren", "Statusverfolgung verbessern"],
                anforderungen: ["Prioritäten klar definieren", "Statusmodell festlegen", "Verantwortlichkeiten berücksichtigen", "Doppelte Aufgaben vermeiden"],
                ausgabeformate: ["Aufgabenworkflow", "Kanban-Struktur", "Automatisierungsplan"]
            },

            nocode: {
                name: "No-Code-Automatisierung",
                rollen: ["No-Code-Automation-Experte", "Workflow-Berater", "Citizen Developer"],
                ziele: ["Workflow ohne Programmierung automatisieren", "Passende No-Code-Lösung entwickeln", "Bestehenden manuellen Ablauf digitalisieren"],
                anforderungen: ["Verwendbare Dienste berücksichtigen", "Technische Grenzen nennen", "Kosten und Ausführungslimits berücksichtigen", "Fehlerpfade vorsehen"],
                ausgabeformate: ["No-Code-Workflow", "Schrittfolge", "Tool-und-Flow-Konzept"]
            },

            lowcode: {
                name: "Low-Code",
                rollen: ["Low-Code-Entwickler", "Automation Consultant", "Solution Designer"],
                ziele: ["Low-Code-Lösung entwickeln", "No-Code-Workflow mit Logik erweitern", "Geschäftsprozess digitalisieren"],
                anforderungen: ["Plattform berücksichtigen", "Datenmodell definieren", "Benutzerrechte berücksichtigen", "Custom Code nur bei Bedarf einsetzen"],
                ausgabeformate: ["Low-Code-Konzept", "App-und-Workflow-Struktur", "Implementierungsplan"]
            },

            powerAutomate: {
                name: "Power Automate",
                rollen: ["Power-Automate-Berater", "Microsoft-365-Automation-Spezialist", "Workflow-Entwickler"],
                ziele: ["Power-Automate-Flow entwickeln", "Microsoft-365-Prozess automatisieren", "Bestehenden Flow verbessern"],
                anforderungen: ["Trigger und Aktionen klar definieren", "Verwendete Connectors berücksichtigen", "Berechtigungen beachten", "Fehlerbehandlung und Wiederholungen vorsehen"],
                ausgabeformate: ["Power-Automate-Flowplan", "Schritt-für-Schritt-Flow", "Trigger-Aktion-Tabelle"]
            },

            zapierMake: {
                name: "Zapier / Make-Workflows",
                rollen: ["Zapier-und-Make-Berater", "No-Code-Automation-Experte", "Integration Specialist"],
                ziele: ["Zapier- oder Make-Workflow entwickeln", "Mehrere Dienste verbinden", "Bestehende Automation verbessern"],
                anforderungen: ["Trigger und Aktionen definieren", "Feldmapping berücksichtigen", "Ausführungslimits und Kosten beachten", "Fehlerfälle behandeln"],
                ausgabeformate: ["Workflow-Plan", "Modul-oder-Step-Struktur", "Integrationskonzept"]
            },

            python: {
                name: "Automatisierung mit Python",
                rollen: ["Python-Automation-Engineer", "Softwareentwickler", "Scripting Specialist"],
                ziele: ["Python-Automatisierung entwickeln", "Manuellen Prozess mit Skript ersetzen", "Bestehendes Automatisierungsskript verbessern"],
                anforderungen: ["Python-Version berücksichtigen", "Dateien und Daten schützen", "Fehlerfälle behandeln", "Benötigte Bibliotheken nennen"],
                ausgabeformate: ["Python-Skript", "Vollständige Python-Datei", "Skript plus Anleitung"]
            },

            browser: {
                name: "Browser-Automatisierung",
                rollen: ["Browser-Automation-Engineer", "Web-Automation-Spezialist", "Softwareentwickler"],
                ziele: ["Browserablauf automatisieren", "Wiederkehrende Webaufgabe vereinfachen", "Formular- oder Navigationsprozess automatisieren"],
                anforderungen: ["Websitebedingungen und Berechtigungen berücksichtigen", "Selektoren robust planen", "Anmeldeinformationen schützen", "Änderungen der Website einkalkulieren"],
                ausgabeformate: ["Browser-Workflow", "Automatisierungsskript-Konzept", "Test-und-Fehlerplan"]
            },

            ki: {
                name: "KI-gestützte Automatisierung",
                rollen: ["AI Automation Architect", "KI-Workflow-Designer", "Automation Consultant"],
                ziele: ["KI in Automatisierung integrieren", "Unstrukturierte Daten mit KI verarbeiten", "KI-gestützten Entscheidungsworkflow entwickeln"],
                anforderungen: ["KI-Ausgaben validieren", "Kritische Entscheidungen nicht ungeprüft automatisieren", "Datenübertragung berücksichtigen", "Kosten und Fehlerfälle berücksichtigen"],
                ausgabeformate: ["KI-Automatisierungsworkflow", "Architekturplan", "MVP-Konzept"]
            },

            prozessanalyse: {
                name: "Prozessanalyse",
                rollen: ["Prozessanalyst", "Lean-Workflow-Berater", "Automatisierungsberater"],
                ziele: ["Arbeitsprozess analysieren", "Automatisierungspotenzial erkennen", "Unnötige Prozessschritte finden"],
                anforderungen: ["Ist-Prozess zuerst abbilden", "Wartezeiten und Übergaben berücksichtigen", "Probleme von Ursachen unterscheiden", "Verbesserungen priorisieren"],
                ausgabeformate: ["Prozessanalyse", "Ist-Soll-Vergleich", "Optimierungsmatrix"]
            },

            zeitfresser: {
                name: "Zeitfresser erkennen",
                rollen: ["Produktivitätsanalyst", "Prozessoptimierer", "Zeitmanagement-Berater"],
                ziele: ["Zeitfresser erkennen", "Manuelle Routinearbeit identifizieren", "Verbesserungsmaßnahmen priorisieren"],
                anforderungen: ["Häufigkeit und Dauer berücksichtigen", "Unterbrechungen einbeziehen", "Automatisierbarkeit bewerten", "Zeitersparnis nicht ungeprüft versprechen"],
                ausgabeformate: ["Zeitfresser-Liste", "Prioritätenmatrix", "Optimierungsplan"]
            },

            produktivitaet: {
                name: "Produktivität steigern",
                rollen: ["Produktivitätscoach", "Workflow-Berater", "Organisationsberater"],
                ziele: ["Arbeitsweise produktiver gestalten", "Fokus verbessern", "Arbeitsabläufe vereinfachen"],
                anforderungen: ["Konkrete Ausgangssituation berücksichtigen", "Realistische Maßnahmen vorschlagen", "Überorganisation vermeiden", "Maßnahmen nach Wirkung und Aufwand priorisieren"],
                ausgabeformate: ["Produktivitätsplan", "Priorisierte Maßnahmen", "Wochenexperiment"]
            },

            persoenlicheWorkflows: {
                name: "Persönliche Workflows",
                rollen: ["Persönlicher Workflow-Coach", "Produktivitätsberater", "Digital-Organisation-Experte"],
                ziele: ["Persönlichen Workflow entwickeln", "Alltagsorganisation vereinfachen", "Wiederkehrende persönliche Abläufe strukturieren"],
                anforderungen: ["Tatsächliche Gewohnheiten berücksichtigen", "Möglichst wenige Werkzeuge verwenden", "Workflow einfach ausführbar halten", "Manuelle Rückfalloption vorsehen"],
                ausgabeformate: ["Persönlicher Workflow", "Routineplan", "Tool-und-Ablauf-Konzept"]
            },

            vorlagen: {
                name: "Vorlagen erstellen",
                rollen: ["Template-Designer", "Produktivitätsberater", "Informationsdesigner"],
                ziele: ["Wiederverwendbare Vorlage erstellen", "Wiederkehrende Dokumente vereinheitlichen", "Arbeitsaufwand durch Templates reduzieren"],
                anforderungen: ["Variable Felder kennzeichnen", "Pflichtangaben definieren", "Vorlage einfach wiederverwendbar halten", "Beispielbefüllung ermöglichen"],
                ausgabeformate: ["Ausfüllbare Vorlage", "Template", "Vorlage plus Beispiel"]
            },

            checklisten: {
                name: "Checklisten",
                rollen: ["Prozessdesigner", "Qualitätsberater", "Produktivitätscoach"],
                ziele: ["Checkliste erstellen", "Wiederkehrenden Prozess absichern", "Fehler durch vergessene Schritte reduzieren"],
                anforderungen: ["Schritte in sinnvoller Reihenfolge anordnen", "Nur relevante Punkte aufnehmen", "Prüfbare Formulierungen verwenden", "Kritische Punkte hervorheben"],
                ausgabeformate: ["Checkliste", "Prüfliste", "Phasenbasierte Checkliste"]
            },

            routinen: {
                name: "Routineplanung",
                rollen: ["Routine-Coach", "Produktivitätsberater", "Organisationscoach"],
                ziele: ["Routine entwickeln", "Bestehende Routine vereinfachen", "Wiederkehrende Aufgaben sinnvoll verteilen"],
                anforderungen: ["Realistische Dauer berücksichtigen", "Auslöser definieren", "Routine möglichst einfach halten", "Ausnahmen und Pausentage berücksichtigen"],
                ausgabeformate: ["Routineplan", "Wochenroutine", "Schrittfolge"]
            },

            organisation: {
                name: "Digitale Organisation",
                rollen: ["Digital-Organisation-Berater", "Informationsmanager", "Produktivitätscoach"],
                ziele: ["Digitale Ablage strukturieren", "Apps und Dateien besser organisieren", "Informationschaos reduzieren"],
                anforderungen: ["Bestehende Systeme berücksichtigen", "Einfaches Ordnungssystem bevorzugen", "Dubletten vermeiden", "Suchbarkeit priorisieren"],
                ausgabeformate: ["Ordnungssystem", "Ordner-und-Tool-Struktur", "Aufräumplan"]
            },

            information: {
                name: "Informationsmanagement",
                rollen: ["Informationsmanager", "Knowledge-Management-Berater", "Produktivitätsberater"],
                ziele: ["Informationen systematisch verwalten", "Wissen leichter auffindbar machen", "Informationsfluss verbessern"],
                anforderungen: ["Informationsquellen unterscheiden", "Ablage und Suche gemeinsam planen", "Versionierung berücksichtigen", "Veraltete Informationen kennzeichnen"],
                ausgabeformate: ["Informationssystem", "Wissensstruktur", "Management-Workflow"]
            },

            ideen: {
                name: "Automatisierungsideen",
                rollen: ["Automation-Ideenberater", "Prozessinnovations-Coach", "Workflow-Designer"],
                ziele: ["Automatisierungsideen entwickeln", "Neue Einsparpotenziale finden", "Mehrere Automatisierungskonzepte vergleichen"],
                anforderungen: ["Mehrere unterschiedliche Ideen liefern", "Aufwand und Nutzen grob einschätzen", "Bestehende Werkzeuge berücksichtigen", "Unnötige Automatisierung vermeiden"],
                ausgabeformate: ["10 Automatisierungsideen", "Ideenmatrix", "Top-Ideen mit Aufwand und Nutzen"]
            },

            dokumentation: {
                name: "Workflow-Dokumentation",
                rollen: ["Prozessdokumentations-Experte", "Technical Writer", "Workflow-Analyst"],
                ziele: ["Workflow dokumentieren", "Automatisierung nachvollziehbar beschreiben", "Übergabe an andere Personen erleichtern"],
                anforderungen: ["Nur tatsächlich vorhandene Schritte dokumentieren", "Auslöser und Ergebnis nennen", "Abhängigkeiten und Berechtigungen nennen", "Fehlerbehandlung dokumentieren"],
                ausgabeformate: ["Workflow-Dokumentation", "Prozessbeschreibung", "Betriebs-und-Fehlercheckliste"]
            }
        }
    },


    // ==================================================
    // 10. TECHNIK & ENGINEERING
    // ==================================================

    technik: {

        name: "Technik & Engineering",
        icon: "🔧",

        unterkategorien: {

            maschinenbau: {
                name: "Maschinenbau",
                rollen: ["Maschinenbauingenieur", "Konstruktionsberater", "Technischer Problemlöser"],
                ziele: ["Maschinenbauproblem analysieren", "Technische Lösung entwickeln", "Konzept vergleichen"],
                anforderungen: ["Bekannte technische Daten berücksichtigen", "Einheiten angeben", "Annahmen kennzeichnen", "Sicherheitsrelevante Punkte gesondert nennen"],
                ausgabeformate: ["Technische Analyse", "Lösungskonzept", "Berechnungs-und-Prüfplan"]
            },

            konstruktion: {
                name: "Konstruktion",
                rollen: ["Konstruktionsingenieur", "Mechanical Design Engineer", "CAD-Konstruktionsberater"],
                ziele: ["Bauteil konstruieren", "Konstruktionskonzept verbessern", "Mehrere Lösungsvarianten entwickeln"],
                anforderungen: ["Funktion und Lastfälle berücksichtigen", "Fertigbarkeit berücksichtigen", "Schnittstellen und Einbauraum beachten", "Fehlende Maße kennzeichnen"],
                ausgabeformate: ["Konstruktionskonzept", "Variantenvergleich", "Technische Aufgabenliste"]
            },

            cad: {
                name: "CAD",
                rollen: ["CAD-Konstrukteur", "CAD-Anwendungsberater", "Konstruktionsingenieur"],
                ziele: ["CAD-Modell planen", "Modellierungsstrategie entwickeln", "Bestehendes CAD-Modell verbessern"],
                anforderungen: ["CAD-System berücksichtigen", "Modellaufbau robust halten", "Referenzen nachvollziehbar verwenden", "Änderbarkeit des Modells berücksichtigen"],
                ausgabeformate: ["CAD-Modellierungsplan", "Feature-Reihenfolge", "Schritt-für-Schritt-Workflow"]
            },

            zeichnungen: {
                name: "Technische Zeichnungen",
                rollen: ["Technischer Zeichner", "Konstruktionsingenieur", "Zeichnungsprüfer"],
                ziele: ["Technische Zeichnung erstellen", "Zeichnung prüfen", "Bemaßung verbessern"],
                anforderungen: ["Maße und Einheiten eindeutig angeben", "Toleranzen nicht erfinden", "Ansichten sinnvoll auswählen", "Normanforderungen nur bei bekanntem Standard anwenden"],
                ausgabeformate: ["Zeichnungscheckliste", "Bemaßungsplan", "Prüfbericht"]
            },

            produktentwicklung: {
                name: "Produktentwicklung",
                rollen: ["Produktentwicklungsingenieur", "Engineering Project Consultant", "Konstruktionsberater"],
                ziele: ["Produkt entwickeln", "Konzept in technische Lösung überführen", "Produktentwicklung strukturieren"],
                anforderungen: ["Nutzeranforderungen berücksichtigen", "Technische Risiken benennen", "Kosten und Fertigbarkeit mitdenken", "Entwicklung in überprüfbare Phasen gliedern"],
                ausgabeformate: ["Entwicklungsplan", "Produktkonzept", "Engineering-Roadmap"]
            },

            fertigung: {
                name: "Fertigung",
                rollen: ["Fertigungsingenieur", "Manufacturing Engineer", "Produktionsberater"],
                ziele: ["Fertigungsverfahren auswählen", "Bauteil fertigungsgerecht gestalten", "Fertigungsproblem analysieren"],
                anforderungen: ["Material und Geometrie berücksichtigen", "Stückzahl berücksichtigen", "Toleranzen und Oberflächen beachten", "Maschinenfähigkeiten nicht erfinden"],
                ausgabeformate: ["Fertigungskonzept", "Verfahrensvergleich", "Arbeitsfolge"]
            },

            produktion: {
                name: "Produktion",
                rollen: ["Produktionsingenieur", "Prozessoptimierer", "Industrial Engineer"],
                ziele: ["Produktionsprozess planen", "Produktionsablauf verbessern", "Engpässe identifizieren"],
                anforderungen: ["Prozessschritte abbilden", "Kapazitäten berücksichtigen", "Qualitätspunkte vorsehen", "Annahmen zu Zeiten und Mengen kennzeichnen"],
                ausgabeformate: ["Produktionsablauf", "Optimierungsplan", "Prozessübersicht"]
            },

            montage: {
                name: "Montage",
                rollen: ["Montageplaner", "Industrial Engineer", "Konstruktionsberater"],
                ziele: ["Montageablauf planen", "Montage vereinfachen", "Montagefehler reduzieren"],
                anforderungen: ["Montagereihenfolge berücksichtigen", "Zugänglichkeit prüfen", "Werkzeuge und Hilfsmittel nennen", "Sicherheitskritische Schritte hervorheben"],
                ausgabeformate: ["Montageanweisung", "Montagefolge", "Montage-Checkliste"]
            },

            werkstoffe: {
                name: "Werkstoffe",
                rollen: ["Werkstoffingenieur", "Materialberater", "Konstruktionsingenieur"],
                ziele: ["Werkstoff auswählen", "Werkstoffe vergleichen", "Materialproblem analysieren"],
                anforderungen: ["Belastung und Umgebung berücksichtigen", "Materialkennwerte nicht erfinden", "Fertigung und Kosten mitdenken", "Informationslücken benennen"],
                ausgabeformate: ["Werkstoffvergleich", "Auswahlmatrix", "Materialempfehlung mit Begründung"]
            },

            toleranzen: {
                name: "Toleranzen",
                rollen: ["Toleranzingenieur", "Konstruktionsingenieur", "Qualitätsingenieur"],
                ziele: ["Toleranzen festlegen", "Toleranzkette analysieren", "Überbestimmte Toleranzen erkennen"],
                anforderungen: ["Funktionale Anforderungen berücksichtigen", "Nennmaße und Einheiten angeben", "Keine Toleranzwerte ohne Grundlage erfinden", "Fertigungsverfahren berücksichtigen"],
                ausgabeformate: ["Toleranzanalyse", "Toleranzkette", "Prüfliste"]
            },

            berechnungen: {
                name: "Technische Berechnungen",
                rollen: ["Berechnungsingenieur", "Mechanical Engineer", "Technischer Analyst"],
                ziele: ["Technische Berechnung durchführen", "Berechnungsweg prüfen", "Dimensionierung vorbereiten"],
                anforderungen: ["Gegebene Werte und Einheiten vollständig übernehmen", "Formeln nennen", "Annahmen transparent machen", "Ergebnis auf Plausibilität prüfen"],
                ausgabeformate: ["Berechnung mit Rechenweg", "Formel-und-Ergebnis-Tabelle", "Plausibilitätsprüfung"]
            },

            mechanik: {
                name: "Mechanik",
                rollen: ["Mechanikingenieur", "Berechnungsingenieur", "Technischer Tutor"],
                ziele: ["Mechanisches Problem analysieren", "Kräfte und Bewegungen bestimmen", "Mechanisches Prinzip erklären"],
                anforderungen: ["Freikörperbild gedanklich berücksichtigen", "Koordinatensystem definieren", "Einheiten konsistent verwenden", "Vereinfachungen kennzeichnen"],
                ausgabeformate: ["Mechanikanalyse", "Berechnungsweg", "Schrittweise Erklärung"]
            },

            elektrotechnik: {
                name: "Elektrotechnik",
                rollen: ["Elektroingenieur", "Elektrotechnik-Berater", "Technischer Analyst"],
                ziele: ["Elektrotechnische Aufgabe analysieren", "Schaltung oder System planen", "Elektrisches Problem diagnostizieren"],
                anforderungen: ["Spannung, Strom und Leistung mit Einheiten behandeln", "Sicherheitsanforderungen berücksichtigen", "Bauteildaten nicht erfinden", "Messung und Annahme unterscheiden"],
                ausgabeformate: ["Technische Analyse", "Schaltungskonzept", "Prüfplan"]
            },

            elektronik: {
                name: "Elektronik",
                rollen: ["Elektronikentwickler", "Hardware Engineer", "Schaltungsentwickler"],
                ziele: ["Elektronikschaltung planen", "Bauteilauswahl vorbereiten", "Elektronikfehler analysieren"],
                anforderungen: ["Versorgungsspannungen berücksichtigen", "Bauteilgrenzen beachten", "Datenblattwerte nicht erfinden", "Messpunkte und Testmöglichkeiten vorsehen"],
                ausgabeformate: ["Schaltungskonzept", "Bauteil-und-Prüfliste", "Fehlerdiagnose"]
            },

            mechatronik: {
                name: "Mechatronik",
                rollen: ["Mechatronikingenieur", "System Engineer", "Automatisierungsingenieur"],
                ziele: ["Mechatronisches System entwickeln", "Mechanik, Elektronik und Software verbinden", "Systemproblem analysieren"],
                anforderungen: ["Teilsysteme klar trennen", "Schnittstellen definieren", "Energie- und Signalflüsse berücksichtigen", "Systemrisiken benennen"],
                ausgabeformate: ["Systemkonzept", "Schnittstellenübersicht", "Entwicklungsplan"]
            },

            automatisierungstechnik: {
                name: "Automatisierungstechnik",
                rollen: ["Automatisierungsingenieur", "Controls Engineer", "Anlagenautomatisierungs-Berater"],
                ziele: ["Automatisierungskonzept entwickeln", "Maschinenablauf strukturieren", "Bestehende Automatisierung verbessern"],
                anforderungen: ["Sensoren und Aktoren berücksichtigen", "Zustände und Sicherheitsfunktionen trennen", "Fehlerzustände definieren", "Hardwarevoraussetzungen nennen"],
                ausgabeformate: ["Automatisierungskonzept", "Ablaufbeschreibung", "Signal-und-Funktionsübersicht"]
            },

            robotik: {
                name: "Robotik",
                rollen: ["Robotikingenieur", "Automation Engineer", "Robotik-Anwendungsberater"],
                ziele: ["Robotikanwendung planen", "Roboterablauf entwickeln", "Robotikprozess optimieren"],
                anforderungen: ["Arbeitsraum berücksichtigen", "Greifer und Werkstück definieren", "Sicherheitsbereich berücksichtigen", "Taktzeit nicht ohne Daten garantieren"],
                ausgabeformate: ["Robotikkonzept", "Ablaufplan", "Zellen-und-Prozessübersicht"]
            },

            regelung: {
                name: "Steuerungs- und Regelungstechnik",
                rollen: ["Regelungsingenieur", "Control Systems Engineer", "Automatisierungstechniker"],
                ziele: ["Regelkreis analysieren", "Regelstrategie entwickeln", "Regelverhalten verbessern"],
                anforderungen: ["Regelgröße und Stellgröße definieren", "Dynamik des Systems berücksichtigen", "Messdaten von Annahmen trennen", "Stabilität und Begrenzungen berücksichtigen"],
                ausgabeformate: ["Regelungskonzept", "Blockstruktur als Text", "Analyse-und-Abstimmplan"]
            },

            dreidruck: {
                name: "3D-Druck",
                rollen: ["Additive-Manufacturing-Engineer", "3D-Druck-Berater", "Konstruktionsingenieur"],
                ziele: ["Bauteil für 3D-Druck optimieren", "Druckverfahren auswählen", "Druckfehler analysieren"],
                anforderungen: ["Material und Druckverfahren berücksichtigen", "Bauteilorientierung beachten", "Stützstrukturen und Toleranzen berücksichtigen", "Maschinenwerte nicht erfinden"],
                ausgabeformate: ["3D-Druck-Konzept", "Druck-Checkliste", "Optimierungsvorschläge"]
            },

            prototyping: {
                name: "Prototyping",
                rollen: ["Prototyping Engineer", "Produktentwickler", "Rapid-Prototyping-Berater"],
                ziele: ["Prototyp planen", "Geeignete Prototyping-Methode wählen", "Versuchsaufbau entwickeln"],
                anforderungen: ["Zu prüfende Hypothese definieren", "Prototyp nur so komplex wie nötig machen", "Messkriterien festlegen", "Kosten und Zeit berücksichtigen"],
                ausgabeformate: ["Prototypenplan", "Versuchsplan", "MVP-Hardware-Konzept"]
            },

            qualitaet: {
                name: "Qualitätssicherung",
                rollen: ["Qualitätsingenieur", "Quality Assurance Engineer", "Prüfplaner"],
                ziele: ["Qualitätsprüfung planen", "Prüfkriterien definieren", "Qualitätsproblem systematisch untersuchen"],
                anforderungen: ["Anforderungen in prüfbare Kriterien übersetzen", "Messmethode nennen", "Grenzwerte nicht erfinden", "Prüfumfang nach Risiko priorisieren"],
                ausgabeformate: ["Prüfplan", "Qualitätscheckliste", "Prüfkriterien-Tabelle"]
            },

            fehleranalyse: {
                name: "Fehleranalyse",
                rollen: ["Fehleranalyst", "Qualitätsingenieur", "Troubleshooting Engineer"],
                ziele: ["Technischen Fehler analysieren", "Fehlerursachen eingrenzen", "Prüfreihenfolge entwickeln"],
                anforderungen: ["Symptom und Ursache trennen", "Mit belegbaren Beobachtungen beginnen", "Wahrscheinlichkeiten kennzeichnen", "Prüfschritte nach Aufwand und Aussagekraft priorisieren"],
                ausgabeformate: ["Fehleranalyse", "Diagnoseplan", "Ursachen-und-Prüftabelle"]
            },

            ursachenanalyse: {
                name: "Ursachenanalyse",
                rollen: ["Root-Cause-Analysis-Experte", "Qualitätsingenieur", "Prozessanalyst"],
                ziele: ["Grundursache ermitteln", "Ursachenkette strukturieren", "Wiederholfehler vermeiden"],
                anforderungen: ["Beobachtung und Vermutung trennen", "Nicht bei erster plausibler Ursache stoppen", "Belege pro Ursache nennen", "Abstellmaßnahme und Ursache verknüpfen"],
                ausgabeformate: ["Root-Cause-Analyse", "5-Why-Struktur", "Ursache-Maßnahme-Tabelle"]
            },

            fmea: {
                name: "FMEA",
                rollen: ["FMEA-Moderator", "Qualitätsingenieur", "Risikoanalyst"],
                ziele: ["FMEA vorbereiten", "Fehlermöglichkeiten sammeln", "Technische Risiken priorisieren"],
                anforderungen: ["Funktion vor Fehler betrachten", "Fehlerfolge und Fehlerursache trennen", "Bewertungen nicht ohne Grundlage erfinden", "Maßnahmen mit Verantwortlichkeit verknüpfen"],
                ausgabeformate: ["FMEA-Tabelle", "Risikoliste", "Maßnahmenplan"]
            },

            dokumentation: {
                name: "Technische Dokumentation",
                rollen: ["Technischer Redakteur", "Dokumentationsingenieur", "Technical Writer"],
                ziele: ["Technische Dokumentation erstellen", "Anleitung strukturieren", "Bestehende Dokumentation verbessern"],
                anforderungen: ["Nur bekannte Funktionen dokumentieren", "Fachbegriffe konsistent verwenden", "Warnungen klar kennzeichnen", "Zielgruppe und Vorwissen berücksichtigen"],
                ausgabeformate: ["Technische Anleitung", "Dokumentationsstruktur", "Wartungs-oder-Bedienhinweise"]
            },

            lastenheft: {
                name: "Lastenheft & Pflichtenheft",
                rollen: ["Requirements Engineer", "Systemingenieur", "Technischer Projektberater"],
                ziele: ["Lastenheft erstellen", "Pflichtenheft strukturieren", "Kundenanforderungen in technische Umsetzung überführen"],
                anforderungen: ["Was und Wie klar unterscheiden", "Anforderungen eindeutig formulieren", "Keine fehlenden Anforderungen erfinden", "Abnahmekriterien definieren"],
                ausgabeformate: ["Lastenheft-Struktur", "Pflichtenheft", "Anforderungstabelle"]
            },

            anforderungen: {
                name: "Technische Anforderungen",
                rollen: ["Requirements Engineer", "System Engineer", "Produktentwickler"],
                ziele: ["Technische Anforderungen formulieren", "Anforderungen prüfbar machen", "Anforderungen strukturieren"],
                anforderungen: ["Eine Anforderung pro Aussage bevorzugen", "Messbare Kriterien verwenden", "Lösung und Anforderung unterscheiden", "Unklare Anforderungen kennzeichnen"],
                ausgabeformate: ["Anforderungsliste", "Requirements-Tabelle", "Anforderungen mit Akzeptanzkriterien"]
            },

            recherche: {
                name: "Technische Recherche",
                rollen: ["Technischer Research Analyst", "Engineering Consultant", "Technologie-Scout"],
                ziele: ["Technische Lösung recherchieren", "Technologien vergleichen", "Technische Informationen prüfen"],
                anforderungen: ["Quellenbedarf kenntlich machen", "Herstellerangaben und unabhängige Informationen unterscheiden", "Keine technischen Werte erfinden", "Aktualität berücksichtigen"],
                ausgabeformate: ["Technische Recherche", "Technologievergleich", "Quellen-und-Ergebnisübersicht"]
            },

            problemloesung: {
                name: "Technische Problemlösung",
                rollen: ["Engineering Problem Solver", "Systemingenieur", "Technischer Berater"],
                ziele: ["Technisches Problem lösen", "Lösungsvarianten entwickeln", "Beste Lösung systematisch auswählen"],
                anforderungen: ["Problem präzise definieren", "Randbedingungen berücksichtigen", "Mehrere Lösungsansätze prüfen", "Risiken und offene Punkte nennen"],
                ausgabeformate: ["Lösungsanalyse", "Variantenmatrix", "Technischer Aktionsplan"]
            },

            ideen: {
                name: "Engineering-Ideen",
                rollen: ["Engineering-Innovationsberater", "Produktentwickler", "Creative Engineer"],
                ziele: ["Technische Ideen entwickeln", "Alternative Konstruktionsprinzipien finden", "Innovative Lösungsansätze erzeugen"],
                anforderungen: ["Mehrere unterschiedliche Prinzipien entwickeln", "Physikalische Umsetzbarkeit berücksichtigen", "Aufwand grob einschätzen", "Unsichere Konzepte als Ideen kennzeichnen"],
                ausgabeformate: ["10 Engineering-Ideen", "Konzeptvarianten", "Ideenmatrix"]
            }
        }
    },


    // ==================================================
    // 11. DATEN, EXCEL & ANALYSE
    // ==================================================

    datenAnalyse: {

        name: "Daten, Excel & Analyse",
        icon: "📊",

        unterkategorien: {

            excel: {
                name: "Excel",
                rollen: ["Excel-Experte", "Datenanalyst", "Office-Datenberater"],
                ziele: ["Excel-Aufgabe lösen", "Arbeitsmappe verbessern", "Datenprozess in Excel strukturieren"],
                anforderungen: ["Vorhandene Tabellenstruktur berücksichtigen", "Formeln nachvollziehbar halten", "Keine vorhandenen Daten ungefragt verändern", "Excel-Version berücksichtigen, wenn relevant"],
                ausgabeformate: ["Excel-Lösung", "Schritt-für-Schritt-Anleitung", "Formeln plus Erklärung"]
            },

            formeln: {
                name: "Formeln",
                rollen: ["Excel-Formel-Experte", "Datenanalyst", "Spreadsheet Consultant"],
                ziele: ["Excel-Formel erstellen", "Fehlerhafte Formel korrigieren", "Komplexe Formel vereinfachen"],
                anforderungen: ["Zellbereiche exakt berücksichtigen", "Trennzeichen und Sprachversion beachten", "Fehlerwerte behandeln", "Formellogik erklären"],
                ausgabeformate: ["Fertige Formel", "Formel plus Erklärung", "Alternative Formeln"]
            },

            pivot: {
                name: "Pivot-Tabellen",
                rollen: ["Excel-Pivot-Experte", "Datenanalyst", "Reporting-Berater"],
                ziele: ["Pivot-Tabelle erstellen", "Daten sinnvoll gruppieren", "Pivot-Auswertung verbessern"],
                anforderungen: ["Datenfelder korrekt zuordnen", "Aggregation bewusst wählen", "Filter und Gruppierungen erklären", "Quelldatenstruktur berücksichtigen"],
                ausgabeformate: ["Pivot-Aufbau", "Feldzuordnung", "Schritt-für-Schritt-Anleitung"]
            },

            diagramme: {
                name: "Diagramme",
                rollen: ["Datenvisualisierungs-Experte", "Excel-Berater", "Informationsdesigner"],
                ziele: ["Passendes Diagramm auswählen", "Diagramm verständlicher machen", "Datenvergleich visualisieren"],
                anforderungen: ["Diagrammtyp an Aussage ausrichten", "Achsen korrekt beschriften", "Irreführende Skalierungen vermeiden", "Unnötige Elemente reduzieren"],
                ausgabeformate: ["Diagrammempfehlung", "Visualisierungskonzept", "Schritt-für-Schritt-Erstellung"]
            },

            bereinigung: {
                name: "Datenbereinigung",
                rollen: ["Data-Cleaning-Analyst", "Datenanalyst", "Excel-Datenexperte"],
                ziele: ["Daten bereinigen", "Fehlerhafte Werte erkennen", "Dubletten und Inkonsistenzen behandeln"],
                anforderungen: ["Originaldaten schützen", "Bereinigungsregeln dokumentieren", "Fehlende Werte nicht ungefragt ersetzen", "Änderungen nachvollziehbar machen"],
                ausgabeformate: ["Bereinigungsplan", "Regelliste", "Vorher-Nachher-Struktur"]
            },

            aufbereitung: {
                name: "Datenaufbereitung",
                rollen: ["Data Preparation Specialist", "Datenanalyst", "ETL-Berater"],
                ziele: ["Rohdaten analysierbar machen", "Daten strukturieren", "Mehrere Datenquellen vorbereiten"],
                anforderungen: ["Zielstruktur definieren", "Datentypen berücksichtigen", "Transformationen dokumentieren", "Originalwerte nicht unbegründet verändern"],
                ausgabeformate: ["Aufbereitungsworkflow", "Transformationsplan", "Zieldatenstruktur"]
            },

            analyse: {
                name: "Datenanalyse",
                rollen: ["Datenanalyst", "Business Analyst", "Statistical Analyst"],
                ziele: ["Daten analysieren", "Muster und Unterschiede erkennen", "Entscheidungsrelevante Erkenntnisse ableiten"],
                anforderungen: ["Nur bereitgestellte Daten als Fakten verwenden", "Berechnung und Interpretation trennen", "Fehlende Daten kennzeichnen", "Keine Kausalität ohne Beleg behaupten"],
                ausgabeformate: ["Datenanalyse", "Kernaussagen plus Kennzahlen", "Analysebericht"]
            },

            statistik: {
                name: "Statistische Auswertung",
                rollen: ["Statistiker", "Datenanalyst", "Statistical Consultant"],
                ziele: ["Daten statistisch auswerten", "Passende statistische Methode auswählen", "Ergebnis korrekt interpretieren"],
                anforderungen: ["Stichprobengröße berücksichtigen", "Voraussetzungen der Methode prüfen", "Signifikanz und praktische Relevanz unterscheiden", "Keine Sicherheit über Datenlage hinaus behaupten"],
                ausgabeformate: ["Statistische Auswertung", "Methoden-und-Ergebnis-Tabelle", "Interpretation"]
            },

            kennzahlen: {
                name: "Kennzahlen",
                rollen: ["KPI-Analyst", "Business Analyst", "Controller"],
                ziele: ["Kennzahlen definieren", "Passende KPIs auswählen", "Kennzahlensystem verbessern"],
                anforderungen: ["Kennzahl eindeutig definieren", "Berechnungsformel nennen", "Datenquelle berücksichtigen", "Kennzahl am tatsächlichen Ziel ausrichten"],
                ausgabeformate: ["KPI-Tabelle", "Kennzahlensystem", "Kennzahlen mit Formeln"]
            },

            dashboards: {
                name: "Dashboards",
                rollen: ["Dashboard-Designer", "BI-Analyst", "Data Visualization Specialist"],
                ziele: ["Dashboard entwickeln", "Kennzahlen übersichtlich darstellen", "Bestehendes Dashboard verbessern"],
                anforderungen: ["Wichtigste Kennzahlen priorisieren", "Informationsüberladung vermeiden", "Filter und Zeitraum klar anzeigen", "Diagramme nur bei Informationsgewinn verwenden"],
                ausgabeformate: ["Dashboard-Konzept", "Wireframe", "KPI-und-Visualisierungsplan"]
            },

            berichte: {
                name: "Berichte",
                rollen: ["Reporting Analyst", "Business Analyst", "Datenredakteur"],
                ziele: ["Datenbericht erstellen", "Analyseergebnisse zusammenfassen", "Managementbericht strukturieren"],
                anforderungen: ["Fakten und Interpretation trennen", "Wichtigste Ergebnisse priorisieren", "Zeitraum nennen", "Fehlende Daten kennzeichnen"],
                ausgabeformate: ["Analysebericht", "Management Summary", "Strukturierter Datenbericht"]
            },

            tabellen: {
                name: "Tabellen strukturieren",
                rollen: ["Spreadsheet Designer", "Datenorganisations-Experte", "Excel-Berater"],
                ziele: ["Tabelle übersichtlicher strukturieren", "Dateneingabe verbessern", "Tabelle für Analyse vorbereiten"],
                anforderungen: ["Eine Zeile pro Datensatz bevorzugen", "Eindeutige Spaltenüberschriften verwenden", "Zusammengeführte Zellen in Datentabellen vermeiden", "Datentypen konsistent halten"],
                ausgabeformate: ["Tabellenstruktur", "Spaltenkonzept", "Vorher-Nachher-Aufbau"]
            },

            vergleichen: {
                name: "Daten vergleichen",
                rollen: ["Datenanalyst", "Vergleichsanalyst", "Business Analyst"],
                ziele: ["Datensätze vergleichen", "Abweichungen finden", "Unterschiede zwischen Zeiträumen analysieren"],
                anforderungen: ["Gleiche Vergleichsbasis verwenden", "Absolute und relative Unterschiede trennen", "Fehlende Werte berücksichtigen", "Ursachen nicht ohne Beleg behaupten"],
                ausgabeformate: ["Vergleichstabelle", "Abweichungsanalyse", "Kernaussagen"]
            },

            trends: {
                name: "Trends erkennen",
                rollen: ["Trend Analyst", "Datenanalyst", "Business Intelligence Analyst"],
                ziele: ["Trends in Daten erkennen", "Zeitliche Entwicklung analysieren", "Trendwechsel identifizieren"],
                anforderungen: ["Zeitraum berücksichtigen", "Ausreißer prüfen", "Trend und kurzfristige Schwankung unterscheiden", "Ursachen als Hypothesen kennzeichnen"],
                ausgabeformate: ["Trendanalyse", "Zeitreihenübersicht", "Trendbericht"]
            },

            prognosen: {
                name: "Prognosen",
                rollen: ["Forecasting Analyst", "Datenanalyst", "Business Planner"],
                ziele: ["Prognose erstellen", "Szenarien entwickeln", "Zukünftige Entwicklung abschätzen"],
                anforderungen: ["Datenhistorie berücksichtigen", "Annahmen transparent nennen", "Unsicherheitsbereich berücksichtigen", "Prognose nicht als sichere Zukunft darstellen"],
                ausgabeformate: ["Forecast", "Szenariovergleich", "Prognose mit Annahmen"]
            },

            sql: {
                name: "SQL",
                rollen: ["SQL-Analyst", "Datenbankentwickler", "Data Engineer"],
                ziele: ["SQL-Abfrage erstellen", "Daten analysieren", "Abfrage verbessern"],
                anforderungen: ["Datenbanksystem berücksichtigen", "Tabellen- und Spaltennamen exakt verwenden", "Keine unbekannten Felder erfinden", "Datenändernde Befehle klar kennzeichnen"],
                ausgabeformate: ["SQL-Abfrage", "SQL plus Erklärung", "Optimierte Abfrage"]
            },

            datenbanken: {
                name: "Datenbanken",
                rollen: ["Database Analyst", "Datenbankarchitekt", "Data Engineer"],
                ziele: ["Datenbank strukturieren", "Datenmodell entwickeln", "Bestehendes Schema analysieren"],
                anforderungen: ["Entitäten und Beziehungen definieren", "Datentypen sinnvoll wählen", "Datenintegrität berücksichtigen", "Bestehende Daten bei Änderungen berücksichtigen"],
                ausgabeformate: ["Datenmodell", "Tabellenstruktur", "ER-Modell als Text"]
            },

            csv: {
                name: "CSV-Dateien",
                rollen: ["Datenanalyst", "Data Preparation Specialist", "CSV-Datenberater"],
                ziele: ["CSV-Datei aufbereiten", "CSV-Probleme beheben", "CSV-Daten in anderes System übertragen"],
                anforderungen: ["Trennzeichen und Encoding berücksichtigen", "Spaltenstruktur prüfen", "Datentypen erhalten", "Originaldatei schützen"],
                ausgabeformate: ["CSV-Bereinigungsplan", "Import-Export-Anleitung", "Transformationsschritte"]
            },

            powerQuery: {
                name: "Power Query",
                rollen: ["Power-Query-Experte", "Excel-Datenanalyst", "ETL-Berater"],
                ziele: ["Power-Query-Abfrage entwickeln", "Daten automatisch aufbereiten", "Mehrere Datenquellen verbinden"],
                anforderungen: ["Quelldaten nicht verändern", "Transformationsschritte nachvollziehbar halten", "Datentypen explizit prüfen", "Aktualisierung berücksichtigen"],
                ausgabeformate: ["Power-Query-Workflow", "Transformationsschritte", "M-Code plus Erklärung"]
            },

            powerBI: {
                name: "Power BI",
                rollen: ["Power-BI-Entwickler", "BI-Analyst", "Dashboard Consultant"],
                ziele: ["Power-BI-Bericht entwickeln", "Datenmodell verbessern", "Dashboard und Kennzahlen aufbauen"],
                anforderungen: ["Datenmodell vor Visualisierung strukturieren", "Beziehungen korrekt definieren", "Kennzahlen nachvollziehbar berechnen", "Filterkontext berücksichtigen"],
                ausgabeformate: ["Power-BI-Konzept", "Datenmodellplan", "Dashboard-und-KPI-Struktur"]
            },

            visualisierung: {
                name: "Datenvisualisierung",
                rollen: ["Data Visualization Designer", "Datenanalyst", "Informationsdesigner"],
                ziele: ["Daten verständlich visualisieren", "Passenden Diagrammtyp auswählen", "Visualisierung verbessern"],
                anforderungen: ["Aussage vor Gestaltung definieren", "Skalen korrekt verwenden", "Farben nicht als einziges Signal einsetzen", "Unnötige Dekoration vermeiden"],
                ausgabeformate: ["Visualisierungskonzept", "Diagrammempfehlungen", "Dashboard-Skizze als Text"]
            },

            python: {
                name: "Python für Datenanalyse",
                rollen: ["Python Data Analyst", "Data Scientist", "Python-Entwickler"],
                ziele: ["Daten mit Python analysieren", "Analyse-Skript erstellen", "Datenaufbereitung automatisieren"],
                anforderungen: ["Python-Version und Bibliotheken berücksichtigen", "Originaldaten schützen", "Berechnungen reproduzierbar machen", "Fehler und fehlende Werte behandeln"],
                ausgabeformate: ["Python-Skript", "Analyse-Code", "Code plus Ergebnisinterpretation"]
            },

            automatisch: {
                name: "Automatische Auswertungen",
                rollen: ["Reporting-Automation-Analyst", "Data Automation Specialist", "BI-Berater"],
                ziele: ["Auswertung automatisieren", "Regelmäßigen Analyseprozess entwickeln", "Manuelles Reporting reduzieren"],
                anforderungen: ["Datenquellen definieren", "Berechnungsregeln festlegen", "Fehlerfälle berücksichtigen", "Ergebnis auf Plausibilität prüfen"],
                ausgabeformate: ["Automatisierungsworkflow", "Reporting-Pipeline", "Implementierungsplan"]
            },

            business: {
                name: "Geschäftskennzahlen",
                rollen: ["Business Analyst", "Controller", "KPI-Berater"],
                ziele: ["Geschäftskennzahlen analysieren", "Passende Business-KPIs auswählen", "Unternehmensentwicklung bewerten"],
                anforderungen: ["Kennzahlen eindeutig definieren", "Zeitraum und Vergleichsbasis nennen", "Absolute und relative Werte unterscheiden", "Ursachen nicht ohne Beleg behaupten"],
                ausgabeformate: ["Business-KPI-Übersicht", "Kennzahlenanalyse", "Management Summary"]
            },

            qualitaet: {
                name: "Qualitätsdaten",
                rollen: ["Quality Data Analyst", "Qualitätsingenieur", "Statistical Analyst"],
                ziele: ["Qualitätsdaten analysieren", "Fehlerschwerpunkte erkennen", "Qualitätsentwicklung bewerten"],
                anforderungen: ["Fehlerkategorien konsistent verwenden", "Stückzahlen und Bezugsgrößen berücksichtigen", "Ausreißer prüfen", "Ursachen und Korrelationen unterscheiden"],
                ausgabeformate: ["Qualitätsanalyse", "Fehler-Pareto", "Kennzahlenübersicht"]
            },

            messdaten: {
                name: "Messdaten",
                rollen: ["Messdatenanalyst", "Test Engineer", "Data Analyst"],
                ziele: ["Messdaten auswerten", "Messreihen vergleichen", "Auffälligkeiten erkennen"],
                anforderungen: ["Einheiten und Messbedingungen berücksichtigen", "Messunsicherheit beachten", "Ausreißer nicht ungeprüft löschen", "Messung und Interpretation trennen"],
                ausgabeformate: ["Messdatenanalyse", "Messreihenvergleich", "Prüfbericht"]
            },

            umfragen: {
                name: "Umfragen auswerten",
                rollen: ["Survey Analyst", "Datenanalyst", "Research Analyst"],
                ziele: ["Umfrage auswerten", "Antwortmuster erkennen", "Offene und geschlossene Antworten analysieren"],
                anforderungen: ["Stichprobengröße nennen", "Antwortausfälle berücksichtigen", "Prozentwerte mit Basis angeben", "Keine Repräsentativität ohne Grundlage behaupten"],
                ausgabeformate: ["Umfrageanalyse", "Ergebnistabelle", "Kernaussagen plus Einschränkungen"]
            },

            interpretieren: {
                name: "Daten interpretieren",
                rollen: ["Datenanalyst", "Business Analyst", "Statistical Interpreter"],
                ziele: ["Analyseergebnisse interpretieren", "Bedeutung von Kennzahlen erklären", "Mögliche Schlussfolgerungen ableiten"],
                anforderungen: ["Fakten und Interpretation trennen", "Keine Kausalität ohne Beleg behaupten", "Alternative Erklärungen berücksichtigen", "Unsicherheit deutlich nennen"],
                ausgabeformate: ["Interpretation", "Fakten-Schlussfolgerungen-Struktur", "Management-Einordnung"]
            },

            erklaeren: {
                name: "Analyseergebnisse erklären",
                rollen: ["Datenkommunikations-Experte", "Datenanalyst", "Informationsdesigner"],
                ziele: ["Analyse verständlich erklären", "Komplexe Kennzahlen vereinfachen", "Ergebnisse für Zielgruppe aufbereiten"],
                anforderungen: ["Vorwissen der Zielgruppe berücksichtigen", "Fachbegriffe erklären", "Kernaussage zuerst nennen", "Wichtige Einschränkungen nicht weglassen"],
                ausgabeformate: ["Einfache Erklärung", "Management Summary", "Erklärung mit Beispielen"]
            },

            vorlagen: {
                name: "Analysevorlagen",
                rollen: ["Analyse-Template-Designer", "Datenanalyst", "Reporting-Berater"],
                ziele: ["Wiederverwendbare Analysevorlage erstellen", "Reporting standardisieren", "Analyseprozess strukturieren"],
                anforderungen: ["Eingabefelder klar definieren", "Berechnung und Interpretation trennen", "Pflichtangaben kennzeichnen", "Vorlage für mehrere Datensätze nutzbar halten"],
                ausgabeformate: ["Analysevorlage", "Reporting-Template", "Vorlage plus Beispiel"]
            }
        }
    },


    // ==================================================
    // 12. PROJEKTMANAGEMENT & ORGANISATION
    // ==================================================

    projektmanagement: {

        name: "Projektmanagement & Organisation",
        icon: "📋",

        unterkategorien: {

            planung: {
                name: "Projektplanung",
                rollen: ["Projektmanager", "Projektplanungs-Berater", "PMO-Spezialist"],
                ziele: ["Projekt vollständig planen", "Projekt in Phasen strukturieren", "Bestehenden Projektplan verbessern"],
                anforderungen: ["Projektziel berücksichtigen", "Aufgaben und Abhängigkeiten darstellen", "Ressourcen und Termine berücksichtigen", "Risiken und offene Punkte kennzeichnen"],
                ausgabeformate: ["Projektplan", "Projekt-Roadmap", "Phasen-und-Aufgaben-Tabelle"]
            },

            ziele: {
                name: "Projektziele",
                rollen: ["Projektmanager", "Requirements-Berater", "Strategieberater"],
                ziele: ["Projektziele formulieren", "Unklare Ziele präzisieren", "Projektziele messbar machen"],
                anforderungen: ["Ziel und Maßnahme unterscheiden", "Erfolgskriterien definieren", "Realistische Zielsetzung verwenden", "Zielkonflikte kennzeichnen"],
                ausgabeformate: ["Zielstruktur", "SMART-Ziele", "Ziele mit Erfolgskriterien"]
            },

            struktur: {
                name: "Projektstruktur",
                rollen: ["Projektstrukturplaner", "Projektmanager", "PMO-Berater"],
                ziele: ["Projekt strukturieren", "Arbeitspakete entwickeln", "Projektübersicht verbessern"],
                anforderungen: ["Gesamtumfang berücksichtigen", "Arbeitspakete eindeutig abgrenzen", "Doppelungen vermeiden", "Abhängigkeiten berücksichtigen"],
                ausgabeformate: ["Projektstrukturplan", "Arbeitspaket-Liste", "Hierarchische Projektübersicht"]
            },

            meilensteine: {
                name: "Meilensteine",
                rollen: ["Projektmanager", "Terminplaner", "Projektcontroller"],
                ziele: ["Meilensteine definieren", "Projektfortschritt messbar machen", "Meilensteinplan verbessern"],
                anforderungen: ["Meilensteine als überprüfbare Ergebnisse formulieren", "Abhängigkeiten berücksichtigen", "Realistische Termine verwenden", "Kritische Meilensteine hervorheben"],
                ausgabeformate: ["Meilensteinplan", "Zeitstrahl", "Meilenstein-Tabelle"]
            },

            aufgaben: {
                name: "Aufgabenplanung",
                rollen: ["Projektmanager", "Task-Management-Berater", "Projektkoordinator"],
                ziele: ["Projektaufgaben planen", "Große Aufgaben zerlegen", "Aufgaben sinnvoll verteilen"],
                anforderungen: ["Aufgaben konkret formulieren", "Verantwortlichkeiten berücksichtigen", "Aufwand und Abhängigkeiten beachten", "Erledigungskriterien definieren"],
                ausgabeformate: ["Aufgabenliste", "Arbeitspaket-Tabelle", "Kanban-Vorbereitung"]
            },

            termine: {
                name: "Terminplanung",
                rollen: ["Terminplaner", "Projektmanager", "Scheduling Specialist"],
                ziele: ["Projekttermine planen", "Zeitplan optimieren", "Terminrisiken erkennen"],
                anforderungen: ["Abhängigkeiten berücksichtigen", "Pufferzeiten vorsehen", "Feste und flexible Termine unterscheiden", "Unrealistische Zeitannahmen kennzeichnen"],
                ausgabeformate: ["Terminplan", "Zeitstrahl", "Termin-und-Abhängigkeits-Tabelle"]
            },

            ressourcen: {
                name: "Ressourcenplanung",
                rollen: ["Ressourcenmanager", "Projektmanager", "Kapazitätsplaner"],
                ziele: ["Ressourcenbedarf planen", "Kapazitäten verteilen", "Überlastungen erkennen"],
                anforderungen: ["Verfügbarkeiten berücksichtigen", "Kompetenzen und Kapazitäten unterscheiden", "Engpässe kennzeichnen", "Keine unbekannten Kapazitäten erfinden"],
                ausgabeformate: ["Ressourcenplan", "Kapazitätstabelle", "Engpassanalyse"]
            },

            priorisierung: {
                name: "Priorisierung",
                rollen: ["Priorisierungsberater", "Projektmanager", "Produktivitätsberater"],
                ziele: ["Projektaufgaben priorisieren", "Wichtigste Maßnahmen bestimmen", "Konkurrierende Aufgaben bewerten"],
                anforderungen: ["Wirkung und Dringlichkeit unterscheiden", "Abhängigkeiten berücksichtigen", "Kriterien transparent anwenden", "Prioritäten begründen"],
                ausgabeformate: ["Prioritätenliste", "Priorisierungsmatrix", "Top-Maßnahmen"]
            },

            risiken: {
                name: "Risiken",
                rollen: ["Risikomanager", "Projektmanager", "Risk Analyst"],
                ziele: ["Projektrisiken identifizieren", "Risiken bewerten", "Gegenmaßnahmen entwickeln"],
                anforderungen: ["Ursache, Risiko und Auswirkung trennen", "Eintritt und Auswirkung bewerten", "Annahmen kennzeichnen", "Maßnahmen klar zuordnen"],
                ausgabeformate: ["Risikoregister", "Risikomatrix", "Risiken-und-Maßnahmen-Tabelle"]
            },

            chancen: {
                name: "Chancen",
                rollen: ["Projektmanager", "Chancenmanager", "Strategieberater"],
                ziele: ["Projektchancen erkennen", "Positive Möglichkeiten bewerten", "Chancen gezielt nutzen"],
                anforderungen: ["Chancen konkret beschreiben", "Nutzen und Aufwand bewerten", "Unsichere Vorteile kennzeichnen", "Maßnahmen zur Nutzung definieren"],
                ausgabeformate: ["Chancenregister", "Chancenmatrix", "Maßnahmenliste"]
            },

            status: {
                name: "Projektstatus",
                rollen: ["Projektmanager", "PMO-Berater", "Projektcontroller"],
                ziele: ["Projektstatus zusammenfassen", "Abweichungen erkennen", "Management-Status erstellen"],
                anforderungen: ["Nur bekannte Projektdaten verwenden", "Plan und Ist unterscheiden", "Probleme und Risiken hervorheben", "Nächste Schritte nennen"],
                ausgabeformate: ["Projektstatusbericht", "Ampelübersicht", "Management Summary"]
            },

            berichte: {
                name: "Projektberichte",
                rollen: ["Projektmanager", "Projektcontroller", "Business-Redakteur"],
                ziele: ["Projektbericht erstellen", "Projektinformationen verdichten", "Berichtsstruktur standardisieren"],
                anforderungen: ["Berichtszeitraum nennen", "Fakten und Bewertung trennen", "Abweichungen transparent darstellen", "Entscheidungsbedarf hervorheben"],
                ausgabeformate: ["Projektbericht", "Managementbericht", "Statusübersicht"]
            },

            besprechungen: {
                name: "Besprechungen",
                rollen: ["Meeting-Moderator", "Projektmanager", "Facilitator"],
                ziele: ["Projektbesprechung vorbereiten", "Meeting effizient strukturieren", "Besprechungsablauf verbessern"],
                anforderungen: ["Meetingziel definieren", "Nur notwendige Teilnehmer berücksichtigen", "Zeit je Thema einplanen", "Entscheidungen und Aufgaben vorsehen"],
                ausgabeformate: ["Meetingplan", "Agenda", "Moderationsleitfaden"]
            },

            agenda: {
                name: "Meeting-Agenda",
                rollen: ["Meeting-Moderator", "Projektkoordinator", "Projektmanager"],
                ziele: ["Agenda erstellen", "Themen priorisieren", "Besprechungszeit strukturieren"],
                anforderungen: ["Ziel des Meetings nennen", "Themen logisch anordnen", "Zeitblöcke festlegen", "Entscheidungspunkte markieren"],
                ausgabeformate: ["Meeting-Agenda", "Agenda mit Zeitblöcken", "Kurzagenda"]
            },

            protokolle: {
                name: "Protokolle",
                rollen: ["Protokollführer", "Projektkoordinator", "Business-Redakteur"],
                ziele: ["Meetingprotokoll erstellen", "Entscheidungen dokumentieren", "Besprechungsnotizen strukturieren"],
                anforderungen: ["Nur tatsächlich besprochene Inhalte verwenden", "Entscheidungen und Diskussion trennen", "Aufgaben mit Verantwortlichen festhalten", "Offene Punkte kennzeichnen"],
                ausgabeformate: ["Meetingprotokoll", "Entscheidungsprotokoll", "Kurzprotokoll"]
            },

            meetingAufgaben: {
                name: "Aufgaben aus Meetings",
                rollen: ["Projektkoordinator", "Meeting-Assistent", "Projektmanager"],
                ziele: ["Aufgaben aus Meeting extrahieren", "Verantwortlichkeiten zuordnen", "Nachverfolgung vorbereiten"],
                anforderungen: ["Keine Aufgaben hinzuerfinden", "Verantwortliche nur bei vorhandener Information nennen", "Terminangaben exakt übernehmen", "Offene Zuordnungen kennzeichnen"],
                ausgabeformate: ["Aufgabenliste", "Action-Item-Tabelle", "Follow-up-Liste"]
            },

            stakeholder: {
                name: "Stakeholder",
                rollen: ["Stakeholder-Manager", "Projektmanager", "Kommunikationsberater"],
                ziele: ["Stakeholder analysieren", "Stakeholderstrategie entwickeln", "Kommunikationsbedarf bestimmen"],
                anforderungen: ["Bekannte Interessen verwenden", "Annahmen kennzeichnen", "Einfluss und Betroffenheit unterscheiden", "Kommunikation zielgruppengerecht planen"],
                ausgabeformate: ["Stakeholder-Matrix", "Stakeholderplan", "Kommunikationsübersicht"]
            },

            kommunikation: {
                name: "Kommunikation im Projekt",
                rollen: ["Projektkommunikations-Berater", "Projektmanager", "Stakeholder-Manager"],
                ziele: ["Projektkommunikation planen", "Informationsfluss verbessern", "Kommunikationsprobleme reduzieren"],
                anforderungen: ["Zielgruppen berücksichtigen", "Kanäle und Frequenz definieren", "Verantwortlichkeiten festlegen", "Vertrauliche Informationen berücksichtigen"],
                ausgabeformate: ["Kommunikationsplan", "Informationsmatrix", "Kommunikations-Roadmap"]
            },

            entscheidungen: {
                name: "Entscheidungsdokumentation",
                rollen: ["Projektmanager", "Decision Analyst", "PMO-Spezialist"],
                ziele: ["Projektentscheidung dokumentieren", "Entscheidungsgrundlage strukturieren", "Entscheidungen nachvollziehbar machen"],
                anforderungen: ["Problem und Entscheidung trennen", "Alternativen nennen", "Kriterien dokumentieren", "Offene Annahmen festhalten"],
                ausgabeformate: ["Decision Log", "Entscheidungsvorlage", "Entscheidungsprotokoll"]
            },

            aenderungen: {
                name: "Änderungsmanagement",
                rollen: ["Change Manager", "Projektmanager", "Requirements Manager"],
                ziele: ["Projektänderung bewerten", "Änderungsprozess strukturieren", "Auswirkungen einer Änderung analysieren"],
                anforderungen: ["Ausgangszustand dokumentieren", "Auswirkungen auf Termin, Kosten und Umfang prüfen", "Abhängigkeiten berücksichtigen", "Freigabestatus festhalten"],
                ausgabeformate: ["Change Request", "Änderungsanalyse", "Impact-Assessment"]
            },

            probleme: {
                name: "Projektprobleme",
                rollen: ["Projektmanager", "Problemlösungs-Moderator", "Projektanalyst"],
                ziele: ["Projektproblem analysieren", "Lösungsmaßnahmen entwickeln", "Problem eskalationsfähig dokumentieren"],
                anforderungen: ["Symptom und Ursache unterscheiden", "Auswirkung beschreiben", "Sofort- und Dauermaßnahmen trennen", "Verantwortlichkeiten benennen"],
                ausgabeformate: ["Problembericht", "Maßnahmenplan", "Problem-Ursache-Lösung-Tabelle"]
            },

            eskalationen: {
                name: "Eskalationen",
                rollen: ["Projektmanager", "Eskalationsmanager", "Kommunikationsberater"],
                ziele: ["Eskalation vorbereiten", "Kritisches Problem sachlich darstellen", "Entscheidung einfordern"],
                anforderungen: ["Fakten sachlich darstellen", "Auswirkung und Dringlichkeit nennen", "Bisherige Maßnahmen dokumentieren", "Benötigte Entscheidung konkret formulieren"],
                ausgabeformate: ["Eskalationsbericht", "Management-Mail", "Entscheidungsvorlage"]
            },

            lessons: {
                name: "Lessons Learned",
                rollen: ["Lessons-Learned-Moderator", "Projektmanager", "Continuous-Improvement-Berater"],
                ziele: ["Erfahrungen aus Projekt sichern", "Verbesserungspotenziale erkennen", "Lessons-Learned-Workshop vorbereiten"],
                anforderungen: ["Positive und negative Erfahrungen betrachten", "Personenbezogene Schuldzuweisungen vermeiden", "Konkrete Ursachen und Maßnahmen ableiten", "Übertragbarkeit bewerten"],
                ausgabeformate: ["Lessons-Learned-Liste", "Workshop-Struktur", "Erkenntnis-Maßnahmen-Tabelle"]
            },

            checklisten: {
                name: "Checklisten",
                rollen: ["Projektmanager", "Qualitätsberater", "Prozessdesigner"],
                ziele: ["Projektcheckliste erstellen", "Projektphase absichern", "Wiederkehrende Projektaufgabe standardisieren"],
                anforderungen: ["Prüfbare Punkte verwenden", "Nur relevante Schritte aufnehmen", "Logische Reihenfolge verwenden", "Kritische Punkte hervorheben"],
                ausgabeformate: ["Projektcheckliste", "Phasencheckliste", "Prüfliste"]
            },

            zeitmanagement: {
                name: "Zeitmanagement",
                rollen: ["Zeitmanagement-Coach", "Projektmanager", "Produktivitätsberater"],
                ziele: ["Projektzeit besser nutzen", "Zeitplanung verbessern", "Verzögerungen reduzieren"],
                anforderungen: ["Feste Termine berücksichtigen", "Prioritäten beachten", "Puffer einplanen", "Multitasking nicht unnötig fördern"],
                ausgabeformate: ["Zeitplan", "Prioritätenplan", "Wochenstruktur"]
            },

            kanban: {
                name: "Kanban",
                rollen: ["Kanban-Coach", "Agile Coach", "Projektmanager"],
                ziele: ["Kanban-System entwickeln", "Arbeitsfluss visualisieren", "Work in Progress begrenzen"],
                anforderungen: ["Workflow-Zustände eindeutig definieren", "WIP-Limits sinnvoll wählen", "Blockaden sichtbar machen", "Board nicht unnötig komplex gestalten"],
                ausgabeformate: ["Kanban-Board-Struktur", "Workflow-Regeln", "Spalten-und-WIP-Konzept"]
            },

            scrum: {
                name: "Scrum",
                rollen: ["Scrum Master", "Agile Coach", "Product Owner Coach"],
                ziele: ["Scrum-Arbeitsweise strukturieren", "Sprint planen", "Scrum-Probleme analysieren"],
                anforderungen: ["Scrum-Rollen unterscheiden", "Sprintziel definieren", "Backlog und Sprint Backlog trennen", "Scrum nicht unnötig mit anderen Methoden vermischen"],
                ausgabeformate: ["Sprintplan", "Scrum-Workflow", "Backlog-Struktur"]
            },

            agil: {
                name: "Agile Methoden",
                rollen: ["Agile Coach", "Projektmanager", "Organisationsberater"],
                ziele: ["Agile Arbeitsweise auswählen", "Projekt agiler strukturieren", "Iteratives Vorgehen entwickeln"],
                anforderungen: ["Projektumfeld berücksichtigen", "Feedbackzyklen einplanen", "Methoden nicht dogmatisch anwenden", "Transparente Priorisierung vorsehen"],
                ausgabeformate: ["Agiles Vorgehensmodell", "Iterationsplan", "Methodenvergleich"]
            },

            klassisch: {
                name: "Klassische Projektmethoden",
                rollen: ["Projektmanager", "PMO-Berater", "Projektplaner"],
                ziele: ["Klassisches Projekt strukturieren", "Phasenmodell entwickeln", "Projektsteuerung planen"],
                anforderungen: ["Phasen und Freigaben definieren", "Dokumentationsbedarf berücksichtigen", "Abhängigkeiten berücksichtigen", "Änderungsprozess vorsehen"],
                ausgabeformate: ["Phasenplan", "Projektvorgehen", "Meilenstein-Roadmap"]
            },

            abschluss: {
                name: "Projektabschluss",
                rollen: ["Projektmanager", "PMO-Spezialist", "Projektcontroller"],
                ziele: ["Projektabschluss vorbereiten", "Offene Punkte schließen", "Projekt formal abschließen"],
                anforderungen: ["Liefergegenstände prüfen", "Offene Aufgaben dokumentieren", "Abnahme und Übergabe berücksichtigen", "Lessons Learned festhalten"],
                ausgabeformate: ["Projektabschluss-Checkliste", "Abschlussbericht", "Übergabeplan"]
            }
        }
    },

    // ==================================================
    // 13. RECHERCHE & WISSEN
    // ==================================================

    recherche: {

        name: "Recherche & Wissen",
        icon: "🔎",

        unterkategorien: {

            allgemein: {
                name: "Allgemeine Recherche",
                rollen: ["Rechercheur", "Research Analyst", "Informationsspezialist"],
                ziele: ["Thema recherchieren", "Überblick erstellen", "Wichtige Informationen zusammentragen"],
                anforderungen: ["Recherchefrage klar definieren", "Fakten und Interpretation trennen", "Unsichere Informationen kennzeichnen", "Informationslücken nennen"],
                ausgabeformate: ["Rechercheübersicht", "Strukturierter Bericht", "Kernaussagen"]
            },

            tiefe: {
                name: "Tiefenrecherche",
                rollen: ["Senior Research Analyst", "Recherche-Spezialist", "Fachanalyst"],
                ziele: ["Thema tiefgehend untersuchen", "Mehrere Perspektiven vergleichen", "Komplexe Sachlage strukturieren"],
                anforderungen: ["Mehrere relevante Quellenarten berücksichtigen", "Widersprüche herausarbeiten", "Beleglage bewerten", "Offene Fragen nennen"],
                ausgabeformate: ["Tiefenrecherche", "Analysebericht", "Quellen-und-Erkenntnis-Matrix"]
            },

            web: {
                name: "Web-Recherche",
                rollen: ["Web Researcher", "Informationsanalyst", "Recherche-Spezialist"],
                ziele: ["Informationen im Web finden", "Aktuelle Informationen recherchieren", "Webquellen vergleichen"],
                anforderungen: ["Aktualität berücksichtigen", "Quelle und Behauptung zuordnen", "Werbliche Inhalte kritisch bewerten", "Keine Quellen erfinden"],
                ausgabeformate: ["Web-Recherche", "Quellenliste mit Erkenntnissen", "Recherchebericht"]
            },

            wissenschaft: {
                name: "Wissenschaftliche Recherche",
                rollen: ["Wissenschaftlicher Rechercheur", "Research Analyst", "Literaturrecherche-Spezialist"],
                ziele: ["Wissenschaftliche Literatur recherchieren", "Forschungsstand zusammenfassen", "Studien vergleichen"],
                anforderungen: ["Peer-Review und Publikationstyp berücksichtigen", "Studienergebnis und Interpretation trennen", "Keine Studien erfinden", "Methodische Grenzen nennen"],
                ausgabeformate: ["Literaturübersicht", "Studienvergleich", "Forschungsstand"]
            },

            technisch: {
                name: "Technische Recherche",
                rollen: ["Technischer Research Analyst", "Engineering Researcher", "Technologie-Scout"],
                ziele: ["Technische Information recherchieren", "Technologien vergleichen", "Technische Lösungsmöglichkeiten prüfen"],
                anforderungen: ["Technische Werte nicht erfinden", "Herstellerangaben kennzeichnen", "Versionen und Standards berücksichtigen", "Informationslücken nennen"],
                ausgabeformate: ["Technische Recherche", "Technologievergleich", "Technische Quellenübersicht"]
            },

            markt: {
                name: "Marktanalyse",
                rollen: ["Marktanalyst", "Market Researcher", "Strategieberater"],
                ziele: ["Markt untersuchen", "Marktstruktur verstehen", "Chancen und Risiken erkennen"],
                anforderungen: ["Region und Zeitraum berücksichtigen", "Marktzahlen nicht erfinden", "Fakten und Schätzungen trennen", "Datenlücken kennzeichnen"],
                ausgabeformate: ["Marktanalyse", "Marktübersicht", "Chancen-Risiken-Matrix"]
            },

            wettbewerb: {
                name: "Wettbewerbsanalyse",
                rollen: ["Wettbewerbsanalyst", "Market Intelligence Analyst", "Strategieberater"],
                ziele: ["Wettbewerber vergleichen", "Positionierungen untersuchen", "Unterschiede und Chancen erkennen"],
                anforderungen: ["Einheitliche Kriterien verwenden", "Keine Eigenschaften erfinden", "Quellenstand berücksichtigen", "Fakten und Interpretation trennen"],
                ausgabeformate: ["Wettbewerbstabelle", "Vergleichsmatrix", "Wettbewerbsbericht"]
            },

            produkte: {
                name: "Produktrecherche",
                rollen: ["Produktanalyst", "Research Specialist", "Kaufberater"],
                ziele: ["Produkte recherchieren", "Produkte vergleichen", "Passende Optionen identifizieren"],
                anforderungen: ["Anforderungen des Nutzers berücksichtigen", "Aktuelle Produktdaten prüfen", "Eigenschaften nicht erfinden", "Preis und Leistung getrennt bewerten"],
                ausgabeformate: ["Produktvergleich", "Shortlist", "Entscheidungsmatrix"]
            },

            quellenFinden: {
                name: "Quellen finden",
                rollen: ["Rechercheur", "Informationsspezialist", "Literaturrecherche-Berater"],
                ziele: ["Passende Quellen finden", "Primärquellen identifizieren", "Quellenbasis für Recherche aufbauen"],
                anforderungen: ["Primärquellen bevorzugen, wenn verfügbar", "Quellentyp nennen", "Keine Quelle erfinden", "Aktualität berücksichtigen"],
                ausgabeformate: ["Quellenliste", "Quellen nach Relevanz", "Quellenmatrix"]
            },

            quellenBewerten: {
                name: "Quellen bewerten",
                rollen: ["Quellenkritiker", "Research Analyst", "Informationskompetenz-Berater"],
                ziele: ["Quelle auf Vertrauenswürdigkeit prüfen", "Mehrere Quellen bewerten", "Schwächen einer Quelle erkennen"],
                anforderungen: ["Autorität, Aktualität und Belege prüfen", "Interessenkonflikte berücksichtigen", "Primär- und Sekundärquelle unterscheiden", "Bewertung begründen"],
                ausgabeformate: ["Quellenbewertung", "Bewertungsmatrix", "Ampelbewertung"]
            },

            fakten: {
                name: "Faktenprüfung",
                rollen: ["Faktenprüfer", "Research Analyst", "Verifikations-Spezialist"],
                ziele: ["Aussage überprüfen", "Fakten von Behauptungen trennen", "Fehlinformation erkennen"],
                anforderungen: ["Belege für jede prüfbare Aussage suchen", "Keine fehlenden Belege erfinden", "Unsicherheit kennzeichnen", "Widersprüchliche Quellen nennen"],
                ausgabeformate: ["Faktencheck", "Aussagen-Prüftabelle", "Verifikationsbericht"]
            },

            verifizieren: {
                name: "Aussagen verifizieren",
                rollen: ["Verifikationsanalyst", "Faktenprüfer", "Rechercheur"],
                ziele: ["Konkrete Aussage verifizieren", "Beleglage prüfen", "Aussage in Teilbehauptungen zerlegen"],
                anforderungen: ["Prüfbare Teilbehauptungen bilden", "Quellen direkt zuordnen", "Nicht belegbare Teile kennzeichnen", "Keine Gewissheit vortäuschen"],
                ausgabeformate: ["Verifikationsbericht", "Prüftabelle", "Aussage mit Status"]
            },

            studien: {
                name: "Studien verstehen",
                rollen: ["Wissenschaftsanalyst", "Research Methodology Advisor", "Studieninterpret"],
                ziele: ["Studie verständlich erklären", "Studienqualität einschätzen", "Ergebnisse korrekt interpretieren"],
                anforderungen: ["Studiendesign berücksichtigen", "Stichprobe und Grenzen nennen", "Korrelation und Kausalität unterscheiden", "Keine Schlussfolgerung über Studie hinaus ziehen"],
                ausgabeformate: ["Studienanalyse", "Methoden-Ergebnis-Zusammenfassung", "Kritische Einordnung"]
            },

            dokumente: {
                name: "Dokumente analysieren",
                rollen: ["Dokumentenanalyst", "Informationsanalyst", "Fachredakteur"],
                ziele: ["Dokument analysieren", "Wichtige Aussagen extrahieren", "Struktur und Inhalte bewerten"],
                anforderungen: ["Nur Dokumentinhalt als Quelle verwenden", "Keine fehlenden Inhalte ergänzen", "Zitate und Interpretation trennen", "Fundstellen nennen, wenn möglich"],
                ausgabeformate: ["Dokumentenanalyse", "Kernaussagen", "Strukturierte Übersicht"]
            },

            pdf: {
                name: "PDFs auswerten",
                rollen: ["PDF-Analyst", "Dokumentenanalyst", "Research Assistant"],
                ziele: ["PDF zusammenfassen", "Informationen aus PDF extrahieren", "PDF nach konkreten Fragen auswerten"],
                anforderungen: ["Nur sichtbaren PDF-Inhalt verwenden", "Tabellen und Abbildungen berücksichtigen", "Seitenbezug nennen, wenn möglich", "Unlesbare Inhalte kennzeichnen"],
                ausgabeformate: ["PDF-Auswertung", "Zusammenfassung", "Fragen-und-Antworten-Struktur"]
            },

            zusammenfassen: {
                name: "Informationen zusammenfassen",
                rollen: ["Informationsredakteur", "Research Analyst", "Zusammenfassungs-Spezialist"],
                ziele: ["Informationen verdichten", "Kernaussagen extrahieren", "Mehrere Quellen zusammenfassen"],
                anforderungen: ["Bedeutung erhalten", "Keine neuen Fakten hinzufügen", "Wichtiges priorisieren", "Widersprüche nicht glattbügeln"],
                ausgabeformate: ["Kurzzusammenfassung", "Kernaussagen", "Executive Summary"]
            },

            vergleichen: {
                name: "Informationen vergleichen",
                rollen: ["Vergleichsanalyst", "Research Analyst", "Informationsspezialist"],
                ziele: ["Mehrere Informationen vergleichen", "Unterschiede und Gemeinsamkeiten erkennen", "Vergleich strukturieren"],
                anforderungen: ["Einheitliche Kriterien verwenden", "Fehlende Informationen kennzeichnen", "Fakten und Bewertung trennen", "Keine Unterschiede erfinden"],
                ausgabeformate: ["Vergleichstabelle", "Gemeinsamkeiten-und-Unterschiede", "Bewertungsmatrix"]
            },

            widersprueche: {
                name: "Widersprüche erkennen",
                rollen: ["Kritischer Analyst", "Faktenprüfer", "Research Reviewer"],
                ziele: ["Widersprüche finden", "Unvereinbare Aussagen herausarbeiten", "Mögliche Erklärungen strukturieren"],
                anforderungen: ["Aussagen exakt gegenüberstellen", "Quelle und Kontext berücksichtigen", "Nicht vorschnell einen Widerspruch behaupten", "Auflösbarkeit kennzeichnen"],
                ausgabeformate: ["Widerspruchsliste", "Vergleichstabelle", "Konfliktanalyse"]
            },

            vorNachteile: {
                name: "Vor- und Nachteile",
                rollen: ["Entscheidungsanalyst", "Research Analyst", "Strategieberater"],
                ziele: ["Vor- und Nachteile analysieren", "Optionen ausgewogen bewerten", "Entscheidungsgrundlage schaffen"],
                anforderungen: ["Gleiche Kriterien verwenden", "Wirkung und Wahrscheinlichkeit unterscheiden", "Unbekannte Aspekte kennzeichnen", "Keine Seite künstlich bevorzugen"],
                ausgabeformate: ["Pro-und-Contra-Tabelle", "Bewertungsmatrix", "Ausgewogene Analyse"]
            },

            hintergrund: {
                name: "Hintergrundwissen",
                rollen: ["Fachredakteur", "Wissensvermittler", "Research Analyst"],
                ziele: ["Hintergrund eines Themas erklären", "Kontext schaffen", "Zusammenhänge verständlich darstellen"],
                anforderungen: ["Zeitlichen und sachlichen Kontext berücksichtigen", "Fakten und Deutung trennen", "Fachbegriffe erklären", "Unsicherheiten nennen"],
                ausgabeformate: ["Hintergrundartikel", "Kontextübersicht", "Erklärung in Abschnitten"]
            },

            chronologie: {
                name: "Chronologien erstellen",
                rollen: ["Research Analyst", "Chronologie-Redakteur", "Historischer Informationsanalyst"],
                ziele: ["Ereignisse chronologisch ordnen", "Zeitlichen Ablauf rekonstruieren", "Entwicklungen über Zeit darstellen"],
                anforderungen: ["Datumsangaben exakt übernehmen", "Unsichere Daten kennzeichnen", "Gleichzeitige Ereignisse unterscheiden", "Keine Ereignisse ergänzen"],
                ausgabeformate: ["Chronologie", "Zeitleiste", "Ereignistabelle"]
            },

            fachbegriffe: {
                name: "Fachbegriffe erklären",
                rollen: ["Fachredakteur", "Didaktischer Erklärer", "Terminologie-Experte"],
                ziele: ["Fachbegriff erklären", "Unterschiede ähnlicher Begriffe darstellen", "Terminologie verständlich machen"],
                anforderungen: ["Definition zuerst nennen", "Kontext berücksichtigen", "Beispiele verwenden", "Fachlich wichtige Einschränkungen erhalten"],
                ausgabeformate: ["Definition plus Beispiel", "Begriffsvergleich", "Kurzerklärungen"]
            },

            sammlungen: {
                name: "Wissenssammlungen",
                rollen: ["Knowledge Manager", "Informationsarchitekt", "Wissensredakteur"],
                ziele: ["Wissen sammeln", "Informationssammlung strukturieren", "Wissen langfristig auffindbar machen"],
                anforderungen: ["Einheitliche Kategorien verwenden", "Dubletten reduzieren", "Quelle oder Herkunft dokumentieren", "Veraltete Informationen kennzeichnen"],
                ausgabeformate: ["Wissensstruktur", "Sammlung nach Kategorien", "Wissenskatalog"]
            },

            faq: {
                name: "FAQ erstellen",
                rollen: ["FAQ-Redakteur", "Informationsdesigner", "Support-Content-Spezialist"],
                ziele: ["FAQ erstellen", "Häufige Fragen strukturieren", "Antworten verständlicher machen"],
                anforderungen: ["Fragen aus Nutzerperspektive formulieren", "Antworten direkt und konkret halten", "Keine unbekannten Informationen ergänzen", "Ähnliche Fragen zusammenführen"],
                ausgabeformate: ["FAQ", "Frage-Antwort-Liste", "FAQ nach Themen"]
            },

            wissensdatenbank: {
                name: "Wissensdatenbanken",
                rollen: ["Knowledge-Base-Architekt", "Informationsmanager", "Dokumentationsberater"],
                ziele: ["Wissensdatenbank planen", "Artikelstruktur entwickeln", "Wissen leichter auffindbar machen"],
                anforderungen: ["Kategorien und Suche berücksichtigen", "Artikel einheitlich strukturieren", "Versionierung vorsehen", "Zugriffsrechte berücksichtigen"],
                ausgabeformate: ["Knowledge-Base-Struktur", "Artikeltemplate", "Kategorienbaum"]
            },

            rechercheplan: {
                name: "Recherchepläne",
                rollen: ["Research Planner", "Rechercheur", "Informationsanalyst"],
                ziele: ["Recherche systematisch planen", "Recherche in Teilfragen zerlegen", "Quellenstrategie entwickeln"],
                anforderungen: ["Hauptfrage definieren", "Teilfragen priorisieren", "Geeignete Quellentypen zuordnen", "Abbruchkriterien festlegen"],
                ausgabeformate: ["Rechercheplan", "Fragen-und-Quellen-Matrix", "Recherche-Roadmap"]
            },

            fragen: {
                name: "Recherchefragen entwickeln",
                rollen: ["Research Designer", "Analyst", "Fragestellungs-Coach"],
                ziele: ["Gute Recherchefragen formulieren", "Thema in Teilfragen zerlegen", "Unklare Fragestellung präzisieren"],
                anforderungen: ["Fragen konkret und prüfbar formulieren", "Doppelungen vermeiden", "Faktenfragen und Bewertungsfragen unterscheiden", "Prioritäten setzen"],
                ausgabeformate: ["Recherchefragen-Liste", "Fragenhierarchie", "Priorisierte Fragen"]
            },

            struktur: {
                name: "Ergebnisse strukturieren",
                rollen: ["Informationsdesigner", "Research Analyst", "Fachredakteur"],
                ziele: ["Rechercheergebnisse strukturieren", "Komplexe Informationen ordnen", "Bericht logisch aufbauen"],
                anforderungen: ["Kernaussagen priorisieren", "Fakten und Interpretation trennen", "Doppelungen vermeiden", "Informationslücken sichtbar lassen"],
                ausgabeformate: ["Ergebnisstruktur", "Berichtsoutline", "Themenmatrix"]
            },

            quellenuebersicht: {
                name: "Quellenübersichten",
                rollen: ["Informationsspezialist", "Research Analyst", "Bibliografie-Redakteur"],
                ziele: ["Quellen übersichtlich darstellen", "Quellen nach Relevanz gruppieren", "Beleglage dokumentieren"],
                anforderungen: ["Quellentyp nennen", "Aktualität berücksichtigen", "Keine Quelle erfinden", "Relevanz kurz begründen"],
                ausgabeformate: ["Quellenübersicht", "Quellentabelle", "Annotierte Quellenliste"]
            },

            luecken: {
                name: "Wissenslücken erkennen",
                rollen: ["Research Analyst", "Gap-Analysis-Spezialist", "Kritischer Reviewer"],
                ziele: ["Fehlende Informationen erkennen", "Recherchebedarf identifizieren", "Unsicherheiten strukturieren"],
                anforderungen: ["Bekanntes und Unbekanntes trennen", "Nicht aus fehlenden Daten spekulieren", "Lücken nach Bedeutung priorisieren", "Konkrete nächste Recherchefragen ableiten"],
                ausgabeformate: ["Wissenslücken-Liste", "Gap-Analyse", "Offene-Fragen-Matrix"]
            }
        }
    },


    // ==================================================
    // 14. LERNEN & WEITERBILDUNG
    // ==================================================

    lernen: {

        name: "Lernen & Weiterbildung",
        icon: "🎓",

        unterkategorien: {

            lernplaene: {
                name: "Lernpläne",
                rollen: ["Lerncoach", "Didaktischer Planer", "Tutor"],
                ziele: ["Lernplan erstellen", "Thema systematisch lernen", "Lernzeit sinnvoll verteilen"],
                anforderungen: ["Kenntnisstand berücksichtigen", "Lernziel definieren", "Praxis und Wiederholung einplanen", "Realistische Zeitblöcke verwenden"],
                ausgabeformate: ["Lernplan", "Wochenplan", "Lern-Roadmap"]
            },

            thema: {
                name: "Neues Thema verstehen",
                rollen: ["Tutor", "Fachlehrer", "Didaktischer Erklärer"],
                ziele: ["Neues Thema verstehen", "Grundlagen aufbauen", "Zusammenhänge erkennen"],
                anforderungen: ["Vorwissen berücksichtigen", "Vom Einfachen zum Komplexen gehen", "Fachbegriffe erklären", "Beispiele verwenden"],
                ausgabeformate: ["Lektion", "Erklärung in Stufen", "Lernübersicht"]
            },

            einfach: {
                name: "Einfach erklären",
                rollen: ["Didaktischer Erklärer", "Tutor", "Wissensvermittler"],
                ziele: ["Komplexes Thema einfach erklären", "Fachwissen verständlich machen", "Grundprinzip vermitteln"],
                anforderungen: ["Einfache Sprache verwenden", "Wichtige Genauigkeit erhalten", "Alltagsbeispiele nutzen", "Unnötige Fachbegriffe vermeiden"],
                ausgabeformate: ["Einfache Erklärung", "Erklärung mit Beispiel", "Kurzfassung"]
            },

            tief: {
                name: "Fachlich tief erklären",
                rollen: ["Fachexperte", "Hochschul-Tutor", "Technischer Erklärer"],
                ziele: ["Thema detailliert verstehen", "Mechanismen und Zusammenhänge lernen", "Fachlich tiefer einsteigen"],
                anforderungen: ["Grundlagen nicht unnötig wiederholen", "Fachbegriffe korrekt verwenden", "Annahmen und Grenzen nennen", "Zusammenhänge systematisch erklären"],
                ausgabeformate: ["Fachliche Erklärung", "Vertiefungslektion", "Strukturierter Deep Dive"]
            },

            schrittweise: {
                name: "Schritt-für-Schritt-Lernen",
                rollen: ["Lerncoach", "Tutor", "Praxislehrer"],
                ziele: ["Thema schrittweise lernen", "Komplexe Aufgabe in Lernschritte zerlegen", "Lernfortschritt kontrollieren"],
                anforderungen: ["Nur einen sinnvollen Schritt nach dem anderen erklären", "Voraussetzungen prüfen", "Kurze Übungen einbauen", "Schwierigkeit langsam erhöhen"],
                ausgabeformate: ["Schritt-für-Schritt-Lektion", "Lernsequenz", "Übungspfad"]
            },

            uebungen: {
                name: "Übungen",
                rollen: ["Tutor", "Übungsdesigner", "Lerncoach"],
                ziele: ["Übungen erstellen", "Wissen praktisch anwenden", "Schwierigkeit steigern"],
                anforderungen: ["Aufgaben am Lernziel ausrichten", "Mehrere Schwierigkeitsstufen verwenden", "Lösung getrennt bereitstellen", "Typische Fehler berücksichtigen"],
                ausgabeformate: ["Übungsset", "Aufgaben plus Lösungen", "Praxisaufgaben"]
            },

            quiz: {
                name: "Quizfragen",
                rollen: ["Quiz-Designer", "Tutor", "Lerncoach"],
                ziele: ["Wissen abfragen", "Quiz erstellen", "Verständnis prüfen"],
                anforderungen: ["Fragen eindeutig formulieren", "Schwierigkeit mischen", "Antworten nicht verraten", "Erklärung nach Auflösung anbieten"],
                ausgabeformate: ["Quiz", "Multiple-Choice-Test", "Fragen mit Lösungsteil"]
            },

            karteikarten: {
                name: "Karteikarten",
                rollen: ["Lernkarten-Designer", "Tutor", "Lernmethoden-Coach"],
                ziele: ["Karteikarten erstellen", "Wissen wiederholbar machen", "Begriffe und Fakten lernen"],
                anforderungen: ["Eine Kernidee pro Karte verwenden", "Frage und Antwort klar trennen", "Antworten kurz halten", "Verständnisfragen mit Faktenkarten mischen"],
                ausgabeformate: ["Karteikarten", "Frage-Antwort-Liste", "Anki-ähnliches Format"]
            },

            pruefung: {
                name: "Prüfungsvorbereitung",
                rollen: ["Prüfungscoach", "Tutor", "Lernplaner"],
                ziele: ["Auf Prüfung vorbereiten", "Wissenslücken schließen", "Prüfungsstoff priorisieren"],
                anforderungen: ["Prüfungsformat berücksichtigen", "Verfügbare Zeit beachten", "Schwerpunkte priorisieren", "Wiederholung und Probeprüfung einplanen"],
                ausgabeformate: ["Prüfungslernplan", "Themenprioritäten", "Probeprüfung"]
            },

            zusammenfassungen: {
                name: "Zusammenfassungen",
                rollen: ["Lernredakteur", "Tutor", "Informationsdesigner"],
                ziele: ["Lernstoff zusammenfassen", "Kernaussagen extrahieren", "Stoff wiederholbar machen"],
                anforderungen: ["Nur Ausgangsmaterial verwenden", "Wichtige Zusammenhänge erhalten", "Details nach Relevanz reduzieren", "Fachbegriffe korrekt beibehalten"],
                ausgabeformate: ["Lernzusammenfassung", "Stichpunkte", "Kurz-und-Langfassung"]
            },

            lernzettel: {
                name: "Lernzettel",
                rollen: ["Lernzettel-Designer", "Tutor", "Informationsdesigner"],
                ziele: ["Lernzettel erstellen", "Prüfungsstoff kompakt strukturieren", "Wiederholung erleichtern"],
                anforderungen: ["Kernaussagen priorisieren", "Klare Überschriften verwenden", "Formeln und Definitionen hervorheben", "Überladung vermeiden"],
                ausgabeformate: ["Lernzettel", "Ein-Seiten-Übersicht", "Strukturierter Spickzettel zum Lernen"]
            },

            merkHilfen: {
                name: "Merkhilfen",
                rollen: ["Lerncoach", "Mnemonik-Berater", "Tutor"],
                ziele: ["Merkhilfe entwickeln", "Information leichter erinnerbar machen", "Komplexe Reihenfolge merken"],
                anforderungen: ["Merkhilfe zum Inhalt passend machen", "Einfach und einprägsam halten", "Falsche Vereinfachungen vermeiden", "Mehrere Varianten anbieten"],
                ausgabeformate: ["Merkregeln", "Eselsbrücken", "Gedächtnisstützen"]
            },

            wiederholung: {
                name: "Wiederholungspläne",
                rollen: ["Lerncoach", "Spaced-Repetition-Berater", "Tutor"],
                ziele: ["Wiederholungsplan erstellen", "Langzeitwissen verbessern", "Lernstoff systematisch wiederholen"],
                anforderungen: ["Stoffmenge berücksichtigen", "Abstände sinnvoll vergrößern", "Schwierige Themen häufiger wiederholen", "Aktives Abrufen einplanen"],
                ausgabeformate: ["Wiederholungsplan", "Spaced-Repetition-Zeitplan", "Wochenübersicht"]
            },

            verstaendnis: {
                name: "Verständnisfragen",
                rollen: ["Tutor", "Sokratischer Lerncoach", "Fachlehrer"],
                ziele: ["Verständnis prüfen", "Tiefe Lernfragen entwickeln", "Denkfehler erkennen"],
                anforderungen: ["Nicht nur Fakten abfragen", "Warum-und-Wie-Fragen verwenden", "Schwierigkeit steigern", "Lösung erst nach Antwort geben"],
                ausgabeformate: ["Verständnisfragen", "Sokratischer Dialog", "Fragen mit Musterantworten"]
            },

            fortschritt: {
                name: "Lernfortschritt prüfen",
                rollen: ["Lerncoach", "Tutor", "Assessment Designer"],
                ziele: ["Lernfortschritt messen", "Wissenslücken erkennen", "Nächste Lernschritte bestimmen"],
                anforderungen: ["Lernziel als Maßstab verwenden", "Wissen und Anwendung getrennt prüfen", "Fehler konkret erklären", "Fortschritt nicht nur subjektiv bewerten"],
                ausgabeformate: ["Lernstandstest", "Fortschrittsbericht", "Stärken-Lücken-Analyse"]
            },

            beispiele: {
                name: "Beispiele erstellen",
                rollen: ["Tutor", "Didaktischer Erklärer", "Fachlehrer"],
                ziele: ["Konzept durch Beispiele erklären", "Mehrere Anwendungsfälle zeigen", "Abstrakten Stoff konkret machen"],
                anforderungen: ["Beispiele fachlich korrekt halten", "Vom einfachen zum schwierigen Beispiel gehen", "Beispiel und Regel unterscheiden", "Unterschiedliche Situationen verwenden"],
                ausgabeformate: ["Beispielsammlung", "Erklärung mit Beispielen", "Beispiele plus Gegenbeispiele"]
            },

            aufgaben: {
                name: "Aufgaben lösen",
                rollen: ["Tutor", "Problemlösungs-Coach", "Fachlehrer"],
                ziele: ["Aufgabe lösen", "Lösungsweg verstehen", "Alternative Lösungswege kennenlernen"],
                anforderungen: ["Gegebene Informationen vollständig verwenden", "Rechen- oder Denkweg zeigen", "Annahmen kennzeichnen", "Ergebnis prüfen"],
                ausgabeformate: ["Lösung mit Rechenweg", "Schrittweise Lösung", "Lösung plus Erklärung"]
            },

            fehler: {
                name: "Fehler erklären",
                rollen: ["Tutor", "Fehleranalyse-Coach", "Fachlehrer"],
                ziele: ["Eigenen Fehler verstehen", "Denkfehler korrigieren", "Ähnliche Fehler künftig vermeiden"],
                anforderungen: ["Fehlerstelle konkret benennen", "Warum der Fehler entsteht erklären", "Korrekte Denkweise gegenüberstellen", "Kurze Übung zur Festigung anbieten"],
                ausgabeformate: ["Fehlererklärung", "Falsch-vs.-richtig-Vergleich", "Korrektur plus Übung"]
            },

            sprachen: {
                name: "Sprachen lernen",
                rollen: ["Sprachlehrer", "Konversationscoach", "Sprachlern-Tutor"],
                ziele: ["Sprache lernen", "Sprechen und Verstehen verbessern", "Lernroutine für Sprache entwickeln"],
                anforderungen: ["Sprachniveau berücksichtigen", "Alltagstaugliche Beispiele verwenden", "Aktive Anwendung fördern", "Fehler verständlich korrigieren"],
                ausgabeformate: ["Sprachlektion", "Konversationsübung", "Wochenlernplan"]
            },

            vokabeln: {
                name: "Vokabeltraining",
                rollen: ["Sprachtrainer", "Vokabelcoach", "Tutor"],
                ziele: ["Vokabeln lernen", "Wortschatz erweitern", "Vokabeln im Kontext üben"],
                anforderungen: ["Wörter im Kontext zeigen", "Übersetzung und Beispiel trennen", "Wiederholung einplanen", "Schwierigkeitsgrad berücksichtigen"],
                ausgabeformate: ["Vokabelliste", "Karteikarten", "Vokabelquiz"]
            },

            grammatik: {
                name: "Grammatik",
                rollen: ["Sprachlehrer", "Grammatik-Tutor", "Sprachcoach"],
                ziele: ["Grammatikregel verstehen", "Grammatik üben", "Eigene Grammatikfehler korrigieren"],
                anforderungen: ["Regel einfach erklären", "Beispiele und Gegenbeispiele verwenden", "Ausnahmen nennen, wenn relevant", "Übungen bereitstellen"],
                ausgabeformate: ["Grammatiklektion", "Regel plus Beispiele", "Übungen mit Lösungen"]
            },

            mathematik: {
                name: "Mathematik lernen",
                rollen: ["Mathematik-Tutor", "Mathelehrer", "Problemlösungs-Coach"],
                ziele: ["Mathematikthema verstehen", "Aufgaben lösen lernen", "Mathematische Grundlagen festigen"],
                anforderungen: ["Kenntnisstand berücksichtigen", "Rechenweg vollständig zeigen", "Notation erklären", "Ergebnisse kontrollieren"],
                ausgabeformate: ["Mathelektion", "Lösung mit Rechenweg", "Übungsset"]
            },

            naturwissenschaften: {
                name: "Naturwissenschaften",
                rollen: ["Naturwissenschafts-Tutor", "Fachlehrer", "Science Educator"],
                ziele: ["Naturwissenschaftliches Thema verstehen", "Zusammenhänge erklären", "Aufgaben und Experimente nachvollziehen"],
                anforderungen: ["Fachlich korrekt erklären", "Modelle und Realität unterscheiden", "Einheiten berücksichtigen", "Anschauliche Beispiele verwenden"],
                ausgabeformate: ["Lektion", "Erklärung mit Beispielen", "Übungen"]
            },

            programmieren: {
                name: "Programmieren lernen",
                rollen: ["Programmier-Tutor", "Coding Coach", "Softwareentwickler"],
                ziele: ["Programmieren lernen", "Code verstehen", "Mit kleinen Projekten üben"],
                anforderungen: ["Kenntnisstand berücksichtigen", "Kurze Codebeispiele verwenden", "Theorie mit Praxis verbinden", "Schwierigkeit schrittweise erhöhen"],
                ausgabeformate: ["Coding-Lektion", "Mini-Projekt", "Übung mit Lösung"]
            },

            beruflich: {
                name: "Berufliche Weiterbildung",
                rollen: ["Weiterbildungsberater", "Karriere-Lerncoach", "Fachlernplaner"],
                ziele: ["Berufliche Kompetenz ausbauen", "Weiterbildungsplan erstellen", "Lernziele an Beruf ausrichten"],
                anforderungen: ["Berufliches Ziel berücksichtigen", "Vorhandene Kenntnisse einbeziehen", "Praxisanwendung priorisieren", "Realistischen Zeitbedarf planen"],
                ausgabeformate: ["Weiterbildungsplan", "Kompetenz-Roadmap", "Lernziele-und-Praxisplan"]
            },

            praesentationen: {
                name: "Präsentationen lernen",
                rollen: ["Präsentationscoach", "Rhetoriktrainer", "Lerncoach"],
                ziele: ["Besser präsentieren lernen", "Vortrag vorbereiten", "Sicherer sprechen"],
                anforderungen: ["Zielgruppe berücksichtigen", "Klare Struktur verwenden", "Praxisübungen einbauen", "Feedbackkriterien definieren"],
                ausgabeformate: ["Trainingsplan", "Präsentationsübung", "Feedback-Checkliste"]
            },

            selbststudium: {
                name: "Selbststudium",
                rollen: ["Selbstlern-Coach", "Lernplaner", "Tutor"],
                ziele: ["Selbststudium strukturieren", "Eigenständig Thema lernen", "Motivation und Fortschritt sichern"],
                anforderungen: ["Realistische Lernzeiten verwenden", "Konkrete Lernressourcenarten vorsehen", "Übung und Wiederholung einplanen", "Fortschritt regelmäßig prüfen"],
                ausgabeformate: ["Selbststudiumsplan", "Wochenstruktur", "Lern-Roadmap"]
            },

            lernmethoden: {
                name: "Lernmethoden",
                rollen: ["Lernmethoden-Coach", "Didaktik-Berater", "Study Skills Trainer"],
                ziele: ["Passende Lernmethode auswählen", "Lernen effizienter gestalten", "Bestehende Lernroutine verbessern"],
                anforderungen: ["Lernziel und Stoffart berücksichtigen", "Aktives Lernen bevorzugen", "Methoden praktisch umsetzbar halten", "Keine Methode als universell überlegen darstellen"],
                ausgabeformate: ["Methodenvergleich", "Lernstrategie", "Persönlicher Methodenmix"]
            },

            luecken: {
                name: "Wissenslücken erkennen",
                rollen: ["Tutor", "Lernstandsanalyst", "Assessment Coach"],
                ziele: ["Wissenslücken identifizieren", "Fehlendes Vorwissen erkennen", "Nächste Lernschritte bestimmen"],
                anforderungen: ["Lernziel berücksichtigen", "Wissen gezielt testen", "Unsicherheit von echtem Nichtwissen unterscheiden", "Lücken priorisieren"],
                ausgabeformate: ["Wissenslücken-Analyse", "Diagnosetest", "Priorisierter Lernplan"]
            },

            kiTutor: {
                name: "Persönlicher KI-Tutor",
                rollen: ["Persönlicher KI-Tutor", "Didaktischer Lerncoach", "Adaptiver Lernassistent"],
                ziele: ["Individuell mit KI lernen", "Persönlichen Lernprozess begleiten", "Lernstoff adaptiv vermitteln"],
                anforderungen: ["Kenntnisstand regelmäßig prüfen", "Nicht zu viel auf einmal erklären", "Fragen und Übungen einbauen", "Fehler konstruktiv und konkret erklären"],
                ausgabeformate: ["Interaktive Lektion", "Persönlicher Lernpfad", "Tutor-Dialog"]
            }
        }
    },


    // ==================================================
    // 15. BUSINESS & SELBSTSTÄNDIGKEIT
    // ==================================================

    business: {

        name: "Business & Selbstständigkeit",
        icon: "💼",

        unterkategorien: {

            ideen: {
                name: "Geschäftsideen",
                rollen: ["Business-Ideenberater", "Entrepreneurship-Coach", "Innovationsberater"],
                ziele: ["Geschäftsideen entwickeln", "Neue Geschäftsmöglichkeiten finden", "Mehrere Ideen vergleichen"],
                anforderungen: ["Konkretes Kundenproblem berücksichtigen", "Mehrere unterschiedliche Ideen entwickeln", "Umsetzbarkeit grob bewerten", "Annahmen kennzeichnen"],
                ausgabeformate: ["10 Geschäftsideen", "Ideenmatrix", "Top-Ideen mit Begründung"]
            },

            bewerten: {
                name: "Ideen bewerten",
                rollen: ["Business Analyst", "Startup-Berater", "Strategieberater"],
                ziele: ["Geschäftsidee bewerten", "Chancen und Risiken prüfen", "Mehrere Ideen vergleichen"],
                anforderungen: ["Einheitliche Kriterien verwenden", "Marktannahmen kennzeichnen", "Aufwand und Potenzial getrennt bewerten", "Informationslücken nennen"],
                ausgabeformate: ["Bewertungsmatrix", "Chancen-Risiken-Analyse", "Go-No-Go-Vorprüfung"]
            },

            gruendung: {
                name: "Unternehmensgründung",
                rollen: ["Gründungsberater", "Startup-Coach", "Business Consultant"],
                ziele: ["Gründung planen", "Gründungsschritte strukturieren", "Gründungsrisiken erkennen"],
                anforderungen: ["Land und Geschäftsmodell berücksichtigen", "Rechtliche und steuerliche Punkte als Prüfbedarf kennzeichnen", "Kosten und Zeitbedarf berücksichtigen", "Schritte priorisieren"],
                ausgabeformate: ["Gründungsfahrplan", "Checkliste", "90-Tage-Gründungsplan"]
            },

            geschaeftsmodell: {
                name: "Geschäftsmodell",
                rollen: ["Business-Model-Berater", "Strategieberater", "Startup Consultant"],
                ziele: ["Geschäftsmodell entwickeln", "Bestehendes Modell verbessern", "Einnahmelogik strukturieren"],
                anforderungen: ["Kundennutzen definieren", "Kundensegmente berücksichtigen", "Kosten und Erlösquellen unterscheiden", "Zentrale Annahmen sichtbar machen"],
                ausgabeformate: ["Business Model Canvas", "Geschäftsmodell-Übersicht", "Modellanalyse"]
            },

            businessplan: {
                name: "Businessplan",
                rollen: ["Businessplan-Berater", "Gründungsberater", "Business Analyst"],
                ziele: ["Businessplan erstellen", "Geschäftskonzept strukturieren", "Businessplan verbessern"],
                anforderungen: ["Nur bekannte Zahlen als Fakten verwenden", "Annahmen kennzeichnen", "Markt, Angebot und Finanzen verbinden", "Risiken berücksichtigen"],
                ausgabeformate: ["Businessplan", "Businessplan-Gliederung", "Executive Summary"]
            },

            zielgruppen: {
                name: "Zielgruppen",
                rollen: ["Zielgruppenanalyst", "Marketingstratege", "Customer-Insights-Berater"],
                ziele: ["Zielgruppe definieren", "Kundensegmente unterscheiden", "Kundenbedürfnisse strukturieren"],
                anforderungen: ["Keine Kundeneigenschaften erfinden", "Bedürfnisse und Verhalten trennen", "Annahmen kennzeichnen", "Relevante Segmente priorisieren"],
                ausgabeformate: ["Zielgruppenprofil", "Segmentmatrix", "Persona-Entwurf"]
            },

            marktanalyse: {
                name: "Marktanalyse",
                rollen: ["Marktanalyst", "Business Analyst", "Strategieberater"],
                ziele: ["Markt analysieren", "Marktchancen bewerten", "Marktstruktur verstehen"],
                anforderungen: ["Region und Zeitraum berücksichtigen", "Marktgrößen nicht erfinden", "Fakten und Annahmen trennen", "Informationslücken nennen"],
                ausgabeformate: ["Marktanalyse", "Marktübersicht", "Chancen-Risiken-Matrix"]
            },

            wettbewerb: {
                name: "Wettbewerbsanalyse",
                rollen: ["Wettbewerbsanalyst", "Business Strategist", "Market Intelligence Analyst"],
                ziele: ["Wettbewerber vergleichen", "Differenzierung erkennen", "Eigene Position verbessern"],
                anforderungen: ["Einheitliche Kriterien verwenden", "Keine Wettbewerbermerkmale erfinden", "Quellenbedarf kennzeichnen", "Fakten und Interpretation trennen"],
                ausgabeformate: ["Wettbewerbstabelle", "Positionierungsmatrix", "Differenzierungsanalyse"]
            },

            positionierung: {
                name: "Positionierung",
                rollen: ["Positionierungsberater", "Business Strategist", "Markenstratege"],
                ziele: ["Unternehmen positionieren", "Unterschiede zum Wettbewerb herausarbeiten", "Positionierung schärfen"],
                anforderungen: ["Tatsächliche Stärken verwenden", "Zielgruppe berücksichtigen", "Austauschbare Aussagen vermeiden", "Keine Alleinstellungsmerkmale erfinden"],
                ausgabeformate: ["Positionierungsstatement", "Positionierungsprofil", "Differenzierungsmatrix"]
            },

            angebot: {
                name: "Angebot entwickeln",
                rollen: ["Angebotsberater", "Value-Proposition-Experte", "Business Consultant"],
                ziele: ["Angebot entwickeln", "Leistungspaket strukturieren", "Kundennutzen klarer machen"],
                anforderungen: ["Konkretes Kundenproblem berücksichtigen", "Leistung und Nutzen unterscheiden", "Leistungsumfang definieren", "Übertriebene Versprechen vermeiden"],
                ausgabeformate: ["Angebotskonzept", "Leistungspakete", "Value Proposition"]
            },

            dienstleistungen: {
                name: "Dienstleistungen",
                rollen: ["Service-Design-Berater", "Business Consultant", "Angebotsstratege"],
                ziele: ["Dienstleistung entwickeln", "Dienstleistung standardisieren", "Leistungsumfang verbessern"],
                anforderungen: ["Zielkunde berücksichtigen", "Ergebnis und Leistungsumfang definieren", "Nicht enthaltene Leistungen nennen", "Erbringungsaufwand berücksichtigen"],
                ausgabeformate: ["Dienstleistungspaket", "Leistungsbeschreibung", "Service-Modell"]
            },

            produkte: {
                name: "Produkte",
                rollen: ["Produktstratege", "Business Consultant", "Product Manager"],
                ziele: ["Produktidee entwickeln", "Produktangebot strukturieren", "Bestehendes Produkt verbessern"],
                anforderungen: ["Kundenproblem berücksichtigen", "Kernfunktionen priorisieren", "MVP von späteren Funktionen trennen", "Umsetzbarkeit berücksichtigen"],
                ausgabeformate: ["Produktkonzept", "Feature-Priorisierung", "MVP-Plan"]
            },

            preise: {
                name: "Preisgestaltung",
                rollen: ["Pricing-Berater", "Business Analyst", "Value-Selling-Experte"],
                ziele: ["Preisstrategie entwickeln", "Preismodell vergleichen", "Preisstruktur verbessern"],
                anforderungen: ["Kosten und Kundennutzen berücksichtigen", "Marktdaten nicht erfinden", "Preisannahmen kennzeichnen", "Mehrere Modelle vergleichen"],
                ausgabeformate: ["Preisstrategie", "Preismodell-Vergleich", "Preisstruktur"]
            },

            kalkulation: {
                name: "Kalkulation",
                rollen: ["Business Controller", "Kalkulationsberater", "Finanzanalyst"],
                ziele: ["Angebot kalkulieren", "Kosten strukturieren", "Marge berechnen"],
                anforderungen: ["Eingabewerte mit Einheiten übernehmen", "Fixe und variable Kosten unterscheiden", "Annahmen kennzeichnen", "Rechenweg nachvollziehbar zeigen"],
                ausgabeformate: ["Kalkulation", "Kosten-und-Margen-Tabelle", "Rechenweg"]
            },

            vertrieb: {
                name: "Vertrieb",
                rollen: ["Vertriebsberater", "Sales Strategist", "Business Development Manager"],
                ziele: ["Vertriebsstrategie entwickeln", "Vertriebsprozess strukturieren", "Verkaufschancen verbessern"],
                anforderungen: ["Zielgruppe und Angebot berücksichtigen", "Vertriebsstufen definieren", "Messbare Kennzahlen vorsehen", "Unrealistische Erfolgsversprechen vermeiden"],
                ausgabeformate: ["Vertriebsstrategie", "Sales-Funnel", "Vertriebsplan"]
            },

            verkauf: {
                name: "Verkaufsgespräche",
                rollen: ["Verkaufscoach", "Sales Consultant", "Verhandlungsberater"],
                ziele: ["Verkaufsgespräch vorbereiten", "Bedarf besser verstehen", "Einwände behandeln"],
                anforderungen: ["Fragen vor Argumenten priorisieren", "Keine Kundeneigenschaften erfinden", "Druckvolle Manipulation vermeiden", "Nächsten Schritt definieren"],
                ausgabeformate: ["Gesprächsleitfaden", "Einwandbehandlung", "Verkaufsgespräch-Simulation"]
            },

            kundengewinnung: {
                name: "Kundengewinnung",
                rollen: ["Growth-Berater", "Sales Strategist", "Marketingberater"],
                ziele: ["Neue Kunden gewinnen", "Akquisekanäle auswählen", "Kundengewinnungsprozess entwickeln"],
                anforderungen: ["Zielkunde klar definieren", "Kanäle nach Aufwand und Potenzial bewerten", "Messbare Schritte vorsehen", "Keine Erfolgsquote garantieren"],
                ausgabeformate: ["Kundengewinnungsplan", "Kanalstrategie", "90-Tage-Plan"]
            },

            kundenbindung: {
                name: "Kundenbindung",
                rollen: ["Customer-Retention-Berater", "CRM-Stratege", "Customer-Experience-Berater"],
                ziele: ["Kundenbindung verbessern", "Wiederkäufe fördern", "Bestandskundenprozess entwickeln"],
                anforderungen: ["Kundennutzen priorisieren", "Aufdringliche Maßnahmen vermeiden", "Bestehende Kundenbeziehung berücksichtigen", "Erfolg messbar machen"],
                ausgabeformate: ["Retention-Strategie", "Kundenbindungsplan", "CRM-Maßnahmen"]
            },

            akquise: {
                name: "Akquise",
                rollen: ["Akquiseberater", "Sales Coach", "Business Development Consultant"],
                ziele: ["Akquiseprozess entwickeln", "Erstkontakt verbessern", "Potenzielle Kunden systematisch ansprechen"],
                anforderungen: ["Zielgruppe berücksichtigen", "Persönliche Daten nicht erfinden", "Ansprache kurz und relevant halten", "Nächsten Schritt klar definieren"],
                ausgabeformate: ["Akquiseplan", "Erstkontakt-Vorlage", "Akquise-Workflow"]
            },

            angebote: {
                name: "Angebote schreiben",
                rollen: ["Angebotsmanager", "Business-Texter", "Sales Consultant"],
                ziele: ["Kundenangebot erstellen", "Angebot verständlicher machen", "Leistungsumfang strukturieren"],
                anforderungen: ["Nur tatsächlich angebotene Leistungen verwenden", "Preise und Bedingungen exakt übernehmen", "Leistung und Nutzen trennen", "Offene Punkte kennzeichnen"],
                ausgabeformate: ["Kundenangebot", "Angebotsstruktur", "Leistungs-und-Preisübersicht"]
            },

            emails: {
                name: "Geschäfts-E-Mails",
                rollen: ["Business-Kommunikationsberater", "Geschäftskorrespondenz-Experte", "Sales-Texter"],
                ziele: ["Geschäfts-E-Mail formulieren", "Kundenmail verbessern", "Professionelle Antwort erstellen"],
                anforderungen: ["Anlass und Empfänger berücksichtigen", "Fakten korrekt übernehmen", "Kernaussage früh nennen", "Nächsten Schritt klar formulieren"],
                ausgabeformate: ["Geschäfts-E-Mail", "Kurze professionelle Mail", "Mehrere Varianten"]
            },

            prozesse: {
                name: "Prozesse",
                rollen: ["Business Process Analyst", "Prozessberater", "Operations Consultant"],
                ziele: ["Geschäftsprozess strukturieren", "Prozess verbessern", "Wiederkehrende Abläufe standardisieren"],
                anforderungen: ["Ist-Prozess berücksichtigen", "Verantwortlichkeiten definieren", "Übergaben und Wartezeiten prüfen", "Messbare Verbesserungskriterien verwenden"],
                ausgabeformate: ["Prozessbeschreibung", "Ist-Soll-Prozess", "Optimierungsplan"]
            },

            organisation: {
                name: "Organisation",
                rollen: ["Organisationsberater", "Operations Manager", "Business Consultant"],
                ziele: ["Unternehmensorganisation strukturieren", "Zuständigkeiten verbessern", "Arbeitsabläufe vereinfachen"],
                anforderungen: ["Unternehmensgröße berücksichtigen", "Rollen klar definieren", "Unnötige Bürokratie vermeiden", "Informationsfluss berücksichtigen"],
                ausgabeformate: ["Organisationskonzept", "Rollenübersicht", "Prozess-und-Zuständigkeitsplan"]
            },

            strategie: {
                name: "Strategie",
                rollen: ["Strategieberater", "Business Strategist", "Unternehmensberater"],
                ziele: ["Geschäftsstrategie entwickeln", "Strategische Prioritäten setzen", "Bestehende Strategie prüfen"],
                anforderungen: ["Ausgangslage berücksichtigen", "Ziele klar definieren", "Annahmen und Risiken nennen", "Maßnahmen priorisieren"],
                ausgabeformate: ["Business-Strategie", "Strategie-Roadmap", "Prioritätenmatrix"]
            },

            wachstum: {
                name: "Wachstum",
                rollen: ["Growth Strategist", "Business Consultant", "Scaling-Berater"],
                ziele: ["Unternehmenswachstum planen", "Wachstumshebel identifizieren", "Skalierung vorbereiten"],
                anforderungen: ["Bestehende Kapazitäten berücksichtigen", "Wachstum und Profitabilität unterscheiden", "Risiken benennen", "Keine Wachstumsraten erfinden"],
                ausgabeformate: ["Wachstumsplan", "Growth-Roadmap", "Wachstumshebel-Matrix"]
            },

            nebenverdienst: {
                name: "Nebenverdienst",
                rollen: ["Nebenbusiness-Berater", "Business-Ideen-Coach", "Mikro-Unternehmer-Berater"],
                ziele: ["Nebenverdienst-Ideen entwickeln", "Realistische Nebenbusiness-Option auswählen", "Nebenverdienst schrittweise starten"],
                anforderungen: ["Verfügbare Zeit berücksichtigen", "Startkosten berücksichtigen", "Fähigkeiten und Interessen einbeziehen", "Einkommen nicht garantieren"],
                ausgabeformate: ["Ideenliste", "Bewertungsmatrix", "30-Tage-Startplan"]
            },

            digitaleProdukte: {
                name: "Digitale Produkte",
                rollen: ["Digital-Product-Stratege", "Creator-Business-Berater", "Product Consultant"],
                ziele: ["Digitales Produkt entwickeln", "Produktidee validieren", "MVP erstellen"],
                anforderungen: ["Konkretes Kundenproblem lösen", "MVP klein halten", "Erstellungs- und Vertriebskosten berücksichtigen", "Marktnachfrage nicht ungeprüft annehmen"],
                ausgabeformate: ["Digitalprodukt-Konzept", "MVP-Plan", "Launch-Roadmap"]
            },

            onlineBusiness: {
                name: "Online-Business",
                rollen: ["Online-Business-Berater", "Digital Strategist", "Entrepreneurship Coach"],
                ziele: ["Online-Business entwickeln", "Geschäftsmodell online umsetzen", "Online-Angebot strukturieren"],
                anforderungen: ["Zielgruppe und Angebot definieren", "Technischen Aufwand berücksichtigen", "Marketing und Vertrieb mitdenken", "Rechtliche Anforderungen gesondert prüfen"],
                ausgabeformate: ["Online-Business-Konzept", "Roadmap", "Geschäftsmodell"]
            },

            freelancer: {
                name: "Freelancer-Tätigkeit",
                rollen: ["Freelance-Business-Coach", "Selbstständigkeitsberater", "Service-Business-Berater"],
                ziele: ["Freelance-Angebot entwickeln", "Freelancer-Start planen", "Kundenprozess strukturieren"],
                anforderungen: ["Eigene Fähigkeiten berücksichtigen", "Leistungsumfang klar definieren", "Zeit und Auslastung realistisch planen", "Rechtliche und steuerliche Themen als Prüfpunkt kennzeichnen"],
                ausgabeformate: ["Freelancer-Startplan", "Service-Angebot", "Kundenprozess"]
            },

            kiUnternehmen: {
                name: "Unternehmensideen mit KI",
                rollen: ["AI Business Strategist", "KI-Produktberater", "Startup Consultant"],
                ziele: ["Geschäftsideen mit KI entwickeln", "KI-Nutzen für Kundenproblem finden", "KI-Business-MVP planen"],
                anforderungen: ["KI nur bei echtem Mehrwert einsetzen", "Daten- und API-Abhängigkeiten berücksichtigen", "Kosten und Datenschutz beachten", "MVP klein und testbar halten"],
                ausgabeformate: ["KI-Business-Ideen", "MVP-Konzept", "Geschäftsmodell plus KI-Workflow"]
            }
        }
    },


    // ==================================================
    // 16. FINANZEN & ENTSCHEIDUNGEN
    // ==================================================

    finanzen: {

        name: "Finanzen & Entscheidungen",
        icon: "💰",

        unterkategorien: {

            budget: {
                name: "Budgetplanung",
                rollen: ["Budgetplaner", "Finanzanalyst", "Planungsberater"],
                ziele: ["Budget erstellen", "Budget sinnvoll verteilen", "Budgetplan verbessern"],
                anforderungen: ["Einnahmen und Ausgaben vollständig berücksichtigen", "Zeitraum definieren", "Fixe und variable Kosten unterscheiden", "Puffer vorsehen"],
                ausgabeformate: ["Budgetplan", "Budgettabelle", "Monatsübersicht"]
            },

            kosten: {
                name: "Kostenübersichten",
                rollen: ["Kostenanalyst", "Controller", "Finanzplaner"],
                ziele: ["Kosten strukturieren", "Kostentreiber erkennen", "Kostenübersicht erstellen"],
                anforderungen: ["Kostenarten eindeutig gruppieren", "Einmalige und laufende Kosten trennen", "Zeitraum nennen", "Keine fehlenden Kosten erfinden"],
                ausgabeformate: ["Kostenübersicht", "Kostentabelle", "Kostenanalyse"]
            },

            einnahmen: {
                name: "Einnahmen & Ausgaben",
                rollen: ["Finanzplaner", "Budgetberater", "Controller"],
                ziele: ["Einnahmen und Ausgaben gegenüberstellen", "Finanzfluss verstehen", "Überschuss oder Defizit analysieren"],
                anforderungen: ["Zeitraum berücksichtigen", "Regelmäßige und unregelmäßige Beträge unterscheiden", "Berechnungen nachvollziehbar machen", "Fehlende Werte kennzeichnen"],
                ausgabeformate: ["Einnahmen-Ausgaben-Tabelle", "Monatsbilanz", "Finanzübersicht"]
            },

            sparen: {
                name: "Sparplanung",
                rollen: ["Sparplanungs-Berater", "Budgetcoach", "Finanzplaner"],
                ziele: ["Sparziel planen", "Sparrate bestimmen", "Sparpotenziale strukturieren"],
                anforderungen: ["Zeitraum und Zielbetrag berücksichtigen", "Grundausgaben nicht ignorieren", "Realistische Sparrate verwenden", "Unsichere Einnahmen gesondert behandeln"],
                ausgabeformate: ["Sparplan", "Monatliche Sparübersicht", "Szenarien"]
            },

            ziele: {
                name: "Finanzielle Ziele",
                rollen: ["Finanzplaner", "Zielplanungs-Berater", "Budgetcoach"],
                ziele: ["Finanzielles Ziel definieren", "Ziel in Teilziele zerlegen", "Fortschritt planbar machen"],
                anforderungen: ["Zielbetrag und Zeitraum definieren", "Prioritäten berücksichtigen", "Realistische Annahmen verwenden", "Zwischenziele festlegen"],
                ausgabeformate: ["Finanzziel-Plan", "Meilensteinübersicht", "Ziel-Roadmap"]
            },

            kostenNutzen: {
                name: "Kosten-Nutzen-Analyse",
                rollen: ["Kosten-Nutzen-Analyst", "Entscheidungsberater", "Business Analyst"],
                ziele: ["Kosten und Nutzen vergleichen", "Alternative bewerten", "Entscheidungsgrundlage schaffen"],
                anforderungen: ["Direkte und indirekte Kosten unterscheiden", "Nutzen quantifizieren, wenn möglich", "Nicht quantifizierbare Faktoren nennen", "Annahmen kennzeichnen"],
                ausgabeformate: ["Kosten-Nutzen-Tabelle", "Bewertungsmatrix", "Entscheidungsanalyse"]
            },

            preisvergleich: {
                name: "Preisvergleiche",
                rollen: ["Preisanalyst", "Kaufberater", "Entscheidungsanalyst"],
                ziele: ["Preise vergleichen", "Preis-Leistung bewerten", "Gesamtkosten vergleichen"],
                anforderungen: ["Gleichen Leistungsumfang vergleichen", "Einmalige und laufende Kosten berücksichtigen", "Preise nicht erfinden", "Nebenkosten kennzeichnen"],
                ausgabeformate: ["Preisvergleich", "Kostenmatrix", "Preis-Leistungs-Tabelle"]
            },

            kaufentscheidung: {
                name: "Kaufentscheidungen",
                rollen: ["Entscheidungsberater", "Kaufanalyst", "Kosten-Nutzen-Berater"],
                ziele: ["Kaufentscheidung strukturieren", "Produkte oder Optionen bewerten", "Beste Wahl anhand Kriterien finden"],
                anforderungen: ["Must-haves und Nice-to-haves unterscheiden", "Budget berücksichtigen", "Kriterien gewichten", "Unsichere Produktdaten kennzeichnen"],
                ausgabeformate: ["Entscheidungsmatrix", "Kaufvergleich", "Empfehlung mit Begründung"]
            },

            investition: {
                name: "Investitionsentscheidungen",
                rollen: ["Investitionsanalyst", "Business Analyst", "Entscheidungsberater"],
                ziele: ["Investition wirtschaftlich bewerten", "Alternativen vergleichen", "Risiken einer Investition strukturieren"],
                anforderungen: ["Investitionsbetrag und laufende Kosten berücksichtigen", "Nutzenannahmen kennzeichnen", "Szenarien verwenden", "Keine Rendite garantieren"],
                ausgabeformate: ["Investitionsanalyse", "Szenariovergleich", "Entscheidungsmatrix"]
            },

            modelle: {
                name: "Entscheidungsmodelle",
                rollen: ["Decision Analyst", "Strategieberater", "Entscheidungscoach"],
                ziele: ["Entscheidungsmodell entwickeln", "Komplexe Entscheidung strukturieren", "Kriterien transparent machen"],
                anforderungen: ["Entscheidungsziel definieren", "Kriterien eindeutig formulieren", "Gewichtungen transparent machen", "Modellgrenzen nennen"],
                ausgabeformate: ["Entscheidungsmodell", "Kriterienmatrix", "Bewertungsstruktur"]
            },

            matrix: {
                name: "Entscheidungsmatrizen",
                rollen: ["Decision Analyst", "Vergleichsberater", "Business Analyst"],
                ziele: ["Entscheidungsmatrix erstellen", "Optionen objektiver vergleichen", "Bewertung nachvollziehbar machen"],
                anforderungen: ["Gleiche Kriterien verwenden", "Bewertungsskala definieren", "Gewichtungen separat ausweisen", "Fehlende Daten kennzeichnen"],
                ausgabeformate: ["Entscheidungsmatrix", "Punktbewertung", "Optionenvergleich"]
            },

            gewichtung: {
                name: "Gewichtete Kriterien",
                rollen: ["Entscheidungsanalyst", "MCDA-Berater", "Strategieberater"],
                ziele: ["Kriterien gewichten", "Prioritäten abbilden", "Gewichtete Entscheidung berechnen"],
                anforderungen: ["Gewichtungen auf nachvollziehbare Basis stellen", "Summe der Gewichte prüfen", "Bewertung und Gewichtung trennen", "Sensitivität berücksichtigen"],
                ausgabeformate: ["Gewichtungsmatrix", "Nutzwertanalyse", "Sensitivitätsvergleich"]
            },

            szenarien: {
                name: "Szenarioanalyse",
                rollen: ["Szenarioanalyst", "Finanzplaner", "Strategieberater"],
                ziele: ["Mehrere Zukunftsszenarien entwickeln", "Auswirkungen unterschiedlicher Annahmen prüfen", "Unsicherheit strukturieren"],
                anforderungen: ["Annahmen je Szenario klar nennen", "Optimistisch, realistisch und pessimistisch unterscheiden", "Keine Wahrscheinlichkeit erfinden", "Schlüsselvariablen hervorheben"],
                ausgabeformate: ["Szenariovergleich", "Best-Base-Worst-Case", "Szenariotabelle"]
            },

            risiko: {
                name: "Risikoanalyse",
                rollen: ["Risikoanalyst", "Entscheidungsberater", "Finanzplaner"],
                ziele: ["Finanzielle Risiken analysieren", "Risiken vergleichen", "Risikomaßnahmen entwickeln"],
                anforderungen: ["Risiko und Auswirkung trennen", "Wahrscheinlichkeiten nur bei Grundlage verwenden", "Risikotoleranz berücksichtigen", "Gegenmaßnahmen nennen"],
                ausgabeformate: ["Risikomatrix", "Risikoliste", "Risiken-und-Maßnahmen-Tabelle"]
            },

            alternativen: {
                name: "Alternativen vergleichen",
                rollen: ["Entscheidungsanalyst", "Vergleichsberater", "Strategieberater"],
                ziele: ["Alternativen vergleichen", "Unterschiede transparent machen", "Geeignetste Option bestimmen"],
                anforderungen: ["Gleiche Kriterien anwenden", "Kosten und Nutzen berücksichtigen", "Fehlende Informationen nennen", "Bewertung begründen"],
                ausgabeformate: ["Alternativenvergleich", "Vergleichsmatrix", "Rangliste"]
            },

            vorNachteile: {
                name: "Vor- und Nachteile",
                rollen: ["Entscheidungsberater", "Analyst", "Kritischer Sparringspartner"],
                ziele: ["Vor- und Nachteile sammeln", "Option ausgewogen bewerten", "Entscheidung vorbereiten"],
                anforderungen: ["Relevante Faktoren priorisieren", "Doppelungen vermeiden", "Unsichere Punkte kennzeichnen", "Kurz- und langfristige Folgen unterscheiden"],
                ausgabeformate: ["Pro-und-Contra-Liste", "Vor-Nachteile-Tabelle", "Bewertung"]
            },

            breakEven: {
                name: "Break-even-Betrachtung",
                rollen: ["Finanzanalyst", "Controller", "Business Analyst"],
                ziele: ["Break-even berechnen", "Gewinnschwelle bestimmen", "Break-even-Szenarien vergleichen"],
                anforderungen: ["Fixe und variable Kosten trennen", "Preis und Absatz klar definieren", "Formel und Rechenweg zeigen", "Annahmen kennzeichnen"],
                ausgabeformate: ["Break-even-Berechnung", "Rechentabelle", "Szenariovergleich"]
            },

            wirtschaftlichkeit: {
                name: "Wirtschaftlichkeitsrechnung",
                rollen: ["Wirtschaftlichkeitsanalyst", "Controller", "Business Analyst"],
                ziele: ["Wirtschaftlichkeit bewerten", "Kosten und Nutzen über Zeit vergleichen", "Optionen wirtschaftlich analysieren"],
                anforderungen: ["Betrachtungszeitraum definieren", "Einmalige und laufende Kosten berücksichtigen", "Annahmen transparent machen", "Berechnungsweg zeigen"],
                ausgabeformate: ["Wirtschaftlichkeitsrechnung", "Kosten-Nutzen-Analyse", "Vergleichstabelle"]
            },

            laufendeKosten: {
                name: "Laufende Kosten",
                rollen: ["Kostenanalyst", "Finanzplaner", "Controller"],
                ziele: ["Laufende Kosten erfassen", "Monatliche Belastung bestimmen", "Wiederkehrende Kosten vergleichen"],
                anforderungen: ["Abrechnungsintervalle vereinheitlichen", "Variable Kosten kennzeichnen", "Preise nicht erfinden", "Jahres- und Monatswerte unterscheiden"],
                ausgabeformate: ["Monatliche Kostenübersicht", "Jahreskosten", "Kostenvergleich"]
            },

            gesamtkosten: {
                name: "Gesamtkosten",
                rollen: ["Total-Cost-Analyst", "Controller", "Kaufberater"],
                ziele: ["Gesamtkosten berechnen", "Total Cost of Ownership vergleichen", "Versteckte Kosten berücksichtigen"],
                anforderungen: ["Anschaffung und Betrieb trennen", "Betrachtungszeitraum festlegen", "Restwerte und Folgekosten kennzeichnen", "Keine Kosten erfinden"],
                ausgabeformate: ["TCO-Tabelle", "Gesamtkostenvergleich", "Kostenverlauf"]
            },

            angebote: {
                name: "Angebote vergleichen",
                rollen: ["Angebotsanalyst", "Einkaufsberater", "Entscheidungsanalyst"],
                ziele: ["Mehrere Angebote vergleichen", "Preis und Leistungsumfang bewerten", "Abweichungen erkennen"],
                anforderungen: ["Leistungsumfang vereinheitlichen", "Einmalige und laufende Kosten trennen", "Fehlende Positionen kennzeichnen", "Keine Gleichwertigkeit ohne Prüfung annehmen"],
                ausgabeformate: ["Angebotsvergleich", "Vergleichsmatrix", "Abweichungstabelle"]
            },

            vertraege: {
                name: "Vertragskosten vergleichen",
                rollen: ["Kostenanalyst", "Vertragsvergleichs-Berater", "Entscheidungsanalyst"],
                ziele: ["Vertragskosten vergleichen", "Langfristige Kosten bewerten", "Kostenrisiken erkennen"],
                anforderungen: ["Laufzeit berücksichtigen", "Grundpreis und variable Kosten trennen", "Preisänderungsklauseln kennzeichnen", "Rechtliche Bewertung gesondert behandeln"],
                ausgabeformate: ["Vertragskostenvergleich", "Laufzeitkosten-Tabelle", "Kostenrisiko-Übersicht"]
            },

            analyse: {
                name: "Finanzdaten analysieren",
                rollen: ["Finanzanalyst", "Controller", "Business Analyst"],
                ziele: ["Finanzdaten analysieren", "Trends und Abweichungen erkennen", "Finanzielle Entwicklung erklären"],
                anforderungen: ["Nur bereitgestellte Daten verwenden", "Zeitraum und Vergleichsbasis nennen", "Berechnung und Interpretation trennen", "Keine Ursachen ohne Beleg behaupten"],
                ausgabeformate: ["Finanzanalyse", "Kennzahlenübersicht", "Abweichungsbericht"]
            },

            haushalt: {
                name: "Haushaltsbudget",
                rollen: ["Budgetcoach", "Haushaltsplaner", "Finanzplaner"],
                ziele: ["Haushaltsbudget erstellen", "Ausgaben strukturieren", "Finanzielle Puffer planen"],
                anforderungen: ["Regelmäßige Verpflichtungen berücksichtigen", "Variable Ausgaben realistisch planen", "Notfallpuffer berücksichtigen", "Keine unrealistischen Einsparungen annehmen"],
                ausgabeformate: ["Haushaltsbudget", "Monatsplan", "Ausgabenkategorien"]
            },

            reise: {
                name: "Reisebudget",
                rollen: ["Reisebudget-Planer", "Kostenanalyst", "Reiseplaner"],
                ziele: ["Reisebudget erstellen", "Reisekosten strukturieren", "Budgetvarianten vergleichen"],
                anforderungen: ["Transport, Unterkunft und Nebenkosten berücksichtigen", "Reisedauer einbeziehen", "Puffer vorsehen", "Unbekannte Preise kennzeichnen"],
                ausgabeformate: ["Reisebudget", "Kostenübersicht", "Budget-Szenarien"]
            },

            projekt: {
                name: "Projektbudget",
                rollen: ["Projektcontroller", "Projektmanager", "Kostenplaner"],
                ziele: ["Projektbudget erstellen", "Projektkosten verteilen", "Kostenabweichungen analysieren"],
                anforderungen: ["Arbeitspakete berücksichtigen", "Einmalige und laufende Kosten trennen", "Reserve berücksichtigen", "Plan und Ist unterscheiden"],
                ausgabeformate: ["Projektbudget", "Kostenplan", "Plan-Ist-Tabelle"]
            },

            business: {
                name: "Business-Kalkulation",
                rollen: ["Business Controller", "Finanzanalyst", "Gründungsberater"],
                ziele: ["Geschäftsidee kalkulieren", "Kosten und Erlöse modellieren", "Wirtschaftlichkeit grob prüfen"],
                anforderungen: ["Erlösannahmen kennzeichnen", "Fixe und variable Kosten trennen", "Szenarien verwenden", "Gewinn nicht garantieren"],
                ausgabeformate: ["Business-Kalkulation", "Ertragsmodell", "Szenario-Tabelle"]
            },

            strukturieren: {
                name: "Entscheidungen strukturieren",
                rollen: ["Entscheidungscoach", "Decision Analyst", "Strategieberater"],
                ziele: ["Komplexe Entscheidung strukturieren", "Entscheidungsfrage klären", "Optionen und Kriterien ordnen"],
                anforderungen: ["Ziel der Entscheidung definieren", "Must-haves und Nice-to-haves trennen", "Optionen vollständig erfassen", "Unsicherheiten sichtbar machen"],
                ausgabeformate: ["Entscheidungsstruktur", "Kriterienliste", "Entscheidungsbaum als Text"]
            },

            unsicherheit: {
                name: "Unsicherheiten bewerten",
                rollen: ["Risikoanalyst", "Decision Analyst", "Szenarioberater"],
                ziele: ["Unsicherheiten einer Entscheidung analysieren", "Annahmen prüfen", "Robuste Entscheidung vorbereiten"],
                anforderungen: ["Bekanntes und Unbekanntes trennen", "Annahmen explizit nennen", "Auswirkung wichtiger Unsicherheiten testen", "Keine Wahrscheinlichkeiten erfinden"],
                ausgabeformate: ["Unsicherheitsanalyse", "Sensitivitätsmatrix", "Szenarioübersicht"]
            },

            vorbereitung: {
                name: "Entscheidungsvorbereitung",
                rollen: ["Entscheidungsberater", "Business Analyst", "Kritischer Sparringspartner"],
                ziele: ["Entscheidung fundiert vorbereiten", "Relevante Informationen zusammenstellen", "Empfehlung entwickeln"],
                anforderungen: ["Entscheidungsziel nennen", "Optionen und Kriterien darstellen", "Fakten, Annahmen und Unsicherheiten trennen", "Empfehlung nachvollziehbar begründen"],
                ausgabeformate: ["Entscheidungsvorlage", "Management Summary", "Vergleich plus Empfehlung"]
            }
        }
    },


    // ==================================================
    // 17. ALLTAG & ORGANISATION
    // ==================================================

    alltag: {

        name: "Alltag & Organisation",
        icon: "🏠",

        unterkategorien: {

            // ==================================================
            // TAGESPLANUNG
            // ==================================================

            tag: {

                name: "Tagesplanung",

                rollen: [
                    "Persönlicher Planungsassistent",
                    "Zeitmanagement-Coach",
                    "Produktivitätsberater",
                    "Organisationscoach"
                ],

                ziele: [
                    "Realistischen Tagesplan erstellen",
                    "Aufgaben und Termine sinnvoll verteilen",
                    "Prioritäten für den Tag festlegen",
                    "Überladenen Tagesplan optimieren",
                    "Freie Zeitfenster sinnvoll nutzen"
                ],

                anforderungen: [
                    "Feste Termine zuerst berücksichtigen",
                    "Aufgaben nach Wichtigkeit priorisieren",
                    "Realistische Zeitblöcke einplanen",
                    "Pausen und Pufferzeiten berücksichtigen",
                    "Überlastung vermeiden",
                    "Offene oder fehlende Informationen kenntlich machen"
                ],

                ausgabeformate: [
                    "Tagesplan mit Uhrzeiten",
                    "Priorisierte Aufgabenliste",
                    "Zeitblock-Plan",
                    "Kompakte Tagesübersicht",
                    "Schritt-für-Schritt-Tagesplan"
                ]
            },


            // ==================================================
            // WOCHENPLANUNG
            // ==================================================

            woche: {

                name: "Wochenplanung",

                rollen: [
                    "Wochenplanungs-Coach",
                    "Persönlicher Organisationsassistent",
                    "Zeitmanagement-Experte",
                    "Produktivitätsberater"
                ],

                ziele: [
                    "Realistischen Wochenplan erstellen",
                    "Aufgaben über die Woche verteilen",
                    "Wochenziele festlegen",
                    "Termine und Aufgaben koordinieren",
                    "Überlastete Woche neu strukturieren"
                ],

                anforderungen: [
                    "Feste Termine zuerst einplanen",
                    "Wichtige Aufgaben priorisieren",
                    "Große Aufgaben auf mehrere Tage verteilen",
                    "Pufferzeiten berücksichtigen",
                    "Ausreichend freie Zeit einplanen",
                    "Realistische Arbeitslast pro Tag beachten"
                ],

                ausgabeformate: [
                    "Wochenplan nach Tagen",
                    "Tabelle Montag bis Sonntag",
                    "Wochenübersicht mit Prioritäten",
                    "Zeitblock-Wochenplan",
                    "Wochen-Checkliste"
                ]
            },


            // ==================================================
            // MONATSPLANUNG
            // ==================================================

            monat: {

                name: "Monatsplanung",

                rollen: [
                    "Planungs- und Organisationscoach",
                    "Persönlicher Monatsplaner",
                    "Zeitmanagement-Experte",
                    "Produktivitätsberater"
                ],

                ziele: [
                    "Realistischen Monatsplan erstellen",
                    "Monatsziele in Wochenziele aufteilen",
                    "Termine und Aufgaben für den Monat koordinieren",
                    "Wichtige Prioritäten für den Monat festlegen",
                    "Überlasteten Monat sinnvoll strukturieren"
                ],

                anforderungen: [
                    "Feste Termine zuerst berücksichtigen",
                    "Monatsziele in konkrete Wochenaufgaben zerlegen",
                    "Wichtige Aufgaben priorisieren",
                    "Realistische Pufferzeiten einplanen",
                    "Überlastung einzelner Wochen vermeiden",
                    "Abhängigkeiten zwischen Aufgaben berücksichtigen",
                    "Fehlende Informationen klar benennen"
                ],

                ausgabeformate: [
                    "Monatsübersicht nach Wochen",
                    "Tabelle mit Wochen und Prioritäten",
                    "Monatsplan mit Meilensteinen",
                    "Priorisierte Monats-Checkliste",
                    "Monatsplan mit Wochenzielen"
                ]
            },


            // ==================================================
            // AUFGABENLISTEN
            // ==================================================

            aufgaben: {

                name: "Aufgabenlisten",

                rollen: [
                    "Aufgabenmanagement-Assistent",
                    "Produktivitätscoach",
                    "Organisationsberater",
                    "Persönlicher Planungsassistent"
                ],

                ziele: [
                    "Unstrukturierte Aufgaben ordnen",
                    "Aufgabenliste erstellen",
                    "Aufgaben nach Priorität sortieren",
                    "Große Aufgaben in Teilschritte zerlegen",
                    "Offene Aufgaben übersichtlich strukturieren"
                ],

                anforderungen: [
                    "Ähnliche Aufgaben sinnvoll gruppieren",
                    "Prioritäten kennzeichnen",
                    "Dringlichkeit und Wichtigkeit unterscheiden",
                    "Große Aufgaben in umsetzbare Schritte zerlegen",
                    "Abhängigkeiten berücksichtigen",
                    "Unklare Aufgaben kenntlich machen"
                ],

                ausgabeformate: [
                    "Priorisierte Aufgabenliste",
                    "Checkliste",
                    "Tabelle mit Priorität und Aufwand",
                    "Aufgabenliste nach Kategorien",
                    "Next-Actions-Liste"
                ]
            },


            // ==================================================
            // PRIORITÄTEN
            // ==================================================

            prioritaeten: {

                name: "Prioritäten",

                rollen: [
                    "Priorisierungscoach",
                    "Entscheidungsberater",
                    "Produktivitätscoach",
                    "Zeitmanagement-Experte"
                ],

                ziele: [
                    "Aufgaben priorisieren",
                    "Wichtiges von Dringendem unterscheiden",
                    "Reihenfolge für offene Aufgaben bestimmen",
                    "Zu viele gleichzeitige Prioritäten reduzieren",
                    "Fokus für einen Zeitraum festlegen"
                ],

                anforderungen: [
                    "Dringlichkeit und Wichtigkeit getrennt bewerten",
                    "Konsequenzen bei Nicht-Erledigung berücksichtigen",
                    "Zeitaufwand berücksichtigen",
                    "Abhängigkeiten zwischen Aufgaben beachten",
                    "Klare Reihenfolge empfehlen",
                    "Begründung für hohe Prioritäten geben"
                ],

                ausgabeformate: [
                    "Prioritätenliste",
                    "Eisenhower-Matrix",
                    "Tabelle mit Bewertung",
                    "Top-3-Prioritäten",
                    "Empfohlene Reihenfolge"
                ]
            },


            // ==================================================
            // TERMINE
            // ==================================================

            termine: {

                name: "Termine organisieren",

                rollen: [
                    "Terminplanungs-Assistent",
                    "Zeitmanagement-Experte",
                    "Organisationscoach",
                    "Persönlicher Kalenderassistent"
                ],

                ziele: [
                    "Termine sinnvoll koordinieren",
                    "Terminübersicht erstellen",
                    "Terminkonflikte erkennen",
                    "Freie Zeitfenster finden",
                    "Termine effizient über einen Zeitraum verteilen"
                ],

                anforderungen: [
                    "Feste Termine nicht verändern",
                    "Zeitliche Überschneidungen erkennen",
                    "Fahr- und Wegezeiten berücksichtigen",
                    "Vor- und Nachbereitungszeit einplanen",
                    "Puffer zwischen Terminen berücksichtigen",
                    "Flexible Termine sinnvoll verteilen"
                ],

                ausgabeformate: [
                    "Terminübersicht",
                    "Kalenderähnliche Tabelle",
                    "Zeitplan",
                    "Liste möglicher Terminfenster",
                    "Konfliktübersicht mit Lösungsvorschlägen"
                ]
            },


            // ==================================================
            // HAUSHALT
            // ==================================================

            haushalt: {

                name: "Haushalt",

                rollen: [
                    "Haushaltsorganisations-Assistent",
                    "Alltagscoach",
                    "Organisationsberater",
                    "Haushaltsplaner"
                ],

                ziele: [
                    "Haushaltsaufgaben organisieren",
                    "Regelmäßige Aufgaben strukturieren",
                    "Haushaltsroutine entwickeln",
                    "Aufgaben fair verteilen",
                    "Zeitaufwand im Haushalt reduzieren"
                ],

                anforderungen: [
                    "Aufgaben nach Häufigkeit gruppieren",
                    "Realistischen Zeitaufwand berücksichtigen",
                    "Aufgaben sinnvoll kombinieren",
                    "Verantwortlichkeiten klar darstellen",
                    "Wiederkehrende Aufgaben kennzeichnen",
                    "Praktische und einfache Lösungen bevorzugen"
                ],

                ausgabeformate: [
                    "Haushaltsplan",
                    "Wochen-Checkliste",
                    "Aufgabenverteilung",
                    "Tabelle nach Häufigkeit",
                    "Haushaltsroutine"
                ]
            },


            // ==================================================
            // HAUSHALTSPLANUNG
            // ==================================================

            haushaltsplanung: {

                name: "Haushaltsplanung",

                rollen: [
                    "Haushaltsplaner",
                    "Organisationscoach",
                    "Alltagsplanungs-Assistent",
                    "Produktivitätsberater"
                ],

                ziele: [
                    "Haushaltsplan erstellen",
                    "Wiederkehrende Haushaltsaufgaben planen",
                    "Aufgaben auf mehrere Personen verteilen",
                    "Wochen- oder Monatsroutine entwickeln",
                    "Haushaltsorganisation vereinfachen"
                ],

                anforderungen: [
                    "Tägliche, wöchentliche und monatliche Aufgaben trennen",
                    "Zeitaufwand realistisch einschätzen",
                    "Aufgaben gleichmäßig verteilen",
                    "Wiederkehrende Routinen berücksichtigen",
                    "Unnötige Arbeitsschritte vermeiden",
                    "Plan einfach umsetzbar halten"
                ],

                ausgabeformate: [
                    "Wochen-Haushaltsplan",
                    "Monats-Haushaltsplan",
                    "Tabelle nach Person und Aufgabe",
                    "Checkliste",
                    "Routineplan"
                ]
            },


            // ==================================================
            // EINKAUFSLISTEN
            // ==================================================

            einkaufslisten: {

                name: "Einkaufslisten",

                rollen: [
                    "Einkaufsplanungs-Assistent",
                    "Haushaltsorganisator",
                    "Alltagsassistent",
                    "Budgetbewusster Einkaufsplaner"
                ],

                ziele: [
                    "Einkaufsliste erstellen",
                    "Unsortierte Einkaufsliste strukturieren",
                    "Einkauf nach Warengruppen ordnen",
                    "Mehrere geplante Einkäufe zusammenführen",
                    "Vergessene Standardartikel erkennen"
                ],

                anforderungen: [
                    "Artikel nach Warengruppen gruppieren",
                    "Doppelte Einträge entfernen",
                    "Mengen berücksichtigen, wenn bekannt",
                    "Vorhandene Vorräte berücksichtigen",
                    "Optionale Artikel kennzeichnen",
                    "Keine nicht genannten Bedürfnisse erfinden"
                ],

                ausgabeformate: [
                    "Einkaufsliste nach Warengruppen",
                    "Abhakbare Checkliste",
                    "Tabelle mit Mengen",
                    "Kompakte Einkaufsliste",
                    "Einkaufsliste nach Geschäften"
                ]
            },


            // ==================================================
            // EINKÄUFE PLANEN
            // ==================================================

            einkaufen: {

                name: "Einkäufe planen",

                rollen: [
                    "Einkaufsplaner",
                    "Budgetberater für Alltagskäufe",
                    "Organisationsassistent",
                    "Vergleichsberater"
                ],

                ziele: [
                    "Einkauf effizient planen",
                    "Mehrere Besorgungen kombinieren",
                    "Einkaufsbudget berücksichtigen",
                    "Reihenfolge mehrerer Einkäufe festlegen",
                    "Zeitaufwand beim Einkaufen reduzieren"
                ],

                anforderungen: [
                    "Budget berücksichtigen",
                    "Prioritäten kennzeichnen",
                    "Notwendige und optionale Einkäufe trennen",
                    "Besorgungen sinnvoll gruppieren",
                    "Zeitaufwand berücksichtigen",
                    "Alternativen nur bei Bedarf vorschlagen"
                ],

                ausgabeformate: [
                    "Einkaufsplan",
                    "Priorisierte Einkaufsliste",
                    "Besorgungsroute als Reihenfolge",
                    "Budgetübersicht",
                    "Checkliste"
                ]
            },


            // ==================================================
            // PRODUKTVERGLEICHE
            // ==================================================

            produktvergleich: {

                name: "Produktvergleiche",

                rollen: [
                    "Unabhängiger Produktberater",
                    "Vergleichsanalyst",
                    "Kaufentscheidungsberater",
                    "Verbraucherorientierter Produktvergleichsexperte"
                ],

                ziele: [
                    "Produkte miteinander vergleichen",
                    "Passendes Produkt auswählen",
                    "Vor- und Nachteile bewerten",
                    "Preis-Leistungs-Verhältnis vergleichen",
                    "Kaufentscheidung vorbereiten"
                ],

                anforderungen: [
                    "Must-have- und Nice-to-have-Kriterien unterscheiden",
                    "Nur bekannte Produkteigenschaften als Fakten darstellen",
                    "Vor- und Nachteile transparent nennen",
                    "Gesamtkosten berücksichtigen, wenn relevant",
                    "Kriterien nach Wichtigkeit bewerten",
                    "Unsicherheiten oder fehlende Angaben kennzeichnen"
                ],

                ausgabeformate: [
                    "Vergleichstabelle",
                    "Gewichtete Entscheidungsmatrix",
                    "Rangliste mit Begründung",
                    "Vor- und Nachteile",
                    "Kaufempfehlung mit Begründung"
                ]
            },


            // ==================================================
            // FAMILIENORGANISATION
            // ==================================================

            familie: {

                name: "Familienorganisation",

                rollen: [
                    "Familienorganisations-Assistent",
                    "Alltagsplaner",
                    "Termin- und Aufgabenkoordinator",
                    "Organisationscoach"
                ],

                ziele: [
                    "Familienalltag strukturieren",
                    "Termine mehrerer Personen koordinieren",
                    "Aufgaben innerhalb der Familie verteilen",
                    "Wochenplan für die Familie erstellen",
                    "Wiederkehrende Verpflichtungen organisieren"
                ],

                anforderungen: [
                    "Termine aller beteiligten Personen berücksichtigen",
                    "Aufgaben eindeutig zuordnen",
                    "Alter und Möglichkeiten berücksichtigen, sofern angegeben",
                    "Pufferzeiten einplanen",
                    "Überlastung einzelner Personen vermeiden",
                    "Plan übersichtlich halten"
                ],

                ausgabeformate: [
                    "Familien-Wochenplan",
                    "Terminübersicht",
                    "Aufgabenverteilung",
                    "Familien-Checkliste",
                    "Tabelle nach Personen"
                ]
            },


            // ==================================================
            // ERINNERUNGSLISTEN
            // ==================================================

            erinnerungen: {

                name: "Erinnerungslisten",

                rollen: [
                    "Persönlicher Organisationsassistent",
                    "Aufgabenmanagement-Assistent",
                    "Alltagsplaner"
                ],

                ziele: [
                    "Erinnerungsliste erstellen",
                    "Wiederkehrende Erinnerungen strukturieren",
                    "Wichtige Fristen sammeln",
                    "Erinnerungen nach Zeitraum sortieren",
                    "Unübersichtliche Notizen in Erinnerungen umwandeln"
                ],

                anforderungen: [
                    "Konkrete Termine übernehmen, wenn vorhanden",
                    "Keine Termine erfinden",
                    "Einmalige und wiederkehrende Punkte unterscheiden",
                    "Dringende Erinnerungen hervorheben",
                    "Nach Zeiträumen oder Themen gruppieren"
                ],

                ausgabeformate: [
                    "Chronologische Erinnerungsliste",
                    "Checkliste",
                    "Tabelle mit Termin und Priorität",
                    "Erinnerungen nach Kategorien",
                    "Wochenübersicht"
                ]
            },


            // ==================================================
            // CHECKLISTEN
            // ==================================================

            checklisten: {

                name: "Checklisten",

                rollen: [
                    "Checklisten-Experte",
                    "Prozessorganisator",
                    "Alltagsassistent",
                    "Qualitätsorientierter Planungsassistent"
                ],

                ziele: [
                    "Checkliste für eine Aufgabe erstellen",
                    "Bestehende Checkliste verbessern",
                    "Komplexen Ablauf in Prüfschritte zerlegen",
                    "Nichts Wichtiges vergessen",
                    "Wiederverwendbare Checkliste entwickeln"
                ],

                anforderungen: [
                    "Schritte in sinnvoller Reihenfolge anordnen",
                    "Punkte kurz und eindeutig formulieren",
                    "Pflichtpunkte und optionale Punkte unterscheiden",
                    "Doppelte Punkte vermeiden",
                    "Kritische Punkte hervorheben",
                    "Praktische Umsetzbarkeit beachten"
                ],

                ausgabeformate: [
                    "Abhakbare Checkliste",
                    "Checkliste nach Phasen",
                    "Kurzcheckliste",
                    "Detaillierte Prüfliste",
                    "Tabelle mit Statusspalte"
                ]
            },


            // ==================================================
            // ROUTINEN
            // ==================================================

            routinen: {

                name: "Routinen",

                rollen: [
                    "Routine-Coach",
                    "Alltagsorganisations-Coach",
                    "Produktivitätsberater",
                    "Gewohnheitsplaner"
                ],

                ziele: [
                    "Neue Routine entwickeln",
                    "Bestehende Routine verbessern",
                    "Morgen- oder Abendroutine planen",
                    "Routine einfacher und realistischer machen",
                    "Mehrere Aufgaben zu einer Routine verbinden"
                ],

                anforderungen: [
                    "Routine möglichst einfach halten",
                    "Vorhandenen Tagesablauf berücksichtigen",
                    "Realistische Dauer festlegen",
                    "Klare Auslöser und Reihenfolge definieren",
                    "Hürden berücksichtigen",
                    "Kleine Einstiegsversion anbieten"
                ],

                ausgabeformate: [
                    "Schritt-für-Schritt-Routine",
                    "Morgen- oder Abendplan",
                    "Routine-Checkliste",
                    "Kurzversion und Idealversion",
                    "Wochenplan"
                ]
            },


            // ==================================================
            // GEWOHNHEITEN
            // ==================================================

            gewohnheiten: {

                name: "Gewohnheiten",

                rollen: [
                    "Gewohnheitscoach",
                    "Verhaltensänderungs-Coach",
                    "Produktivitätscoach",
                    "Alltagsplaner"
                ],

                ziele: [
                    "Neue Gewohnheit etablieren",
                    "Bestehende Gewohnheit stabilisieren",
                    "Unerwünschte Gewohnheit reduzieren",
                    "Gewohnheit in den Alltag integrieren",
                    "Fortschritt messbar machen"
                ],

                anforderungen: [
                    "Mit kleinen realistischen Schritten beginnen",
                    "Konkreten Auslöser definieren",
                    "Hindernisse berücksichtigen",
                    "Fortschritt einfach messbar machen",
                    "Rückschläge einplanen",
                    "Keine unnötig komplizierten Systeme empfehlen"
                ],

                ausgabeformate: [
                    "Gewohnheitsplan",
                    "30-Tage-Plan",
                    "Schritt-für-Schritt-Plan",
                    "Tracking-Tabelle",
                    "Minimal- und Idealroutine"
                ]
            },


            // ==================================================
            // ZEITMANAGEMENT
            // ==================================================

            zeit: {

                name: "Zeitmanagement",

                rollen: [
                    "Zeitmanagement-Experte",
                    "Produktivitätscoach",
                    "Organisationsberater",
                    "Persönlicher Planungscoach"
                ],

                ziele: [
                    "Zeit besser organisieren",
                    "Zeitfresser erkennen",
                    "Tages- oder Wochenablauf optimieren",
                    "Mehr Fokuszeit schaffen",
                    "Aufgaben realistischer planen"
                ],

                anforderungen: [
                    "Feste Verpflichtungen berücksichtigen",
                    "Realistischen Zeitbedarf ansetzen",
                    "Pufferzeiten berücksichtigen",
                    "Unproduktive Wechsel zwischen Aufgaben reduzieren",
                    "Wichtige Aufgaben bevorzugen",
                    "Ausreichend Erholungszeit berücksichtigen"
                ],

                ausgabeformate: [
                    "Zeitblock-Plan",
                    "Optimierter Wochenplan",
                    "Zeitfresser-Analyse",
                    "Prioritätenplan",
                    "Konkrete Verbesserungsschritte"
                ]
            },


            // ==================================================
            // PERSÖNLICHE PROJEKTE
            // ==================================================

            projekte: {

                name: "Persönliche Projekte",

                rollen: [
                    "Projektplanungs-Assistent",
                    "Persönlicher Projektcoach",
                    "Organisationsberater",
                    "Umsetzungscoach"
                ],

                ziele: [
                    "Persönliches Projekt planen",
                    "Projekt in konkrete Schritte zerlegen",
                    "Zeitplan erstellen",
                    "Projekt wieder in Gang bringen",
                    "Nächste sinnvolle Schritte bestimmen"
                ],

                anforderungen: [
                    "Klares Projektziel definieren",
                    "Projekt in überschaubare Arbeitspakete zerlegen",
                    "Abhängigkeiten berücksichtigen",
                    "Realistische Termine verwenden",
                    "Benötigte Ressourcen benennen",
                    "Nächsten konkreten Schritt hervorheben"
                ],

                ausgabeformate: [
                    "Projektplan",
                    "Meilensteinplan",
                    "Schritt-für-Schritt-Plan",
                    "Projekt-Checkliste",
                    "Tabelle mit Aufgaben und Terminen"
                ]
            },


            // ==================================================
            // ORDNUNG SCHAFFEN
            // ==================================================

            ordnung: {

                name: "Ordnung schaffen",

                rollen: [
                    "Ordnungscoach",
                    "Organisationsberater",
                    "Alltagsoptimierungs-Assistent",
                    "Strukturierungscoach"
                ],

                ziele: [
                    "Bereich systematisch aufräumen",
                    "Ordnungssystem entwickeln",
                    "Unübersichtlichen Bereich strukturieren",
                    "Dauerhaft einfaches Ordnungssystem schaffen",
                    "Aufräumprojekt planen"
                ],

                anforderungen: [
                    "In kleine Bereiche oder Schritte aufteilen",
                    "Behalten, verschieben und aussortieren unterscheiden",
                    "Einfaches dauerhaftes System bevorzugen",
                    "Vorhandenen Platz berücksichtigen",
                    "Unnötige Speziallösungen vermeiden",
                    "Konkrete nächste Schritte nennen"
                ],

                ausgabeformate: [
                    "Aufräumplan",
                    "Schritt-für-Schritt-Anleitung",
                    "Checkliste nach Bereichen",
                    "Ordnungssystem",
                    "Kurzplan für 15, 30 oder 60 Minuten"
                ]
            },


            // ==================================================
            // DIGITALE ORGANISATION
            // ==================================================

            digital: {

                name: "Digitale Organisation",

                rollen: [
                    "Digitaler Organisationsberater",
                    "Informationsmanagement-Assistent",
                    "Produktivitätsberater",
                    "Digital-Workflow-Experte"
                ],

                ziele: [
                    "Digitale Ablage strukturieren",
                    "Dateien und Informationen besser organisieren",
                    "Einheitliches digitales Ordnungssystem entwickeln",
                    "Digitale Unordnung reduzieren",
                    "Persönlichen Informationsworkflow verbessern"
                ],

                anforderungen: [
                    "Einfaches Ordnersystem bevorzugen",
                    "Einheitliche Benennung empfehlen",
                    "Doppelte Ablagen vermeiden",
                    "Suchbarkeit berücksichtigen",
                    "Backup und langfristige Nutzbarkeit bedenken",
                    "Bestehende Systeme möglichst weiterverwenden"
                ],

                ausgabeformate: [
                    "Ordnerstruktur",
                    "Benennungssystem",
                    "Schritt-für-Schritt-Aufräumplan",
                    "Digitale Organisationsregeln",
                    "Checkliste"
                ]
            },


            // ==================================================
            // DATEIEN ORGANISIEREN
            // ==================================================

            dateien: {

                name: "Dateien organisieren",

                rollen: [
                    "Dateiorganisations-Experte",
                    "Digitaler Archivierungsassistent",
                    "Informationsmanagement-Berater",
                    "Produktivitätsberater"
                ],

                ziele: [
                    "Dateistruktur entwickeln",
                    "Unsortierte Dateien organisieren",
                    "Dateibenennung vereinheitlichen",
                    "Doppelte Dateien vermeiden",
                    "Archivierungsstruktur erstellen"
                ],

                anforderungen: [
                    "Klare Ordnerhierarchie verwenden",
                    "Nicht zu viele Unterordner erzeugen",
                    "Einheitliche Dateinamen vorschlagen",
                    "Aktive und archivierte Dateien unterscheiden",
                    "Datensicherung berücksichtigen",
                    "Suchbarkeit erhalten"
                ],

                ausgabeformate: [
                    "Ordnerbaum",
                    "Dateibenennungs-Regeln",
                    "Aufräumplan",
                    "Archivierungskonzept",
                    "Checkliste"
                ]
            },


            // ==================================================
            // DOKUMENTE VERWALTEN
            // ==================================================

            dokumente: {

                name: "Dokumente verwalten",

                rollen: [
                    "Dokumentenorganisations-Assistent",
                    "Digitaler Archivierungsberater",
                    "Informationsmanagement-Experte",
                    "Organisationscoach"
                ],

                ziele: [
                    "Dokumente sinnvoll ablegen",
                    "Dokumentenstruktur entwickeln",
                    "Papier- und Digitalablage koordinieren",
                    "Wichtige Dokumente leichter auffindbar machen",
                    "Archivierungssystem entwickeln"
                ],

                anforderungen: [
                    "Dokumente nach sinnvollen Themen gruppieren",
                    "Aktive und archivierte Dokumente unterscheiden",
                    "Einheitliche Benennung verwenden",
                    "Wichtige Fristen kenntlich machen",
                    "Sensible Dokumente besonders berücksichtigen",
                    "Keine unnötig komplexe Struktur erzeugen"
                ],

                ausgabeformate: [
                    "Dokumentenstruktur",
                    "Ablageplan",
                    "Archivierungssystem",
                    "Checkliste",
                    "Benennungsschema"
                ]
            },


            // ==================================================
            // PERSÖNLICHE NOTIZEN
            // ==================================================

            notizen: {

                name: "Persönliche Notizen",

                rollen: [
                    "Notizorganisations-Assistent",
                    "Informationsstrukturierer",
                    "Persönlicher Wissensassistent",
                    "Produktivitätsberater"
                ],

                ziele: [
                    "Notizen strukturieren",
                    "Unsortierte Notizen zusammenfassen",
                    "Notizen nach Themen ordnen",
                    "Aufgaben aus Notizen extrahieren",
                    "Persönliches Notizsystem entwickeln"
                ],

                anforderungen: [
                    "Originalinformationen erhalten",
                    "Keine fehlenden Inhalte erfinden",
                    "Aufgaben und Informationen trennen",
                    "Wiederholungen zusammenführen",
                    "Wichtige Punkte hervorheben",
                    "Struktur einfach halten"
                ],

                ausgabeformate: [
                    "Strukturierte Notizen",
                    "Themenübersicht",
                    "Zusammenfassung mit Aufgaben",
                    "Notizvorlage",
                    "Stichpunktliste"
                ]
            },


            // ==================================================
            // GESCHENKIDEEN
            // ==================================================

            geschenke: {

                name: "Geschenkideen",

                rollen: [
                    "Kreativer Geschenkberater",
                    "Ideen-Coach",
                    "Persönlicher Geschenkplaner",
                    "Kreativberater"
                ],

                ziele: [
                    "Passende Geschenkideen finden",
                    "Geschenke innerhalb eines Budgets entwickeln",
                    "Persönliche Geschenkideen entwickeln",
                    "Ungewöhnliche Geschenkideen finden",
                    "Mehrere Geschenkoptionen vergleichen"
                ],

                anforderungen: [
                    "Interessen der Person berücksichtigen",
                    "Anlass berücksichtigen",
                    "Budget einhalten",
                    "Unterschiedliche Ideen anbieten",
                    "Aufwand der Ideen einschätzen",
                    "Keine unbekannten persönlichen Vorlieben erfinden"
                ],

                ausgabeformate: [
                    "10 Geschenkideen",
                    "Drei ausgearbeitete Vorschläge",
                    "Tabelle mit Preis und Aufwand",
                    "Ideen nach Budget",
                    "Rangliste mit Begründung"
                ]
            },


            // ==================================================
            // VERANSTALTUNGEN
            // ==================================================

            veranstaltungen: {

                name: "Veranstaltungen planen",

                rollen: [
                    "Eventplaner",
                    "Organisationsassistent",
                    "Veranstaltungskoordinator",
                    "Ablaufplanungs-Experte"
                ],

                ziele: [
                    "Veranstaltung vollständig planen",
                    "Ablauf für eine Veranstaltung erstellen",
                    "Aufgaben und Verantwortlichkeiten organisieren",
                    "Veranstaltungsbudget strukturieren",
                    "Vorbereitung in einzelne Schritte zerlegen"
                ],

                anforderungen: [
                    "Termin und Teilnehmerzahl berücksichtigen",
                    "Budget berücksichtigen",
                    "Vorbereitung und Durchführung trennen",
                    "Wichtige Fristen markieren",
                    "Puffer für kritische Aufgaben einplanen",
                    "Notwendige und optionale Punkte unterscheiden"
                ],

                ausgabeformate: [
                    "Eventplan",
                    "Zeitplan",
                    "Vorbereitungs-Checkliste",
                    "Aufgaben- und Verantwortungsmatrix",
                    "Budget- und Ablaufübersicht"
                ]
            },


            // ==================================================
            // FEIERORGANISATION
            // ==================================================

            feiern: {

                name: "Feierorganisation",

                rollen: [
                    "Feierplaner",
                    "Eventorganisations-Assistent",
                    "Kreativer Veranstaltungsplaner",
                    "Budgetbewusster Eventberater"
                ],

                ziele: [
                    "Feier planen",
                    "Vorbereitungsplan erstellen",
                    "Menü, Dekoration und Ablauf koordinieren",
                    "Feier innerhalb eines Budgets organisieren",
                    "Aufgaben bis zum Veranstaltungstag verteilen"
                ],

                anforderungen: [
                    "Anzahl der Gäste berücksichtigen",
                    "Budget einhalten",
                    "Zeitplan rückwärts vom Veranstaltungstag planen",
                    "Notwendige und optionale Elemente unterscheiden",
                    "Vorbereitungsaufwand realistisch einschätzen",
                    "Alternative Lösungen anbieten"
                ],

                ausgabeformate: [
                    "Kompletter Feierplan",
                    "Vorbereitungs-Checkliste",
                    "Zeitplan bis zur Feier",
                    "Budgetübersicht",
                    "Aufgabenliste nach Bereichen"
                ]
            },


            // ==================================================
            // UMZUG
            // ==================================================

            umzug: {

                name: "Umzug planen",

                rollen: [
                    "Umzugsplaner",
                    "Organisationscoach",
                    "Projektplanungs-Assistent",
                    "Umzugskoordinator"
                ],

                ziele: [
                    "Umzug vollständig planen",
                    "Umzugsaufgaben zeitlich strukturieren",
                    "Umzugscheckliste erstellen",
                    "Umzug mit möglichst wenig Stress organisieren",
                    "Offene Aufgaben vor und nach dem Umzug koordinieren"
                ],

                anforderungen: [
                    "Vom Umzugstermin rückwärts planen",
                    "Fristen und wichtige Termine hervorheben",
                    "Vorbereitung, Umzugstag und Nachbereitung trennen",
                    "Aufgaben priorisieren",
                    "Benötigte Helfer und Materialien berücksichtigen",
                    "Puffer für unerwartete Probleme einplanen"
                ],

                ausgabeformate: [
                    "Umzugsplan nach Wochen",
                    "Komplette Umzugscheckliste",
                    "Zeitplan",
                    "Aufgabenliste nach Phasen",
                    "Plan für den Umzugstag"
                ]
            },


            // ==================================================
            // ANSCHAFFUNGEN
            // ==================================================

            anschaffungen: {

                name: "Anschaffungen planen",

                rollen: [
                    "Kaufentscheidungsberater",
                    "Produktvergleichs-Experte",
                    "Budgetberater",
                    "Verbraucherorientierter Entscheidungsassistent"
                ],

                ziele: [
                    "Anschaffung strukturiert vorbereiten",
                    "Anforderungen an ein Produkt festlegen",
                    "Budget und Nutzen abwägen",
                    "Produkte für eine Anschaffung vergleichen",
                    "Kaufentscheidung vorbereiten"
                ],

                anforderungen: [
                    "Must-have- und Nice-to-have-Kriterien unterscheiden",
                    "Budget berücksichtigen",
                    "Gesamtkosten beachten",
                    "Geplante Nutzungsdauer berücksichtigen",
                    "Alternativen vergleichen",
                    "Keine Produkteigenschaften erfinden"
                ],

                ausgabeformate: [
                    "Anforderungsliste",
                    "Kaufentscheidungsmatrix",
                    "Vergleichstabelle",
                    "Priorisierte Kriterienliste",
                    "Kaufempfehlung mit Begründung"
                ]
            },


            // ==================================================
            // PROBLEMLÖSUNG IM ALLTAG
            // ==================================================

            probleme: {

                name: "Problemlösung im Alltag",

                rollen: [
                    "Pragmatischer Problemlösungs-Coach",
                    "Alltagsberater",
                    "Entscheidungscoach",
                    "Strukturierter Lösungsanalyst"
                ],

                ziele: [
                    "Alltagsproblem strukturiert lösen",
                    "Mögliche Ursachen analysieren",
                    "Mehrere Lösungswege entwickeln",
                    "Einfachste praktikable Lösung finden",
                    "Nächste konkrete Schritte bestimmen"
                ],

                anforderungen: [
                    "Problem und Symptome voneinander trennen",
                    "Keine unbekannten Ursachen als Fakten darstellen",
                    "Mehrere realistische Lösungswege prüfen",
                    "Aufwand und Nutzen berücksichtigen",
                    "Risiken oder Nachteile nennen",
                    "Mit dem einfachsten sinnvollen Schritt beginnen"
                ],

                ausgabeformate: [
                    "Problemanalyse mit Lösungsvorschlägen",
                    "Schritt-für-Schritt-Lösung",
                    "Optionen mit Vor- und Nachteilen",
                    "Entscheidungsmatrix",
                    "Konkreter Aktionsplan"
                ]
            },


            // ==================================================
            // ALLTAGSASSISTENT
            // ==================================================

            assistent: {

                name: "Alltagsassistent",

                rollen: [
                    "Persönlicher Alltagsassistent",
                    "Organisationsassistent",
                    "Planungs- und Produktivitätscoach",
                    "Pragmatischer persönlicher Assistent"
                ],

                ziele: [
                    "Alltag strukturieren",
                    "Mehrere Alltagsaufgaben koordinieren",
                    "Persönliche Organisation verbessern",
                    "Entscheidungen und Aufgaben zusammenführen",
                    "Konkreten Plan für eine Alltagssituation erstellen"
                ],

                anforderungen: [
                    "Nur relevante Informationen berücksichtigen",
                    "Wichtige Aufgaben priorisieren",
                    "Realistische Vorschläge machen",
                    "Zeit, Aufwand und vorhandene Einschränkungen beachten",
                    "Fehlende Informationen kenntlich machen",
                    "Konkrete nächste Schritte nennen"
                ],

                ausgabeformate: [
                    "Persönlicher Aktionsplan",
                    "Priorisierte Übersicht",
                    "Schritt-für-Schritt-Plan",
                    "Checkliste",
                    "Tages- oder Wochenübersicht"
                ]
            }
        }
    },


    // ==================================================
    // 18. REISEN & FREIZEIT
    // ==================================================

    reisen: {

        name: "Reisen & Freizeit",
        icon: "✈️",

        unterkategorien: {

            ideen: {
                name: "Reiseideen",
                rollen: ["Reiseberater", "Travel Planner", "Reiseideen-Coach"],
                ziele: ["Neue Reiseideen entwickeln", "Passende Reisearten finden", "Mehrere Reiseideen vergleichen"],
                anforderungen: ["Interessen berücksichtigen", "Budget und verfügbare Zeit beachten", "Jahreszeit berücksichtigen", "Mehrere unterschiedliche Ideen liefern"],
                ausgabeformate: ["10 Reiseideen", "Ideenliste mit Begründung", "Reiseideen nach Budget"]
            },

            ziele: {
                name: "Reiseziele",
                rollen: ["Reiseberater", "Destination Specialist", "Travel Consultant"],
                ziele: ["Passendes Reiseziel finden", "Mehrere Reiseziele vergleichen", "Reiseziel nach Kriterien auswählen"],
                anforderungen: ["Reisezeit berücksichtigen", "Interessen und Budget beachten", "Anreise berücksichtigen", "Aktuelle Bedingungen bei Bedarf gesondert prüfen"],
                ausgabeformate: ["Reisezielvergleich", "Top-5-Reiseziele", "Entscheidungsmatrix"]
            },

            planung: {
                name: "Reiseplanung",
                rollen: ["Reiseplaner", "Travel Consultant", "Urlaubsorganisations-Berater"],
                ziele: ["Reise vollständig planen", "Reiseablauf strukturieren", "Bestehende Reiseplanung verbessern"],
                anforderungen: ["Reisedauer und Budget berücksichtigen", "An- und Abreise einplanen", "Pufferzeiten vorsehen", "Öffnungszeiten und Verfügbarkeiten nicht erfinden"],
                ausgabeformate: ["Kompletter Reiseplan", "Tagesweise Reiseplanung", "Reise-Roadmap"]
            },

            tagesplanung: {
                name: "Tagesplanung im Urlaub",
                rollen: ["Reiseplaner", "Lokaler Tagesplaner", "Urlaubsassistent"],
                ziele: ["Urlaubstag planen", "Sehenswürdigkeiten sinnvoll kombinieren", "Tagesprogramm optimieren"],
                anforderungen: ["Entfernungen berücksichtigen", "Pausen einplanen", "Nicht zu viele Aktivitäten einplanen", "Öffnungszeiten bei Bedarf prüfen"],
                ausgabeformate: ["Tagesplan mit Uhrzeiten", "Tagesroute", "Flexible Tagesplanung"]
            },

            rundreisen: {
                name: "Rundreisen",
                rollen: ["Rundreise-Spezialist", "Travel Planner", "Routenplaner"],
                ziele: ["Rundreise planen", "Route optimieren", "Mehrere Orte sinnvoll verbinden"],
                anforderungen: ["Reisedauer berücksichtigen", "Fahrzeiten realistisch planen", "Zu häufige Unterkunftswechsel vermeiden", "Puffertage berücksichtigen"],
                ausgabeformate: ["Rundreiseplan", "Etappenübersicht", "Route nach Tagen"]
            },

            staedte: {
                name: "Städtereisen",
                rollen: ["Städtereise-Berater", "City-Trip-Planer", "Travel Consultant"],
                ziele: ["Städtereise planen", "Highlights auswählen", "Stadt in wenigen Tagen sinnvoll entdecken"],
                anforderungen: ["Reisedauer berücksichtigen", "Aktivitäten geografisch gruppieren", "Interessen berücksichtigen", "Aktuelle Öffnungszeiten nicht erfinden"],
                ausgabeformate: ["City-Trip-Plan", "2- bis 5-Tage-Plan", "Highlights-und-Routen-Übersicht"]
            },

            roadtrips: {
                name: "Roadtrips",
                rollen: ["Roadtrip-Planer", "Routenberater", "Reiseplaner"],
                ziele: ["Roadtrip planen", "Fahrroute entwickeln", "Zwischenstopps auswählen"],
                anforderungen: ["Tägliche Fahrzeit begrenzen", "Tank- oder Ladebedarf berücksichtigen", "Übernachtungen sinnvoll verteilen", "Puffer für spontane Stopps vorsehen"],
                ausgabeformate: ["Roadtrip-Route", "Etappenplan", "Tageskilometer-und-Stopp-Tabelle"]
            },

            wochenende: {
                name: "Wochenendtrips",
                rollen: ["Kurzreise-Berater", "Weekend-Trip-Planer", "Reiseideen-Coach"],
                ziele: ["Wochenendtrip planen", "Ziel für Kurzreise finden", "Kurze Reise effizient gestalten"],
                anforderungen: ["Kurze Anreise bevorzugen", "Verfügbare Zeit berücksichtigen", "Programm nicht überladen", "Budget beachten"],
                ausgabeformate: ["Wochenendplan", "Kurztrip-Vorschläge", "Freitag-bis-Sonntag-Plan"]
            },

            sehenswuerdigkeiten: {
                name: "Sehenswürdigkeiten",
                rollen: ["Reiseberater", "Kulturreise-Planer", "Destination Specialist"],
                ziele: ["Sehenswürdigkeiten auswählen", "Highlights priorisieren", "Besichtigungsroute planen"],
                anforderungen: ["Interessen berücksichtigen", "Entfernungen beachten", "Touristische und weniger bekannte Orte mischen", "Aktuelle Öffnungszeiten bei Bedarf prüfen"],
                ausgabeformate: ["Sehenswürdigkeiten-Liste", "Priorisierte Highlights", "Besichtigungsroute"]
            },

            aktivitaeten: {
                name: "Aktivitäten",
                rollen: ["Freizeitberater", "Reiseaktivitäten-Planer", "Experience Planner"],
                ziele: ["Aktivitäten am Reiseziel finden", "Tagesaktivitäten planen", "Mehrere Erlebnisarten vergleichen"],
                anforderungen: ["Interessen berücksichtigen", "Alter und Mobilität berücksichtigen, wenn angegeben", "Wetterabhängigkeit kennzeichnen", "Budget beachten"],
                ausgabeformate: ["Aktivitätenliste", "Ideen nach Kategorie", "Tagesprogramm"]
            },

            essen: {
                name: "Restaurants & Essen",
                rollen: ["Kulinarischer Reiseberater", "Food-Travel-Planer", "Restaurant-Rechercheur"],
                ziele: ["Passende Restaurants finden", "Regionale Spezialitäten entdecken", "Kulinarischen Tagesplan entwickeln"],
                anforderungen: ["Geschmack und Ernährungswünsche berücksichtigen", "Budget beachten", "Keine Öffnungszeiten oder Verfügbarkeiten erfinden", "Aktuelle Bewertungen bei Bedarf prüfen"],
                ausgabeformate: ["Restaurant-Shortlist", "Kulinarischer Tagesplan", "Gerichte-und-Restaurants-Übersicht"]
            },

            unterkunft: {
                name: "Unterkünfte vergleichen",
                rollen: ["Unterkunftsberater", "Hotelvergleichs-Analyst", "Travel Consultant"],
                ziele: ["Unterkünfte vergleichen", "Passende Unterkunft auswählen", "Standorte bewerten"],
                anforderungen: ["Budget berücksichtigen", "Lage und Verkehrsanbindung beachten", "Gleiche Kriterien verwenden", "Aktuelle Preise und Verfügbarkeit nicht erfinden"],
                ausgabeformate: ["Unterkunftsvergleich", "Entscheidungsmatrix", "Top-Optionen"]
            },

            packlisten: {
                name: "Packlisten",
                rollen: ["Reiseorganisations-Assistent", "Packlisten-Experte", "Travel Planner"],
                ziele: ["Packliste erstellen", "Gepäck reduzieren", "Reisespezifische Ausrüstung planen"],
                anforderungen: ["Reiseziel und Wetter berücksichtigen", "Reisedauer beachten", "Transportart berücksichtigen", "Unnötige Gegenstände vermeiden"],
                ausgabeformate: ["Packliste", "Packliste nach Kategorien", "Minimalistische Packliste"]
            },

            budget: {
                name: "Reisebudget",
                rollen: ["Reisebudget-Planer", "Kostenanalyst", "Travel Consultant"],
                ziele: ["Reisebudget erstellen", "Reisekosten strukturieren", "Budgetvarianten vergleichen"],
                anforderungen: ["Transport und Unterkunft berücksichtigen", "Verpflegung und Aktivitäten einplanen", "Puffer vorsehen", "Unbekannte Preise kennzeichnen"],
                ausgabeformate: ["Reisebudget", "Kostenübersicht", "Budget-Szenarien"]
            },

            checklisten: {
                name: "Reisechecklisten",
                rollen: ["Reiseorganisations-Berater", "Travel Planner", "Checklisten-Designer"],
                ziele: ["Reisecheckliste erstellen", "Reisevorbereitung absichern", "Wichtige Aufgaben vor Abreise strukturieren"],
                anforderungen: ["Reiseart berücksichtigen", "Aufgaben zeitlich ordnen", "Dokumente und Buchungen berücksichtigen", "Nur relevante Punkte aufnehmen"],
                ausgabeformate: ["Reisecheckliste", "Checkliste nach Zeitpunkt", "Vor-Abreise-Check"]
            },

            auto: {
                name: "Reisen mit Auto",
                rollen: ["Roadtrip-Berater", "Autoreise-Planer", "Routenplaner"],
                ziele: ["Autoreise planen", "Fahrstrecke aufteilen", "Zwischenstopps planen"],
                anforderungen: ["Fahrzeiten realistisch planen", "Pausen berücksichtigen", "Maut und Umweltregeln bei Bedarf prüfen", "Fahrzeugreichweite berücksichtigen"],
                ausgabeformate: ["Autoreiseplan", "Etappenplan", "Fahr-und-Pausen-Übersicht"]
            },

            bahn: {
                name: "Reisen mit Bahn",
                rollen: ["Bahnreise-Berater", "ÖPNV-Reiseplaner", "Travel Consultant"],
                ziele: ["Bahnreise planen", "Umstiege strukturieren", "Bahn und andere Verkehrsmittel kombinieren"],
                anforderungen: ["Genügend Umstiegszeit berücksichtigen", "Gepäck beachten", "Fahrpläne und Preise nicht erfinden", "Alternativen bei Störungen mitdenken"],
                ausgabeformate: ["Bahnreiseplan", "Verbindungsstrategie", "Etappenübersicht"]
            },

            flug: {
                name: "Flugreisen",
                rollen: ["Flugreise-Berater", "Travel Planner", "Reiseorganisations-Assistent"],
                ziele: ["Flugreise vorbereiten", "Flugoptionen vergleichen", "Ablauf am Reisetag planen"],
                anforderungen: ["Flughafen und Transfer berücksichtigen", "Gepäckregeln gesondert prüfen", "Aktuelle Flugzeiten und Preise nicht erfinden", "Genügend Zeitpuffer einplanen"],
                ausgabeformate: ["Flugreise-Checkliste", "Reisetag-Plan", "Flugoptionen-Vergleich"]
            },

            fotoreisen: {
                name: "Fotoreisen",
                rollen: ["Fotoreise-Planer", "Reisefotograf", "Landschaftsfotografie-Berater"],
                ziele: ["Fotoreise planen", "Fotospots und Zeiten strukturieren", "Reise und Fotografie verbinden"],
                anforderungen: ["Licht und Tageszeit berücksichtigen", "Ausrüstung berücksichtigen", "Anfahrtswege beachten", "Zugangsregeln und aktuelle Bedingungen bei Bedarf prüfen"],
                ausgabeformate: ["Fotoreiseplan", "Shot-und-Location-Liste", "Tagesplan nach Licht"]
            },

            wandern: {
                name: "Natur & Wandern",
                rollen: ["Wanderplaner", "Outdoor-Berater", "Naturreise-Planer"],
                ziele: ["Wanderung planen", "Passende Tour auswählen", "Naturausflug strukturieren"],
                anforderungen: ["Kondition und Erfahrung berücksichtigen", "Distanz und Höhenmeter beachten", "Wetter und Wegzustand bei Bedarf aktuell prüfen", "Sicherheitsausrüstung berücksichtigen"],
                ausgabeformate: ["Wanderplan", "Tourvergleich", "Ausrüstungs-und-Routen-Checkliste"]
            },

            fahrrad: {
                name: "Fahrradtouren",
                rollen: ["Fahrradtouren-Planer", "Outdoor-Berater", "Routenplaner"],
                ziele: ["Fahrradtour planen", "Etappen entwickeln", "Passende Route auswählen"],
                anforderungen: ["Fitnessniveau berücksichtigen", "Distanz und Höhenprofil beachten", "Fahrradtyp berücksichtigen", "Pausen und Versorgung einplanen"],
                ausgabeformate: ["Fahrradroute", "Etappenplan", "Tour-und-Ausrüstungsübersicht"]
            },

            camping: {
                name: "Camping",
                rollen: ["Camping-Berater", "Outdoor-Planer", "Reiseorganisations-Assistent"],
                ziele: ["Campingreise planen", "Campingausrüstung vorbereiten", "Campingplatz-Auswahl strukturieren"],
                anforderungen: ["Campingart berücksichtigen", "Wetter und Saison beachten", "Ausrüstung vollständig planen", "Aktuelle Platzregeln und Verfügbarkeit bei Bedarf prüfen"],
                ausgabeformate: ["Campingplan", "Ausrüstungscheckliste", "Campingplatz-Vergleich"]
            },

            freizeit: {
                name: "Freizeitideen",
                rollen: ["Freizeitberater", "Ideen-Coach", "Aktivitätenplaner"],
                ziele: ["Neue Freizeitideen entwickeln", "Freie Zeit abwechslungsreich gestalten", "Aktivitäten passend zu Interessen finden"],
                anforderungen: ["Interessen berücksichtigen", "Zeit und Budget beachten", "Mehrere unterschiedliche Ideen liefern", "Aufwand grob einschätzen"],
                ausgabeformate: ["10 Freizeitideen", "Ideen nach Aufwand", "Freizeitplan"]
            },

            ausfluege: {
                name: "Ausflüge",
                rollen: ["Ausflugsplaner", "Freizeitberater", "Regionaler Reiseplaner"],
                ziele: ["Tagesausflug planen", "Ausflugsziele vergleichen", "Ausflug mit Aktivitäten kombinieren"],
                anforderungen: ["Anreise berücksichtigen", "Verfügbare Zeit beachten", "Aktivitäten sinnvoll kombinieren", "Aktuelle Öffnungszeiten bei Bedarf prüfen"],
                ausgabeformate: ["Ausflugsplan", "Zielvergleich", "Tagesroute"]
            },

            hobbies: {
                name: "Hobbys",
                rollen: ["Hobbyberater", "Freizeitcoach", "Interessen-Coach"],
                ziele: ["Hobby vertiefen", "Hobbyprojekt entwickeln", "Mehr Zeit für Hobby sinnvoll nutzen"],
                anforderungen: ["Kenntnisstand berücksichtigen", "Verfügbare Zeit beachten", "Budget berücksichtigen", "Praxisnahe Schritte nennen"],
                ausgabeformate: ["Hobbyplan", "Projektideen", "Lern-und-Praxisplan"]
            },

            events: {
                name: "Veranstaltungen",
                rollen: ["Event-Rechercheur", "Freizeitberater", "Event-Planer"],
                ziele: ["Passende Veranstaltung finden", "Events vergleichen", "Freizeit rund um Event planen"],
                anforderungen: ["Ort und Zeitraum berücksichtigen", "Interessen beachten", "Aktuelle Termine und Tickets nicht erfinden", "Anreise berücksichtigen"],
                ausgabeformate: ["Event-Shortlist", "Veranstaltungsvergleich", "Event-Tagesplan"]
            },

            wochenendplanung: {
                name: "Wochenendplanung",
                rollen: ["Wochenendplaner", "Freizeitcoach", "Persönlicher Planungsassistent"],
                ziele: ["Wochenende planen", "Freizeit und Erholung verbinden", "Mehrere Aktivitäten sinnvoll verteilen"],
                anforderungen: ["Feste Termine berücksichtigen", "Erholung einplanen", "Wetterabhängige Alternativen vorsehen", "Programm nicht überladen"],
                ausgabeformate: ["Wochenendplan", "Samstag-Sonntag-Plan", "Flexible Aktivitätenübersicht"]
            },

            schlechtwetter: {
                name: "Aktivitäten bei schlechtem Wetter",
                rollen: ["Freizeitberater", "Indoor-Aktivitäten-Planer", "Ideen-Coach"],
                ziele: ["Schlechtwetter-Aktivitäten finden", "Alternativprogramm entwickeln", "Indoor-Tag planen"],
                anforderungen: ["Ort berücksichtigen", "Interessen und Budget beachten", "Indoor- und wetterunabhängige Optionen bevorzugen", "Mehrere unterschiedliche Ideen liefern"],
                ausgabeformate: ["Schlechtwetter-Ideen", "Indoor-Tagesplan", "Alternativenliste"]
            },

            neueHobbys: {
                name: "Neue Hobbys entdecken",
                rollen: ["Hobby-Coach", "Freizeitberater", "Interessenanalyst"],
                ziele: ["Neues Hobby finden", "Mehrere Hobbys vergleichen", "Hobby mit niedrigem Einstieg finden"],
                anforderungen: ["Interessen berücksichtigen", "Zeitbedarf beachten", "Startkosten berücksichtigen", "Verschiedene Hobbyarten einbeziehen"],
                ausgabeformate: ["Hobby-Shortlist", "Hobbyvergleich", "10 neue Hobbys"]
            },

            erlebnisse: {
                name: "Erlebnisideen",
                rollen: ["Experience Designer", "Freizeitberater", "Ideen-Coach"],
                ziele: ["Besondere Erlebnisse entwickeln", "Neue Aktivitäten ausprobieren", "Erlebnis für Anlass planen"],
                anforderungen: ["Anlass und Personen berücksichtigen", "Budget beachten", "Mehrere unterschiedliche Ideen liefern", "Umsetzbarkeit berücksichtigen"],
                ausgabeformate: ["10 Erlebnisideen", "Erlebnisvergleich", "Drei ausgearbeitete Konzepte"]
            }
        }
    },


    // ==================================================
    // 19. KOCHEN, ERNÄHRUNG & SPORT
    // ==================================================

    kochenSport: {

        name: "Kochen, Ernährung & Sport",
        icon: "🍳",

        unterkategorien: {

            rezepte: {
                name: "Rezepte",
                rollen: ["Koch", "Rezeptentwickler", "Küchenberater"],
                ziele: ["Rezept erstellen", "Bestehendes Rezept anpassen", "Gericht Schritt für Schritt erklären"],
                anforderungen: ["Personenzahl berücksichtigen", "Zutaten mit Mengen angeben", "Zubereitung logisch ordnen", "Unverträglichkeiten berücksichtigen, wenn angegeben"],
                ausgabeformate: ["Komplettes Rezept", "Rezept mit Zutatenliste", "Schritt-für-Schritt-Rezept"]
            },

            rezeptideen: {
                name: "Rezeptideen",
                rollen: ["Rezeptideen-Coach", "Koch", "Food-Concept-Entwickler"],
                ziele: ["Neue Rezeptideen entwickeln", "Abwechslungsreiche Gerichte finden", "Ideen nach Zutaten entwickeln"],
                anforderungen: ["Geschmack berücksichtigen", "Zeitaufwand beachten", "Schwierigkeitsgrad berücksichtigen", "Mehrere unterschiedliche Ideen liefern"],
                ausgabeformate: ["10 Rezeptideen", "Ideen nach Aufwand", "Rezept-Shortlist"]
            },

            wochenplaene: {
                name: "Wochenpläne",
                rollen: ["Wochenplan-Koch", "Meal-Planning-Berater", "Küchenorganisations-Assistent"],
                ziele: ["Essenswochenplan erstellen", "Abwechslungsreiche Mahlzeiten planen", "Kochen über eine Woche organisieren"],
                anforderungen: ["Personenzahl berücksichtigen", "Zeit zum Kochen beachten", "Zutaten mehrfach sinnvoll verwenden", "Ernährungswünsche berücksichtigen"],
                ausgabeformate: ["7-Tage-Wochenplan", "Wochenplan als Tabelle", "Wochenplan plus Einkaufsliste"]
            },

            einkaufslisten: {
                name: "Einkaufslisten",
                rollen: ["Einkaufslisten-Assistent", "Meal-Planning-Berater", "Küchenorganisations-Berater"],
                ziele: ["Einkaufsliste erstellen", "Zutaten mehrerer Rezepte zusammenführen", "Einkauf übersichtlich planen"],
                anforderungen: ["Doppelte Zutaten zusammenfassen", "Mengen berücksichtigen", "Vorhandene Vorräte abziehen, wenn angegeben", "Nach Einkaufsbereichen gruppieren"],
                ausgabeformate: ["Einkaufsliste", "Einkaufsliste nach Kategorien", "Mengenübersicht"]
            },

            reste: {
                name: "Resteverwertung",
                rollen: ["Resteküche-Koch", "Rezeptentwickler", "Food-Waste-Berater"],
                ziele: ["Reste sinnvoll verwerten", "Gericht aus vorhandenen Zutaten entwickeln", "Lebensmittelverschwendung reduzieren"],
                anforderungen: ["Nur vorhandene Zutaten berücksichtigen", "Frische und Lebensmittelsicherheit beachten", "Fehlende Basiszutaten separat nennen", "Einfache Lösungen bevorzugen"],
                ausgabeformate: ["Resterezept", "Mehrere Verwertungsideen", "Zutaten-zu-Gericht-Plan"]
            },

            schnelleGerichte: {
                name: "Schnelle Gerichte",
                rollen: ["Alltagskoch", "Quick-Meal-Experte", "Rezeptentwickler"],
                ziele: ["Schnelles Gericht entwickeln", "Kochzeit reduzieren", "Einfaches Alltagsessen planen"],
                anforderungen: ["Maximale Kochzeit berücksichtigen", "Wenige Arbeitsschritte bevorzugen", "Gut verfügbare Zutaten verwenden", "Vorbereitungs- und Kochzeit unterscheiden"],
                ausgabeformate: ["15-Minuten-Rezept", "30-Minuten-Rezept", "Liste schneller Gerichte"]
            },

            mealPrep: {
                name: "Meal Prep",
                rollen: ["Meal-Prep-Berater", "Koch", "Wochenplaner"],
                ziele: ["Meal Prep planen", "Mehrere Mahlzeiten vorbereiten", "Kochzeit über die Woche reduzieren"],
                anforderungen: ["Haltbarkeit berücksichtigen", "Kühlung und Aufbewahrung beachten", "Gerichte sinnvoll kombinieren", "Vorbereitungsreihenfolge optimieren"],
                ausgabeformate: ["Meal-Prep-Plan", "Kochsession-Ablauf", "Wochenplan plus Lagerhinweise"]
            },

            backen: {
                name: "Backen",
                rollen: ["Bäcker", "Patisserie-Berater", "Backrezept-Entwickler"],
                ziele: ["Backrezept erstellen", "Backproblem analysieren", "Rezept an Form oder Menge anpassen"],
                anforderungen: ["Mengen exakt angeben", "Backtemperatur und Zeit nennen", "Formgröße berücksichtigen", "Kritische Arbeitsschritte erklären"],
                ausgabeformate: ["Backrezept", "Schritt-für-Schritt-Anleitung", "Fehleranalyse"]
            },

            grillen: {
                name: "Grillen",
                rollen: ["Grillmeister", "BBQ-Berater", "Outdoor-Koch"],
                ziele: ["Grillmenü planen", "Grillrezept entwickeln", "Grillablauf organisieren"],
                anforderungen: ["Grillart berücksichtigen", "Garzeiten abstimmen", "Lebensmittelsicherheit beachten", "Beilagen und Hauptgerichte zeitlich koordinieren"],
                ausgabeformate: ["Grillplan", "BBQ-Menü", "Grillrezepte"]
            },

            vegetarisch: {
                name: "Vegetarische Gerichte",
                rollen: ["Vegetarischer Koch", "Rezeptentwickler", "Meal-Planning-Berater"],
                ziele: ["Vegetarisches Gericht entwickeln", "Vegetarischen Wochenplan erstellen", "Fleischgericht sinnvoll vegetarisch ersetzen"],
                anforderungen: ["Keine Fleisch- oder Fischzutaten verwenden", "Abwechslungsreiche Proteinquellen berücksichtigen", "Geschmack und Textur beachten", "Ernährungswünsche berücksichtigen"],
                ausgabeformate: ["Vegetarisches Rezept", "Vegetarischer Wochenplan", "Rezeptideen"]
            },

            vegan: {
                name: "Vegane Gerichte",
                rollen: ["Veganer Koch", "Plant-Based-Rezeptentwickler", "Meal-Planning-Berater"],
                ziele: ["Veganes Gericht entwickeln", "Veganen Wochenplan erstellen", "Rezept vegan anpassen"],
                anforderungen: ["Keine tierischen Zutaten verwenden", "Geeignete Ersatzprodukte erklären", "Abwechslung berücksichtigen", "Unverträglichkeiten beachten, wenn angegeben"],
                ausgabeformate: ["Veganes Rezept", "Veganer Wochenplan", "Vegane Rezeptideen"]
            },

            lowCarb: {
                name: "Low Carb",
                rollen: ["Low-Carb-Rezeptentwickler", "Koch", "Meal-Planning-Berater"],
                ziele: ["Kohlenhydratarmes Gericht entwickeln", "Low-Carb-Wochenplan erstellen", "Rezept kohlenhydratärmer gestalten"],
                anforderungen: ["Kohlenhydratreiche Zutaten bewusst reduzieren", "Sättigende Zutaten berücksichtigen", "Keine medizinischen Wirkungen versprechen", "Ernährungswünsche berücksichtigen"],
                ausgabeformate: ["Low-Carb-Rezept", "Low-Carb-Wochenplan", "Rezeptvarianten"]
            },

            protein: {
                name: "Proteinreiche Gerichte",
                rollen: ["Protein-Rezeptentwickler", "Sportküchen-Berater", "Koch"],
                ziele: ["Proteinreiches Gericht entwickeln", "Proteinreiche Mahlzeiten planen", "Bestehendes Rezept proteinreicher gestalten"],
                anforderungen: ["Proteinquelle klar nennen", "Portionsgröße berücksichtigen", "Kalorien oder Nährwerte nur berechnen, wenn Daten vorhanden sind", "Keine gesundheitlichen Wirkungen versprechen"],
                ausgabeformate: ["Proteinreiches Rezept", "Mahlzeitenplan", "Rezeptideen"]
            },

            fruehstueck: {
                name: "Frühstück",
                rollen: ["Frühstücks-Rezeptentwickler", "Koch", "Meal-Planning-Berater"],
                ziele: ["Frühstücksideen entwickeln", "Schnelles Frühstück planen", "Frühstück vorbereiten"],
                anforderungen: ["Verfügbare Zeit berücksichtigen", "Geschmack und Ernährungswünsche beachten", "Vorbereitung am Vorabend berücksichtigen", "Mehrere Varianten liefern"],
                ausgabeformate: ["Frühstücksrezepte", "7 Frühstücksideen", "Frühstücks-Wochenplan"]
            },

            mittag: {
                name: "Mittagessen",
                rollen: ["Alltagskoch", "Lunch-Planer", "Rezeptentwickler"],
                ziele: ["Mittagessen planen", "Schnelles Mittagessen entwickeln", "Lunch für Arbeit oder Zuhause vorbereiten"],
                anforderungen: ["Zeit und Küchenausstattung berücksichtigen", "Transport und Aufwärmen beachten, wenn relevant", "Portionen berücksichtigen", "Abwechslungsreiche Ideen liefern"],
                ausgabeformate: ["Mittagsrezept", "Lunch-Wochenplan", "Meal-Prep-Ideen"]
            },

            abend: {
                name: "Abendessen",
                rollen: ["Alltagskoch", "Dinner-Planer", "Rezeptentwickler"],
                ziele: ["Abendessen planen", "Einfaches Abendgericht entwickeln", "Abendessen für mehrere Personen organisieren"],
                anforderungen: ["Kochzeit berücksichtigen", "Personenzahl beachten", "Vorhandene Zutaten einbeziehen", "Aufwand realistisch halten"],
                ausgabeformate: ["Abendrezept", "Dinner-Ideen", "Wochenübersicht"]
            },

            snacks: {
                name: "Snacks",
                rollen: ["Snack-Rezeptentwickler", "Koch", "Meal-Prep-Berater"],
                ziele: ["Snackideen entwickeln", "Snacks vorbereiten", "Alternative zu gekauftem Snack finden"],
                anforderungen: ["Zubereitungszeit beachten", "Transport und Lagerung berücksichtigen", "Ernährungswünsche beachten", "Mehrere Varianten liefern"],
                ausgabeformate: ["Snackideen", "Snack-Rezepte", "Meal-Prep-Snacks"]
            },

            zutaten: {
                name: "Kochen nach vorhandenen Zutaten",
                rollen: ["Improvisationskoch", "Resteküche-Experte", "Rezeptentwickler"],
                ziele: ["Gericht aus vorhandenen Zutaten entwickeln", "Mehrere Rezeptmöglichkeiten finden", "Fehlende Zutaten minimieren"],
                anforderungen: ["Vorhandene Zutaten priorisieren", "Fehlende Zutaten separat nennen", "Keine vorhandenen Zutaten erfinden", "Einfache Alternativen anbieten"],
                ausgabeformate: ["Rezept aus Vorräten", "Drei Gerichtsideen", "Zutaten-und-Ergänzungsliste"]
            },

            portionen: {
                name: "Portionsplanung",
                rollen: ["Küchenplaner", "Rezeptentwickler", "Event-Koch"],
                ziele: ["Mengen für Personenzahl berechnen", "Rezept hoch- oder runterskalieren", "Essensmenge planen"],
                anforderungen: ["Personenzahl exakt berücksichtigen", "Ausgangsrezept beachten", "Mengen nachvollziehbar umrechnen", "Sicherheitsreserve nur sinnvoll einsetzen"],
                ausgabeformate: ["Mengenliste", "Skaliertes Rezept", "Portionstabelle"]
            },

            kueche: {
                name: "Küchenorganisation",
                rollen: ["Küchenorganisations-Berater", "Koch", "Meal-Prep-Planer"],
                ziele: ["Küche besser organisieren", "Kochabläufe vereinfachen", "Vorräte übersichtlicher verwalten"],
                anforderungen: ["Vorhandenen Platz berücksichtigen", "Häufig genutzte Dinge priorisieren", "Lebensmittellagerung beachten", "Einfaches System bevorzugen"],
                ausgabeformate: ["Küchenorganisationsplan", "Zonen-Konzept", "Aufräum-und-Vorratscheckliste"]
            },

            trainingsplaene: {
                name: "Trainingspläne",
                rollen: ["Fitnesstrainer", "Trainingsplaner", "Sport-Coach"],
                ziele: ["Trainingsplan erstellen", "Training über mehrere Wochen strukturieren", "Bestehenden Plan anpassen"],
                anforderungen: ["Trainingsniveau berücksichtigen", "Verfügbare Tage und Zeit beachten", "Belastung schrittweise steigern", "Gesundheitliche Einschränkungen berücksichtigen, wenn angegeben"],
                ausgabeformate: ["Wochen-Trainingsplan", "Mehrwöchiger Trainingsplan", "Trainingstabelle"]
            },

            kraft: {
                name: "Krafttraining",
                rollen: ["Krafttrainer", "Strength Coach", "Fitnesstrainer"],
                ziele: ["Krafttraining planen", "Übungsauswahl strukturieren", "Trainingsroutine verbessern"],
                anforderungen: ["Trainingsniveau berücksichtigen", "Technik vor Gewicht priorisieren", "Erholung berücksichtigen", "Belastung kontrolliert steigern"],
                ausgabeformate: ["Krafttrainingsplan", "Übungstabelle", "Trainingseinheit"]
            },

            ausdauer: {
                name: "Ausdauertraining",
                rollen: ["Ausdauertrainer", "Running Coach", "Fitness-Coach"],
                ziele: ["Ausdauertraining planen", "Grundlagenausdauer verbessern", "Trainingsumfang strukturieren"],
                anforderungen: ["Aktuelles Niveau berücksichtigen", "Belastung schrittweise erhöhen", "Erholungstage einplanen", "Intensität nachvollziehbar beschreiben"],
                ausgabeformate: ["Ausdauerplan", "Wochenplan", "Trainingseinheiten"]
            },

            beweglichkeit: {
                name: "Beweglichkeit",
                rollen: ["Mobility Coach", "Fitnesstrainer", "Beweglichkeitstrainer"],
                ziele: ["Beweglichkeitsroutine entwickeln", "Mobilität verbessern", "Warm-up oder Cool-down planen"],
                anforderungen: ["Bewegungsniveau berücksichtigen", "Schmerz nicht ignorieren", "Kontrollierte Bewegungen bevorzugen", "Übungen klar erklären"],
                ausgabeformate: ["Mobility-Routine", "Übungsfolge", "10- bis 20-Minuten-Programm"]
            },

            sportprogramme: {
                name: "Sportprogramme",
                rollen: ["Fitness-Coach", "Sportprogramm-Planer", "Personal Trainer"],
                ziele: ["Sportprogramm entwickeln", "Mehrere Trainingsarten kombinieren", "Trainingswoche strukturieren"],
                anforderungen: ["Ziel und Niveau berücksichtigen", "Belastungen sinnvoll verteilen", "Erholung einplanen", "Verfügbare Ausrüstung beachten"],
                ausgabeformate: ["Sportprogramm", "Wochenplan", "Trainings-Roadmap"]
            },

            fortschritt: {
                name: "Trainingsfortschritt",
                rollen: ["Trainingsanalyst", "Fitness-Coach", "Progress-Tracking-Berater"],
                ziele: ["Trainingsfortschritt analysieren", "Training anhand Daten anpassen", "Stagnation erkennen"],
                anforderungen: ["Nur bereitgestellte Trainingsdaten verwenden", "Kurzfristige Schwankungen berücksichtigen", "Leistung und subjektives Empfinden trennen", "Keine Ursachen ohne Beleg behaupten"],
                ausgabeformate: ["Fortschrittsanalyse", "Trainingstrend", "Anpassungsvorschläge"]
            },

            ziele: {
                name: "Sportziele",
                rollen: ["Sport-Coach", "Trainingsplaner", "Zielsetzungs-Coach"],
                ziele: ["Sportziel definieren", "Ziel in Trainingsschritte zerlegen", "Realistischen Zeitrahmen entwickeln"],
                anforderungen: ["Ausgangsniveau berücksichtigen", "Ziel messbar formulieren", "Zwischenziele definieren", "Unrealistische Ergebnisse nicht versprechen"],
                ausgabeformate: ["Sportziel-Plan", "Meilensteine", "Trainings-Roadmap"]
            },

            regeneration: {
                name: "Regeneration",
                rollen: ["Regenerations-Coach", "Fitnesstrainer", "Trainingsplaner"],
                ziele: ["Regeneration im Training planen", "Belastung und Erholung besser verteilen", "Regenerationsroutine entwickeln"],
                anforderungen: ["Trainingsbelastung berücksichtigen", "Schlaf und Ruhetage einbeziehen", "Schmerzen oder Beschwerden nicht diagnostizieren", "Erholung nicht durch zusätzliches Training ersetzen"],
                ausgabeformate: ["Regenerationsplan", "Wochenübersicht", "Recovery-Checkliste"]
            },

            routinen: {
                name: "Routinen",
                rollen: ["Fitness-Routine-Coach", "Gewohnheitsberater", "Sport-Coach"],
                ziele: ["Bewegungsroutine entwickeln", "Sport regelmäßig in Alltag integrieren", "Bestehende Routine vereinfachen"],
                anforderungen: ["Verfügbare Zeit berücksichtigen", "Niedrige Einstiegshürde bevorzugen", "Realistische Häufigkeit planen", "Alternativen für stressige Tage vorsehen"],
                ausgabeformate: ["Sport-Routine", "Wochenroutine", "Minimal-und-Optimal-Version"]
            },

            fitness: {
                name: "Allgemeine Fitnessplanung",
                rollen: ["Fitness-Coach", "Personal Trainer", "Trainingsplaner"],
                ziele: ["Allgemeine Fitness verbessern", "Ausgewogenes Training planen", "Bewegung langfristig strukturieren"],
                anforderungen: ["Aktuelles Niveau berücksichtigen", "Kraft, Ausdauer und Beweglichkeit ausgewogen betrachten", "Erholung berücksichtigen", "Training schrittweise steigern"],
                ausgabeformate: ["Fitnessplan", "Wochenprogramm", "Mehrwöchige Fitness-Roadmap"]
            }
        }
    },

    // ==================================================
    // 20. KREATIVITÄT & IDEENFINDUNG
    // ==================================================

    kreativitaet: {

        name: "Kreativität & Ideenfindung",
        icon: "💡",

        unterkategorien: {

            brainstorming: {
                name: "Brainstorming",
                rollen: ["Brainstorming-Moderator", "Creative Director", "Ideen-Coach"],
                ziele: ["Viele Ideen erzeugen", "Thema aus mehreren Richtungen betrachten", "Brainstorming strukturieren"],
                anforderungen: ["Bewertung zunächst zurückstellen", "Mehrere unterschiedliche Richtungen erzeugen", "Auch ungewöhnliche Ideen zulassen", "Doppelungen vermeiden"],
                ausgabeformate: ["Brainstorming-Liste", "Ideencluster", "30 Ideen"]
            },

            ideen: {
                name: "Ideen entwickeln",
                rollen: ["Ideen-Coach", "Creative Strategist", "Innovationsberater"],
                ziele: ["Neue Ideen entwickeln", "Mehrere Lösungsansätze finden", "Aus grober Idee konkrete Konzepte machen"],
                anforderungen: ["Mehrere unterschiedliche Ansätze liefern", "Ziel und Rahmenbedingungen berücksichtigen", "Umsetzbarkeit grob einschätzen", "Nicht nur offensichtliche Ideen nennen"],
                ausgabeformate: ["10 Ideen", "Drei ausgearbeitete Konzepte", "Ideenmatrix"]
            },

            verbessern: {
                name: "Ideen verbessern",
                rollen: ["Creative Consultant", "Ideenentwickler", "Innovationscoach"],
                ziele: ["Bestehende Idee verbessern", "Schwachstellen erkennen", "Idee konkreter und attraktiver machen"],
                anforderungen: ["Kernidee erhalten", "Stärken und Schwächen benennen", "Verbesserungen begründen", "Mehrere Entwicklungsrichtungen anbieten"],
                ausgabeformate: ["Verbesserte Idee", "Vorher-Nachher-Konzept", "Optimierungsvorschläge"]
            },

            bewerten: {
                name: "Ideen bewerten",
                rollen: ["Ideenanalyst", "Innovationsberater", "Kritischer Sparringspartner"],
                ziele: ["Ideen bewerten", "Beste Idee auswählen", "Chancen und Schwächen vergleichen"],
                anforderungen: ["Einheitliche Kriterien verwenden", "Kreativität und Umsetzbarkeit getrennt bewerten", "Annahmen kennzeichnen", "Bewertung begründen"],
                ausgabeformate: ["Bewertungsmatrix", "Rangliste", "Stärken-Schwächen-Vergleich"]
            },

            problemloesung: {
                name: "Kreative Problemlösung",
                rollen: ["Creative Problem Solver", "Innovationscoach", "Design-Thinking-Berater"],
                ziele: ["Problem kreativ lösen", "Neue Lösungswege entwickeln", "Festgefahrene Situation neu betrachten"],
                anforderungen: ["Problem zuerst klar definieren", "Mehrere Lösungsprinzipien prüfen", "Ungewöhnliche Ansätze zulassen", "Umsetzbarkeit berücksichtigen"],
                ausgabeformate: ["Lösungsvarianten", "Ideenmatrix", "Kreativer Aktionsplan"]
            },

            konzepte: {
                name: "Neue Konzepte",
                rollen: ["Konzeptentwickler", "Creative Director", "Innovationsberater"],
                ziele: ["Neues Konzept entwickeln", "Idee vollständig ausarbeiten", "Mehrere Konzeptrichtungen erstellen"],
                anforderungen: ["Zielgruppe und Zweck definieren", "Kernidee klar formulieren", "Umsetzung grob beschreiben", "Unterschiedliche Varianten liefern"],
                ausgabeformate: ["Konzept", "Drei Konzeptvarianten", "Concept Brief"]
            },

            produktideen: {
                name: "Produktideen",
                rollen: ["Product Innovation Consultant", "Produktentwickler", "Ideen-Coach"],
                ziele: ["Neue Produktideen entwickeln", "Produktproblem lösen", "MVP-Ideen entwickeln"],
                anforderungen: ["Konkretes Nutzerproblem berücksichtigen", "Kernnutzen definieren", "MVP klein halten", "Technische Umsetzbarkeit grob berücksichtigen"],
                ausgabeformate: ["10 Produktideen", "Produktkonzepte", "MVP-Ideenmatrix"]
            },

            appIdeen: {
                name: "App-Ideen",
                rollen: ["Digital Product Strategist", "App-Ideen-Coach", "Product Designer"],
                ziele: ["Neue App-Ideen entwickeln", "App-Konzept aus Problem ableiten", "MVP für App entwickeln"],
                anforderungen: ["Nutzerproblem definieren", "Kernfunktion priorisieren", "Unnötige Features vermeiden", "Technischen Aufwand grob einschätzen"],
                ausgabeformate: ["10 App-Ideen", "Drei App-Konzepte", "MVP-Konzept"]
            },

            geschaeftsideen: {
                name: "Geschäftsideen",
                rollen: ["Business-Ideenberater", "Entrepreneurship Coach", "Innovationsberater"],
                ziele: ["Neue Geschäftsideen entwickeln", "Kundenproblem in Geschäftsmodell übersetzen", "Mehrere Business-Ideen vergleichen"],
                anforderungen: ["Kundenproblem berücksichtigen", "Einnahmemöglichkeit grob beschreiben", "Annahmen kennzeichnen", "Umsetzbarkeit grob bewerten"],
                ausgabeformate: ["10 Geschäftsideen", "Business-Ideenmatrix", "Top-3-Konzepte"]
            },

            projektnamen: {
                name: "Projektnamen",
                rollen: ["Naming-Experte", "Creative Copywriter", "Brand Consultant"],
                ziele: ["Projektnamen entwickeln", "Bestehenden Namen verbessern", "Mehrere Namensrichtungen erzeugen"],
                anforderungen: ["Projektzweck berücksichtigen", "Leicht merkbare Namen bevorzugen", "Mehrere Stilrichtungen anbieten", "Verfügbarkeit nicht behaupten"],
                ausgabeformate: ["20 Projektnamen", "Namen nach Stil", "Top-5 mit Begründung"]
            },

            markennamen: {
                name: "Markennamen",
                rollen: ["Naming Consultant", "Brand Strategist", "Creative Director"],
                ziele: ["Markennamen entwickeln", "Namensrichtungen vergleichen", "Passenden Markencharakter ausdrücken"],
                anforderungen: ["Markenwirkung berücksichtigen", "Zielgruppe beachten", "Aussprechbarkeit berücksichtigen", "Marken- oder Domainverfügbarkeit nicht behaupten"],
                ausgabeformate: ["20 Markennamen", "Namensrichtungen", "Top-5 mit Begründung"]
            },

            slogans: {
                name: "Slogans",
                rollen: ["Slogan-Texter", "Brand Copywriter", "Creative Director"],
                ziele: ["Slogan entwickeln", "Markenbotschaft kurz ausdrücken", "Mehrere Sloganrichtungen finden"],
                anforderungen: ["Kernaussage berücksichtigen", "Kurz und merkbar formulieren", "Keine unbelegten Versprechen verwenden", "Mehrere Tonalitäten liefern"],
                ausgabeformate: ["20 Slogans", "Slogans nach Stil", "Top-5 mit Begründung"]
            },

            geschichten: {
                name: "Geschichten",
                rollen: ["Kreativautor", "Story Writer", "Dramaturg"],
                ziele: ["Geschichte entwickeln", "Handlung schreiben", "Bestehende Geschichte weiterentwickeln"],
                anforderungen: ["Figuren konsistent halten", "Konflikt und Entwicklung einbauen", "Gewünschten Stil berücksichtigen", "Klischees möglichst vermeiden"],
                ausgabeformate: ["Kurzgeschichte", "Story-Outline", "Szenenfolge"]
            },

            storytelling: {
                name: "Storytelling",
                rollen: ["Storytelling-Experte", "Dramaturg", "Narrative Designer"],
                ziele: ["Botschaft als Geschichte erzählen", "Spannungsbogen entwickeln", "Bestehende Story verbessern"],
                anforderungen: ["Ausgangssituation definieren", "Konflikt oder Herausforderung verwenden", "Klare Entwicklung schaffen", "Kernbotschaft organisch integrieren"],
                ausgabeformate: ["Story-Struktur", "Story-Konzept", "Komplette Geschichte"]
            },

            charaktere: {
                name: "Charaktere",
                rollen: ["Character Designer", "Autor", "Narrative Designer"],
                ziele: ["Charakter entwickeln", "Figur glaubwürdiger machen", "Mehrere Charakterkonzepte erstellen"],
                anforderungen: ["Motivation definieren", "Stärken und Schwächen kombinieren", "Widersprüche sinnvoll nutzen", "Charaktermerkmale konsistent halten"],
                ausgabeformate: ["Charakterprofil", "Character Sheet", "Drei Charaktervarianten"]
            },

            weltenbau: {
                name: "Weltenbau",
                rollen: ["Worldbuilding Designer", "Fantasy-Autor", "Narrative Designer"],
                ziele: ["Fiktive Welt entwickeln", "Regeln einer Welt definieren", "Bestehende Welt erweitern"],
                anforderungen: ["Innere Logik erhalten", "Geografie, Gesellschaft und Regeln berücksichtigen", "Widersprüche vermeiden", "Nicht alles unnötig detaillieren"],
                ausgabeformate: ["Worldbuilding-Konzept", "Weltenübersicht", "Worldbuilding-Bibel"]
            },

            schreibideen: {
                name: "Schreibideen",
                rollen: ["Schreibcoach", "Kreativautor", "Ideen-Coach"],
                ziele: ["Neue Schreibideen finden", "Schreibblockade lösen", "Mehrere Geschichtenansätze entwickeln"],
                anforderungen: ["Mehrere Genres berücksichtigen", "Nicht nur offensichtliche Ideen nennen", "Kernkonflikt pro Idee definieren", "Unterschiedliche Tonalitäten zulassen"],
                ausgabeformate: ["20 Schreibideen", "Story-Prompts", "Drei ausgearbeitete Ansätze"]
            },

            bildideen: {
                name: "Bildideen",
                rollen: ["Art Director", "Visual Concept Artist", "Ideen-Coach"],
                ziele: ["Neue Bildideen entwickeln", "Visuelles Konzept finden", "Mehrere Bildrichtungen erzeugen"],
                anforderungen: ["Motiv und Wirkung berücksichtigen", "Perspektive und Licht mitdenken", "Unterschiedliche Stilrichtungen anbieten", "Umsetzbarkeit berücksichtigen"],
                ausgabeformate: ["10 Bildideen", "Visual Concepts", "Moodboard-Beschreibungen"]
            },

            fotoideen: {
                name: "Fotoideen",
                rollen: ["Fotograf", "Creative Director", "Fotografie-Ideen-Coach"],
                ziele: ["Neue Fotoideen entwickeln", "Fotoserie planen", "Ungewöhnliche Perspektiven finden"],
                anforderungen: ["Vorhandene Ausrüstung berücksichtigen", "Ort und Licht beachten", "Mehrere unterschiedliche Konzepte liefern", "Aufwand grob einschätzen"],
                ausgabeformate: ["10 Fotoideen", "Shot List", "Drei Fotokonzepte"]
            },

            videoideen: {
                name: "Videoideen",
                rollen: ["Video-Konzeptentwickler", "Creative Director", "Content Creator"],
                ziele: ["Neue Videoideen entwickeln", "Videoserie planen", "Mehrere Videokonzepte entwickeln"],
                anforderungen: ["Plattform und Zielgruppe berücksichtigen", "Kernidee klar definieren", "Produktionsaufwand einschätzen", "Mehrere unterschiedliche Richtungen liefern"],
                ausgabeformate: ["10 Videoideen", "Drei Videokonzepte", "Videoideenmatrix"]
            },

            contentideen: {
                name: "Content-Ideen",
                rollen: ["Content Strategist", "Creative Director", "Content-Ideen-Coach"],
                ziele: ["Neue Content-Ideen entwickeln", "Themenserie entwickeln", "Content aus einem Thema ableiten"],
                anforderungen: ["Zielgruppe berücksichtigen", "Plattform beachten", "Mehrere Formate einbeziehen", "Nicht nur offensichtliche Ideen nennen"],
                ausgabeformate: ["20 Content-Ideen", "Content-Matrix", "Content-Serie"]
            },

            geschenkideen: {
                name: "Geschenkideen",
                rollen: ["Geschenkideen-Berater", "Kreativberater", "Persönlicher Ideen-Coach"],
                ziele: ["Passendes Geschenk finden", "Originelle Geschenkideen entwickeln", "Geschenk nach Anlass auswählen"],
                anforderungen: ["Person und Anlass berücksichtigen", "Budget beachten", "Interessen berücksichtigen", "Mehrere unterschiedliche Ideen liefern"],
                ausgabeformate: ["10 Geschenkideen", "Ideen nach Budget", "Top-5 mit Begründung"]
            },

            eventideen: {
                name: "Eventideen",
                rollen: ["Event-Konzeptentwickler", "Creative Director", "Event Planner"],
                ziele: ["Eventidee entwickeln", "Veranstaltung außergewöhnlicher gestalten", "Mehrere Eventkonzepte entwickeln"],
                anforderungen: ["Anlass und Zielgruppe berücksichtigen", "Budget und Ort beachten", "Umsetzbarkeit grob einschätzen", "Mehrere unterschiedliche Konzepte liefern"],
                ausgabeformate: ["10 Eventideen", "Drei Eventkonzepte", "Event-Ideenmatrix"]
            },

            hobbyideen: {
                name: "Hobbyideen",
                rollen: ["Hobby-Ideen-Coach", "Freizeitberater", "Kreativberater"],
                ziele: ["Neue Hobbys entdecken", "Passende Freizeitbeschäftigung finden", "Ungewöhnliche Hobbys kennenlernen"],
                anforderungen: ["Interessen berücksichtigen", "Zeit und Budget beachten", "Mehrere Kategorien abdecken", "Einstiegshürde grob einschätzen"],
                ausgabeformate: ["20 Hobbyideen", "Hobby-Shortlist", "Hobbys nach Aufwand"]
            },

            designideen: {
                name: "Designideen",
                rollen: ["Creative Designer", "Art Director", "Design-Ideen-Coach"],
                ziele: ["Neue Designidee entwickeln", "Bestehendes Design kreativ weiterdenken", "Mehrere Stilrichtungen entwickeln"],
                anforderungen: ["Zweck und Zielgruppe berücksichtigen", "Funktion und Ästhetik verbinden", "Mehrere deutlich unterschiedliche Ansätze liefern", "Umsetzbarkeit berücksichtigen"],
                ausgabeformate: ["Designkonzepte", "Drei Stilrichtungen", "Design-Ideenmatrix"]
            },

            ungewoehnlich: {
                name: "Ungewöhnliche Lösungen",
                rollen: ["Creative Problem Solver", "Innovationsberater", "Querdenkender Konzeptentwickler"],
                ziele: ["Ungewöhnliche Lösung finden", "Konventionelle Denkweise verlassen", "Neue Lösungsprinzipien entdecken"],
                anforderungen: ["Bewusste Regelbrüche als Ideen zulassen", "Umsetzbarkeit danach gesondert prüfen", "Mehrere unterschiedliche Prinzipien verwenden", "Risiken nennen"],
                ausgabeformate: ["Ungewöhnliche Ideen", "Wild-Ideas-Liste", "Ideen von realistisch bis experimentell"]
            },

            perspektivwechsel: {
                name: "Perspektivwechsel",
                rollen: ["Kreativer Sparringspartner", "Design-Thinking-Coach", "Perspektivwechsel-Moderator"],
                ziele: ["Problem aus anderer Sicht betrachten", "Neue Einsichten gewinnen", "Festgefahrene Annahmen hinterfragen"],
                anforderungen: ["Mehrere Perspektiven verwenden", "Annahmen explizit machen", "Keine Perspektive als automatisch richtig darstellen", "Neue Handlungsoptionen ableiten"],
                ausgabeformate: ["Perspektivenvergleich", "Reframing-Übung", "Neue Fragestellungen"]
            },

            kombinieren: {
                name: "Bestehende Ideen kombinieren",
                rollen: ["Concept Mixer", "Innovationsberater", "Creative Strategist"],
                ziele: ["Bestehende Ideen kombinieren", "Neue Konzepte aus vorhandenen Ansätzen erzeugen", "Stärken mehrerer Ideen verbinden"],
                anforderungen: ["Kernelemente jeder Idee identifizieren", "Kombination sinnvoll begründen", "Widersprüche erkennen", "Mehrere Kombinationen entwickeln"],
                ausgabeformate: ["Kombinationsmatrix", "Hybrid-Konzepte", "Drei kombinierte Ideen"]
            },

            inspiration: {
                name: "Inspiration",
                rollen: ["Creative Director", "Inspirations-Coach", "Ideen-Kurator"],
                ziele: ["Neue Inspiration finden", "Kreativen Ausgangspunkt entwickeln", "Neue Richtungen entdecken"],
                anforderungen: ["Thema und gewünschte Wirkung berücksichtigen", "Mehrere unterschiedliche Inspirationsquellen nutzen", "Konkrete Impulse statt nur Schlagwörter liefern", "Offene Exploration zulassen"],
                ausgabeformate: ["Inspirationsliste", "Moodboard-Beschreibung", "Kreative Impulse"]
            },

            sparring: {
                name: "Kreativpartner / Sparringspartner",
                rollen: ["Kreativer Sparringspartner", "Creative Coach", "Kritischer Ideenpartner"],
                ziele: ["Idee gemeinsam weiterentwickeln", "Idee kritisch hinterfragen", "Neue Möglichkeiten im Dialog entdecken"],
                anforderungen: ["Erst vorhandene Idee verstehen", "Konstruktiv widersprechen", "Konkrete Rückfragen stellen", "Stärken und Schwächen offen benennen"],
                ausgabeformate: ["Sparring-Dialog", "Kritisches Feedback", "Idee plus nächste Entwicklungsfragen"]
            }
        }
    }

};
// ======================================================
// REGEL-PAKETE
// ======================================================

const regelPakete = {

    fakten: {

        name: "Faktenmodus",

        beschreibung:
            "Keine Spekulationen oder unbelegten Annahmen.",

        regeln: [
            "Erfinde keine Informationen.",
            "Triff keine unbelegten Annahmen.",
            "Kennzeichne Unsicherheiten klar.",
            "Nenne fehlende Informationen.",
            "Trenne Fakten und Schlussfolgerungen."
        ]
    },


    quellen: {

        name: "Quellenmodus",

        beschreibung:
            "Aussagen sollen nachvollziehbar und belegbar sein.",

        regeln: [
            "Gib Quellen für überprüfbare Tatsachen an, sofern Quellen verfügbar sind.",
            "Erfinde niemals Quellen, Studien oder Zitate.",
            "Kennzeichne Aussagen, für die keine belastbare Quelle vorliegt."
        ]
    },


    bildanalyse: {

        name: "Strenge Bildanalyse",

        beschreibung:
            "Nur das beschreiben, was aus dem Bild wirklich hervorgeht.",

        regeln: [
            "Stelle nur sichtbare Bildinhalte als Tatsachen dar.",
            "Trenne Beobachtung und Interpretation.",
            "Erfinde keine EXIF-Daten.",
            "Erfinde keine unbekannten Aufnahmebedingungen.",
            "Kennzeichne Unsicherheiten."
        ]
    },


    kreativ: {

        name: "Kreativmodus",

        beschreibung:
            "Kreative Ergänzungen und ungewöhnliche Ideen sind ausdrücklich erlaubt.",

        regeln: [
            "Kreative Ergänzungen sind erlaubt.",
            "Entwickle mehrere unterschiedliche Varianten.",
            "Berücksichtige auch ungewöhnliche Ideen.",
            "Kennzeichne erfundene Elemente als kreative Konzepte, wenn dies relevant ist."
        ]
    },


    originaltreue: {

        name: "Originaltreue",

        beschreibung:
            "Vorhandene Inhalte sollen möglichst unverändert erhalten bleiben.",

        regeln: [
            "Bewahre vorhandene Inhalte und Merkmale möglichst.",
            "Vermeide unnötige Veränderungen.",
            "Verfälsche reale Produkte oder Eigenschaften nicht.",
            "Nenne wesentliche vorgeschlagene Änderungen transparent."
        ]
    },


    technisch: {

        name: "Technischer Modus",

        beschreibung:
            "Konkrete Werte und technische Angaben sauber behandeln.",

        regeln: [
            "Nenne konkrete Werte, wenn sie bekannt sind.",
            "Gib Einheiten an.",
            "Kennzeichne fehlende technische Angaben.",
            "Erfinde keine technischen Spezifikationen.",
            "Nenne wichtige Voraussetzungen."
        ]
    }
};


// ======================================================
// ORDNER-ICONS
// ======================================================

// ======================================================
// EMPFOHLENE REGEL-PAKETE
// ======================================================
//
// Hier legen wir fest, welche Regel-Pakete für eine
// Unterkategorie besonders sinnvoll sind.
//
// Die Empfehlungen werden später in script.js:
//
// 1. automatisch vorausgewählt
// 2. mit einem ⭐ als "Empfohlen" gekennzeichnet
// 3. weiterhin jederzeit vom Nutzer abwählbar
//
// Aufbau:
//
// Hauptkategorie
//     ↓
// Unterkategorie
//     ↓
// Array mit Regel-Paket-Schlüsseln
//
// Verfügbare Regel-Pakete:
//
// "fakten"
// "quellen"
// "bildanalyse"
// "kreativ"
// "originaltreue"
// "technisch"
//
// Unterkategorien ohne Eintrag bekommen keine
// automatische Empfehlung.
// ======================================================

// ======================================================
// EMPFOHLENE ANFORDERUNGEN
// ======================================================
//
// Hier legen wir fest, welche Anforderungen beim Öffnen
// einer Unterkategorie automatisch vorausgewählt werden.
//
// Wichtig:
//
// Die Texte müssen exakt so geschrieben sein wie die
// entsprechenden Einträge im Array "anforderungen"
// der jeweiligen Unterkategorie.
//
// Die Auswahl bleibt für den Nutzer jederzeit änderbar.
// ======================================================

const anforderungsEmpfehlungen = {


    // ==================================================
    // BILD & VISUELLE MEDIEN
    // ==================================================

    bild: {

        fotografie: [
            "Praxisnahe Empfehlungen geben",
            "Konkrete Einstellungen nennen",
            "Wichtigste Maßnahmen priorisieren"
        ],

        bildbearbeitung: [
            "Reihenfolge der Bearbeitung nennen",
            "Konkrete Regler oder Werkzeuge nennen",
            "Natürliche Ergebnisse bevorzugen"
        ],

        kiBildgenerierung: [
            "Motiv klar definieren",
            "Licht beschreiben",
            "Stil eindeutig formulieren"
        ],

        grafikdesign: [
            "Klare visuelle Hierarchie",
            "Gute Lesbarkeit",
            "Zielgruppe berücksichtigen"
        ],

        illustration: [
            "Passende Farbpalette",
            "Konsistenten Stil verwenden",
            "Bildwirkung definieren"
        ],

        bildanalyse: [
            "Beobachtung und Interpretation trennen",
            "Wichtigste Probleme priorisieren",
            "Verbesserungen begründen"
        ],

        komposition: [
            "Mehrere Varianten anbieten",
            "Wirkung jeder Variante erklären",
            "Empfehlungen priorisieren"
        ],

        socialMedia: [
            "Mobil gut lesbar",
            "Klare Hauptbotschaft",
            "Plattform berücksichtigen"
        ],

        produktbilder: [
            "Produkt realistisch darstellen",
            "Materialeigenschaften berücksichtigen",
            "Reproduzierbaren Workflow entwickeln"
        ],

        branding: [
            "Wiedererkennbarkeit berücksichtigen",
            "Zielgruppe berücksichtigen",
            "Konsistente Gestaltung"
        ],

        druckExport: [
            "Maße nennen",
            "Auflösung nennen",
            "Farbraum berücksichtigen"
        ],

        inspiration: [
            "Mehrere unterschiedliche Ideen liefern",
            "Nicht nur offensichtliche Vorschläge machen",
            "Umsetzbarkeit berücksichtigen"
        ]
    },


    // ==================================================
    // VIDEO & AUDIO
    // ==================================================

    videoAudio: {

        videoerstellung: [
            "Zielgruppe und Plattform berücksichtigen",
            "Konkrete Szenen und Aufnahmen nennen",
            "Realistischen Aufwand einschätzen"
        ],

        videoschnitt: [
            "Konkrete Schnittreihenfolge nennen",
            "Bild und Ton aufeinander abstimmen",
            "Exportqualität und Dateigröße beachten"
        ],

        kiVideo: [
            "Motiv und Handlung eindeutig beschreiben",
            "Kamerabewegung beschreiben",
            "Licht und Stimmung definieren"
        ],

        drehbuch: [
            "Klare Dramaturgie verwenden",
            "Natürlich klingende Sprache schreiben",
            "Kernbotschaft klar herausarbeiten"
        ],

        storyboard: [
            "Bildinhalt konkret beschreiben",
            "Kameraperspektive und Bewegung nennen",
            "Handlung und Sprechertext zuordnen"
        ],

        youtube: [
            "Nutzen des Videos früh vermitteln",
            "Starken Einstieg entwickeln",
            "Klare Kapitelstruktur verwenden"
        ],

        kurzvideos: [
            "Hauptaussage sofort erkennbar machen",
            "Starken Einstieg in den ersten Sekunden verwenden",
            "Nur eine zentrale Botschaft pro Video verwenden"
        ],

        podcast: [
            "Klare Themenstruktur entwickeln",
            "Natürliches Gespräch ermöglichen",
            "Wichtige Kernpunkte priorisieren"
        ],

        voiceover: [
            "Für gesprochene Sprache schreiben",
            "Gewünschte Sprechdauer berücksichtigen",
            "Tonalität zur Zielgruppe passend wählen"
        ],

        audiobearbeitung: [
            "Bearbeitung in sinnvoller Reihenfolge erklären",
            "Konkrete Werkzeuge und Einstellungen nennen",
            "Originalaufnahme möglichst natürlich erhalten"
        ],

        musik: [
            "Gewünschte Stimmung berücksichtigen",
            "Instrumentierung konkret beschreiben",
            "Musikalische Entwicklung strukturieren"
        ],

        kiMusik: [
            "Genre und Stimmung klar beschreiben",
            "Instrumentierung konkret definieren",
            "Song- oder Musikstruktur beschreiben"
        ],

        interviews: [
            "Offene Fragen bevorzugen",
            "Suggestivfragen vermeiden",
            "Vertiefende Nachfragen vorbereiten"
        ],

        erklaervideos: [
            "Vorwissen der Zielgruppe berücksichtigen",
            "Komplexe Inhalte schrittweise erklären",
            "Konkrete Visualisierungsideen nennen"
        ],

        videoideen: [
            "Mehrere deutlich unterschiedliche Ideen liefern",
            "Nicht nur offensichtliche Vorschläge machen",
            "Umsetzbarkeit berücksichtigen"
        ]
    },


    // ==================================================
    // SCHREIBEN & KOMMUNIKATION
    // ==================================================

    schreiben: {

        emails: [
            "Kernaussage schnell verständlich machen",
            "Passende Tonalität verwenden",
            "Konkrete nächste Schritte deutlich nennen"
        ],

        briefe: [
            "Sachverhalt präzise darstellen",
            "Wichtige Fakten vollständig übernehmen",
            "Klare Forderung oder Erwartung formulieren"
        ],

        umformulieren: [
            "Inhalt und Bedeutung erhalten",
            "Keine neuen Fakten hinzufügen",
            "Natürlich und verständlich formulieren"
        ],

        rechtschreibung: [
            "Inhalt nicht verändern",
            "Rechtschreibung und Grammatik vollständig prüfen",
            "Stiländerungen von echten Fehlerkorrekturen trennen"
        ],

        zusammenfassungen: [
            "Nur Informationen aus dem Ausgangstext verwenden",
            "Wichtigste Aussagen priorisieren",
            "Bedeutung des Originals erhalten"
        ],

        uebersetzungen: [
            "Bedeutung des Originals erhalten",
            "Keine Informationen hinzufügen oder entfernen",
            "Natürlich in der Zielsprache formulieren"
        ],

        bewerbung: [
            "Stellenanforderungen konkret berücksichtigen",
            "Nur tatsächlich genannte Erfahrungen verwenden",
            "Keine Fähigkeiten oder Erfahrungen erfinden"
        ],

        lebenslauf: [
            "Nur tatsächlich genannte Erfahrungen verwenden",
            "Keine Qualifikationen erfinden",
            "Relevante Erfahrungen priorisieren"
        ],

        geschaeftlich: [
            "Sachlich und professionell formulieren",
            "Kernaussage klar hervorheben",
            "Konkrete nächste Schritte nennen"
        ],

        kundenkommunikation: [
            "Kundenperspektive berücksichtigen",
            "Problem oder Anliegen konkret beantworten",
            "Nächste Schritte klar erklären"
        ],

        reklamationen: [
            "Nur bekannte Fakten verwenden",
            "Sachverhalt chronologisch darstellen",
            "Gewünschte Lösung konkret nennen"
        ],

        argumentation: [
            "Fakten und Meinungen unterscheiden",
            "Stärkste Argumente priorisieren",
            "Realistische Gegenargumente berücksichtigen"
        ],

        praesentationstexte: [
            "Für gesprochene Sprache formulieren",
            "Eine klare Kernbotschaft pro Abschnitt verwenden",
            "Zielgruppe und Vorwissen berücksichtigen"
        ],

        reden: [
            "Für gesprochene Sprache schreiben",
            "Klare Dramaturgie verwenden",
            "Kernbotschaft deutlich herausarbeiten"
        ],

        socialTexte: [
            "Plattform berücksichtigen",
            "Hauptbotschaft früh vermitteln",
            "Zur Zielgruppe passend formulieren"
        ],

        blog: [
            "Klare Überschriftenstruktur verwenden",
            "Kernaussagen verständlich erklären",
            "Unbelegte Fakten vermeiden"
        ],

        produkttexte: [
            "Nur bekannte Produkteigenschaften verwenden",
            "Keine technischen Eigenschaften erfinden",
            "Wichtigste Vorteile priorisieren"
        ],

        kreativSchreiben: [
            "Gewünschten Stil berücksichtigen",
            "Atmosphäre konkret erzeugen",
            "Figuren konsistent darstellen"
        ],

        storytelling: [
            "Klare Ausgangssituation schaffen",
            "Konflikt oder Herausforderung definieren",
            "Passenden Abschluss entwickeln"
        ],

        schreibstil: [
            "Bedeutung des Textes erhalten",
            "Gewünschte Tonalität konsequent verwenden",
            "Keine neuen Fakten hinzufügen"
        ],

        gespraechsvorbereitung: [
            "Eigenes Gesprächsziel klar definieren",
            "Fakten und Annahmen unterscheiden",
            "Mögliche Einwände vorbereiten"
        ],

        schwierigeGespraeche: [
            "Beobachtungen und Bewertungen trennen",
            "Konkretes Verhalten statt Persönlichkeit ansprechen",
            "Keine Motive der anderen Person als Fakten unterstellen"
        ],

        feedback: [
            "Konkrete Beobachtungen nennen",
            "Beobachtung und Bewertung unterscheiden",
            "Konkrete Verbesserung oder Erwartung nennen"
        ],

        kuerzen: [
            "Kernaussagen vollständig erhalten",
            "Keine neuen Informationen hinzufügen",
            "Bedeutung des Originals nicht verändern"
        ]
    },


    // ==================================================
    // SOCIAL MEDIA & CONTENT
    // ==================================================

    socialContent: {

        contentIdeen: [
            "Mehrere deutlich unterschiedliche Ideen liefern",
            "Zielgruppe berücksichtigen",
            "Umsetzbarkeit berücksichtigen"
        ],

        redaktionsplanung: [
            "Themen sinnvoll abwechseln",
            "Produktionsaufwand realistisch verteilen",
            "Wichtige Termine und Ereignisse berücksichtigen"
        ],

        instagram: [
            "Mobile Nutzung berücksichtigen",
            "Hauptbotschaft schnell vermitteln",
            "Zielgruppe berücksichtigen"
        ],

        tiktok: [
            "In den ersten Sekunden Aufmerksamkeit erzeugen",
            "Eine klare Kernbotschaft verwenden",
            "Unnötige Einleitungen vermeiden"
        ],

        youtube: [
            "Nutzen des Videos früh erklären",
            "Starken Einstieg verwenden",
            "Klare Kapitelstruktur entwickeln"
        ],

        linkedin: [
            "Professionell und natürlich formulieren",
            "Kernaussage früh vermitteln",
            "Unnötige Business-Floskeln vermeiden"
        ],

        facebook: [
            "Zielgruppe berücksichtigen",
            "Kernaussage klar formulieren",
            "Natürlich und verständlich schreiben"
        ],

        pinterest: [
            "Suchintention berücksichtigen",
            "Relevante Keywords natürlich verwenden",
            "Zielseite oder gewünschte Aktion berücksichtigen"
        ],

        xTwitter: [
            "Kernaussage sofort verständlich machen",
            "Knapp und präzise formulieren",
            "Keine unbelegten Behauptungen als Fakten darstellen"
        ],

        posts: [
            "Kernaussage früh vermitteln",
            "Plattform berücksichtigen",
            "Zielgruppe berücksichtigen"
        ],

        reels: [
            "In den ersten Sekunden Aufmerksamkeit erzeugen",
            "Nur eine zentrale Botschaft verwenden",
            "Unnötige Einleitungen vermeiden"
        ],

        captions: [
            "Bild oder Inhalt konkret berücksichtigen",
            "Kernaussage früh vermitteln",
            "Natürlich schreiben"
        ],

        hashtags: [
            "Thema und Zielgruppe berücksichtigen",
            "Relevanz vor Menge priorisieren",
            "Keine garantiert hohe Reichweite versprechen"
        ],

        hooks: [
            "Hauptthema sofort erkennbar machen",
            "Neugier ohne irreführendes Clickbait erzeugen",
            "Keine falschen Versprechen verwenden"
        ],

        contentSerien: [
            "Klare wiedererkennbare Struktur verwenden",
            "Genügend Themen für mehrere Folgen vorsehen",
            "Produktionsaufwand realistisch halten"
        ],

        community: [
            "Respektvolle Kommunikation verwenden",
            "Kritik sachlich behandeln",
            "Keine unnötigen Konflikte verschärfen"
        ],

        kommentare: [
            "Konkreten Kommentar berücksichtigen",
            "Respektvoll und natürlich antworten",
            "Keine unbekannten Fakten oder Zusagen erfinden"
        ],

        zielgruppenansprache: [
            "Nur bekannte Zielgruppeninformationen verwenden",
            "Keine unbelegten Eigenschaften unterstellen",
            "Nutzen für die Zielgruppe klar machen"
        ],

        recycling: [
            "Kernaussage des Originals erhalten",
            "Keine neuen Fakten erfinden",
            "Inhalt an jeweilige Plattform anpassen"
        ],

        strategie: [
            "Konkrete Ziele definieren",
            "Ressourcen und Produktionsaufwand berücksichtigen",
            "Messbare Kriterien vorschlagen"
        ],

        reichweite: [
            "Keine garantierten Reichweitenversprechen machen",
            "Organische und realistische Maßnahmen bevorzugen",
            "Messbare Experimente vorschlagen"
        ],

        personalBranding: [
            "Tatsächliche Fähigkeiten und Erfahrungen verwenden",
            "Keine Expertise erfinden",
            "Klare Positionierung entwickeln"
        ],

        unternehmensContent: [
            "Nur bekannte Unternehmensinformationen verwenden",
            "Keine Leistungen oder Erfolge erfinden",
            "Werbliche Übertreibungen vermeiden"
        ],

        analyse: [
            "Nur bereitgestellte Daten als Fakten verwenden",
            "Keine Ursachen ohne Beleg als Fakten darstellen",
            "Beobachtung und Interpretation trennen"
        ]
    },

        // ==================================================
    // MARKETING & WERBUNG
    // ==================================================

    marketing: {

        strategie: [
            "Zielgruppe konkret berücksichtigen",
            "Klare Marketingziele definieren",
            "Maßnahmen nach Wirkung und Aufwand priorisieren"
        ],

        zielgruppen: [
            "Nur bekannte Informationen als Fakten darstellen",
            "Vermutungen deutlich als Annahmen kennzeichnen",
            "Keine Eigenschaften der Zielgruppe erfinden"
        ],

        kampagnen: [
            "Kampagnenziel klar definieren",
            "Zielgruppe berücksichtigen",
            "Messbare Kennzahlen definieren"
        ],

        werbetexte: [
            "Nur bekannte Produktvorteile verwenden",
            "Keine Eigenschaften oder Ergebnisse erfinden",
            "Kundennutzen klar herausarbeiten"
        ],

        ads: [
            "Zielgruppe klar ansprechen",
            "Eine zentrale Botschaft pro Anzeige verwenden",
            "Keine unbelegten Leistungsversprechen machen"
        ],

        positionierung: [
            "Nur tatsächlich vorhandene Stärken verwenden",
            "Keine Alleinstellungsmerkmale erfinden",
            "Zielgruppe berücksichtigen"
        ],

        branding: [
            "Zielgruppe berücksichtigen",
            "Markenwerte klar definieren",
            "Konsistente Markenpersönlichkeit entwickeln"
        ],

        naming: [
            "Mehrere deutlich unterschiedliche Ansätze liefern",
            "Gewünschte Markenwirkung berücksichtigen",
            "Keine Verfügbarkeit von Marken oder Domains behaupten"
        ],

        produktmarketing: [
            "Nur bekannte Produkteigenschaften verwenden",
            "Keine Leistungsmerkmale erfinden",
            "Eigenschaften und Kundennutzen unterscheiden"
        ],

        contentMarketing: [
            "Zielgruppe berücksichtigen",
            "Marketingziel pro Inhalt definieren",
            "Customer Journey berücksichtigen"
        ],

        emailMarketing: [
            "Empfänger und Funnel-Stufe berücksichtigen",
            "Eine klare Kernbotschaft pro E-Mail verwenden",
            "Call-to-Action eindeutig formulieren"
        ],

        newsletter: [
            "Kernaussage früh vermitteln",
            "Zielgruppe berücksichtigen",
            "Mehrwert für Leser priorisieren"
        ],

        seo: [
            "Suchintention berücksichtigen",
            "Keine Ranking-Garantien geben",
            "Technische und inhaltliche Maßnahmen unterscheiden"
        ],

        keywords: [
            "Keywords thematisch gruppieren",
            "Suchintention unterscheiden",
            "Keine Suchvolumina erfinden"
        ],

        landingpages: [
            "Eine zentrale Zielhandlung definieren",
            "Nutzen früh und klar kommunizieren",
            "Nur bekannte Vorteile und Belege verwenden"
        ],

        verkaufsseiten: [
            "Nur belegbare Eigenschaften und Vorteile verwenden",
            "Keine Ergebnisse garantieren",
            "Einwände der Zielgruppe berücksichtigen"
        ],

        leads: [
            "Zielgruppe klar definieren",
            "Qualität der Leads vor reiner Menge berücksichtigen",
            "Messbare Funnel-Schritte definieren"
        ],

        kundenansprache: [
            "Zielgruppe und Situation berücksichtigen",
            "Keine persönlichen Informationen erfinden",
            "Kundennutzen konkret formulieren"
        ],

        wettbewerb: [
            "Nur bereitgestellte oder belegbare Informationen als Fakten verwenden",
            "Keine Eigenschaften von Wettbewerbern erfinden",
            "Fakten und Interpretation trennen"
        ],

        marktanalyse: [
            "Fakten und Annahmen unterscheiden",
            "Keine Marktgrößen oder Kennzahlen erfinden",
            "Informationslücken klar benennen"
        ],

        angebote: [
            "Nur tatsächlich angebotene Leistungen verwenden",
            "Leistungsumfang eindeutig beschreiben",
            "Unklare oder übertriebene Versprechen vermeiden"
        ],

        preisargumentation: [
            "Keine erfundenen Einsparungen oder Ergebnisse verwenden",
            "Wert und Preis voneinander unterscheiden",
            "Typische Einwände sachlich behandeln"
        ],

        conversion: [
            "Beobachtung und Vermutung unterscheiden",
            "Keine Conversion-Steigerungen garantieren",
            "Testbare Hypothesen formulieren"
        ],

        kampagnenideen: [
            "Mehrere deutlich unterschiedliche Ideen liefern",
            "Zielgruppe berücksichtigen",
            "Umsetzbarkeit grob einschätzen"
        ],

        marketingplan: [
            "Zeitraum klar strukturieren",
            "Budget und Ressourcen berücksichtigen",
            "Messbare Kennzahlen festlegen"
        ],

        guerilla: [
            "Kreative und unterschiedliche Ideen liefern",
            "Praktische Umsetzbarkeit berücksichtigen",
            "Sicherheit und Rechte Dritter berücksichtigen"
        ],

        offline: [
            "Zielgruppe und Standort berücksichtigen",
            "Botschaft schnell verständlich machen",
            "Erfolgsmessung mitdenken"
        ],

        eventMarketing: [
            "Zielgruppe berücksichtigen",
            "Eventnutzen klar formulieren",
            "Anmeldung oder gewünschte Aktion klar machen"
        ],

        kundenbindung: [
            "Bestehende Kundenbeziehung berücksichtigen",
            "Konkreten Kundennutzen bieten",
            "Messbare Kennzahlen definieren"
        ],

        kennzahlen: [
            "Nur bereitgestellte Daten als Fakten verwenden",
            "Keine Ursachen ohne Beleg als Fakten darstellen",
            "Beobachtung und Interpretation trennen"
        ]
    },

    // ==================================================
    // PROGRAMMIERUNG & SOFTWAREENTWICKLUNG
    // ==================================================

    programmierung: {

        lernen: [
            "Kenntnisstand berücksichtigen",
            "Fachbegriffe verständlich erklären",
            "Theorie und praktische Übungen verbinden"
        ],

        codeGenerieren: [
            "Code vollständig und ausführbar liefern",
            "Keine nicht genannten Abhängigkeiten voraussetzen",
            "Benötigte Dateien eindeutig benennen"
        ],

        codeErklaeren: [
            "Nur tatsächlich vorhandenen Code erklären",
            "Fachbegriffe verständlich erklären",
            "Unklare oder fehlende Teile kennzeichnen"
        ],

        debugging: [
            "Ursache und Symptom unterscheiden",
            "Mit der wahrscheinlichsten Ursache beginnen",
            "Nach jedem Schritt eine konkrete Prüfung nennen"
        ],

        refactoring: [
            "Bestehende Funktionalität erhalten",
            "Keine unnötigen Funktionsänderungen durchführen",
            "Risiken größerer Änderungen kennzeichnen"
        ],

        htmlCss: [
            "Semantisches HTML verwenden",
            "Responsive Darstellung berücksichtigen",
            "Bestehendes Design möglichst erhalten"
        ],

        javascript: [
            "Vorhandene HTML-Struktur berücksichtigen",
            "Bestehende Funktionen nicht unnötig verändern",
            "Code modular und nachvollziehbar halten"
        ],

        python: [
            "Python-Version berücksichtigen",
            "Benötigte Bibliotheken nennen",
            "Keine unnötigen externen Abhängigkeiten verwenden"
        ],

        java: [
            "Java-Version berücksichtigen",
            "Klassen sinnvoll strukturieren",
            "Bestehende Schnittstellen berücksichtigen"
        ],

        csharp: [
            ".NET-Version berücksichtigen",
            "Bestehende Architektur berücksichtigen",
            "Asynchrone Abläufe korrekt behandeln, wenn relevant"
        ],

        cpp: [
            "Verwendeten Sprachstandard berücksichtigen",
            "Speicherverwaltung beachten",
            "Undefined Behavior vermeiden"
        ],

        sql: [
            "Verwendetes Datenbanksystem berücksichtigen",
            "Tabellen- und Spaltennamen exakt verwenden",
            "Keine unbekannten Felder erfinden"
        ],

        webentwicklung: [
            "Verwendete Technologien berücksichtigen",
            "Bestehende Struktur möglichst erhalten",
            "Benötigte Dateien und Abhängigkeiten nennen"
        ],

        backend: [
            "Eingaben validieren",
            "Sensible Daten schützen",
            "API-Schnittstellen klar definieren"
        ],

        api: [
            "API-Dokumentation berücksichtigen",
            "Keine Endpunkte oder Parameter erfinden",
            "Fehlerantworten behandeln"
        ],

        datenbanken: [
            "Entitäten und Beziehungen klar definieren",
            "Datentypen passend wählen",
            "Datenintegrität sicherstellen"
        ],

        git: [
            "Aktuellen Repository-Zustand berücksichtigen",
            "Datenverlust vermeiden",
            "Destruktive Befehle klar kennzeichnen"
        ],

        architektur: [
            "Funktionale Anforderungen berücksichtigen",
            "Einfachste geeignete Architektur bevorzugen",
            "Vor- und Nachteile wichtiger Entscheidungen nennen"
        ],

        appLogik: [
            "Eingaben und Ausgaben klar definieren",
            "Zustände und Übergänge berücksichtigen",
            "Sonderfälle berücksichtigen"
        ],

        automatisierung: [
            "Ausgangsprozess zuerst klar beschreiben",
            "Dateien oder Daten nicht ungefragt überschreiben",
            "Abhängigkeiten und Voraussetzungen nennen"
        ],

        skripte: [
            "Aufgabe möglichst einfach lösen",
            "Fehlerfälle behandeln",
            "Bestehende Dateien schützen"
        ],

        testing: [
            "Normale und kritische Sonderfälle berücksichtigen",
            "Erwartetes Ergebnis pro Test definieren",
            "Wichtige Risiken priorisieren"
        ],

        performance: [
            "Erst messen, dann optimieren",
            "Vermutete und gemessene Ursachen unterscheiden",
            "Vorher-Nachher-Messung empfehlen"
        ],

        sicherheit: [
            "Eingaben grundsätzlich validieren",
            "Geheimnisse nicht im Quellcode hinterlegen",
            "Berechtigungen nach Minimalprinzip vergeben"
        ],

        dokumentation: [
            "Nur tatsächlich vorhandene Funktionen dokumentieren",
            "Keine Befehle oder Schnittstellen erfinden",
            "Voraussetzungen klar nennen"
        ],

        anforderungen: [
            "Funktionale Anforderungen eindeutig formulieren",
            "Fehlende Angaben benennen",
            "Keine Anforderungen hinzuerfinden"
        ],

        erweitern: [
            "Bestehende Funktionen erhalten",
            "Nur notwendige Dateien ändern",
            "Keine funktionierenden Teile unnötig umschreiben"
        ],

        konvertieren: [
            "Funktionalität des Originals erhalten",
            "Sprachspezifische Besonderheiten berücksichtigen",
            "Verhaltensunterschiede transparent nennen"
        ],

        kiCoding: [
            "Anforderungen eindeutig formulieren",
            "Bestehenden Code als Kontext berücksichtigen",
            "KI-Code immer auf Fehler und Nebenwirkungen prüfen"
        ],

        projektstruktur: [
            "Projektgröße berücksichtigen",
            "Klare Verantwortlichkeiten pro Datei definieren",
            "Einfachste sinnvolle Struktur bevorzugen"
        ]
    },

    // ==================================================
    // WEBSEITEN & APPS
    // ==================================================

    webApps: {

        websitePlanen: [
            "Zielgruppe berücksichtigen",
            "Hauptziel der Website klar definieren",
            "Notwendige und optionale Funktionen unterscheiden"
        ],

        websiteErstellen: [
            "Vollständige benötigte Dateien liefern",
            "Responsive Darstellung berücksichtigen",
            "Semantisches HTML verwenden"
        ],

        webApp: [
            "Funktionen klar voneinander trennen",
            "Bestehende Projektstruktur berücksichtigen",
            "Fehlerfälle behandeln"
        ],

        mobileApp: [
            "Zielplattform klar berücksichtigen",
            "Mobile Bedienung priorisieren",
            "Berechtigungen nur bei Bedarf verwenden"
        ],

        pwa: [
            "Manifest korrekt konfigurieren",
            "Service Worker sinnvoll einsetzen",
            "Offline-Verhalten definieren"
        ],

        landingpage: [
            "Eine zentrale Zielhandlung definieren",
            "Wichtigste Botschaft früh sichtbar machen",
            "Mobile Nutzung berücksichtigen"
        ],

        unternehmenswebsite: [
            "Nur bekannte Unternehmensinformationen verwenden",
            "Zielgruppe berücksichtigen",
            "Kontaktmöglichkeiten leicht auffindbar machen"
        ],

        portfolio: [
            "Wichtigste Arbeiten priorisieren",
            "Persönliche Informationen nur nach Vorgabe verwenden",
            "Mobile Darstellung berücksichtigen"
        ],

        blog: [
            "Artikel gut lesbar darstellen",
            "Kategorien und Tags sinnvoll strukturieren",
            "Wartbare Inhaltspflege ermöglichen"
        ],

        shop: [
            "Preis- und Produktdaten korrekt behandeln",
            "Checkout möglichst einfach halten",
            "Sicherheit bei Zahlungs- und Kundendaten berücksichtigen"
        ],

        ui: [
            "Klare visuelle Hierarchie verwenden",
            "Konsistente Komponenten verwenden",
            "Barrierearme Gestaltung berücksichtigen"
        ],

        ux: [
            "Zielgruppe berücksichtigen",
            "Nutzerziel pro Ablauf definieren",
            "Unnötige Schritte reduzieren"
        ],

        navigation: [
            "Wichtigste Inhalte leicht erreichbar machen",
            "Bezeichnungen eindeutig formulieren",
            "Mobile Nutzung berücksichtigen"
        ],

        responsive: [
            "Mobile-First-Ansatz berücksichtigen",
            "Flexible Layouts bevorzugen",
            "Horizontales Scrollen vermeiden"
        ],

        formulare: [
            "Nur notwendige Felder verwenden",
            "Eingaben validieren",
            "Fehlermeldungen verständlich formulieren"
        ],

        login: [
            "Passwörter niemals im Klartext speichern",
            "Sichere Authentifizierung verwenden",
            "Sensible Daten schützen"
        ],

        datenSpeichern: [
            "Art und Sensibilität der Daten berücksichtigen",
            "Geeigneten Speicherort wählen",
            "Bestehende Daten nicht ungefragt überschreiben"
        ],

        datenbanken: [
            "Datenbankzugriff nicht unsicher direkt aus dem Browser durchführen",
            "Parametrisierte Abfragen verwenden",
            "Verbindungsdaten schützen"
        ],

        api: [
            "API-Dokumentation berücksichtigen",
            "Keine Endpunkte oder Parameter erfinden",
            "API-Schlüssel schützen"
        ],

        kiFunktionen: [
            "API-Schlüssel niemals im Frontend offenlegen",
            "KI-Ausgaben nicht ungeprüft als Fakten behandeln",
            "Kosten und Tokenverbrauch berücksichtigen"
        ],

        zahlung: [
            "Offizielle Zahlungsanbieter-Schnittstellen verwenden",
            "Zahlungsdaten nicht unnötig selbst speichern",
            "Zahlungsstatus nicht nur dem Frontend vertrauen"
        ],

        suche: [
            "Suchbereich klar definieren",
            "Keine Treffer verständlich darstellen",
            "Suchergebnisse nachvollziehbar sortieren"
        ],

        filter: [
            "Mehrere aktive Filter korrekt kombinieren",
            "Aktive Filter sichtbar machen",
            "Bestehende Daten nicht verändern"
        ],

        dashboards: [
            "Wichtigste Kennzahlen priorisieren",
            "Informationsüberladung vermeiden",
            "Lade- und Fehlerzustände anzeigen"
        ],

        admin: [
            "Zugriff auf berechtigte Nutzer beschränken",
            "Rollen und Rechte klar definieren",
            "Kritische Aktionen absichern"
        ],

        performance: [
            "Erst messen, dann optimieren",
            "Vermutete und gemessene Ursachen unterscheiden",
            "Vorher-Nachher-Messung vorsehen"
        ],

        barrierefreiheit: [
            "Semantisches HTML bevorzugen",
            "Tastaturbedienung berücksichtigen",
            "Fokuszustände sichtbar machen"
        ],

        sicherheit: [
            "Alle externen Eingaben validieren",
            "Geheimnisse nicht im Frontend oder Repository speichern",
            "Berechtigungen serverseitig prüfen"
        ],

        testing: [
            "Kritische Nutzerabläufe priorisieren",
            "Normale und fehlerhafte Eingaben testen",
            "Erwartetes Ergebnis je Test definieren"
        ],

        hosting: [
            "Art der Anwendung berücksichtigen",
            "Frontend- und Backend-Anforderungen unterscheiden",
            "Backup und Wiederherstellung berücksichtigen"
        ],

        deployment: [
            "Hosting-Anbieter berücksichtigen",
            "DNS-Einträge exakt behandeln",
            "Rollback-Möglichkeit berücksichtigen"
        ],

        wartung: [
            "Bestehende Funktionen erhalten",
            "Änderungen testbar gestalten",
            "Nur notwendige Teile verändern"
        ],

        ideen: [
            "Mehrere deutlich unterschiedliche Ideen entwickeln",
            "Konkretes Nutzerproblem benennen",
            "MVP möglichst klein halten"
        ]
    },

    // ==================================================
    // ALLTAG & ORGANISATION
    // ==================================================

    alltag: {

        tag: [
            "Feste Termine zuerst berücksichtigen",
            "Aufgaben nach Wichtigkeit priorisieren",
            "Pausen und Pufferzeiten berücksichtigen"
        ],

        woche: [
            "Feste Termine zuerst einplanen",
            "Wichtige Aufgaben priorisieren",
            "Realistische Arbeitslast pro Tag beachten"
        ],

        monat: [
            "Feste Termine zuerst berücksichtigen",
            "Monatsziele in konkrete Wochenaufgaben zerlegen",
            "Realistische Pufferzeiten einplanen"
        ],

        aufgaben: [
            "Prioritäten kennzeichnen",
            "Dringlichkeit und Wichtigkeit unterscheiden",
            "Große Aufgaben in umsetzbare Schritte zerlegen"
        ],

        prioritaeten: [
            "Dringlichkeit und Wichtigkeit getrennt bewerten",
            "Konsequenzen bei Nicht-Erledigung berücksichtigen",
            "Klare Reihenfolge empfehlen"
        ],

        termine: [
            "Feste Termine nicht verändern",
            "Zeitliche Überschneidungen erkennen",
            "Puffer zwischen Terminen berücksichtigen"
        ],

        haushalt: [
            "Aufgaben nach Häufigkeit gruppieren",
            "Realistischen Zeitaufwand berücksichtigen",
            "Praktische und einfache Lösungen bevorzugen"
        ],

        haushaltsplanung: [
            "Tägliche, wöchentliche und monatliche Aufgaben trennen",
            "Zeitaufwand realistisch einschätzen",
            "Plan einfach umsetzbar halten"
        ],

        einkaufslisten: [
            "Artikel nach Warengruppen gruppieren",
            "Doppelte Einträge entfernen",
            "Vorhandene Vorräte berücksichtigen"
        ],

        einkaufen: [
            "Budget berücksichtigen",
            "Notwendige und optionale Einkäufe trennen",
            "Besorgungen sinnvoll gruppieren"
        ],

        produktvergleich: [
            "Must-have- und Nice-to-have-Kriterien unterscheiden",
            "Vor- und Nachteile transparent nennen",
            "Unsicherheiten oder fehlende Angaben kennzeichnen"
        ],

        familie: [
            "Termine aller beteiligten Personen berücksichtigen",
            "Aufgaben eindeutig zuordnen",
            "Überlastung einzelner Personen vermeiden"
        ],

        erinnerungen: [
            "Konkrete Termine übernehmen, wenn vorhanden",
            "Keine Termine erfinden",
            "Dringende Erinnerungen hervorheben"
        ],

        checklisten: [
            "Schritte in sinnvoller Reihenfolge anordnen",
            "Pflichtpunkte und optionale Punkte unterscheiden",
            "Kritische Punkte hervorheben"
        ],

        routinen: [
            "Routine möglichst einfach halten",
            "Realistische Dauer festlegen",
            "Kleine Einstiegsversion anbieten"
        ],

        gewohnheiten: [
            "Mit kleinen realistischen Schritten beginnen",
            "Konkreten Auslöser definieren",
            "Fortschritt einfach messbar machen"
        ],

        zeit: [
            "Realistischen Zeitbedarf ansetzen",
            "Pufferzeiten berücksichtigen",
            "Wichtige Aufgaben bevorzugen"
        ],

        projekte: [
            "Projekt in überschaubare Arbeitspakete zerlegen",
            "Abhängigkeiten berücksichtigen",
            "Nächsten konkreten Schritt hervorheben"
        ],

        ordnung: [
            "In kleine Bereiche oder Schritte aufteilen",
            "Einfaches dauerhaftes System bevorzugen",
            "Konkrete nächste Schritte nennen"
        ],

        digital: [
            "Einfaches Ordnersystem bevorzugen",
            "Doppelte Ablagen vermeiden",
            "Bestehende Systeme möglichst weiterverwenden"
        ],

        dateien: [
            "Klare Ordnerhierarchie verwenden",
            "Einheitliche Dateinamen vorschlagen",
            "Suchbarkeit erhalten"
        ],

        dokumente: [
            "Dokumente nach sinnvollen Themen gruppieren",
            "Wichtige Fristen kenntlich machen",
            "Keine unnötig komplexe Struktur erzeugen"
        ],

        notizen: [
            "Originalinformationen erhalten",
            "Aufgaben und Informationen trennen",
            "Wichtige Punkte hervorheben"
        ],

        geschenke: [
            "Interessen der Person berücksichtigen",
            "Budget einhalten",
            "Unterschiedliche Ideen anbieten"
        ],

        veranstaltungen: [
            "Termin und Teilnehmerzahl berücksichtigen",
            "Wichtige Fristen markieren",
            "Notwendige und optionale Punkte unterscheiden"
        ],

        feiern: [
            "Anzahl der Gäste berücksichtigen",
            "Budget einhalten",
            "Vorbereitungsaufwand realistisch einschätzen"
        ],

        umzug: [
            "Vom Umzugstermin rückwärts planen",
            "Aufgaben priorisieren",
            "Puffer für unerwartete Probleme einplanen"
        ],

        anschaffungen: [
            "Must-have- und Nice-to-have-Kriterien unterscheiden",
            "Budget berücksichtigen",
            "Gesamtkosten beachten"
        ],

        probleme: [
            "Keine unbekannten Ursachen als Fakten darstellen",
            "Mehrere realistische Lösungswege prüfen",
            "Mit dem einfachsten sinnvollen Schritt beginnen"
        ],

        assistent: [
            "Wichtige Aufgaben priorisieren",
            "Realistische Vorschläge machen",
            "Konkrete nächste Schritte nennen"
        ]
    }

};

// ======================================================
// FEHLENDE ANFORDERUNGS-EMPFEHLUNGEN AUTOMATISCH ERGÄNZEN
// ======================================================
//
// Bereits manuell definierte Empfehlungen bleiben erhalten.
// Fehlt für eine Unterkategorie eine Empfehlung,
// werden automatisch die ersten 3 Anforderungen verwendet.
//
// Vorteil:
// Die Texte stammen direkt aus "hauptkategorien" und können
// deshalb nicht versehentlich anders geschrieben sein.
// ======================================================

Object.entries(hauptkategorien).forEach(([hauptKey, hauptKategorie]) => {

    // Falls für die Hauptkategorie noch kein Bereich existiert
    if (!anforderungsEmpfehlungen[hauptKey]) {
        anforderungsEmpfehlungen[hauptKey] = {};
    }

    // Alle Unterkategorien durchgehen
    Object.entries(hauptKategorie.unterkategorien || {}).forEach(
        ([unterKey, unterKategorie]) => {

            // Bereits vorhandene manuelle Empfehlung NICHT überschreiben
            if (!anforderungsEmpfehlungen[hauptKey][unterKey]) {

                // Die ersten 3 Anforderungen als Empfehlung verwenden
                anforderungsEmpfehlungen[hauptKey][unterKey] =
                    (unterKategorie.anforderungen || []).slice(0, 3);
            }
        }
    );
});


const regelEmpfehlungen = {


    // ==================================================
    // BILD & VISUELLE MEDIEN
    // ==================================================

    bild: {

        bildbearbeitung: [
            "originaltreue"
        ],

        kiBildgenerierung: [
            "kreativ"
        ],

        grafikdesign: [
            "kreativ"
        ],

        illustration: [
            "kreativ"
        ],

        bildanalyse: [
            "bildanalyse"
        ],

        socialMedia: [
            "kreativ"
        ],

        produktbilder: [
            "originaltreue"
        ],

        branding: [
            "kreativ"
        ],

        druckExport: [
            "technisch"
        ],

        inspiration: [
            "kreativ"
        ]
    },


    // ==================================================
    // VIDEO & AUDIO
    // ==================================================

    videoAudio: {

        videoschnitt: [
            "originaltreue"
        ],

        kiVideo: [
            "kreativ"
        ],

        drehbuch: [
            "kreativ"
        ],

        storyboard: [
            "kreativ"
        ],

        youtube: [
            "kreativ"
        ],

        kurzvideos: [
            "kreativ"
        ],

        audiobearbeitung: [
            "originaltreue",
            "technisch"
        ],

        musik: [
            "kreativ"
        ],

        kiMusik: [
            "kreativ"
        ],

        interviews: [
            "fakten"
        ],

        erklaervideos: [
            "fakten"
        ],

        videoideen: [
            "kreativ"
        ]
    },


    // ==================================================
    // SCHREIBEN & KOMMUNIKATION
    // ==================================================

    schreiben: {

        briefe: [
            "fakten"
        ],

        umformulieren: [
            "originaltreue"
        ],

        rechtschreibung: [
            "originaltreue"
        ],

        zusammenfassungen: [
            "originaltreue",
            "fakten"
        ],

        uebersetzungen: [
            "originaltreue"
        ],

        bewerbung: [
            "fakten"
        ],

        lebenslauf: [
            "fakten"
        ],

        geschaeftlich: [
            "fakten"
        ],

        kundenkommunikation: [
            "fakten"
        ],

        reklamationen: [
            "fakten"
        ],

        argumentation: [
            "fakten"
        ],

        socialTexte: [
            "kreativ"
        ],

        blog: [
            "fakten"
        ],

        produkttexte: [
            "fakten"
        ],

        kreativSchreiben: [
            "kreativ"
        ],

        storytelling: [
            "kreativ"
        ],

        schreibstil: [
            "originaltreue"
        ],

        gespraechsvorbereitung: [
            "fakten"
        ],

        schwierigeGespraeche: [
            "fakten"
        ],

        feedback: [
            "fakten"
        ],

        kuerzen: [
            "originaltreue"
        ]
    },


    // ==================================================
    // SOCIAL MEDIA & CONTENT
    // ==================================================

    socialContent: {

        contentIdeen: [
            "kreativ"
        ],

        instagram: [
            "kreativ"
        ],

        tiktok: [
            "kreativ"
        ],

        youtube: [
            "kreativ"
        ],

        pinterest: [
            "kreativ"
        ],

        xTwitter: [
            "fakten"
        ],

        posts: [
            "kreativ"
        ],

        reels: [
            "kreativ"
        ],

        captions: [
            "kreativ"
        ],

        hooks: [
            "kreativ"
        ],

        contentSerien: [
            "kreativ"
        ],

        kommentare: [
            "fakten"
        ],

        zielgruppenansprache: [
            "fakten"
        ],

        recycling: [
            "originaltreue"
        ],

        reichweite: [
            "fakten"
        ],

        personalBranding: [
            "fakten"
        ],

        unternehmensContent: [
            "fakten"
        ],

        analyse: [
            "fakten"
        ]
    },

        // ==================================================
    // MARKETING & WERBUNG
    // ==================================================

    marketing: {

        strategie: [
            "fakten"
        ],

        zielgruppen: [
            "fakten"
        ],

        kampagnen: [
            "kreativ"
        ],

        werbetexte: [
            "fakten"
        ],

        ads: [
            "fakten"
        ],

        positionierung: [
            "fakten"
        ],

        branding: [
            "kreativ"
        ],

        naming: [
            "kreativ"
        ],

        produktmarketing: [
            "fakten"
        ],

        contentMarketing: [
            "fakten"
        ],

        emailMarketing: [
            "fakten"
        ],

        newsletter: [
            "fakten"
        ],

        seo: [
            "fakten",
            "quellen"
        ],

        keywords: [
            "fakten"
        ],

        landingpages: [
            "fakten"
        ],

        verkaufsseiten: [
            "fakten"
        ],

        leads: [
            "fakten"
        ],

        kundenansprache: [
            "fakten"
        ],

        wettbewerb: [
            "fakten",
            "quellen"
        ],

        marktanalyse: [
            "fakten",
            "quellen"
        ],

        angebote: [
            "fakten"
        ],

        preisargumentation: [
            "fakten"
        ],

        conversion: [
            "fakten"
        ],

        kampagnenideen: [
            "kreativ"
        ],

        marketingplan: [
            "fakten"
        ],

        guerilla: [
            "kreativ"
        ],

        offline: [
            "fakten"
        ],

        eventMarketing: [
            "fakten"
        ],

        kundenbindung: [
            "fakten"
        ],

        kennzahlen: [
            "fakten"
        ]
    },

    // ==================================================
    // PROGRAMMIERUNG & SOFTWAREENTWICKLUNG
    // ==================================================

    programmierung: {

        lernen: [
            "technisch"
        ],

        codeGenerieren: [
            "technisch"
        ],

        codeErklaeren: [
            "fakten"
        ],

        debugging: [
            "fakten",
            "originaltreue"
        ],

        refactoring: [
            "originaltreue",
            "technisch"
        ],

        htmlCss: [
            "originaltreue"
        ],

        javascript: [
            "originaltreue",
            "technisch"
        ],

        python: [
            "technisch"
        ],

        java: [
            "technisch"
        ],

        csharp: [
            "technisch"
        ],

        cpp: [
            "technisch"
        ],

        sql: [
            "technisch"
        ],

        webentwicklung: [
            "technisch"
        ],

        backend: [
            "technisch"
        ],

        api: [
            "fakten",
            "technisch"
        ],

        datenbanken: [
            "technisch"
        ],

        git: [
            "technisch"
        ],

        architektur: [
            "technisch"
        ],

        appLogik: [
            "technisch"
        ],

        automatisierung: [
            "technisch"
        ],

        skripte: [
            "technisch"
        ],

        testing: [
            "technisch"
        ],

        performance: [
            "fakten",
            "technisch"
        ],

        sicherheit: [
            "technisch"
        ],

        dokumentation: [
            "fakten",
            "originaltreue"
        ],

        anforderungen: [
            "fakten",
            "technisch"
        ],

        erweitern: [
            "originaltreue",
            "technisch"
        ],

        konvertieren: [
            "originaltreue",
            "technisch"
        ],

        kiCoding: [
            "fakten",
            "technisch"
        ],

        projektstruktur: [
            "technisch"
        ]
    },

    // ==================================================
    // WEBSEITEN & APPS
    // ==================================================

    webApps: {

        websitePlanen: [
            "technisch"
        ],

        websiteErstellen: [
            "technisch"
        ],

        webApp: [
            "technisch"
        ],

        mobileApp: [
            "technisch"
        ],

        pwa: [
            "technisch",
            "originaltreue"
        ],

        landingpage: [
            "fakten"
        ],

        unternehmenswebsite: [
            "fakten"
        ],

        portfolio: [
            "fakten",
            "originaltreue"
        ],

        blog: [
            "technisch"
        ],

        shop: [
            "fakten",
            "technisch"
        ],

        ui: [
            "kreativ"
        ],

        ux: [
            "fakten"
        ],

        navigation: [
            "technisch"
        ],

        responsive: [
            "originaltreue",
            "technisch"
        ],

        formulare: [
            "technisch"
        ],

        login: [
            "technisch"
        ],

        datenSpeichern: [
            "technisch"
        ],

        datenbanken: [
            "technisch"
        ],

        api: [
            "fakten",
            "technisch"
        ],

        kiFunktionen: [
            "fakten",
            "technisch"
        ],

        zahlung: [
            "fakten",
            "technisch"
        ],

        suche: [
            "technisch"
        ],

        filter: [
            "originaltreue",
            "technisch"
        ],

        dashboards: [
            "fakten",
            "technisch"
        ],

        admin: [
            "technisch"
        ],

        performance: [
            "fakten",
            "technisch"
        ],

        barrierefreiheit: [
            "technisch"
        ],

        sicherheit: [
            "technisch"
        ],

        testing: [
            "technisch"
        ],

        hosting: [
            "technisch"
        ],

        deployment: [
            "technisch"
        ],

        wartung: [
            "originaltreue",
            "technisch"
        ],

        ideen: [
            "kreativ"
        ]
    },

    // ==================================================
    // ALLTAG & ORGANISATION
    // ==================================================

    alltag: {

        termine: [
            "fakten"
        ],

        produktvergleich: [
            "fakten"
        ],

        erinnerungen: [
            "fakten"
        ],

        dokumente: [
            "originaltreue",
            "fakten"
        ],

        notizen: [
            "originaltreue",
            "fakten"
        ],

        geschenke: [
            "kreativ"
        ],

        feiern: [
            "kreativ"
        ],

        anschaffungen: [
            "fakten"
        ],

        probleme: [
            "fakten"
        ]
    }

};

// ======================================================
// FEHLENDE REGEL-EMPFEHLUNGEN AUTOMATISCH ERGÄNZEN
// ======================================================
//
// Vorhandene manuelle Empfehlungen bleiben erhalten.
//
// Für noch nicht gepflegte Unterkategorien wird zunächst
// nach einer passenden Sonderregel gesucht.
// Falls keine Sonderregel existiert, wird ein sinnvoller
// Standard für die jeweilige Hauptkategorie verwendet.
//
// ======================================================


const regelStandardProKategorie = {

    ki: ["fakten"],

    produktivitaet: ["technisch"],

    technik: ["technisch"],

    datenAnalyse: ["fakten"],

    projektmanagement: ["fakten"],

    recherche: ["fakten", "quellen"],

    lernen: ["fakten"],

    business: ["fakten"],

    finanzen: ["fakten"],

    alltag: ["fakten"],

    reisen: ["fakten"],

    kochenSport: ["fakten"],

    kreativitaet: ["kreativ"]
};


// ======================================================
// SONDERFÄLLE
// ======================================================

const regelSonderfaelle = {


    // ==================================================
    // KI & PROMPT ENGINEERING
    // ==================================================

    ki: {

        promptsVerbessern: [
            "originaltreue",
            "fakten"
        ],

        bilder: [
            "kreativ"
        ],

        video: [
            "kreativ"
        ],

        audio: [
            "kreativ"
        ],

        coding: [
            "technisch"
        ],

        recherche: [
            "fakten",
            "quellen"
        ],

        daten: [
            "fakten",
            "technisch"
        ],

        automatisierung: [
            "technisch"
        ],

        workflows: [
            "technisch"
        ],

        halluzinationen: [
            "fakten",
            "quellen"
        ],

        faktenpruefung: [
            "fakten",
            "quellen"
        ],

        qualitaet: [
            "fakten"
        ],

        bibliotheken: [
            "originaltreue"
        ],

        vorlagen: [
            "originaltreue"
        ],

        api: [
            "technisch"
        ],

        lokaleModelle: [
            "technisch"
        ],

        trends: [
            "fakten",
            "quellen"
        ]
    },


    // ==================================================
    // AUTOMATISIERUNG & PRODUKTIVITÄT
    // ==================================================

    produktivitaet: {

        berichte: [
            "fakten",
            "technisch"
        ],

        zusammenfassungen: [
            "originaltreue",
            "fakten"
        ],

        kalender: [
            "fakten",
            "technisch"
        ],

        aufgaben: [
            "fakten",
            "technisch"
        ],

        powerAutomate: [
            "technisch"
        ],

        zapierMake: [
            "technisch"
        ],

        python: [
            "technisch"
        ],

        browser: [
            "technisch"
        ],

        ki: [
            "fakten",
            "technisch"
        ],

        prozessanalyse: [
            "fakten"
        ],

        zeitfresser: [
            "fakten"
        ],

        produktivitaet: [
            "fakten"
        ],

        vorlagen: [
            "originaltreue"
        ],

        checklisten: [
            "originaltreue",
            "fakten"
        ],

        routinen: [
            "fakten"
        ],

        information: [
            "fakten"
        ],

        ideen: [
            "kreativ",
            "technisch"
        ],

        dokumentation: [
            "originaltreue",
            "technisch"
        ]
    },


    // ==================================================
    // TECHNIK & ENGINEERING
    // ==================================================

    technik: {

        zeichnungen: [
            "originaltreue",
            "technisch"
        ],

        produktentwicklung: [
            "technisch"
        ],

        berechnungen: [
            "fakten",
            "technisch"
        ],

        qualitaet: [
            "fakten",
            "technisch"
        ],

        fehleranalyse: [
            "fakten",
            "technisch"
        ],

        ursachenanalyse: [
            "fakten",
            "technisch"
        ],

        fmea: [
            "fakten",
            "technisch"
        ],

        dokumentation: [
            "originaltreue",
            "technisch"
        ],

        lastenheft: [
            "fakten",
            "technisch"
        ],

        anforderungen: [
            "fakten",
            "technisch"
        ],

        recherche: [
            "fakten",
            "quellen",
            "technisch"
        ],

        problemloesung: [
            "fakten",
            "technisch"
        ],

        ideen: [
            "kreativ",
            "technisch"
        ]
    },


    // ==================================================
    // DATEN, EXCEL & ANALYSE
    // ==================================================

    datenAnalyse: {

        excel: [
            "fakten",
            "technisch"
        ],

        formeln: [
            "fakten",
            "technisch"
        ],

        pivot: [
            "fakten",
            "technisch"
        ],

        bereinigung: [
            "originaltreue",
            "fakten"
        ],

        aufbereitung: [
            "originaltreue",
            "fakten"
        ],

        analyse: [
            "fakten"
        ],

        statistik: [
            "fakten"
        ],

        kennzahlen: [
            "fakten"
        ],

        dashboards: [
            "fakten"
        ],

        berichte: [
            "fakten"
        ],

        vergleichen: [
            "fakten"
        ],

        trends: [
            "fakten"
        ],

        prognosen: [
            "fakten"
        ],

        sql: [
            "fakten",
            "technisch"
        ],

        datenbanken: [
            "technisch"
        ],

        csv: [
            "originaltreue",
            "technisch"
        ],

        powerQuery: [
            "originaltreue",
            "technisch"
        ],

        powerBI: [
            "fakten",
            "technisch"
        ],

        visualisierung: [
            "fakten"
        ],

        python: [
            "fakten",
            "technisch"
        ],

        automatisch: [
            "fakten",
            "technisch"
        ],

        qualitaet: [
            "fakten"
        ],

        messdaten: [
            "fakten",
            "technisch"
        ],

        umfragen: [
            "fakten"
        ],

        interpretieren: [
            "fakten"
        ],

        erklaeren: [
            "fakten"
        ],

        vorlagen: [
            "originaltreue"
        ]
    },


    // ==================================================
    // PROJEKTMANAGEMENT & ORGANISATION
    // ==================================================

    projektmanagement: {

        risiken: [
            "fakten"
        ],

        chancen: [
            "fakten"
        ],

        status: [
            "fakten"
        ],

        berichte: [
            "fakten"
        ],

        protokolle: [
            "originaltreue",
            "fakten"
        ],

        meetingAufgaben: [
            "originaltreue",
            "fakten"
        ],

        stakeholder: [
            "fakten"
        ],

        entscheidungen: [
            "fakten"
        ],

        aenderungen: [
            "originaltreue",
            "fakten"
        ],

        probleme: [
            "fakten"
        ],

        eskalationen: [
            "fakten"
        ],

        lessons: [
            "fakten"
        ],

        checklisten: [
            "fakten"
        ]
    },


    // ==================================================
    // RECHERCHE & WISSEN
    // ==================================================

    recherche: {

        allgemein: [
            "fakten",
            "quellen"
        ],

        tiefe: [
            "fakten",
            "quellen"
        ],

        web: [
            "fakten",
            "quellen"
        ],

        wissenschaft: [
            "fakten",
            "quellen"
        ],

        technisch: [
            "fakten",
            "quellen",
            "technisch"
        ],

        markt: [
            "fakten",
            "quellen"
        ],

        wettbewerb: [
            "fakten",
            "quellen"
        ],

        produkte: [
            "fakten",
            "quellen"
        ],

        quellenFinden: [
            "quellen"
        ],

        quellenBewerten: [
            "fakten",
            "quellen"
        ],

        fakten: [
            "fakten",
            "quellen"
        ],

        verifizieren: [
            "fakten",
            "quellen"
        ],

        studien: [
            "fakten",
            "quellen"
        ],

        dokumente: [
            "originaltreue",
            "fakten"
        ],

        pdf: [
            "originaltreue",
            "fakten"
        ],

        zusammenfassen: [
            "originaltreue",
            "fakten"
        ],

        vergleichen: [
            "fakten",
            "quellen"
        ],

        widersprueche: [
            "fakten",
            "quellen"
        ],

        chronologie: [
            "fakten",
            "quellen"
        ],

        quellenuebersicht: [
            "fakten",
            "quellen"
        ],

        luecken: [
            "fakten",
            "quellen"
        ]
    },


    // ==================================================
    // LERNEN & WEITERBILDUNG
    // ==================================================

    lernen: {

        zusammenfassungen: [
            "originaltreue",
            "fakten"
        ],

        aufgaben: [
            "fakten"
        ],

        fehler: [
            "originaltreue",
            "fakten"
        ],

        mathematik: [
            "fakten",
            "technisch"
        ],

        naturwissenschaften: [
            "fakten"
        ],

        programmieren: [
            "fakten",
            "technisch"
        ],

        beispiele: [
            "fakten"
        ],

        merkHilfen: [
            "kreativ",
            "fakten"
        ],

        kiTutor: [
            "fakten"
        ]
    },


    // ==================================================
    // BUSINESS & SELBSTSTÄNDIGKEIT
    // ==================================================

    business: {

        ideen: [
            "kreativ",
            "fakten"
        ],

        bewerten: [
            "fakten"
        ],

        gruendung: [
            "fakten"
        ],

        geschaeftsmodell: [
            "kreativ",
            "fakten"
        ],

        businessplan: [
            "fakten"
        ],

        zielgruppen: [
            "fakten"
        ],

        marktanalyse: [
            "fakten",
            "quellen"
        ],

        wettbewerb: [
            "fakten",
            "quellen"
        ],

        positionierung: [
            "fakten"
        ],

        angebot: [
            "fakten"
        ],

        kalkulation: [
            "fakten"
        ],

        preise: [
            "fakten"
        ],

        vertrieb: [
            "fakten"
        ],

        angebote: [
            "originaltreue",
            "fakten"
        ],

        emails: [
            "originaltreue",
            "fakten"
        ],

        nebenverdienst: [
            "kreativ",
            "fakten"
        ],

        digitaleProdukte: [
            "kreativ",
            "fakten"
        ],

        onlineBusiness: [
            "fakten"
        ],

        freelancer: [
            "fakten"
        ],

        kiUnternehmen: [
            "kreativ",
            "fakten",
            "technisch"
        ]
    },


    // ==================================================
    // FINANZEN & ENTSCHEIDUNGEN
    // ==================================================

    finanzen: {

        budget: [
            "fakten"
        ],

        kosten: [
            "fakten"
        ],

        einnahmen: [
            "fakten"
        ],

        sparen: [
            "fakten"
        ],

        ziele: [
            "fakten"
        ],

        kostenNutzen: [
            "fakten"
        ],

        preisvergleich: [
            "fakten",
            "quellen"
        ],

        kaufentscheidung: [
            "fakten",
            "quellen"
        ],

        investition: [
            "fakten"
        ],

        matrix: [
            "fakten"
        ],

        gewichtung: [
            "fakten"
        ],

        szenarien: [
            "fakten"
        ],

        risiko: [
            "fakten"
        ],

        alternativen: [
            "fakten"
        ],

        breakEven: [
            "fakten"
        ],

        wirtschaftlichkeit: [
            "fakten"
        ],

        gesamtkosten: [
            "fakten"
        ],

        angebote: [
            "originaltreue",
            "fakten"
        ],

        vertraege: [
            "originaltreue",
            "fakten"
        ],

        analyse: [
            "fakten"
        ],

        business: [
            "fakten"
        ],

        unsicherheit: [
            "fakten"
        ],

        vorbereitung: [
            "fakten"
        ]
    },


    // ==================================================
    // ALLTAG & ORGANISATION
    // ==================================================

    alltag: {

        notizen: [
            "originaltreue",
            "fakten"
        ],

        dokumente: [
            "originaltreue",
            "fakten"
        ],

        produktvergleich: [
            "fakten",
            "quellen"
        ],

        geschenke: [
            "kreativ"
        ],

        feiern: [
            "kreativ"
        ],

        probleme: [
            "fakten"
        ]
    },


    // ==================================================
    // REISEN & FREIZEIT
    // ==================================================

    reisen: {

        ideen: [
            "kreativ",
            "fakten"
        ],

        ziele: [
            "fakten",
            "quellen"
        ],

        planung: [
            "fakten",
            "quellen"
        ],

        tagesplanung: [
            "fakten",
            "quellen"
        ],

        rundreisen: [
            "fakten",
            "quellen"
        ],

        staedte: [
            "fakten",
            "quellen"
        ],

        roadtrips: [
            "fakten",
            "quellen"
        ],

        wochenende: [
            "kreativ",
            "fakten"
        ],

        sehenswuerdigkeiten: [
            "fakten",
            "quellen"
        ],

        aktivitaeten: [
            "fakten",
            "quellen"
        ],

        essen: [
            "fakten",
            "quellen"
        ],

        unterkunft: [
            "fakten",
            "quellen"
        ],

        packlisten: [
            "fakten"
        ],

        budget: [
            "fakten"
        ],

        checklisten: [
            "fakten"
        ],

        auto: [
            "fakten",
            "quellen"
        ],

        bahn: [
            "fakten",
            "quellen"
        ],

        flug: [
            "fakten",
            "quellen"
        ],

        fotoreisen: [
            "kreativ",
            "fakten",
            "quellen"
        ],

        wandern: [
            "fakten",
            "quellen"
        ],

        fahrrad: [
            "fakten",
            "quellen"
        ],

        camping: [
            "fakten",
            "quellen"
        ],

        freizeit: [
            "kreativ"
        ],

        ausfluege: [
            "kreativ",
            "fakten",
            "quellen"
        ],

        hobbies: [
            "kreativ"
        ],

        events: [
            "fakten",
            "quellen"
        ],

        wochenendplanung: [
            "kreativ",
            "fakten"
        ],

        schlechtwetter: [
            "kreativ",
            "fakten"
        ],

        neueHobbys: [
            "kreativ"
        ],

        erlebnisse: [
            "kreativ"
        ]
    },


    // ==================================================
    // KOCHEN, ERNÄHRUNG & SPORT
    // ==================================================

    kochenSport: {

        rezepte: [
            "kreativ"
        ],

        rezeptideen: [
            "kreativ"
        ],

        wochenplaene: [
            "fakten"
        ],

        einkaufslisten: [
            "fakten"
        ],

        reste: [
            "kreativ",
            "fakten"
        ],

        schnelleGerichte: [
            "kreativ"
        ],

        mealPrep: [
            "fakten"
        ],

        backen: [
            "fakten",
            "technisch"
        ],

        grillen: [
            "fakten"
        ],

        vegetarisch: [
            "kreativ"
        ],

        vegan: [
            "kreativ"
        ],

        lowCarb: [
            "fakten"
        ],

        protein: [
            "fakten"
        ],

        zutaten: [
            "kreativ",
            "fakten"
        ],

        portionen: [
            "fakten",
            "technisch"
        ],

        trainingsplaene: [
            "fakten"
        ],

        kraft: [
            "fakten"
        ],

        ausdauer: [
            "fakten"
        ],

        beweglichkeit: [
            "fakten"
        ],

        sportprogramme: [
            "fakten"
        ],

        fortschritt: [
            "fakten"
        ],

        ziele: [
            "fakten"
        ],

        regeneration: [
            "fakten"
        ],

        fitness: [
            "fakten"
        ]
    },


    // ==================================================
    // KREATIVITÄT & IDEENFINDUNG
    // ==================================================

    kreativitaet: {

        bewerten: [
            "kreativ",
            "fakten"
        ],

        produktideen: [
            "kreativ",
            "technisch"
        ],

        appIdeen: [
            "kreativ",
            "technisch"
        ],

        geschaeftsideen: [
            "kreativ",
            "fakten"
        ],

        designideen: [
            "kreativ",
            "originaltreue"
        ],

        kombinieren: [
            "kreativ",
            "originaltreue"
        ],

        sparring: [
            "kreativ",
            "fakten"
        ]
    }
};


// ======================================================
// AUTOMATISCH ALLE NOCH FEHLENDEN REGELN ERGÄNZEN
// ======================================================

Object.entries(hauptkategorien).forEach(
    ([hauptKey, hauptKategorie]) => {

        // Nur Kategorien behandeln,
        // für die wir einen Standard definiert haben
        if (!regelStandardProKategorie[hauptKey]) {
            return;
        }

        // Falls in regelEmpfehlungen noch kein Block existiert
        if (!regelEmpfehlungen[hauptKey]) {
            regelEmpfehlungen[hauptKey] = {};
        }

        Object.keys(
            hauptKategorie.unterkategorien || {}
        ).forEach((unterKey) => {

            // Bestehende manuelle Einträge niemals überschreiben
            if (regelEmpfehlungen[hauptKey][unterKey]) {
                return;
            }

            // Sonderfall verwenden, falls vorhanden
            const sonderregel =
                regelSonderfaelle[hauptKey]?.[unterKey];

            if (sonderregel) {

                regelEmpfehlungen[hauptKey][unterKey] =
                    [...sonderregel];

            } else {

                // Sonst Standard der Hauptkategorie
                regelEmpfehlungen[hauptKey][unterKey] =
                    [...regelStandardProKategorie[hauptKey]];
            }
        });
    }
);

const ordnerIcons = [

    ["🖼️", "Bild & visuelle Medien"],
    ["🎬", "Video & Audio"],
    ["✍️", "Schreiben & Kommunikation"],
    ["📱", "Social Media & Content"],
    ["📣", "Marketing & Werbung"],
    ["💻", "Programmierung & Software"],
    ["🌐", "Webseiten & Apps"],
    ["🤖", "KI & Prompt Engineering"],
    ["⚙️", "Automatisierung & Produktivität"],
    ["🔧", "Technik & Engineering"],
    ["📊", "Daten, Excel & Analyse"],
    ["📋", "Projektmanagement"],
    ["🔎", "Recherche & Wissen"],
    ["🎓", "Lernen & Weiterbildung"],
    ["💼", "Business & Selbstständigkeit"],
    ["💰", "Finanzen & Entscheidungen"],
    ["🏠", "Alltag & Organisation"],
    ["✈️", "Reisen & Freizeit"],
    ["🍳", "Kochen, Ernährung & Sport"],
    ["💡", "Kreativität & Ideenfindung"],

    ["📁", "Allgemeiner Ordner"],
    ["⭐", "Favoriten"],
    ["📷", "Fotografie"],
    ["🎨", "Design"],
    ["✨", "KI-Bilder"]
];


// ======================================================
// KONTEXT-HINWEISE
// ======================================================

const kontextHinweise = {


    // ==================================================
    // BILD & VISUELLE MEDIEN
    // ==================================================

    bild: {

        fotografie:
            "Motiv, Ort, Tageszeit, Lichtbedingungen, vorhandene Kamera und Objektive, gewünschter Bildstil sowie besondere Einschränkungen.",

        bildbearbeitung:
            "Ausgangsbild, gewünschte Bildwirkung, verwendete Software, bisherige Bearbeitung, Zielmedium und Bereiche, die besonders verbessert werden sollen.",

        kiBildgenerierung:
            "Gewünschtes Motiv, Umgebung, Bildstil, Licht, Perspektive, Stimmung, Farben, Seitenverhältnis und wichtige Elemente, die enthalten oder vermieden werden sollen.",

        grafikdesign:
            "Verwendungszweck, Zielgruppe, Format, vorhandenes Branding, gewünschte Wirkung, Textinhalte, Farben und technische Vorgaben.",

        illustration:
            "Motiv, Zielgruppe, gewünschter Illustrationsstil, Stimmung, Farbwelt, Format und wichtige Merkmale von Figuren oder Umgebung.",

        bildanalyse:
            "Ziel der Analyse und – falls relevant – welche Aspekte besonders untersucht werden sollen, zum Beispiel Komposition, technische Qualität, Licht, Farben oder Bildwirkung.",

        komposition:
            "Motiv, gewünschte Bildwirkung, Aufnahmeformat, mögliche Perspektiven und Bereiche des Bildes, die verändert oder besonders hervorgehoben werden sollen.",

        socialMedia:
            "Plattform, Beitragsformat, Zielgruppe, Hauptbotschaft, vorhandenes Branding, gewünschte Wirkung und gegebenenfalls Text, der im Bild erscheinen soll.",

        produktbilder:
            "Produkt, Material, gewünschter Verwendungszweck, Hintergrund, vorhandenes Equipment, gewünschter Stil und Anforderungen an eine realistische Produktdarstellung.",

        branding:
            "Unternehmen oder Projekt, Zielgruppe, Markenwerte, gewünschte Wirkung, Branche, vorhandene Gestaltung und Dinge, die bewusst vermieden werden sollen.",

        druckExport:
            "Endformat, Verwendungszweck, Druckdienstleister, gewünschte Größe, vorhandene Auflösung, Dateiformat und bekannte Vorgaben zu Farbraum oder Beschnitt.",

        inspiration:
            "Thema, gewünschte Stimmung, vorhandene Möglichkeiten, Ort, Ausrüstung, Zeitaufwand und Dinge, die bereits ausprobiert wurden."
    },


    // ==================================================
    // VIDEO & AUDIO
    // ==================================================

    videoAudio: {

        videoerstellung:
            "Ziel des Videos, Zielgruppe, Plattform, Länge, vorhandenes Material, gewünschter Stil und verfügbare Technik.",

        videoschnitt:
            "Vorhandenes Videomaterial, gewünschte Länge, Zielplattform, Schnittstil, Musik, vorhandene Software und gewünschte Wirkung.",

        kiVideo:
            "Motiv, Handlung, Kamerabewegung, Stil, Licht, Dauer, Seitenverhältnis und gewünschte Bildwirkung.",

        drehbuch:
            "Thema, Zielgruppe, Länge, Tonalität, zentrale Botschaft, Figuren und gewünschter Aufbau.",

        storyboard:
            "Drehbuch oder Handlung, Anzahl der Szenen, Stil, Kameraperspektiven, wichtige Aktionen und gewünschte Bildwirkung.",

        youtube:
            "Thema, Zielgruppe, Kanalstil, gewünschte Videolänge, Hauptbotschaft und vorhandenes Material.",

        kurzvideos:
            "Plattform, Zielgruppe, Thema, gewünschte Länge, zentrale Botschaft und gewünschter Einstieg oder Hook.",

        podcast:
            "Thema, Zielgruppe, Format, Länge, Anzahl der Sprecher, gewünschte Tonalität und wichtigste Inhalte.",

        voiceover:
            "Text, Zielgruppe, gewünschte Stimme, Stimmung, Sprechtempo, Länge und Verwendungszweck.",

        audiobearbeitung:
            "Art der Aufnahme, vorhandene Probleme, verwendete Software, gewünschtes Ergebnis und späterer Verwendungszweck.",

        musik:
            "Stimmung, Genre, Instrumente, Tempo, Verwendungszweck und gewünschte Länge.",

        kiMusik:
            "Genre, Stimmung, Tempo, Instrumentierung, Länge und gewünschter Einsatz der Musik.",

        interviews:
            "Thema, Gesprächspartner, Zielgruppe, gewünschte Länge und Ziel des Gesprächs.",

        erklaervideos:
            "Thema, Zielgruppe, Vorwissen, gewünschte Länge, Kernbotschaft und vorhandene Präsentationsinhalte.",

        videoideen:
            "Thema, Zielgruppe, Plattform, verfügbare Technik, gewünschter Aufwand und bisherige Ideen."
    },


    // ==================================================
    // SCHREIBEN & KOMMUNIKATION
    // ==================================================

    schreiben: {

        emails:
            "Empfänger, Anlass, wichtigste Botschaft, gewünschte Tonalität, relevante Termine oder Fakten und welche Reaktion oder Handlung du erwartest.",

        briefe:
            "Empfänger oder Institution, Anlass, relevante Fakten, gewünschte Forderung oder Information, gewünschter Ton und gegebenenfalls wichtige Termine oder Fristen.",

        umformulieren:
            "Den vorhandenen Text, gewünschte Tonalität, Zielgruppe, Verwendungszweck und was unbedingt inhaltlich unverändert bleiben soll.",

        rechtschreibung:
            "Den vollständigen Text, gewünschte Sprache oder Sprachvariante und ob nur echte Fehler korrigiert oder zusätzlich stilistische Hinweise gegeben werden sollen.",

        zusammenfassungen:
            "Den Ausgangstext oder die Informationen, gewünschte Länge, Zielgruppe, Verwendungszweck und welche Inhalte besonders wichtig sind.",

        uebersetzungen:
            "Originaltext, Ausgangs- und Zielsprache, Zielgruppe, gewünschte Tonalität, Fachgebiet und Begriffe, die besonders genau oder einheitlich übersetzt werden müssen.",

        bewerbung:
            "Stellenanzeige, Unternehmen, bisherige Berufserfahrung, relevante Fähigkeiten, persönliche Motivation und Informationen, die auf keinen Fall erfunden werden dürfen.",

        lebenslauf:
            "Berufserfahrung, Ausbildung, Fähigkeiten, gewünschte Stelle oder Branche, vorhandenen Lebenslauf und welche Erfahrungen besonders hervorgehoben werden sollen.",

        geschaeftlich:
            "Empfänger, geschäftlicher Anlass, relevante Fakten, gewünschtes Ergebnis, Beziehung zum Empfänger und gewünschte Tonalität.",

        kundenkommunikation:
            "Kundenanliegen, bekannte Fakten, bisherige Kommunikation, gewünschte Lösung, mögliche Einschränkungen und gewünschte Tonalität.",

        reklamationen:
            "Produkt oder Dienstleistung, konkreter Mangel oder Vorfall, Datum, bisherige Kommunikation, vorhandene Belege und gewünschte Lösung.",

        argumentation:
            "Eigene Position, Zielgruppe oder Gesprächspartner, wichtigste Fakten, gewünschtes Ergebnis, mögliche Gegenargumente und Punkte, die besonders überzeugend dargestellt werden sollen.",

        praesentationstexte:
            "Thema, Zielgruppe, vorhandene Folien oder Inhalte, gewünschte Präsentationsdauer, Kernbotschaft und gewünschte Tonalität.",

        reden:
            "Anlass, Zielgruppe, gewünschte Redezeit, zentrale Botschaft, gewünschte Stimmung und wichtige persönliche oder sachliche Inhalte.",

        socialTexte:
            "Plattform, Zielgruppe, Thema, gewünschte Botschaft, Tonalität, gewünschte Länge und gegebenenfalls gewünschter Call-to-Action.",

        blog:
            "Thema, Zielgruppe, gewünschte Länge, wichtigste Inhalte, vorhandene Fakten oder Quellen, gewünschter Stil und Ziel des Artikels.",

        produkttexte:
            "Produkt, bekannte Eigenschaften, Zielgruppe, Verwendungszweck, wichtigste Vorteile, gewünschte Tonalität und technische Angaben, die exakt erhalten bleiben müssen.",

        kreativSchreiben:
            "Genre, Thema, Zielgruppe, gewünschter Stil, Figuren oder Ausgangssituation, gewünschte Stimmung und ungefähre Länge.",

        storytelling:
            "Kernbotschaft, Zielgruppe, Ausgangssituation, Hauptfigur oder Beteiligte, Konflikt oder Herausforderung und gewünschtes Ende.",

        schreibstil:
            "Vorhandenen Text, gewünschte Tonalität, Zielgruppe, Verwendungszweck und Beispiele oder Begriffe, die den gewünschten Stil beschreiben.",

        gespraechsvorbereitung:
            "Gesprächspartner, Anlass, eigenes Ziel, bekannte Fakten, mögliche Konfliktpunkte, erwartete Einwände und Themen, die unbedingt angesprochen werden sollen.",

        schwierigeGespraeche:
            "Gesprächspartner, konkreter Anlass, beobachtetes Verhalten oder Problem, eigenes Ziel, bisherige Gespräche und Grenzen oder Erwartungen, die klar formuliert werden sollen.",

        feedback:
            "Person oder Situation, konkrete Beobachtungen, positive Punkte, problematische Punkte, gewünschte Veränderung und Beziehung zur Person.",

        kuerzen:
            "Den vollständigen Ausgangstext, gewünschte maximale Länge, Zielgruppe, Verwendungszweck und Inhalte oder Fachbegriffe, die unbedingt erhalten bleiben müssen."
    },


    // ==================================================
    // SOCIAL MEDIA & CONTENT
    // ==================================================

    socialContent: {

        contentIdeen:
            "Thema oder Themenbereich, Zielgruppe, gewünschte Plattformen, Ziel des Contents, vorhandene Ideen, verfügbare Zeit und gewünschter Produktionsaufwand.",

        redaktionsplanung:
            "Zeitraum, Plattformen, Zielgruppe, wichtigste Themen, gewünschte Posting-Frequenz, verfügbare Produktionszeit, wichtige Termine und bereits vorhandene Inhalte.",

        instagram:
            "Zielgruppe, Thema, gewünschtes Format wie Post, Carousel oder Story, Hauptbotschaft, gewünschte Tonalität, vorhandenes Bild- oder Videomaterial und Ziel des Beitrags.",

        tiktok:
            "Zielgruppe, Thema, gewünschte Videolänge, zentrale Botschaft, vorhandenes Material, gewünschter Stil und welcher Eindruck in den ersten Sekunden entstehen soll.",

        youtube:
            "Thema, Zielgruppe, Kanal oder geplante Ausrichtung, gewünschte Videolänge, Kernbotschaft, vorhandenes Material und Ziel des Videos.",

        linkedin:
            "Zielgruppe oder berufliches Netzwerk, Thema, eigene Erfahrung oder Fachwissen, gewünschte Botschaft, Tonalität und Ziel des Beitrags.",

        facebook:
            "Zielgruppe oder Community, Thema, Anlass, gewünschte Botschaft, vorhandenes Bild- oder Videomaterial, Tonalität und gewünschte Reaktion.",

        pinterest:
            "Thema, Zielgruppe, gewünschte Zielseite, Bildinhalt, relevante Suchbegriffe, gewünschte Botschaft und vorhandene Boards oder Themenbereiche.",

        xTwitter:
            "Thema, wichtigste Aussage, Zielgruppe, gewünschte Tonalität, vorhandene Fakten oder Quellen und ob ein einzelner Beitrag oder Thread entstehen soll.",

        posts:
            "Plattform, Zielgruppe, Thema, Hauptbotschaft, gewünschte Tonalität, gewünschte Länge und gegebenenfalls vorhandenes Bild oder Video.",

        reels:
            "Plattform, Zielgruppe, Thema, gewünschte Länge, zentrale Botschaft, vorhandenes Videomaterial, gewünschter Hook und möglicher Call-to-Action.",

        captions:
            "Bild oder Video, Plattform, Zielgruppe, gewünschte Botschaft, Tonalität, gewünschte Länge und ob ein Call-to-Action enthalten sein soll.",

        hashtags:
            "Thema, Plattform, Zielgruppe, Region oder Sprache, wichtige Begriffe, Inhalt des Beitrags und ob eher breite oder spezifische Begriffe gesucht werden.",

        hooks:
            "Thema, Zielgruppe, Plattform, zentrale Botschaft, gewünschte Wirkung und was die Person nach dem Einstieg wissen oder tun soll.",

        contentSerien:
            "Oberthema, Zielgruppe, Plattform, gewünschte Laufzeit, Posting-Frequenz, verfügbare Produktionszeit und welche wiederkehrende Struktur die Serie haben könnte.",

        community:
            "Plattform, Art der Community, Zielgruppe, gewünschter Kommunikationston, typische Fragen oder Konflikte, vorhandene Regeln und gewünschte Reaktionsweise.",

        kommentare:
            "Originalkommentar, Plattform, Kontext des Beitrags, bekannte Fakten, gewünschte Tonalität und ob die Antwort freundlich, sachlich, deeskalierend oder klar abgrenzend sein soll.",

        zielgruppenansprache:
            "Produkt, Thema oder Botschaft, bekannte Zielgruppeninformationen, Vorwissen, Interessen oder Probleme der Zielgruppe, gewünschte Tonalität und gewünschte Handlung.",

        recycling:
            "Vorhandener Ausgangscontent, ursprüngliches Format, gewünschte neue Plattformen oder Formate, Zielgruppe, zentrale Botschaft und Inhalte, die unbedingt erhalten bleiben müssen.",

        strategie:
            "Ziel des Contents, Zielgruppe, verfügbare Plattformen, vorhandene Ressourcen, Themengebiete, gewünschte Veröffentlichungsfrequenz und Kennzahlen, die verbessert werden sollen.",

        reichweite:
            "Plattform, Zielgruppe, aktueller Content, vorhandene Reichweite oder Kennzahlen, verfügbare Produktionszeit, bisherige Maßnahmen und gewünschtes Wachstumsziel.",

        personalBranding:
            "Eigene tatsächliche Fähigkeiten und Erfahrungen, gewünschte Positionierung, Zielgruppe, berufliche oder persönliche Ziele, bevorzugte Plattformen und Themen, für die du stehen möchtest.",

        unternehmensContent:
            "Unternehmen, Produkt oder Dienstleistung, Zielgruppe, gewünschte Botschaft, vorhandene Fakten, Markenstil, verwendete Plattform und gewünschtes Ziel des Beitrags.",

        analyse:
            "Plattform, betrachteter Zeitraum, vorhandene Kennzahlen, Beiträge oder Kampagnen, gewünschte Fragestellung und welche Ziele mit dem Content erreicht werden sollten."
    },

        // ==================================================
    // MARKETING & WERBUNG
    // ==================================================

    marketing: {

        strategie:
            "Produkt oder Dienstleistung, Zielgruppe, aktuelle Situation, konkrete Marketingziele, vorhandene Kanäle, Budget, verfügbare Ressourcen und gewünschter Zeitraum.",

        zielgruppen:
            "Produkt oder Dienstleistung, bisher bekannte Kundengruppen, vorhandene Kundendaten, Region, Preisniveau, typische Probleme oder Bedürfnisse und welche Annahmen bereits bestehen.",

        kampagnen:
            "Produkt oder Angebot, Kampagnenziel, Zielgruppe, Zeitraum, Budget, geplante Kanäle, zentrale Botschaft und bereits vorhandene Werbemittel.",

        werbetexte:
            "Produkt oder Dienstleistung, bekannte Eigenschaften und Vorteile, Zielgruppe, gewünschte Tonalität, Werbekanal, gewünschte Länge und gewünschte Handlung.",

        ads:
            "Werbeplattform, Produkt oder Angebot, Zielgruppe, Kampagnenziel, Budget, bekannte Vorteile, gewünschte Handlung und bisherige Anzeigen oder Ergebnisse.",

        positionierung:
            "Marke oder Unternehmen, Produkt oder Dienstleistung, Zielgruppe, tatsächliche Stärken, Wettbewerber, bisherige Positionierung und gewünschte Markenwirkung.",

        branding:
            "Unternehmen oder Marke, Zielgruppe, Markenwerte, gewünschte Wirkung, Branche, bestehendes Branding, bevorzugte Tonalität und Dinge, die bewusst vermieden werden sollen.",

        naming:
            "Produkt, Unternehmen oder Projekt, Branche, Zielgruppe, gewünschte Markenwirkung, Sprache, bevorzugte Stilrichtung und Begriffe oder Assoziationen, die vermieden werden sollen.",

        produktmarketing:
            "Produkt, bekannte Eigenschaften, Zielgruppe, wichtigste Kundenprobleme, Wettbewerb, Preis, Verkaufswege und geplantes Einführungsdatum.",

        contentMarketing:
            "Produkt oder Unternehmen, Zielgruppe, Marketingziel, Customer Journey, vorhandene Inhalte, genutzte Kanäle, verfügbare Ressourcen und gewünschter Zeitraum.",

        emailMarketing:
            "Produkt oder Angebot, Empfängergruppe, Position im Funnel, Ziel der E-Mail, vorhandene Informationen, gewünschte Tonalität und gewünschter Call-to-Action.",

        newsletter:
            "Zielgruppe, Hauptthema, vorhandene Inhalte, gewünschte Länge, Tonalität, Versandhäufigkeit und gewünschte Handlung der Leser.",

        seo:
            "Website oder Seite, Thema, Zielgruppe, wichtige Suchbegriffe, bisherige SEO-Maßnahmen, bekannte technische Probleme und gewünschtes Ziel.",

        keywords:
            "Produkt, Dienstleistung oder Thema, Zielgruppe, Region, Sprache, gewünschte Suchintention und vorhandene Keywords oder Themenbereiche.",

        landingpages:
            "Produkt oder Angebot, Zielgruppe, zentrale Zielhandlung, wichtigste Vorteile, mögliche Einwände, vorhandene Belege und bisheriger Seiteninhalt.",

        verkaufsseiten:
            "Produkt oder Dienstleistung, Zielgruppe, Preis, bekannte Vorteile, typische Einwände, vorhandene Nachweise, Angebotsbestandteile und gewünschte Kaufhandlung.",

        leads:
            "Produkt oder Dienstleistung, gewünschte Zielgruppe, vorhandene Kanäle, bisherige Leadquellen, Budget, gewünschte Leadqualität und aktueller Funnel.",

        kundenansprache:
            "Produkt oder Dienstleistung, Zielkunde, Anlass des Kontakts, bekannte Informationen über den Kunden, zentraler Nutzen, gewünschte Tonalität und gewünschter nächster Schritt.",

        wettbewerb:
            "Eigene Marke oder Produkt, relevante Wettbewerber, gewünschte Vergleichskriterien, Region, vorhandene Informationen und welche strategische Frage beantwortet werden soll.",

        marktanalyse:
            "Produkt oder Geschäftsidee, Markt oder Branche, Region, Zeitraum, Zielgruppe, bekannte Wettbewerber, vorhandene Daten und konkrete Entscheidungsfrage.",

        angebote:
            "Produkt oder Dienstleistung, Zielgruppe, tatsächlich enthaltene Leistungen, Preis oder Preisrahmen, mögliche Pakete, Wettbewerb und gewünschte Positionierung.",

        preisargumentation:
            "Produkt oder Dienstleistung, Preis, enthaltene Leistungen, Zielgruppe, typische Preiseinwände, tatsächliche Vorteile und mögliche Alternativen.",

        conversion:
            "Website, Landingpage oder Funnel, gewünschte Conversion, aktuelle Kennzahlen, Zielgruppe, vorhandene Seiteninhalte, bekannte Probleme und bisherige Tests.",

        kampagnenideen:
            "Produkt oder Marke, Zielgruppe, Kampagnenziel, zentrale Botschaft, gewünschte Kanäle, Budget, gewünschte Markenwirkung und bereits ausprobierte Ideen.",

        marketingplan:
            "Unternehmen oder Projekt, Marketingziele, Zielgruppe, Zeitraum, Budget, verfügbare Mitarbeiter oder Zeit, vorhandene Kanäle und bereits geplante Maßnahmen.",

        guerilla:
            "Produkt oder Marke, Zielgruppe, Ort oder Region, gewünschte Wirkung, Budget, verfügbare Ressourcen, rechtliche oder räumliche Einschränkungen und gewünschter Zeitraum.",

        offline:
            "Produkt oder Unternehmen, Zielgruppe, Region oder Standort, Budget, geplante Werbemittel, zentrale Botschaft und gewünschtes Ergebnis.",

        eventMarketing:
            "Art des Events, Datum, Ort, Zielgruppe, gewünschte Teilnehmerzahl, Ticket oder Teilnahmebedingungen, Budget, vorhandene Kanäle und wichtigste Eventvorteile.",

        kundenbindung:
            "Produkt oder Dienstleistung, bestehende Kunden, typische Kaufabstände, bisherige Kundenkommunikation, bekannte Abwanderungsgründe, verfügbare Kanäle und gewünschtes Ziel.",

        kennzahlen:
            "Marketingziel, verwendete Kanäle, betrachteter Zeitraum, vorhandene Kennzahlen, Budget oder Kosten, Vergleichswerte und welche Entscheidung aus der Analyse abgeleitet werden soll."
    },

    // ==================================================
    // PROGRAMMIERUNG & SOFTWAREENTWICKLUNG
    // ==================================================

    programmierung: {

        lernen:
            "Programmiersprache, bisherige Kenntnisse, konkretes Lernziel, verfügbare Zeit, bevorzugte Lernweise und ob du lieber mit Übungen oder einem echten Projekt lernen möchtest.",

        codeGenerieren:
            "Programmiersprache, gewünschte Funktion, Eingaben, erwartete Ausgabe, technische Umgebung, vorhandene Projektstruktur, verwendete Bibliotheken und besondere Anforderungen.",

        codeErklaeren:
            "Den vollständigen betreffenden Code, Programmiersprache, deinen Kenntnisstand, verwendete Frameworks oder Bibliotheken und welche Teile oder Zusammenhänge besonders unklar sind.",

        debugging:
            "Vollständige Fehlermeldung, betroffener Code, erwartetes Verhalten, tatsächliches Verhalten, verwendete Sprache oder Framework, Laufzeitumgebung und was bereits zur Fehlerbehebung ausprobiert wurde.",

        refactoring:
            "Bestehenden Code, gewünschtes Ziel der Verbesserung, verwendete Sprache oder Framework, bekannte Probleme, Einschränkungen und welche Funktionen oder Schnittstellen unbedingt unverändert bleiben müssen.",

        htmlCss:
            "Vorhandenen HTML- und CSS-Code, gewünschte Oberfläche, konkrete Darstellungsprobleme, Zielgeräte oder Bildschirmgrößen, gewünschtes Design und Browser, die unterstützt werden sollen.",

        javascript:
            "Gewünschte Funktion, vorhandenen JavaScript-Code, zugehörige HTML-Struktur, Fehlermeldungen, erwartetes Verhalten, verwendete Browserumgebung und gegebenenfalls verwendete Bibliotheken.",

        python:
            "Ziel des Programms, vorhandenen Python-Code, Eingaben, erwartete Ausgabe, Python-Version, verwendete Bibliotheken, Betriebssystem und gegebenenfalls vorhandene Fehlermeldungen.",

        java:
            "Ziel der Anwendung, vorhandenen Java-Code, Java-Version, verwendetes Framework oder Build-System, relevante Klassen, Fehlermeldungen und gewünschtes Ergebnis.",

        csharp:
            "Ziel der Anwendung, vorhandenen C#-Code, verwendete .NET-Version, Projekttyp, relevante Klassen oder Dateien, Fehlermeldungen und gewünschtes Verhalten.",

        cpp:
            "Ob C oder C++ verwendet wird, verwendeter Sprachstandard, Compiler und Betriebssystem, vorhandener Code, Fehlermeldungen, erwartetes Verhalten und gegebenenfalls besondere Anforderungen an Speicher oder Performance.",

        sql:
            "Verwendetes Datenbanksystem, relevante Tabellen und Spalten, Beispieldaten oder Schema, gewünschtes Ergebnis, vorhandene SQL-Abfrage und eventuell auftretende Fehlermeldungen.",

        webentwicklung:
            "Ziel der Webanwendung, vorhandene Dateien, verwendete Frontend- und Backend-Technologien, gewünschte Funktion, Zielgeräte, aktuelle Probleme und geplante Veröffentlichung.",

        backend:
            "Verwendete Sprache und Framework, gewünschte Backend-Funktion, vorhandene Projektstruktur, Datenbank, benötigte Eingaben und Ausgaben, Authentifizierung und aktuelle Fehlermeldungen.",

        api:
            "Welche API verwendet oder entwickelt werden soll, vorhandene Dokumentation, gewünschter Endpunkt oder Aufruf, Authentifizierung, Request- und Response-Daten, verwendete Programmiersprache und auftretende Fehler.",

        datenbanken:
            "Anwendungszweck, verwendetes oder geplantes Datenbanksystem, benötigte Daten, Beziehungen zwischen den Daten, erwartete Datenmenge, vorhandenes Schema und relevante Abfragen.",

        git:
            "Aktueller Git-Status, gewünschtes Ziel, verwendeter Branch, vorhandene lokale Änderungen, Remote-Repository, relevante Fehlermeldungen und welche Git-Befehle bereits ausgeführt wurden.",

        architektur:
            "Art und Ziel der Anwendung, wichtigste Funktionen, verwendete oder geplante Technologien, erwartete Nutzer- oder Datenmenge, vorhandene Architektur und Anforderungen an Wartbarkeit oder Erweiterbarkeit.",

        appLogik:
            "Gewünschter Ablauf der Anwendung, mögliche Eingaben, erwartete Ausgaben, Zustände und Statuswechsel, vorhandene Geschäftsregeln, Sonderfälle und bereits vorhandene Implementierung.",

        automatisierung:
            "Aktueller manueller Ablauf, welche Schritte automatisiert werden sollen, verwendete Programme oder Dateien, Eingaben und Ausgaben, gewünschte Programmiersprache, Ausführungsumgebung und Häufigkeit der Ausführung.",

        skripte:
            "Konkrete Aufgabe des Skripts, verwendetes Betriebssystem, gewünschte Programmiersprache, Eingabedaten oder Dateien, gewünschte Ausgabe, vorhandene Beispiele und ob bestehende Dateien verändert werden dürfen.",

        testing:
            "Zu testende Funktion oder Anwendung, verwendete Sprache und Test-Framework, erwartetes Verhalten, bekannte kritische Fälle, vorhandene Tests und welche Fehler oder Risiken besonders geprüft werden sollen.",

        performance:
            "Betroffener Code oder Prozess, gemessenes Performanceproblem, relevante Messwerte, verwendete Sprache und Umgebung, Datenmenge, bisherige Messungen und gewünschtes Verbesserungsziel.",

        sicherheit:
            "Betroffener Code oder Anwendungsteil, verwendete Technologien, Art der verarbeiteten Daten, Authentifizierung und Berechtigungen, mögliche Angriffsflächen und welche Sicherheitsfrage konkret geprüft werden soll.",

        dokumentation:
            "Zu dokumentierender Code oder Projektbereich, Zielgruppe der Dokumentation, verwendete Technologien, vorhandene Befehle oder Schnittstellen, Setup-Schritte und gewünschte Dokumentationsform.",

        anforderungen:
            "Beschreibung der gewünschten Funktion, aktueller Projektstand, verwendete Technologien, vorhandene Randbedingungen, erwartetes Nutzerverhalten, Ein- und Ausgaben sowie bekannte Sonderfälle.",

        erweitern:
            "Aktuelle vollständige relevante Dateien, gewünschte neue Funktion, vorhandene Projektstruktur, verwendete Technologien, Funktionen die unverändert bleiben müssen und gewünschtes Verhalten nach der Erweiterung.",

        konvertieren:
            "Originalcode, Ausgangs- und Zielsprache oder Framework, gewünschte Funktionalität, verwendete Bibliotheken, technische Umgebung und welche Eigenschaften des Originals unbedingt erhalten bleiben müssen.",

        kiCoding:
            "Projektziel, aktueller Code oder Projektstand, verwendete Technologien, gewünschte Änderung, bekannte Einschränkungen, gewünschte Arbeitsweise mit der KI und wie die fertige Lösung getestet werden soll.",

        projektstruktur:
            "Art des Projekts, verwendete Technologien, geplante Funktionen, aktuelle Dateien und Ordner, Projektgröße, mögliche spätere Erweiterungen und ob Frontend, Backend oder Daten getrennt werden sollen."
    },

        // ==================================================
    // WEBSEITEN & APPS
    // ==================================================

    webApps: {

        websitePlanen:
            "Art und Zweck der Website, Zielgruppe, wichtigste Ziele, benötigte Seiten, gewünschte Funktionen, vorhandene Inhalte, Budget oder Zeitrahmen und geplante spätere Erweiterungen.",

        websiteErstellen:
            "Gewünschte Website, benötigte Seiten und Funktionen, vorhandene Texte oder Designs, gewünschte Technologien, Zielgeräte, vorhandene Dateien und besondere Anforderungen an Darstellung oder Bedienung.",

        webApp:
            "Zweck der Web-App, Zielgruppe, wichtigste Funktionen, vorhandene Projektdateien, verwendete Technologien, benötigte Daten, gewünschte Speicherung und geplante spätere Erweiterungen.",

        mobileApp:
            "Zweck der App, Zielgruppe, gewünschte Plattformen, wichtigste Funktionen, Online- oder Offline-Nutzung, benötigte Gerätefunktionen, vorhandene Technikkenntnisse und gewünschte Veröffentlichungsform.",

        pwa:
            "Vorhandene Website oder Web-App, verwendete Technologien, gewünschte Installierbarkeit, benötigte Offline-Funktionen, aktuelle Hosting-Situation, Zielgeräte und welche Inhalte zwischengespeichert werden sollen.",

        landingpage:
            "Produkt oder Angebot, Zielgruppe, gewünschte Zielhandlung, wichtigste Vorteile, vorhandene Texte und Bilder, gewünschte Gestaltung, technische Basis und bereits vorhandene Landingpage.",

        unternehmenswebsite:
            "Unternehmen, Branche, Zielgruppe, angebotene Leistungen, gewünschte Seiten, vorhandene Texte und Bilder, Kontaktmöglichkeiten, bestehendes Branding und Ziel der Website.",

        portfolio:
            "Person oder Unternehmen, Art der zu präsentierenden Arbeiten, wichtigste Projekte, Zielgruppe, vorhandene Bilder oder Medien, gewünschter Stil, Kontaktmöglichkeiten und gewünschte Plattform.",

        blog:
            "Themengebiet, Zielgruppe, gewünschte Artikelstruktur, erwartete Anzahl an Beiträgen, Kategorien oder Tags, gewünschte Suchfunktion, verwendete Technik oder CMS und geplante Veröffentlichungsfrequenz.",

        shop:
            "Produkte oder Dienstleistungen, Zielgruppe, Anzahl der Produkte, benötigte Kategorien, Zahlungsarten, Versand oder digitale Lieferung, gewünschte Shop-Plattform und besondere Anforderungen an Checkout oder Benutzerkonten.",

        ui:
            "Bestehende Oberfläche oder gewünschte Screens, Zielgruppe, wichtigste Funktionen, gewünschter visueller Stil, vorhandenes Branding, Zielgeräte und konkrete UI-Probleme, die verbessert werden sollen.",

        ux:
            "Zielgruppe, wichtigstes Nutzerziel, aktueller Nutzerablauf, vorhandene Screens oder Anwendung, bekannte Bedienprobleme, Zielgeräte und welche Aktionen besonders einfach oder zuverlässig funktionieren sollen.",

        navigation:
            "Vorhandene oder geplante Seiten und Funktionen, wichtigste Nutzerziele, aktuelle Menüstruktur, Zielgeräte, häufig benötigte Bereiche und bekannte Probleme beim Finden von Inhalten.",

        responsive:
            "Vorhandenen HTML- und CSS-Code, aktuelle Darstellung auf Desktop und Mobilgerät, konkrete Problemstellen, gewünschte Zielgrößen, verwendete Layout-Techniken und Browser, die unterstützt werden sollen.",

        formulare:
            "Zweck des Formulars, benötigte Felder, Pflicht- und optionale Angaben, gewünschte Validierung, Verarbeitung der Daten, Zielgeräte und besondere Anforderungen an Datenschutz oder Barrierefreiheit.",

        login:
            "Art der Anwendung, vorhandener Frontend- und Backend-Stack, gewünschte Registrierung und Anmeldung, Benutzerrollen, benötigte Passwort- oder Reset-Funktionen, Datenbank und bisherige Authentifizierung.",

        datenSpeichern:
            "Welche Daten gespeichert werden sollen, Menge und Sensibilität der Daten, gewünschte Dauer der Speicherung, vorhandene Anwendung, verwendete Technologien, lokale oder serverseitige Nutzung und bestehende Datenformate.",

        datenbanken:
            "Verwendete Datenbank, Backend-Technologie, vorhandenes Datenmodell, benötigte Tabellen oder Entitäten, gewünschte CRUD-Funktionen, erwartete Datenmenge und vorhandener Projektcode.",

        api:
            "Welche externe API integriert werden soll, Link oder Inhalt der API-Dokumentation, gewünschte Funktion, Authentifizierung, vorhandener Frontend- oder Backend-Code, benötigte Daten und aktuelle Fehlermeldungen.",

        kiFunktionen:
            "Gewünschte KI-Funktion, vorhandene Web-App, verwendeter Technologie-Stack, gewünschtes KI-Modell oder API falls bekannt, Eingabedaten, erwartete Ausgabe, Datenschutzanforderungen und gewünschte Kostenbegrenzung.",

        zahlung:
            "Gewünschter Zahlungsanbieter, Produkt oder Dienstleistung, Einmalzahlung oder Abonnement, verwendeter Technologie-Stack, vorhandenes Backend, benötigte Währung, gewünschter Checkout-Ablauf und aktuelle Anbieter-Dokumentation.",

        suche:
            "Welche Inhalte durchsucht werden sollen, Datenmenge, vorhandene Datenstruktur, gewünschte Suchlogik, erwartete Filter oder Sortierung, verwendete Technologien und gewünschtes Verhalten bei keinen Treffern.",

        filter:
            "Vorhandene Daten, gewünschte Filterkriterien, mögliche Kombinationen mehrerer Filter, gewünschte Sortieroptionen, bestehende Benutzeroberfläche, Speicherbedarf des Filterzustands und erwartete Datenmenge.",

        dashboards:
            "Zielgruppe des Dashboards, wichtigste Kennzahlen und Datenquellen, gewünschte Filter, Aktualisierungshäufigkeit, vorhandene Daten, Zielgeräte und welche Entscheidungen mit dem Dashboard unterstützt werden sollen.",

        admin:
            "Welche Inhalte oder Nutzer verwaltet werden sollen, vorhandene Anwendung, Benutzerrollen und Rechte, benötigte Aktionen, sensible Bereiche, Backend und Datenbank sowie gewünschte Protokollierung von Änderungen.",

        performance:
            "Betroffene Website oder Web-App, konkrete Performanceprobleme, vorhandene Messwerte, verwendete Technologien, Hosting, Größe von Bildern oder anderen Ressourcen, Netzwerkzugriffe und Zielgeräte.",

        barrierefreiheit:
            "Vorhandene Website oder relevante Codeabschnitte, Zielgruppe, verwendete Komponenten, bekannte Accessibility-Probleme, gewünschter Prüfungsumfang und ob bestimmte Standards oder WCAG-Stufen relevant sind.",

        sicherheit:
            "Vorhandene Anwendung oder relevante Codeabschnitte, verwendete Technologien, Authentifizierung, Benutzerrollen, verarbeitete sensible Daten, externe Schnittstellen und welche Sicherheitsbereiche konkret geprüft werden sollen.",

        testing:
            "Zu testende Website oder Web-App, wichtigste Nutzerabläufe, verwendete Technologien, Zielbrowser und Geräte, vorhandene Tests, bekannte Fehler und welche Funktionen besonders kritisch sind.",

        hosting:
            "Art der Website oder Web-App, verwendete Technologien, benötigtes Backend oder Datenbank, erwartete Nutzung, vorhandene Domain, Budget, gewünschter Hosting-Anbieter falls bekannt und Anforderungen an Backup oder Skalierung.",

        deployment:
            "Vorhandene Domain, Hosting-Anbieter, Projektstruktur, verwendete Technologien, aktueller DNS- oder Deployment-Stand, gewünschte Zielumgebung, HTTPS-Status und vorhandene Fehlermeldungen.",

        wartung:
            "Vorhandene Website oder Web-App, verwendete Technologien und Abhängigkeiten, aktueller Projektstand, bekannte technische Probleme, geplante Erweiterungen, Hosting-Situation und gewünschter Wartungszeitraum.",

        ideen:
            "Zielgruppe, Problem oder Bedürfnis, das gelöst werden soll, eigene Fähigkeiten oder verfügbare Technologien, gewünschte Plattform, Budget oder verfügbare Zeit und wie groß oder einfach das erste MVP sein soll."
    },


    // ==================================================
    // KI & PROMPT ENGINEERING
    // ==================================================

    ki: {

        promptEngineering:
            "Konkrete Aufgabe, gewünschtes Ergebnis, Zielgruppe, vorhandene Informationen, wichtige Regeln, gewünschtes Ausgabeformat und bisherige Probleme mit dem Prompt.",

        promptsVerbessern:
            "Bestehender Prompt, gewünschtes Ergebnis, verwendetes KI-Modell, bisherige Antwortprobleme und Punkte, die verbessert werden sollen.",

        systemprompts:
            "Zweck des KI-Assistenten, Aufgabenbereich, Zielgruppe, erlaubte und unerlaubte Handlungen, gewünschtes Verhalten und Regeln für Unsicherheit oder Rückfragen.",

        rollenprompts:
            "Aufgabe, gewünschte Expertise, Zielgruppe und Situationen, in denen die Rolle eingesetzt werden soll.",

        fewShot:
            "Aufgabe sowie mehrere Beispiele für gewünschte Eingaben und ideale Ausgaben.",

        strukturiertePrompts:
            "Aufgabe, vorhandene Informationen, Regeln, gewünschte Ausgabe und Kriterien für eine gute Antwort.",

        modelle:
            "Geplanter Einsatz, benötigte Fähigkeiten, Datenschutzanforderungen, Kostenrahmen, gewünschte Geschwindigkeit und gegebenenfalls benötigte Bild-, Datei-, Web- oder Coding-Funktionen.",

        assistenten:
            "Zweck des Assistenten, typische Nutzerfragen, benötigtes Wissen, gewünschter Arbeitsablauf, erlaubte Aktionen und Situationen, in denen nachgefragt werden soll.",

        agenten:
            "Ziel des Agenten, verfügbare Werkzeuge, benötigte Daten, erlaubte Aktionen und Bedingungen zum Stoppen oder Nachfragen.",

        workflows:
            "Ausgangsaufgabe, einzelne Arbeitsschritte, verwendete KI-Tools, Ein- und Ausgaben je Schritt, manuelle Tätigkeiten und gewünschtes Endergebnis.",

        texte:
            "Textart, Thema, Zielgruppe, gewünschte Tonalität, Länge, vorhandene Fakten und Inhalte, die unbedingt enthalten oder vermieden werden sollen.",

        bilder:
            "Gewünschtes Motiv, Bildstil, Umgebung, Perspektive, Licht, Stimmung, Seitenverhältnis, verwendetes Bildmodell und wichtige Elemente oder Ausschlüsse.",

        video:
            "Gewünschte Szene oder Handlung, Videostil, Dauer, Kameraperspektive, Kamerabewegung, Licht, Seitenverhältnis und verwendetes KI-Videomodell.",

        audio:
            "Gewünschte Audioart, Einsatzgebiet, Stil oder Stimmung, Länge, Stimme oder Instrumentierung, vorhandenes Ausgangsmaterial und verwendetes KI-Audiotool.",

        coding:
            "Programmiersprache, bestehender Code oder Projektaufbau, gewünschte Funktion, verwendete Bibliotheken, Fehlermeldungen, technische Einschränkungen und erwartetes Ergebnis.",

        recherche:
            "Recherchefrage, gewünschter Zeitraum, benötigte Aktualität, bevorzugte Quellenarten, gewünschte Tiefe und Aussagen, die besonders geprüft werden sollen.",

        daten:
            "Vorhandene Daten, Spalten oder Datenstruktur, Ziel der Analyse, gewünschte Kennzahlen, verwendete Software und gewünschte Darstellung der Ergebnisse.",

        automatisierung:
            "Zu automatisierender Prozess, aktueller Ablauf, verwendete Programme oder Dienste, Trigger, benötigte Daten, gewünschte Aktionen und mögliche Ausnahmen.",

        tools:
            "Konkreter Anwendungsfall, benötigte Funktionen, vorhandene Geräte oder Plattformen, Budget, Datenschutzanforderungen und bereits getestete KI-Tools.",

        projekte:
            "Projektziel, gewünschtes KI-Ergebnis, Nutzer oder Zielgruppe, vorhandene Daten und Systeme, technische Möglichkeiten, Zeitrahmen und gewünschter Projektumfang.",

        halluzinationen:
            "Zu prüfende Antwort, Originalfrage, bekannte Quellen und besonders kritische Aussagen.",

        faktenpruefung:
            "Zu überprüfende Aussagen, gewünschter Zeitraum, bevorzugte Quellen und notwendiger Genauigkeitsgrad.",

        datenschutz:
            "Art der verwendeten Daten, geplante KI-Anwendung, Speicherort, verwendeter Anbieter und wer Zugriff auf die Daten haben soll.",

        qualitaet:
            "Originalaufgabe, erzeugte KI-Antwort, gewünschtes Qualitätsniveau und Kriterien wie Richtigkeit, Vollständigkeit, Verständlichkeit, Quellenlage oder Praxistauglichkeit.",

        bibliotheken:
            "Art der regelmäßig verwendeten Prompts, Themenbereiche, gewünschte Kategorien, Such- oder Filtersystem, benötigte Metadaten und geplanter Einsatz der Bibliothek.",

        vorlagen:
            "Wiederkehrende Aufgabe, veränderliche Eingaben, feste Regeln, gewünschte Ausgabe und Nutzer, die die Prompt-Vorlage später verwenden sollen.",

        assistentenEntwickeln:
            "Zweck des Assistenten, Zielgruppe, typische Aufgaben, benötigte Daten oder Werkzeuge, gewünschtes Verhalten, Grenzen und mögliche Fehlerfälle.",

        api:
            "Gewünschte KI-Funktion, verwendetes Modell oder Anbieter, Programmiersprache, bestehende Anwendung, Ein- und Ausgabedaten, Datenschutzanforderungen und Kostenrahmen.",

        lokaleModelle:
            "Geplanter Anwendungsfall, vorhandene Hardware, Betriebssystem, benötigte Modellfähigkeiten, gewünschte Geschwindigkeit, Datenschutzanforderungen und verfügbare Speicherressourcen.",

        trends:
            "Interessierender KI-Bereich, gewünschter Zeitraum, technische oder geschäftliche Perspektive und welche Entwicklungen, Produkte oder Auswirkungen besonders untersucht werden sollen."
    },

        // ==================================================
    // AUTOMATISIERUNG & PRODUKTIVITÄT
    // ==================================================

    produktivitaet: {

        workflows:
            "Aktueller Arbeitsablauf, beteiligte Programme, einzelne Arbeitsschritte, verwendete Daten, wiederkehrende Tätigkeiten, gewünschtes Ergebnis und bekannte Probleme.",

        wiederkehrend:
            "Wiederkehrende Aufgabe, Häufigkeit, bisheriger Ablauf, verwendete Programme, benötigte Eingaben und gewünschtes Ergebnis.",

        office:
            "Verwendete Office-Programme, aktueller Ablauf, beteiligte Dateien oder Daten, wiederkehrende Schritte und gewünschte Automatisierung.",

        email:
            "E-Mail-Anbieter, Auslöser, typische Nachrichten, gewünschte automatische Aktionen, Empfängerregeln und Ausnahmen.",

        dateien:
            "Dateitypen, aktuelle Ordnerstruktur, Quelle und Ziel der Dateien, gewünschte Benennung, Sortierregeln und mögliche Sonderfälle.",

        daten:
            "Quelle und Ziel der Daten, Datenformat, relevante Felder, Übertragungszeitpunkt, verwendete Programme und gewünschte Prüfung auf Fehler oder Dubletten.",

        berichte:
            "Datenquelle, gewünschter Bericht, benötigte Kennzahlen, Empfänger, Erstellungsrhythmus und gewünschtes Ausgabeformat.",

        zusammenfassungen:
            "Art der zu verarbeitenden Inhalte, Quelle, gewünschte Länge und Struktur der Zusammenfassung, Häufigkeit und Zielgruppe.",

        kalender:
            "Verwendeter Kalender, Art der Termine, Auslöser, gewünschte Aktionen, beteiligte Personen und Regeln für Überschneidungen oder Erinnerungen.",

        aufgaben:
            "Verwendetes Aufgabenmanagement-System, Art der Aufgaben, Quellen neuer Aufgaben, Prioritäten, Fälligkeiten und gewünschte automatische Aktionen.",

        nocode:
            "Zu automatisierender Prozess, verwendete Apps oder Dienste, vorhandene No-Code-Plattform, Trigger, gewünschte Aktionen und benötigte Daten.",

        lowcode:
            "Zu automatisierender Prozess, verwendete Plattform, vorhandene Datenquellen, benötigte Logik, Schnittstellen und gewünschter Grad an eigener Programmierung.",

        powerAutomate:
            "Gewünschter Prozess, verwendete Microsoft-365-Dienste, Trigger, benötigte Aktionen und Connectors, relevante Daten, Berechtigungen und mögliche Fehlerfälle.",

        zapierMake:
            "Zu verbindende Apps, Trigger, gewünschte Aktionen, zu übertragende Daten, verwendete Zapier- oder Make-Version und mögliche Sonderfälle.",

        python:
            "Zu automatisierende Aufgabe, Betriebssystem, vorhandene Dateien oder Daten, gewünschter Ablauf, verwendete Programme oder APIs und vorhandener Python-Code, falls vorhanden.",

        browser:
            "Website oder Webanwendung, wiederkehrende Browser-Schritte, benötigte Eingaben, gewünschte Ergebnisse, Login-Anforderungen und mögliche Änderungen der Webseite.",

        ki:
            "Zu automatisierender Prozess, Aufgabe der KI, benötigte Eingabedaten, gewünschte KI-Ausgabe, verwendetes Modell oder Tool und Schritte vor oder nach der KI-Verarbeitung.",

        prozessanalyse:
            "Aktueller Prozess vom Start bis zum Ende, beteiligte Personen und Systeme, Bearbeitungszeiten, Wartezeiten, manuelle Schritte und bekannte Probleme.",

        zeitfresser:
            "Typischer Arbeitsalltag, häufig wiederkehrende Aufgaben, ungefähre Zeitaufwände, verwendete Programme und Tätigkeiten, die besonders lästig oder langsam sind.",

        produktivitaet:
            "Typische Aufgaben, verfügbare Arbeitszeit, häufige Unterbrechungen, verwendete Werkzeuge, wichtigste Ziele und aktuelle Produktivitätsprobleme.",

        persoenlicheWorkflows:
            "Wiederkehrende persönliche Aufgaben, verwendete Geräte und Apps, gewünschter Ablauf, Häufigkeit und Stellen, an denen aktuell unnötige Arbeit entsteht.",

        vorlagen:
            "Wiederkehrende Aufgabe, benötigte Eingaben, feste Bestandteile, variable Inhalte, gewünschtes Ausgabeformat und Personen, die die Vorlage verwenden.",

        checklisten:
            "Aufgabe oder Prozess, Ziel der Checkliste, wichtige Arbeitsschritte, kritische Prüfungen, gewünschte Reihenfolge und Nutzer der Checkliste.",

        routinen:
            "Gewünschte Routine, vorhandene feste Termine, verfügbare Zeit, Häufigkeit, aktuelle Gewohnheiten und typische Gründe, warum die Routine bisher scheitert.",

        organisation:
            "Verwendete Geräte, Programme und Speicherorte, aktuelle Ablagestruktur, häufig gesuchte Informationen und Bereiche, die unübersichtlich geworden sind.",

        information:
            "Art der Informationen, Quellen, Speicherorte, Nutzungshäufigkeit, gewünschte Kategorien sowie Anforderungen an Suche, Aktualisierung und Archivierung.",

        ideen:
            "Arbeitsbereich oder Alltagssituation, häufige Tätigkeiten, verwendete Programme, besonders zeitaufwendige Schritte und gewünschter Nutzen einer Automatisierung.",

        dokumentation:
            "Zu dokumentierender Workflow, beteiligte Systeme, Trigger, einzelne Arbeitsschritte, Ein- und Ausgaben, Fehlerfälle und Zielgruppe der Dokumentation."
    },

    // ==================================================
    // TECHNIK & ENGINEERING
    // ==================================================

    technik: {

        maschinenbau:
            "Bauteil oder System, gewünschte Funktion, Belastungen, Abmessungen, Werkstoff, Einbausituation, Randbedingungen und bekannte technische Anforderungen.",

        konstruktion:
            "Bauteil oder Baugruppe, gewünschte Funktion, vorhandene Geometrie, Abmessungen, Belastungen, Werkstoff, Fertigungsverfahren und konstruktive Einschränkungen.",

        cad:
            "Verwendetes CAD-System, Bauteil oder Baugruppe, vorhandene Geometrie, Maße, gewünschte Änderung, Modellierungsproblem und gewünschtes Ergebnis.",

        zeichnungen:
            "Vorhandene technische Zeichnung, Bauteil, relevante Maße, Ansichten, Toleranzen, Normen, Fertigungsverfahren und gewünschte Prüfung oder Änderung.",

        produktentwicklung:
            "Produktidee, gewünschte Funktion, Nutzer oder Einsatzgebiet, technische Anforderungen, vorhandene Konzepte, Kostenrahmen und Entwicklungsstand.",

        fertigung:
            "Bauteil, Werkstoff, Geometrie, Stückzahl, Toleranzen, Oberflächenanforderungen, vorhandene Maschinen und mögliche Fertigungsverfahren.",

        produktion:
            "Produkt, Stückzahlen, vorhandener Produktionsablauf, Maschinen, Personal, Taktzeiten, Qualitätsanforderungen und bekannte Engpässe.",

        montage:
            "Bauteile oder Baugruppen, gewünschter Montageablauf, Verbindungstechniken, vorhandene Werkzeuge, Zugänglichkeit, Stückzahl und bekannte Montageprobleme.",

        werkstoffe:
            "Bauteil oder Anwendung, mechanische und thermische Belastungen, Umgebung, Gewicht, Fertigungsverfahren, Kostenrahmen und besondere Anforderungen an den Werkstoff.",

        toleranzen:
            "Nennmaße, Funktion der Verbindung, Passung, beteiligte Bauteile, Fertigungsverfahren, vorhandene Toleranzen und gewünschtes funktionales Ergebnis.",

        berechnungen:
            "Gegebene Werte mit Einheiten, gesuchte Größe, Geometrie, Materialwerte, Belastungen, Randbedingungen und falls bekannt anzuwendende Formel oder Norm.",

        mechanik:
            "Mechanisches System, Geometrie, Kräfte, Momente, Bewegungen, Lagerungen, Materialdaten, Randbedingungen und gewünschte Berechnung oder Erklärung.",

        elektrotechnik:
            "Elektrische Schaltung oder Anlage, Spannung, Strom, Leistung, angeschlossene Komponenten, vorhandene Messwerte, Schaltplan und gewünschte Analyse.",

        elektronik:
            "Elektronische Schaltung, verwendete Bauteile, Versorgungsspannung, Signale, Schaltplan, Messwerte, gewünschte Funktion und beobachtetes Problem.",

        mechatronik:
            "Mechanische, elektrische und softwareseitige Komponenten, gewünschte Gesamtfunktion, Schnittstellen, Sensoren, Aktoren, Steuerung und bekannte Probleme.",

        automatisierungstechnik:
            "Zu automatisierender technischer Prozess, vorhandene Maschine oder Anlage, Sensoren, Aktoren, Steuerungssystem, Prozessschritte und Sicherheitsanforderungen.",

        robotik:
            "Roboter oder Robotertyp, gewünschte Aufgabe, Arbeitsraum, Werkstück, Greifer oder Werkzeug, Sensorik, Taktzeit und Sicherheitsanforderungen.",

        regelung:
            "Zu steuernder oder zu regelnder Prozess, Eingangs- und Ausgangsgrößen, Sensoren, Aktoren, Sollwerte, vorhandene Steuerung und gewünschtes Verhalten.",

        dreidruck:
            "Bauteil, 3D-Druckverfahren, Drucker, Material, Abmessungen, Belastungen, gewünschte Oberflächenqualität, Druckorientierung und vorhandenes Modell.",

        prototyping:
            "Produktidee oder Bauteil, zu testende Funktion, Entwicklungsstand, verfügbare Materialien und Verfahren, Zeitrahmen und gewünschte Aussage des Prototyps.",

        qualitaet:
            "Produkt oder Prozess, Qualitätsmerkmale, Sollwerte und Toleranzen, vorhandene Prüfdaten, Prüfverfahren, bekannte Abweichungen und gewünschte Verbesserung.",

        fehleranalyse:
            "Fehlerbild, Zeitpunkt und Bedingungen des Auftretens, betroffene Komponenten, vorhandene Messwerte, Änderungen vor dem Fehler und bereits geprüfte Ursachen.",

        ursachenanalyse:
            "Konkretes Problem, beobachtete Symptome, Zeitpunkt des Auftretens, Prozess oder System, vorhandene Daten, bekannte Einflussfaktoren und bisher ausgeschlossene Ursachen.",

        fmea:
            "Produkt oder Prozess, betrachteter Umfang, Funktionen, mögliche oder bekannte Fehler, Fehlerfolgen, Fehlerursachen, vorhandene Bewertungen und bestehende Maßnahmen.",

        dokumentation:
            "Produkt, Maschine oder Prozess, Zielgruppe der Dokumentation, vorhandene technische Daten, gewünschter Umfang, erforderliche Abbildungen und gefordertes Dokumentformat.",

        lastenheft:
            "Projekt oder Produkt, Ausgangssituation, Ziel, Anforderungen des Auftraggebers, Einsatzbedingungen, Schnittstellen, Randbedingungen und bekannte Ausschlüsse.",

        anforderungen:
            "Produkt oder System, gewünschte Funktion, Einsatzbedingungen, Nutzer, technische Randbedingungen, Schnittstellen, messbare Zielwerte und bekannte Einschränkungen.",

        recherche:
            "Technisches Thema oder Bauteil, konkrete Fragestellung, gewünschte technische Tiefe, relevante Normen oder Hersteller, Zeitraum und benötigte Aktualität.",

        problemloesung:
            "Technisches Problem, gewünschter Sollzustand, aktueller Istzustand, betroffene Komponenten, vorhandene Messwerte, Randbedingungen und bereits getestete Lösungsversuche.",

        ideen:
            "Technische Aufgabe oder Problemstellung, gewünschte Funktion, vorhandener Bauraum, Werkstoffe und Fertigungsmöglichkeiten, Kostenrahmen und wichtige Einschränkungen."
    },


    // ==================================================
    // DATEN, EXCEL & ANALYSE
    // ==================================================

    datenAnalyse: {

        excel:
            "Aufbau der Excel-Datei, vorhandene Tabellenblätter und Spalten, Beispielwerte, gewünschtes Ergebnis, verwendete Excel-Version und aktuelle Probleme.",

        formeln:
            "Vorhandene Tabellenstruktur, relevante Zellen oder Spalten, Beispielwerte, gewünschtes Berechnungsergebnis und bereits verwendete Formeln.",

        pivot:
            "Vorhandene Spalten, Datenmenge, gewünschte Kennzahlen, Gruppierungen, Filter und Fragen, die mit der Pivot-Tabelle beantwortet werden sollen.",

        diagramme:
            "Vorhandene Daten, gewünschte Aussage, Zielgruppe, Vergleichsgrößen, Zeitraum und wo das Diagramm verwendet werden soll.",

        bereinigung:
            "Beispieldaten, bekannte Fehler oder Dubletten, fehlende Werte, gewünschtes Zielformat und Regeln für ungültige oder unvollständige Daten.",

        aufbereitung:
            "Rohdaten, Datenquelle, vorhandene Spalten und Formate, gewünschte Zielstruktur, benötigte Berechnungen und spätere Verwendung der Daten.",

        analyse:
            "Datensatz oder Tabellenstruktur, konkrete Fragestellung, relevante Kennzahlen, Zeitraum, Vergleichsgruppen und gewünschte Tiefe der Analyse.",

        statistik:
            "Datensatz, Fragestellung, Stichprobengröße, vorhandene Variablen, Datentypen und gewünschte statistische Aussage oder Methode.",

        kennzahlen:
            "Geschäfts- oder Analyseziel, vorhandene Daten, relevante Prozesse, gewünschter Zeitraum und welche Entscheidungen mit den Kennzahlen unterstützt werden sollen.",

        dashboards:
            "Zielgruppe, wichtigste Kennzahlen, Datenquellen, Aktualisierungsintervall, benötigte Filter und Entscheidungen, die das Dashboard unterstützen soll.",

        berichte:
            "Datenquelle, Berichtszeitraum, Zielgruppe, benötigte Kennzahlen, gewünschte Aussagen, Vergleichswerte und gewünschtes Ausgabeformat.",

        tabellen:
            "Vorhandene Daten, aktuelle Tabellenstruktur, gewünschte Nutzung, benötigte Spalten, Sortier- oder Filteranforderungen und gewünschte Übersichtlichkeit.",

        vergleichen:
            "Zu vergleichende Datensätze oder Zeiträume, gemeinsame Merkmale, relevante Kennzahlen, gewünschte Vergleichskriterien und bekannte Unterschiede in der Datenstruktur.",

        trends:
            "Zeitreihe oder Datensatz, betrachteter Zeitraum, relevante Kennzahlen, gewünschte Vergleichsbasis und bekannte Ereignisse oder Einflussfaktoren.",

        prognosen:
            "Historische Daten, gewünschter Prognosezeitraum, Zielgröße, bekannte Einflussfaktoren, verfügbare Datenmenge und gewünschte Genauigkeit oder Methode.",

        sql:
            "Verwendetes Datenbanksystem, vorhandene Tabellen und Spalten, Beziehungen, gewünschte Abfrage, Beispielwerte und vorhandener SQL-Code, falls vorhanden.",

        datenbanken:
            "Art der Anwendung, zu speichernde Daten, erwartete Datenmenge, Beziehungen zwischen Daten, benötigte Zugriffe, verwendete Technologie und gewünschte Datenbankstruktur.",

        csv:
            "CSV-Datei oder Beispielzeilen, verwendetes Trennzeichen, Spaltenstruktur, Zeichencodierung, gewünschte Verarbeitung und beobachtete Probleme.",

        powerQuery:
            "Datenquelle, aktueller Tabellenaufbau, wiederkehrende Arbeitsschritte, gewünschte Zielstruktur, verwendete Excel- oder Power-BI-Version und vorhandene Power-Query-Schritte.",

        powerBI:
            "Datenquellen, Tabellen und Beziehungen, gewünschte Kennzahlen, Zielgruppe, benötigte Visualisierungen, Filter und aktueller Stand des Power-BI-Berichts.",

        visualisierung:
            "Vorhandene Daten, wichtigste Botschaft, Zielgruppe, gewünschter Detailgrad, Vergleichsgrößen und Medium, in dem die Visualisierung verwendet wird.",

        python:
            "Datensatz, Dateiformat, Spaltenstruktur, Fragestellung, gewünschte Auswertung, verwendete Python-Bibliotheken und vorhandener Code oder Fehlermeldungen.",

        automatisch:
            "Datenquelle, gewünschte Auswertung, Aktualisierungsrhythmus, wiederkehrende manuelle Schritte, verwendete Programme und gewünschtes Ausgabeziel.",

        business:
            "Geschäftsbereich, Unternehmensziel, verfügbare Daten, relevante Prozesse, gewünschter Zeitraum und Entscheidungen, die mit den Kennzahlen unterstützt werden sollen.",

        qualitaet:
            "Produkt oder Prozess, vorhandene Qualitätsdaten, relevante Merkmale, Sollwerte und Toleranzen, Zeitraum, Fehlerarten und gewünschte Qualitätsauswertung.",

        messdaten:
            "Messgröße, Einheiten, Messverfahren, Zeitstempel oder Messpunkte, erwartete Wertebereiche, vorhandene Messdateien und gewünschte Analyse.",

        umfragen:
            "Umfrageziel, Fragen und Antworttypen, Anzahl der Antworten, Zielgruppe, vorhandene Freitextantworten und gewünschte Auswertung.",

        interpretieren:
            "Vorhandene Analyseergebnisse, zugrunde liegende Daten, verwendete Kennzahlen oder Methoden, Fragestellung und gewünschte fachliche Einordnung.",

        erklaeren:
            "Analyseergebnisse, Zielgruppe, vorhandenes Vorwissen, wichtigste Kennzahlen oder Diagramme und gewünschter Detailgrad der Erklärung.",

        vorlagen:
            "Wiederkehrende Analyseaufgabe, typische Eingangsdaten, benötigte Kennzahlen, feste Auswertungsschritte, gewünschte Darstellung und Nutzer der Vorlage."
    },


    // ==================================================
    // PROJEKTMANAGEMENT & ORGANISATION
    // ==================================================

    projektmanagement: {

        planung:
            "Projektziel, aktueller Stand, gewünschtes Ergebnis, verfügbare Zeit, beteiligte Personen, wichtige Termine, Ressourcen, Abhängigkeiten und bekannte Risiken.",

        ziele:
            "Projektidee oder Ausgangssituation, gewünschtes Ergebnis, Zielgruppe oder Auftraggeber, verfügbare Zeit und Kriterien, an denen der Projekterfolg gemessen werden soll.",

        struktur:
            "Projektziel, bekannte Aufgaben oder Liefergegenstände, beteiligte Bereiche, Projektumfang, wichtige Abhängigkeiten und gewünschte Detailtiefe.",

        meilensteine:
            "Projektziel, Projektphasen, wichtige Liefergegenstände, Start- und Endtermin, bekannte Abhängigkeiten und bereits festgelegte Termine.",

        aufgaben:
            "Projektziel, vorhandene Arbeitspakete, beteiligte Personen, verfügbare Zeit, Abhängigkeiten und gewünschter Detaillierungsgrad der Aufgaben.",

        termine:
            "Projektstart und gewünschtes Projektende, Aufgaben oder Arbeitspakete, geschätzte Dauer, Abhängigkeiten, feste Termine und verfügbare Ressourcen.",

        ressourcen:
            "Projektaufgaben, benötigte Kompetenzen, vorhandene Personen oder Mittel, verfügbare Kapazitäten, Zeitrahmen und bekannte Engpässe.",

        priorisierung:
            "Zu priorisierende Aufgaben oder Maßnahmen, Projektziel, verfügbare Zeit und Ressourcen, Abhängigkeiten sowie Kriterien wie Wirkung, Aufwand oder Dringlichkeit.",

        risiken:
            "Projektziel, aktueller Projektstand, wichtige Arbeitspakete, technische oder organisatorische Unsicherheiten, bekannte Probleme und vorhandene Gegenmaßnahmen.",

        chancen:
            "Projektziel, aktueller Stand, mögliche Verbesserungen oder zusätzliche Nutzenpotenziale, verfügbare Ressourcen und bekannte Rahmenbedingungen.",

        status:
            "Berichtszeitraum, Projektziel, aktueller Stand, Plantermine, tatsächlicher Fortschritt, wichtige Ergebnisse, Probleme, Risiken und nächste Schritte.",

        berichte:
            "Projekt, Berichtszeitraum, Zielgruppe des Berichts, aktueller Fortschritt, Termine, Kosten oder Ressourcen, Risiken, Probleme und offene Entscheidungen.",

        besprechungen:
            "Ziel des Meetings, beteiligte Personen, verfügbare Zeit, aktuelle Projektthemen, offene Entscheidungen, Probleme und gewünschte Ergebnisse der Besprechung.",

        agenda:
            "Zweck der Besprechung, Teilnehmer, verfügbare Dauer, zu behandelnde Themen, offene Entscheidungen und gewünschte Ergebnisse.",

        protokolle:
            "Besprechungsnotizen oder Transkript, Datum, Teilnehmer, behandelte Themen, getroffene Entscheidungen, Aufgaben, Verantwortliche und offene Punkte.",

        meetingAufgaben:
            "Meetingnotizen oder Protokoll, besprochene Aufgaben, genannte Verantwortliche, Termine, Entscheidungen und offene Punkte.",

        stakeholder:
            "Projektziel, beteiligte oder betroffene Personen und Gruppen, bekannte Interessen, Einflussmöglichkeiten, Erwartungen und mögliche Konflikte.",

        kommunikation:
            "Projekt, beteiligte Stakeholder, benötigte Informationen, Kommunikationskanäle, gewünschte Häufigkeit, Verantwortlichkeiten und sensible Inhalte.",

        entscheidungen:
            "Zu treffende oder bereits getroffene Entscheidung, Ausgangsproblem, verfügbare Optionen, Bewertungskriterien, bekannte Fakten, Annahmen und beteiligte Entscheider.",

        aenderungen:
            "Geplante Änderung, aktueller Projektstand, ursprünglicher Umfang, Grund der Änderung, betroffene Termine, Kosten, Ressourcen und technische oder organisatorische Abhängigkeiten.",

        probleme:
            "Konkretes Projektproblem, Zeitpunkt des Auftretens, beobachtete Auswirkungen, betroffene Aufgaben oder Systeme, vorhandene Daten und bisherige Lösungsversuche.",

        eskalationen:
            "Kritisches Problem, bisheriger Verlauf, Auswirkungen auf Projektziele, Termine oder Kosten, bereits durchgeführte Maßnahmen und konkret benötigte Entscheidung oder Unterstützung.",

        lessons:
            "Abgeschlossenes Projekt oder Projektphase, ursprüngliche Ziele, Ergebnisse, gut funktionierende Punkte, Probleme, Ursachen und bereits erkannte Verbesserungsmöglichkeiten.",

        checklisten:
            "Projektphase oder wiederkehrende Aufgabe, gewünschtes Ergebnis, wichtige Arbeitsschritte, bekannte Fehlerquellen und Punkte, die zwingend geprüft werden müssen.",

        zeitmanagement:
            "Projektaufgaben, Prioritäten, feste Termine, verfügbare Arbeitszeit, typische Unterbrechungen, Engpässe und aktuell besonders zeitkritische Tätigkeiten.",

        kanban:
            "Aktueller Arbeitsprozess, typische Aufgabentypen, beteiligte Personen, bestehende Workflow-Schritte, häufige Blockaden und gewünschte Verbesserung des Arbeitsflusses.",

        scrum:
            "Produkt oder Projekt, Teamgröße, aktueller Entwicklungsstand, Product Backlog, Sprintdauer, vorhandene Rollen und aktuelle Probleme im Scrum-Ablauf.",

        agil:
            "Projektart, Team, aktueller Arbeitsprozess, Änderungsdynamik, gewünschte Feedbackzyklen, bestehende Probleme und bisher verwendete Projektmethoden.",

        klassisch:
            "Projektziel, gewünschte Liefergegenstände, Projektphasen, Termine, Verantwortlichkeiten, Freigaben, Dokumentationsanforderungen und bekannte Abhängigkeiten.",

        abschluss:
            "Projektziel, erreichte Ergebnisse, offene Aufgaben, Liefergegenstände, Abnahmestatus, Übergabeanforderungen, Projektdokumentation und wichtige Erkenntnisse."
    },


    // ==================================================
    // RECHERCHE & WISSEN
    // ==================================================

    recherche: {

        allgemein:
            "Thema oder konkrete Fragestellung, gewünschter Zeitraum, Ziel der Recherche, gewünschte Tiefe, vorhandenes Vorwissen und bevorzugte Quellenarten.",

        tiefe:
            "Konkrete Forschungsfrage, gewünschter Zeitraum, relevante Teilfragen, benötigte fachliche Tiefe, bevorzugte Quellenarten und Aspekte, die besonders kritisch geprüft werden sollen.",

        web:
            "Konkrete Suchfrage, gewünschter Zeitraum, benötigte Aktualität, bevorzugte oder auszuschließende Webseiten und Informationen, die besonders überprüft werden sollen.",

        wissenschaft:
            "Forschungsfrage, Fachgebiet, gewünschter Zeitraum, relevante Suchbegriffe, bevorzugte Publikationstypen und gewünschte Tiefe der Literaturauswertung.",

        technisch:
            "Technisches Thema, konkrete Fragestellung, Produkt oder Technologie, benötigte technische Daten, relevante Hersteller oder Normen, Zeitraum und gewünschte Detailtiefe.",

        markt:
            "Markt oder Branche, Region, gewünschter Zeitraum, relevante Produkte oder Kundengruppen, benötigte Kennzahlen und konkrete Fragen zur Marktstruktur.",

        wettbewerb:
            "Zu vergleichende Unternehmen oder Produkte, Markt oder Region, gewünschter Zeitraum, Vergleichskriterien und Informationen, die besonders untersucht werden sollen.",

        produkte:
            "Gesuchte Produktart, Einsatzzweck, Budget, Must-haves, Nice-to-haves, bevorzugte oder ausgeschlossene Marken und Kriterien für den Vergleich.",

        quellenFinden:
            "Thema oder konkrete Aussage, gewünschter Zeitraum, bevorzugte Quellenarten, benötigte Aktualität und wofür die Quellen anschließend verwendet werden sollen.",

        quellenBewerten:
            "Quelle oder Quellenliste, Thema, Veröffentlichungsdatum, Autor oder Organisation, zu prüfende Aussagen und Kriterien, die für die Vertrauenswürdigkeit besonders wichtig sind.",

        fakten:
            "Zu überprüfende Aussage oder Textpassage, ursprünglicher Kontext, gewünschter Zeitraum, bekannte Quellen und erforderlicher Genauigkeitsgrad.",

        verifizieren:
            "Konkrete Behauptung, ursprünglicher Kontext, relevante Teilbehauptungen, gewünschter Zeitraum und bereits bekannte Belege oder Gegenbelege.",

        studien:
            "Studie oder Studienauszug, Forschungsfrage, Studiendesign, Stichprobe, untersuchte Variablen, Ergebnisse und Punkte, die besonders erklärt oder kritisch geprüft werden sollen.",

        dokumente:
            "Dokument oder Text, konkrete Fragestellung, gewünschte Informationen, relevante Abschnitte und gewünschte Tiefe der Analyse.",

        pdf:
            "PDF-Dokument, konkrete Fragen, relevante Seiten oder Themen, gewünschte Informationen und ob Tabellen, Abbildungen oder bestimmte Aussagen besonders berücksichtigt werden sollen.",

        zusammenfassen:
            "Ausgangstext oder mehrere Quellen, Zielgruppe, gewünschte Länge, gewünschter Detailgrad und Inhalte, die unbedingt erhalten bleiben sollen.",

        vergleichen:
            "Zu vergleichende Informationen oder Quellen, gemeinsame Fragestellung, relevante Kriterien, gewünschter Zeitraum und gewünschte Darstellung der Unterschiede.",

        widersprueche:
            "Mehrere Aussagen oder Quellen, gemeinsames Thema, jeweiliger Kontext, Veröffentlichungszeitraum und Punkte, bei denen ein möglicher Widerspruch vermutet wird.",

        vorNachteile:
            "Thema oder Option, Ziel der Entscheidung, relevante Kriterien, persönlicher oder geschäftlicher Kontext und besonders wichtige Vor- oder Nachteile.",

        hintergrund:
            "Thema, gewünschter Zeitraum, vorhandenes Vorwissen, Zielgruppe und welche historischen, technischen, wirtschaftlichen oder gesellschaftlichen Zusammenhänge erklärt werden sollen.",

        chronologie:
            "Thema oder Ereignisreihe, gewünschter Start- und Endzeitpunkt, vorhandene Ereignisse oder Quellen und gewünschter Detailgrad der zeitlichen Darstellung.",

        fachbegriffe:
            "Fachbegriff oder Begriffsliste, Fachgebiet, vorhandenes Vorwissen, gewünschte Erklärungstiefe und ähnliche Begriffe, von denen abgegrenzt werden soll.",

        sammlungen:
            "Themenbereich, vorhandene Informationen oder Quellen, gewünschte Kategorien, geplante Nutzung, benötigte Metadaten und gewünschte Struktur der Wissenssammlung.",

        faq:
            "Thema oder Produkt, Zielgruppe, typische Fragen oder Probleme, vorhandene Informationen und gewünschte Länge und Tonalität der Antworten.",

        wissensdatenbank:
            "Themenbereich, Zielgruppe, vorhandene Dokumente oder Wissensquellen, gewünschte Kategorien, Suchanforderungen, Aktualisierungsprozess und Zugriffsanforderungen.",

        rechercheplan:
            "Hauptfrage, gewünschtes Ergebnis, verfügbare Zeit, vorhandenes Wissen, relevante Teilbereiche und bevorzugte oder verfügbare Quellenarten.",

        fragen:
            "Thema, bisherige Fragestellung, gewünschtes Erkenntnisziel, vorhandenes Wissen und Aspekte, die noch unklar oder besonders wichtig sind.",

        struktur:
            "Vorhandene Rechercheergebnisse, Hauptfrage, Zielgruppe, gewünschtes Ausgabeformat, wichtigste Themenbereiche und Punkte, die besonders hervorgehoben werden sollen.",

        quellenuebersicht:
            "Vorhandene Quellen, gemeinsames Thema, gewünschter Zeitraum, Kriterien für Relevanz und Vertrauenswürdigkeit sowie gewünschte Sortierung oder Gruppierung.",

        luecken:
            "Thema oder bestehende Recherche, bereits bekannte Fakten, vorhandene Quellen, offene Fragen und Ziel, für das die fehlenden Informationen benötigt werden."
    },


    // ==================================================
    // LERNEN & WEITERBILDUNG
    // ==================================================

    lernen: {

        lernplaene:
            "Thema, aktueller Kenntnisstand, konkretes Lernziel, verfügbare Zeit pro Woche, gewünschter Zeitraum und bevorzugte Lernform wie Theorie, Übungen oder Projekte.",

        thema:
            "Thema, aktueller Kenntnisstand, vorhandenes Vorwissen, gewünschte Tiefe, konkretes Lernziel und Punkte, die bisher unklar sind.",

        einfach:
            "Zu erklärendes Thema, vorhandenes Vorwissen, Ziel der Erklärung, gewünschte Länge und ob Beispiele oder Vergleiche aus dem Alltag helfen sollen.",

        tief:
            "Fachthema, vorhandenes Vorwissen, gewünschte fachliche Tiefe, konkrete Fragestellungen und Bereiche, die besonders detailliert behandelt werden sollen.",

        schrittweise:
            "Thema oder Aufgabe, aktueller Kenntnisstand, gewünschtes Endziel, verfügbare Zeit und ob nach jedem Schritt eine kurze Übung oder Kontrolle erfolgen soll.",

        uebungen:
            "Lernthema, aktueller Kenntnisstand, Lernziel, gewünschte Anzahl der Übungen, Schwierigkeitsgrad und ob Lösungen oder Hinweise mitgeliefert werden sollen.",

        quiz:
            "Thema, Kenntnisstand, gewünschte Anzahl der Fragen, Schwierigkeitsgrad, bevorzugter Fragentyp und ob Erklärungen nach den Antworten gewünscht sind.",

        karteikarten:
            "Lernthema oder Ausgangsmaterial, gewünschte Anzahl der Karten, Kenntnisstand, Schwerpunkt auf Fakten oder Verständnis und gewünschte Länge der Antworten.",

        pruefung:
            "Prüfungsfach, Prüfungstermin, Prüfungsformat, vorhandener Lernstoff, aktueller Kenntnisstand, verfügbare Lernzeit und besonders schwierige Themen.",

        zusammenfassungen:
            "Ausgangsmaterial, Lernziel, gewünschte Länge, vorhandenes Vorwissen und Inhalte, Definitionen oder Zusammenhänge, die unbedingt erhalten bleiben sollen.",

        lernzettel:
            "Prüfungs- oder Lernthema, vorhandenes Material, gewünschter Umfang, wichtige Formeln oder Definitionen und gewünschte Struktur des Lernzettels.",

        merkHilfen:
            "Zu merkende Begriffe, Fakten oder Reihenfolge, vorhandenes Verständnis, gewünschte Art der Merkhilfe und gegebenenfalls persönliche Assoziationen, die genutzt werden können.",

        wiederholung:
            "Lernstoff, Prüfungstermin oder langfristiges Lernziel, Umfang des Stoffes, bisheriger Lernstand, verfügbare Tage und besonders schwierige Themen.",

        verstaendnis:
            "Thema, bisher gelerntes Wissen, gewünschtes Niveau, Bereiche mit Unsicherheit und ob die Fragen eher praktisch, theoretisch oder gemischt sein sollen.",

        fortschritt:
            "Lernziel, bisher bearbeitete Themen, vorhandene Übungen oder Ergebnisse, eigener Eindruck des Lernstands und Bereiche, die gezielt überprüft werden sollen.",

        beispiele:
            "Zu erklärendes Konzept, Fachgebiet, vorhandenes Vorwissen, gewünschter Schwierigkeitsgrad und ob Beispiele aus einem bestimmten Alltag-, Berufs- oder Technikbereich verwendet werden sollen.",

        aufgaben:
            "Konkrete Aufgabe, gegebene Werte oder Informationen, eigener Lösungsversuch, bekannte Regeln oder Formeln und Stelle, an der Verständnisprobleme bestehen.",

        fehler:
            "Aufgabe oder Thema, eigene Antwort oder eigener Lösungsweg, erwartetes Ergebnis, vorhandene Fehlermeldung oder Korrektur und Punkt, der nicht verstanden wird.",

        sprachen:
            "Zu lernende Sprache, aktuelles Sprachniveau, Lernziel, verfügbare Zeit, gewünschte Schwerpunkte wie Sprechen, Hören, Lesen oder Schreiben und bevorzugte Themen.",

        vokabeln:
            "Sprache, aktuelles Niveau, Themenbereich, gewünschte Anzahl der Wörter, Lernziel und ob Beispielsätze, Übersetzungen oder Übungen gewünscht sind.",

        grammatik:
            "Sprache, Grammatikthema, aktuelles Sprachniveau, bisheriges Verständnis, typische eigene Fehler und gewünschte Art der Übungen.",

        mathematik:
            "Mathematisches Thema, aktueller Kenntnisstand, konkrete Aufgabe oder Lernziel, bekannte Formeln und Punkte, an denen das Verständnis fehlt.",

        naturwissenschaften:
            "Fachgebiet und Thema, aktueller Kenntnisstand, gewünschte Tiefe, konkrete Fragestellung und ob Rechnungen, Modelle, Beispiele oder Experimente einbezogen werden sollen.",

        programmieren:
            "Programmiersprache, bisherige Kenntnisse, Lernziel, vorhandener Code oder Projektidee, gewünschter Praxisanteil und Themen, die bereits verstanden wurden.",

        beruflich:
            "Beruf oder Tätigkeitsbereich, vorhandene Kenntnisse, gewünschte neue Kompetenz, berufliches Ziel, verfügbare Lernzeit und Möglichkeiten zur praktischen Anwendung.",

        praesentationen:
            "Art der Präsentation, Thema, Zielgruppe, aktuelle Erfahrung, gewünschte Verbesserung wie Aufbau, freies Sprechen oder Foliengestaltung und vorhandene Übungsmöglichkeiten.",

        selbststudium:
            "Zu lernendes Thema, aktueller Kenntnisstand, Ziel, verfügbarer Zeitraum, wöchentliche Lernzeit, vorhandene Materialien und bevorzugte Lernmethoden.",

        lernmethoden:
            "Lernziel, Art des Lernstoffs, bisher verwendete Methoden, verfügbare Zeit, typische Lernprobleme und bevorzugte Lernweise.",

        luecken:
            "Lernziel oder Prüfungsstoff, bisher behandelte Themen, vorhandene Notizen oder Ergebnisse, Bereiche mit Unsicherheit und gewünschtes Niveau der Überprüfung.",

        kiTutor:
            "Thema, aktueller Kenntnisstand, konkretes Lernziel, bevorzugte Lernweise, verfügbare Zeit, gewünschtes Tempo und ob der KI-Tutor regelmäßig Fragen, Übungen und Verständnischecks einbauen soll."
    },


       // ==================================================
    // BUSINESS & SELBSTSTÄNDIGKEIT
    // ==================================================

    business: {

        ideen:
            "Geschäftsidee oder Themenbereich, eigene Fähigkeiten, verfügbare Zeit, Startbudget, gewünschte Zielgruppe und welches Problem gelöst werden soll.",

        bewerten:
            "Zu bewertende Geschäftsidee, Zielgruppe, Kundennutzen, möglicher Markt, verfügbare Ressourcen, Kostenrahmen und wichtigste Annahmen.",

        gruendung:
            "Geschäftsidee, Land oder Region, geplanter Startzeitpunkt, verfügbare Zeit, Startbudget, vorhandene Kenntnisse und bereits erledigte Gründungsschritte.",

        geschaeftsmodell:
            "Angebot, Zielgruppe, konkretes Kundenproblem, möglicher Kundennutzen, Vertriebswege, Kosten, Erlösquellen und zentrale Annahmen.",

        businessplan:
            "Geschäftsidee, Angebot, Zielgruppe, Markt, Wettbewerb, Preise, Kosten, Vertrieb, Finanzierung und bereits bekannte Zahlen oder Annahmen.",

        zielgruppen:
            "Produkt oder Dienstleistung, vermutete Kundengruppen, Region, Preisniveau, vorhandene Kundenerfahrungen und welches Problem gelöst werden soll.",

        marktanalyse:
            "Branche oder Markt, Region, Zielgruppe, relevante Produkte oder Dienstleistungen, gewünschter Zeitraum und welche Marktfragen beantwortet werden sollen.",

        wettbewerb:
            "Eigene Idee oder Angebot, bekannte Wettbewerber, Region oder Markt, Zielgruppe und Kriterien wie Preis, Leistung, Positionierung oder Vertrieb.",

        positionierung:
            "Unternehmen oder Angebot, Zielgruppe, tatsächliche Stärken, wichtigste Wettbewerber, gewünschte Markenwirkung und bisherige Positionierung.",

        angebot:
            "Produkt oder Dienstleistung, Zielkunde, Kundenproblem, gewünschtes Ergebnis, geplanter Leistungsumfang, Preisrahmen und vorhandene Ressourcen.",

        dienstleistungen:
            "Geplante Dienstleistung, Zielkunde, konkretes Problem, gewünschtes Kundenergebnis, eigener Aufwand, vorhandene Fähigkeiten und mögliche Ausschlüsse.",

        produkte:
            "Produktidee, Zielgruppe, Nutzerproblem, gewünschter Kernnutzen, vorhandene Funktionen oder Konzepte, Budget und technischer Entwicklungsstand.",

        preise:
            "Produkt oder Dienstleistung, Zielgruppe, Kosten, gewünschte Marge, Marktpreise sofern bekannt, Leistungsumfang und geplantes Preismodell.",

        kalkulation:
            "Produkt oder Dienstleistung, fixe und variable Kosten, Zeitaufwand, Stückzahl oder Auslastung, gewünschte Marge, Preisannahmen und relevante Nebenkosten.",

        vertrieb:
            "Produkt oder Dienstleistung, Zielgruppe, bisherige Vertriebskanäle, Verkaufsprozess, Preisniveau, vorhandene Ressourcen und gewünschte Vertriebsziele.",

        verkauf:
            "Produkt oder Dienstleistung, Kundentyp, Gesprächssituation, Kundenbedarf soweit bekannt, Preis, typische Einwände und gewünschtes Gesprächsergebnis.",

        kundengewinnung:
            "Angebot, Zielgruppe, Region oder Markt, verfügbare Zeit, Marketing- und Vertriebsbudget, bisherige Kanäle und gewünschte Anzahl oder Art neuer Kunden.",

        kundenbindung:
            "Bestehende Kundengruppe, Produkt oder Dienstleistung, bisheriger Kundenprozess, bekannte Gründe für Abwanderung oder Wiederkauf und gewünschtes Bindungsziel.",

        akquise:
            "Angebot, Zielgruppe, gewünschter Akquisekanal, vorhandene Kontaktdaten oder Leadquellen, bisherige Ansprache und gewünschter nächster Schritt.",

        angebote:
            "Kunde oder Zielgruppe, konkrete Anfrage, angebotene Leistungen, Preise, Bedingungen, Zeitrahmen, gewünschte Tonalität und offene Punkte.",

        emails:
            "Anlass, Empfänger, gewünschtes Ergebnis, wichtige Fakten, bisheriger Schriftverkehr, gewünschte Tonalität und konkreter nächster Schritt.",

        prozesse:
            "Geschäftsprozess, aktueller Ablauf, beteiligte Personen oder Systeme, Ein- und Ausgaben, Bearbeitungszeiten, bekannte Probleme und gewünschter Sollzustand.",

        organisation:
            "Unternehmensgröße, Team oder Rollen, aktueller Aufbau, Zuständigkeiten, wiederkehrende Abläufe, aktuelle Probleme und gewünschte Verbesserung.",

        strategie:
            "Unternehmen oder Geschäftsidee, aktuelle Situation, Zielgruppe, Angebot, Wettbewerb, wichtigste Ziele, verfügbare Ressourcen und gewünschter Zeitraum.",

        wachstum:
            "Aktuelles Geschäftsmodell, Umsatz- oder Kundensituation soweit bekannt, verfügbare Kapazitäten, Engpässe, Zielmarkt, gewünschtes Wachstum und Zeitraum.",

        nebenverdienst:
            "Eigene Fähigkeiten, Interessen, verfügbare Zeit, gewünschtes Einkommen, Startbudget, vorhandene Geräte oder Software und gewünschter Grad an Automatisierung.",

        digitaleProdukte:
            "Zielgruppe, konkretes Problem, eigenes Wissen oder vorhandene Inhalte, gewünschtes Produktformat, Preisvorstellung, verfügbare Zeit und Vertriebsidee.",

        onlineBusiness:
            "Geschäftsidee, Zielgruppe, Angebot, gewünschte Online-Kanäle, verfügbare Zeit, Budget, technische Möglichkeiten und bisheriger Stand.",

        freelancer:
            "Eigene Fähigkeiten, gewünschte Dienstleistung, Zielkunden, verfügbare Zeit, gewünschtes Einkommen, bisherige Referenzen und aktueller Stand der Selbstständigkeit.",

        kiUnternehmen:
            "Eigene Fähigkeiten, Zielgruppe, Kundenproblem, geplante KI-Funktion, verfügbare Daten oder Tools, Zeit, Budget und gewünschtes Geschäftsmodell."
    },


    // ==================================================
    // FINANZEN & ENTSCHEIDUNGEN
    // ==================================================

    finanzen: {

        budget:
            "Zeitraum, verfügbares Budget, Einnahmen, feste Kosten, variable Kosten, Sparziele und besondere geplante Ausgaben.",

        kosten:
            "Zu betrachtender Bereich, Zeitraum, bekannte Kostenpositionen, Mengen oder Nutzung, einmalige und laufende Kosten und gewünschte Gruppierung.",

        einnahmen:
            "Zeitraum, Einnahmequellen, regelmäßige und unregelmäßige Ausgaben, vorhandene Beträge und gewünschte finanzielle Übersicht.",

        sparen:
            "Sparziel, Zielbetrag, gewünschter Zeitraum, aktuelle Einnahmen und Ausgaben, mögliche Sparrate und wichtige finanzielle Verpflichtungen.",

        ziele:
            "Finanzielles Ziel, Zielbetrag, gewünschter Zeitpunkt, aktueller Stand, verfügbare monatliche Mittel und weitere konkurrierende finanzielle Ziele.",

        kostenNutzen:
            "Alternativen, einmalige Kosten, laufende Kosten, erwarteter Nutzen, Nutzungsdauer, nicht-finanzielle Kriterien und wichtige Annahmen.",

        preisvergleich:
            "Zu vergleichende Produkte oder Angebote, Leistungsumfang, Budget, einmalige und laufende Kosten, Must-haves und geplante Nutzungsdauer.",

        kaufentscheidung:
            "Produktalternativen, Budget, Einsatzzweck, Must-have-Kriterien, Nice-to-have-Kriterien, gewünschte Nutzungsdauer und persönliche Prioritäten.",

        investition:
            "Investitionsoptionen, Investitionsbetrag, laufende Kosten, erwarteter Nutzen oder Ertrag, Betrachtungszeitraum, Alternativen und wichtige Unsicherheiten.",

        modelle:
            "Entscheidungsfrage, vorhandene Optionen, relevante Kriterien, mögliche Ausschlusskriterien, gewünschte Gewichtung und vorhandene Daten.",

        matrix:
            "Alternativen, Entscheidungskriterien, Must-haves, gewünschte Bewertungsskala und – falls vorhanden – Gewichtung der Kriterien.",

        gewichtung:
            "Entscheidungsziel, Alternativen, Kriterien, relative Wichtigkeit der Kriterien und Punkte, bei denen die Gewichtung noch unsicher ist.",

        szenarien:
            "Ausgangssituation, wichtigste unsichere Faktoren, Zeithorizont, realistische Wertebereiche und welche Entscheidung mit den Szenarien vorbereitet werden soll.",

        risiko:
            "Entscheidung oder Projekt, mögliche negative Ereignisse, Auswirkungen, vorhandene Einschätzungen zur Eintrittswahrscheinlichkeit und bestehende Gegenmaßnahmen.",

        alternativen:
            "Zu vergleichende Alternativen, Entscheidungsziel, Budget oder andere Grenzen, relevante Kriterien und vorhandene Informationen zu jeder Option.",

        vorNachteile:
            "Entscheidung oder Option, Ziel, relevante Kriterien, kurzfristige und langfristige Auswirkungen und Punkte, die besonders wichtig sind.",

        breakEven:
            "Fixkosten, variable Kosten pro Einheit, Verkaufspreis oder Einsparung pro Einheit, Zeitraum und gegebenenfalls mehrere Szenarien.",

        wirtschaftlichkeit:
            "Investitionskosten, laufende Kosten, erwartete Einsparungen oder Einnahmen, Nutzungsdauer, Restwert sofern relevant und Vergleichsalternativen.",

        laufendeKosten:
            "Produkt, Vertrag oder Projekt, monatliche oder jährliche Kostenpositionen, Nutzungsumfang, Preisänderungen soweit bekannt und gewünschter Betrachtungszeitraum.",

        gesamtkosten:
            "Anschaffungskosten, laufende Kosten, Wartung, Verbrauch, Gebühren, Nutzungsdauer, mögliche Restwerte und sonstige Folgekosten.",

        angebote:
            "Zu vergleichende Angebote, Leistungsumfang, Preise, einmalige und laufende Kosten, Vertragsbedingungen, fehlende Positionen und wichtige Entscheidungskriterien.",

        vertraege:
            "Zu vergleichende Verträge, Laufzeit, Grundpreis, variable Kosten, Kündigungsbedingungen, Preisänderungen und erwartete Nutzung.",

        analyse:
            "Finanzdaten, betrachteter Zeitraum, relevante Kennzahlen, Vergleichsperiode, konkrete Fragestellung und gewünschte Tiefe der Analyse.",

        haushalt:
            "Haushaltsgröße, monatliche Einnahmen, feste und variable Ausgaben, Sparziele, Rücklagen und besondere finanzielle Verpflichtungen.",

        reise:
            "Reiseziel, Zeitraum, Anzahl der Personen, Transport, Unterkunft, Verpflegung, Aktivitäten, vorhandenes Budget und gewünschter Puffer.",

        projekt:
            "Projektumfang, Zeitraum, Arbeitspakete, geplante Kosten, vorhandenes Budget, Ressourcen, Reserven und falls vorhanden bisherige Ist-Kosten.",

        business:
            "Geschäftsidee, Preis oder Erlösmodell, Absatz- oder Kundenschätzungen, fixe und variable Kosten, Startkosten, Zeitraum und zentrale Annahmen.",

        strukturieren:
            "Konkrete Entscheidung, Ziel, vorhandene Optionen, Must-haves, Nice-to-haves, Budget oder andere Grenzen und bekannte Unsicherheiten.",

        unsicherheit:
            "Entscheidung, bekannte Fakten, unsichere Annahmen, mögliche Wertebereiche, relevante Szenarien und welche Faktoren das Ergebnis besonders beeinflussen könnten.",

        vorbereitung:
            "Entscheidungsfrage, Ziel, Optionen, Kriterien, vorhandene Fakten, Annahmen, offene Informationen, Risiken und gewünschter Entscheidungszeitpunkt."
    },


    // ==================================================
    // ALLTAG & ORGANISATION
    // ==================================================

    alltag: {

        tag:
            "Datum, feste Termine, offene Aufgaben, Prioritäten, verfügbare Zeit, gewünschte Pausen und besondere Verpflichtungen.",

        woche:
            "Kalenderwoche oder Zeitraum, feste Termine, wichtigste Wochenziele, offene Aufgaben, verfügbare Zeit und wiederkehrende Verpflichtungen.",

        monat:
            "Monat, wichtige Ziele, feste Termine, verfügbare Zeit, wiederkehrende Verpflichtungen, größere Aufgaben und besondere Prioritäten.",

        aufgaben:
            "Alle offenen Aufgaben, Termine oder Fristen, ungefähre Dauer, Wichtigkeit, Dringlichkeit und vorhandene Abhängigkeiten.",

        prioritaeten:
            "Offene Aufgaben oder Entscheidungen, Termine, Auswirkungen bei Nicht-Erledigung, benötigte Zeit und persönliche Ziele.",

        termine:
            "Zeitraum, feste und flexible Termine, Dauer der Termine, Wegezeiten, Vor- und Nachbereitung sowie gewünschte freie Zeit.",

        haushalt:
            "Wohnsituation, Personen im Haushalt, regelmäßig anfallende Aufgaben, verfügbare Zeit und Bereiche, die aktuell besonders viel Aufwand verursachen.",

        haushaltsplanung:
            "Personen im Haushalt, täglich, wöchentlich und monatlich anfallende Aufgaben, verfügbare Zeit und gewünschte Aufgabenverteilung.",

        einkaufslisten:
            "Benötigte Produkte, Anzahl der Personen, vorhandene Vorräte, geplante Mahlzeiten oder Vorhaben, Budget und bevorzugte Geschäfte.",

        einkaufen:
            "Benötigte Einkäufe oder Besorgungen, Budget, verfügbare Zeit, mögliche Geschäfte, wichtige Prioritäten und gegebenenfalls Ausgangspunkt.",

        produktvergleich:
            "Zu vergleichende Produkte, Budget, geplanter Einsatzzweck, Must-have-Kriterien, Nice-to-have-Kriterien und gewünschte Nutzungsdauer.",

        familie:
            "Beteiligte Personen, feste Termine, wiederkehrende Verpflichtungen, offene Aufgaben, verfügbare Zeiten und besondere organisatorische Anforderungen.",

        erinnerungen:
            "Zu erinnernde Aufgaben oder Termine, konkrete Fristen, gewünschter Zeitraum, wiederkehrende Punkte und Prioritäten.",

        checklisten:
            "Aufgabe oder Situation, Ziel der Checkliste, wichtige bekannte Schritte, vorhandene Vorgaben und ob die Liste einmalig oder wiederkehrend genutzt werden soll.",

        routinen:
            "Gewünschte Routine, aktueller Tagesablauf, verfügbare Zeit, vorhandene Gewohnheiten, typische Hindernisse und gewünschtes Ziel.",

        gewohnheiten:
            "Gewünschte oder unerwünschte Gewohnheit, aktueller Stand, typische Auslöser, verfügbare Zeit, mögliche Hindernisse und gewünschtes langfristiges Ziel.",

        zeit:
            "Typischer Tages- oder Wochenablauf, feste Verpflichtungen, wichtige Ziele, offene Aufgaben, vermutete Zeitfresser und gewünschte freie Zeit.",

        projekte:
            "Projektziel, gewünschter Endtermin, verfügbare Zeit, offene Aufgaben, benötigte Materialien oder Ressourcen, Budget und wichtige Zwischenziele.",

        ordnung:
            "Welcher Bereich organisiert werden soll, aktueller Zustand, vorhandener Platz, verfügbare Zeit und was behalten, aussortiert oder neu strukturiert werden soll.",

        digital:
            "Welche digitalen Bereiche organisiert werden sollen, vorhandene Programme oder Systeme, aktuelle Probleme, Geräte und gewünschte zukünftige Struktur.",

        dateien:
            "Art und Menge der Dateien, bisherige Ordnerstruktur, verwendete Geräte oder Speicherorte, typische Dateitypen und gewünschte zukünftige Ablage.",

        dokumente:
            "Art der Dokumente, Papier oder digital, vorhandene Ablage, wichtige Fristen, gewünschte Kategorien und gegebenenfalls besondere Anforderungen an sensible Unterlagen.",

        notizen:
            "Vorhandene Notizen oder Beispiele, verwendete App oder Ablage, gewünschte Struktur und ob Informationen, Aufgaben oder Ideen daraus extrahiert werden sollen.",

        geschenke:
            "Person, Anlass, ungefähres Alter, Interessen, Beziehung zur Person, Budget, gewünschter Aufwand und Dinge, die als Geschenk nicht infrage kommen.",

        veranstaltungen:
            "Art der Veranstaltung, Datum, Ort, Anzahl der Personen, Budget, gewünschte Stimmung, bereits feststehende Punkte und verfügbare Helfer.",

        feiern:
            "Anlass, Datum, Anzahl und Art der Gäste, Ort, Budget, gewünschte Stimmung, Essen und Getränke sowie bereits vorhandene Ideen.",

        umzug:
            "Umzugstermin, alte und neue Wohnsituation, Entfernung, Anzahl der Personen, verfügbare Helfer, Transportmöglichkeiten und bereits erledigte Aufgaben.",

        anschaffungen:
            "Was angeschafft werden soll, Budget, Einsatzzweck, Must-have- und Nice-to-have-Kriterien, vorhandene Alternativen und geplante Nutzungsdauer.",

        probleme:
            "Konkretes Problem, gewünschtes Ergebnis, bisherige Lösungsversuche, bekannte Ursachen oder Rahmenbedingungen, verfügbare Ressourcen und wichtige Einschränkungen.",

        assistent:
            "Aktuelle Situation, offene Aufgaben oder Entscheidungen, wichtige Termine, Prioritäten, verfügbare Zeit und wobei der Assistent konkret unterstützen soll."
    },


    // ==================================================
    // REISEN & FREIZEIT
    // ==================================================

    reisen: {

        ideen:
            "Reisezeitraum, Dauer, Ausgangsort, Budget, Interessen, gewünschtes Klima und bevorzugte Art des Reisens.",

        ziele:
            "Reisezeitraum, Dauer, Budget, Interessen, gewünschtes Klima, maximale Anreisezeit und Dinge, die vermieden werden sollen.",

        planung:
            "Reiseziel, Zeitraum, Anzahl der Personen, Budget, Verkehrsmittel, Unterkunft, Interessen und bereits gebuchte Bestandteile.",

        tagesplanung:
            "Ort, Datum, Unterkunft oder Startpunkt, Interessen, gewünschtes Tempo, verfügbare Zeit und bereits gebuchte Aktivitäten.",

        rundreisen:
            "Start- und Endpunkt, Reisezeitraum, gewünschte Orte, Verkehrsmittel, maximale Fahrtzeiten, Übernachtungspräferenzen und besondere Interessen.",

        staedte:
            "Stadt, Reisedauer, Unterkunft oder Startpunkt, Interessen, Budget, Mobilität und gewünschtes Tempo.",

        roadtrips:
            "Start- und Zielort, Zeitraum, Fahrzeug, gewünschte Tageskilometer, Interessen, Übernachtungspräferenzen und mögliche Pflichtstopps.",

        wochenende:
            "Ausgangsort, verfügbare Zeit, maximale Anreisezeit, Budget, Interessen, gewünschte Aktivität und bevorzugtes Reisetempo.",

        sehenswuerdigkeiten:
            "Reiseziel, verfügbare Zeit, Interessen, Unterkunft oder Startpunkt, Mobilität und bereits bekannte Wunschziele.",

        aktivitaeten:
            "Ort, Zeitraum, Anzahl und Alter der Personen sofern relevant, Interessen, Budget, Mobilität und gewünschter Aktivitätsgrad.",

        essen:
            "Reiseziel, gewünschte Küche, Ernährungswünsche, Budget, Lage oder Tagesroute und ob regionale Spezialitäten im Mittelpunkt stehen sollen.",

        unterkunft:
            "Reiseziel, Reisedaten, Anzahl der Personen, Budget, gewünschte Lage, Ausstattungs-Must-haves und bevorzugte Unterkunftsart.",

        packlisten:
            "Reiseziel, Dauer, Jahreszeit, geplante Aktivitäten, Verkehrsmittel, Unterkunftsart, Gepäckgrenzen und besondere Ausrüstung.",

        budget:
            "Reiseziel, Zeitraum, Anzahl der Personen, Transport, Unterkunft, Verpflegung, Aktivitäten, verfügbares Budget und gewünschter Puffer.",

        checklisten:
            "Reiseziel, Reisezeitraum, Art der Reise, bereits erledigte Buchungen, benötigte Dokumente, Gepäckanforderungen und besondere Vorbereitungen.",

        auto:
            "Start- und Zielort, Reisezeitraum, Fahrzeug, Reichweite oder Verbrauch, gewünschte Tagesfahrzeit, Maut- oder Ländergrenzen und geplante Zwischenstopps.",

        bahn:
            "Start- und Zielort, Reisedatum, Anzahl der Personen, Gepäck, gewünschte Ankunftszeit, maximale Umstiege und besondere Anforderungen.",

        flug:
            "Start- und Zielflughafen, Reisedatum, Anzahl der Personen, Gepäck, Transfer zum Flughafen, gewünschte Zeitpuffer und besondere Anforderungen.",

        fotoreisen:
            "Reiseziel, Motive, Jahreszeit, verfügbare Kameraausrüstung, Mobilität, gewünschte Aufnahmezeiten und geplanter fotografischer Stil.",

        wandern:
            "Region, Fitnessniveau, Erfahrung, gewünschte Distanz, Höhenmeter, Jahreszeit, verfügbare Zeit und vorhandene Ausrüstung.",

        fahrrad:
            "Region, Fahrradtyp, Fitnessniveau, gewünschte Distanz und Höhenmeter, verfügbare Zeit, Gepäck und geplante Übernachtungen.",

        camping:
            "Reiseziel oder Region, Zeitraum, Campingart, Anzahl der Personen, Fahrzeug, vorhandene Ausrüstung und gewünschter Komfort.",

        freizeit:
            "Ort oder Region, verfügbare Zeit, Interessen, Budget, Anzahl der Personen und gewünschter Aktivitätsgrad.",

        ausfluege:
            "Ausgangsort, Datum, maximale Anreisezeit, verfügbare Tageszeit, Interessen, Budget und gewünschte Mischung aus Aktivität und Erholung.",

        hobbies:
            "Aktuelles Hobby, Erfahrung, vorhandene Ausrüstung, verfügbare Zeit, Budget und was daran gelernt, verbessert oder ausprobiert werden soll.",

        events:
            "Ort oder Region, Zeitraum, Interessen, Budget, Anzahl der Personen und welche Arten von Veranstaltungen infrage kommen.",

        wochenendplanung:
            "Ort, feste Termine, verfügbare Zeit, beteiligte Personen, Interessen, Budget und gewünschte Balance aus Aktivität und Erholung.",

        schlechtwetter:
            "Ort, Anzahl und Alter der Personen sofern relevant, Interessen, Budget, verfügbare Zeit und vorhandene Möglichkeiten für Indoor-Aktivitäten.",

        neueHobbys:
            "Interessen, verfügbare Zeit pro Woche, Budget, vorhandene Fähigkeiten oder Ausrüstung und ob das Hobby eher kreativ, sportlich, technisch oder sozial sein soll.",

        erlebnisse:
            "Anlass, Ort, beteiligte Personen, Interessen, Budget, verfügbarer Zeitraum und wie ungewöhnlich oder aufwendig das Erlebnis sein darf."
    },


    // ==================================================
    // KOCHEN, ERNÄHRUNG & SPORT
    // ==================================================

    kochenSport: {

        rezepte:
            "Vorhandene Zutaten, Anzahl der Personen, verfügbare Zeit, Küchenausstattung, gewünschte Art des Gerichts und Lebensmittel, die vermieden werden sollen.",

        rezeptideen:
            "Vorhandene Zutaten, gewünschte Küche, Anzahl der Personen, Zeitaufwand, Ernährungswünsche und Lebensmittel, die vermieden werden sollen.",

        wochenplaene:
            "Anzahl der Personen, gewünschte Mahlzeiten, verfügbare Kochzeit, Budget, Vorlieben, vorhandene Vorräte und Lebensmittel, die vermieden werden sollen.",

        einkaufslisten:
            "Geplante Gerichte, Anzahl der Personen, vorhandene Vorräte, gewünschter Zeitraum, Budget und bevorzugte Einkaufsstruktur.",

        reste:
            "Vorhandene Lebensmittel mit ungefähren Mengen, Haltbarkeit soweit bekannt, weitere Basiszutaten, Anzahl der Personen und gewünschte Art des Gerichts.",

        schnelleGerichte:
            "Vorhandene Zutaten, maximale Kochzeit, Anzahl der Personen, Küchenausstattung und gewünschte Art des Gerichts.",

        mealPrep:
            "Anzahl der Tage und Personen, verfügbare Kochzeit, Lagerungs- und Aufwärmmöglichkeiten, gewünschte Gerichte, vorhandene Zutaten und Ernährungswünsche.",

        backen:
            "Gewünschtes Gebäck, Anzahl der Portionen, vorhandene Zutaten, Backform, Ofentyp, verfügbare Zeit und besondere Ernährungswünsche.",

        grillen:
            "Anzahl der Personen, Grillart, gewünschte Speisen, vorhandene Zutaten, Zeitrahmen, Beilagen und gewünschter Aufwand.",

        vegetarisch:
            "Anzahl der Personen, gewünschte Mahlzeit, vorhandene Zutaten, Kochzeit, bevorzugte Proteinquellen und Lebensmittel, die vermieden werden sollen.",

        vegan:
            "Anzahl der Personen, gewünschte Mahlzeit, vorhandene Zutaten, Kochzeit, bevorzugte pflanzliche Zutaten und Lebensmittel, die vermieden werden sollen.",

        lowCarb:
            "Anzahl der Personen, gewünschte Mahlzeiten, vorhandene Zutaten, Kochzeit, persönlicher Kohlenhydrat-Rahmen falls vorhanden und Lebensmittel, die vermieden werden sollen.",

        protein:
            "Anzahl der Personen, gewünschte Mahlzeit, bevorzugte Proteinquellen, vorhandene Zutaten, Portionsgröße, Kochzeit und gewünschter Nährwertfokus.",

        fruehstueck:
            "Anzahl der Personen, verfügbare Zeit morgens, vorhandene Zutaten, Ernährungswünsche, gewünschte Sättigung und ob Vorbereitung am Vorabend möglich ist.",

        mittag:
            "Anzahl der Personen, Ort des Mittagessens, verfügbare Zeit, vorhandene Zutaten, Möglichkeit zum Kühlen oder Aufwärmen und Ernährungswünsche.",

        abend:
            "Anzahl der Personen, verfügbare Kochzeit, vorhandene Zutaten, gewünschte Art des Gerichts, Ernährungswünsche und gewünschter Aufwand.",

        snacks:
            "Anzahl der Personen, gewünschte Snackart, vorhandene Zutaten, Transport- oder Lagerungsbedarf, Zubereitungszeit und Ernährungswünsche.",

        zutaten:
            "Vorhandene Zutaten mit ungefähren Mengen, Anzahl der Personen, verfügbare Zeit, Küchenausstattung und Zutaten, die zusätzlich gekauft werden dürfen.",

        portionen:
            "Ausgangsrezept oder Gericht, ursprüngliche und gewünschte Personenzahl, vorhandene Mengen und ob ein kleiner Mengenpuffer eingeplant werden soll.",

        kueche:
            "Größe und Aufbau der Küche, vorhandene Schränke und Arbeitsflächen, Geräte, typische Kochgewohnheiten, Vorräte und aktuelle Organisationsprobleme.",

        trainingsplaene:
            "Trainingsziel, aktueller Leistungsstand, verfügbare Tage, Trainingsdauer, vorhandene Geräte, bevorzugte Sportarten und relevante Einschränkungen.",

        kraft:
            "Trainingsziel, Erfahrung, verfügbare Trainingstage, vorhandene Geräte, bevorzugte Übungen, Dauer pro Einheit und aktuelle Leistungswerte sofern vorhanden.",

        ausdauer:
            "Sportart, aktueller Leistungsstand, Ziel, verfügbare Trainingstage, Zeit pro Einheit und vorhandene Leistungsdaten sofern vorhanden.",

        beweglichkeit:
            "Ziel, aktuelle Beweglichkeit, verfügbare Zeit, bevorzugte Übungen, relevante Körperbereiche und vorhandene Einschränkungen.",

        sportprogramme:
            "Sportziel, aktuelles Niveau, verfügbare Tage und Zeit, bevorzugte Sportarten, vorhandene Ausrüstung und gewünschte Mischung der Trainingsarten.",

        fortschritt:
            "Trainingsziel, bisheriger Trainingsplan, Trainingsdaten über einen sinnvollen Zeitraum, Leistungswerte, subjektives Belastungsempfinden und beobachtete Veränderungen.",

        ziele:
            "Gewünschtes Sportziel, aktueller Leistungsstand, verfügbare Zeit, gewünschter Zeitraum, bevorzugte Sportart und mögliche Zwischenziele.",

        regeneration:
            "Aktueller Trainingsumfang, Sportarten, Wochenrhythmus, Schlaf- und Erholungszeiten, subjektive Belastung und gewünschte Regenerationsroutine.",

        routinen:
            "Gewünschte Sport- oder Bewegungsroutine, aktueller Alltag, verfügbare Zeitfenster, bevorzugte Aktivitäten, typische Hindernisse und vorhandene Ausrüstung.",

        fitness:
            "Aktueller Fitnessstand, Ziele, verfügbare Trainingstage, Zeit pro Einheit, bevorzugte Trainingsarten, vorhandene Ausrüstung und relevante Einschränkungen."
    },


    // ==================================================
    // KREATIVITÄT & IDEENFINDUNG
    // ==================================================

    kreativitaet: {

        brainstorming:
            "Thema, Ziel, vorhandene Ideen, Zielgruppe, wichtige Einschränkungen und wie realistisch oder ungewöhnlich die Vorschläge sein dürfen.",

        ideen:
            "Thema oder Problem, gewünschtes Ergebnis, Zielgruppe, vorhandene Ansätze, Einschränkungen und gewünschter Grad an Originalität.",

        verbessern:
            "Bestehende Idee, ursprüngliches Ziel, Zielgruppe, bekannte Stärken und Schwächen, Einschränkungen und Punkte, die unbedingt erhalten bleiben sollen.",

        bewerten:
            "Zu bewertende Ideen, Ziel, Zielgruppe, Bewertungskriterien, technische oder finanzielle Grenzen und gewünschte Gewichtung der Kriterien.",

        problemloesung:
            "Konkretes Problem, gewünschter Sollzustand, bisherige Lösungsversuche, verfügbare Ressourcen, wichtige Grenzen und wie experimentell die Lösungen sein dürfen.",

        konzepte:
            "Thema oder Ausgangsidee, Zweck, Zielgruppe, gewünschte Wirkung, verfügbare Ressourcen, Einschränkungen und gewünschter Detaillierungsgrad.",

        produktideen:
            "Zielgruppe, konkretes Nutzerproblem, vorhandene Produktideen, technische Möglichkeiten, Budget, gewünschter Preisrahmen und gewünschter Innovationsgrad.",

        appIdeen:
            "Zielgruppe, Nutzerproblem, Plattform, vorhandene Ideen, technische Möglichkeiten, gewünschter Funktionsumfang und wie klein das erste MVP sein soll.",

        geschaeftsideen:
            "Eigene Fähigkeiten, Zielgruppe, mögliches Kundenproblem, verfügbare Zeit, Startbudget, gewünschtes Geschäftsmodell und wie ungewöhnlich die Ideen sein dürfen.",

        projektnamen:
            "Projektzweck, Thema, Zielgruppe, gewünschte Wirkung, Sprache, bevorzugter Stil, gewünschte Namenslänge und Begriffe, die vermieden werden sollen.",

        markennamen:
            "Produkt oder Unternehmen, Zielgruppe, Branche, Markenwerte, gewünschte Wirkung, Sprache, bevorzugter Stil und Begriffe, die vermieden werden sollen.",

        slogans:
            "Marke, Produkt oder Projekt, Zielgruppe, Kernbotschaft, gewünschte Tonalität, maximale Länge und Aussagen, die nicht gemacht werden dürfen.",

        geschichten:
            "Genre, Thema, Zielgruppe, gewünschte Länge, Figuren, Ort oder Welt, Grundidee, Tonalität und gewünschtes Ende oder offene Richtung.",

        storytelling:
            "Kernbotschaft, Zielgruppe, Medium, Ausgangssituation, gewünschte Wirkung, vorhandene Fakten oder Ereignisse und gewünschte Länge.",

        charaktere:
            "Art der Geschichte oder Welt, Rolle der Figur, Alter oder Hintergrund soweit relevant, Motivation, gewünschte Wirkung und bereits feststehende Merkmale.",

        weltenbau:
            "Genre, Grundidee der Welt, technischer oder magischer Entwicklungsstand, Geografie, Gesellschaft, wichtige Regeln und gewünschter Detailgrad.",

        schreibideen:
            "Gewünschtes Genre oder Thema, Zielgruppe, bevorzugte Stimmung, gewünschte Länge, vorhandene Ansätze und wie ungewöhnlich die Ideen sein dürfen.",

        bildideen:
            "Motiv oder Thema, gewünschte Wirkung, Bildstil, Format, verfügbare Technik oder Tools und wie realistisch oder experimentell die Ideen sein dürfen.",

        fotoideen:
            "Motiv oder Thema, Ort, verfügbare Ausrüstung, Lichtbedingungen, gewünschter Stil, Zeitaufwand und bisher ausprobierte Ideen.",

        videoideen:
            "Plattform, Zielgruppe, Thema, gewünschte Videolänge, vorhandene Technik, Produktionsaufwand und gewünschter Stil.",

        contentideen:
            "Thema oder Marke, Zielgruppe, Plattformen, gewünschte Ziele, vorhandene Inhalte, Veröffentlichungsrhythmus und gewünschte Content-Formate.",

        geschenkideen:
            "Person, Anlass, ungefähres Alter, Interessen, Beziehung zur Person, Budget, gewünschter Aufwand und Dinge, die nicht infrage kommen.",

        eventideen:
            "Anlass, Zielgruppe oder Gäste, Ort, Budget, verfügbare Zeit, gewünschte Stimmung und wie außergewöhnlich das Event sein darf.",

        hobbyideen:
            "Interessen, verfügbare Zeit, Budget, vorhandene Fähigkeiten oder Ausrüstung und ob das Hobby eher kreativ, sportlich, technisch oder sozial sein soll.",

        designideen:
            "Produkt oder Medium, Zweck, Zielgruppe, vorhandenes Design oder Branding, gewünschte Wirkung, technische Vorgaben und gewünschte Stilrichtungen.",

        ungewoehnlich:
            "Problem oder Ziel, bisherige Standardlösungen, verfügbare Ressourcen, Grenzen, Risiken und wie weit sich die Ideen von konventionellen Ansätzen entfernen dürfen.",

        perspektivwechsel:
            "Problem oder Idee, bisherige Sichtweise, beteiligte Personen oder Zielgruppen, wichtige Annahmen und welche Perspektiven bisher wenig berücksichtigt wurden.",

        kombinieren:
            "Vorhandene Ideen oder Konzepte, jeweilige Stärken und Schwächen, gemeinsames Ziel, technische oder kreative Grenzen und gewünschter Grad der Kombination.",

        inspiration:
            "Thema, gewünschte Wirkung, vorhandene Ideen, Interessen, bevorzugte Stilrichtungen, verfügbare Ressourcen und Bereiche, aus denen Inspiration kommen darf.",

        sparring:
            "Bestehende Idee oder Problemstellung, Ziel, bisherige Überlegungen, offene Fragen, Einschränkungen und ob eher kritisches Feedback, neue Ideen oder beides gewünscht ist."
    }

};


// ======================================================
// TEMPORÄRE KOMPATIBILITÄT
// ======================================================

const kategorien =
    hauptkategorien.bild.unterkategorien;