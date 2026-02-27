// ==========================================
//  SAMBUNG KATA HELPER — app.js
//  Dataset: Embedded 1500+ kata bahasa Indonesia
// ==========================================

// ---- EMBEDDED WORD DATABASE ----
const EMBEDDED_WORDS = [
  // A
  "abadi", "abah", "abai", "abal", "aban", "abang", "abar", "abas", "abat", "abau", "abad", "abdi", "abdu", "aben", "aber", "abes", "abit", "abiu", "abon", "abri", "abus", "acak", "acap", "acar", "acara", "acat", "acau", "acu", "acuh", "acuk", "adab", "adat", "adab", "adegan", "adik", "adil", "adu", "agak", "agam", "agen", "agih", "agul", "agung", "ahli", "aib", "aids", "aing", "ajar", "ajak", "ajal", "ajan", "ajang", "ajar", "ajek", "ajil", "ajug", "ajur", "akad", "akan", "akal", "akar", "akau", "akhir", "akhlak", "akil", "akrab", "aksara", "aktif", "aktual", "aku", "alai", "alam", "alang", "alas", "alat", "alau", "alias", "alin", "alir", "alku", "alot", "alpa", "alun", "amah", "amal", "aman", "ambai", "ambak", "ambal", "ambang", "ambar", "ambi", "ambil", "ambin", "ambit", "ambok", "ambul", "ambun", "ambus", "ame", "amir", "ampas", "ampuh", "amsal", "amuk", "anai", "anak", "anang", "anda", "andai", "andal", "andas", "aneh", "aneka", "angin", "angka", "angkasa", "angkat", "angker", "angkuh", "angsa", "anil", "antar", "anti", "antik", "antip", "antri", "anu", "anyam", "apa", "apak", "apal", "apel", "apit", "april", "arif", "arik", "aril", "arip", "arit", "arung", "arus", "as", "asah", "asak", "asal", "asam", "asan", "asar", "asas", "asi", "asli", "asma", "aspal", "aspek", "asung", "asyik", "atas", "atap", "atau", "atlet", "atma", "atom", "atau", "auh", "aula", "aura", "aulia", "awan", "awam", "awas", "awet", "ayah", "ayak", "ayal", "ayam", "ayat", "ayun",
  // B
  "babi", "babu", "baca", "badan", "bagai", "bagus", "baik", "bajak", "baju", "bakti", "balap", "balas", "bali", "balik", "balon", "balut", "bambu", "banci", "banding", "bangga", "bangkit", "bangsa", "banyak", "bapak", "baru", "batas", "batu", "bawa", "bayam", "bayar", "bazar", "beban", "bebas", "bekal", "bekas", "belah", "belang", "benci", "bengkak", "berani", "bersih", "besan", "besi", "bisa", "bohong", "bola", "botol", "budak", "buku", "bumi", "buruk", "burung", "bunga", "bungkus", "buntu", "busuk", "butir", "buaya", "bubur", "bulat", "bumbu", "buncis", "buncit", "bunglon", "buram", "burik", "baris", "barkas", "barter", "basah", "batan", "bayat", "bebek", "bedil", "bejat", "bekam", "belai", "belit", "bendung", "benua", "berahi", "beras", "berita", "berlian", "biasa", "bibir", "bijak", "binar", "bocah", "bohong", "bola", "bolor", "bopeng", "boros", "bubuk", "bukit", "buluh", "buncah", "bungah", "bupati", "burgul", "buset",
  // C
  "cabai", "cabang", "cabar", "cacat", "cahaya", "calang", "calon", "campur", "canda", "cantik", "cari", "catur", "cedera", "cela", "cemar", "cepat", "cerdas", "cerita", "cilok", "cinta", "cipta", "coret", "cuaca", "cucian", "cukup", "curang", "curhat", "curiga", "cabul", "cacah", "cadar", "cadik", "cafri", "caing", "cakap", "cakra", "calung", "camah", "canai", "capek", "capung", "carut", "cawat", "cebur", "cekal", "cekam", "cekat", "ceking", "cekok", "celah", "cemas", "cembung", "cendol", "cengal", "cengkam", "cepet", "cerai", "cermat", "cetus", "cihu", "cikal", "cikung", "cikup", "cilik", "cinta", "cipta", "cirri", "cobaan", "coblos", "comel", "comot", "copot", "corak", "corah", "cubit", "cucuk", "cucut", "cukil", "cukong", "cumbu", "cunggur",
  // D
  "dada", "dagang", "dagu", "dahulu", "daki", "dalam", "damai", "dayung", "dekat", "demi", "dengar", "depan", "deras", "desa", "detak", "dewasa", "diam", "didik", "dinas", "doa", "dominan", "dongeng", "duduk", "duka", "dunia", "duri", "dusta", "darah", "darat", "dasar", "datang", "daulan", "debat", "dedak", "degan", "dekan", "dekat", "delta", "demam", "dengki", "derai", "desak", "desir", "detak", "dewal", "digital", "dinas", "diskon", "dokar", "donasi", "dosis", "drakor", "dukun", "dulang", "dungu", "durasi", "dusun", "dutaan", "duwit",
  // E
  "edar", "efek", "efisien", "egois", "ekor", "ekonomi", "elan", "elektrik", "elok", "emak", "emosi", "empat", "energi", "enak", "enau", "enak", "epoch", "erat", "era", "etika", "evaluasi", "eksis", "ekspor", "eksak", "ekskul", "eksotis", "ekspres",
  // F
  "faktor", "fakta", "familiar", "fauna", "fabel", "fajar", "fakir", "falsafah", "fantasi", "fardu", "fasih", "fatal", "fauna", "favorit", "festival", "fisik", "fitri", "flora", "fokus", "forum", "foto", "fungsi", "futsal",
  // G
  "gagah", "gagal", "galah", "galak", "galon", "gambar", "ganas", "gantung", "garut", "gelar", "gigih", "global", "gudang", "gula", "gulung", "gundah", "guru", "gunung", "garis", "garang", "garuda", "gasak", "gatal", "gaun", "gelap", "gelar", "geleng", "gemilang", "genap", "genit", "gerak", "gerilya", "gilir", "girang", "globalisasi", "gotong", "goyah", "gunduk", "gusar",
  // H
  "habis", "hadap", "hadir", "hafal", "halal", "halus", "hamba", "hampa", "harap", "harga", "hasil", "hebat", "hemat", "hidup", "hijau", "hitam", "hormat", "hutang", "hutan", "hakim", "harap", "hari", "harmoni", "hasrat", "hayat", "hening", "heran", "hidangan", "hikmat", "himpun", "hirup", "honor",
  // I
  "ibadah", "identik", "ikhlas", "ikhtisar", "ilmu", "imam", "impian", "ingin", "ingat", "insaf", "insan", "istana", "izin", "ikatan", "ikat", "iklan", "inovasi", "inspirasi", "integritas", "istimewa", "izzah",
  // J
  "jabat", "jagad", "jaga", "jahat", "jalan", "jambu", "jarak", "jasa", "jebak", "jelas", "jimat", "jiwa", "juara", "jujur", "juta", "jadwal", "jaksa", "janji", "jawab", "jeli", "jembatan", "jernih", "jogo", "joget", "jorok", "jurus", "juwara", "jagur", "jalur", "jamak", "janah", "jarum", "jauhi", "jeda", "jelma", "jelajah", "jenaka", "jendela", "jengah", "jerami", "jerawat", "jerih", "jilbab", "jinak", "jodoh", "joki", "jomblo", "jujukan", "julung", "jumawa",
  // K
  "kabut", "kacang", "kadar", "kahwin", "kalem", "kampung", "kanan", "karya", "kasih", "kaya", "kerja", "kuat", "kunci", "kusta", "kabeh", "kader", "kaku", "kalam", "kali", "kalur", "kanal", "kandas", "kanker", "karang", "karena", "karet", "kartu", "kasab", "kasak", "kasep", "kawaan", "kawul", "kebal", "kebab", "kebun", "kecil", "kederma", "kehendak", "kejam", "kelas", "kemah", "kenal", "kepada", "ketat", "keujung", "kewajiban", "khawatir", "kira", "kirim", "klik", "komit", "konsep", "kota", "kreasi", "kuasa", "kucing", "kukuh", "kuman", "kumar", "kumis", "kursi", "kusam", "kutuk", "kota", "komando", "komunitas", "kontrol", "korupsi", "kreatif", "kritik",
  // L
  "laba", "labu", "lacak", "ladang", "lagang", "lagak", "lahan", "lahir", "laik", "laknat", "laksana", "lalu", "laman", "lamar", "lambai", "langit", "langkah", "lapang", "larangan", "lari", "lautan", "lawan", "layar", "lebat", "legam", "leher", "lemah", "lemari", "lepas", "lestari", "lincah", "lingkar", "lingkup", "lisan", "logam", "lorong", "luang", "lubang", "lugas", "lunak", "lurus", "luwes", "labrak", "lagak", "lahar", "lajang", "laku", "lalai", "lancar", "lanting", "lapuk", "lasak", "lawak", "legit", "leher", "lelaki", "lembing", "lengkap", "lenyap", "lewat", "lidah", "liku", "lilit", "limbah", "limit", "lincin", "lindung", "liputan", "listrik", "logis", "lokasi", "lurah", "lusuh",
  // M
  "maju", "makan", "malam", "mampu", "marah", "masa", "masalah", "maya", "merah", "mewah", "modal", "momen", "motif", "mudah", "mulia", "mulut", "murni", "maaf", "madani", "mahir", "mahkota", "malas", "mangsa", "mantap", "manusia", "mapan", "masak", "masuk", "matang", "mekar", "melodi", "menang", "mendapat", "menuju", "meraih", "mikir", "minat", "miskin", "mobil", "modul", "monumen", "moral", "motivasi", "murid", "musuh", "musim",
  // N
  "nabati", "nafas", "naik", "nalar", "nama", "nampak", "nangis", "narasi", "nasib", "negeri", "nilai", "normal", "nyaman", "nyata", "nyawa", "nabi", "nadim", "nakhoda", "nalar", "namun", "nangka", "naskah", "natura", "nelayan", "nenda", "niaga", "niat", "nikah", "nimbrung", "norma", "nuansa", "nyali", "nyanyian", "nyaring", "nyaring", "nyaris",
  // NG
  "ngaben", "nganga", "ngarai", "ngeri", "ngilu", "ngeong", "ngebut", "ngomong", "nguap", "ngotot", "ngobrol", "ngambek", "ngantuk", "ngeluh", "ngerti", "ngejek", "ngemis", "ngebet", "ngeden", "ngemas", "ngendon", "ngenes", "ngengat", "ngeong", "ngiang", "ngiri", "ngitung", "ngomel", "ngomong", "ngopit", "ngorbit", "ngotot", "ngrembug", "ngulet", "ngunyah", "ngupas", "ngurus", "ngusir",
  // NY
  "nyai", "nyak", "nyala", "nyali", "nyaman", "nyamuk", "nyana", "nyanyi", "nyanyian", "nyaring", "nyaris", "nyata", "nyawa", "nyelekit", "nyenyak", "nyepi", "nyiur", "nyonya", "nyungsung",
  // O
  "obat", "objek", "olah", "oleh", "omong", "opini", "orang", "otak", "otomatis", "otoritas", "oval", "oasis", "obral", "odol", "ojek", "oknum", "oles", "ombak", "omset", "onar", "opsi", "orbit", "orientasi", "original", "ornament",
  // P
  "paham", "pagi", "pahat", "pakai", "panjang", "pantai", "pari", "pasang", "peduli", "pelan", "perlu", "pikir", "pohon", "pokok", "putih", "pejuang", "pemuda", "pendidikan", "percaya", "perduli", "persatu", "pijak", "pindah", "pingsan", "pintar", "punya", "pusat", "pusing", "paksa", "panas", "panutan", "pasrah", "patuh", "payah", "pecat", "pedas", "pejalan", "pekan", "pelaut", "pembatas", "penanda", "pencari", "pendek", "perang", "perkuat", "petani", "piala", "piatu", "pilih", "pinak", "pioner", "pirsa", "pisang", "polem", "polisi", "populer", "positif", "prinsip", "proyek", "publik", "pupuk", "purna",
  // Q
  "qari",
  // R
  "rajin", "rakyat", "ramai", "rasa", "reformasi", "rela", "riang", "rimba", "ringan", "roda", "ruang", "runtuh", "rapi", "ras", "ratap", "rawan", "rebah", "rebut", "redah", "refleksi", "rela", "renang", "rendam", "resort", "respon", "retak", "ribu", "ridho", "ringkas", "risi", "ritual", "rohani", "romansa", "rongrong", "rosok", "rugi", "rumus", "runcing",
  // S
  "sabar", "sabun", "sahaja", "sama", "sampai", "satu", "sejuk", "sekolah", "semua", "sinar", "sisi", "solusi", "syukur", "sadar", "sakit", "salam", "saling", "santun", "segan", "segar", "sehat", "seimbang", "sejarah", "sekali", "sekalian", "selalu", "seluruh", "semangat", "sementara", "sendiri", "serius", "sigap", "silam", "simbol", "simpul", "siram", "sirnagalih", "soal", "sosial", "sumber", "sungguh", "supaya", "surga", "susah", "syarat", "syukur",
  // T
  "tanam", "tangan", "tegas", "tepat", "tiap", "tinggi", "tulus", "turun", "tujuan", "tabah", "tanah", "tandas", "tangkas", "tapak", "tekad", "tekun", "tempa", "tempat", "tenang", "tengah", "terang", "terbaik", "terbuka", "terdiri", "terima", "terjalin", "terus", "tetap", "tiada", "timbal", "tipis", "tokoh", "topik", "tradisi", "tropis", "tugas", "tuntas", "turut",
  // U
  "ujar", "ujung", "ulang", "ulung", "umum", "urai", "usaha", "utama", "ubah", "ulet", "ulung", "umpan", "unggul", "unik", "unit", "upaya", "urai", "urut", "usul", "utuh", "ulas", "ulur", "umpat", "ungkap", "upacara", "uraian",
  // V
  "valid", "varian", "visi", "vital", "variasi", "verbal", "versi", "veteran", "vokasi",
  // W
  "wajah", "waktu", "warna", "wisata", "wujud", "wadah", "wahai", "wahyu", "wangi", "waras", "watak", "wewenang", "wibawa", "wilayah", "wirausaha", "wujudkan",
  // X
  "xenon",
  // Y
  "yakin", "yang", "yatim", "yakni", "yuran",
  // Z
  "zaman", "zona", "zakat", "zalim", "zariah", "ziarah", "zinah", "zirah",
  // Kata tambahan sesuai konteks Sambung Kata
  "abses", "acara", "adegan", "adem", "adil", "agama", "agape", "agensi", "agenda", "agregat", "ahad", "ahli", "aib", "air", "aja", "akal", "akhlak", "akrab", "aksi", "aktif", "aktivis", "alam", "alami", "alasan", "alat", "alegan", "alih", "aliran", "alku", "almari", "alpa", "alun", "amalan", "ambisi", "amin", "ampuh", "analisa", "andal", "aneka", "anggun", "anjing", "antar", "antusias", "apik", "arah", "argumen", "arif", "asal", "asas", "asli", "asri", "atasi", "aturan", "awal", "awam", "awas", "ayat", "azab", "azam",
  "babak", "bagian", "bahaya", "bakat", "bakat", "balik", "bantuan", "banyak", "berhak", "berkah", "bijak", "bijaksana", "bimbang", "bodoh", "bongkar", "bursa", "butuh",
  "cakap", "cakrawala", "cerah", "cerdik", "cermat", "cobaan", "corak", "curhat",
  "daftar", "dahsyat", "damai", "dampak", "daya", "dedikasi", "deras", "desak", "dewi", "dialog",
  "edukasi", "elemen", "elite", "emosi", "etis", "evaluasi",
  "faham", "faedah", "fikir", "filsafat", "final", "forum",
  "gagasan", "galau", "gigih", "golongan", "guna",
  "hadiah", "hakim", "hambatan", "harmoni", "hasrat", "hebat", "hikmah", "holistik", "horor",
  "ideal", "identitas", "ikhtiar", "ilmiah", "iman", "imbang", "inovatif", "insani", "inspirasi", "integritas",
  "jabatan", "jago", "jalani", "jaminan", "jasad", "jelajah", "jihadfi", "jitu", "jodoh",
  "kader", "kajian", "karakter", "keadilan", "kebenaran", "keberanian", "kebebasan", "kehormatan", "kemampuan", "kepribadian", "kesetiaan", "keutamaan", "khidmat", "komitmen", "kreativitas", "kritis",
  "landasan", "langkah", "lapang", "latihan", "lawan", "legasi", "lembaga", "lengkap", "lestari", "lingkungan", "logika", "loyalitas",
  "maju", "mandiri", "manfaat", "martabat", "masyarakat", "mawas", "meaning", "melawan", "mentalitas", "metode", "motivasi", "mutu",
  "nasional", "netral", "nilai", "normatif", "nalar",
  "objektif", "orisinal",
  "peluang", "pemikiran", "pengetahuan", "perubahan", "pilihan", "prinsip", "produktif", "profesional", "progresif",
  "qur'an",
  "raih", "realitas", "reformasi", "relasi", "revolusi", "realistis",
  "semangat", "sikap", "sistem", "solidaritas", "standar", "strategi", "sukses", "sumber",
  "taktik", "talenta", "tanggung", "tegar", "teladan", "teori", "tindakan", "toleransi", "transformasi", "transparan",
  "ukuran", "unggulan", "universal", "upaya",
  "visi", "volunter",
  "wawasan", "wirausaha",
  "yaqin",
  "zanbia",
];

