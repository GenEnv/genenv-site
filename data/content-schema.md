# GenEnv Website Content Schema

Notion is the editable CMS. The website reads exported snapshots from Notion.

## Core Fields

- `Title`: Public title.
- `Type`: Research, Tool, Writing, Teaching, People, Opportunity, Workshop.
- `Year`: Year or range, such as `2026` or `2019-2026`.
- `Status`: current, open, published, in press, under development, archived.
- `Summary`: Short public description.
- `Tags`: Flexible tags for filtering and cross-links.
- `Slug`: Lowercase URL id, such as `grasshopper-mcp`.
- `Page Path`: Static page path, such as `pages/grasshopper-mcp.html`.
- `Featured`: Whether it appears on the homepage field map.
- `Node Type`: Homepage node color/group.
- `Grid X`, `Grid Y`: Homepage grid coordinates.
- `Connections`: Comma-separated slugs or node ids.
- `Sort`: Manual ordering.
- `Website Ready`: Checked when safe to publish.

## Media Fields

- `Thumbnail`: Web path for square thumbnail, such as `assets/projects/grasshopper-mcp/thumb.webp`.
- `Hero Image`: Web path for page hero, such as `assets/projects/grasshopper-mcp/hero.webp`.
- `Gallery`: JSON list or comma-separated web paths.
- `Video URL`: External video URL, such as Vimeo, YouTube, Cloudflare Stream, or an uploaded `.mp4`.
- `Poster Image`: Web path for video poster.
- `Source Folder`: Local or cloud archive folder for original files.
- `Credit`: Image/video/project credit.
- `Alt Text`: Accessibility text for key images.
- `Media Notes`: Editorial notes, crop direction, missing assets, or rights notes.

## Storage Rule

Notion stores metadata. GitHub stores website code and optimized web assets. OneDrive/local folders store original large media.
