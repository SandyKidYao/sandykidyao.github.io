# ᕕ( ᐛ )ᕗ sandykidyao.github.io

SK's personal blog — notes on AI, coding & games.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # start dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview production build
```

## Structure

```
src/
├── components/             Header, Footer, BaseHead, FormattedDate
├── content/blog/
│   ├── personal/           off-clock notes        → /blog/personal/
│   └── professional/       engineering notes      → /blog/professional/
├── content.config.ts       frontmatter schema + loader
├── layouts/                BlogPost layout
├── pages/
│   ├── index.astro         home with personal/professional toggle
│   ├── blog/index.astro    universal archive
│   ├── blog/[kind]/        /blog/personal/ and /blog/professional/
│   └── blog/[...slug].astro  individual post pages
├── styles/                 design tokens (soft "Two Tides" palette)
└── consts.ts               site title & description
```

## Add a post

Drop a Markdown file under the right kind folder — the folder name is the post's category, no frontmatter flag needed:

- `src/content/blog/personal/` — off-clock writing (games, books, life)
- `src/content/blog/professional/` — engineering / AI / work writing

Frontmatter:

```yaml
---
title: "标题"
description: "可选的摘要"
pubDate: 2026-05-19
tags: ["软件工程"]
---
```

Filename convention: `YYYY-MM-slug.md` (e.g. `2026-05-hello.md`).

## Insert images

Co-locate images with the post. Turn the post into a folder, name the markdown `index.md`, and keep images alongside:

```
src/content/blog/professional/2026-05-foo/
├── index.md
├── cover.png
└── screenshot.png
```

In `index.md`, reference images with **relative paths**:

```markdown
![alt text](./screenshot.png)
```

Astro processes them at build time — compression, modern formats, cache-busting hash. The post URL stays clean: `/blog/professional/2026-05-foo/`.

For the hero image, point `heroImage` at the same relative path:

```yaml
---
title: "..."
pubDate: 2026-05-19
heroImage: ./cover.png
---
```

### Unprocessed assets

If you want an asset shipped as-is (animated GIFs, videos, anything you don't want re-encoded), drop it under `public/` and reference it with an absolute path:

```
public/media/foo/animation.gif
```

```markdown
![alt](/media/foo/animation.gif)
```

## Deploy

`main` is the source of truth. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.
