from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


# ======================================================
# PROMPTWERKSTATT – APP-ICONS ERSTELLEN
# ======================================================

PROJEKTORDNER = Path(__file__).parent
ICON_ORDNER = PROJEKTORDNER / "icons"

ICON_ORDNER.mkdir(exist_ok=True)


def icon_erstellen(groesse):
    bild = Image.new(
        "RGB",
        (groesse, groesse),
        "#7c3aed"
    )

    zeichnung = ImageDraw.Draw(bild)

    # Abgerundetes inneres Feld
    rand = int(groesse * 0.08)

    zeichnung.rounded_rectangle(
        (
            rand,
            rand,
            groesse - rand,
            groesse - rand
        ),
        radius=int(groesse * 0.20),
        fill="#5b45f2"
    )

    # Schriftgröße
    schriftgroesse = int(groesse * 0.36)

    # Windows-Schrift verwenden
    schriftpfad = Path(
        r"C:\Windows\Fonts\arialbd.ttf"
    )

    if schriftpfad.exists():
        schrift = ImageFont.truetype(
            str(schriftpfad),
            schriftgroesse
        )
    else:
        schrift = ImageFont.load_default()

    text = "PW"

    text_box = zeichnung.textbbox(
        (0, 0),
        text,
        font=schrift
    )

    text_breite = text_box[2] - text_box[0]
    text_hoehe = text_box[3] - text_box[1]

    x = (groesse - text_breite) / 2
    y = (groesse - text_hoehe) / 2 - text_box[1]

    zeichnung.text(
        (x, y),
        text,
        font=schrift,
        fill="white"
    )

    datei = (
        ICON_ORDNER /
        f"icon-{groesse}.png"
    )

    bild.save(
        datei,
        "PNG"
    )

    print(
        f"Erstellt: {datei}"
    )


icon_erstellen(192)
icon_erstellen(512)

print()
print("PromptWerkstatt-Icons wurden erfolgreich erstellt.")