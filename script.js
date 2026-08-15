// ======================================================
// PROMPTWERKSTATT
// APP-LOGIK
// ======================================================


// ======================================================
// HTML-ELEMENTE
// ======================================================

const hauptkategorie =
    document.getElementById(
        "hauptkategorie"
    );

const unterkategorie =
    document.getElementById(
        "unterkategorie"
    );

const zielgruppenAuswahl =
    document.getElementById(
        "zielgruppenAuswahl"
    );

const zielgruppenZusammenfassung =
    document.getElementById(
        "zielgruppenZusammenfassung"
    );

const zielgruppenOptionen =
    document.getElementById(
        "zielgruppenOptionen"
    );

const eigeneZielgruppe =
    document.getElementById(
        "eigeneZielgruppe"
    );

const fachniveau =
    document.getElementById(
        "fachniveau"
    );

const tonalitaetenContainer =
    document.getElementById(
        "tonalitaetenContainer"
    );

const eigeneTonalitaet =
    document.getElementById(
        "eigeneTonalitaet"
    );

const bereichsparameterAbschnitt =
    document.getElementById(
        "bereichsparameterAbschnitt"
    );

const bereichsparameterContainer =
    document.getElementById(
        "bereichsparameterContainer"
    );

const bereichAuswahl =
    document.getElementById(
        "bereichAuswahl"
    );

const v2Daten =
    globalThis.PromptWerkstattDatenV2;

const hauptFavoritButton =
    document.getElementById(
        "hauptFavoritButton"
    );

const unterFavoritButton =
    document.getElementById(
        "unterFavoritButton"
    );


const hauptSortierungToggle =
    document.getElementById(
        "hauptSortierungToggle"
    );

const hauptSortierungPanel =
    document.getElementById(
        "hauptSortierungPanel"
    );

const hauptSortierungListe =
    document.getElementById(
        "hauptSortierungListe"
    );


const unterSortierungToggle =
    document.getElementById(
        "unterSortierungToggle"
    );

const unterSortierungPanel =
    document.getElementById(
        "unterSortierungPanel"
    );

const unterSortierungListe =
    document.getElementById(
        "unterSortierungListe"
    );


const rolle =
    document.getElementById(
        "rolle"
    );

const eigeneRolle =
    document.getElementById(
        "eigeneRolle"
    );

const zieleContainer =
    document.getElementById(
        "zieleContainer"
    );

const eigenesZiel =
    document.getElementById(
        "eigenesZiel"
    );

const kontext =
    document.getElementById(
        "kontext"
    );

const kontextHinweis =
    document.getElementById(
        "kontextHinweis"
    );

const anforderungenContainer =
    document.getElementById(
        "anforderungenContainer"
    );

const eigeneAnforderungen =
    document.getElementById(
        "eigeneAnforderungen"
    );

const regelPaketeContainer =
    document.getElementById(
        "regelPaketeContainer"
    );

const eigeneRegeln =
    document.getElementById(
        "eigeneRegeln"
    );

const ausgabeformateContainer =
    document.getElementById(
        "ausgabeformateContainer"
    );

const eigenesAusgabeformat =
    document.getElementById(
        "eigenesAusgabeformat"
    );

const ausgabeAls =
    document.getElementById(
        "ausgabeAls"
    );

const promptVorschau =
    document.getElementById(
        "promptVorschau"
    );

const kopieren =
    document.getElementById(
        "kopieren"
    );

const zuruecksetzen =
    document.getElementById(
        "zuruecksetzen"
    );

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const meldung =
    document.getElementById(
        "meldung"
    );

// ======================================================
// PROMPT-QUALITÄT
// ======================================================

const qualitaetsCheck =
    document.getElementById(
        "qualitaetsCheck"
    );

const qualitaetsText =
    document.getElementById(
        "qualitaetsText"
    );

const qualitaetsPunkte =
    document.getElementById(
        "qualitaetsPunkte"
    );

const qualitaetsBalken =
    document.getElementById(
        "qualitaetsBalken"
    );

const qualitaetsHinweise =
    document.getElementById(
        "qualitaetsHinweise"
    );

    // ======================================================
// BACKUP & WIEDERHERSTELLUNG
// ======================================================

const backupExport =
    document.getElementById(
        "backupExport"
    );

const backupImport =
    document.getElementById(
        "backupImport"
    );

const appZuruecksetzen =
    document.getElementById(
        "appZuruecksetzen"
    );

const backupDatei =
    document.getElementById(
        "backupDatei"
    );

const backupMeldung =
    document.getElementById(
        "backupMeldung"
    );

// ======================================================
// SPEICHERN
// ======================================================

const promptName =
    document.getElementById(
        "promptName"
    );

const speicherOrdner =
    document.getElementById(
        "speicherOrdner"
    );

const promptSpeichern =
    document.getElementById(
        "promptSpeichern"
    );

const bearbeitungAbbrechen =
    document.getElementById(
        "bearbeitungAbbrechen"
    );

const speicherMeldung =
    document.getElementById(
        "speicherMeldung"
    );


// ======================================================
// BIBLIOTHEK
// ======================================================

const suche =
    document.getElementById(
        "suche"
    );

const ordnerFilter =
    document.getElementById(
        "ordnerFilter"
    );

const favoritenFilter =
    document.getElementById(
        "favoritenFilter"
    );

const bibliothekListe =
    document.getElementById(
        "bibliothekListe"
    );

const anzahlPrompts =
    document.getElementById(
        "anzahlPrompts"
    );


// ======================================================
// ORDNER
// ======================================================

const ordnerName =
    document.getElementById(
        "ordnerName"
    );

const ordnerIcon =
    document.getElementById(
        "ordnerIcon"
    );

const ordnerFarbe =
    document.getElementById(
        "ordnerFarbe"
    );

const farbeWert =
    document.getElementById(
        "farbeWert"
    );

const ordnerSpeichern =
    document.getElementById(
        "ordnerSpeichern"
    );

const ordnerAbbrechen =
    document.getElementById(
        "ordnerAbbrechen"
    );

const ordnerListe =
    document.getElementById(
        "ordnerListe"
    );


// ======================================================
// APP-ZUSTAND
// ======================================================

let aktiveAnforderungen =
    [];

let aktiveZiele =
    [];

let aktiveRegelPakete =
    [];

let aktiveAusgabeformate =
    [];

let aktiveZielgruppenIds =
    [];

let aktiveTonalitaetenIds =
    [];

let bereichsparameterSitzung =
    {};

const BEREICHSPARAMETER_AUSWAHLTYPEN =
    Object.freeze({
        plattform: "mehrfach",
        ernaehrungsweise: "mehrfach",
        kochzeit: "einfach",
        trainingsniveau: "einfach",
        trainingsziel: "mehrfach",
        technologie: "mehrfach",
        entwicklungsphase: "einfach"
    });

let nurFavoriten =
    false;

let bearbeiteterPromptId =
    null;

let bearbeiteterOrdnerId =
    null;


let gespeichertePrompts =
    StorageService.promptsLaden();

let ordner =
    StorageService.ordnerLaden();

let navigation =
    StorageService.navigationLaden();

let navigationV2 =
    StorageService.navigationV2Laden();


// ======================================================
// ID ERZEUGEN
// ======================================================

function neueId() {

    if (
        typeof crypto !==
            "undefined" &&
        crypto.randomUUID
    ) {

        return crypto.randomUUID();
    }


    return (
        Date.now().toString() +
        Math.random()
            .toString(16)
            .slice(2)
    );
}


// ======================================================
// AKTUELLE HAUPTKATEGORIE HOLEN
// ======================================================

function aktuelleHauptkategorieHolen() {

    return v2Daten &&
        typeof v2Daten.hauptkategorieHolen ===
            "function"

        ? v2Daten.hauptkategorieHolen(
            bereichAuswahl.value,
            hauptkategorie.value
        )

        : null;
}


// ======================================================
// AKTUELLE UNTERKATEGORIE HOLEN
// ======================================================

function aktuelleUnterkategorieHolen() {
    return v2Daten &&
        typeof v2Daten.unterkategorieHolen ===
            "function"

        ? v2Daten.unterkategorieHolen(
            bereichAuswahl.value,
            hauptkategorie.value,
            unterkategorie.value
        )

        : null;
}


function aktuellerBereichHolen() {
    return v2Daten &&
        typeof v2Daten.bereichHolen ===
            "function"

        ? v2Daten.bereichHolen(
            bereichAuswahl.value
        )

        : null;
}


function aktuelleBereichsparameterHolen() {
    const bereich =
        aktuellerBereichHolen();


    return bereich &&
        Array.isArray(
            bereich.parameter
        )

        ? bereich.parameter.filter(
            function (parameter) {
                return parameter &&
                    parameter.typ ===
                        "select" &&
                    typeof parameter.id ===
                        "string" &&
                    typeof parameter.name ===
                        "string" &&
                    Array.isArray(
                        parameter.optionen
                    );
            }
        )

        : [];
}


function bereichsparameterAuswahltypHolen(
    parameter
) {
    return BEREICHSPARAMETER_AUSWAHLTYPEN[
        parameter.id
    ] || "einfach";
}


function bereichsparameterStatusHolen(
    bereichId,
    parameterId
) {
    if (!bereichsparameterSitzung[bereichId]) {
        bereichsparameterSitzung[bereichId] =
            {};
    }


    if (
        !bereichsparameterSitzung[bereichId][
            parameterId
        ]
    ) {
        bereichsparameterSitzung[bereichId][
            parameterId
        ] = {
            auswahlIds: [],
            eigeneAngabe: ""
        };
    }


    return bereichsparameterSitzung[
        bereichId
    ][parameterId];
}


function bereichsparameterIdsBereinigen(
    parameter,
    ids
) {
    const gewuenschteIds =
        new Set(
            (
                Array.isArray(ids)

                    ? ids

                    : []
            ).filter(
                function (id) {
                    return typeof id ===
                        "string" &&
                        id !==
                            "keine-vorgabe";
                }
            )
        );

    const bereinigteIds = [
        ...parameter.optionen
            .filter(
                function (option) {
                    return option &&
                        option.id !==
                            "keine-vorgabe" &&
                        gewuenschteIds.has(
                            option.id
                        );
                }
            )
            .map(
                function (option) {
                    return option.id;
                }
            )
    ];


    return bereichsparameterAuswahltypHolen(
        parameter
    ) === "mehrfach"

        ? bereinigteIds

        : bereinigteIds.slice(
            0,
            1
        );
}


function aktiveBereichsparameterEintraegeHolen() {
    const bereichId =
        bereichAuswahl.value;


    return aktuelleBereichsparameterHolen()
        .map(
            function (parameter) {
                const status =
                    bereichsparameterStatusHolen(
                        bereichId,
                        parameter.id
                    );


                status.auswahlIds =
                    bereichsparameterIdsBereinigen(
                        parameter,
                        status.auswahlIds
                    );

                status.eigeneAngabe =
                    parameter.eigeneAngabeErlaubt ===
                        true &&
                    typeof status.eigeneAngabe ===
                        "string"

                        ? status.eigeneAngabe

                        : "";


                return {
                    parameter: parameter,
                    status: status
                };
            }
        );
}


function empfehlungspaketHolen(
    option
) {
    const empfehlungen =
        option &&
        (
            option.empfehlungen ||
            option.grundlagen
        );

    const hatEmpfehlungen =
        empfehlungen &&
        typeof empfehlungen ===
            "object" &&
        !Array.isArray(
            empfehlungen
        ) &&
        Object.values(
            empfehlungen
        ).some(
            function (werte) {
                return Array.isArray(
                    werte
                ) &&
                    werte.length >
                        0;
            }
        );


    return hatEmpfehlungen

        ? empfehlungen

        : null;
}


function querschnittDatenHolen(
    id
) {
    return v2Daten &&
        v2Daten.querschnitt &&
        v2Daten.querschnitt[id]

        ? v2Daten.querschnitt[id]

        : null;
}


function querschnittOptionenHolen(
    id
) {
    const daten =
        querschnittDatenHolen(
            id
        );


    if (!daten) {
        return [];
    }


    if (Array.isArray(daten.gruppen)) {
        return daten.gruppen.flatMap(
            function (gruppe) {
                return Array.isArray(
                    gruppe.optionen
                )

                    ? gruppe.optionen

                    : [];
            }
        );
    }


    return Array.isArray(daten.optionen)

        ? daten.optionen

        : [];
}


function querschnittOptionHolen(
    querschnittId,
    optionId
) {
    return querschnittOptionenHolen(
        querschnittId
    ).find(
        function (option) {
            return option.id ===
                optionId;
        }
    ) || null;
}


function querschnittIdsBereinigen(
    querschnittId,
    ids
) {
    const erlaubteIds =
        new Set(
            querschnittOptionenHolen(
                querschnittId
            ).map(
                function (option) {
                    return option.id;
                }
            )
        );


    return [
        ...new Set(
            (
                Array.isArray(ids)

                    ? ids

                    : []
            ).filter(
                function (id) {
                    return typeof id ===
                        "string" &&
                        id !==
                            "keine-vorgabe" &&
                        erlaubteIds.has(
                            id
                        );
                }
            )
        )
    ];
}


function bereichsparameterQuellenHolen() {
    const bereichId =
        bereichAuswahl.value;

    const quellen =
        [];


    aktiveBereichsparameterEintraegeHolen()
        .forEach(
            function (eintrag) {
                const aktiveIds =
                    new Set(
                        eintrag.status.auswahlIds
                    );


                eintrag.parameter.optionen
                    .forEach(
                        function (option) {
                            if (
                                !aktiveIds.has(
                                    option.id
                                )
                            ) {
                                return;
                            }


                            const empfehlungen =
                                empfehlungspaketHolen(
                                    option
                                );


                            if (!empfehlungen) {
                                return;
                            }


                            quellen.push({
                                ebene:
                                    "parameter",
                                id:
                                    `${bereichId}:${eintrag.parameter.id}:${option.id}`,
                                pfad:
                                    `${bereichId}/parameter/${eintrag.parameter.id}/${option.id}`,
                                daten:
                                    empfehlungen
                            });
                        }
                    );
            }
        );


    return quellen;
}


function querschnittParameterQuellenHolen() {
    const auswahl = [
        {
            querschnittId:
                "zielgruppen",
            optionIds:
                aktiveZielgruppenIds
        },
        {
            querschnittId:
                "fachniveaus",
            optionIds:
                fachniveau.value &&
                fachniveau.value !==
                    "keine-vorgabe"

                    ? [fachniveau.value]

                    : []
        },
        {
            querschnittId:
                "tonalitaeten",
            optionIds:
                aktiveTonalitaetenIds
        }
    ];

    const quellen =
        [];


    auswahl.forEach(
        function (eintrag) {
            const aktiveIds =
                new Set(
                    querschnittIdsBereinigen(
                        eintrag.querschnittId,
                        eintrag.optionIds
                    )
                );


            querschnittOptionenHolen(
                eintrag.querschnittId
            ).forEach(
                function (option) {
                    if (
                        !aktiveIds.has(
                            option.id
                        )
                    ) {
                        return;
                    }


                    const empfehlungen =
                        empfehlungspaketHolen(
                            option
                        );


                    if (!empfehlungen) {
                        return;
                    }


                    quellen.push({
                        ebene:
                            "parameter",
                        id:
                            `${eintrag.querschnittId}:${option.id}`,
                        pfad:
                            `querschnitt/${eintrag.querschnittId}/${option.id}`,
                        daten:
                            empfehlungen
                    });
                }
            );
        }
    );


    quellen.push(
        ...bereichsparameterQuellenHolen()
    );


    return quellen;
}


// ======================================================
// UNTERKATEGORIE-DATEN HOLEN
// ======================================================

function unterkategorieDatenHolen() {

    const unterDaten =
        aktuelleUnterkategorieHolen();

    const hauptDaten =
        aktuelleHauptkategorieHolen();

    const bereichDaten =
        v2Daten &&
        typeof v2Daten.bereichHolen ===
            "function"

            ? v2Daten.bereichHolen(
                bereichAuswahl.value
            )

            : null;

    const navigationDaten =
        unterDaten ||
        hauptDaten ||
        bereichDaten ||
        { name: "Allgemein" };

    const empfehlungen =
        v2Daten &&
        typeof v2Daten.empfehlungenFuerPfad ===
            "function"

            ? v2Daten.empfehlungenFuerPfad(
                bereichAuswahl.value,
                hauptkategorie.value,
                unterkategorie.value,
                querschnittParameterQuellenHolen()
            )

            : {
                rollen: [],
                ziele: [],
                kontextHinweise: [],
                anforderungen: [],
                besondersEmpfohleneAnforderungen: [],
                regeln: [],
                besondersEmpfohleneRegeln: [],
                ausgabeformate: [],
                ausgabeAls: [],
                herkunft: {}
            };


    return {
        name:
            navigationDaten.name,
        ...empfehlungen
    };
}


