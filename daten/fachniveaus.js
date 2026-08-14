(function (global) {
    "use strict";

    global.PromptWerkstattDatenV2
        .querschnittRegistrieren(
            "fachniveaus",
            {
                id: "fachniveaus",
                name: "Fach-/Erklärniveau",
                eigeneAngabeErlaubt: false,
                optionen: [
                    { id: "keine-vorgabe", name: "Keine Vorgabe" },
                    { id: "sehr-einfach", name: "Sehr einfach" },
                    { id: "anfaenger", name: "Anfänger" },
                    { id: "grundkenntnisse", name: "Grundkenntnisse" },
                    { id: "fortgeschritten", name: "Fortgeschritten" },
                    { id: "fachkundig", name: "Fachkundig" },
                    { id: "experte", name: "Experte" }
                ]
            }
        );
})(globalThis);
