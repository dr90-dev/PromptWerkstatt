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

const ziel =
    document.getElementById(
        "ziel"
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

const regelPaketeContainer =
    document.getElementById(
        "regelPaketeContainer"
    );

const eigeneRegeln =
    document.getElementById(
        "eigeneRegeln"
    );

const ausgabeformat =
    document.getElementById(
        "ausgabeformat"
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

let aktiveRegelPakete =
    [];

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

    return (
        hauptkategorien[
            hauptkategorie.value
        ] ||
        null
    );
}


// ======================================================
// AKTUELLE UNTERKATEGORIE HOLEN
// ======================================================

function aktuelleUnterkategorieHolen() {

    const haupt =
        aktuelleHauptkategorieHolen();


    if (!haupt) {

        return null;
    }


    return (
        haupt.unterkategorien[
            unterkategorie.value
        ] ||
        null
    );
}


// ======================================================
// UNTERKATEGORIE-DATEN HOLEN
// ======================================================

function unterkategorieDatenHolen() {

    const daten =
        aktuelleUnterkategorieHolen();


    if (!daten) {

        return {

            name:
                "Allgemein",

            rollen: [
                "Fachexperte",
                "Berater",
                "Analyst",
                "Coach"
            ],

            ziele: [
                "Thema bearbeiten"
            ],

            anforderungen: [
                "Praxisnah antworten",
                "Wichtigste Punkte priorisieren",
                "Konkrete Beispiele geben",
                "Annahmen klar kennzeichnen"
            ],

            ausgabeformate: [
                "Schritt-für-Schritt-Anleitung",
                "Checkliste",
                "Tabelle",
                "Kurzempfehlung",
                "Ausführliche Analyse"
            ]

        };
    }


    return {

        name:
            daten.name,

        rollen:
            daten.rollen ||
            [
                "Fachexperte",
                "Berater",
                "Analyst",
                "Coach"
            ],

        ziele:
            daten.ziele ||
            [
                `${daten.name} bearbeiten`,
                `${daten.name} planen`,
                `${daten.name} analysieren`,
                `Empfehlungen zu ${daten.name} erhalten`
            ],

        anforderungen:
            daten.anforderungen ||
            [
                "Praxisnah antworten",
                "Wichtigste Punkte priorisieren",
                "Konkrete Beispiele geben",
                "Annahmen klar kennzeichnen",
                "Alternativen nennen"
            ],

        ausgabeformate:
            daten.ausgabeformate ||
            [
                "Schritt-für-Schritt-Anleitung",
                "Checkliste",
                "Tabelle",
                "Kurzempfehlung",
                "Ausführliche Analyse"
            ]

    };
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


// ======================================================
// KONTEXT-HINWEIS
// ======================================================

function kontextHinweisAktualisieren() {

    const hauptKey =
        hauptkategorie.value;

    const unterKey =
        unterkategorie.value;

    const daten =
        unterkategorieDatenHolen();


    let hinweis =
        "";


    if (
        typeof kontextHinweise !==
            "undefined" &&
        kontextHinweise[
            hauptKey
        ] &&
        kontextHinweise[
            hauptKey
        ][
            unterKey
        ]
    ) {

        hinweis =
            kontextHinweise[
                hauptKey
            ][
                unterKey
            ];

    } else {

        hinweis =
            `Beschreibe dein konkretes Ziel bei „${daten.name}“, ` +
            "die Ausgangssituation, vorhandene Informationen, " +
            "wichtige Rahmenbedingungen und besondere Einschränkungen.";
    }


    kontextHinweis.textContent =
        `💡 Hilfreicher Kontext: ${hinweis}`;
}


// ======================================================
// EMPFOHLENE ANFORDERUNGEN
// ======================================================

function empfohleneAnforderungenHolen() {

    const hauptKey =
        hauptkategorie.value;

    const unterKey =
        unterkategorie.value;


    if (
        typeof anforderungsEmpfehlungen ===
            "undefined" ||
        !anforderungsEmpfehlungen[
            hauptKey
        ] ||
        !anforderungsEmpfehlungen[
            hauptKey
        ][
            unterKey
        ]
    ) {

        return [];
    }


    return [
        ...anforderungsEmpfehlungen[
            hauptKey
        ][
            unterKey
        ]
    ];
}


// ======================================================
// EMPFOHLENE REGEL-PAKETE
// ======================================================

function empfohleneRegelPaketeHolen() {

    const hauptKey =
        hauptkategorie.value;

    const unterKey =
        unterkategorie.value;


    if (
        typeof regelEmpfehlungen ===
            "undefined" ||
        !regelEmpfehlungen[
            hauptKey
        ] ||
        !regelEmpfehlungen[
            hauptKey
        ][
            unterKey
        ]
    ) {

        return [];
    }


    return [
        ...regelEmpfehlungen[
            hauptKey
        ][
            unterKey
        ]
    ];
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

    const vorherigeAuswahl =

        arguments.length >
            0

            ? gewuenschteHauptkategorie

            : hauptkategorie.value;


    hauptkategorie.innerHTML =
        "";


    sortierteHauptkategorieSchluessel()
        .forEach(

            function (key) {

                const daten =
                    hauptkategorien[
                        key
                    ];


                const istFavorit =
                    navigation.hauptFavoriten.includes(
                        key
                    );


                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    key;


                option.textContent =

                    istFavorit

                        ? `★ ${daten.icon} ${daten.name}`

                        : `${daten.icon} ${daten.name}`;


                hauptkategorie.appendChild(
                    option
                );
            }

        );


    if (
        vorherigeAuswahl &&
        hauptkategorien[
            vorherigeAuswahl
        ]
    ) {

        hauptkategorie.value =
            vorherigeAuswahl;

    } else if (
        hauptkategorie.options.length >
        0
    ) {

        hauptkategorie.value =
            hauptkategorie.options[
                0
            ].value;
    }


    hauptFavoritButtonAktualisieren();
}


// ======================================================
// UNTERKATEGORIEN LADEN
// ======================================================

function unterkategorienLaden(
    gewuenschteUnterkategorie
) {

    const vorherigeAuswahl =

        arguments.length >
            0

            ? gewuenschteUnterkategorie

            : unterkategorie.value;


    unterkategorie.innerHTML =
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


    const favoriten =
        navigation.unterFavoriten[
            hauptKey
        ] ||
        [];


    sortierteUnterkategorieSchluessel(
        hauptKey
    ).forEach(

        function (key) {

            const daten =
                haupt.unterkategorien[
                    key
                ];


            const istFavorit =
                favoriten.includes(
                    key
                );


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                key;


            option.textContent =

                istFavorit

                    ? `★ ${daten.name}`

                    : daten.name;


            unterkategorie.appendChild(
                option
            );
        }

    );


    if (
        vorherigeAuswahl &&
        haupt.unterkategorien[
            vorherigeAuswahl
        ]
    ) {

        unterkategorie.value =
            vorherigeAuswahl;

    } else if (
        unterkategorie.options.length >
        0
    ) {

        unterkategorie.value =
            unterkategorie.options[
                0
            ].value;
    }


    unterFavoritButtonAktualisieren();
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


    const empfehlungen =
        empfohleneAnforderungenHolen();


    anforderungenContainer.innerHTML =
        "";


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


            chip.textContent =

                empfehlungen.includes(
                    anforderung
                )

                    ? `⭐ ${anforderung}`

                    : anforderung;


            chip.classList.toggle(

                "aktiv",

                aktiveAnforderungen.includes(
                    anforderung
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

function regelPaketeAnzeigen() {

    regelPaketeContainer.innerHTML =
        "";


    const empfehlungen =
        empfohleneRegelPaketeHolen();


    Object.keys(
        regelPakete
    ).forEach(

        function (key) {

            const paket =
                regelPakete[
                    key
                ];


            const istEmpfohlen =
                empfehlungen.includes(
                    key
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

                aktiveRegelPakete.includes(
                    key
                )

            );


            const titel =
                document.createElement(
                    "strong"
                );


            titel.textContent =

                istEmpfohlen

                    ? `⭐ Empfohlen: ${paket.name}`

                    : paket.name;


            const beschreibung =
                document.createElement(
                    "small"
                );


            beschreibung.textContent =
                paket.beschreibung;


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
                            key
                        )
                    ) {

                        aktiveRegelPakete =
                            aktiveRegelPakete.filter(

                                function (eintrag) {

                                    return (
                                        eintrag !==
                                        key
                                    );
                                }

                            );

                    } else {

                        aktiveRegelPakete.push(
                            key
                        );
                    }


                    regelPaketeAnzeigen();

                    promptErstellen();
                }

            );


            regelPaketeContainer.appendChild(
                button
            );
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


    rolle.innerHTML =
        "";


    daten.rollen.forEach(

        function (rollenName) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                rollenName;


            option.textContent =
                rollenName;


            rolle.appendChild(
                option
            );
        }

    );


    ziel.innerHTML =
        "";


    daten.ziele.forEach(

        function (zielName) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                zielName;


            option.textContent =
                zielName;


            ziel.appendChild(
                option
            );
        }

    );


    ausgabeformat.innerHTML =
        "";


    daten.ausgabeformate.forEach(

        function (format) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                format;


            option.textContent =
                format;


            ausgabeformat.appendChild(
                option
            );
        }

    );


    if (
        auswahlZuruecksetzen
    ) {

        aktiveAnforderungen =
            empfohleneAnforderungenHolen();


        aktiveRegelPakete =
            empfohleneRegelPaketeHolen();
    }


    unterFavoritButtonAktualisieren();

    kontextHinweisAktualisieren();

    anforderungenAnzeigen();

    regelPaketeAnzeigen();

    promptErstellen();


    if (
        !unterSortierungPanel.classList.contains(
            "versteckt"
        )
    ) {

        unterSortierungAnzeigen();
    }
}