function mehrzeiligeEingabeTeilen(
    wert
) {
    return [
        ...new Set(
            String(wert || "")
                .split(/\r?\n/)
                .map(
                    function (eintrag) {
                        return eintrag.trim();
                    }
                )
                .filter(Boolean)
        )
    ];
}


function ausgewaehlteAnforderungenHolen() {
    return [
        ...new Set([
            ...aktiveAnforderungen,
            ...mehrzeiligeEingabeTeilen(
                eigeneAnforderungen.value
            )
        ])
    ];
}


function ausgewaehlteZieleHolen() {
    return [
        ...new Set([
            ...aktiveZiele,
            eigenesZiel.value.trim()
        ].filter(Boolean))
    ];
}


function ausgewaehlteRegelnHolen() {
    let regeln =
        [];


    aktiveRegelPakete.forEach(
        function (auswahl) {

            if (
                typeof regelPakete !== "undefined" &&
                regelPakete[auswahl]
            ) {
                regeln.push(
                    ...regelPakete[auswahl].regeln
                );

                return;
            }


            if (
                typeof auswahl === "string" &&
                auswahl.trim() !== ""
            ) {
                regeln.push(
                    auswahl.trim()
                );
            }
        }
    );


    regeln.push(
        ...mehrzeiligeEingabeTeilen(
            eigeneRegeln.value
        )
    );


    return [
        ...new Set(regeln)
    ];
}


function ausgewaehlteAusgabeformateHolen() {
    return [
        ...new Set([
            ...aktiveAusgabeformate,
            eigenesAusgabeformat.value.trim()
        ].filter(Boolean))
    ];
}


// ======================================================
// STORAGE
// ======================================================

function ordnerSpeichernLokal() {

    StorageService.ordnerSpeichern(
        ordner
    );
}


function promptsSpeichernLokal() {

    StorageService.promptsSpeichern(
        gespeichertePrompts
    );
}


function navigationSpeichernLokal() {

    StorageService.navigationSpeichern(
        navigation
    );
}


function v2PfadSchluessel(
    bereichId,
    hauptkategorieId
) {
    return `${encodeURIComponent(bereichId)}/${encodeURIComponent(hauptkategorieId)}`;
}


function v2HauptkategorienHolen(
    bereichId
) {
    return v2Daten &&
        typeof v2Daten.hauptkategorienFuerBereich ===
            "function"

        ? v2Daten.hauptkategorienFuerBereich(
            bereichId
        )

        : [];
}


function v2UnterkategorienHolen(
    bereichId,
    hauptkategorieId
) {
    return v2Daten &&
        typeof v2Daten.unterkategorienFuerPfad ===
            "function"

        ? v2Daten.unterkategorienFuerPfad(
            bereichId,
            hauptkategorieId
        )

        : [];
}


function v2NavigationSpeichernLokal() {
    StorageService.navigationV2Speichern(
        navigationV2
    );
}


function v2AuswahlMerken() {
    const bereichId =
        bereichAuswahl.value ||
        null;

    const hauptkategorieId =
        hauptkategorie.disabled

            ? null

            : hauptkategorie.value ||
                null;

    const unterkategorieId =
        unterkategorie.disabled

            ? null

            : unterkategorie.value ||
                null;


    if (bereichId) {
        if (hauptkategorieId) {
            navigationV2.hauptkategorienNachBereich[
                bereichId
            ] = hauptkategorieId;

            const pfadSchluessel =
                v2PfadSchluessel(
                    bereichId,
                    hauptkategorieId
                );


            if (unterkategorieId) {
                navigationV2.unterkategorienNachPfad[
                    pfadSchluessel
                ] = unterkategorieId;
            } else {
                delete navigationV2
                    .unterkategorienNachPfad[
                        pfadSchluessel
                    ];
            }
        } else {
            delete navigationV2
                .hauptkategorienNachBereich[
                    bereichId
                ];
        }
    }


    navigationV2.aktiveAuswahl = {
        bereichId:
            bereichId,
        hauptkategorieId:
            hauptkategorieId,
        unterkategorieId:
            unterkategorieId
    };


    v2NavigationSpeichernLokal();
}


function alteKategorienavigationDeaktivieren() {
    [
        hauptFavoritButton,
        unterFavoritButton,
        hauptSortierungToggle,
        unterSortierungToggle,
        hauptSortierungPanel,
        unterSortierungPanel
    ].forEach(
        function (element) {
            if (!element) {
                return;
            }


            element.hidden = true;
            element.classList.add(
                "versteckt"
            );
            element.setAttribute(
                "aria-hidden",
                "true"
            );


            if (
                "disabled" in element
            ) {
                element.disabled = true;
            }
        }
    );
}


// ======================================================
// KONTEXT-HINWEIS
// ======================================================

function kontextHinweisAktualisieren() {
    const daten =
        unterkategorieDatenHolen();

    kontextHinweis.innerHTML =
        "";


    const titel =
        document.createElement(
            "strong"
        );


    titel.textContent =
        "💡 Hilfreicher Kontext";

    kontextHinweis.appendChild(
        titel
    );


    if (daten.kontextHinweise.length === 0) {
        const neutralerHinweis =
            document.createElement(
                "span"
            );


        neutralerHinweis.textContent =
            " Für diesen Pfad sind noch keine speziellen Hinweise hinterlegt.";

        kontextHinweis.appendChild(
            neutralerHinweis
        );

        return;
    }


    const liste =
        document.createElement(
            "ul"
        );


    daten.kontextHinweise.forEach(
        function (hinweis) {
            const eintrag =
                document.createElement(
                    "li"
                );


            eintrag.textContent =
                hinweis;

            liste.appendChild(
                eintrag
            );
        }
    );


    kontextHinweis.appendChild(
        liste
    );
}


// ======================================================
// EMPFOHLENE ANFORDERUNGEN
// ======================================================

function empfohleneAnforderungenHolen() {
    return unterkategorieDatenHolen()
        .besondersEmpfohleneAnforderungen;
}


// ======================================================
// EMPFOHLENE REGEL-PAKETE
// ======================================================

function empfohleneRegelPaketeHolen() {
    return unterkategorieDatenHolen()
        .regeln;
}


function besondersEmpfohleneRegelnHolen() {
    const regeln =
        unterkategorieDatenHolen()
            .besondersEmpfohleneRegeln;


    return Array.isArray(regeln)

        ? regeln

        : [];
}


function leereEmpfehlungAnzeigen(
    container,
    text
) {
    const hinweis =
        document.createElement(
            "p"
        );


    hinweis.className =
        "leere-empfehlung";

    hinweis.textContent =
        text;

    container.appendChild(
        hinweis
    );
}


function empfehlungsSelectAktualisieren(
    select,
    empfehlungen,
    platzhalter
) {
    const vorherigerWert =
        select.value;

    const sichereEmpfehlungen =
        Array.isArray(empfehlungen)

            ? empfehlungen

            : [];


    select.innerHTML =
        "";


    const leereOption =
        document.createElement(
            "option"
        );


    leereOption.value =
        "";

    leereOption.textContent =
        sichereEmpfehlungen.length === 0

            ? "Noch keine Vorschläge verfügbar"

            : platzhalter;

    select.appendChild(
        leereOption
    );


    sichereEmpfehlungen.forEach(
        function (empfehlung) {
            const option =
                document.createElement(
                    "option"
                );


            option.value =
                empfehlung;

            option.textContent =
                empfehlung;

            select.appendChild(
                option
            );
        }
    );


    select.disabled =
        sichereEmpfehlungen.length === 0;

    select.value =
        sichereEmpfehlungen.includes(
            vorherigerWert
        )

            ? vorherigerWert

            : "";
}


function mehrfachauswahlAnzeigen(
    container,
    empfehlungen,
    aktiveWerte,
    leereMeldung,
    beimUmschalten
) {
    const sichereEmpfehlungen =
        Array.isArray(empfehlungen)

            ? empfehlungen

            : [];


    container.innerHTML =
        "";


    if (sichereEmpfehlungen.length === 0) {
        leereEmpfehlungAnzeigen(
            container,
            leereMeldung
        );

        return;
    }


    sichereEmpfehlungen.forEach(
        function (empfehlung) {
            const chip =
                document.createElement(
                    "button"
                );

            const istAktiv =
                aktiveWerte.includes(
                    empfehlung
                );


            chip.type =
                "button";

            chip.classList.add(
                "chip",
                "auswahl-chip"
            );

            chip.classList.toggle(
                "aktiv",
                istAktiv
            );

            chip.textContent =
                istAktiv

                    ? `✓ ${empfehlung}`

                    : empfehlung;

            chip.dataset.wert =
                empfehlung;

            chip.setAttribute(
                "aria-pressed",
                String(
                    istAktiv
                )
            );

            chip.setAttribute(
                "aria-label",
                `${empfehlung} – ${
                    istAktiv

                        ? "ausgewählt"

                        : "nicht ausgewählt"
                }`
            );

            chip.title =
                istAktiv

                    ? "Auswahl entfernen"

                    : "Auswählen";

            chip.addEventListener(
                "click",
                function () {
                    beimUmschalten(
                        empfehlung
                    );


                    const neuerChip =
                        [
                            ...container.querySelectorAll(
                                ".auswahl-chip"
                            )
                        ].find(
                            function (eintrag) {
                                return (
                                    eintrag.dataset.wert ===
                                    empfehlung
                                );
                            }
                        );


                    if (neuerChip) {
                        neuerChip.focus();
                    }
                }
            );


            chip.addEventListener(
                "keydown",
                function (event) {
                    if (
                        event.key !==
                            "Enter" &&
                        event.key !==
                            " "
                    ) {
                        return;
                    }


                    event.preventDefault();

                    chip.click();
                }
            );

            container.appendChild(
                chip
            );
        }
    );
}


function auswahlwertUmschalten(
    aktiveWerte,
    wert
) {
    return aktiveWerte.includes(
        wert
    )

        ? aktiveWerte.filter(
            function (eintrag) {
                return eintrag !==
                    wert;
            }
        )

        : [
            ...aktiveWerte,
            wert
        ];
}


function querschnittNamenHolen(
    querschnittId,
    aktiveIds
) {
    const ausgewaehlteIds =
        new Set(
            querschnittIdsBereinigen(
                querschnittId,
                aktiveIds
            )
        );


    return querschnittOptionenHolen(
        querschnittId
    )
        .filter(
            function (option) {
                return ausgewaehlteIds.has(
                    option.id
                );
            }
        )
        .map(
            function (option) {
                return option.name;
            }
        );
}


function querschnittWerteHolen(
    querschnittId,
    aktiveIds,
    eigeneAngabe
) {
    return [
        ...new Set([
            ...querschnittNamenHolen(
                querschnittId,
                aktiveIds
            ),
            String(
                eigeneAngabe ||
                ""
            ).trim()
        ].filter(Boolean))
    ];
}


function ausgewaehlteZielgruppenHolen() {
    return querschnittWerteHolen(
        "zielgruppen",
        aktiveZielgruppenIds,
        eigeneZielgruppe.value
    );
}


function ausgewaehlteTonalitaetenHolen() {
    return querschnittWerteHolen(
        "tonalitaeten",
        aktiveTonalitaetenIds,
        eigeneTonalitaet.value
    );
}


function ausgewaehltesFachniveauHolen() {
    if (
        !fachniveau.value ||
        fachniveau.value ===
            "keine-vorgabe"
    ) {
        return "";
    }


    const option =
        querschnittOptionHolen(
            "fachniveaus",
            fachniveau.value
        );


    return option

        ? option.name

        : "";
}


function querschnittMehrfachauswahlAnzeigen(
    container,
    optionen,
    aktiveIds,
    beimUmschalten,
    fokusContainer =
        container
) {
    optionen.forEach(
        function (option) {
            const chip =
                document.createElement(
                    "button"
                );

            const istAktiv =
                aktiveIds.includes(
                    option.id
                );


            chip.type =
                "button";

            chip.classList.add(
                "chip",
                "auswahl-chip"
            );

            chip.classList.toggle(
                "aktiv",
                istAktiv
            );

            chip.textContent =
                istAktiv

                    ? `✓ ${option.name}`

                    : option.name;

            chip.dataset.wert =
                option.id;

            chip.setAttribute(
                "aria-pressed",
                String(
                    istAktiv
                )
            );

            chip.setAttribute(
                "aria-label",
                `${option.name} – ${
                    istAktiv

                        ? "ausgewählt"

                        : "nicht ausgewählt"
                }`
            );

            chip.title =
                istAktiv

                    ? "Auswahl entfernen"

                    : "Auswählen";

            chip.addEventListener(
                "click",
                function () {
                    beimUmschalten(
                        option.id
                    );


                    const neuerChip =
                        fokusContainer.querySelector(
                            `[data-wert="${option.id}"]`
                        );


                    if (neuerChip) {
                        neuerChip.focus();
                    }
                }
            );

            chip.addEventListener(
                "keydown",
                function (event) {
                    if (
                        event.key !==
                            "Enter" &&
                        event.key !==
                            " "
                    ) {
                        return;
                    }


                    event.preventDefault();

                    chip.click();
                }
            );

            container.appendChild(
                chip
            );
        }
    );
}


function zielgruppenAnzeigen() {
    const daten =
        querschnittDatenHolen(
            "zielgruppen"
        );


    aktiveZielgruppenIds =
        querschnittIdsBereinigen(
            "zielgruppen",
            aktiveZielgruppenIds
        );

    zielgruppenOptionen.innerHTML =
        "";


    const ausgewaehlteNamen =
        querschnittNamenHolen(
            "zielgruppen",
            aktiveZielgruppenIds
        );


    zielgruppenZusammenfassung.textContent =
        ausgewaehlteNamen.length >
            0

            ? ausgewaehlteNamen.length <=
                2

                ? `${ausgewaehlteNamen.length} ausgewählt: ${ausgewaehlteNamen.join(", ")}`

                : `${ausgewaehlteNamen.length} Zielgruppen ausgewählt`

            : "Zielgruppen auswählen";


    if (
        !daten ||
        !Array.isArray(
            daten.gruppen
        )
    ) {
        leereEmpfehlungAnzeigen(
            zielgruppenOptionen,
            "Noch keine Zielgruppen verfügbar."
        );

        return;
    }


    daten.gruppen.forEach(
        function (gruppe) {
            const bereich =
                document.createElement(
                    "div"
                );

            const titel =
                document.createElement(
                    "span"
                );

            const chipContainer =
                document.createElement(
                    "div"
                );


            bereich.className =
                "querschnitt-gruppe";

            titel.className =
                "querschnitt-gruppe-titel";

            titel.textContent =
                gruppe.name;

            chipContainer.className =
                "chip-container auswahl-chip-container";


            bereich.appendChild(
                titel
            );

            bereich.appendChild(
                chipContainer
            );

            zielgruppenOptionen.appendChild(
                bereich
            );


            querschnittMehrfachauswahlAnzeigen(
                chipContainer,
                Array.isArray(
                    gruppe.optionen
                )

                    ? gruppe.optionen

                    : [],
                aktiveZielgruppenIds,
                function (optionId) {
                    aktiveZielgruppenIds =
                        auswahlwertUmschalten(
                            aktiveZielgruppenIds,
                            optionId
                        );

                    zielgruppenAnzeigen();

                    unterkategorieAktualisieren(
                        false
                    );
                },
                zielgruppenOptionen
            );
        }
    );
}


function tonalitaetenAnzeigen() {
    const optionen =
        querschnittOptionenHolen(
            "tonalitaeten"
        ).filter(
            function (option) {
                return option.id !==
                    "keine-vorgabe";
            }
        );


    aktiveTonalitaetenIds =
        querschnittIdsBereinigen(
            "tonalitaeten",
            aktiveTonalitaetenIds
        );

    tonalitaetenContainer.innerHTML =
        "";


    if (optionen.length === 0) {
        leereEmpfehlungAnzeigen(
            tonalitaetenContainer,
            "Noch keine Tonalitäten verfügbar."
        );

        return;
    }


    querschnittMehrfachauswahlAnzeigen(
        tonalitaetenContainer,
        optionen,
        aktiveTonalitaetenIds,
        function (optionId) {
            aktiveTonalitaetenIds =
                auswahlwertUmschalten(
                    aktiveTonalitaetenIds,
                    optionId
                );

            tonalitaetenAnzeigen();

            unterkategorieAktualisieren(
                false
            );
        }
    );
}


