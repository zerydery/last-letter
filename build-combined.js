// build-combined.js
// Merge kbbi1 (words.txt) + kbbi2 (kbbi_kata.txt) into one combined words.js
// Rules:
// - Lowercase everything (includes proper nouns like "italia", "belanda", etc.)
// - Only pure a-z characters (no hyphens, spaces, parens, numbers)
// - Min 2 characters
// - Deduplicate + sort

const fs = require('fs');
const path = require('path');

function readWords(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');
    return raw.split('\n')
        .map(line => {
            // Strip homonym markers: "abah (1)" → "abah"
            return line.trim().replace(/\s*\(\d+\)\s*$/, '').trim().toLowerCase();
        })
        .filter(w => /^[a-z]{2,}$/.test(w));
}

console.log('Reading kbbi1 (words.txt)...');
const kbbi1 = readWords(path.join(__dirname, 'words.txt'));
console.log(`  kbbi1: ${kbbi1.length} raw words`);

console.log('Reading kbbi2 (kbbi_kata.txt)...');
const kbbi2 = readWords(path.join(__dirname, 'kbbi_kata.txt'));
console.log(`  kbbi2: ${kbbi2.length} raw words (no proper noun filter)`);

const combined = [...new Set([...kbbi1, ...kbbi2])].sort();
console.log(`\nCombined (dedup + sorted): ${combined.length} words`);

const output = `window.KBBI_WORDS=${JSON.stringify(combined)};`;
fs.writeFileSync(path.join(__dirname, 'words.js'), output, 'utf8');
console.log(`Written to words.js — ${(output.length / 1024).toFixed(1)} KB`);

// Verify some proper nouns made it in
const testWords = ['italia', 'belanda', 'jepang', 'jakarta', 'indonesia'];
console.log('\nVerification — proper nouns:');
testWords.forEach(w => {
    console.log(`  ${w}: ${combined.includes(w) ? '✅' : '❌ NOT FOUND'}`);
});