// ======================================================
// HAUPTKATEGORIE GEÄNDERT
// ======================================================

function hauptkategorieGeaendert() {

    const hauptKey =
        hauptkategorie.value;


    // Zuletzt gewählte Hauptkategorie merken
    navigation.aktiveHauptkategorie =
        hauptKey;


    // Falls für diese Hauptkategorie schon einmal
    // eine Unterkategorie gewählt wurde, wiederherstellen
    const gespeicherteUnterkategorie =

        navigation.aktiveUnterkategorien[
            hauptKey
        ] ||

        null;


    navigationSpeichernLokal();


    hauptFavoritButtonAktualisieren();


    unterkategorienLaden(
        gespeicherteUnterkategorie
    );


    // Aktuell tatsächlich ausgewählte Unterkategorie merken
    navigation.aktiveUnterkategorien[
        hauptKey
    ] =
        unterkategorie.value;


    navigationSpeichernLokal();


    unterkategorieAktualisieren(
        true
    );


    if (
        !hauptSortierungPanel.classList.contains(
            "versteckt"
        )
    ) {

        hauptSortierungAnzeigen();
    }


    if (
        !unterSortierungPanel.classList.contains(
            "versteckt"
        )
    ) {

        unterSortierungAnzeigen();
    }
}


// ======================================================
// UNTERKATEGORIE GEÄNDERT
// ======================================================