// ---- State ----
let allWords = [];
let filteredWords = [];
let usedWords = new Set();
let invalidWords = new Set();
let currentFilter = 'all';
let currentSort = 'length-asc';
let currentDifficulty = 0; // 0=semua, 1=sulit, 2=sangat sulit, 3=ekstrem
let currentLetter = '';
let displayLimit = 60;
let isShuffled = false;


// Tingkat kesulitan huruf akhir (seberapa susah lawan cari kata berawalan huruf tsb)
// 1 = Sulit 🔥  |  2 = Sangat Sulit 🔥🔥  |  3 = Ekstrem 🔥🔥🔥
const DIFFICULTY_MAP = {
  c: 1, g: 1, h: 1, o: 1, w: 1, y: 1,  // Level 1 — sulit
  e: 2, f: 2, v: 2, x: 2,               // Level 2 — sangat sulit
  q: 3, z: 3,                            // Level 3 — ekstrem
};

function getDifficulty(word) {
  return DIFFICULTY_MAP[word.slice(-1)] || 0;
}

// ---- DOM refs ----
const letterInput = document.getElementById('letterInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsGrid = document.getElementById('resultsGrid');
const resultsInfo = document.getElementById('resultsInfo');
const resultsActions = document.getElementById('resultsActions');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const remainingCount = document.getElementById('remainingCount');
const historyCard = document.getElementById('historyCard');
const historyList = document.getElementById('historyList');
const resetBtn = document.getElementById('resetBtn');
const wordCountEl = document.getElementById('wordCount');
const totalWordsEl = document.getElementById('totalWords');
const usedCountEl = document.getElementById('usedCount');
const toast = document.getElementById('toast');
const shuffleBtn = document.getElementById('shuffleBtn');

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initWords();
  setupEventListeners();
});

