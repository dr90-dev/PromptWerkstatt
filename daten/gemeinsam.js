(function (global) {
    "use strict";

    if (global.PromptWerkstattDatenV2) {
        return;
    }


    const LISTEN_TYPEN = [
        "rollen",
        "anforderungen",
        "regeln",
        "ausgabeformate",
        "ausgabeAls"
    ];


    function istObjekt(wert) {
        return (
            wert !== null &&
            typeof wert === "object" &&
            !Array.isArray(wert)
        );
    }


    function tiefEinfrieren(wert) {

        if (
            !wert ||
            typeof wert !== "object" ||
            Object.isFrozen(wert)
        ) {
            return wert;
        }


        Object.values(wert).forEach(
            tiefEinfrieren
        );


        return Object.freeze(wert);
    }


    function leereListen() {
        return {
            rollen: [],
            anforderungen: [],
            regeln: [],
            ausgabeformate: [],
            ausgabeAls: []
        };
    }


    function quelleBeschreiben(
        quelle,
        index
    ) {
        return {
            ebene:
                typeof quelle.ebene === "string"
                    ? quelle.ebene
                    : "unbekannt",
            id:
                typeof quelle.id === "string"
                    ? quelle.id
                    : `quelle-${index + 1}`,
            pfad:
                typeof quelle.pfad === "string"
                    ? quelle.pfad
                    : ""
        };
    }


    function empfehlungenZusammenfuehren(
        quellen = []
    ) {
        const ergebnis =
            leereListen();

        ergebnis.herkunft = {};


        const bekannteEintraege = {};


        LISTEN_TYPEN.forEach(
            function (typ) {
                ergebnis.herkunft[typ] = [];
                bekannteEintraege[typ] =
                    new Map();
            }
        );


        const sichereQuellen =
            Array.isArray(quellen)
                ? quellen
                : [];


        sichereQuellen.forEach(
            function (quelle, index) {

                if (!istObjekt(quelle)) {
                    return;
                }


                const daten =
                    istObjekt(quelle.daten)
                        ? quelle.daten
                        : {};

                const beschreibung =
                    quelleBeschreiben(
                        quelle,
                        index
                    );


                LISTEN_TYPEN.forEach(
                    function (typ) {
                        const eintraege =
                            Array.isArray(daten[typ])
                                ? daten[typ]
                                : [];


                        eintraege.forEach(
                            function (eintrag) {

                                if (
                                    typeof eintrag !== "string" ||
                                    eintrag.trim() === ""
                                ) {
                                    return;
                                }


                                const vorhandeneHerkunft =
                                    bekannteEintraege[typ]
                                        .get(eintrag);


                                if (vorhandeneHerkunft) {
                                    vorhandeneHerkunft.quellen.push({
                                        ...beschreibung
                                    });

                                    return;
                                }


                                ergebnis[typ].push(
                                    eintrag
                                );


                                const herkunft = {
                                    wert: eintrag,
                                    quellen: [
                                        {
                                            ...beschreibung
                                        }
                                    ]
                                };


                                ergebnis.herkunft[typ].push(
                                    herkunft
                                );

                                bekannteEintraege[typ].set(
                                    eintrag,
                                    herkunft
                                );
                            }
                        );
                    }
                );
            }
        );


        return ergebnis;
    }


    const registry = {
        version: 1,
        listenTypen:
            Object.freeze([
                ...LISTEN_TYPEN
            ]),
        globaleGrundlagen:
            tiefEinfrieren(
                leereListen()
            ),
        bereichsDefinitionen:
            Object.freeze([]),
        bereiche: {},
        querschnitt: {},


        globaleGrundlagenSetzen(daten) {
            this.globaleGrundlagen =
                tiefEinfrieren({
                    ...leereListen(),
                    ...(
                        istObjekt(daten)
                            ? daten
                            : {}
                    )
                });
        },


        bereichsDefinitionenSetzen(
            definitionen
        ) {
            this.bereichsDefinitionen =
                tiefEinfrieren(
                    Array.isArray(definitionen)
                        ? [
                            ...definitionen
                        ]
                        : []
                );
        },


        bereichRegistrieren(bereich) {

            if (
                !istObjekt(bereich) ||
                typeof bereich.id !== "string" ||
                bereich.id === ""
            ) {
                throw new Error(
                    "Ein Bereich benötigt eine stabile ID."
                );
            }


            if (this.bereiche[bereich.id]) {
                throw new Error(
                    `Bereich doppelt registriert: ${bereich.id}`
                );
            }


            this.bereiche[bereich.id] =
                tiefEinfrieren(bereich);
        },


        querschnittRegistrieren(
            id,
            daten
        ) {

            if (
                typeof id !== "string" ||
                id === "" ||
                !istObjekt(daten)
            ) {
                throw new Error(
                    "Ungültige Querschnittsdaten."
                );
            }


            if (this.querschnitt[id]) {
                throw new Error(
                    `Querschnitt doppelt registriert: ${id}`
                );
            }


            this.querschnitt[id] =
                tiefEinfrieren(daten);
        },


        pfadAufloesen(
            bereichId,
            hauptkategorieId,
            unterkategorieId
        ) {
            const bereich =
                this.bereiche[bereichId] ||
                null;

            const hauptkategorie =
                bereich &&
                Array.isArray(
                    bereich.hauptkategorien
                )

                    ? bereich.hauptkategorien.find(
                        function (eintrag) {
                            return (
                                eintrag.id ===
                                hauptkategorieId
                            );
                        }
                    ) || null

                    : null;

            const unterkategorie =
                hauptkategorie &&
                Array.isArray(
                    hauptkategorie.unterkategorien
                )

                    ? hauptkategorie.unterkategorien.find(
                        function (eintrag) {
                            return (
                                eintrag.id ===
                                unterkategorieId
                            );
                        }
                    ) || null

                    : null;


            return {
                bereich: bereich,
                hauptkategorie: hauptkategorie,
                unterkategorie: unterkategorie
            };
        },


        empfehlungenZusammenfuehren:
            empfehlungenZusammenfuehren,


        empfehlungenFuerPfad(
            bereichId,
            hauptkategorieId,
            unterkategorieId,
            parameterQuellen = []
        ) {
            const pfad =
                this.pfadAufloesen(
                    bereichId,
                    hauptkategorieId,
                    unterkategorieId
                );


            const quellen = [
                {
                    ebene: "global",
                    id: "gemeinsam",
                    pfad: "global",
                    daten:
                        this.globaleGrundlagen
                }
            ];


            if (pfad.bereich) {
                quellen.push({
                    ebene: "bereich",
                    id: pfad.bereich.id,
                    pfad: pfad.bereich.id,
                    daten:
                        pfad.bereich.grundlagen
                });
            }


            if (pfad.hauptkategorie) {
                quellen.push({
                    ebene: "hauptkategorie",
                    id: pfad.hauptkategorie.id,
                    pfad:
                        `${bereichId}/${pfad.hauptkategorie.id}`,
                    daten:
                        pfad.hauptkategorie.grundlagen
                });
            }


            if (pfad.unterkategorie) {
                quellen.push({
                    ebene: "unterkategorie",
                    id: pfad.unterkategorie.id,
                    pfad:
                        `${bereichId}/${hauptkategorieId}/${pfad.unterkategorie.id}`,
                    daten:
                        pfad.unterkategorie.empfehlungen
                });
            }


            if (Array.isArray(parameterQuellen)) {
                quellen.push(
                    ...parameterQuellen
                );
            }


            return empfehlungenZusammenfuehren(
                quellen
            );
        }
    };


    global.PromptWerkstattDatenV2 =
        registry;
})(globalThis);
