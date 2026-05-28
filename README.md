# Generative Environments Lab

Static prototype for `genenv.ai`.

Open `index.html` directly in a browser, or run a simple local server from this folder:

```sh
python3 -m http.server 4173
```

The current build is intentionally data-driven:

- Edit the Notion database `GenEnv Website Content` as the source of truth.
- Export/update `content.js` when the website snapshot needs to change.
- Store optimized website media in `assets/projects/<slug>/`.
- Store original large media outside this repo in OneDrive/local archive folders.
- Keep tags flexible instead of creating fixed research categories too early.

## Key Files

- `index.html`: homepage and page sections.
- `styles.css`: visual system.
- `script.js`: interaction and rendering.
- `content.js`: current Notion-derived content snapshot.
- `CNAME`: custom domain for GitHub Pages.
- `data/content-schema.md`: Notion database field guide.
- `docs/media-workflow.md`: how to organize images/videos.
- `docs/deployment.md`: GitHub Pages and DNS setup.

## Recommended Platform Setup

- Notion: CMS and editorial workspace.
- GitHub: website code plus optimized web assets.
- OneDrive/local archive: original project media and large files.
