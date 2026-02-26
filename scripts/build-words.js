// Script to generate words.js from words.txt
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');
const lines = input.split('\n');

const words = [...new Set(
    lines
        .map(w => w.trim().toLowerCase())
        .filter(w => /^[a-z]{2,}$/.test(w))
)].sort();

const output = `window.KBBI_WORDS=${JSON.stringify(words)};`;
fs.writeFileSync(path.join(__dirname, 'words.js'), output, 'utf8');

console.log(`Done: ${words.length} words written to words.js`);
console.log(`File size: ${(output.length / 1024).toFixed(1)} KB`);