function unterkategorieGeaendert() {

    const hauptKey =
        hauptkategorie.value;

    const unterKey =
        unterkategorie.value;


    // Aktuelle Auswahl merken
    navigation.aktiveHauptkategorie =
        hauptKey;


    navigation.aktiveUnterkategorien[
        hauptKey
    ] =
        unterKey;


    navigationSpeichernLokal();


    unterFavoritButtonAktualisieren();


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
        ziel.value.trim() !==
        ""
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

    if (
        aktiveAnforderungen.length >=
        3
    ) {

        punkte +=
            15;

    } else if (
        aktiveAnforderungen.length ===
        2
    ) {

        punkte +=
            11;

        hinweise.push(
            "💡 Eine weitere passende Anforderung könnte den Prompt noch genauer machen."
        );

    } else if (
        aktiveAnforderungen.length ===
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

    const hatRegelPaket =
        aktiveRegelPakete.length >
        0;

    const hatEigeneRegeln =
        eigeneRegeln.value.trim() !==
        "";


    if (
        hatRegelPaket &&
        hatEigeneRegeln
    ) {

        punkte +=
            15;

    } else if (
        hatRegelPaket
    ) {

        punkte +=
            11;

    } else if (
        hatEigeneRegeln
    ) {

        punkte +=
            8;

        hinweise.push(
            "💡 Ein passendes Regel-Paket kann zusätzliche Sicherheit und Präzision bringen."
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
        ausgabeformat.value.trim() !==
        ""
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

function promptErstellen() {

    const gewaehlteRolle =

        eigeneRolle.value.trim() ||

        rolle.value ||

        "Fachexperte";


    const gewaehltesZiel =

        eigenesZiel.value.trim() ||

        ziel.value ||

        "Thema bearbeiten";


    let prompt =
        "";


    prompt +=
        "ROLLE:\n";


    prompt +=
        `Übernimm folgende Rolle: ${gewaehlteRolle}.\n\n`;


    prompt +=
        "AUFGABE:\n";


    const zielOhnePunkt =
        gewaehltesZiel
            .trim()
            .replace(
                /[.!?]+$/,
                ""
            );


    prompt +=
        `${zielOhnePunkt}.\n\n`;


    if (
        kontext.value.trim() !==
        ""
    ) {

        prompt +=
            "KONTEXT:\n";


        prompt +=
            `${kontext.value.trim()}\n\n`;
    }


    if (
        aktiveAnforderungen.length >
        0
    ) {

        prompt +=
            "ANFORDERUNGEN:\n";


        aktiveAnforderungen.forEach(

            function (anforderung) {

                prompt +=
                    `- ${anforderung}\n`;
            }

        );


        prompt +=
            "\n";
    }


    let alleRegeln =
        [];


    aktiveRegelPakete.forEach(

        function (key) {

            if (
                regelPakete[
                    key
                ]
            ) {

                alleRegeln =
                    alleRegeln.concat(

                        regelPakete[
                            key
                        ].regeln

                    );
            }
        }

    );


    alleRegeln =
        [
            ...new Set(
                alleRegeln
            )
        ];


    if (
        alleRegeln.length >
            0 ||

        eigeneRegeln.value.trim() !==
            ""
    ) {

        prompt +=
            "REGELN & AUSSCHLÜSSE:\n";


        alleRegeln.forEach(

            function (regel) {

                prompt +=
                    `- ${regel}\n`;
            }

        );


        if (
            eigeneRegeln.value.trim() !==
            ""
        ) {

            prompt +=
                `- ${eigeneRegeln.value.trim()}\n`;
        }


        prompt +=
            "\n";
    }


    prompt +=
        "AUSGABEFORMAT:\n";


    prompt +=
        `Erstelle die Antwort als ${ausgabeformat.value || "strukturierte Antwort"}.`;


    promptVorschau.textContent =
    prompt;


promptQualitaetBewerten();
}


// ======================================================
// BUILDER ZURÜCKSETZEN
// ======================================================

function builderZuruecksetzen() {

    eigeneRolle.value =
        "";

    eigenesZiel.value =
        "";

    kontext.value =
        "";

    eigeneRegeln.value =
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


    aktiveRegelPakete =
        [];


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

        hauptkategorie:
            hauptkategorie.value,

        unterkategorie:
            unterkategorie.value,

        rolle:
            rolle.value,

        eigeneRolle:
            eigeneRolle.value,

        ziel:
            ziel.value,

        eigenesZiel:
            eigenesZiel.value,

        kontext:
            kontext.value,

        anforderungen:
            [
                ...aktiveAnforderungen
            ],

        regelPakete:
            [
                ...aktiveRegelPakete
            ],

        eigeneRegeln:
            eigeneRegeln.value,

        ausgabeformat:
            ausgabeformat.value,

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


    const gespeicherteHauptkategorie =

        eintrag.hauptkategorie ||

        "bild";


    hauptkategorienLaden(

        hauptkategorien[
            gespeicherteHauptkategorie
        ]

            ? gespeicherteHauptkategorie

            : "bild"

    );


    unterkategorienLaden(

        eintrag.unterkategorie ||
        null

    );


    unterkategorieAktualisieren(
        true
    );


    if (
        [
            ...rolle.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    eintrag.rolle
                );
            }

        )
    ) {

        rolle.value =
            eintrag.rolle;
    }


    eigeneRolle.value =
        eintrag.eigeneRolle ||
        "";


    if (
        [
            ...ziel.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    eintrag.ziel
                );
            }

        )
    ) {

        ziel.value =
            eintrag.ziel;
    }


    eigenesZiel.value =
        eintrag.eigenesZiel ||
        "";


    kontext.value =
        eintrag.kontext ||
        "";


    eigeneRegeln.value =
        eintrag.eigeneRegeln ||
        "";


    aktiveAnforderungen =
        [
            ...(
                eintrag.anforderungen ||
                []
            )
        ];


    aktiveRegelPakete =
        [
            ...(
                eintrag.regelPakete ||
                []
            )
        ];


    if (
        [
            ...ausgabeformat.options
        ].some(

            function (option) {

                return (
                    option.value ===
                    eintrag.ausgabeformat
                );
            }

        )
    ) {

        ausgabeformat.value =
            eintrag.ausgabeformat;
    }


    speicherOrdner.value =
        eintrag.ordnerId ||
        "";


    hauptFavoritButtonAktualisieren();

    unterFavoritButtonAktualisieren();

    kontextHinweisAktualisieren();

    anforderungenAnzeigen();

    regelPaketeAnzeigen();

    promptErstellen();


    if (
        !hauptSortierungPanel.classList.contains(
            "versteckt"
        )
    ) {

        hauptSortierungAnzeigen();
    }


    if (
        !unterSortierungPanel.classList.contains(
            "versteckt"
        )
    ) {

        unterSortierungAnzeigen();
    }


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
                            prompt.ziel,
                            prompt.eigenesZiel
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


            formatChip.textContent =

                prompt.ausgabeformat ||

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


// ======================================================
// EVENTS: BUILDER
// ======================================================

rolle.addEventListener(
    "change",
    promptErstellen
);


eigeneRolle.addEventListener(
    "input",
    promptErstellen
);


ziel.addEventListener(
    "change",
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


eigeneRegeln.addEventListener(
    "input",
    promptErstellen
);


ausgabeformat.addEventListener(
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
// LETZTE HAUPTKATEGORIE WIEDERHERSTELLEN
// ======================================================
//
// Reihenfolge:
// 1. zuletzt gewählte Hauptkategorie
// 2. oberster Favorit
// 3. erste normale Kategorie
// ======================================================

const gespeicherteHauptkategorie =

    (
        navigation.aktiveHauptkategorie &&
        hauptkategorien[
            navigation.aktiveHauptkategorie
        ]
    )

        ? navigation.aktiveHauptkategorie

        : (
            sortierteHauptkategorieSchluessel()[
                0
            ] ||
            null
        );


hauptkategorienLaden(
    gespeicherteHauptkategorie
);


// ======================================================
// LETZTE UNTERKATEGORIE WIEDERHERSTELLEN
// ======================================================

const startHauptKey =
    hauptkategorie.value;


const gespeicherteUnterkategorie =

    navigation.aktiveUnterkategorien[
        startHauptKey
    ] ||

    null;


unterkategorienLaden(
    gespeicherteUnterkategorie
);


// Tatsächlich geladene Auswahl wieder speichern.
// Dadurch werden auch alte oder nicht mehr vorhandene
// Kategorien automatisch sauber korrigiert.

navigation.aktiveHauptkategorie =
    hauptkategorie.value;


navigation.aktiveUnterkategorien[
    hauptkategorie.value
] =
    unterkategorie.value;


navigationSpeichernLokal();


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