# anshay.github.io — Capability Sheet

> What the site *does* and why it works. One page. Companion to `knowledge_graph.md` (which records *how* it's built).
> Last updated: 2026-08-28

## One-liner
A fantasy-RPG portfolio site that makes a 10-year AI engineering career readable in one scroll.

## 60-second version
This is my portfolio, but it is not a list of bullet points. The whole page is themed as a role-playing game: my career is a quest log, my skills are a spellbook, my degrees are academies, and the recommendations people wrote for me are told as bards' tales. Everything scrolls in one page with a particle background and gold progress bar. Under the theme it is plain React, all content lives in six data files, so adding a project or a testimonial is one object in one file and nothing else changes. It builds in under a second and ships as static files to GitHub Pages.

## Feature inventory (exhaustive — never prune)
- **Eight themed sections** — Hero, About (lore), Quests (projects), Adventurer's Log (experience), Grimoire (skills), Academies (education), Bards' Tales (testimonials), Tavern (contact).
- **Quest board with 18 projects** across 5 category filters, each card carrying a rarity tier (legendary/epic/rare/common) that colours the card. Non-trivial: rarity gives an instant visual ranking without writing "most important" anywhere.
- **Multi-link quest cards** — a project can ship one destination or four (site, store, GitHub, Discord). Added as optional fields, so every older card renders byte-identically.
- **Project icons** — optional `icon` path renders the real app icon on the card (RestifEye, Tessera, LifeXP).
- **Persistent Xern AI button** in the top-right of the navigation, carrying the studio mark, linking out to the studio site. Survives the mobile breakpoint as the mark alone.
- **Employer entries can carry a logo and a website link** — used by the Xern AI entry in the Adventurer's Log, which is where the studio is presented rather than as another project card.
- **Downloadable letters of recommendation** — a testimonial can attach a signed PDF that opens in a new tab, alongside the LinkedIn quotes.
- **RPG stat block** — INT/WIS/DEX/STR/CHA/CON with a real skill behind each number, so the joke still carries information.
- **Scroll-driven reveals** — every section animates in on scroll via a shared `ScrollReveal` wrapper, so timing never drifts between sections.
- **Gold scroll-progress bar** driven by a spring, not raw scroll, so it settles instead of jittering.
- **Magical particle background** rendered behind the whole page.
- **Two résumé downloads** from the Tavern section — a general one and an AI-focused one.
- **Data-driven content** — projects, experience, education, skills, testimonials and profile each live in their own module. No content is hard-coded into a component.
- **Accessible link rows** — each project link is a real anchor, labelled "<title> on <label>" so screen readers get context that "X" or "Site" alone would not give.
- **404 fallback** — the build copies `index.html` to `404.html` so GitHub Pages deep links resolve.
- **Zero ESLint errors** enforced on every build.

## Competitive edge

| Dimension | This site | A Notion/LinkedIn profile | A standard React portfolio template |
|---|---|---|---|
| Memorability | Full RPG world, one consistent metaphor | None — same layout as everyone | Template look, seen a hundred times |
| Signal density | 18 projects with metrics on every card | Job titles and dates | Usually 3-6 projects |
| Proof attached | Store links, GitHub, live sites, a signed PDF letter | Endorsements only | Screenshots |
| Cost of adding content | One object in one data file | Manual editing | Component edits |
| Load | 40 KB CSS, ~378 KB JS, static hosting | N/A | Typically heavier |

## Numbers
- 18 projects · 5 category filters · 4 rarity tiers
- 5 testimonials, 1 with a downloadable signed letter
- 8 sections · 447 modules · build in ~0.6s
- Every image on the page is under 35 KB; the Tessera icon went 452 KB → 6.5 KB and the Xern AI mark is 17 KB
- 41 KB CSS (7.8 KB gzipped) · 235 KB app JS (74 KB gzipped)
- 0 ESLint errors · 0 runtime dependencies beyond React, Framer Motion and Lucide

## Hardest problem solved
The quest card was built for exactly one link. Then RestifEye arrived with four destinations, and Tessera with two.

The tempting move is a second card component for "projects with many links". That is how a codebase ends up with two cards that slowly disagree about spacing, badge size, and hover behaviour.

Instead the schema grew two optional fields: `icon` and `links`. When `links` is present it wins; when it is absent the old single-link path runs untouched. Every project written before the change renders identically, byte for byte, and there is still exactly one card component.

Rendering the card headless rather than reasoning about it caught two real defects the same day: the footer needed `flex-wrap` because four chips overflow a 320 px card, and the rarity badge needed `flex-shrink: 0` because an icon plus a two-line subtitle squashed the pill into an ellipse. That second fix hardened every card on the board, not just the new one.

The lesson I would defend in review: when new content does not fit the component, widen the schema before you fork the component.

## 10-second answer
> "It's my portfolio built as a fantasy RPG — my projects are quests, my skills are a spellbook, and every card links to the real app you can go install."