function fachniveauOptionenLaden(
    bevorzugteId =
        fachniveau.value
) {
    const optionen =
        querschnittOptionenHolen(
            "fachniveaus"
        );


    fachniveau.innerHTML =
        "";


    if (optionen.length === 0) {
        const platzhalter =
            document.createElement(
                "option"
            );


        platzhalter.value =
            "";

        platzhalter.textContent =
            "Noch keine Werte verfügbar";

        fachniveau.appendChild(
            platzhalter
        );

        fachniveau.disabled =
            true;

        return;
    }


    optionen.forEach(
        function (option) {
            const eintrag =
                document.createElement(
                    "option"
                );


            eintrag.value =
                option.id;

            eintrag.textContent =
                option.name;

            fachniveau.appendChild(
                eintrag
            );
        }
    );


    const gueltigeIds =
        new Set(
            optionen.map(
                function (option) {
                    return option.id;
                }
            )
        );


    fachniveau.disabled =
        false;

    fachniveau.value =
        gueltigeIds.has(
            bevorzugteId
        )

            ? bevorzugteId

            : gueltigeIds.has(
                "keine-vorgabe"
            )

                ? "keine-vorgabe"

                : "";
}


function querschnittFelderInitialisieren() {
    fachniveauOptionenLaden();

    zielgruppenAnzeigen();

    tonalitaetenAnzeigen();
}


function bereichsparameterWerteHolen(
    parameter,
    status
) {
    const aktiveIds =
        new Set(
            bereichsparameterIdsBereinigen(
                parameter,
                status.auswahlIds
            )
        );

    const werte =
        parameter.optionen
            .filter(
                function (option) {
                    return aktiveIds.has(
                        option.id
                    );
                }
            )
            .map(
                function (option) {
                    return option.name;
                }
            );

    const eigeneAngabe =
        parameter.eigeneAngabeErlaubt ===
            true

            ? String(
                status.eigeneAngabe ||
                ""
            ).trim()

            : "";


    return [
        ...new Set([
            ...werte,
            eigeneAngabe
        ].filter(Boolean))
    ];
}


function bereichsparameterSpeicherdatenHolen() {
    const speicherdaten =
        {};


    aktiveBereichsparameterEintraegeHolen()
        .forEach(
            function (eintrag) {
                const eigeneAngabe =
                    eintrag.parameter
                        .eigeneAngabeErlaubt ===
                        true

                        ? String(
                            eintrag.status
                                .eigeneAngabe ||
                            ""
                        )

                        : "";


                if (
                    eintrag.status.auswahlIds
                        .length === 0 &&
                    eigeneAngabe.trim() ===
                        ""
                ) {
                    return;
                }


                speicherdaten[
                    eintrag.parameter.id
                ] = {
                    auswahlIds: [
                        ...eintrag.status
                            .auswahlIds
                    ],
                    eigeneAngabe:
                        eigeneAngabe
                };
            }
        );


    return speicherdaten;
}


function bereichsparameterAusEintragWiederherstellen(
    eintrag
) {
    const bereichId =
        bereichAuswahl.value;

    const gespeicherteParameter =
        eintrag &&
        eintrag.bereichsparameter &&
        typeof eintrag.bereichsparameter ===
            "object" &&
        !Array.isArray(
            eintrag.bereichsparameter
        )

            ? eintrag.bereichsparameter

            : {};


    bereichsparameterSitzung[bereichId] =
        {};


    aktuelleBereichsparameterHolen()
        .forEach(
            function (parameter) {
                const gespeicherterStatus =
                    gespeicherteParameter[
                        parameter.id
                    ];

                const status =
                    bereichsparameterStatusHolen(
                        bereichId,
                        parameter.id
                    );


                status.auswahlIds =
                    bereichsparameterIdsBereinigen(
                        parameter,
                        gespeicherterStatus &&
                        gespeicherterStatus
                            .auswahlIds
                    );

                status.eigeneAngabe =
                    parameter.eigeneAngabeErlaubt ===
                        true &&
                    gespeicherterStatus &&
                    typeof gespeicherterStatus
                        .eigeneAngabe ===
                        "string"

                        ? gespeicherterStatus
                            .eigeneAngabe

                        : "";
            }
        );
}


function bereichsparameterZusammenfassungHolen(
    parameter,
    status
) {
    const namen =
        bereichsparameterWerteHolen(
            {
                ...parameter,
                eigeneAngabeErlaubt:
                    false
            },
            status
        );


    if (namen.length === 0) {
        return `${parameter.name} auswählen`;
    }


    return namen.length <= 2

        ? `${namen.length} ausgewählt: ${namen.join(", ")}`

        : `${namen.length} Werte ausgewählt`;
}


function bereichsparameterMehrfachauswahlAnzeigen(
    parameter,
    status,
    feld,
    labelId,
    hinweisId,
    warGeoeffnet
) {
    const auswahl =
        document.createElement(
            "details"
        );

    const zusammenfassung =
        document.createElement(
            "summary"
        );

    const optionenContainer =
        document.createElement(
            "div"
        );

    const optionen =
        parameter.optionen.filter(
            function (option) {
                return option.id !==
                    "keine-vorgabe";
            }
        );


    auswahl.className =
        "querschnitt-auswahl";

    auswahl.dataset.parameterId =
        parameter.id;

    auswahl.open =
        warGeoeffnet;

    zusammenfassung.textContent =
        bereichsparameterZusammenfassungHolen(
            parameter,
            status
        );

    optionenContainer.className =
        "querschnitt-optionen chip-container auswahl-chip-container";

    optionenContainer.setAttribute(
        "role",
        "group"
    );

    optionenContainer.setAttribute(
        "aria-labelledby",
        labelId
    );

    optionenContainer.setAttribute(
        "aria-describedby",
        hinweisId
    );


    querschnittMehrfachauswahlAnzeigen(
        optionenContainer,
        optionen,
        status.auswahlIds,
        function (optionId) {
            status.auswahlIds =
                bereichsparameterIdsBereinigen(
                    parameter,
                    auswahlwertUmschalten(
                        status.auswahlIds,
                        optionId
                    )
                );

            bereichsparameterAnzeigen();

            unterkategorieAktualisieren(
                false
            );
        },
        bereichsparameterAbschnitt
    );


    auswahl.appendChild(
        zusammenfassung
    );

    auswahl.appendChild(
        optionenContainer
    );

    feld.appendChild(
        auswahl
    );
}


function bereichsparameterEinfachauswahlAnzeigen(
    parameter,
    status,
    feld,
    labelId,
    hinweisId
) {
    const auswahl =
        document.createElement(
            "select"
        );

    const hatKeineVorgabe =
        parameter.optionen.some(
            function (option) {
                return option.id ===
                    "keine-vorgabe";
            }
        );


    auswahl.id =
        `bereichsparameter-${parameter.id}`;

    auswahl.setAttribute(
        "aria-labelledby",
        labelId
    );

    auswahl.setAttribute(
        "aria-describedby",
        hinweisId
    );


    if (!hatKeineVorgabe) {
        const leereOption =
            document.createElement(
                "option"
            );


        leereOption.value =
            "keine-vorgabe";

        leereOption.textContent =
            "Keine Vorgabe";

        auswahl.appendChild(
            leereOption
        );
    }


    parameter.optionen.forEach(
        function (option) {
            const optionElement =
                document.createElement(
                    "option"
                );


            optionElement.value =
                option.id;

            optionElement.textContent =
                option.name;

            auswahl.appendChild(
                optionElement
            );
        }
    );


    auswahl.value =
        status.auswahlIds[0] ||
        "keine-vorgabe";

    auswahl.addEventListener(
        "change",
        function () {
            status.auswahlIds =
                auswahl.value &&
                auswahl.value !==
                    "keine-vorgabe"

                    ? [auswahl.value]

                    : [];

            unterkategorieAktualisieren(
                false
            );
        }
    );


    feld.appendChild(
        auswahl
    );
}


function bereichsparameterEigeneAngabeAnzeigen(
    parameter,
    status,
    feld
) {
    if (
        parameter.eigeneAngabeErlaubt !==
            true
    ) {
        return;
    }


    const label =
        document.createElement(
            "label"
        );

    const eingabe =
        document.createElement(
            "input"
        );

    const eingabeId =
        `bereichsparameter-${parameter.id}-eigene-angabe`;


    label.className =
        "bereichsparameter-eigene-angabe";

    label.htmlFor =
        eingabeId;

    label.textContent =
        `Eigene ${parameter.name}`;

    eingabe.type =
        "text";

    eingabe.id =
        eingabeId;

    eingabe.value =
        status.eigeneAngabe;

    eingabe.placeholder =
        `Optional: eigene ${parameter.name.toLocaleLowerCase("de-DE")} eingeben ...`;

    eingabe.addEventListener(
        "input",
        function () {
            status.eigeneAngabe =
                eingabe.value;

            promptErstellen();
        }
    );


    feld.appendChild(
        label
    );

    feld.appendChild(
        eingabe
    );
}


function bereichsparameterAnzeigen() {
    const offeneParameterIds =
        new Set(
            [
                ...bereichsparameterContainer
                    .querySelectorAll(
                        "details[open][data-parameter-id]"
                    )
            ].map(
                function (auswahl) {
                    return auswahl.dataset
                        .parameterId;
                }
            )
        );

    const eintraege =
        aktiveBereichsparameterEintraegeHolen();


    bereichsparameterContainer.innerHTML =
        "";

    bereichsparameterAbschnitt.classList.toggle(
        "versteckt",
        eintraege.length ===
            0
    );


    eintraege.forEach(
        function (eintrag) {
            const parameter =
                eintrag.parameter;

            const status =
                eintrag.status;

            const feld =
                document.createElement(
                    "div"
                );

            const label =
                document.createElement(
                    "label"
                );

            const hinweis =
                document.createElement(
                    "p"
                );

            const labelId =
                `bereichsparameter-${parameter.id}-label`;

            const hinweisId =
                `bereichsparameter-${parameter.id}-hinweis`;


            feld.className =
                "bereichsparameter-feld";

            feld.dataset.bereichsparameterId =
                parameter.id;

            label.id =
                labelId;

            label.textContent =
                parameter.name;

            hinweis.id =
                hinweisId;

            hinweis.className =
                "hinweis";

            hinweis.textContent =
                bereichsparameterAuswahltypHolen(
                    parameter
                ) === "mehrfach"

                    ? "Optional. Du kannst mehrere Werte kombinieren."

                    : "Optional. Wähle einen Wert aus.";


            feld.appendChild(
                label
            );

            feld.appendChild(
                hinweis
            );


            if (
                bereichsparameterAuswahltypHolen(
                    parameter
                ) === "mehrfach"
            ) {
                bereichsparameterMehrfachauswahlAnzeigen(
                    parameter,
                    status,
                    feld,
                    labelId,
                    hinweisId,
                    offeneParameterIds.has(
                        parameter.id
                    )
                );
            } else {
                label.htmlFor =
                    `bereichsparameter-${parameter.id}`;

                bereichsparameterEinfachauswahlAnzeigen(
                    parameter,
                    status,
                    feld,
                    labelId,
                    hinweisId
                );
            }


            bereichsparameterEigeneAngabeAnzeigen(
                parameter,
                status,
                feld
            );

            bereichsparameterContainer.appendChild(
                feld
            );
        }
    );
}


function zieleAnzeigen() {
    const daten =
        unterkategorieDatenHolen();


    mehrfachauswahlAnzeigen(
        zieleContainer,
        daten.ziele,
        aktiveZiele,
        "Für diesen Pfad sind noch keine Zielvorschläge verfügbar.",
        function (zielText) {
            aktiveZiele =
                auswahlwertUmschalten(
                    aktiveZiele,
                    zielText
                );

            zieleAnzeigen();

            promptErstellen();
        }
    );
}


function ausgabeformateAnzeigen() {
    const daten =
        unterkategorieDatenHolen();


    mehrfachauswahlAnzeigen(
        ausgabeformateContainer,
        daten.ausgabeformate,
        aktiveAusgabeformate,
        "Für diesen Pfad sind noch keine Ausgabeformat-Vorschläge verfügbar.",
        function (formatText) {
            aktiveAusgabeformate =
                auswahlwertUmschalten(
                    aktiveAusgabeformate,
                    formatText
                );

            ausgabeformateAnzeigen();

            promptErstellen();
        }
    );
}


function ausgabeAlsEmpfehlungenAktualisieren(
    empfehlungen
) {
    const sichereEmpfehlungen =
        Array.isArray(empfehlungen)

            ? empfehlungen

            : [];


    [
        ...ausgabeAls.options
    ].forEach(
        function (option) {

            if (!option.dataset.standardText) {
                option.dataset.standardText =
                    option.textContent.trim();
            }


            option.textContent =
                option.value &&
                sichereEmpfehlungen.includes(
                    option.value
                )

                    ? `★ Empfohlen: ${option.dataset.standardText}`

                    : option.dataset.standardText;
        }
    );
}


// ======================================================
// REIHENFOLGE BEREINIGEN
// ======================================================

function reihenfolgeBereinigen(
    gespeicherteReihenfolge,
    verfuegbareSchluessel
) {

    const ergebnis =
        [];


    if (
        Array.isArray(
            gespeicherteReihenfolge
        )
    ) {

        gespeicherteReihenfolge.forEach(

            function (schluessel) {

                if (
                    verfuegbareSchluessel.includes(
                        schluessel
                    ) &&
                    !ergebnis.includes(
                        schluessel
                    )
                ) {

                    ergebnis.push(
                        schluessel
                    );
                }
            }

        );
    }


    verfuegbareSchluessel.forEach(

        function (schluessel) {

            if (
                !ergebnis.includes(
                    schluessel
                )
            ) {

                ergebnis.push(
                    schluessel
                );
            }
        }

    );


    return ergebnis;
}


// ======================================================
// NAVIGATION VORBEREITEN
// ======================================================

function navigationVorbereiten() {

    const hauptKeys =
        Object.keys(
            hauptkategorien
        );


    navigation.hauptReihenfolge =
        reihenfolgeBereinigen(

            navigation.hauptReihenfolge,

            hauptKeys

        );


    navigation.hauptFavoriten =
        (
            Array.isArray(
                navigation.hauptFavoriten
            )
                ? navigation.hauptFavoriten
                : []
        ).filter(

            function (key) {

                return hauptKeys.includes(
                    key
                );
            }

        );


    if (
        !navigation.unterFavoriten ||
        typeof navigation.unterFavoriten !==
            "object"
    ) {

        navigation.unterFavoriten =
            {};
    }


    if (
        !navigation.unterReihenfolge ||
        typeof navigation.unterReihenfolge !==
            "object"
    ) {

        navigation.unterReihenfolge =
            {};
    }


    hauptKeys.forEach(

        function (hauptKey) {

            const unterKeys =
                Object.keys(

                    hauptkategorien[
                        hauptKey
                    ].unterkategorien

                );


            navigation.unterReihenfolge[
                hauptKey
            ] =
                reihenfolgeBereinigen(

                    navigation.unterReihenfolge[
                        hauptKey
                    ],

                    unterKeys

                );


            const favoriten =
                Array.isArray(
                    navigation.unterFavoriten[
                        hauptKey
                    ]
                )
                    ? navigation.unterFavoriten[
                        hauptKey
                    ]
                    : [];


            navigation.unterFavoriten[
                hauptKey
            ] =
                favoriten.filter(

                    function (key) {

                        return unterKeys.includes(
                            key
                        );
                    }

                );
        }

    );


    navigationSpeichernLokal();
}


// ======================================================
// SORTIERTE HAUPTKATEGORIEN
// ======================================================

function sortierteHauptkategorieSchluessel() {

    const basis =
        reihenfolgeBereinigen(

            navigation.hauptReihenfolge,

            Object.keys(
                hauptkategorien
            )

        );


    const favoriten =
        basis.filter(

            function (key) {

                return navigation.hauptFavoriten.includes(
                    key
                );
            }

        );


    const normal =
        basis.filter(

            function (key) {

                return !navigation.hauptFavoriten.includes(
                    key
                );
            }

        );


    return [
        ...favoriten,
        ...normal
    ];
}


// ======================================================
// SORTIERTE UNTERKATEGORIEN
// ======================================================

function sortierteUnterkategorieSchluessel(
    hauptKey
) {

    const haupt =
        hauptkategorien[
            hauptKey
        ];


    if (!haupt) {

        return [];
    }


    const basis =
        reihenfolgeBereinigen(

            navigation.unterReihenfolge[
                hauptKey
            ],

            Object.keys(
                haupt.unterkategorien
            )

        );


    const favoriten =
        navigation.unterFavoriten[
            hauptKey
        ] ||
        [];


    const oben =
        basis.filter(

            function (key) {

                return favoriten.includes(
                    key
                );
            }

        );


    const normal =
        basis.filter(

            function (key) {

                return !favoriten.includes(
                    key
                );
            }

        );


    return [
        ...oben,
        ...normal
    ];
}


