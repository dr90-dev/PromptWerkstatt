// ======================================================
// PROMPTWERKSTATT
// SPEICHER-VERWALTUNG
// ======================================================
//
// Diese Datei kümmert sich ausschließlich darum,
// Daten im Browser zu speichern und wieder zu laden.
//
// Dadurch muss script.js nicht direkt mit
// localStorage arbeiten.
// ======================================================

const StorageService = {


    // ==================================================
    // NAMEN DER SPEICHERPLÄTZE
    // ==================================================

    keys: {

        prompts:
            "promptWerkstattPrompts",

        ordner:
            "promptWerkstattOrdner",

        theme:
            "promptWerkstattTheme",

        navigation:
            "promptWerkstattNavigation"

    },


    // ==================================================
    // PROMPTS
    // ==================================================

    promptsLaden() {

        try {

            const daten =
                localStorage.getItem(
                    this.keys.prompts
                );


            if (!daten) {

                return [];
            }


            return JSON.parse(
                daten
            );

        } catch (fehler) {

            console.error(
                "Prompts konnten nicht geladen werden:",
                fehler
            );


            return [];
        }
    },


    promptsSpeichern(prompts) {

        try {

            localStorage.setItem(

                this.keys.prompts,

                JSON.stringify(
                    prompts
                )

            );


            return true;

        } catch (fehler) {

            console.error(
                "Prompts konnten nicht gespeichert werden:",
                fehler
            );


            return false;
        }
    },


    // ==================================================
    // ORDNER
    // ==================================================

    ordnerLaden() {

        try {

            const daten =
                localStorage.getItem(
                    this.keys.ordner
                );


            if (!daten) {

                return [];
            }


            return JSON.parse(
                daten
            );

        } catch (fehler) {

            console.error(
                "Ordner konnten nicht geladen werden:",
                fehler
            );


            return [];
        }
    },


    ordnerSpeichern(ordner) {

        try {

            localStorage.setItem(

                this.keys.ordner,

                JSON.stringify(
                    ordner
                )

            );


            return true;

        } catch (fehler) {

            console.error(
                "Ordner konnten nicht gespeichert werden:",
                fehler
            );


            return false;
        }
    },


    // ==================================================
    // HELL- / DUNKELMODUS
    // ==================================================

    themeLaden() {

        const theme =
            localStorage.getItem(
                this.keys.theme
            );


        if (
            theme === "dark" ||
            theme === "light"
        ) {

            return theme;
        }


        return "light";
    },


    themeSpeichern(theme) {

        try {

            localStorage.setItem(
                this.keys.theme,
                theme
            );


            return true;

        } catch (fehler) {

            console.error(
                "Theme konnte nicht gespeichert werden:",
                fehler
            );


            return false;
        }
    },


    // ==================================================
    // NAVIGATION
    // ==================================================
    //
    // Hier speichern wir:
    //
    // 1. Favorisierte Hauptkategorien
    // 2. Eigene Reihenfolge der Hauptkategorien
    // 3. Favorisierte Unterkategorien
    // 4. Eigene Reihenfolge der Unterkategorien
    //
    // Beispiel:
    //
    // unterFavoriten: {
    //     bild: ["fotografie", "bildbearbeitung"],
    //     videoAudio: ["videoschnitt"]
    // }
    //
    // ==================================================

navigationStandard() {

    return {

        hauptFavoriten:
            [],

        hauptReihenfolge:
            [],

        unterFavoriten:
            {},

        unterReihenfolge:
            {},

        aktiveHauptkategorie:
            null,

        aktiveUnterkategorien:
            {}

    };
},


navigationLaden() {

    try {

        const daten =
            localStorage.getItem(
                this.keys.navigation
            );


        if (!daten) {

            return this.navigationStandard();
        }


        const gespeichert =
            JSON.parse(
                daten
            );


        const standard =
            this.navigationStandard();


        return {

            hauptFavoriten:
                Array.isArray(
                    gespeichert.hauptFavoriten
                )
                    ? gespeichert.hauptFavoriten
                    : standard.hauptFavoriten,

            hauptReihenfolge:
                Array.isArray(
                    gespeichert.hauptReihenfolge
                )
                    ? gespeichert.hauptReihenfolge
                    : standard.hauptReihenfolge,

            unterFavoriten:
                (
                    gespeichert.unterFavoriten &&
                    typeof gespeichert.unterFavoriten ===
                        "object" &&
                    !Array.isArray(
                        gespeichert.unterFavoriten
                    )
                )
                    ? gespeichert.unterFavoriten
                    : standard.unterFavoriten,

            unterReihenfolge:
                (
                    gespeichert.unterReihenfolge &&
                    typeof gespeichert.unterReihenfolge ===
                        "object" &&
                    !Array.isArray(
                        gespeichert.unterReihenfolge
                    )
                )
                    ? gespeichert.unterReihenfolge
                    : standard.unterReihenfolge,

            aktiveHauptkategorie:
                (
                    typeof gespeichert.aktiveHauptkategorie ===
                    "string"
                )
                    ? gespeichert.aktiveHauptkategorie
                    : standard.aktiveHauptkategorie,

            aktiveUnterkategorien:
                (
                    gespeichert.aktiveUnterkategorien &&
                    typeof gespeichert.aktiveUnterkategorien ===
                        "object" &&
                    !Array.isArray(
                        gespeichert.aktiveUnterkategorien
                    )
                )
                    ? gespeichert.aktiveUnterkategorien
                    : standard.aktiveUnterkategorien

        };

    } catch (fehler) {

        console.error(
            "Navigationseinstellungen konnten nicht geladen werden:",
            fehler
        );


        return this.navigationStandard();
    }
},

    navigationSpeichern(navigation) {

        try {

            localStorage.setItem(

                this.keys.navigation,

                JSON.stringify(
                    navigation
                )

            );


            return true;

        } catch (fehler) {

            console.error(
                "Navigationseinstellungen konnten nicht gespeichert werden:",
                fehler
            );


            return false;
        }
    },


    // ==================================================
    // KOMPLETTE DATEN SICHERN
    // ==================================================
    //
    // Das brauchen wir später für Export / Backup.
    //
    // Die Navigation gehört jetzt ebenfalls zum Backup.
    // ==================================================

    alleDatenLaden() {

        return {

            version:
                2,

            exportiertAm:
                new Date()
                    .toISOString(),

            prompts:
                this.promptsLaden(),

            ordner:
                this.ordnerLaden(),

            theme:
                this.themeLaden(),

            navigation:
                this.navigationLaden()

        };
    },

    // ==================================================
// KOMPLETTE DATEN WIEDERHERSTELLEN
// ==================================================
//
// Diese Funktion übernimmt ein zuvor exportiertes
// PromptWerkstatt-Backup und schreibt die enthaltenen
// Daten wieder in den Browser-Speicher.
//
// Vor dem Speichern werden die wichtigsten Strukturen
// geprüft, damit eine falsche Datei nicht einfach
// vorhandene Daten überschreibt.
// ==================================================

alleDatenSpeichern(importDaten) {

    try {

        if (
            !importDaten ||
            typeof importDaten !==
                "object"
        ) {

            throw new Error(
                "Ungültige Backup-Datei."
            );
        }


        if (
            !Array.isArray(
                importDaten.prompts
            )
        ) {

            throw new Error(
                "Das Backup enthält keine gültigen Prompts."
            );
        }


        if (
            !Array.isArray(
                importDaten.ordner
            )
        ) {

            throw new Error(
                "Das Backup enthält keine gültigen Ordner."
            );
        }


        if (
            !importDaten.navigation ||
            typeof importDaten.navigation !==
                "object"
        ) {

            throw new Error(
                "Das Backup enthält keine gültigen Navigationseinstellungen."
            );
        }


        const theme =

            importDaten.theme ===
                "dark"

                ? "dark"

                : "light";


        localStorage.setItem(

            this.keys.prompts,

            JSON.stringify(
                importDaten.prompts
            )

        );


        localStorage.setItem(

            this.keys.ordner,

            JSON.stringify(
                importDaten.ordner
            )

        );


        localStorage.setItem(

            this.keys.navigation,

            JSON.stringify(
                importDaten.navigation
            )

        );


        localStorage.setItem(

            this.keys.theme,

            theme

        );


        return {

            erfolgreich:
                true,

            meldung:
                "Backup wurde erfolgreich wiederhergestellt."

        };

    } catch (fehler) {

        console.error(
            "Backup konnte nicht importiert werden:",
            fehler
        );


        return {

            erfolgreich:
                false,

            meldung:
                fehler.message ||
                "Backup konnte nicht importiert werden."

        };
    }
},

    // ==================================================
    // ALLE APP-DATEN LÖSCHEN
    // ==================================================
    //
    // Diese Funktion verwenden wir momentan noch NICHT.
    //
    // Später kann sie beispielsweise für
    // "App vollständig zurücksetzen" verwendet werden.
    // ==================================================

    allesLoeschen() {

        localStorage.removeItem(
            this.keys.prompts
        );


        localStorage.removeItem(
            this.keys.ordner
        );


        localStorage.removeItem(
            this.keys.theme
        );


        localStorage.removeItem(
            this.keys.navigation
        );
    }

};