# Projekt: Wasserrechtliches Planfeststellungsverfahren

## Hochwasserschutz Regensburg - Abschnitt H Unterer Wöhrd

### PDF-Konvertierung

Die PDF-Dateien aus `./01-Planunterlagen Hochwasserschutz Unterer Wöhrd/` wurden bereits in Markdown konvertiert.

**Konvertierte Dateien:** 178 PDFs → `./01-Planunterlagen Hochwasserschutz Unterer Wöhrd/Markdown/`

**Ordnerstruktur:**
- `00_Anlagenverzeichnis/` - Verzeichnis aller Unterlagen
- `A_Erlaeuterungsbericht/` - Haupterläuterungsbericht (98 Seiten)
- `B_Plandarstellungen/` - Lagepläne, Querschnitte, Längsschnitte PA 1-10
- `C_Binnenentwasserung/` - Entwässerung, Pumpwerke, Spartenkonflikte
- `D_Umweltplanung/` - UVS, LBP, saP, FFH, WRRL, Baumkataster
- `F_Gutachten/` - Baugrund, Hydraulik, Statik, Fauna, Flora, Risiko
- `G_Bauwerke/` - Bauwerksverzeichnis
- `H_Grundstuecke/` - Grunderwerbspläne
- `I_Ergaenzungen/` - Starkregenuntersuchung, Gefälleplanung

**Konvertierungsscript:** `convert-pdfs.js`
```bash
node convert-pdfs.js
```
Überspringt bereits konvertierte Dateien automatisch.

**Hinweis:** Die Textextraktion ist nicht perfekt (Tabellen, Inhaltsverzeichnisse verlieren Formatierung), aber für KI-Abfragen ausreichend.

### PDF-Erstellung aus Markdown

Die Einwendung wird mit `md-to-pdf` in PDF konvertiert.

**WICHTIG – Korrekter Befehl für Seitenzahlen:**
```bash
cd "02-Einwendungen" && npx md-to-pdf "Einwendung-Hochwasserschutz-Unterer-Woehrd-V2.md" --stylesheet style.css
```

**NICHT verwenden** (überschreibt Frontmatter und entfernt Seitenzahlen):
```bash
# FALSCH: --pdf-options überschreibt die YAML-Frontmatter-Einstellungen!
npx md-to-pdf ... --pdf-options '{"format": "A4", ...}'
```

Die PDF-Einstellungen (Seitenzahlen, Ränder, Header/Footer) sind in der **YAML-Frontmatter** der Markdown-Datei definiert. Der `--stylesheet`-Parameter ist OK, aber `--pdf-options` überschreibt die Frontmatter-Einstellungen komplett.

**Stylesheet:** `./02-Einwendungen/style.css`
- 12pt Schriftgröße (wie Löffler-Vorlage)
- 2,5 cm Ränder
- Sans-Serif-Schrift

**Seitenumbrüche:** Bei Bedarf manuell im Markdown einfügen:
```html
<div style="page-break-before: always;"></div>
```

**Ausnahme – Dokumente in `03-Erörterungstermin/`:** Diese PDFs werden mit dem MCP-Tool `iatemplate2pdf` erzeugt (iA-Writer-Template mit eigener Kopf-/Fußzeile und Seitenzahlen), **nicht** mit md-to-pdf. Wichtig: Die Markdown-Dateien dürfen **keine YAML-Frontmatter** enthalten — das iA-Template rendert sie sonst als Text ins PDF.

### Projektübersicht

- **Vorhabensträger:** Freistaat Bayern / WWA Regensburg
- **Schutzziel:** HQ100 (3.400 m³/s) + 50 cm Freibord
- **Betroffene:** 1.300 Einwohner, 430 Arbeitsplätze
- **Planabschnitte:** PA 1-10
- **Lage:** UNESCO-Welterbe Pufferzone

### Verfahrensstand (wichtig)

- **Einwendungsphase abgeschlossen** (Frist: 16.01.2026). Rechtlich maßgeblich ist die unterschrieben eingereichte **V2** (`02-Einwendungen/Einwendung-Hochwasserschutz-Unterer-Woehrd-V2 Unterschrieben.pdf`).
- **V3 ist nur eine Arbeitsfassung** (V2 + grüne Korrekturhinweise zu Seitenangaben/Datierungen/Quellen). Es wird **keine V3/V4-Einreichung** geben. Nie eine neue Einwendungsfassung oder „Ergänzungsvorschläge für V2/V3" vorschlagen.
- **Objektschutz** ist in der eigenen Einwendung bewusst nicht bautechnisch vertieft — die Detailargumentation liegt in der mitunterschriebenen **Gebauer-Einwendung** (`02-Einwendungen/Andere Einwender/Gebauer/`). Das ist Arbeitsteilung, kein Versäumnis.
- **Erörterungstermin hat stattgefunden** (Unterlagen dazu in `03-Erörterungstermin/`). Der **Planfeststellungsbeschluss wird nicht vor April 2027 erwartet**.
- **Aktueller Nebenschauplatz (08/2026):** Aufforderung des Ordnungsamts, die Banner des Aktionsbündnisses abzuhängen → Vorgang und Rechtslage-Recherche in `05-Plakatierung-Ordnungsamt/`.
- **Korrekte Zahlen** (verifiziert, siehe `02-Einwendungen/Quellenbelege.md`): UGA-Tiefe 11–19 m, bereichsweise bis 20 m (nicht „15 m"); Baukosten ca. 50 Mio. € **brutto** ohne Grundstückskosten (Bericht S. 95); 55 Mio. € gesamt (Beschlussvorlage Stadt Regensburg 03.12.2024, S. 12); Ufermauer 1830er Jahre.