// ======================================================
// EINTRAG INNERHALB EINER GRUPPE VERSCHIEBEN
// ======================================================

function eintragInnerhalbGruppeVerschieben(
    basisReihenfolge,
    gruppenReihenfolge,
    aktuellerSchluessel,
    richtung
) {

    const gruppenIndex =
        gruppenReihenfolge.indexOf(
            aktuellerSchluessel
        );


    if (
        gruppenIndex ===
        -1
    ) {

        return false;
    }


    const zielGruppenIndex =
        gruppenIndex +
        richtung;


    if (
        zielGruppenIndex <
            0 ||
        zielGruppenIndex >=
            gruppenReihenfolge.length
    ) {

        return false;
    }


    const tauschSchluessel =
        gruppenReihenfolge[
            zielGruppenIndex
        ];


    const indexA =
        basisReihenfolge.indexOf(
            aktuellerSchluessel
        );


    const indexB =
        basisReihenfolge.indexOf(
            tauschSchluessel
        );


    if (
        indexA ===
            -1 ||
        indexB ===
            -1
    ) {

        return false;
    }


    [
        basisReihenfolge[
            indexA
        ],
        basisReihenfolge[
            indexB
        ]
    ] =
    [
        basisReihenfolge[
            indexB
        ],
        basisReihenfolge[
            indexA
        ]
    ];


    return true;
}


// ======================================================
// HAUPTKATEGORIEN LADEN
// ======================================================

function hauptkategorienLaden(
    gewuenschteHauptkategorie
) {
    const bereichId =
        bereichAuswahl.value;

    const hauptkategorienV2 =
        v2HauptkategorienHolen(
            bereichId
        );

    const hatAusdruecklichenWunsch =
        arguments.length > 0;

    const gespeicherteAuswahl =
        navigationV2
            .hauptkategorienNachBereich[
                bereichId
            ] ||
        null;

    const bevorzugteAuswahl =
        hatAusdruecklichenWunsch

            ? gewuenschteHauptkategorie

            : gespeicherteAuswahl;


    hauptkategorie.innerHTML = "";


    if (hauptkategorienV2.length === 0) {
        const option =
            document.createElement(
                "option"
            );


        option.value = "";
        option.textContent =
            "Noch keine Hauptkategorien verfügbar";

        hauptkategorie.appendChild(
            option
        );

        hauptkategorie.disabled = true;
        return;
    }


    hauptkategorienV2.forEach(
        function (daten) {
            const option =
                document.createElement(
                    "option"
                );


            option.value =
                daten.id;

            option.textContent =
                daten.name;

            hauptkategorie.appendChild(
                option
            );
        }
    );


    const auswahlGueltig =
        hauptkategorienV2.some(
            function (daten) {
                return (
                    daten.id ===
                    bevorzugteAuswahl
                );
            }
        );


    hauptkategorie.disabled = false;
    hauptkategorie.value =
        auswahlGueltig

            ? bevorzugteAuswahl

            : hauptkategorienV2[0].id;
}


// ======================================================
// UNTERKATEGORIEN LADEN
// ======================================================

function unterkategorienLaden(
    gewuenschteUnterkategorie
) {
    const bereichId =
        bereichAuswahl.value;

    const hauptkategorieId =
        hauptkategorie.disabled

            ? ""

            : hauptkategorie.value;

    const unterkategorienV2 =
        v2UnterkategorienHolen(
            bereichId,
            hauptkategorieId
        );

    const hatAusdruecklichenWunsch =
        arguments.length > 0;

    const pfadSchluessel =
        hauptkategorieId

            ? v2PfadSchluessel(
                bereichId,
                hauptkategorieId
            )

            : "";

    const gespeicherteAuswahl =
        pfadSchluessel

            ? navigationV2
                .unterkategorienNachPfad[
                    pfadSchluessel
                ] || null

            : null;

    const bevorzugteAuswahl =
        hatAusdruecklichenWunsch

            ? gewuenschteUnterkategorie

            : gespeicherteAuswahl;


    unterkategorie.innerHTML = "";


    if (
        !hauptkategorieId ||
        unterkategorienV2.length === 0
    ) {
        const option =
            document.createElement(
                "option"
            );


        option.value = "";
        option.textContent =
            hauptkategorieId

                ? "Noch keine Unterkategorien verfügbar"

                : "Bitte zuerst eine Hauptkategorie wählen";

        unterkategorie.appendChild(
            option
        );

        unterkategorie.disabled = true;
        return;
    }


    unterkategorienV2.forEach(
        function (daten) {
            const option =
                document.createElement(
                    "option"
                );


            option.value =
                daten.id;

            option.textContent =
                daten.name;

            unterkategorie.appendChild(
                option
            );
        }
    );


    const auswahlGueltig =
        unterkategorienV2.some(
            function (daten) {
                return (
                    daten.id ===
                    bevorzugteAuswahl
                );
            }
        );


    unterkategorie.disabled = false;
    unterkategorie.value =
        auswahlGueltig

            ? bevorzugteAuswahl

            : unterkategorienV2[0].id;
}


// ======================================================
// FAVORITENBUTTON HAUPTKATEGORIE
// ======================================================

function hauptFavoritButtonAktualisieren() {

    const key =
        hauptkategorie.value;


    const istFavorit =
        navigation.hauptFavoriten.includes(
            key
        );


    hauptFavoritButton.textContent =

        istFavorit
            ? "★"
            : "☆";


    hauptFavoritButton.classList.toggle(
        "aktiv",
        istFavorit
    );


    hauptFavoritButton.title =

        istFavorit

            ? "Hauptkategorie aus Favoriten entfernen"

            : "Hauptkategorie als Favorit markieren";


    hauptFavoritButton.setAttribute(
        "aria-label",
        hauptFavoritButton.title
    );
}


// ======================================================
// FAVORITENBUTTON UNTERKATEGORIE
// ======================================================

function unterFavoritButtonAktualisieren() {

    const hauptKey =
        hauptkategorie.value;

    const unterKey =
        unterkategorie.value;


    const favoriten =
        navigation.unterFavoriten[
            hauptKey
        ] ||
        [];


    const istFavorit =
        favoriten.includes(
            unterKey
        );


    unterFavoritButton.textContent =

        istFavorit
            ? "★"
            : "☆";


    unterFavoritButton.classList.toggle(
        "aktiv",
        istFavorit
    );


    unterFavoritButton.title =

        istFavorit

            ? "Unterkategorie aus Favoriten entfernen"

            : "Unterkategorie als Favorit markieren";


    unterFavoritButton.setAttribute(
        "aria-label",
        unterFavoritButton.title
    );
}


// ======================================================
// HAUPTKATEGORIE FAVORISIEREN
// ======================================================

function hauptFavoritFuerSchluesselUmschalten(
    key
) {

    if (
        !hauptkategorien[
            key
        ]
    ) {

        return;
    }


    if (
        navigation.hauptFavoriten.includes(
            key
        )
    ) {

        navigation.hauptFavoriten =
            navigation.hauptFavoriten.filter(

                function (eintrag) {

                    return (
                        eintrag !==
                        key
                    );
                }

            );

    } else {

        navigation.hauptFavoriten.push(
            key
        );
    }


    navigationSpeichernLokal();


    const aktuelleAuswahl =
        hauptkategorie.value;


    hauptkategorienLaden(
        aktuelleAuswahl
    );


    hauptSortierungAnzeigen();

    hauptFavoritButtonAktualisieren();
}


// ======================================================
// UNTERKATEGORIE FAVORISIEREN
// ======================================================

function unterFavoritFuerSchluesselUmschalten(
    hauptKey,
    unterKey
) {

    if (
        !hauptkategorien[
            hauptKey
        ] ||
        !hauptkategorien[
            hauptKey
        ].unterkategorien[
            unterKey
        ]
    ) {

        return;
    }


    if (
        !Array.isArray(
            navigation.unterFavoriten[
                hauptKey
            ]
        )
    ) {

        navigation.unterFavoriten[
            hauptKey
        ] =
            [];
    }


    const favoriten =
        navigation.unterFavoriten[
            hauptKey
        ];


    if (
        favoriten.includes(
            unterKey
        )
    ) {

        navigation.unterFavoriten[
            hauptKey
        ] =
            favoriten.filter(

                function (eintrag) {

                    return (
                        eintrag !==
                        unterKey
                    );
                }

            );

    } else {

        favoriten.push(
            unterKey
        );
    }


    navigationSpeichernLokal();


    if (
        hauptkategorie.value ===
        hauptKey
    ) {

        const aktuelleAuswahl =
            unterkategorie.value;


        unterkategorienLaden(
            aktuelleAuswahl
        );


        unterFavoritButtonAktualisieren();

        unterSortierungAnzeigen();
    }
}


// ======================================================
// FAVORITEN DER AKTUELLEN AUSWAHL
// ======================================================

function hauptFavoritUmschalten() {

    hauptFavoritFuerSchluesselUmschalten(
        hauptkategorie.value
    );
}


function unterFavoritUmschalten() {

    unterFavoritFuerSchluesselUmschalten(

        hauptkategorie.value,

        unterkategorie.value

    );
}


// ======================================================
// HAUPTKATEGORIE VERSCHIEBEN
// ======================================================

function hauptkategorieVerschieben(
    key,
    richtung
) {

    const basis =
        reihenfolgeBereinigen(

            navigation.hauptReihenfolge,

            Object.keys(
                hauptkategorien
            )

        );


    const istFavorit =
        navigation.hauptFavoriten.includes(
            key
        );


    const gruppe =
        basis.filter(

            function (eintrag) {

                return (

                    navigation.hauptFavoriten.includes(
                        eintrag
                    ) ===
                    istFavorit

                );
            }

        );


    const erfolgreich =
        eintragInnerhalbGruppeVerschieben(

            basis,

            gruppe,

            key,

            richtung

        );


    if (!erfolgreich) {

        return;
    }


    navigation.hauptReihenfolge =
        basis;


    navigationSpeichernLokal();


    const aktuelleAuswahl =
        hauptkategorie.value;


    hauptkategorienLaden(
        aktuelleAuswahl
    );


    hauptSortierungAnzeigen();
}


// ======================================================
// UNTERKATEGORIE VERSCHIEBEN
// ======================================================

function unterkategorieVerschieben(
    hauptKey,
    unterKey,
    richtung
) {

    const haupt =
        hauptkategorien[
            hauptKey
        ];


    if (!haupt) {

        return;
    }


    const basis =
        reihenfolgeBereinigen(

            navigation.unterReihenfolge[
                hauptKey
            ],

            Object.keys(
                haupt.unterkategorien
            )

        );


    const favoriten =
        navigation.unterFavoriten[
            hauptKey
        ] ||
        [];


    const istFavorit =
        favoriten.includes(
            unterKey
        );


    const gruppe =
        basis.filter(

            function (eintrag) {

                return (

                    favoriten.includes(
                        eintrag
                    ) ===
                    istFavorit

                );
            }

        );


    const erfolgreich =
        eintragInnerhalbGruppeVerschieben(

            basis,

            gruppe,

            unterKey,

            richtung

        );


    if (!erfolgreich) {

        return;
    }


    navigation.unterReihenfolge[
        hauptKey
    ] =
        basis;


    navigationSpeichernLokal();


    if (
        hauptkategorie.value ===
        hauptKey
    ) {

        const aktuelleAuswahl =
            unterkategorie.value;


        unterkategorienLaden(
            aktuelleAuswahl
        );


        unterSortierungAnzeigen();
    }
}


// ======================================================
// SORTIER-GRUPPENTITEL
// ======================================================

function sortierungGruppenTitelErstellen(
    text
) {

    const titel =
        document.createElement(
            "div"
        );


    titel.classList.add(
        "sortierung-gruppen-titel"
    );


    titel.textContent =
        text;


    return titel;
}


// ======================================================
// SORTIER-BUTTON ERSTELLEN
// ======================================================

function sortierungButtonErstellen(
    text,
    klasse,
    titel
) {

    const button =
        document.createElement(
            "button"
        );


    button.type =
        "button";


    button.classList.add(
        klasse
    );


    button.textContent =
        text;


    button.title =
        titel;


    return button;
}


// ======================================================
// HAUPTKATEGORIE-ZEILE FÜR SORTIERUNG
// ======================================================

function hauptSortierungsZeileErstellen(
    key,
    position,
    gruppenLaenge
) {

    const daten =
        hauptkategorien[
            key
        ];


    const istFavorit =
        navigation.hauptFavoriten.includes(
            key
        );


    const istAusgewaehlt =
        hauptkategorie.value ===
        key;


    const zeile =
        document.createElement(
            "div"
        );


    zeile.classList.add(
        "sortierung-zeile"
    );


    zeile.classList.toggle(
        "favorit",
        istFavorit
    );


    zeile.classList.toggle(
        "ausgewaehlt",
        istAusgewaehlt
    );


    const stern =
        sortierungButtonErstellen(

            istFavorit
                ? "★"
                : "☆",

            "sortierung-stern-button",

            istFavorit
                ? "Favorit entfernen"
                : "Als Favorit markieren"

        );


    stern.classList.toggle(
        "aktiv",
        istFavorit
    );


    stern.addEventListener(

        "click",

        function () {

            hauptFavoritFuerSchluesselUmschalten(
                key
            );
        }

    );


    const name =
        sortierungButtonErstellen(

            `${daten.icon} ${daten.name}`,

            "sortierung-name-button",

            "Kategorie auswählen"

        );


    name.addEventListener(

        "click",

        function () {

            if (
                hauptkategorie.value ===
                key
            ) {

                hauptSortierungAnzeigen();

                return;
            }


            hauptkategorie.value =
                key;


            hauptkategorieGeaendert();
        }

    );


    const hoch =
        sortierungButtonErstellen(

            "↑",

            "sortierung-pfeil-button",

            "Nach oben"

        );


    hoch.disabled =
        position ===
        0;


    hoch.addEventListener(

        "click",

        function () {

            hauptkategorieVerschieben(
                key,
                -1
            );
        }

    );


    const runter =
        sortierungButtonErstellen(

            "↓",

            "sortierung-pfeil-button",

            "Nach unten"

        );


    runter.disabled =
        position ===
        gruppenLaenge -
        1;


    runter.addEventListener(

        "click",

        function () {

            hauptkategorieVerschieben(
                key,
                1
            );
        }

    );


    zeile.appendChild(
        stern
    );


    zeile.appendChild(
        name
    );


    zeile.appendChild(
        hoch
    );


    zeile.appendChild(
        runter
    );


    return zeile;
}


// ======================================================
// UNTERKATEGORIE-ZEILE FÜR SORTIERUNG
// ======================================================

function unterSortierungsZeileErstellen(
    hauptKey,
    unterKey,
    position,
    gruppenLaenge
) {

    const daten =
        hauptkategorien[
            hauptKey
        ].unterkategorien[
            unterKey
        ];


    const favoriten =
        navigation.unterFavoriten[
            hauptKey
        ] ||
        [];


    const istFavorit =
        favoriten.includes(
            unterKey
        );


    const istAusgewaehlt =

        hauptkategorie.value ===
            hauptKey &&

        unterkategorie.value ===
            unterKey;


    const zeile =
        document.createElement(
            "div"
        );


    zeile.classList.add(
        "sortierung-zeile"
    );


    zeile.classList.toggle(
        "favorit",
        istFavorit
    );


    zeile.classList.toggle(
        "ausgewaehlt",
        istAusgewaehlt
    );


    const stern =
        sortierungButtonErstellen(

            istFavorit
                ? "★"
                : "☆",

            "sortierung-stern-button",

            istFavorit
                ? "Favorit entfernen"
                : "Als Favorit markieren"

        );


    stern.classList.toggle(
        "aktiv",
        istFavorit
    );


    stern.addEventListener(

        "click",

        function () {

            unterFavoritFuerSchluesselUmschalten(
                hauptKey,
                unterKey
            );
        }

    );


    const name =
        sortierungButtonErstellen(

            daten.name,

            "sortierung-name-button",

            "Unterkategorie auswählen"

        );


    name.addEventListener(

        "click",

        function () {

            if (
                hauptkategorie.value !==
                hauptKey
            ) {

                return;
            }


            if (
                unterkategorie.value ===
                unterKey
            ) {

                unterSortierungAnzeigen();

                return;
            }


            unterkategorie.value =
                unterKey;


            unterkategorieGeaendert();
        }

    );


    const hoch =
        sortierungButtonErstellen(

            "↑",

            "sortierung-pfeil-button",

            "Nach oben"

        );


    hoch.disabled =
        position ===
        0;


    hoch.addEventListener(

        "click",

        function () {

            unterkategorieVerschieben(

                hauptKey,

                unterKey,

                -1

            );
        }

    );


    const runter =
        sortierungButtonErstellen(

            "↓",

            "sortierung-pfeil-button",

            "Nach unten"

        );


    runter.disabled =
        position ===
        gruppenLaenge -
        1;


    runter.addEventListener(

        "click",

        function () {

            unterkategorieVerschieben(

                hauptKey,

                unterKey,

                1

            );
        }

    );


    zeile.appendChild(
        stern
    );


    zeile.appendChild(
        name
    );


    zeile.appendChild(
        hoch
    );


    zeile.appendChild(
        runter
    );


    return zeile;
}


