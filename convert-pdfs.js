const fs = require('fs');
const path = require('path');

const PDF_DIR = './Planunterlagen Hochwasserschutz Unterer Wöhrd';
const MD_DIR = './markdown';

// Mapping von PDF-Präfixen zu Markdown-Ordnern
const folderMapping = {
    '00': '00_Anlagenverzeichnis',
    'A': 'A_Erlaeuterungsbericht',
    'B': 'B_Plandarstellungen',
    'C': 'C_Binnenentwasserung',
    'D': 'D_Umweltplanung',
    'F': 'F_Gutachten',
    'G': 'G_Bauwerke',
    'H': 'H_Grundstuecke',
    'I': 'I_Ergaenzungen'
};

async function readPDF(filePath) {
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const data = new Uint8Array(fs.readFileSync(filePath));
    const doc = await pdfjsLib.getDocument({ data }).promise;

    let fullText = `# ${path.basename(filePath, '.pdf')}\n\n`;
    fullText += `**Seiten:** ${doc.numPages}\n\n---\n\n`;

    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        const text = textContent.items.map(item => item.str).join(' ');

        if (text.trim()) {
            fullText += `## Seite ${i}\n\n${text}\n\n`;
        }
    }

    return fullText;
}

function getTargetFolder(filename) {
    if (filename.startsWith('00')) return folderMapping['00'];
    const prefix = filename.charAt(0);
    return folderMapping[prefix] || 'andere';
}

function sanitizeFilename(filename) {
    return filename
        .replace(/\s+/g, '_')
        .replace(/[äÄ]/g, 'ae')
        .replace(/[öÖ]/g, 'oe')
        .replace(/[üÜ]/g, 'ue')
        .replace(/ß/g, 'ss');
}

async function convertPDFs() {
    const files = fs.readdirSync(PDF_DIR)
        .filter(f => f.endsWith('.pdf'))
        .sort();

    console.log(`Gefunden: ${files.length} PDF-Dateien\n`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const pdfPath = path.join(PDF_DIR, file);
        const targetFolder = getTargetFolder(file);
        const mdFilename = sanitizeFilename(file.replace('.pdf', '.md'));
        const mdPath = path.join(MD_DIR, targetFolder, mdFilename);

        // Erstelle Zielordner falls nicht vorhanden
        const targetPath = path.join(MD_DIR, targetFolder);
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
        }

        // Überspringe bereits konvertierte Dateien
        if (fs.existsSync(mdPath)) {
            console.log(`[${i+1}/${files.length}] Übersprungen: ${file}`);
            continue;
        }

        try {
            console.log(`[${i+1}/${files.length}] Konvertiere: ${file}...`);
            const markdown = await readPDF(pdfPath);
            fs.writeFileSync(mdPath, markdown, 'utf8');
            console.log(`  ✓ Gespeichert: ${mdPath}`);
        } catch (err) {
            console.error(`  ✗ Fehler bei ${file}: ${err.message}`);
        }
    }

    console.log('\nKonvertierung abgeschlossen!');
}

// Nur bestimmte Kategorie konvertieren
const category = process.argv[2];
if (category) {
    console.log(`Konvertiere nur Kategorie: ${category}`);
}

convertPDFs().catch(err => {
    console.error('Fehler:', err.message);
    process.exit(1);
});
