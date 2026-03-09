// scripts/patch-dataset.js
// This script modifies data/words.js directly by adding custom words 
// since kbbi_v.csv is not available locally to run build-verified.js fully.

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const wordsJsPath = path.join(ROOT, 'data', 'words.js');
const customWordsPath = path.join(ROOT, 'custom_roblox_words.txt');

console.log('Reading custom_roblox_words.txt...');
const customWords = fs.readFileSync(customWordsPath, 'utf8')
    .split('\n')
    .map(w => w.trim().toLowerCase())
    .filter(w => w.length > 0 && /^[a-z]+$/.test(w));

console.log(`Found ${customWords.length} custom words.`);

console.log('Reading data/words.js...');
let wordsFileContent = fs.readFileSync(wordsJsPath, 'utf8');

// Parse the array
let match = wordsFileContent.match(/window\.KBBI_WORDS=\[(.*?)\];/);
if (!match) {
    console.error('Could not find window.KBBI_WORDS array in data/words.js');
    process.exit(1);
}

// Convert string array content back to proper array
let wordsArray = JSON.parse('[' + match[1] + ']');
let originalLength = wordsArray.length;
console.log(`Original words count: ${originalLength}`);

let added = 0;
for (let w of customWords) {
    if (!wordsArray.includes(w)) {
        wordsArray.push(w);
        added++;
    }
}

if (added > 0) {
    wordsArray.sort();
    let newOutput = `window.KBBI_WORDS=${JSON.stringify(wordsArray)};`;
    fs.writeFileSync(wordsJsPath, newOutput, 'utf8');
    console.log(`SUCCESS! Added ${added} new words. Total words: ${wordsArray.length}`);
} else {
    console.log('No new words to add. All custom words already exist.');
}
