const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

function checkPdftotext() {
    try {
        execSync('which pdftotext', { stdio: 'pipe' });
        return true;
    } catch {
        return false;
    }
}

function readPDF(filePath) {
    // pdftotext mit -layout Option für bessere Formatierung
    const result = execSync(`pdftotext -layout "${filePath}" -`, {
        encoding: 'utf8',
        maxBuffer: 200 * 1024 * 1024 // 200 MB Buffer für große PDFs
    });

    const filename = path.basename(filePath, '.pdf');
    const pageCount = countPages(filePath);

    let markdown = `# ${filename}\n\n`;
    markdown += `**Seiten:** ${pageCount}\n\n---\n\n`;
    markdown += result;

    return markdown;
}

function countPages(filePath) {
    try {
        const result = execSync(`pdfinfo "${filePath}" | grep "Pages:" | awk '{print $2}'`, {
            encoding: 'utf8',
            stdio: ['pipe', 'pipe', 'pipe']
        });
        return result.trim() || '?';
    } catch {
        return '?';
    }
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

function convertPDFs() {
    // Prüfe ob pdftotext installiert ist
    if (!checkPdftotext()) {
        console.error('FEHLER: pdftotext ist nicht installiert.\n');
        console.error('Installation mit Homebrew:');
        console.error('  brew install poppler\n');
        process.exit(1);
    }

    const files = fs.readdirSync(PDF_DIR)
        .filter(f => f.endsWith('.pdf'))
        .sort();

    console.log(`Gefunden: ${files.length} PDF-Dateien\n`);

    let converted = 0;
    let skipped = 0;
    let errors = 0;

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
            skipped++;
            continue;
        }

        try {
            console.log(`[${i+1}/${files.length}] Konvertiere: ${file}...`);
            const markdown = readPDF(pdfPath);
            fs.writeFileSync(mdPath, markdown, 'utf8');
            console.log(`  ✓ Gespeichert: ${mdPath}`);
            converted++;
        } catch (err) {
            console.error(`  ✗ Fehler bei ${file}: ${err.message}`);
            errors++;
        }
    }

    console.log('\n--- Zusammenfassung ---');
    console.log(`Konvertiert: ${converted}`);
    console.log(`Übersprungen: ${skipped}`);
    console.log(`Fehler: ${errors}`);
}

// Nur bestimmte Kategorie konvertieren
const category = process.argv[2];
if (category) {
    console.log(`Konvertiere nur Kategorie: ${category}`);
}

convertPDFs();
