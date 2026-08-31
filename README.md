# Generative Environments Lab

Static site for `genenv.ai`, published via GitHub Pages from `main` (root).

Run the local preview server from this folder (it mirrors GitHub Pages'
clean-URL behavior — internal links are extensionless, e.g. `/des-212`):

```sh
python3 tools/serve.py 4173
```

## Current build (2026-08-16): Claude design redesign, v2

The site is a self-contained export from Claude design (no build step).

- `index.html`: homepage (renamed from the `GenEnv Home` screen; back-links
  in subpages rewritten from `GenEnv Home.dc.html` to `index.html`).
- 13 project/course subpages with clean slug filenames (`des-212.html`,
  `grasshopper-mcp.html`, ...), renamed from the export's
  `Project - <Name>.dc.html` screen files; every internal link rewritten
  and a per-page `<title>` injected.
- `join.html`: standalone URL for Openings (`genenv.ai/join`) — redirects
  to `/#join`, which a small script appended to `index.html` turns into a
  scroll to the Join chapter (mirrors the nav button's `_go(0.73)`).
- `openings.html`: hand-built standalone Openings page (`genenv.ai/openings`)
  in the export's visual language; the homepage "Openings" record links to
  it via its `href` (copy sourced from the homepage record + join chapter —
  keep in sync if that copy changes in Claude design).
- `404.html`: redirects old URL schemes (`Project - *.dc.html` names and
  the pre-redesign `pages/*.html` names) to the current slugs.
- `support.js`, `image-slot.js`: runtime helpers required by the export.
- `media/`: all site images (webp/png/gif), including per-project folders.
- `CNAME`: custom domain (`genenv.ai`) for GitHub Pages.
- `.nojekyll`: serve files as-is (no Jekyll processing).

Internal links are extensionless (`href="des-212"`, back-links `./`) so
the address bar shows clean URLs; GitHub Pages resolves them to the
`.html` files, and each page carries a canonical tag. Preview locally
with `tools/serve.py` (plain `http.server` cannot resolve them).

Redeploying a new export must reapply: home rename + back-link rewrite,
slug renames (map in `404.html`), extensionless link rewrite + canonical
tags, title injection, and must keep `join.html`, `openings.html`,
`404.html`, and the `#join` deep-link script.

To edit content, iterate in Claude design and re-export, or edit the HTML
directly — but note the export inlines its styles per page.

## Archived versions (`_archive/`, git-ignored, OneDrive-synced)

- `_archive/versions/2026-08-12-city-blueprint-prototype/`: the previous
  blueprint "model city" build (index + city.js, feed, review workspace,
  content.js snapshot, assets, docs).
- `_archive/versions/2026-08-16-claude-design-workspace.zip`: the full
  Claude design workspace export this build came from (screens, uploads,
  brief, design archive).
- `_archive/versions/2026-08-12-claude-design-redesign-download.zip`: the
  first Claude design export (v1, five project pages).
- `_archive/site-media-raw/generative-planting-raw-2026-08-16/`: raw source
  images for the Generative Planting page (site uses `media/planting/`).
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
