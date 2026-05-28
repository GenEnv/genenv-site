# Media Workflow

Use three layers:

1. Notion: editorial metadata and publish status.
2. GitHub/web repo: site code and optimized web assets.
3. OneDrive/local archive: original images, videos, slides, Rhino/Grasshopper files, and working files.

## Web Asset Naming

Each project gets its own folder:

```text
assets/projects/project-slug/
  thumb.webp
  hero.webp
  gallery-01.webp
  gallery-02.webp
  demo-poster.webp
```

Keep image names stable so the website does not break when files are replaced.

## Recommended Sizes

- Square node/thumbnail: `1024 x 1024`, `.webp`.
- Hero image: around `2400 px` wide, `.webp`.
- Gallery image: `1600-2400 px` wide, `.webp`.
- Video poster: `1920 x 1080`, `.webp`.
- Short web video: `.mp4`, compressed. Larger videos should be hosted externally.

## What Goes Where

Put these in GitHub:

- `.html`, `.css`, `.js`
- `content.js` / exported content snapshots
- optimized `.webp`, small `.svg`, intentional small `.mp4`

Keep these outside GitHub:

- original `.pptx`, `.psd`, `.ai`, `.3dm`, `.gh`
- raw render sequences
- large `.mov`, `.mkv`, uncompressed exports
- student submissions unless explicitly cleared for publication

## Notion Media Fields

Use paths that the website can load:

```text
assets/projects/grasshopper-mcp/thumb.webp
assets/projects/grasshopper-mcp/hero.webp
```

Use `Source Folder` for your own archive path, for example:

```text
/Users/xunliu/Library/CloudStorage/OneDrive-UBC/GenEnv_Media_Source/01_research/grasshopper-mcp
```
