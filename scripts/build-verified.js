// scripts/build-verified.js  (v5 — strict KBBI V intersection + JSON 4-part support)
// Strategy:
//   1. kbbi_v.csv  → ground truth (only words here pass the final filter)
//   2. kbbi_v JSON 4-parts → extra "nama" entries added to ground truth
//   3. damzaky, Hidayathamir → additional candidates filtered through ground truth
//   4. isValid() guards: min 3 chars, a-z only, no all-same-char, no singkatan

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

function clean(w) {
    return (w || '').toString().trim().toLowerCase()
        .replace(/\s*\(\d+\)\s*$/, '').trim();
}

// Kata yang ADA di KBBI tapi TIDAK VALID untuk Sambung Kata Roblox
// (singkatan lolos filter, kata asing pendek, dll — tambahkan sesuai kebutuhan)
const BLOCKLIST = new Set([
    // Kata asing/singkatan yang lolos filter KBBI tapi tidak valid di Sambung Kata
    'aan',  // "bayi laki-laki" dlm bahasa tertentu, bukan kata Indonesia
    'aal',  // singkatan Akademi Angkatan Laut
    'aau',  // singkatan
    'apm',  // singkatan
    'abn',  // singkatan
    'abs',  // singkatan umum
    'acc',  // singkatan bahasa Inggris
    'adv',  // singkatan
    'afc',  // singkatan
    'afk',  // singkatan internet
    'ahl',  // singkatan arab
    'apr',  // singkatan April
    'apn',  // singkatan
    'apu',  // singkatan
    'upp',  // singkatan
    'uup',  // singkatan (Undang-Undang Perkawinan)
    'uus',  // tidak dikenal
]);

function isValid(w) {
    if (!/^[a-z]{3,}$/.test(w)) return false;      // min 3 huruf, hanya a-z
    if (/^(.)\\1+$/.test(w)) return false;           // buang: bbb, ccc (pengulangan tunggal)
    if (BLOCKLIST.has(w)) return false;             // kata yang terbukti tidak valid game
    // Kata pendek (≤5 huruf) WAJIB punya minimal 1 vokal (buang singkatan tanpa vokal)
    if (w.length <= 5 && !/[aeiou]/.test(w)) return false;
    return true;
}

// ── 1. Build truth_set dari kbbi_v.csv ────────────────────────────────────────
console.log('\n🔑 Building truth_set from kbbi_v.csv (KBBI V ground truth)...');
const csvPath = path.join(ROOT, 'kbbi_v.csv');
if (!fs.existsSync(csvPath)) {
    console.error('ERROR: kbbi_v.csv not found!');
    process.exit(1);
}

const truthSet = new Set();
fs.readFileSync(csvPath, 'utf8').split('\n').slice(1).forEach(line => {
    const cols = line.split(',');
    const key = clean(cols[0].replace(/^"|"$/g, ''));
    const kelas = (cols[7] || '').toLowerCase(); // kolom 'kelas' (index 7)
    // Buang singkatan & akronim — tidak valid untuk Sambung Kata
    if (kelas.includes('singkatan') || kelas.includes('akronim')) return;
    if (isValid(key)) truthSet.add(key);
});
console.log(`  ✅ CSV ground truth: ${truthSet.size.toLocaleString('id-ID')} words`);

