const fs = require('fs');

async function readPDF(filePath) {
    // Dynamic import for ES module
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

    const data = new Uint8Array(fs.readFileSync(filePath));
    const doc = await pdfjsLib.getDocument({ data }).promise;

    console.log('=== PDF Info ===');
    console.log('Pages:', doc.numPages);
    console.log('');
    console.log('=== Content ===');

    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        const text = textContent.items.map(item => item.str).join(' ');
        console.log(`\n--- Page ${i} ---\n`);
        console.log(text);
    }
}

const filePath = process.argv[2];

if (!filePath) {
    console.error('Usage: node read-pdf.js <path-to-pdf>');
    process.exit(1);
}

readPDF(filePath).catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
