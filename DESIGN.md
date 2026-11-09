---
name: "SandyKid"
description: "A clear illustrated notebook of writing and independent software projects."
colors:
  paper: "#fafbfc"
  ink: "#20252c"
  muted: "#606975"
  accent: "#3659b5"
  rule: "#e1e5ec"
  surface: "#f0f3f7"
  selection: "#d9e2ff"
  dark-paper: "#111517"
  dark-ink: "#f0f4ee"
  dark-muted: "#abb5ae"
  dark-accent: "#c5ec90"
  dark-rule: "#343d36"
  dark-surface: "#1c2420"
  dark-selection: "#38543b"
  cover-blue-bg: "#E1E6F4"
  cover-blue-line: "#5267A9"
  cover-green-bg: "#E1EAE5"
  cover-green-line: "#567A6D"
  cover-purple-bg: "#EAE5F1"
  cover-purple-line: "#7C689B"
  cover-sand-bg: "#ECE8DF"
  cover-sand-line: "#8A6F54"
  cover-peach-bg: "#EEE5DD"
  cover-peach-line: "#9A7257"
typography:
  display:
    fontFamily: "'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 3.05rem)"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-.035em"
  headline:
    fontFamily: "'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-.025em"
  title:
    fontFamily: "'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "-.025em"
  body:
    fontFamily: "'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  article:
    fontFamily: "'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif"
    fontSize: "1.03rem"
    lineHeight: 1.95
  label:
    fontFamily: "'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif"
    fontSize: ".75rem"
    lineHeight: 1.65
  code:
    fontFamily: "'SFMono-Regular', Consolas, monospace"
    fontSize: ".87em"
rounded:
  inline-code: "4px"
  icon: "6px"
  control: "8px"
  code-block: "12px"
  cover: "14px"
spacing:
  copy-top: "1rem"
  card-gap: "1.5rem"
  project-column: "1.75rem"
  mobile-card-gap: "2rem"
  project-row: "2.5rem"
  gutter: "clamp(1.25rem, 4vw, 3rem)"
components:
  theme-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "10px"
    width: "40px"
    height: "40px"
  tag-filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    padding: ".8rem .1rem"
  cover:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.cover}"
    width: "100%"
  card-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  card-meta:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  article-code:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.inline-code}"
    padding: ".12rem .35rem"
    typography: "{typography.code}"
  table-heading:
    backgroundColor: "{colors.surface}"
    padding: ".8rem .75rem"
---

# Design System: SandyKid

## Overview

**Creative North Star: "The Illustrated Notebook"**

A clear illustrated notebook for Chinese writing and independent software projects. The user selected a shared light/dark layout with illustrated cards and deliberate system sans typography matching the approved prototype. Content and subject-specific geometry provide the character; the interface stays quiet.

Cool near-white and blue emphasis become charcoal and pale green in dark mode. Both themes preserve the same composition and cover artwork. Blog and project sections follow one another vertically, with no personal introduction or personal/professional browsing modes.

**Key Characteristics:**
- Shared layout across light and dark themes.
- Subject-specific geometric line covers with exact proportions and symmetry.
- System sans typography and open, flat illustrated cards.
- Original project icons beside names, separate from cover illustrations.

## Colors

The frontmatter records the implemented CSS palette and the approved cover-system palette. CSS custom properties in `src/styles/global.css` remain the implementation source; dark-prefixed tokens describe their dark-mode values.

### Primary

- **Blue emphasis** (`accent`): wordmark punctuation, headline emphasis, interactive hover, active navigation, article links and keyboard focus in light mode.
- **Pale green emphasis** (`dark-accent`): the same interactive roles in dark mode.

### Neutral

- **Cool paper / charcoal** (`paper`, `dark-paper`): page backgrounds and native theme control.
- **Ink / pale ink** (`ink`, `dark-ink`): primary text.
- **Slate / sage gray** (`muted`, `dark-muted`): dates, descriptions and supporting navigation.
- **Fine rule** (`rule`, `dark-rule`): structural separators, table rules and control borders.
- **Quiet surface** (`surface`, `dark-surface`): code, table headings and cover placeholders.
- **Selection wash** (`selection`, `dark-selection`): selected text.
- **Cover pairs**: blue, green, purple, sand and peach each pair one light background with one darker line color. Keep a topic series within its established pair.

**The Same Artwork Rule.** Both themes use the same cover asset without inversion or CSS filters.

## Typography

**Display and Body Font:** Helvetica Neue, PingFang SC, Microsoft YaHei, Arial, sans-serif. This deliberate system sans choice matches the user-approved prototype.

**Label/Mono Font:** SFMono-Regular, Consolas, monospace for article code.

The hierarchy uses size, weight and spacing rather than an ornamental display face. Chinese and Latin content share one rhythm. Headings balance their text and tighten tracking.

### Hierarchy

- **Display:** frontmatter display role for the homepage. Archive headings use `clamp(2rem, 4vw, 2.8rem)`; article titles use `clamp(1.9rem, 4vw, 2.75rem)` with line-height (1.3).
- **Headline:** frontmatter headline role for section headings; mobile section headings reduce to (1.35rem).
- **Title:** frontmatter title role for article cards; project titles use (1.2rem); mobile card titles use (1.15rem).
- **Body:** frontmatter body role for shared interface text; article prose uses the article role and becomes (1rem) on mobile.
- **Label:** frontmatter label role for dates and categories; dates use tabular numerals. Descriptions use (.85rem), line-height (1.75), with two-line clamping on desktop and three lines on mobile.

