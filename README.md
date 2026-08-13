# Generative Environments Lab

Static site for `genenv.ai`, published via GitHub Pages from `main` (root).

Open `index.html` directly in a browser, or run a simple local server from this folder:

```sh
python3 -m http.server 4173
```

## Current build (2026-08-12): Claude design redesign

The site is a self-contained export from Claude design (no build step).

- `index.html`: single-page homepage (lab intro, projects, people, positions).
- `Project - *.dc.html`: project subpages (AI4DM, Code2Code, Decoding Urban
  Form, Digital Thermal Sandbox, Grasshopper MCP), navigated from the homepage.
- `support.js`, `image-slot.js`: runtime helpers required by the export.
- `media/`: all site images (webp/png/gif), including per-project folders.
- `CNAME`: custom domain (`genenv.ai`) for GitHub Pages.
- `.nojekyll`: serve files as-is (no Jekyll processing).

To edit content, iterate in Claude design and re-export, or edit the HTML
directly — but note the export inlines its styles per page.

## Archived versions (`_archive/`, git-ignored, OneDrive-synced)

- `_archive/versions/2026-08-12-city-blueprint-prototype/`: the previous
  blueprint "model city" build (index + city.js, feed, review workspace,
  content.js snapshot, assets, docs).
- `_archive/versions/2026-08-12-claude-design-redesign-download.zip`: the
  original Claude design export this build came from.
- `_archive/versions/published-grid-tilt-2026-08/`: the previously published
  pixel-grid homepage plus the 2D⇄3D cube-tilt experiment built on it.
- `_archive/versions/minimal-2026-08/`: the one-file minimal site experiment.
- `_archive/versions/grid-dark-current/`, `interaction-grid-current/`: May 2026
  homepage iterations.
- `_archive/removed-2026-08-01/`: outdated project pages, placeholder subpage
  stubs, and retired assets.

## Platform setup

- Notion: CMS and editorial workspace.
- GitHub: `GenEnv/genenv-site` — website code plus optimized web assets.
- OneDrive/local archive: original project media, large files, archived versions.