// ======================================================
// HAUPTKATEGORIEN-SORTIERUNG ANZEIGEN
// ======================================================

function hauptSortierungAnzeigen() {

    hauptSortierungListe.innerHTML =
        "";


    const sortiert =
        sortierteHauptkategorieSchluessel();


    const favoriten =
        sortiert.filter(

            function (key) {

                return navigation.hauptFavoriten.includes(
                    key
                );
            }

        );


    const normal =
        sortiert.filter(

            function (key) {

                return !navigation.hauptFavoriten.includes(
                    key
                );
            }

        );


    if (
        favoriten.length >
        0
    ) {

        hauptSortierungListe.appendChild(

            sortierungGruppenTitelErstellen(
                "★ Favoriten"
            )

        );


        favoriten.forEach(

            function (
                key,
                index
            ) {

                hauptSortierungListe.appendChild(

                    hauptSortierungsZeileErstellen(

                        key,

                        index,

                        favoriten.length

                    )

                );
            }

        );
    }


    if (
        normal.length >
        0
    ) {

        hauptSortierungListe.appendChild(

            sortierungGruppenTitelErstellen(

                favoriten.length >
                    0

                    ? "Weitere Kategorien"

                    : "Kategorien"

            )

        );


        normal.forEach(

            function (
                key,
                index
            ) {

                hauptSortierungListe.appendChild(

                    hauptSortierungsZeileErstellen(

                        key,

                        index,

                        normal.length

                    )

                );
            }

        );
    }
}


// ======================================================
// UNTERKATEGORIEN-SORTIERUNG ANZEIGEN
// ======================================================

function unterSortierungAnzeigen() {

    unterSortierungListe.innerHTML =
        "";


    const hauptKey =
        hauptkategorie.value;


    const haupt =
        hauptkategorien[
            hauptKey
        ];


    if (!haupt) {

        return;
    }


    const sortiert =
        sortierteUnterkategorieSchluessel(
            hauptKey
        );


    const favoritenListe =
        navigation.unterFavoriten[
            hauptKey
        ] ||
        [];


    const favoriten =
        sortiert.filter(

            function (key) {

                return favoritenListe.includes(
                    key
                );
            }

        );


    const normal =
        sortiert.filter(

            function (key) {

                return !favoritenListe.includes(
                    key
                );
            }

        );


    if (
        favoriten.length >
        0
    ) {

        unterSortierungListe.appendChild(

            sortierungGruppenTitelErstellen(
                "★ Favoriten"
            )

        );


        favoriten.forEach(

            function (
                key,
                index
            ) {

                unterSortierungListe.appendChild(

                    unterSortierungsZeileErstellen(

                        hauptKey,

                        key,

                        index,

                        favoriten.length

                    )

                );
            }

        );
    }


    if (
        normal.length >
        0
    ) {

        unterSortierungListe.appendChild(

            sortierungGruppenTitelErstellen(

                favoriten.length >
                    0

                    ? "Weitere Unterkategorien"

                    : "Unterkategorien"

            )

        );


        normal.forEach(

            function (
                key,
                index
            ) {

                unterSortierungListe.appendChild(

                    unterSortierungsZeileErstellen(

                        hauptKey,

                        key,

                        index,

                        normal.length

                    )

                );
            }

        );
    }
}


// ======================================================
// SORTIER-PANEL AUF-/ZUKLAPPEN
// ======================================================

function sortierungPanelUmschalten(
    panel,
    toggle,
    anzeigenFunktion
) {

    const wirdGeoeffnet =
        panel.classList.contains(
            "versteckt"
        );


    panel.classList.toggle(
        "versteckt",
        !wirdGeoeffnet
    );


    toggle.setAttribute(
        "aria-expanded",
        String(
            wirdGeoeffnet
        )
    );


    toggle.textContent =

        wirdGeoeffnet

            ? "▲ Reihenfolge schließen"

            : "⚙ Reihenfolge anpassen";


    if (
        wirdGeoeffnet
    ) {

        anzeigenFunktion();
    }
}


// ======================================================
// ANFORDERUNGEN ANZEIGEN
// ======================================================

function anforderungenAnzeigen() {

    const daten =
        unterkategorieDatenHolen();


    const besondersEmpfohleneAnforderungen =
        empfohleneAnforderungenHolen();


    anforderungenContainer.innerHTML =
        "";


    if (daten.anforderungen.length === 0) {
        leereEmpfehlungAnzeigen(
            anforderungenContainer,
            "Für diesen Pfad sind noch keine Anforderungen hinterlegt."
        );

        return;
    }


    daten.anforderungen.forEach(

        function (anforderung) {

            const chip =
                document.createElement(
                    "button"
                );


            chip.type =
                "button";


            chip.classList.add(
                "chip"
            );


            const istAktiv =
                aktiveAnforderungen.includes(
                    anforderung
                );


            const istBesondersEmpfohlen =
                besondersEmpfohleneAnforderungen
                    .includes(
                        anforderung
                    );


            const statusSymbole =
                [];


            if (istBesondersEmpfohlen) {
                statusSymbole.push(
                    "⭐"
                );
            }


            if (istAktiv) {
                statusSymbole.push(
                    "✓"
                );
            }


            chip.textContent =
                statusSymbole.length > 0

                    ? `${statusSymbole.join(" ")} ${anforderung}`

                    : anforderung;


            chip.dataset.besondersEmpfohlen =
                String(
                    istBesondersEmpfohlen
                );


            chip.classList.toggle(

                "aktiv",

                istAktiv

            );


            chip.setAttribute(
                "aria-pressed",
                String(
                    istAktiv
                )
            );


            chip.addEventListener(

                "click",

                function () {

                    if (
                        aktiveAnforderungen.includes(
                            anforderung
                        )
                    ) {

                        aktiveAnforderungen =
                            aktiveAnforderungen.filter(

                                function (eintrag) {

                                    return (
                                        eintrag !==
                                        anforderung
                                    );
                                }

                            );

                    } else {

                        aktiveAnforderungen.push(
                            anforderung
                        );
                    }


                    anforderungenAnzeigen();

                    promptErstellen();
                }

            );


            anforderungenContainer.appendChild(
                chip
            );
        }

    );
}


// ======================================================
// REGEL-PAKETE ANZEIGEN
// ======================================================

function regelPaketeAnzeigen(
    fokusRegel = ""
) {

    regelPaketeContainer.innerHTML =
        "";


    const empfehlungen =
        empfohleneRegelPaketeHolen();


    const besondersEmpfohleneRegeln =
        besondersEmpfohleneRegelnHolen();


    if (empfehlungen.length === 0) {
        leereEmpfehlungAnzeigen(
            regelPaketeContainer,
            "Für diesen Pfad sind noch keine Regeln hinterlegt."
        );

        return;
    }


    empfehlungen.forEach(

        function (regel) {


            const istAktiv =
                aktiveRegelPakete.includes(
                    regel
                );


            const istBesondersEmpfohlen =
                besondersEmpfohleneRegeln.includes(
                    regel
                );


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.classList.add(
                "regel-paket"
            );


            button.classList.toggle(

                "aktiv",

                istAktiv

            );


            button.dataset.besondersEmpfohlen =
                String(
                    istBesondersEmpfohlen
                );


            button.setAttribute(
                "aria-pressed",
                String(
                    istAktiv
                )
            );


            const statusTeile =
                [];


            if (istBesondersEmpfohlen) {
                statusTeile.push(
                    "besonders empfohlen"
                );
            }


            statusTeile.push(
                istAktiv
                    ? "ausgewählt"
                    : "nicht ausgewählt"
            );


            button.setAttribute(
                "aria-label",
                `${regel} – ${statusTeile.join(
                    ", "
                )}`
            );


            const titel =
                document.createElement(
                    "strong"
                );


            const statusSymbole =
                [];


            if (istBesondersEmpfohlen) {
                statusSymbole.push(
                    "⭐"
                );
            }


            if (istAktiv) {
                statusSymbole.push(
                    "✓"
                );
            }


            titel.textContent =
                statusSymbole.length > 0

                    ? `${statusSymbole.join(" ")} ${regel}`

                    : regel;


            const beschreibung =
                document.createElement(
                    "small"
                );


            if (istAktiv) {
                beschreibung.textContent =
                    istBesondersEmpfohlen

                        ? "Besonders empfohlen und ausgewählt – anklicken zum Entfernen."

                        : "Ausgewählt – anklicken zum Entfernen.";

            } else {
                beschreibung.textContent =
                    istBesondersEmpfohlen

                        ? "Besonders empfohlen – anklicken zum Übernehmen."

                        : "V2-Empfehlung – anklicken zum Übernehmen.";
            }


            button.appendChild(
                titel
            );


            button.appendChild(
                beschreibung
            );


            button.addEventListener(

                "click",

                function () {

                    if (
                        aktiveRegelPakete.includes(
                            regel
                        )
                    ) {

                        aktiveRegelPakete =
                            aktiveRegelPakete.filter(

                                function (eintrag) {

                                    return (
                                        eintrag !==
                                        regel
                                    );
                                }

                            );

                    } else {

                        aktiveRegelPakete.push(
                            regel
                        );
                    }


                    regelPaketeAnzeigen(
                        regel
                    );

                    promptErstellen();
                }

            );


            button.addEventListener(
                "keydown",
                function (event) {
                    if (
                        event.key !==
                            "Enter" &&
                        event.key !==
                            " "
                    ) {
                        return;
                    }


                    event.preventDefault();

                    button.click();
                }
            );


            regelPaketeContainer.appendChild(
                button
            );


            if (regel === fokusRegel) {
                button.focus();
            }
        }

    );
}


// ======================================================
// UNTERKATEGORIE AKTUALISIEREN
// ======================================================

function unterkategorieAktualisieren(
    auswahlZuruecksetzen = true
) {

    const daten =
        unterkategorieDatenHolen();


    empfehlungsSelectAktualisieren(
        rolle,
        daten.rollen,
        "Rolle auswählen …"
    );


    aktiveZiele =
        aktiveZiele.filter(
            function (zielText) {
                return daten.ziele.includes(
                    zielText
                );
            }
        );


    aktiveAusgabeformate =
        aktiveAusgabeformate.filter(
            function (formatText) {
                return daten.ausgabeformate.includes(
                    formatText
                );
            }
        );


    ausgabeAlsEmpfehlungenAktualisieren(
        daten.ausgabeAls
    );


    if (
        auswahlZuruecksetzen
    ) {

        aktiveAnforderungen =
            [];


        aktiveRegelPakete =
            [];
    } else {
        aktiveAnforderungen =
            aktiveAnforderungen.filter(
                function (anforderung) {
                    return daten.anforderungen.includes(
                        anforderung
                    );
                }
            );


        aktiveRegelPakete =
            aktiveRegelPakete.filter(
                function (regel) {
                    return daten.regeln.includes(
                        regel
                    );
                }
            );
    }


    kontextHinweisAktualisieren();

    zieleAnzeigen();

    anforderungenAnzeigen();

    regelPaketeAnzeigen();

    ausgabeformateAnzeigen();

    promptErstellen();
}


// ======================================================
// HAUPTKATEGORIE GEÄNDERT
// ======================================================

function hauptkategorieGeaendert() {
    unterkategorienLaden();

    v2AuswahlMerken();


    unterkategorieAktualisieren(
        true
    );
}


// ======================================================
// UNTERKATEGORIE GEÄNDERT
// ======================================================

function unterkategorieGeaendert() {
    v2AuswahlMerken();


    unterkategorieAktualisieren(
        true
    );
}


function bereichGeaendert() {
    hauptkategorienLaden();
    unterkategorienLaden();
    v2AuswahlMerken();

    bereichsparameterAnzeigen();

    unterkategorieAktualisieren(
        true
    );
}

// ======================================================
// PROMPT-QUALITÄT BEWERTEN
// ======================================================

function promptQualitaetBewerten() {

    let punkte =
        0;

    const hinweise =
        [];


    // --------------------------------------------------
    // ROLLE
    // maximal 15 Punkte
    // --------------------------------------------------

    const rollenText =
        eigeneRolle.value.trim() ||
        rolle.value.trim();


    if (
        rollenText !==
        ""
    ) {

        punkte +=
            15;

    } else {

        hinweise.push(
            "💡 Lege eine klare Rolle für die KI fest."
        );
    }


    // --------------------------------------------------
    // AUFGABE / ZIEL
    // maximal 20 Punkte
    // --------------------------------------------------

    const eigenesZielText =
        eigenesZiel.value.trim();


    if (
        eigenesZielText.length >=
        40
    ) {

        punkte +=
            20;

    } else if (
        eigenesZielText.length >=
        15
    ) {

        punkte +=
            16;

        hinweise.push(
            "💡 Das Ziel ist schon konkret. Ein paar zusätzliche Details könnten es noch präziser machen."
        );

    } else if (
        aktiveZiele.length >
        0
    ) {

        punkte +=
            10;

        hinweise.push(
            "💡 Beschreibe die Aufgabe im freien Zielfeld noch etwas genauer."
        );

    } else {

        hinweise.push(
            "⚠️ Die Aufgabe bzw. das Ziel fehlt."
        );
    }


    // --------------------------------------------------
    // KONTEXT
    // maximal 25 Punkte
    // --------------------------------------------------

    const kontextText =
        kontext.value.trim();


    if (
        kontextText.length >=
        120
    ) {

        punkte +=
            25;

    } else if (
        kontextText.length >=
        60
    ) {

        punkte +=
            18;

        hinweise.push(
            "💡 Der Kontext ist gut. Weitere konkrete Rahmenbedingungen könnten die Antwort verbessern."
        );

    } else if (
        kontextText.length >
        0
    ) {

        punkte +=
            9;

        hinweise.push(
            "💡 Ergänze mehr Kontext, zum Beispiel Ausgangssituation, Zielgruppe, vorhandene Daten oder Einschränkungen."
        );

    } else {

        hinweise.push(
            "⚠️ Kontext fehlt. Zusätzliche Hintergrundinformationen verbessern die Qualität meist deutlich."
        );
    }


    // --------------------------------------------------
    // ANFORDERUNGEN
    // maximal 15 Punkte
    // --------------------------------------------------

    const anzahlAnforderungen =
        ausgewaehlteAnforderungenHolen()
            .length;


    if (
        anzahlAnforderungen >=
        3
    ) {

        punkte +=
            15;

    } else if (
        anzahlAnforderungen ===
        2
    ) {

        punkte +=
            11;

        hinweise.push(
            "💡 Eine weitere passende Anforderung könnte den Prompt noch genauer machen."
        );

    } else if (
        anzahlAnforderungen ===
        1
    ) {

        punkte +=
            6;

        hinweise.push(
            "💡 Wähle nach Möglichkeit mehrere konkrete Anforderungen."
        );

    } else {

        hinweise.push(
            "⚠️ Es wurden noch keine Anforderungen festgelegt."
        );
    }


    // --------------------------------------------------
    // REGELN & AUSSCHLÜSSE
    // maximal 15 Punkte
    // --------------------------------------------------

    const hatRegelAuswahl =
        aktiveRegelPakete.length >
        0;

    const hatEigeneRegeln =
        eigeneRegeln.value.trim() !==
        "";


    if (
        hatRegelAuswahl &&
        hatEigeneRegeln
    ) {

        punkte +=
            15;

    } else if (
        hatRegelAuswahl
    ) {

        punkte +=
            11;

    } else if (
        hatEigeneRegeln
    ) {

        punkte +=
            8;

        hinweise.push(
            "💡 Eine passende Regel-Empfehlung kann zusätzliche Sicherheit und Präzision bringen."
        );

    } else {

        hinweise.push(
            "💡 Regeln oder Ausschlüsse helfen dabei, unerwünschte Antworten zu vermeiden."
        );
    }


    // --------------------------------------------------
    // AUSGABEFORMAT
    // maximal 10 Punkte
    // --------------------------------------------------

    if (
        ausgewaehlteAusgabeformateHolen()
            .length >
        0
    ) {

        punkte +=
            10;

    } else {

        hinweise.push(
            "⚠️ Lege ein gewünschtes Ausgabeformat fest."
        );
    }


    // --------------------------------------------------
    // MAXIMAL 100 PUNKTE
    // --------------------------------------------------

    punkte =
        Math.min(
            100,
            punkte
        );


    // --------------------------------------------------
    // BEWERTUNGSTEXT
    // --------------------------------------------------

    let bewertung =
        "Ausbaufähig";


    if (
        punkte >=
        90
    ) {

        bewertung =
            "Sehr stark";

    } else if (
        punkte >=
        75
    ) {

        bewertung =
            "Gut";

    } else if (
        punkte >=
        55
    ) {

        bewertung =
            "Solide";
    }


    qualitaetsPunkte.textContent =
        punkte;


    qualitaetsText.textContent =
        `${bewertung} · ${punkte} von 100 Punkten`;


    qualitaetsBalken.style.width =
        `${punkte}%`;


    qualitaetsHinweise.innerHTML =
        "";


    if (
        hinweise.length ===
        0
    ) {

        const eintrag =
            document.createElement(
                "div"
            );


        eintrag.textContent =
            "✅ Der Prompt enthält alle wichtigen Grundbausteine.";


        qualitaetsHinweise.appendChild(
            eintrag
        );

        return;
    }


    hinweise
        .slice(
            0,
            3
        )
        .forEach(

            function (hinweis) {

                const eintrag =
                    document.createElement(
                        "div"
                    );


                eintrag.textContent =
                    hinweis;


                qualitaetsHinweise.appendChild(
                    eintrag
                );
            }

        );
}

