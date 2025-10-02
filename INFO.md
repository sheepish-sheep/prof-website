### Canonical content for bensenwang.dev (v1)

This file is the source of truth for copy, links, and assets when we re-scaffold the site. Keep it minimal, terse, and tasteful. Dither is applied to images/videos, not the background.

---

## Brand

- **Name**: Bensen Wang
- **Tagline**: Systems, ML, robots — minimal software that stays out of the way.
- **Short bio**: I design and build small, resilient systems. I like clear interfaces, tight feedback loops, and code that ages well. On the side, I prototype ML experiments and build battlebots.

## Links

- **Email**: your.email@example.com
- **GitHub**: https://github.com/sheepish-sheep
- **LinkedIn**: https://www.linkedin.com/in/bensen-wang-a06499265/
- **Resume**: /resume.pdf  
  Rename your PDF to `public/resume.pdf` after re-scaffold.

## Visual direction

- Palette: minimalist dark colors
- Dithers
- High-taste

---

## Hero

- **H1**: Bensen Wang
- **Subhead**: Systems engineer. I build calm software, ML experiments, and the occasional robot.
- **CTA row**: `Projects` · `About` · `Resume` · `GitHub`

---

## Projects (published)

1) Virus Simulation  
   - One-liner: Agent-based exploration of ultra-fast viral evolution.  
   - Role: design, simulation, viz.  
   - Stack: Python, Pygame, Matplotlib.  
   - Link: https://github.com/sheepish-sheep/Virus-Simulation  
   - Image: `public/assets/Virus Sim.png`  
   - Alt: Visualization of virus evolution over time.

2) Theory Bot  
   - One-liner: A small system for poking at theoretical ideas with LLMs.  
   - Stack: FastAPI, Python, Tailwind.  
   - Link: https://github.com/sheepish-sheep/Theory-Bot  
   - Image: `public/assets/Theory bot.png`  
   - Alt: Minimal interface of Theory Bot.

3) Roami  
   - One-liner: AI road‑trip assistant that plans routes and vibes.  
   - Stack: LLMs, multimodal (Moondream).  
   - Link: https://devpost.com/software/roami  
   - Image: `public/assets/Roami.jpg`  
   - Alt: Roami interface mock.

4) Romaji Lyrics Finder  
   - One-liner: Single‑file app that scrapes and verifies romaji lyrics.  
   - Stack: Python, Web scraping, optional OpenAI verification.  
   - Link: https://github.com/sheepish-sheep/Romaji-Lyrics-Finder  
   - Image: `public/assets/Romaji-Lyrics-Finder.png`  
   - Alt: Popup lyrics tool UI.

5) Website  
   - One-liner: This site—rebuilt clean, boring, and fast.  
   - Stack: Next.js, Tailwind (or Vanilla CSS), TypeScript.  
   - Link: https://bensenwang.dev/  
   - Image: `public/assets/Website.png`  
   - Alt: Portfolio screenshot.

Notes for display:
- Present as a simple list. Each item: title → one-liner → small meta row (stack) → external link.  
- Pictures dithered.

---

## Upcoming

1) Drawing Assistant — small tool for reference, grids, and proportion checks.  
   - Status: planning  
   - Stack: Python, LLMs, OpenAI API

2) Sidequest App — track bite‑sized quests with a playful UI.  
   - Status: planning  
   - Stack: HTML, CSS, JavaScript

3) Agent Art Gallery — agents that curate and explain generated art.  
   - Status: planning  
   - Stack: Python, LLMs, FastAPI

4) YuGiOh Assistant — search + analysis for deck building.  
   - Status: planning  
   - Stack: Python, scraping

5) AI TABS — ML‑guided practice for guitar tabs.  
   - Status: planning  
   - Stack: Python, basic ML

6) Neural Net Fighting Game — RL agents sparring in a tiny arena.  
   - Status: planning  
   - Stack: Python, RL

Display rule: same list style as Projects, no images.

---

## About

Short paragraph:
> I grew up around hardware and kitchens. I like systems that feel inevitable—clear boundaries, few moving parts, and good defaults. If it needs a manual, it failed the brief.

Skills (concise):
- Frontend: HTML, CSS, Tailwind, Next.js
- Backend: Python, Java, FastAPI, Supabase
- AI/ML: LLMs, reinforcement learning
- Hardware: Battlebots
- Other: Git

Contact row:
- Resume (PDF), Email, GitHub, LinkedIn

---

## Assets inventory

Current images in `public/assets/`:

- `Virus Sim.png`
- `Theory bot.png`
- `Roami.jpg`
- `Romaji-Lyrics-Finder.png`
- `Website.png`

After re‑scaffold, place originals in `public/assets/original/` and export dithered versions with the same filenames into `public/assets/`.

---

## Site structure (new build)

- `/` — hero + quick links
- `/projects` — published list
- `/upcoming` — upcoming list
- `/about` — short bio + skills + contact

Routing should be file-based; no client-side state machine; zero modals; no save/load feature.

---

## SEO

- **Title**: Bensen Wang — systems, ML, robots
- **Description**: Systems engineer building minimal software, ML experiments, and battlebots.
- **Social preview**: 1200×630 static image; dithered is okay.

---

## Copy style

- Prefer verbs; remove filler.  
- One sentence per idea.  
- No superlatives; show stack and result.  
- Keep it skimmable.


assets added to /public/assets/

resume: public/Bensen_Resume.pdf