# Projekt: Wasserrechtliches Planfeststellungsverfahren

## Hochwasserschutz Regensburg - Abschnitt H Unterer Wöhrd

### PDF-Konvertierung

Die PDF-Dateien aus `./Planunterlagen Hochwasserschutz Unterer Wöhrd/` wurden bereits in Markdown konvertiert.

**Konvertierte Dateien:** 178 PDFs → `./markdown/`

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
cd "unser schreiben" && npx md-to-pdf "Einwendung-Hochwasserschutz-Unterer-Woehrd-V2.md" --stylesheet style.css
```

**NICHT verwenden** (überschreibt Frontmatter und entfernt Seitenzahlen):
```bash
# FALSCH: --pdf-options überschreibt die YAML-Frontmatter-Einstellungen!
npx md-to-pdf ... --pdf-options '{"format": "A4", ...}'
```

Die PDF-Einstellungen (Seitenzahlen, Ränder, Header/Footer) sind in der **YAML-Frontmatter** der Markdown-Datei definiert. Der `--stylesheet`-Parameter ist OK, aber `--pdf-options` überschreibt die Frontmatter-Einstellungen komplett.

**Stylesheet:** `./unser schreiben/style.css`
- 12pt Schriftgröße (wie Löffler-Vorlage)
- 2,5 cm Ränder
- Sans-Serif-Schrift

**Seitenumbrüche:** Bei Bedarf manuell im Markdown einfügen:
```html
<div style="page-break-before: always;"></div>
```

### Projektübersicht

- **Vorhabensträger:** Freistaat Bayern / WWA Regensburg
- **Schutzziel:** HQ100 (3.400 m³/s) + 50 cm Freibord
- **Betroffene:** 1.300 Einwohner, 430 Arbeitsplätze
- **Planabschnitte:** PA 1-10
- **Lage:** UNESCO-Welterbe Pufferzone
