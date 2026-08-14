(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2
        .querschnittRegistrieren(
            "tonalitaeten",
            {
                id: "tonalitaeten",
                name: "Tonalität",
                eigeneAngabeErlaubt: true,
                optionen: [
                    { id: "keine-vorgabe", name: "Keine Vorgabe" },
                    { id: "sachlich", name: "Sachlich" },
                    { id: "professionell", name: "Professionell" },
                    { id: "freundlich", name: "Freundlich" },
                    { id: "locker", name: "Locker" },
                    { id: "ueberzeugend", name: "Überzeugend" },
                    { id: "emotional", name: "Emotional" },
                    { id: "humorvoll", name: "Humorvoll" },
                    { id: "einfach-verstaendlich", name: "Einfach verständlich" }
                ]
            }
        );
})(globalThis);
