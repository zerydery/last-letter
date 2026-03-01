// scripts/build-verified.js  (v3 — UNION all KBBI sources, no strict intersection)
// Sources (semua dari KBBI):
//   A: kbbi_v.csv        (aryakdaniswara KBBI V, Nov 2024) 
//   B: kbbi_v_part*.json (same repo, full JSON — streaming extract)
//   C: words.txt         (damzaky list_1.0.0 — from KBBI APK)
//   D: words_v051.txt    (damzaky list_0.5.1)
//   E: kbbi_hidayat.csv  (Hidayathamir — KBBI compilation)
//
// Strategy: UNION semua sumber KBBI, semua sudah dari KBBI jadi tidak perlu filter ketat
// Filter minimal: hanya a-z lowercase, min 2 karakter

const fs = require('fs');
const path = require('path');
const rl = require('readline');
const ROOT = path.join(__dirname, '..');

function clean(word) {
    return (word || '').trim().toLowerCase().replace(/\s*\(\d+\)\s*$/, '').trim();
}
function isValid(w) { return /^[a-z]{2,}$/.test(w); }

const allWords = new Set();
let srcStats = {};

function addWords(src, count) {
    srcStats[src] = count;
    console.log(`  ✅ ${src}: +${count.toLocaleString('id-ID')} (total: ${allWords.size.toLocaleString('id-ID')})`);
}

// ── A: kbbi_v.csv ─────────────────────────────────────────────────────────────
console.log('\n📖 A: kbbi_v.csv...');
const csvBefore = allWords.size;
if (fs.existsSync(path.join(ROOT, 'kbbi_v.csv'))) {
    fs.readFileSync(path.join(ROOT, 'kbbi_v.csv'), 'utf8').split('\n').slice(1).forEach(line => {
        const w = clean(line.split(',')[0].replace(/^"|"$/g, ''));
        if (isValid(w)) allWords.add(w);
    });
    addWords('kbbi_v.csv', allWords.size - csvBefore);
}

// ── B: kbbi_v_part*.json — streaming line-by-line keyword extract ─────────────
console.log('\n📖 B: KBBI V JSON parts (streaming)...');
const jsonBefore = allWords.size;
for (let i = 1; i <= 4; i++) {
    const fp = path.join(ROOT, `kbbi_v_part${i}.json`);
    if (!fs.existsSync(fp)) { console.log(`  ⚠️  Part ${i} not found`); continue; }
    process.stdout.write(`  Part ${i}... `);
    // Line-by-line: look for "nama": "word" patterns
    const content = fs.readFileSync(fp, 'utf8');
    // Extract with simpler string search (no regex on whole file)
    let pos = 0;
    const key = '"nama":"';
    const key2 = '"nama": "';
    while (pos < content.length) {
        let idx = content.indexOf('"nama"', pos);
        if (idx === -1) break;
        idx = content.indexOf('"', idx + 6);
        if (idx === -1) break;
        idx++;
        const end = content.indexOf('"', idx);
        if (end === -1 || end - idx > 60) { pos = idx; continue; }
        const w = clean(content.slice(idx, end));
        if (isValid(w)) allWords.add(w);
        pos = end + 1;
    }
    console.log(`done (total: ${allWords.size.toLocaleString('id-ID')})`);
}
console.log(`  JSON parts added: +${(allWords.size - jsonBefore).toLocaleString('id-ID')}`);

// ── C: words.txt (damzaky v1.0.0) ─────────────────────────────────────────────
console.log('\n📖 C: words.txt (damzaky v1)...');
const cBefore = allWords.size;
if (fs.existsSync(path.join(ROOT, 'words.txt'))) {
    fs.readFileSync(path.join(ROOT, 'words.txt'), 'utf8').split('\n').forEach(l => {
        const w = clean(l); if (isValid(w)) allWords.add(w);
    });
    addWords('words.txt', allWords.size - cBefore);
}

// ── D: words_v051.txt (damzaky v0.5.1) ────────────────────────────────────────
console.log('\n📖 D: words_v051.txt (damzaky v0.5.1)...');
const dBefore = allWords.size;
if (fs.existsSync(path.join(ROOT, 'words_v051.txt'))) {
    fs.readFileSync(path.join(ROOT, 'words_v051.txt'), 'utf8').split('\n').forEach(l => {
        const w = clean(l); if (isValid(w)) allWords.add(w);
    });
    addWords('words_v051.txt', allWords.size - dBefore);
}

// ── E: kbbi_hidayat.csv ────────────────────────────────────────────────────────
console.log('\n📖 E: kbbi_hidayat.csv (Hidayathamir)...');
const eBefore = allWords.size;
if (fs.existsSync(path.join(ROOT, 'kbbi_hidayat.csv'))) {
    fs.readFileSync(path.join(ROOT, 'kbbi_hidayat.csv'), 'utf8').split('\n').slice(1).forEach(line => {
        const w = clean(line.split(',')[0].replace(/^"|"$/g, ''));
        if (isValid(w)) allWords.add(w);
    });
    addWords('kbbi_hidayat.csv', allWords.size - eBefore);
}

// ── Output ─────────────────────────────────────────────────────────────────────
const verified = [...allWords].sort();
console.log(`\n📊 TOTAL: ${verified.length.toLocaleString('id-ID')} kata dari semua sumber KBBI`);
console.log(`   (dari 71.198 sebelumnya: +${(verified.length - 71198).toLocaleString('id-ID')} kata baru)`);

const output = `window.KBBI_WORDS=${JSON.stringify(verified)};`;
fs.writeFileSync(path.join(ROOT, 'data', 'words.js'), output, 'utf8');
console.log(`\n✅ Written data/words.js — ${(output.length / 1024 / 1024).toFixed(2)} MB`);

// ── Spot check ─────────────────────────────────────────────────────────────────
console.log('\n🧪 Spot checks:');
const vSet = new Set(verified);
['italia', 'adaptasi', 'mobilisasi', 'koordinasi', 'sosialisasi', 'implementasi', 'zonasi'].forEach(w =>
    console.log(`  ${vSet.has(w) ? '✅' : '❌'} ${w}`)
);
['drakor', 'jomblo', 'ngebut', 'ngobrol', 'bucin'].forEach(w =>
    console.log(`  ${!vSet.has(w) ? '✅ absent' : '⚠️  present'} ${w}`)
);
