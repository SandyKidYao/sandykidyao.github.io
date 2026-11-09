# Website conventions

## Covers: standing user preference

- When asked to make a cover for a new project or article, **default to the geometric line style** in `design/cover-systems/prompts/geometric-line.md`. Do not reopen the style choice unless the user asks for another style.
- The paper-relief alternative is retained in `design/cover-systems/prompts/paper-relief.md`; use it only when requested.
- Read the actual article or project README before choosing a visual metaphor. Use exact proportions and symmetry; every cover must express its subject.
- Project icons and cover illustrations are separate. Put the original icon next to the project name, never inside the cover. Preserve original identity assets; do not invent a logo or UI for projects without one.
- Save line covers as self-contained SVG in `public/covers/`, using the 1600×900 canvas, 6-unit stroke, restrained two-color palette, and symmetry rules in the prompt. Prefer authored SVG geometry for precise linework. Use imagegen for paper illustrations and other requested raster art.
- Add metadata to `design/cover-systems/cover-manifest.json`. Each blog post uses `cover.src` and `cover.alt` frontmatter; each project uses `cover` and `coverAlt` in `src/data/projects.ts`.

## Website

- Preserve the brand emoticon `ᕕ( ᐛ )ᕗ` beside SandyKid in the header; the site title is `ᕕ( ᐛ )ᕗ SK`.

- Homepage has no introductory hero text; show at most four articles and four projects, with links to the full archives.
- Blog and projects are vertically arranged sections with illustrated cards; never split the homepage into a blog-left/project-right layout.
- Preserve the shared light/dark layout, default to the system theme, remember manual choice and support returning to system preference through the single icon button.
- No personal introduction or personal/professional browsing modes. Existing article URLs retain their paths for compatibility; new posts can go directly in `src/content/blog/`.
- Preserve article bodies and dates unless specifically asked to edit them.
- Article tags power the archive filter and link to `/blog/?tag=...`; derive choices/counts from frontmatter and preserve URL, reload and browser-history behavior.
- Keep Konbini's project-page link in addition to its GitHub repository.
- Before delivery run `npm run build` and inspect desktop/mobile, both themes, an article and the archive. Do not publish or push solely as a side effect of a local redesign.
