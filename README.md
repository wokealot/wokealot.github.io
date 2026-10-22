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

The character art currently in `assets/` is cropped from your mockup, so it's soft when large.
Replace with higher-res grayscale PNGs (any size; they're masked and faded by CSS) and nothing else changes.

## Run locally

Any static server, e.g. `python3 -m http.server 8000` → http://localhost:8000
(Opening `index.html` directly also works, except YouTube embeds need http.)

## Deploy to GitHub Pages

1. Put these files at the root of the `wokealot/wokealot.github.io` repo (`index.html` must be at root).
2. Commit + push to `main`.
3. Repo → Settings → Pages → Source: "Deploy from a branch", Branch: `main` / `/ (root)`. Save.
4. Wait ~1 min → https://wokealot.github.io/