## Layout

The main container is centered with a maximum outer width of (74rem), including a responsive gutter (`clamp(1.25rem, 4vw, 3rem)`). Article content has a readable inner measure of (47rem), with the same gutters outside it.

The homepage has no introductory hero copy and shows at most four articles and four projects, both in four columns. Full project and archive pages use three columns. At widths up to (1000px), all use two columns; at widths up to (600px), all use one. Desktop blog gaps are (1.5rem); project gaps are (2.5rem) between rows and (1.75rem) between columns. Mobile cards use (2rem) gaps. The project section follows the blog section across a full-width fine rule.

The header is a compact wordmark, navigation and an icon-only theme button. It has a minimum height of (100px), reducing to (82px) with wrapping and vertical padding on mobile. The header GitHub shortcut is hidden on mobile. Coarse-pointer navigation, project links and theme selection receive a minimum (44px) target height.

Article tables keep a minimum width of (38rem) inside focusable, labelled horizontal scroll regions. Code blocks scroll horizontally as needed; neither should force the page wider than the viewport.

## Elevation & Depth

The interface uses no box shadows. Open cards sit directly on the page; borders separate sections, while quiet surface fills distinguish code, table headings and the theme button. Cover artwork supplies the visual interest without adding floating panels.

## Shapes

Cover images share a (16:9) aspect ratio and the frontmatter cover radius. Cards have no enclosing border, fill or shadow. Original project icons are (24px) square beside the title, with the icon radius. Article images use the control radius; the theme button has a (10px) radius; code blocks use the code-block radius.

Default cover assets are self-contained SVGs on a (1600 × 900) canvas, with (6-unit) rounded strokes and joins. Center the subject, use exact symmetry or equal repeated frames, keep the subject around (55–65%) of the width and leave at least (12%) outer space. Use one main relationship and no more than three supporting elements. Geometry must express the actual article or project.

The retained paper-relief alternative is only used on explicit request: three to five matte paper layers, fixed overhead composition and restrained contact shadows. Its instructions and provenance workflow remain in `design/cover-systems/prompts/paper-relief.md`; the default remains `design/cover-systems/prompts/geometric-line.md`.

## Components

### Illustrated content cards

A quiet open card: a clipped cover, one space step before the copy, muted date, linked title and short description. The redundant cover link is removed from the tab order and accessibility tree; the title provides the accessible link. On hover-capable devices, hovering a card scales its image to (1.025) over (300ms), using `cubic-bezier(.2,.7,.2,1)` inside the clipped image frame. Reduced motion removes the transition and restores automatic scrolling.

### Project cards

Use the same cover frame and copy rhythm. Preserve the original project icon beside the project name; do not fabricate one for projects without identity assets. Add description, category and underlined source/project links. Konbini retains both its independent project-page link and GitHub repository link.

### Navigation

Text links in a horizontal row, using (.875rem) desktop type and (.82rem) on mobile. Active links use accent color with a fine underline; hovered links use accent color. The wordmark preserves `ᕕ( ᐛ )ᕗ` beside SandyKid, separated by (.65rem); the emoticon keeps normal tracking. The wordmark uses (1.45rem), weight (750), and tight tracking, reducing to (1.2rem) on mobile.

### Theme button

A single native icon button with a fine rule border, current-color monitor/sun/moon SVGs and an accessible action label. Cycle between system, the theme opposite to the operating system, and the remaining explicit theme. The first click from system visibly changes the page. The target is (40px) square, increasing to (44px) on coarse pointers. Default to system; remember a valid manual preference in local storage under `sk-theme`, and support returning to system. System mode follows live operating-system changes; stored preferences synchronize across tabs. Theme choice changes colors without changing layout or artwork.

### Tag filters

The blog archive builds its filter choices and counts from actual post tags. The filter is a quiet text navigation row on a shared fine baseline: muted label, unboxed native buttons and small inline counts. Buttons wrap at narrow widths; the active tag uses ink text and a two-pixel accent underline. Result counts remain available in a screen-reader status region without a repeated visible status line. Article cards and reading-page metadata link to the archive's `?tag=` URL. Filtering hides empty year groups and announces the count; empty matches provide a clear-all link. URLs preserve filtering across reloads and browser history. Original Nowly SVG identity is shown beside the project name, outside cover art.

### Reading surface

Article prose uses the narrow measure, spacious line-height, accented underlined links, tonal inline code, scrolling code blocks and muted ruled blockquotes. Tables use quiet header fills and bottom rules, inside labelled keyboard-focusable scroll regions.

### Keyboard focus and skip link

Interactive focus uses an accent outline (2px), offset (5px), with (3px) rounding. The skip link becomes visible on focus at the top of the page and leads directly to main content.

## Do's and Don'ts

### Do:
- **Do** keep blog and projects in vertically arranged sections.
- **Do** default new covers to the geometric line system after reading the article or project README.
- **Do** preserve original icons beside project names and omit icons when no original exists.
- **Do** use the same cover artwork in both themes.
- **Do** preserve readable article width and horizontally scrollable tables.
- **Do** preserve system/light/dark selection, remembered preference, visible keyboard focus and reduced-motion support.

### Don't:
- **Don't** split the homepage into blog-left/project-right columns.
- **Don't** place project icons, invented logos, text or fabricated interfaces inside geometric covers.
- **Don't** introduce paper-relief artwork unless the user requests that alternative.
- **Don't** add personal introductions or personal/professional browsing modes.
- **Don't** use theme inversion filters, shadows or gradients on geometric covers.
