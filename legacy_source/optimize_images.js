const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
    'app_mockup_en.png',
    'app_mockup_es.png',
    'app_mockup_fr.png',
    'app_mockup_de.png',
    'logo_wide.png'
];

async function convert() {
    for (const file of files) {
        const input = path.join(__dirname, file);
        if (fs.existsSync(input)) {
            const output = input.replace('.png', '.webp');
            console.log(`Converting ${file} to WebP...`);
            await sharp(input)
                .webp({ quality: 80 })
                .toFile(output);
            console.log(`Converted ${file}`);
        } else {
            console.log(`Skipping ${file} (not found)`);
        }
    }
}

convert().catch(console.error);