// ======================================================
// PROMPT ERSTELLEN
// ======================================================

function promptListenabschnittErstellen(
    titel,
    werte
) {
    const sichereWerte =
        [
            ...new Set(
                (
                    Array.isArray(werte)

                        ? werte

                        : []
                )
                    .filter(
                        function (wert) {
                            return typeof wert ===
                                "string";
                        }
                    )
                    .map(
                        function (wert) {
                            return wert.trim();
                        }
                    )
                    .filter(Boolean)
            )
        ];


    if (sichereWerte.length === 0) {
        return "";
    }


    return `${titel}:\n${
        sichereWerte.length ===
            1

            ? sichereWerte[0]

            : sichereWerte
                .map(
                    function (wert) {
                        return `- ${wert}`;
                    }
                )
                .join(
                    "\n"
                )
    }\n\n`;
}


function promptErstellen() {

    const gewaehlteRolle =

        eigeneRolle.value.trim() ||

        rolle.value ||

        "Fachexperte";


    const gewaehlteZiele =
        ausgewaehlteZieleHolen();


    if (
        gewaehlteZiele.length ===
        0
    ) {
        gewaehlteZiele.push(
            "Thema bearbeiten"
        );
    }


    let prompt =
        "";


    prompt +=
        "ROLLE:\n";


    prompt +=
        `Übernimm folgende Rolle: ${gewaehlteRolle}.\n\n`;


    prompt +=
        promptListenabschnittErstellen(
            "ZIELGRUPPE",
            ausgewaehlteZielgruppenHolen()
        );


    prompt +=
        promptListenabschnittErstellen(
            "FACH-/ERKLÄRNIVEAU",
            [
                ausgewaehltesFachniveauHolen()
            ]
        );


    prompt +=
        promptListenabschnittErstellen(
            "TONALITÄT",
            ausgewaehlteTonalitaetenHolen()
        );


    aktiveBereichsparameterEintraegeHolen()
        .forEach(
            function (eintrag) {
                prompt +=
                    promptListenabschnittErstellen(
                        eintrag.parameter.name
                            .toLocaleUpperCase(
                                "de-DE"
                            ),
                        bereichsparameterWerteHolen(
                            eintrag.parameter,
                            eintrag.status
                        )
                    );
            }
        );


    prompt +=
        "AUFGABE / ZIEL:\n";


    const mehrereZiele =
        gewaehlteZiele.length >
        1;


    prompt +=
        gewaehlteZiele
            .map(
                function (zielText) {
                    const zielOhnePunkt =
                        zielText.replace(
                            /[.!?]+$/,
                            ""
                        );


                    return `${
                        mehrereZiele

                            ? "- "

                            : ""
                    }${zielOhnePunkt}.`;
                }
            )
            .join(
                "\n"
            );


    prompt +=
        "\n\n";


    if (
        kontext.value.trim() !==
        ""
    ) {

        prompt +=
            "KONTEXT:\n";


        prompt +=
            `${kontext.value.trim()}\n\n`;
    }


    const alleAnforderungen =
        ausgewaehlteAnforderungenHolen();


    if (alleAnforderungen.length > 0) {

        prompt +=
            "ANFORDERUNGEN:\n";


        alleAnforderungen.forEach(

            function (anforderung) {

                prompt +=
                    `- ${anforderung}\n`;
            }

        );


        prompt +=
            "\n";
    }


    const alleRegeln =
        ausgewaehlteRegelnHolen();


    if (
        alleRegeln.length >
            0
    ) {

        prompt +=
            "REGELN & AUSSCHLÜSSE:\n";


        alleRegeln.forEach(

            function (regel) {

                prompt +=
                    `- ${regel}\n`;
            }

        );


        prompt +=
            "\n";
    }


    prompt +=
        "AUSGABEFORMAT:\n";


    const gewaehlteAusgabeformate =
        ausgewaehlteAusgabeformateHolen();


    if (
        gewaehlteAusgabeformate.length ===
        0
    ) {
        prompt +=
            "Erstelle die Antwort als strukturierte Antwort.";

    } else if (
        gewaehlteAusgabeformate.length ===
        1
    ) {
        prompt +=
            `Erstelle die Antwort als ${gewaehlteAusgabeformate[0]}.`;

    } else {
        prompt +=
            gewaehlteAusgabeformate
                .map(
                    function (formatText) {
                        return `- ${formatText}`;
                    }
                )
                .join(
                    "\n"
                );
    }


    if (
        ausgabeAls.value !==
        ""
    ) {
        prompt +=
            `\n\nAusgabe als: ${ausgabeAls.value}`;
    }


    promptVorschau.textContent =
    prompt;


promptQualitaetBewerten();
}


// ======================================================
// BUILDER ZURÜCKSETZEN
// ======================================================

function builderZuruecksetzen() {

    hauptkategorienLaden();

    unterkategorienLaden();

    v2AuswahlMerken();

    eigeneRolle.value =
        "";

    eigeneZielgruppe.value =
        "";

    eigeneTonalitaet.value =
        "";

    eigenesZiel.value =
        "";

    kontext.value =
        "";

    eigeneAnforderungen.value =
        "";

    eigeneRegeln.value =
        "";

    eigenesAusgabeformat.value =
        "";

    ausgabeAls.value =
        "";

    promptName.value =
        "";


    bearbeiteterPromptId =
        null;


    promptSpeichern.textContent =
        "Prompt speichern";


    bearbeitungAbbrechen.classList.add(
        "versteckt"
    );


    aktiveAnforderungen =
        [];


    aktiveZiele =
        [];


    aktiveRegelPakete =
        [];


    aktiveAusgabeformate =
        [];


    aktiveZielgruppenIds =
        [];


    aktiveTonalitaetenIds =
        [];


    bereichsparameterSitzung =
        {};


    fachniveauOptionenLaden(
        "keine-vorgabe"
    );

    zielgruppenAuswahl.open =
        false;

    zielgruppenAnzeigen();

    tonalitaetenAnzeigen();

    bereichsparameterAnzeigen();


    unterkategorieAktualisieren(
        true
    );
}


// ======================================================
// THEME
// ======================================================

function themeLaden() {

    const gespeichertesTheme =
        StorageService.themeLaden();


    const dark =
        gespeichertesTheme ===
        "dark";


    document.body.classList.toggle(
        "dark",
        dark
    );


    themeToggle.textContent =

        dark
            ? "☀️"
            : "🌙";
}


function themeUmschalten() {

    document.body.classList.toggle(
        "dark"
    );


    const dark =
        document.body.classList.contains(
            "dark"
        );


    StorageService.themeSpeichern(

        dark
            ? "dark"
            : "light"

    );


    themeToggle.textContent =

        dark
            ? "☀️"
            : "🌙";
}


// ======================================================
// STANDARDORDNER
// ======================================================

function standardOrdnerErstellen() {

    if (
        ordner.length >
        0
    ) {

        return;
    }


    ordner.push({

        id:
            neueId(),

        name:
            "Bild & visuelle Medien",

        icon:
            "🖼️",

        farbe:
            "#7c3aed"

    });


    ordnerSpeichernLokal();
}


// ======================================================
// ORDNER-ICONS LADEN
// ======================================================

function ordnerIconsLaden() {

    ordnerIcon.innerHTML =
        "";


    ordnerIcons.forEach(

        function (eintrag) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                eintrag[
                    0
                ];


            option.textContent =
                `${eintrag[0]} ${eintrag[1]}`;


            ordnerIcon.appendChild(
                option
            );
        }

    );
}


// ======================================================
// ORDNER-AUSWAHL AKTUALISIEREN
// ======================================================

function ordnerAuswahlAktualisieren() {

    const aktuelleSpeicherAuswahl =
        speicherOrdner.value;


    const aktuelleFilterAuswahl =
        ordnerFilter.value;


    speicherOrdner.innerHTML =
        "";


    const ohneOrdner =
        document.createElement(
            "option"
        );


    ohneOrdner.value =
        "";


    ohneOrdner.textContent =
        "📄 Ohne Ordner";


    speicherOrdner.appendChild(
        ohneOrdner
    );


    ordner.forEach(

        function (eintrag) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                eintrag.id;


            option.textContent =
                `${eintrag.icon} ${eintrag.name}`;


            speicherOrdner.appendChild(
                option
            );
        }

    );


    if (
        [
            ...speicherOrdner.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    aktuelleSpeicherAuswahl
                );
            }

        )
    ) {

        speicherOrdner.value =
            aktuelleSpeicherAuswahl;
    }


    ordnerFilter.innerHTML =
        "";


    const alle =
        document.createElement(
            "option"
        );


    alle.value =
        "alle";


    alle.textContent =
        "📚 Alle Ordner";


    ordnerFilter.appendChild(
        alle
    );


    const ohne =
        document.createElement(
            "option"
        );


    ohne.value =
        "ohne";


    ohne.textContent =
        "📄 Ohne Ordner";


    ordnerFilter.appendChild(
        ohne
    );


    ordner.forEach(

        function (eintrag) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                eintrag.id;


            option.textContent =
                `${eintrag.icon} ${eintrag.name}`;


            ordnerFilter.appendChild(
                option
            );
        }

    );


    if (
        [
            ...ordnerFilter.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    aktuelleFilterAuswahl
                );
            }

        )
    ) {

        ordnerFilter.value =
            aktuelleFilterAuswahl;
    }
}


// ======================================================
// ORDNER ANZEIGEN
// ======================================================

function ordnerAnzeigen() {

    ordnerListe.innerHTML =
        "";


    ordner.forEach(

        function (eintrag) {

            const zeile =
                document.createElement(
                    "div"
                );


            zeile.classList.add(
                "ordner-eintrag"
            );


            const symbol =
                document.createElement(
                    "div"
                );


            symbol.classList.add(
                "ordner-symbol"
            );


            symbol.style.backgroundColor =
                eintrag.farbe;


            symbol.textContent =
                eintrag.icon;


            const name =
                document.createElement(
                    "div"
                );


            name.classList.add(
                "ordner-name"
            );


            name.textContent =
                eintrag.name;


            const aktionen =
                document.createElement(
                    "div"
                );


            aktionen.classList.add(
                "ordner-aktionen"
            );


            const bearbeiten =
                document.createElement(
                    "button"
                );


            bearbeiten.classList.add(
                "mini-button"
            );


            bearbeiten.textContent =
                "✏️";


            bearbeiten.title =
                "Ordner bearbeiten";


            bearbeiten.addEventListener(

                "click",

                function () {

                    ordnerBearbeiten(
                        eintrag.id
                    );
                }

            );


            const loeschen =
                document.createElement(
                    "button"
                );


            loeschen.classList.add(
                "mini-button"
            );


            loeschen.textContent =
                "🗑️";


            loeschen.title =
                "Ordner löschen";


            loeschen.addEventListener(

                "click",

                function () {

                    ordnerLoeschen(
                        eintrag.id
                    );
                }

            );


            aktionen.appendChild(
                bearbeiten
            );


            aktionen.appendChild(
                loeschen
            );


            zeile.appendChild(
                symbol
            );


            zeile.appendChild(
                name
            );


            zeile.appendChild(
                aktionen
            );


            ordnerListe.appendChild(
                zeile
            );
        }

    );


    ordnerAuswahlAktualisieren();
}


// ======================================================
// ORDNER-FORMULAR ZURÜCKSETZEN
// ======================================================

function ordnerFormularZuruecksetzen() {

    bearbeiteterOrdnerId =
        null;


    ordnerName.value =
        "";


    if (
        [
            ...ordnerIcon.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    "🖼️"
                );
            }

        )
    ) {

        ordnerIcon.value =
            "🖼️";
    }


    ordnerFarbe.value =
        "#7c3aed";


    farbeWert.textContent =
        "#7c3aed";


    ordnerSpeichern.textContent =
        "Ordner erstellen";


    ordnerAbbrechen.classList.add(
        "versteckt"
    );
}


// ======================================================
// ORDNER BEARBEITEN
// ======================================================

function ordnerBearbeiten(
    id
) {

    const eintrag =
        ordner.find(

            function (ordnerEintrag) {

                return (
                    ordnerEintrag.id ===
                    id
                );
            }

        );


    if (!eintrag) {

        return;
    }


    bearbeiteterOrdnerId =
        id;


    ordnerName.value =
        eintrag.name;


    ordnerIcon.value =
        eintrag.icon;


    ordnerFarbe.value =
        eintrag.farbe;


    farbeWert.textContent =
        eintrag.farbe;


    ordnerSpeichern.textContent =
        "Änderungen speichern";


    ordnerAbbrechen.classList.remove(
        "versteckt"
    );
}


// ======================================================
// ORDNER LÖSCHEN
// ======================================================

function ordnerLoeschen(
    id
) {

    const eintrag =
        ordner.find(

            function (ordnerEintrag) {

                return (
                    ordnerEintrag.id ===
                    id
                );
            }

        );


    if (!eintrag) {

        return;
    }


    const verwendetePrompts =
        gespeichertePrompts.filter(

            function (prompt) {

                return (
                    prompt.ordnerId ===
                    id
                );
            }

        );


    let nachricht =
        `Ordner "${eintrag.name}" wirklich löschen?`;


    if (
        verwendetePrompts.length >
        0
    ) {

        nachricht +=
            `\n\n${verwendetePrompts.length} gespeicherte Prompts werden NICHT gelöscht. ` +
            `Sie werden in "Ohne Ordner" verschoben.`;
    }


    if (
        !confirm(
            nachricht
        )
    ) {

        return;
    }


    gespeichertePrompts.forEach(

        function (prompt) {

            if (
                prompt.ordnerId ===
                id
            ) {

                prompt.ordnerId =
                    "";
            }
        }

    );


    ordner =
        ordner.filter(

            function (ordnerEintrag) {

                return (
                    ordnerEintrag.id !==
                    id
                );
            }

        );


    ordnerSpeichernLokal();

    promptsSpeichernLokal();

    ordnerAnzeigen();

    bibliothekAnzeigen();
}


// ======================================================
// BUILDER-DATEN HOLEN
// ======================================================