// ---- PARTICLES ----
function createParticles() {
  const container = document.getElementById('bgParticles');
  const colors = ['#00FFB3', '#4FC3F7', '#B39DDB', '#FFD54F'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${Math.random() * 15 + 10}s;
      animation-delay:${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
}

// ---- INIT WORDS ----
function initWords() {
  // Load invalid words dari localStorage dulu
  loadInvalid();

  // Gunakan KBBI_WORDS dari words.js (dimuat via <script> tag — no CORS)
  const kbbi = (typeof window.KBBI_WORDS !== 'undefined' && Array.isArray(window.KBBI_WORDS))
    ? window.KBBI_WORDS
    : [];

  // Gabung KBBI + embedded list, deduplicate, sort
  const embedded = EMBEDDED_WORDS
    .map(w => w.toString().toLowerCase().trim())
    .filter(w => /^[a-z]{2,}$/.test(w));

  allWords = [...new Set([...kbbi, ...embedded])].sort();

  wordCountEl.textContent = `${allWords.length.toLocaleString('id-ID')} kata`;
  const dot = totalWordsEl.querySelector('.stat-dot');
  if (dot) dot.classList.remove('loading');

  loadStats();
  loadHistory();
}

// ---- EVENT LISTENERS ----
function setupEventListeners() {
  letterInput.addEventListener('input', () => {
    const val = letterInput.value;
    clearBtn.classList.toggle('visible', val.length > 0);
    if (val.length >= 1) doSearch();
    else resetResults();
  });

  letterInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  searchBtn.addEventListener('click', doSearch);

  clearBtn.addEventListener('click', () => {
    letterInput.value = '';
    clearBtn.classList.remove('visible');
    resetResults();
    letterInput.focus();
  });

  loadMoreBtn.addEventListener('click', () => {
    displayLimit += 60;
    renderResults();
  });

  resetBtn.addEventListener('click', resetSession);
  shuffleBtn.addEventListener('click', toggleShuffle);

  document.querySelectorAll('.filter-chip[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      displayLimit = 60;
      isShuffled = false;
      applyFilterSort();
    });
  });

  document.querySelectorAll('.filter-chip[data-sort]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-sort]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSort = btn.dataset.sort;
      displayLimit = 60;
      isShuffled = false;
      applyFilterSort();
    });
  });

  document.querySelectorAll('.filter-chip[data-diff]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-diff]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDifficulty = parseInt(btn.dataset.diff, 10);
      displayLimit = 60;
      isShuffled = false;
      applyFilterSort();
    });
  });

  const manageInvalidBtn = document.getElementById('manageInvalidBtn');
  if (manageInvalidBtn) manageInvalidBtn.addEventListener('click', toggleBlacklist);

  const statsToggleBtn = document.getElementById('statsToggleBtn');
  if (statsToggleBtn) statsToggleBtn.addEventListener('click', toggleStatsPanel);

  const resetStatsBtn = document.getElementById('resetStatsBtn');
  if (resetStatsBtn) resetStatsBtn.addEventListener('click', resetStatsConfirm);
}

