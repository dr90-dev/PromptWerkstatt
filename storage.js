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
            "promptWerkstattNavigation",

        aktiveBereicheV2:
            "promptwerkstatt-aktive-bereiche-v2",

        aktiverBereichV2:
            "promptwerkstatt-aktiver-bereich-v2",

        navigationV2:
            "promptwerkstatt-navigation-v2"

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
    // V2-BEREICHSAUSWAHL
    // ==================================================

    aktiveBereicheV2Laden() {

        try {
            const daten =
                localStorage.getItem(
                    this.keys.aktiveBereicheV2
                );


            if (!daten) {
                return null;
            }


            const bereiche =
                JSON.parse(daten);


            return Array.isArray(bereiche)
                ? bereiche
                : null;

        } catch (fehler) {
            console.error(
                "Aktive V2-Bereiche konnten nicht geladen werden:",
                fehler
            );


            return null;
        }
    },


    aktiveBereicheV2Speichern(bereichIds) {

        if (!Array.isArray(bereichIds)) {
            return false;
        }


        try {
            localStorage.setItem(
                this.keys.aktiveBereicheV2,
                JSON.stringify(bereichIds)
            );


            return true;

        } catch (fehler) {
            console.error(
                "Aktive V2-Bereiche konnten nicht gespeichert werden:",
                fehler
            );


            return false;
        }
    },


    aktiverBereichV2Laden() {

        try {
            const bereichId =
                localStorage.getItem(
                    this.keys.aktiverBereichV2
                );


            return typeof bereichId === "string" &&
                bereichId !== ""

                ? bereichId

                : null;

        } catch (fehler) {
            console.error(
                "Der ausgewählte V2-Bereich konnte nicht geladen werden:",
                fehler
            );


            return null;
        }
    },


    aktiverBereichV2Speichern(bereichId) {

        if (
            typeof bereichId !== "string" ||
            bereichId === ""
        ) {
            return false;
        }


        try {
            localStorage.setItem(
                this.keys.aktiverBereichV2,
                bereichId
            );


            return true;

        } catch (fehler) {
            console.error(
                "Der ausgewählte V2-Bereich konnte nicht gespeichert werden:",
                fehler
            );


            return false;
        }
    },


    // ==================================================
    // V2-KATEGORIENAVIGATION
    // ==================================================

    navigationV2Standard() {
        return {
            version: 2,
            hauptkategorienNachBereich: {},
            unterkategorienNachPfad: {},
            aktiveAuswahl: {
                bereichId: null,
                hauptkategorieId: null,
                unterkategorieId: null
            }
        };
    },


    navigationV2Bereinigen(daten) {
        const standard =
            this.navigationV2Standard();


        if (
            !daten ||
            typeof daten !== "object" ||
            Array.isArray(daten)
        ) {
            return standard;
        }


        function stringZuStringMap(wert) {
            const ergebnis = {};


            if (
                !wert ||
                typeof wert !== "object" ||
                Array.isArray(wert)
            ) {
                return ergebnis;
            }


            Object.entries(wert).forEach(
                function ([schluessel, eintrag]) {
                    if (
                        typeof schluessel === "string" &&
                        schluessel !== "" &&
                        typeof eintrag === "string" &&
                        eintrag !== ""
                    ) {
                        ergebnis[schluessel] =
                            eintrag;
                    }
                }
            );


            return ergebnis;
        }


        function idOderNull(wert) {
            return typeof wert === "string" &&
                wert !== ""

                ? wert

                : null;
        }


        const aktiveAuswahl =
            daten.aktiveAuswahl &&
            typeof daten.aktiveAuswahl === "object" &&
            !Array.isArray(daten.aktiveAuswahl)

                ? daten.aktiveAuswahl

                : {};


        return {
            version: 2,
            hauptkategorienNachBereich:
                stringZuStringMap(
                    daten.hauptkategorienNachBereich
                ),
            unterkategorienNachPfad:
                stringZuStringMap(
                    daten.unterkategorienNachPfad
                ),
            aktiveAuswahl: {
                bereichId:
                    idOderNull(
                        aktiveAuswahl.bereichId
                    ),
                hauptkategorieId:
                    idOderNull(
                        aktiveAuswahl.hauptkategorieId
                    ),
                unterkategorieId:
                    idOderNull(
                        aktiveAuswahl.unterkategorieId
                    )
            }
        };
    },


    navigationV2Laden() {
        try {
            const daten =
                localStorage.getItem(
                    this.keys.navigationV2
                );


            return daten

                ? this.navigationV2Bereinigen(
                    JSON.parse(daten)
                )

                : this.navigationV2Standard();

        } catch (fehler) {
            console.error(
                "Die V2-Kategorienavigation konnte nicht geladen werden:",
                fehler
            );


            return this.navigationV2Standard();
        }
    },


    navigationV2Speichern(navigationV2) {
        try {
            localStorage.setItem(
                this.keys.navigationV2,
                JSON.stringify(
                    this.navigationV2Bereinigen(
                        navigationV2
                    )
                )
            );


            return true;

        } catch (fehler) {
            console.error(
                "Die V2-Kategorienavigation konnte nicht gespeichert werden:",
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
                this.navigationLaden(),

            navigationV2:
                this.navigationV2Laden(),

            aktiveBereicheV2:
                this.aktiveBereicheV2Laden(),

            aktiverBereichV2:
                this.aktiverBereichV2Laden()

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


        if (
            importDaten.navigationV2 &&
            typeof importDaten.navigationV2 ===
                "object"
        ) {
            this.navigationV2Speichern(
                importDaten.navigationV2
            );
        }


        if (
            Array.isArray(
                importDaten.aktiveBereicheV2
            )
        ) {
            this.aktiveBereicheV2Speichern(
                importDaten.aktiveBereicheV2
            );
        }


        if (
            typeof importDaten.aktiverBereichV2 ===
                "string" &&
            importDaten.aktiverBereichV2 !== ""
        ) {
            this.aktiverBereichV2Speichern(
                importDaten.aktiverBereichV2
            );
        }


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


        localStorage.removeItem(
            this.keys.aktiveBereicheV2
        );


        localStorage.removeItem(
            this.keys.aktiverBereichV2
        );


        localStorage.removeItem(
            this.keys.navigationV2
        );
    }

};


globalThis.StorageService = StorageService;