// ── 2. Tambah dari KBBI V JSON 4-part (streaming regex extract) ───────────────
// CATATAN: JSON hanya dipakai untuk menambah kandidat, bukan menambah ground truth.
// Ini mencegah singkatan/noise dari JSON masuk ke dataset akhir.
console.log('\n📖 Extracting from KBBI V JSON parts (for candidates only)...');
const jsonCandidates = new Set();
for (let p = 1; p <= 4; p++) {
    const jPath = path.join(ROOT, `kbbi_v_part${p}.json`);
    if (!fs.existsSync(jPath)) { console.log(`  ⚠️  kbbi_v_part${p}.json not found, skipping`); continue; }

    const raw = fs.readFileSync(jPath, 'utf8');
    // Extract "nama": "..." values — these are headword entries in JSON
    const re = /"nama"\s*:\s*"([^"]+)"/g;
    let m;
    let partFound = 0;
    while ((m = re.exec(raw)) !== null) {
        const w = clean(m[1]);
        if (isValid(w)) { jsonCandidates.add(w); partFound++; }
    }
    console.log(`  📄 kbbi_v_part${p}.json: ${partFound.toLocaleString('id-ID')} entries scanned`);
}
console.log(`  JSON candidates total: ${jsonCandidates.size.toLocaleString('id-ID')} (akan difilter lewat CSV ground truth)\n`);

// ── 3. Kumpulkan kandidat dari semua sumber ────────────────────────────────────
const candidates = new Set([...truthSet]); // start from CSV ground truth

// Tambah JSON candidates ke pool
jsonCandidates.forEach(w => candidates.add(w));
console.log(`  + KBBI JSON 4-part: ${jsonCandidates.size.toLocaleString('id-ID')} kata masuk kandidat`);

// Damzaky v1
const wPath = path.join(ROOT, 'words.txt');
if (fs.existsSync(wPath)) {
    let added = 0;
    fs.readFileSync(wPath, 'utf8').split('\n').forEach(l => {
        const w = clean(l);
        if (isValid(w)) { candidates.add(w); added++; }
    });
    console.log(`  + words.txt (damzaky v1):     ${added.toLocaleString('id-ID')} kata masuk kandidat`);
}

// Damzaky v0.5.1
const w051 = path.join(ROOT, 'words_v051.txt');
if (fs.existsSync(w051)) {
    let added = 0;
    fs.readFileSync(w051, 'utf8').split('\n').forEach(l => {
        const w = clean(l);
        if (isValid(w)) { candidates.add(w); added++; }
    });
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
console.log('  (semua kandidat akan difilter melalui CSV ground truth di step berikutnya)');


// ── 4. FILTER KETAT: hanya simpan yang ada di truth_set ───────────────────────
console.log('\n🔍 Filtering — hanya simpan yang ada di KBBI V ground truth...');
const verified = [...candidates].filter(w => truthSet.has(w)).sort();

const rejected = candidates.size - verified.length;
console.log(`  ✅ Lolos filter KBBI: ${verified.length.toLocaleString('id-ID')} kata`);
console.log(`  ❌ Dibuang (tidak ada di KBBI): ${rejected.toLocaleString('id-ID')} kata`);

// ── 5. Output ─────────────────────────────────────────────────────────────────
const output = `window.KBBI_WORDS=${JSON.stringify(verified)};`;
fs.writeFileSync(path.join(ROOT, 'data', 'words.js'), output, 'utf8');
console.log(`\n✅ data/words.js: ${verified.length.toLocaleString('id-ID')} kata — ${(output.length / 1024 / 1024).toFixed(2)} MB`);

// ── 6. Spot-check ─────────────────────────────────────────────────────────────
console.log('\n🧪 Spot check — kata palsu HARUS absent:');
const vSet = new Set(verified);
const palsu = ['aa', 'ab', 'ac', 'ao', 'aal', 'aan', 'aau', 'apm', 'drakor', 'jomblo', 'ngebut', 'ngobrol', 'bucin'];
palsu.forEach(w => console.log(`  ${!vSet.has(w) ? '✅ absent' : '❌ MASIH ADA (bug!)'} "${w}"`));

console.log('\n🧪 Spot check — kata valid HARUS ada:');
const valid = ['abadi', 'zakat', 'adaptasi', 'inovasi', 'zonasi', 'italia', 'koordinasi', 'mobilisasi', 'takwa', 'alam'];
valid.forEach(w => console.log(`  ${vSet.has(w) ? '✅ ada' : '❌ HILANG!'} "${w}"`));

console.log('\nDONE ✅');
