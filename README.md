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
├── components/      Astro components (Header, Footer, BaseHead, FormattedDate)
├── content/blog/    Markdown posts (Content Collections)
├── content.config.ts  Frontmatter schema
├── layouts/         BlogPost layout
├── pages/           Routes (index, blog, about)
├── styles/          Global CSS (design system tokens)
└── consts.ts        Site title & description
```

## Add a post

Drop a Markdown file in `src/content/blog/` with this frontmatter:

```yaml
---
title: "标题"
description: "可选的摘要"
pubDate: 2026-05-19
tags: ["软件工程"]
---
```

## Deploy

`main` branch is the source of truth. Pushing to `main` triggers
`.github/workflows/deploy.yml` which builds and deploys to GitHub Pages.
