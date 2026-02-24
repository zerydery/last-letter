# Sambung Kata Helper

A fast, offline-capable vocabulary helper for the Roblox game **Last Letter (Sambung Kata)**.  
Find valid Indonesian words by their starting letters in seconds — with strategic difficulty ratings to keep your opponents struggling.

---

## Features

| Feature | Description |
|---|---|
| 🔍 **Instant Search** | Real-time word lookup as you type (1–4 letters) |
| 📚 **78K+ Words** | Full KBBI (Indonesian dictionary) dataset, works offline |
| 🔥 **Difficulty Levels** | Words rated by how hard the ending letter is for opponents |
| ❌ **Invalid Word Blacklist** | Mark game-rejected words so they never appear again |
| 💾 **Persistent History** | Session words saved to localStorage — survives page refresh |
| 🔀 **Smart Sorting** | Sort by length (shortest/longest), A–Z, or hardest-ending-first |
| 📋 **One-click Copy** | Click any word card to copy it to clipboard instantly |
| 📱 **Mobile-first** | Fully responsive — optimized for phone use during gameplay |

---

## Difficulty Rating System

Each word card displays its **ending letter difficulty** — how hard it is for your opponent to find a word starting with that letter:

| Badge | Level | Ending Letters | Notes |
|---|---|---|---|
| `↓X` (blue) | Normal | a, b, d, i, j, k, l, m, n, p, r, s, t, u | Common starting letters |
| 🔥 | Level 1 — Hard | c, g, h, o, w, y | Moderate difficulty |
| 🔥🔥 | Level 2 — Very Hard | e, f, v, x | Few Indonesian words start here |
| 🔥🔥🔥 | Level 3 — Extreme | q, z | Almost no valid words start here |

> **Pro tip:** Words ending in `q` or `z` are near-impossible for opponents to counter in standard Indonesian — use them when you need to lock down a win.

---

## How to Use

1. When your opponent plays a word, note its **last letter(s)**
2. Type that letter into the search box
3. Browse results — sort by **"🔥🔥🔥 Hardest First"** for a strategic pick
4. Click a word → it's **copied to clipboard** and marked as used
5. Paste directly into Roblox chat!

---

## Tech Stack

Pure **HTML + CSS + JavaScript** — no frameworks, no build step, no dependencies.

```
├── index.html        # Application shell
├── style.css         # Dark glassmorphism UI
├── app.js            # Core logic & embedded fallback words
├── words.js          # 78K KBBI word database (generated from words.txt)
├── words.txt         # Source wordlist (KBBI open-source dataset)
├── build-words.js    # Script to regenerate words.js from words.txt
└── netlify.toml      # Deployment config
```

---

## Local Development

No build step needed. Just open the file directly:

```bash
# Clone the repo
git clone https://github.com/zerydery/last-letter.git
cd last-letter

# Open in browser
start index.html        # Windows
open index.html         # macOS
```

To regenerate `words.js` after updating `words.txt`:

```bash
node build-words.js
```

---

## Deployment

This is a static site — deploy anywhere:

- **Netlify Drop:** Drag the entire folder to [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages:** Enable Pages on the `main` branch, publish directory `/`
- **Vercel:** `npx vercel .`

---

## Data Source

Word list sourced from [`geovedi/indonesian-wordlist`](https://github.com/geovedi/indonesian-wordlist) — a KBBI-derived open-source Indonesian word corpus.

---

## License

MIT
