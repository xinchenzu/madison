# Figures and Assets

Madison contains many D3 figures, SVG/PNG pairs, cover files, and generated
visual assets. Treat figures as source-linked instructional artifacts, not loose
decoration.

## Main Paths

- `d3/`: HTML/D3 figure source files.
- `images/`: rendered SVG and PNG assets used by chapters or book output.
- `cover.svg`, `cover.jpg`, `cover_thumb.jpg`: cover assets.
- `saul.svg`: additional design asset.
- `styles/`: Kindle/book CSS.

## Rendering

Use the maintained package command:

```bash
npm run svg-to-png
```

This runs `scripts/svg-to-png.mjs`, which converts `images/**/*.svg` to 300dpi
PNG and skips PNGs that are already newer than their SVG source.

## Naming

Prefer names that preserve the chapter or source context:

- `01-the-creative-engineer-fig-01.svg`
- `branding-and-ai-10-brand-storytelling-fig-02.png`
- `info-7375-branding-and-ai-spring-2026-...`

Do not rename figure files casually. Chapter references may depend on the file
names.

## Figure Review Checklist

Before accepting a figure:

- Is the source D3/SVG/HTML file preserved?
- Is the PNG current relative to the SVG?
- Does the filename identify the chapter or source track?
- Is the figure referenced by a chapter or documented as unused?
- Does the visual make a claim that needs source evidence?
- Was rendering or verification logged when part of a larger run?
