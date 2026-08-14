(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2
        .querschnittRegistrieren(
            "zielgruppen",
            {
                id: "zielgruppen",
                name: "Zielgruppe",
                eigeneAngabeErlaubt: true,
                gruppen: [
                    {
                        id: "privat",
                        name: "Privat",
                        optionen: [
                            { id: "privatpersonen", name: "Privatpersonen" },
                            { id: "senioren", name: "Senioren" }
                        ]
                    },
                    {
                        id: "lebenssituation-familie",
                        name: "Lebenssituation/Familie",
                        optionen: [
                            { id: "familien", name: "Familien" },
                            { id: "eltern", name: "Eltern" },
                            { id: "kinder", name: "Kinder" },
                            { id: "jugendliche", name: "Jugendliche" }
                        ]
                    },
                    {
                        id: "creator",
                        name: "Creator",
                        optionen: [
                            { id: "content-creator", name: "Content Creator" },
                            { id: "influencer", name: "Influencer" }
                        ]
                    },
                    {
                        id: "beruf",
                        name: "Beruf",
                        optionen: [
                            { id: "berufstaetige", name: "Berufstätige" },
                            { id: "selbststaendige", name: "Selbstständige" },
                            { id: "unternehmer", name: "Unternehmer" },
                            { id: "fuehrungskraefte", name: "Führungskräfte" }
                        ]
                    },
                    {
                        id: "fachlich",
                        name: "Fachlich",
                        optionen: [
                            { id: "schueler", name: "Schüler" },
                            { id: "studierende", name: "Studierende" },
                            { id: "techniker", name: "Techniker" },
                            { id: "ingenieure", name: "Ingenieure" },
                            { id: "programmierer", name: "Programmierer" },
                            { id: "wissenschaftler", name: "Wissenschaftler" }
                        ]
                    }
                ]
            }
        );
})(globalThis);