function builderDatenHolen() {

    return {

        bereichId:
            bereichAuswahl.value,

        hauptkategorieId:
            hauptkategorie.disabled

                ? null

                : hauptkategorie.value,

        unterkategorieId:
            unterkategorie.disabled

                ? null

                : unterkategorie.value,

        hauptkategorie:
            hauptkategorie.disabled

                ? null

                : hauptkategorie.value,

        unterkategorie:
            unterkategorie.disabled

                ? null

                : unterkategorie.value,

        zielgruppenIds:
            [
                ...aktiveZielgruppenIds
            ],

        eigeneZielgruppe:
            eigeneZielgruppe.value,

        fachniveauId:
            fachniveau.value ===
                "keine-vorgabe"

                ? ""

                : fachniveau.value,

        tonalitaetenIds:
            [
                ...aktiveTonalitaetenIds
            ],

        eigeneTonalitaet:
            eigeneTonalitaet.value,

        bereichsparameter:
            bereichsparameterSpeicherdatenHolen(),

        rolle:
            rolle.value,

        eigeneRolle:
            eigeneRolle.value,

        ziele:
            [
                ...aktiveZiele
            ],

        ziel:
            aktiveZiele[0] ||
            "",

        eigenesZiel:
            eigenesZiel.value,

        kontext:
            kontext.value,

        anforderungen:
            [
                ...aktiveAnforderungen
            ],

        eigeneAnforderungen:
            eigeneAnforderungen.value,

        regelPakete:
            [
                ...aktiveRegelPakete
            ],

        eigeneRegeln:
            eigeneRegeln.value,

        ausgabeformate:
            [
                ...aktiveAusgabeformate
            ],

        ausgabeformat:
            aktiveAusgabeformate[0] ||
            "",

        eigenesAusgabeformat:
            eigenesAusgabeformat.value,

        ausgabeAls:
            ausgabeAls.value,

        promptText:
            promptVorschau.textContent

    };
}


// ======================================================
// PROMPT SPEICHERN
// ======================================================

function promptSpeichernAusfuehren() {

    const name =
        promptName.value.trim();


    if (
        name ===
        ""
    ) {

        alert(
            "Bitte gib dem Prompt zuerst einen Namen."
        );


        promptName.focus();

        return;
    }


    const builderDaten =
        builderDatenHolen();


    if (
        bearbeiteterPromptId
    ) {

        const eintrag =
            gespeichertePrompts.find(

                function (prompt) {

                    return (
                        prompt.id ===
                        bearbeiteterPromptId
                    );
                }

            );


        if (
            eintrag
        ) {

            const favorit =
                eintrag.favorit;


            const erstelltAm =
                eintrag.erstelltAm;


            Object.assign(

                eintrag,

                builderDaten,

                {

                    name:
                        name,

                    ordnerId:
                        speicherOrdner.value,

                    favorit:
                        favorit,

                    erstelltAm:
                        erstelltAm,

                    geaendertAm:
                        new Date()
                            .toISOString()

                }

            );
        }


        speicherMeldung.textContent =
            "Änderungen gespeichert ✓";

    } else {

        gespeichertePrompts.push({

            id:
                neueId(),

            name:
                name,

            ordnerId:
                speicherOrdner.value,

            favorit:
                false,

            erstelltAm:
                new Date()
                    .toISOString(),

            geaendertAm:
                new Date()
                    .toISOString(),

            ...builderDaten

        });


        speicherMeldung.textContent =
            "Prompt gespeichert ✓";
    }


    promptsSpeichernLokal();


    bearbeiteterPromptId =
        null;


    promptSpeichern.textContent =
        "Prompt speichern";


    bearbeitungAbbrechen.classList.add(
        "versteckt"
    );


    bibliothekAnzeigen();


    setTimeout(

        function () {

            speicherMeldung.textContent =
                "";
        },

        2200

    );
}


// ======================================================
// PROMPT BEARBEITEN
// ======================================================

function gespeicherteAuswahlwerteHolen(
    eintrag,
    arrayFeld,
    einzelFeld
) {
    const werte =
        [];


    if (
        Array.isArray(
            eintrag[arrayFeld]
        )
    ) {
        werte.push(
            ...eintrag[arrayFeld]
        );
    }


    if (
        typeof eintrag[einzelFeld] ===
            "string"
    ) {
        werte.push(
            eintrag[einzelFeld]
        );
    }


    return [
        ...new Set(
            werte
                .filter(
                    function (wert) {
                        return typeof wert ===
                            "string";
                    }
                )
                .map(
                    function (wert) {
                        return wert.trim();
                    }
                )
                .filter(Boolean)
        )
    ];
}


function freitextMitAuswahlresten(
    freitext,
    auswahlreste,
    trennzeichen
) {
    return [
        ...new Set([
            String(freitext || "")
                .trim(),
            ...auswahlreste
        ].filter(Boolean))
    ].join(
        trennzeichen
    );
}

function promptBearbeiten(
    id
) {

    const eintrag =
        gespeichertePrompts.find(

            function (prompt) {

                return (
                    prompt.id ===
                    id
                );
            }

        );


    if (!eintrag) {

        return;
    }


    bearbeiteterPromptId =
        id;


    promptName.value =
        eintrag.name;


    const istV2Prompt =
        typeof eintrag.bereichId ===
            "string";


    if (istV2Prompt) {
        const bereichIstAktiv =
            [
                ...bereichAuswahl.options
            ].some(
                function (option) {
                    return (
                        option.value ===
                        eintrag.bereichId
                    );
                }
            );


        if (bereichIstAktiv) {
            bereichAuswahl.value =
                eintrag.bereichId;

            bereichAuswahl.dispatchEvent(
                new Event(
                    "change"
                )
            );
        }


        hauptkategorienLaden(
            eintrag.hauptkategorieId ||
            null
        );

        unterkategorienLaden(
            eintrag.unterkategorieId ||
            null
        );
    } else {
        // Alte Testprompts erhalten einen sauberen V2-Fallback.
        hauptkategorienLaden();
        unterkategorienLaden();
    }


    v2AuswahlMerken();


    aktiveZielgruppenIds =
        querschnittIdsBereinigen(
            "zielgruppen",
            eintrag.zielgruppenIds
        );

    eigeneZielgruppe.value =
        typeof eintrag.eigeneZielgruppe ===
            "string"

            ? eintrag.eigeneZielgruppe

            : "";

    fachniveauOptionenLaden(
        typeof eintrag.fachniveauId ===
            "string"

            ? eintrag.fachniveauId

            : ""
    );

    aktiveTonalitaetenIds =
        querschnittIdsBereinigen(
            "tonalitaeten",
            eintrag.tonalitaetenIds
        );

    eigeneTonalitaet.value =
        typeof eintrag.eigeneTonalitaet ===
            "string"

            ? eintrag.eigeneTonalitaet

            : "";

    bereichsparameterAusEintragWiederherstellen(
        eintrag
    );

    zielgruppenAnzeigen();

    tonalitaetenAnzeigen();

    bereichsparameterAnzeigen();


    unterkategorieAktualisieren(
        true
    );


    const rolleIstVerfuegbar =
        [
            ...rolle.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    eintrag.rolle
                );
            }

        );


    if (rolleIstVerfuegbar) {

        rolle.value =
            eintrag.rolle;
    }


    eigeneRolle.value =
        eintrag.eigeneRolle ||
        (
            !rolleIstVerfuegbar &&
            eintrag.rolle

                ? eintrag.rolle

                : ""
        );


    const aktuelleEmpfehlungen =
        unterkategorieDatenHolen();


    const gespeicherteZiele =
        gespeicherteAuswahlwerteHolen(
            eintrag,
            "ziele",
            "ziel"
        );


    aktiveZiele =
        gespeicherteZiele.filter(
            function (zielText) {
                return aktuelleEmpfehlungen
                    .ziele
                    .includes(
                        zielText
                    );
            }
        );


    eigenesZiel.value =
        freitextMitAuswahlresten(
            eintrag.eigenesZiel,
            gespeicherteZiele.filter(
                function (zielText) {
                    return !aktuelleEmpfehlungen
                        .ziele
                        .includes(
                            zielText
                        );
                }
            ),
            "\n"
        );


    kontext.value =
        eintrag.kontext ||
        "";


    const gespeicherteAnforderungen =
        Array.isArray(eintrag.anforderungen)

            ? eintrag.anforderungen

            : [];


    aktiveAnforderungen =
        gespeicherteAnforderungen.filter(
            function (anforderung) {
                return aktuelleEmpfehlungen
                    .anforderungen
                    .includes(
                        anforderung
                    );
            }
        );


    eigeneAnforderungen.value =
        [
            ...new Set([
                ...mehrzeiligeEingabeTeilen(
                    eintrag.eigeneAnforderungen
                ),
                ...gespeicherteAnforderungen.filter(
                    function (anforderung) {
                        return !aktuelleEmpfehlungen
                            .anforderungen
                            .includes(
                                anforderung
                            );
                    }
                )
            ])
        ].join("\n");


    const gespeicherteRegeln =
        Array.isArray(eintrag.regelPakete)

            ? eintrag.regelPakete

            : [];

    const eigeneRegelTexte =
        mehrzeiligeEingabeTeilen(
            eintrag.eigeneRegeln
        );


    aktiveRegelPakete =
        [];


    gespeicherteRegeln.forEach(
        function (regelAuswahl) {

            if (
                aktuelleEmpfehlungen.regeln.includes(
                    regelAuswahl
                )
            ) {
                aktiveRegelPakete.push(
                    regelAuswahl
                );

                return;
            }


            if (
                typeof regelPakete !== "undefined" &&
                regelPakete[regelAuswahl]
            ) {
                eigeneRegelTexte.push(
                    ...regelPakete[regelAuswahl].regeln
                );

                return;
            }


            if (
                typeof regelAuswahl === "string" &&
                regelAuswahl.trim() !== ""
            ) {
                eigeneRegelTexte.push(
                    regelAuswahl.trim()
                );
            }
        }
    );


    eigeneRegeln.value =
        [
            ...new Set(
                eigeneRegelTexte
            )
        ].join("\n");


    const gespeicherteAusgabeformate =
        gespeicherteAuswahlwerteHolen(
            eintrag,
            "ausgabeformate",
            "ausgabeformat"
        );


    aktiveAusgabeformate =
        gespeicherteAusgabeformate.filter(
            function (formatText) {
                return aktuelleEmpfehlungen
                    .ausgabeformate
                    .includes(
                        formatText
                    );
            }
        );


    eigenesAusgabeformat.value =
        freitextMitAuswahlresten(
            eintrag.eigenesAusgabeformat,
            gespeicherteAusgabeformate.filter(
                function (formatText) {
                    return !aktuelleEmpfehlungen
                        .ausgabeformate
                        .includes(
                            formatText
                        );
                }
            ),
            "; "
        );


    ausgabeAls.value =
        [
            ...ausgabeAls.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    eintrag.ausgabeAls
                );
            }

        )

            ? eintrag.ausgabeAls

            : "";


    speicherOrdner.value =
        eintrag.ordnerId ||
        "";


    kontextHinweisAktualisieren();

    zieleAnzeigen();

    anforderungenAnzeigen();

    regelPaketeAnzeigen();

    ausgabeformateAnzeigen();

    promptErstellen();


    promptSpeichern.textContent =
        "Änderungen speichern";


    bearbeitungAbbrechen.classList.remove(
        "versteckt"
    );


    window.scrollTo({

        top:
            0,

        behavior:
            "smooth"

    });
}


// ======================================================
// PROMPT-FAVORIT
// ======================================================

function favoritUmschalten(
    id
) {

    const eintrag =
        gespeichertePrompts.find(

            function (prompt) {

                return (
                    prompt.id ===
                    id
                );
            }

        );


    if (!eintrag) {

        return;
    }


    eintrag.favorit =
        !eintrag.favorit;


    promptsSpeichernLokal();

    bibliothekAnzeigen();
}


// ======================================================
// PROMPT LÖSCHEN
// ======================================================

function promptLoeschen(
    id
) {

    const eintrag =
        gespeichertePrompts.find(

            function (prompt) {

                return (
                    prompt.id ===
                    id
                );
            }

        );


    if (!eintrag) {

        return;
    }


    if (
        !confirm(
            `Prompt "${eintrag.name}" wirklich löschen?`
        )
    ) {

        return;
    }


    gespeichertePrompts =
        gespeichertePrompts.filter(

            function (prompt) {

                return (
                    prompt.id !==
                    id
                );
            }

        );


    if (
        bearbeiteterPromptId ===
        id
    ) {

        builderZuruecksetzen();
    }


    promptsSpeichernLokal();

    bibliothekAnzeigen();
}


// ======================================================
// PROMPT KOPIEREN
// ======================================================

async function gespeichertenPromptKopieren(
    id
) {

    const eintrag =
        gespeichertePrompts.find(

            function (prompt) {

                return (
                    prompt.id ===
                    id
                );
            }

        );


    if (!eintrag) {

        return;
    }


    try {

        await navigator.clipboard.writeText(
            eintrag.promptText
        );


        speicherMeldung.textContent =
            `"${eintrag.name}" kopiert ✓`;


        setTimeout(

            function () {

                speicherMeldung.textContent =
                    "";
            },

            1800

        );

    } catch (fehler) {

        alert(
            "Der Prompt konnte nicht kopiert werden."
        );
    }
}


// ======================================================
// ORDNER FINDEN
// ======================================================

function ordnerFinden(
    id
) {

    return ordner.find(

        function (eintrag) {

            return (
                eintrag.id ===
                id
            );
        }

    );
}


// ======================================================
// PROMPT-KATEGORIE HOLEN
// ======================================================

function gespeichertenPromptKategorieHolen(
    prompt
) {

    if (
        typeof prompt.bereichId ===
            "string" &&
        v2Daten &&
        typeof v2Daten.pfadAufloesen ===
            "function"
    ) {
        const pfad =
            v2Daten.pfadAufloesen(
                prompt.bereichId,
                prompt.hauptkategorieId,
                prompt.unterkategorieId
            );


        return {
            hauptName:
                pfad.hauptkategorie

                    ? pfad.hauptkategorie.name

                    : "Noch keine Hauptkategorie",
            hauptIcon:
                pfad.bereich &&
                pfad.bereich.icon

                    ? pfad.bereich.icon

                    : "📄",
            unterName:
                pfad.unterkategorie

                    ? pfad.unterkategorie.name

                    : ""
        };
    }

    const hauptKey =

        prompt.hauptkategorie ||

        "bild";


    const haupt =
        hauptkategorien[
            hauptKey
        ];


    if (!haupt) {

        return {

            hauptName:
                "Unbekannte Kategorie",

            hauptIcon:
                "📄",

            unterName:
                ""

        };
    }


    const unter =
        haupt.unterkategorien[
            prompt.unterkategorie
        ];


    return {

        hauptName:
            haupt.name,

        hauptIcon:
            haupt.icon,

        unterName:
            unter
                ? unter.name
                : ""

    };
}


// ======================================================
// BIBLIOTHEK ANZEIGEN
// ======================================================

