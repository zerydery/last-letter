<p align="center">
  <img src="assets/img/nexkata-logo.png" alt="nexkata" width="140" />
</p>

<h1 align="center">nexkata</h1>

<p align="center">
  <strong>A real-time vocabulary helper for the Roblox Sambung Kata (Last Letter) word game</strong><br/>
  Find valid Indonesian KBBI words instantly — filtered, sorted, and strategically rated.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/words-68.934%20KBBI-00FFB3?style=flat-square" />
  <img src="https://img.shields.io/badge/offline-ready-4FC3F7?style=flat-square" />
  <img src="https://img.shields.io/badge/stack-HTML%20·%20CSS%20·%20JS-B39DDB?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-FFD54F?style=flat-square" />
</p>

---

## What is nexkata?

**nexkata** is a browser-based tool built for players of the Roblox game **Sambung Kata** — a competitive Indonesian word-chaining game where each word must start with the last letter of the previous one.

Type 1–4 letters and instantly get a filtered, sorted list of valid KBBI words. One click copies the word to your clipboard, ready to paste into Roblox.

---

## Features

| | Feature | Description |
|---|---|---|
| 🔍 | **Instant Search** | Real-time results as you type — no button needed |
| 📚 | **KBBI Verified** | 68.934 clean words verified against KBBI V |
| 🔥 | **Difficulty Ratings** | Words rated by how hard the ending letter is for your opponent |
| ❌ | **Invalid Word Blacklist** | Mark rejected words — they'll never appear again |
| 💾 | **Persistent Session** | Used words saved in localStorage across refreshes |
| 🔀 | **Smart Sorting** | Sort by length, A–Z, or hardest-ending-first |
| 📋 | **One-click Copy** | Click any word to instantly copy it to clipboard |
| 📊 | **Session Statistics** | Track words used, hard picks, and your longest word |
| 📱 | **Mobile-first** | Fully responsive — designed for phone use mid-game |

---

## Difficulty System

Every word card shows how hard its ending letter is for your opponent to counter:

| Rating | Ending Letters | Difficulty |
|---|---|---|
| *(none)* | a b d i j k l m n p r s t u | Normal |
| 🔥 | c g h o w y | Hard |
| 🔥🔥 | e f v x | Very Hard |
| 🔥🔥🔥 | q z | Extreme — almost unbeatable |

> **Strategy tip:** Words ending in `q` or `z` are nearly impossible to counter in standard Indonesian. Play them to end a round.

---

## How to Use

1. Note the **last letter** of your opponent's word
2. Type it into the search box
3. Sort by **🔥🔥🔥 Hardest** for the most strategic pick
4. Click a word → it's **copied to clipboard** and marked as used
5. Paste it directly into Roblox chat

---

## Project Structure

```
nexkata/
├── assets/
│   ├── css/style.css           # Dark glassmorphism UI
│   ├── js/app.js               # Game logic, search, statistics
│   └── img/nexkata-logo.png    # App logo
├── data/
│   └── words.js                # KBBI dataset — 68.934 verified words
├── scripts/
│   └── build-verified.js       # CLI: rebuild words.js from KBBI V sources
├── index.html                  # App shell
├── netlify.toml                # Deploy config with security headers
├── README.md
└── LICENSE
```

---

## Local Development

```bash
git clone https://github.com/zerydery/last-letter.git
cd last-letter

# Open directly in browser (no server needed)
start index.html        # Windows
open index.html         # macOS / Linux
```

To rebuild the word dataset:

```bash
# Requires source files (not in repo — download separately):
# - kbbi_v.csv       (KBBI V official)
# - kbbi_v_part*.json
# - kbbi_hidayat.csv
node scripts/build-verified.js
```

---

## Deployment

Static site — works anywhere:

- **Netlify** (recommended): Connect GitHub → branch `main` → publish dir `/`
- **GitHub Pages**: Enable Pages on `main` branch
- **Netlify Drop**: Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop)

---

## Dataset

The word database (`data/words.js`) contains **68.934 clean words** verified against the official KBBI V:

| Source | Role |
|---|---|
| KBBI V CSV (official) | Ground truth filter — only words present here are accepted |
| KBBI V JSON parts 1–4 | Additional candidate words |
| damzaky/kumpulan-kata-bahasa-indonesia-KBBI | Candidate words |
| Hidayathamir/kbbi-dataset | Candidate words |

Words are filtered for: minimum 3 characters, Indonesian alphabet only (a–z), no abbreviations/acronyms, at least one vowel (for words ≤5 chars).

---

## License

[MIT](LICENSE) © zerydery
