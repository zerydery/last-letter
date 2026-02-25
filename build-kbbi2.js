// Script to generate words-kbbi2.js from kbbi_kata.txt (nandalogina dataset)
// Filter rules:
// - Lowercase only
// - Only a-z chars (no space, no hyphen, no parens, no numbers)
// - Min 2 characters
// - Exclude entries with uppercase (proper nouns like Allah, Belanda, etc.)
// - Exclude affixes (start with -)
// - Exclude entries with spaces (phrases like "latar belakang")
// - Exclude entries with parentheses (homonym markers like "abah (1)")
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'kbbi_kata.txt'), 'utf8');
const lines = input.split('\n');

const words = [...new Set(
    lines
        .map(w => w.trim())
        // Exclude: starts with uppercase (proper nouns), starts with '-' (affix)
        .filter(w => w.length > 0 && w[0] === w[0].toLowerCase() && w[0] !== '-')
        // Exclude: contains space (phrases), parens (homonim), non-alpha chars
        .map(w => {
            // Strip homonym number: "abah (1)" -> "abah"
            const stripped = w.replace(/\s*\(\d+\)\s*$/, '').trim();
            return stripped;
        })
        // Now filter to only pure lowercase a-z words
        .filter(w => /^[a-z]{2,}$/.test(w))
)].sort();

const output = `window.KBBI_WORDS=${JSON.stringify(words)};`;
fs.writeFileSync(path.join(__dirname, 'words-kbbi2.js'), output, 'utf8');

console.log(`Done: ${words.length} words written to words-kbbi2.js`);
console.log(`File size: ${(output.length / 1024).toFixed(1)} KB`);
