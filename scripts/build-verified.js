// scripts/build-verified.js  (v4 — strict KBBI V intersection filter)
// Solusi untuk masalah kata palsu (aa, ab, ao dll):
// → Gunakan kbbi_v.csv sebagai SATU-SATUNYA ground truth
// → Semua sumber lain hanya menjadi kandidat yang harus lolos filter KBBI
// → Kata yang tidak ada di kbbi_v.csv DIBUANG (tidak peduli dari mana sumbernya)

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

function clean(w) {
    return (w || '').toString().trim().toLowerCase().replace(/\s*\(\d+\)\s*$/, '').trim();
}
function isValid(w) { return /^[a-z]{2,}$/.test(w); }

// ── 1. Build truth_set dari kbbi_v.csv (WAJIB ada di sini untuk lolos) ────────
console.log('\n🔑 Building truth_set from kbbi_v.csv (KBBI V ground truth)...');
const csvPath = path.join(ROOT, 'kbbi_v.csv');
if (!fs.existsSync(csvPath)) { console.error('ERROR: kbbi_v.csv not found! Run download first.'); process.exit(1); }

const truthSet = new Set();
fs.readFileSync(csvPath, 'utf8').split('\n').slice(1).forEach(line => {
    const w = clean(line.split(',')[0].replace(/^"|"$/g, ''));
    if (isValid(w)) truthSet.add(w);
});
console.log(`  ✅ Ground truth: ${truthSet.size.toLocaleString('id-ID')} verified KBBI words\n`);

// ── 2. Kumpulkan kandidat dari semua sumber ────────────────────────────────────
const candidates = new Set([...truthSet]); // mulai dari ground truth sendiri

// Damzaky v1
const wPath = path.join(ROOT, 'words.txt');
if (fs.existsSync(wPath)) {
    let added = 0;
    fs.readFileSync(wPath, 'utf8').split('\n').forEach(l => { const w = clean(l); if (isValid(w)) { candidates.add(w); added++; } });
    console.log(`  + words.txt (damzaky v1):     ${added.toLocaleString('id-ID')} kata masuk kandidat`);
}

// Damzaky v0.5.1
const w051 = path.join(ROOT, 'words_v051.txt');
if (fs.existsSync(w051)) {
    let added = 0;
    fs.readFileSync(w051, 'utf8').split('\n').forEach(l => { const w = clean(l); if (isValid(w)) { candidates.add(w); added++; } });
    console.log(`  + words_v051.txt (damzaky v2): ${added.toLocaleString('id-ID')} kata masuk kandidat`);
}

// Hidayathamir
const hPath = path.join(ROOT, 'kbbi_hidayat.csv');
if (fs.existsSync(hPath)) {
    let added = 0;
    fs.readFileSync(hPath, 'utf8').split('\n').slice(1).forEach(line => {
        const w = clean(line.split(',')[0].replace(/^"|"$/g, ''));
        if (isValid(w)) { candidates.add(w); added++; }
    });
    console.log(`  + kbbi_hidayat.csv:             ${added.toLocaleString('id-ID')} kata masuk kandidat`);
}

console.log(`\n  Total kandidat: ${candidates.size.toLocaleString('id-ID')} kata`);

// ── 3. FILTER KETAT: hanya simpan yang ada di truth_set ───────────────────────
console.log('\n🔍 Filtering — hanya simpan yang ada di KBBI V ground truth...');
const verified = [...candidates].filter(w => truthSet.has(w)).sort();

const rejected = candidates.size - verified.length;
console.log(`  ✅ Lolos filter KBBI: ${verified.length.toLocaleString('id-ID')} kata`);
console.log(`  ❌ Dibuang (tidak ada di KBBI): ${rejected.toLocaleString('id-ID')} kata`);
console.log(`  (termasuk: aa, ab, ac, ao, drakor, jomblo, dll)`);

// ── 4. Output ────────────────────────────────────────────────────────────────────
const output = `window.KBBI_WORDS=${JSON.stringify(verified)};`;
fs.writeFileSync(path.join(ROOT, 'data', 'words.js'), output, 'utf8');
console.log(`\n✅ data/words.js: ${verified.length.toLocaleString('id-ID')} kata — ${(output.length / 1024 / 1024).toFixed(2)} MB`);

// ── 5. Spot-check ───────────────────────────────────────────────────────────────
console.log('\n🧪 Spot check — kata palsu HARUS absent:');
const vSet = new Set(verified);
const palsu = ['aa', 'ab', 'ac', 'ao', 'aal', 'aan', 'drakor', 'jomblo', 'ngebut', 'ngobrol', 'bucin'];
palsu.forEach(w => console.log(`  ${!vSet.has(w) ? '✅ absent' : '❌ MASIH ADA (bug!)'} "${w}"`));

console.log('\n🧪 Spot check — kata valid HARUS ada:');
const valid = ['abadi', 'zakat', 'adaptasi', 'inovasi', 'zonasi', 'italia', 'koordinasi', 'mobilisasi'];
valid.forEach(w => console.log(`  ${vSet.has(w) ? '✅ ada' : '❌ HILANG!'} "${w}"`));
