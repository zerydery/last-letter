// scripts/build-verified.js
// Enriched & Verified KBBI Dataset Builder
//
// Strategy:
//   Source A: words.txt (damzaky) — broad Indonesian wordlist
//   Source B: kbbi_v.csv (aryakdaniswara KBBI V, Nov 2024) — authoritative KBBI V source
//   Ground truth: kbbi_v.csv column "key" = the KBBI-verified word list
//
// Steps:
//   1. Parse kbbi_v.csv → extract "key" column → build truth_set (verified KBBI words)
//   2. Parse words.txt (damzaky) → as extra word candidates
//   3. UNION of both sources
//   4. INTERSECT with truth_set → keep only KBBI-verified words
//   5. Also include ALL words from truth_set directly (comprehensive)
//   6. Output: data/words.js

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

function clean(word) {
    return word.trim().toLowerCase().replace(/\s*\(\d+\)\s*$/, '').trim();
}

function isValidWord(w) {
    return /^[a-z]{2,}$/.test(w);
}

// ── 1. Parse kbbi_v.csv → truth_set ──────────────────────────────────────────
console.log('\n📖 Parsing kbbi_v.csv (KBBI V — ground truth)...');
const csvPath = path.join(ROOT, 'kbbi_v.csv');
const csvRaw = fs.readFileSync(csvPath, 'utf8');
const csvLines = csvRaw.split('\n');

// Header: key,nama,nomor,kata_da...
// We want column 0 (key) — the main lemma entry
const truthSet = new Set();
let csvSkipped = 0;

for (let i = 1; i < csvLines.length; i++) { // skip header
    const line = csvLines[i].trim();
    if (!line) continue;
    // CSV: first field is "key" (may be quoted)
    let key = line.split(',')[0].replace(/^"|"$/g, '').trim();
    key = clean(key);
    if (isValidWord(key)) {
        truthSet.add(key);
    } else {
        csvSkipped++;
    }
}
console.log(`  ✅ Truth set: ${truthSet.size.toLocaleString()} verified KBBI words`);
console.log(`  ⏭  Skipped (non-alpha/affix/phrase): ${csvSkipped.toLocaleString()}\n`);

// ── 2. Parse words.txt (damzaky) ──────────────────────────────────────────────
console.log('📖 Parsing words.txt (damzaky — extra candidates)...');
const wordsPath = path.join(ROOT, 'words.txt');
const damzakyWords = [];
if (fs.existsSync(wordsPath)) {
    const raw = fs.readFileSync(wordsPath, 'utf8');
    raw.split('\n').forEach(line => {
        const w = clean(line);
        if (isValidWord(w)) damzakyWords.push(w);
    });
    console.log(`  📦 Damzaky candidates: ${damzakyWords.length.toLocaleString()} words`);
} else {
    console.log('  ⚠️  words.txt not found — skipping damzaky source');
}

// ── 3. Union + filter against truth_set ──────────────────────────────────────
console.log('\n🔗 Merging & filtering...');
const allCandidates = new Set([...truthSet, ...damzakyWords]);
console.log(`  Union (truth + damzaky): ${allCandidates.size.toLocaleString()} unique candidates`);

// Keep only words verified by truth_set
const verified = [...allCandidates].filter(w => truthSet.has(w)).sort();
console.log(`  ✅ After KBBI filter:     ${verified.length.toLocaleString()} verified words`);

const removedCount = damzakyWords.filter(w => !truthSet.has(w)).length;
const addedCount = [...truthSet].filter(w => !damzakyWords.includes(w)).length;
console.log(`  ❌ Removed (not in KBBI): ~${removedCount.toLocaleString()} damzaky words`);
console.log(`  ➕ New from KBBI V:       ~${addedCount.toLocaleString()} words`);

// ── 4. Write output ───────────────────────────────────────────────────────────
const output = `window.KBBI_WORDS=${JSON.stringify(verified)};`;
const outPath = path.join(ROOT, 'data', 'words.js');
fs.writeFileSync(outPath, output, 'utf8');
const sizeKB = (output.length / 1024).toFixed(1);
console.log(`\n📝 Written to data/words.js — ${verified.length.toLocaleString()} words, ${sizeKB} KB`);

// ── 5. Spot-check ────────────────────────────────────────────────────────────
console.log('\n🧪 Spot checks:');
const mustHave = ['italia', 'belanda', 'jepang', 'jakarta', 'zonasi', 'inovasi', 'adaptasi', 'abadi', 'zakat', 'quran'];
const mustNot = ['drakor', 'jomblo', 'ngebut', 'ngobrol', 'bucin'];
const verSet = new Set(verified);
mustHave.forEach(w => console.log(`  ${verSet.has(w) ? '✅' : '❌ MISSING'} ${w}`));
mustNot.forEach(w => console.log(`  ${!verSet.has(w) ? '✅ absent' : '⚠️  PRESENT (slang?)'} ${w}`));