// ---- SEARCH ----
function doSearch() {
  const raw = letterInput.value.trim().toLowerCase();
  if (!raw) return;
  currentLetter = raw;
  displayLimit = 60;
  isShuffled = false;
  // Catat huruf yang dicari untuk statistik
  stats.letterCounts[raw] = (stats.letterCounts[raw] || 0) + 1;
  saveStats();
  applyFilterSort();
}

function applyFilterSort() {
  if (!currentLetter) return;

  let base = allWords.filter(w =>
    w.startsWith(currentLetter) && !usedWords.has(w) && !invalidWords.has(w)
  );

  switch (currentFilter) {
    case 'short': base = base.filter(w => w.length <= 5); break;
    case 'medium': base = base.filter(w => w.length >= 6 && w.length <= 8); break;
    case 'long': base = base.filter(w => w.length >= 9); break;
  }

  // Filter by difficulty level (independen dari sort)
  if (currentDifficulty > 0) {
    base = base.filter(w => getDifficulty(w) >= currentDifficulty);
  }

  switch (currentSort) {
    case 'length-asc': base.sort((a, b) => a.length - b.length || a.localeCompare(b)); break;
    case 'length-desc': base.sort((a, b) => b.length - a.length || a.localeCompare(b)); break;
    case 'alpha': base.sort((a, b) => a.localeCompare(b)); break;
    case 'hard-first': base.sort((a, b) => {
      const diff = getDifficulty(b) - getDifficulty(a); // tertinggi dulu
      return diff !== 0 ? diff : a.length - b.length;
    }); break;
  }

  if (isShuffled) shuffleArray(base);
  filteredWords = base;
  renderResults();
}

