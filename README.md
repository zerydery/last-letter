<p align="center">
  <img src="nexkata-logo.png" alt="nexkata logo" width="160" />
</p>

<h1 align="center">nexkata</h1>
<p align="center"><strong>Sambung Kata Vocabulary Helper</strong> — cari kata KBBI selanjutnya dalam hitungan detik</p>

<p align="center">
  <img src="https://img.shields.io/badge/dataset-KBBI%2071k%20kata-00FFB3?style=flat-square" />
  <img src="https://img.shields.io/badge/offline-ready-4FC3F7?style=flat-square" />
  <img src="https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-B39DDB?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-FFD54F?style=flat-square" />
</p>

---

**nexkata** adalah *vocabulary helper tool* untuk game Roblox **Sambung Kata** — permainan rantai kata bahasa Indonesia di mana setiap kata harus diawali huruf terakhir kata sebelumnya. Web ini membantu pemain menemukan kata valid berikutnya secara instan dari database KBBI, tanpa koneksi internet.

---

## Features

| Feature | Description |
|---|---|
| 🔍 **Instant Search** | Real-time word lookup as you type (1–4 letters) |
| 📚 **Dual KBBI Dataset** | Switch antara Damzaky (71k) dan KBBI Resmi (30k) |
| 🔥 **Difficulty Levels** | Words rated by how hard the ending letter is for opponents |
| ❌ **Invalid Word Blacklist** | Mark game-rejected words so they never appear again |
| 💾 **Persistent History** | Session words saved to localStorage — survives page refresh |
| 🔀 **Smart Sorting** | Sort by length (shortest/longest), A–Z, or hardest-ending-first |
| 📋 **One-click Copy** | Click any word card to copy it to clipboard instantly |
| 📱 **Mobile-first** | Fully responsive — optimized for phone use during gameplay |
| 📊 **Session Statistics** | Track kata dipakai, kata sulit, dan kata terpanjang |

---

## Dataset Switch

nexkata mendukung **2 sumber dataset KBBI** yang bisa dicapai via tombol di header:

| Dataset | Jumlah Kata | Sumber | Keterangan |
|---|---|---|---|
| **Damzaky** | 71.278 kata | [damzaky/kumpulan-kata-bahasa-indonesia-KBBI](https://github.com/damzaky/kumpulan-kata-bahasa-indonesia-KBBI) | Dataset luas — kata turunan & umum |
| **KBBI Resmi** | 30.452 kata | [nandalogina/kbbi-database](https://github.com/nandalogina/kbbi-database) | Murni dari database KBBI resmi |

---

## Difficulty Rating System

| Badge | Level | Ending Letters |
|---|---|---|
| `↓X` (blue) | Normal | a, b, d, i, j, k, l, m, n, p, r, s, t, u |
| 🔥 | Hard | c, g, h, o, w, y |
| 🔥🔥 | Very Hard | e, f, v, x |
| 🔥🔥🔥 | Extreme | q, z |

> **Pro tip:** Kata berakhiran `q` atau `z` hampir tidak bisa dilawan lawan — pakai saat mau menang!

---

## How to Use

1. Catat **huruf terakhir** kata yang dimainkan lawan
2. Ketik huruf tersebut di kotak pencarian
3. Browse hasil — urutkan **"🔥🔥🔥 Terberat"** untuk pilihan strategis
4. Klik kata → otomatis **tersalin ke clipboard** dan ditandai sudah dipakai
5. Paste langsung di Roblox chat!

---

## Tech Stack

Pure **HTML + CSS + JavaScript** — no frameworks, no build step, no dependencies.

```
├── index.html          # Application shell
├── style.css           # Dark glassmorphism UI
├── app.js              # Core logic & dataset switch
├── words-kbbi1.js      # Dataset Damzaky 71k kata
├── words-kbbi2.js      # Dataset KBBI Resmi 30k kata
├── build-words.js      # Script build kbbi1 dari words.txt
├── build-kbbi2.js      # Script build kbbi2 dari kbbi_kata.txt
├── nexkata-logo.svg    # Logo vektor
└── netlify.toml        # Deployment config
```

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/zerydery/last-letter.git
cd last-letter

# Open in browser
start index.html        # Windows
open index.html         # macOS
```

---

## Deployment

Static site — deploy anywhere:

- **Netlify:** Connect GitHub repo, publish dir `/`
- **Netlify Drop:** Drag folder ke [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages:** Enable Pages pada branch `main`

---

## License

MIT
