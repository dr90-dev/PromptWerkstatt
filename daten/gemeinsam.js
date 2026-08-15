(function (global) {
    "use strict";

    if (global.PromptWerkstattDatenV2) {
        return;
    }


    const LISTEN_TYPEN = [
        "rollen",
        "ziele",
        "kontextHinweise",
        "anforderungen",
        "besondersEmpfohleneAnforderungen",
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
            ziele: [],
            kontextHinweise: [],
            anforderungen: [],
            besondersEmpfohleneAnforderungen: [],
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


                                const bereinigterEintrag =
                                    eintrag.trim();


                                const vorhandeneHerkunft =
                                    bekannteEintraege[typ]
                                        .get(
                                            bereinigterEintrag
                                        );


                                if (vorhandeneHerkunft) {
                                    const quelleSchonErfasst =
                                        vorhandeneHerkunft.quellen
                                            .some(
                                                function (quelle) {
                                                    return (
                                                        quelle.ebene === beschreibung.ebene &&
                                                        quelle.id === beschreibung.id &&
                                                        quelle.pfad === beschreibung.pfad
                                                    );
                                                }
                                            );


                                    if (!quelleSchonErfasst) {
                                        vorhandeneHerkunft.quellen.push({
                                            ...beschreibung
                                        });
                                    }

                                    return;
                                }


                                ergebnis[typ].push(
                                    bereinigterEintrag
                                );


                                const herkunft = {
                                    wert: bereinigterEintrag,
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
                                    bereinigterEintrag,
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


    function profilQuellenHinzufuegen(
        registry,
        quellen,
        profilIds,
        verwendeteProfilIds
    ) {
        if (!Array.isArray(profilIds)) {
            return;
        }


        profilIds.forEach(
            function (profilId) {
                if (
                    typeof profilId !== "string" ||
                    profilId === "" ||
                    verwendeteProfilIds.has(profilId)
                ) {
                    return;
                }


                const profil =
                    registry.profilHolen(
                        profilId
                    );


                if (!profil) {
                    return;
                }


                verwendeteProfilIds.add(
                    profilId
                );


                quellen.push({
                    ebene: "profil",
                    id: profil.id,
                    pfad: `profil/${profil.id}`,
                    daten: profil.empfehlungen
                });
            }
        );
    }


    function globalenRollenFallbackBegrenzen(
        ergebnis
    ) {
        const rollenHerkunft =
            ergebnis.herkunft.rollen;


        const spezifischeRollen =
            new Set(
                rollenHerkunft
                    .filter(
                        function (herkunft) {
                            return herkunft.quellen
                                .some(
                                    function (quelle) {
                                        return (
                                            quelle.ebene !==
                                            "global"
                                        );
                                    }
                                );
                        }
                    )
                    .map(
                        function (herkunft) {
                            return herkunft.wert;
                        }
                    )
            );


        if (spezifischeRollen.size === 0) {
            return;
        }


        ergebnis.rollen =
            ergebnis.rollen.filter(
                function (rolle) {
                    return spezifischeRollen
                        .has(
                            rolle
                        );
                }
            );


        ergebnis.herkunft.rollen =
            rollenHerkunft.filter(
                function (herkunft) {
                    return spezifischeRollen
                        .has(
                            herkunft.wert
                        );
                }
            );
    }


    const registry = {
        version: 2,
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
        profile: {},
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


        profilRegistrieren(profil) {

            if (
                !istObjekt(profil) ||
                typeof profil.id !== "string" ||
                profil.id === ""
            ) {
                throw new Error(
                    "Ein Profil benötigt eine stabile ID."
                );
            }


            if (this.profile[profil.id]) {
                throw new Error(
                    `Profil doppelt registriert: ${profil.id}`
                );
            }


            this.profile[profil.id] =
                tiefEinfrieren({
                    ...profil,
                    empfehlungen: {
                        ...leereListen(),
                        ...(
                            istObjekt(profil.empfehlungen)
                                ? profil.empfehlungen
                                : {}
                        )
                    }
                });
        },


        profilHolen(profilId) {
            return (
                typeof profilId === "string" &&
                this.profile[profilId]
            ) || null;
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


        bereichHolen(bereichId) {
            return (
                typeof bereichId === "string" &&
                this.bereiche[bereichId]
            ) || null;
        },


        hauptkategorienFuerBereich(bereichId) {
            const bereich =
                this.bereichHolen(bereichId);


            return bereich &&
                Array.isArray(bereich.hauptkategorien)

                ? bereich.hauptkategorien

                : [];
        },


        hauptkategorieHolen(
            bereichId,
            hauptkategorieId
        ) {
            return this
                .hauptkategorienFuerBereich(
                    bereichId
                )
                .find(
                    function (eintrag) {
                        return (
                            eintrag.id ===
                            hauptkategorieId
                        );
                    }
                ) || null;
        },


        unterkategorienFuerPfad(
            bereichId,
            hauptkategorieId
        ) {
            const hauptkategorie =
                this.hauptkategorieHolen(
                    bereichId,
                    hauptkategorieId
                );


            return hauptkategorie &&
                Array.isArray(
                    hauptkategorie.unterkategorien
                )

                ? hauptkategorie.unterkategorien

                : [];
        },


        unterkategorieHolen(
            bereichId,
            hauptkategorieId,
            unterkategorieId
        ) {
            return this
                .unterkategorienFuerPfad(
                    bereichId,
                    hauptkategorieId
                )
                .find(
                    function (eintrag) {
                        return (
                            eintrag.id ===
                            unterkategorieId
                        );
                    }
                ) || null;
        },


        pfadAufloesen(
            bereichId,
            hauptkategorieId,
            unterkategorieId
        ) {
            const bereich =
                this.bereichHolen(
                    bereichId
                );

            const hauptkategorie =
                this.hauptkategorieHolen(
                    bereichId,
                    hauptkategorieId
                );

            const unterkategorie =
                this.unterkategorieHolen(
                    bereichId,
                    hauptkategorieId,
                    unterkategorieId
                );


            return {
                bereich: bereich,
                hauptkategorie: hauptkategorie,
                unterkategorie: unterkategorie
            };
        },


        pfadValidieren(
            bereichId,
            hauptkategorieId,
            unterkategorieId
        ) {
            const pfad =
                this.pfadAufloesen(
                    bereichId,
                    hauptkategorieId,
                    unterkategorieId
                );

            const hauptkategorien =
                this.hauptkategorienFuerBereich(
                    bereichId
                );

            const unterkategorien =
                this.unterkategorienFuerPfad(
                    bereichId,
                    hauptkategorieId
                );

            const bereichGueltig =
                Boolean(pfad.bereich);

            const hauptkategorieGueltig =
                hauptkategorien.length === 0

                    ? !hauptkategorieId

                    : Boolean(
                        pfad.hauptkategorie
                    );

            const unterkategorieGueltig =
                !pfad.hauptkategorie ||
                unterkategorien.length === 0

                    ? !unterkategorieId

                    : Boolean(
                        pfad.unterkategorie
                    );


            return {
                ...pfad,
                bereichGueltig:
                    bereichGueltig,
                hauptkategorieGueltig:
                    hauptkategorieGueltig,
                unterkategorieGueltig:
                    unterkategorieGueltig,
                istGueltig:
                    bereichGueltig &&
                    hauptkategorieGueltig &&
                    unterkategorieGueltig
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

            const verwendeteProfilIds =
                new Set();


            if (pfad.bereich) {
                profilQuellenHinzufuegen(
                    this,
                    quellen,
                    pfad.bereich.profilIds,
                    verwendeteProfilIds
                );


                quellen.push({
                    ebene: "bereich",
                    id: pfad.bereich.id,
                    pfad: pfad.bereich.id,
                    daten:
                        pfad.bereich.grundlagen
                });
            }


            if (pfad.hauptkategorie) {
                profilQuellenHinzufuegen(
                    this,
                    quellen,
                    pfad.hauptkategorie.profilIds,
                    verwendeteProfilIds
                );


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
                profilQuellenHinzufuegen(
                    this,
                    quellen,
                    pfad.unterkategorie.profilIds,
                    verwendeteProfilIds
                );


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


            const ergebnis =
                empfehlungenZusammenfuehren(
                    quellen
                );


            globalenRollenFallbackBegrenzen(
                ergebnis
            );


            ergebnis.besondersEmpfohleneAnforderungen =
                ergebnis.besondersEmpfohleneAnforderungen
                    .filter(
                        function (anforderung) {
                            return ergebnis.anforderungen
                                .includes(
                                    anforderung
                                );
                        }
                    );


            ergebnis.herkunft.besondersEmpfohleneAnforderungen =
                ergebnis.herkunft.besondersEmpfohleneAnforderungen
                    .filter(
                        function (herkunft) {
                            return ergebnis
                                .besondersEmpfohleneAnforderungen
                                .includes(
                                    herkunft.wert
                                );
                        }
                    );


            return ergebnis;
        }
    };


    global.PromptWerkstattDatenV2 =
        registry;
})(globalThis);