function resetResults() {
  currentLetter = '';
  filteredWords = [];
  resultsGrid.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">💡</div>
      <p>Ketik huruf di atas untuk melihat saran kata</p>
      <p class="empty-sub">Contoh: ketik <code>a</code> untuk kata berawalan "A"</p>
    </div>`;
  resultsInfo.innerHTML = 'Masukkan huruf untuk mulai';
  resultsActions.style.display = 'none';
  loadMoreWrap.style.display = 'none';
}

// ---- RENDER ----
function renderResults() {
  const total = filteredWords.length;
  const toShow = filteredWords.slice(0, displayLimit);

  if (total === 0) {
    resultsInfo.innerHTML = currentLetter
      ? `Tidak ada kata berawalan <strong>"${currentLetter.toUpperCase()}"</strong>`
      : 'Masukkan huruf untuk mulai';
    resultsActions.style.display = 'none';
    resultsGrid.innerHTML = `
      <div class="no-results">
        <div class="empty-icon">😅</div>
        <p>Tidak ada kata ditemukan</p>
        <p class="empty-sub">Coba huruf lain atau ubah filter</p>
      </div>`;
    loadMoreWrap.style.display = 'none';
    return;
  }

  resultsInfo.innerHTML = `Ditemukan <strong>${total.toLocaleString('id-ID')}</strong> kata berawalan <strong>"${currentLetter.toUpperCase()}"</strong>`;
  resultsActions.style.display = 'flex';

  const fragment = document.createDocumentFragment();
  toShow.forEach((word, i) => fragment.appendChild(createWordCard(word, i)));
  resultsGrid.innerHTML = '';
  resultsGrid.appendChild(fragment);

  const remaining = total - displayLimit;
  if (remaining > 0) {
    loadMoreWrap.style.display = 'block';
    remainingCount.textContent = `(+${remaining.toLocaleString('id-ID')} lagi)`;
  } else {
    loadMoreWrap.style.display = 'none';
  }
}

function createWordCard(word, index) {
  const card = document.createElement('div');
  card.className = 'word-card';
  card.style.animationDelay = `${Math.min(index * 0.02, 0.3)}s`;
  card.dataset.word = word;

  const prefix = word.slice(0, currentLetter.length);
  const rest = word.slice(currentLetter.length);
  const diff = getDifficulty(word);
  const lastL = word.slice(-1).toUpperCase();

  // Badge rendering berdasarkan level kesulitan
  const BADGES = ['', '🔥', '🔥🔥', '🔥🔥🔥'];
  const BADGE_LABELS = ['', 'badge-hard-1', 'badge-hard-2', 'badge-hard-3'];
  const badgeClass = diff > 0 ? BADGE_LABELS[diff] : '';
  const badgeIcon = diff > 0 ? BADGES[diff] : '↓';

  card.innerHTML = `
    <span class="copy-hint">📋 salin</span>
    <button class="invalid-btn" title="Kata ini tidak valid di game">❌</button>
    <div class="word-text">
      <span class="highlight">${escHtml(prefix)}</span>${escHtml(rest)}
    </div>
    <div class="word-footer">
      <span class="word-length">${word.length} huruf</span>
      <span class="last-letter-badge ${badgeClass}">${badgeIcon}${lastL}</span>
    </div>`;

  if (diff > 0) card.classList.add(`card-hard-${diff}`);

  // Klik kartu utama = salin & tandai terpakai
  card.addEventListener('click', (e) => {
    if (e.target.closest('.invalid-btn')) return; // jangan trigger jika klik tombol ❌
    handleWordClick(word, card);
  });

  // Tombol ❌ = tandai tidak valid di game
  card.querySelector('.invalid-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    markInvalid(word, card);
  });

  return card;
}

// ---- WORD CLICK ----
function handleWordClick(word, card) {
  card.classList.add('ripple');
  setTimeout(() => card.classList.remove('ripple'), 400);
  copyToClipboard(word);
  addToHistory(word);
  card.style.transition = 'all 0.3s ease';
  card.style.opacity = '0';
  card.style.transform = 'scale(0.8)';
  setTimeout(() => card.remove(), 300);
  filteredWords = filteredWords.filter(w => w !== word);
  const total = filteredWords.length;
  if (total > 0) {
    resultsInfo.innerHTML = `Ditemukan <strong>${total.toLocaleString('id-ID')}</strong> kata berawalan <strong>"${currentLetter.toUpperCase()}"</strong>`;
  }

  // Auto-reset: clear input + fokus setelah animasi card selesai
  // Results grid sengaja dibiarkan — akan auto-clear saat user ketik huruf baru
  setTimeout(() => {
    letterInput.value = '';
    clearBtn.classList.remove('visible');
    letterInput.focus();
  }, 350);
}


// ---- HISTORY ----
const LS_KEY = 'sambungkata_history';
const LS_STATS = 'sambungkata_stats';

const DEFAULT_STATS = {
  totalWordsUsed: 0,
  hardWordsUsed: 0,      // kata berakhiran huruf sulit
  longestWord: '',
  sessionsPlayed: 0,
  letterCounts: {},      // { 'n': 12, 'b': 8, ... } huruf yang paling sering dicari
  hardLetterUsed: {},    // { 'f': 3, 'x': 1 } berapa kali berhasil jebak lawan
};

let stats = { ...DEFAULT_STATS };

// ---- INVALID WORDS (tidak valid di game) ----
const LS_INVALID_KEY = 'sambungkata_invalid';

function markInvalid(word, card) {
  invalidWords.add(word);
  saveInvalid();
  // Animasi hilang
  card.style.transition = 'all 0.3s ease';
  card.style.opacity = '0';
  card.style.transform = 'scale(0.8)';
  setTimeout(() => card.remove(), 300);
  filteredWords = filteredWords.filter(w => w !== word);
  showToast(`🚫 "${word}" ditandai tidak valid`);
}

function saveInvalid() {
  try {
    localStorage.setItem(LS_INVALID_KEY, JSON.stringify([...invalidWords]));
  } catch { }
}

function loadInvalid() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_INVALID_KEY) || '[]');
    if (Array.isArray(saved)) saved.forEach(w => invalidWords.add(w));
  } catch { }
}

function toggleBlacklist() {
  const panel = document.getElementById('blacklistPanel');
  if (!panel) return;
  const isOpen = panel.style.display !== 'none';
  if (isOpen) { panel.style.display = 'none'; return; }

  panel.innerHTML = '';
  if (invalidWords.size === 0) {
    panel.innerHTML = '<p class="blacklist-empty">Tidak ada kata yang ditandai tidak valid.</p>';
    panel.style.display = 'block';
    return;
  }

  const header = document.createElement('div');
  header.className = 'blacklist-header';
  header.innerHTML = `<span>\ud83d\udeab ${invalidWords.size} kata tidak valid</span>
    <button class="reset-btn" id="restoreAllBtn">\u267b\ufe0f Pulihkan Semua</button>`;
  panel.appendChild(header);

  const list = document.createElement('div');
  list.className = 'blacklist-list';
  [...invalidWords].sort().forEach(word => {
    const tag = document.createElement('div');
    tag.className = 'blacklist-tag';
    tag.innerHTML = `<span>\ud83d\udeab ${word}</span>
      <button class="restore-btn" data-word="${word}" title="Pulihkan kata ini">\u21ba</button>`;
    tag.querySelector('.restore-btn').addEventListener('click', () => restoreInvalid(word, tag));
    list.appendChild(tag);
  });
  panel.appendChild(list);
  panel.style.display = 'block';

  document.getElementById('restoreAllBtn').addEventListener('click', () => {
    invalidWords.clear();
    saveInvalid();
    panel.style.display = 'none';
    if (currentLetter) applyFilterSort();
    showToast('\u267b\ufe0f Semua kata invalid dipulihkan!');
  });
}

function restoreInvalid(word, tagEl) {
  invalidWords.delete(word);
  saveInvalid();
  tagEl.remove();
  if (currentLetter) applyFilterSort();
  showToast(`\u267b\ufe0f "${word}" dipulihkan`);
  if (invalidWords.size === 0) {
    const panel = document.getElementById('blacklistPanel');
    if (panel) panel.style.display = 'none';
  }
}


function saveHistory() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify([...usedWords]));
  } catch { }
}

function loadHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    if (!Array.isArray(saved) || saved.length === 0) return;
    saved.forEach(word => {
      if (typeof word !== 'string') return;
      usedWords.add(word);
      // Sync stats dari riwayat yang dimuat
      stats.totalWordsUsed++;
      const diff = getDifficulty(word);
      if (diff > 0) {
        stats.hardWordsUsed++;
        const lastL = word.slice(-1);
        stats.hardLetterUsed[lastL] = (stats.hardLetterUsed[lastL] || 0) + 1;
      }
      if (word.length > (stats.longestWord?.length || 0)) stats.longestWord = word;
      // Buat tag tanpa toast
      const tag = document.createElement('div');
      tag.className = 'history-tag';
      tag.dataset.word = word;
      tag.innerHTML = `
        <span>📌 ${escHtml(word)}</span>
        <button class="history-tag-remove" title="Hapus dari riwayat">✕</button>`;
      tag.querySelector('.history-tag-remove').addEventListener('click', () => {
        usedWords.delete(word);
        usedCountEl.textContent = usedWords.size;
        tag.remove();
        saveHistory();
        if (usedWords.size === 0) historyCard.style.display = 'none';
        if (currentLetter) applyFilterSort();
      });
      historyList.append(tag);
    });
    usedCountEl.textContent = usedWords.size;
    historyCard.style.display = 'block';
    // Simpan stats yang telah disync
    saveStats();
    showToast(`📂 ${usedWords.size} kata riwayat dimuat`);
  } catch { }
}

function addToHistory(word) {
  usedWords.add(word);
  usedCountEl.textContent = usedWords.size;
  historyCard.style.display = 'block';

  // Update statistik
  stats.totalWordsUsed++;
  const diff = getDifficulty(word);
  if (diff > 0) {
    stats.hardWordsUsed++;
    const lastL = word.slice(-1);
    stats.hardLetterUsed[lastL] = (stats.hardLetterUsed[lastL] || 0) + 1;
  }
  if (word.length > (stats.longestWord?.length || 0)) stats.longestWord = word;
  saveStats();

  const tag = document.createElement('div');
  tag.className = 'history-tag';
  tag.dataset.word = word;
  tag.innerHTML = `
    <span>📌 ${escHtml(word)}</span>
    <button class="history-tag-remove" title="Hapus dari riwayat">✕</button>`;

  tag.querySelector('.history-tag-remove').addEventListener('click', () => {
    usedWords.delete(word);
    usedCountEl.textContent = usedWords.size;
    tag.remove();
    saveHistory();
    if (usedWords.size === 0) historyCard.style.display = 'none';
    if (currentLetter) applyFilterSort();
  });

  historyList.prepend(tag);
  saveHistory();
  showToast(`✅ "${word}" disalin & ditandai!`);
}

function resetSession() {
  // Ganti confirm() karena diblok browser di file:// protocol
  // Tampilkan inline confirm di tombol
  const btn = document.getElementById('resetBtn');
  if (btn.dataset.confirming === 'true') {
    // Konfirmasi kedua → eksekusi reset
    usedWords.clear();
    localStorage.removeItem(LS_KEY);
    usedCountEl.textContent = '0';
    historyList.innerHTML = '';
    historyCard.style.display = 'none';
    if (currentLetter) applyFilterSort();
    showToast('🔄 Sesi direset!');
    // Tambah jumlah sesi dimainkan
    stats.sessionsPlayed++;
    saveStats();
    btn.textContent = '🗑 Reset Sesi';
    btn.dataset.confirming = 'false';
    btn.style.background = '';
    btn.style.borderColor = '';
  } else {
    // Klik pertama → minta konfirmasi
    btn.dataset.confirming = 'true';
    btn.textContent = '⚠️ Yakin? Klik lagi';
    btn.style.background = 'rgba(255,107,107,0.25)';
    btn.style.borderColor = 'var(--neon-red)';
    // Auto-cancel setelah 3 detik
    setTimeout(() => {
      if (btn.dataset.confirming === 'true') {
        btn.dataset.confirming = 'false';
        btn.textContent = '🗑 Reset Sesi';
        btn.style.background = '';
        btn.style.borderColor = '';
      }
    }, 3000);
  }
}

// ---- SHUFFLE ----
function toggleShuffle() {
  isShuffled = !isShuffled;
  shuffleBtn.textContent = isShuffled ? '📋 Urutan asli' : '🔀 Acak';
  displayLimit = 60;
  applyFilterSort();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ---- CLIPBOARD ----
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// ---- TOAST ----
let toastTimer;
function showToast(msg, duration = 2000) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ---- UTILS ----
function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ============================================================
// STATS SYSTEM
// ============================================================
function loadStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_STATS));
    if (saved && typeof saved === 'object') {
      stats = { ...DEFAULT_STATS, ...saved };
    }
  } catch { }
}

function saveStats() {
  try { localStorage.setItem(LS_STATS, JSON.stringify(stats)); } catch { }
}

function toggleStatsPanel() {
  const panel = document.getElementById('statsCard');
  const btn = document.getElementById('statsToggleBtn');
  if (!panel) return;
  const isOpen = panel.style.display !== 'none';
  panel.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? '📊 Statistik' : '📊 Tutup';
  if (!isOpen) renderStatsPanel();
}

function resetStatsConfirm() {
  const btn = document.getElementById('resetStatsBtn');
  if (btn.dataset.confirming === 'true') {
    stats = { ...DEFAULT_STATS };
    saveStats();
    renderStatsPanel();
    showToast('📊 Statistik direset!');
    btn.textContent = '🗑 Reset Statistik';
    btn.dataset.confirming = 'false';
    btn.style.background = '';
  } else {
    btn.dataset.confirming = 'true';
    btn.textContent = '⚠️ Yakin? Klik lagi';
    btn.style.background = 'rgba(255,107,107,0.25)';
    setTimeout(() => {
      if (btn.dataset.confirming === 'true') {
        btn.dataset.confirming = 'false';
        btn.textContent = '🗑 Reset Statistik';
        btn.style.background = '';
      }
    }, 3000);
  }
}

function renderStatsPanel() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;

  // Huruf paling sering dicari
  const topLetter = Object.entries(stats.letterCounts)
    .sort((a, b) => b[1] - a[1])[0];

  // Huruf jebakan yang paling sering berhasil
  const topTrap = Object.entries(stats.hardLetterUsed)
    .sort((a, b) => b[1] - a[1])[0];

  const items = [
    { icon: '🏗️', label: 'Total Kata Dipakai', value: stats.totalWordsUsed.toLocaleString('id-ID') },
    { icon: '🔄', label: 'Sesi Dimainkan', value: stats.sessionsPlayed.toLocaleString('id-ID') },
    { icon: '🔥', label: 'Kata Jebakan Dipakai', value: stats.hardWordsUsed.toLocaleString('id-ID') },
    {
      icon: '🏆',
      label: 'Kata Terpanjang',
      value: stats.longestWord
        ? `${stats.longestWord} (${stats.longestWord.length} huruf)`
        : '—'
    },
    {
      icon: '🔍',
      label: 'Huruf Paling Sering Dicari',
      value: topLetter
        ? `"${topLetter[0].toUpperCase()}" (${topLetter[1]}x)`
        : '—'
    },
    {
      icon: '🎯',
      label: 'Jebakan Andalan',
      value: topTrap
        ? `Berakhiran "${topTrap[0].toUpperCase()}" (${topTrap[1]}x)`
        : '—'
    },
  ];

  grid.innerHTML = items.map(item => `
    <div class="stat-item">
      <div class="stat-item-icon">${item.icon}</div>
      <div class="stat-item-body">
        <div class="stat-item-label">${item.label}</div>
        <div class="stat-item-value">${item.value}</div>
      </div>
    </div>`).join('');
}