function bibliothekAnzeigen() {

    bibliothekListe.innerHTML =
        "";


    const suchText =
        suche.value
            .trim()
            .toLowerCase();


    const filter =
        ordnerFilter.value;


    const gefiltertePrompts =

        gespeichertePrompts

            .filter(

                function (prompt) {

                    const kategorie =
                        gespeichertenPromptKategorieHolen(
                            prompt
                        );


                    const suchBereich =

                        [
                            prompt.name,
                            prompt.promptText,
                            kategorie.hauptName,
                            kategorie.unterName,
                            prompt.rolle,
                            prompt.eigeneRolle,
                            ...(
                                Array.isArray(
                                    prompt.ziele
                                )

                                    ? prompt.ziele

                                    : []
                            ),
                            prompt.ziel,
                            prompt.eigenesZiel,
                            ...(
                                Array.isArray(
                                    prompt.ausgabeformate
                                )

                                    ? prompt.ausgabeformate

                                    : []
                            ),
                            prompt.ausgabeformat,
                            prompt.eigenesAusgabeformat
                        ]

                            .filter(
                                Boolean
                            )

                            .join(
                                " "
                            )

                            .toLowerCase();


                    if (
                        suchText !==
                            "" &&
                        !suchBereich.includes(
                            suchText
                        )
                    ) {

                        return false;
                    }


                    if (
                        filter ===
                            "ohne" &&
                        prompt.ordnerId !==
                            ""
                    ) {

                        return false;
                    }


                    if (
                        filter !==
                            "alle" &&
                        filter !==
                            "ohne" &&
                        prompt.ordnerId !==
                            filter
                    ) {

                        return false;
                    }


                    if (
                        nurFavoriten &&
                        !prompt.favorit
                    ) {

                        return false;
                    }


                    return true;
                }

            )

            .sort(

                function (
                    a,
                    b
                ) {

                    return (

                        new Date(
                            b.geaendertAm ||
                            b.erstelltAm
                        ) -

                        new Date(
                            a.geaendertAm ||
                            a.erstelltAm
                        )

                    );
                }

            );


    anzahlPrompts.textContent =

        `${gefiltertePrompts.length} ${
            gefiltertePrompts.length ===
            1
                ? "Prompt"
                : "Prompts"
        }`;


    if (
        gefiltertePrompts.length ===
        0
    ) {

        const leer =
            document.createElement(
                "div"
            );


        leer.classList.add(
            "leer-zustand"
        );


        const titel =
            document.createElement(
                "strong"
            );


        titel.textContent =
            "Noch nichts gefunden.";


        const text =
            document.createElement(
                "span"
            );


        text.textContent =
            "Speichere deinen ersten Prompt oder ändere den Filter.";


        leer.appendChild(
            titel
        );


        leer.appendChild(
            text
        );


        bibliothekListe.appendChild(
            leer
        );


        return;
    }


    gefiltertePrompts.forEach(

        function (prompt) {

            const kategorie =
                gespeichertenPromptKategorieHolen(
                    prompt
                );


            const zugehoerigerOrdner =
                ordnerFinden(
                    prompt.ordnerId
                );


            const farbe =

                zugehoerigerOrdner

                    ? zugehoerigerOrdner.farbe

                    : "#64748b";


            const icon =

                zugehoerigerOrdner

                    ? zugehoerigerOrdner.icon

                    : kategorie.hauptIcon;


            const ordnerNameText =

                zugehoerigerOrdner

                    ? zugehoerigerOrdner.name

                    : "Ohne Ordner";


            const karte =
                document.createElement(
                    "article"
                );


            karte.classList.add(
                "prompt-karte"
            );


            const balken =
                document.createElement(
                    "div"
                );


            balken.classList.add(
                "prompt-farbbalken"
            );


            balken.style.backgroundColor =
                farbe;


            const kopf =
                document.createElement(
                    "div"
                );


            kopf.classList.add(
                "prompt-kopf"
            );


            const iconBox =
                document.createElement(
                    "div"
                );


            iconBox.classList.add(
                "prompt-icon"
            );


            iconBox.style.backgroundColor =
                farbe;


            iconBox.textContent =
                icon;


            const titelBereich =
                document.createElement(
                    "div"
                );


            titelBereich.classList.add(
                "prompt-titel-bereich"
            );


            const titel =
                document.createElement(
                    "h3"
                );


            titel.classList.add(
                "prompt-titel"
            );


            titel.textContent =
                prompt.name;


            const untertitel =
                document.createElement(
                    "div"
                );


            untertitel.classList.add(
                "prompt-untertitel"
            );


            untertitel.textContent =
                `${ordnerNameText} · ${kategorie.hauptIcon} ${kategorie.hauptName} · ${kategorie.unterName}`;


            titelBereich.appendChild(
                titel
            );


            titelBereich.appendChild(
                untertitel
            );


            const favorit =
                document.createElement(
                    "button"
                );


            favorit.classList.add(
                "favorit-button"
            );


            favorit.title =
                "Favorit";


            favorit.textContent =

                prompt.favorit

                    ? "★"

                    : "☆";


            favorit.classList.toggle(

                "aktiv",

                Boolean(
                    prompt.favorit
                )

            );


            favorit.addEventListener(

                "click",

                function () {

                    favoritUmschalten(
                        prompt.id
                    );
                }

            );


            kopf.appendChild(
                iconBox
            );


            kopf.appendChild(
                titelBereich
            );


            kopf.appendChild(
                favorit
            );


            const vorschauText =
                document.createElement(
                    "div"
                );


            vorschauText.classList.add(
                "prompt-vorschautext"
            );


            vorschauText.textContent =
                prompt.promptText;


            const meta =
                document.createElement(
                    "div"
                );


            meta.classList.add(
                "prompt-meta"
            );


            const rollenChip =
                document.createElement(
                    "span"
                );


            rollenChip.classList.add(
                "meta-chip"
            );


            rollenChip.textContent =

                prompt.eigeneRolle ||

                prompt.rolle ||

                "Keine Rolle";


            const formatChip =
                document.createElement(
                    "span"
                );


            formatChip.classList.add(
                "meta-chip"
            );


            const gespeicherteFormate =
                gespeicherteAuswahlwerteHolen(
                    prompt,
                    "ausgabeformate",
                    "ausgabeformat"
                );


            formatChip.textContent =
                [
                    ...new Set([
                        ...gespeicherteFormate,
                        String(
                            prompt.eigenesAusgabeformat ||
                            ""
                        ).trim()
                    ].filter(Boolean))
                ].join(", ") ||
                "Kein Format";


            meta.appendChild(
                rollenChip
            );


            meta.appendChild(
                formatChip
            );


            const aktionen =
                document.createElement(
                    "div"
                );


            aktionen.classList.add(
                "prompt-aktionen"
            );


            const kopierButton =
                document.createElement(
                    "button"
                );


            kopierButton.textContent =
                "📋 Kopieren";


            kopierButton.addEventListener(

                "click",

                function () {

                    gespeichertenPromptKopieren(
                        prompt.id
                    );
                }

            );


            const bearbeitenButton =
                document.createElement(
                    "button"
                );


            bearbeitenButton.textContent =
                "✏️ Bearbeiten";


            bearbeitenButton.classList.add(
                "sekundaer-button"
            );


            bearbeitenButton.addEventListener(

                "click",

                function () {

                    promptBearbeiten(
                        prompt.id
                    );
                }

            );


            const loeschenButton =
                document.createElement(
                    "button"
                );


            loeschenButton.textContent =
                "🗑️ Löschen";


            loeschenButton.classList.add(
                "loeschen-button"
            );


            loeschenButton.addEventListener(

                "click",

                function () {

                    promptLoeschen(
                        prompt.id
                    );
                }

            );


            aktionen.appendChild(
                kopierButton
            );


            aktionen.appendChild(
                bearbeitenButton
            );


            aktionen.appendChild(
                loeschenButton
            );


            karte.appendChild(
                balken
            );


            karte.appendChild(
                kopf
            );


            karte.appendChild(
                vorschauText
            );


            karte.appendChild(
                meta
            );


            karte.appendChild(
                aktionen
            );


            bibliothekListe.appendChild(
                karte
            );
        }

    );
}

// ======================================================
// BACKUP EXPORTIEREN
// ======================================================

function backupExportieren() {

    try {

        const daten =
            StorageService.alleDatenLaden();


        const json =
            JSON.stringify(
                daten,
                null,
                2
            );


        const datei =
            new Blob(
                [json],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(
                datei
            );


        const jetzt =
            new Date();


        const datum =
            jetzt
                .toISOString()
                .slice(
                    0,
                    10
                );


        const link =
            document.createElement(
                "a"
            );


        link.href =
            url;


        link.download =
            `PromptWerkstatt_Backup_${datum}.json`;


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url
        );


        backupMeldung.textContent =
            "Backup wurde exportiert ✓";


        setTimeout(

            function () {

                backupMeldung.textContent =
                    "";
            },

            2500

        );

    } catch (fehler) {

        console.error(
            "Backup konnte nicht exportiert werden:",
            fehler
        );


        backupMeldung.textContent =
            "Backup konnte nicht exportiert werden.";
    }
}


// ======================================================
// EVENT: BACKUP EXPORTIEREN
// ======================================================

backupExport.addEventListener(

    "click",

    backupExportieren

);

// ======================================================
// BACKUP IMPORTIEREN
// ======================================================

async function backupImportieren(
    datei
) {

    try {

        if (!datei) {

            return;
        }


        const text =
            await datei.text();


        const importDaten =
            JSON.parse(
                text
            );


        const bestaetigt =
            confirm(
                "Backup wirklich importieren?\n\n" +
                "Alle aktuell gespeicherten Prompts, Ordner, " +
                "Favoriten und Einstellungen werden durch " +
                "den Stand aus dem Backup ersetzt."
            );


        if (!bestaetigt) {

            backupDatei.value =
                "";

            return;
        }


        const ergebnis =
            StorageService.alleDatenSpeichern(
                importDaten
            );


        if (!ergebnis.erfolgreich) {

            backupMeldung.textContent =
                ergebnis.meldung;


            backupDatei.value =
                "";

            return;
        }


        backupMeldung.textContent =
            "Backup wurde wiederhergestellt ✓";


        setTimeout(

            function () {

                location.reload();
            },

            1000

        );

    } catch (fehler) {

        console.error(
            "Backup konnte nicht importiert werden:",
            fehler
        );


        backupMeldung.textContent =
            "Die ausgewählte Datei ist kein gültiges PromptWerkstatt-Backup.";


        backupDatei.value =
            "";
    }
}


// ======================================================
// EVENT: IMPORT-DATEI AUSWÄHLEN
// ======================================================

backupImport.addEventListener(

    "click",

    function () {

        // Damit dieselbe Datei später erneut
        // ausgewählt werden kann
        backupDatei.value =
            "";


        backupDatei.click();
    }

);


// ======================================================
// EVENT: IMPORT-DATEI EINLESEN
// ======================================================

backupDatei.addEventListener(

    "change",

    function () {

        const datei =
            backupDatei.files[
                0
            ];


        backupImportieren(
            datei
        );
    }

);

// ======================================================
// APP VOLLSTÄNDIG ZURÜCKSETZEN
// ======================================================

function appVollstaendigZuruecksetzen() {

    const ersteBestaetigung =
        confirm(
            "App wirklich vollständig zurücksetzen?\n\n" +
            "Dabei werden alle gespeicherten Prompts, Ordner, " +
            "Favoriten, Reihenfolgen und Einstellungen gelöscht.\n\n" +
            "Ein zuvor exportiertes Backup kann später wieder importiert werden."
        );


    if (!ersteBestaetigung) {

        return;
    }


    const sicherheitsText =
        prompt(
            "Letzte Sicherheitsabfrage:\n\n" +
            "Tippe LÖSCHEN ein, um alle App-Daten endgültig zu entfernen."
        );


    if (
        sicherheitsText !==
        "LÖSCHEN"
    ) {

        backupMeldung.textContent =
            "Zurücksetzen wurde abgebrochen.";


        setTimeout(

            function () {

                backupMeldung.textContent =
                    "";
            },

            2500

        );


        return;
    }


    StorageService.allesLoeschen();


    location.reload();
}


// ======================================================
// EVENT: APP ZURÜCKSETZEN
// ======================================================

appZuruecksetzen.addEventListener(

    "click",

    appVollstaendigZuruecksetzen

);

// ======================================================
// EVENTS: FAVORITEN
// ======================================================

hauptFavoritButton.addEventListener(

    "click",

    hauptFavoritUmschalten

);


unterFavoritButton.addEventListener(

    "click",

    unterFavoritUmschalten

);


// ======================================================
// EVENTS: SORTIER-PANELS
// ======================================================

hauptSortierungToggle.addEventListener(

    "click",

    function () {

        sortierungPanelUmschalten(

            hauptSortierungPanel,

            hauptSortierungToggle,

            hauptSortierungAnzeigen

        );
    }

);


unterSortierungToggle.addEventListener(

    "click",

    function () {

        sortierungPanelUmschalten(

            unterSortierungPanel,

            unterSortierungToggle,

            unterSortierungAnzeigen

        );
    }

);


// ======================================================
// EVENTS: KATEGORIEN
// ======================================================

hauptkategorie.addEventListener(

    "change",

    hauptkategorieGeaendert

);


unterkategorie.addEventListener(

    "change",

    unterkategorieGeaendert

);


document.addEventListener(
    "promptwerkstatt:bereich-geaendert",
    bereichGeaendert
);


// ======================================================
// EVENTS: BUILDER
// ======================================================

fachniveau.addEventListener(
    "change",
    function () {
        unterkategorieAktualisieren(
            false
        );
    }
);


eigeneZielgruppe.addEventListener(
    "input",
    promptErstellen
);


eigeneTonalitaet.addEventListener(
    "input",
    promptErstellen
);


rolle.addEventListener(
    "change",
    promptErstellen
);


eigeneRolle.addEventListener(
    "input",
    promptErstellen
);


eigenesZiel.addEventListener(
    "input",
    promptErstellen
);


kontext.addEventListener(
    "input",
    promptErstellen
);


eigeneAnforderungen.addEventListener(
    "input",
    promptErstellen
);


eigeneRegeln.addEventListener(
    "input",
    promptErstellen
);


eigenesAusgabeformat.addEventListener(
    "input",
    promptErstellen
);


ausgabeAls.addEventListener(
    "change",
    promptErstellen
);


zuruecksetzen.addEventListener(
    "click",
    builderZuruecksetzen
);


// ======================================================
// EVENTS: DARK MODE
// ======================================================

themeToggle.addEventListener(
    "click",
    themeUmschalten
);


// ======================================================
// EVENTS: PROMPT KOPIEREN
// ======================================================

kopieren.addEventListener(

    "click",

    async function () {

        try {

            await navigator.clipboard.writeText(
                promptVorschau.textContent
            );


            meldung.textContent =
                "Prompt wurde kopiert ✓";


            setTimeout(

                function () {

                    meldung.textContent =
                        "";
                },

                2000

            );

        } catch (fehler) {

            meldung.textContent =
                "Kopieren war nicht möglich.";
        }
    }

);


// ======================================================
// EVENTS: ORDNER SPEICHERN
// ======================================================

ordnerSpeichern.addEventListener(

    "click",

    function () {

        const name =
            ordnerName.value.trim();


        if (
            name ===
            ""
        ) {

            alert(
                "Bitte gib dem Ordner einen Namen."
            );

            return;
        }


        if (
            bearbeiteterOrdnerId
        ) {

            const eintrag =
                ordner.find(

                    function (ordnerEintrag) {

                        return (
                            ordnerEintrag.id ===
                            bearbeiteterOrdnerId
                        );
                    }

                );


            if (
                eintrag
            ) {

                eintrag.name =
                    name;


                eintrag.icon =
                    ordnerIcon.value;


                eintrag.farbe =
                    ordnerFarbe.value;
            }

        } else {

            ordner.push({

                id:
                    neueId(),

                name:
                    name,

                icon:
                    ordnerIcon.value,

                farbe:
                    ordnerFarbe.value

            });
        }


        ordnerSpeichernLokal();

        ordnerFormularZuruecksetzen();

        ordnerAnzeigen();

        bibliothekAnzeigen();
    }

);


// ======================================================
// EVENTS: ORDNER ABBRECHEN
// ======================================================

ordnerAbbrechen.addEventListener(

    "click",

    ordnerFormularZuruecksetzen

);


// ======================================================
// EVENTS: FARBE
// ======================================================

ordnerFarbe.addEventListener(

    "input",

    function () {

        farbeWert.textContent =
            ordnerFarbe.value;
    }

);


// ======================================================
// EVENTS: PROMPT SPEICHERN
// ======================================================

promptSpeichern.addEventListener(

    "click",

    promptSpeichernAusfuehren

);


bearbeitungAbbrechen.addEventListener(

    "click",

    builderZuruecksetzen

);


// ======================================================
// EVENTS: BIBLIOTHEK
// ======================================================

suche.addEventListener(

    "input",

    bibliothekAnzeigen

);


ordnerFilter.addEventListener(

    "change",

    bibliothekAnzeigen

);


favoritenFilter.addEventListener(

    "click",

    function () {

        nurFavoriten =
            !nurFavoriten;


        favoritenFilter.classList.toggle(

            "aktiv",

            nurFavoriten

        );


        favoritenFilter.textContent =

            nurFavoriten

                ? "★ Nur Favoriten"

                : "☆ Nur Favoriten";


        bibliothekAnzeigen();
    }

);


// ======================================================
// APP STARTEN
// ======================================================

themeLaden();


standardOrdnerErstellen();


ordnerIconsLaden();


navigationVorbereiten();


// ======================================================
// V2-NAVIGATION WIEDERHERSTELLEN
// ======================================================

alteKategorienavigationDeaktivieren();


if (
    !v2Daten ||
    typeof v2Daten.hauptkategorienFuerBereich !==
        "function" ||
    typeof v2Daten.unterkategorienFuerPfad !==
        "function"
) {
    console.error(
        "V2-Kategorienavigation: Die Daten-Registry ist unvollständig."
    );
}


hauptkategorienLaden();

unterkategorienLaden();

v2AuswahlMerken();


querschnittFelderInitialisieren();

bereichsparameterAnzeigen();


unterkategorieAktualisieren(
    true
);


ordnerAnzeigen();


bibliothekAnzeigen();

// ======================================================
// SERVICE WORKER REGISTRIEREN
// ======================================================

if (
    "serviceWorker" in navigator
) {

    window.addEventListener(

        "load",

        function () {

            navigator.serviceWorker
                .register(
                    "./service-worker.js"
                )
                .then(
                    function () {

                        console.log(
                            "Service Worker wurde registriert."
                        );
                    }
                )
                .catch(
                    function (fehler) {

                        console.error(
                            "Service Worker konnte nicht registriert werden:",
                            fehler
                        );
                    }
                );
        }

    );
}
