# WOKEALOT — portfolio

Plain HTML/CSS/JS. No build step. Works on GitHub Pages as-is.

```
index.html   page structure (you rarely touch this)
config.js    ← EVERYTHING you customize lives here
styles.css   look & layout
app.js       renders config.js into the page
assets/      character art + inset images
```

## Edit content

Open `config.js`. Every text, link, project, image and color is there.

- **Add a project:** add one line to `projects`:
  `{ title: "My Skill", youtube: "https://youtu.be/XXXXXXXXXXX", category: "Abilities", note: "WIP" }`
  Thumbnail is pulled from YouTube automatically. `note` is optional (shows a small badge).
- **Categories:** the filter buttons come from `categories`; a project's `category` must match one.
- **Stats:** `"auto"` = number of projects. Don't claim what you haven't done.
- **Images:** drop files in `assets/` and point `images.*.src` at them. `opacity` 0–1, `parallax` 0–0.1.
  Set `src: ""` to remove a layer. The five character layers are: hero (right side), about, skills, projects (left), contact (right).
- **Colors / animations:** `colors` and `animations` at the bottom. Reduced-motion OS setting is always respected.

## Art

`assets/*.svg` are original ink/manga layers (slash, lightning, halftone, brush strokes, torii) — vector, so they're sharp at any size.
Want character art instead? Drop a PNG in `assets/` and point `images.hero.src` (etc.) at it; the masks and parallax apply to any image.
Deploy with `./deploy.sh` and caches take care of themselves.

## Run locally

Any static server, e.g. `python3 -m http.server 8000` → http://localhost:8000
(Opening `index.html` directly also works, except YouTube embeds need http.)

## Deploy to GitHub Pages

Every push: run `./deploy.sh "what changed"` — it stamps all file links so visitors never see a cached old version, then commits and pushes.
If you edit by hand instead, bump `version` in `config.js` AND the `?v=` numbers in `index.html` together.

First-time setup:

1. Put these files at the root of the `wokealot/wokealot.github.io` repo (`index.html` must be at root).
2. Commit + push to `main`.
3. Repo → Settings → Pages → Source: "Deploy from a branch", Branch: `main` / `/ (root)`. Save.
4. Wait ~1 min → https://wokealot.github.io/
