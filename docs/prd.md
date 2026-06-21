# PRD: Anshay Agarwal — Portfolio Website Overhaul (Isekai / Fantasy RPG Edition)

> **Version**: 2.0  
> **Status**: 🟡 Awaiting Approval  
> **Author**: Antigravity (AI Architect)  
> **Date**: 2026-06-21

---

## 1. Executive Summary

### The Why
The previous iteration was perceived as lacking creativity and feeling too standard ("Neural Cosmos" fell flat). Anshay needs a portfolio that shatters expectations, completely abandoning the traditional corporate aesthetic. The new objective is to create an immersive, highly creative, "Isekai / Fantasy RPG" experience that makes the user feel like they've stepped into a game world while scrolling. It should highlight his real-world achievements (AI, Neuroscience, Engineering) as "quests," "skills," and "lore" within this fantasy setting.

### The What
A scroll-animated, Framer Motion-powered single-page application heavily themed as an RPG/Isekai fantasy world. 
- The user is the "Adventurer."
- Anshay is the "Grand Magus / Master Artificer" of AI and Neuroscience.
- Projects are "Epic Quests" or "Artifacts Crafted."
- Experience is the "Adventurer's Log / Lore."
- Skills are a "Skill Tree" or "Magic Grimoire."

### The Outcome
A portfolio that:
- Drops jaws instantly with an extremely creative, game-like UI.
- Replaces traditional web elements with RPG UI components (pixel art accents, parchment textures, magical glowing runes, HUD-like overlays).
- Retains top-tier professionalism in its data accuracy while wrapping it in an unforgettable aesthetic.

---

## 2. Target Audience

| Audience | What They Care About |
|----------|---------------------|
| **Recruiters / Hiring Managers** | Can find the hard facts (scores, experience) amidst the fun theme. |
| **VCs / Investors** | Sees immense creativity, out-of-the-box thinking, and technical execution capability. |
| **Peers / Engineers** | Appreciates the technical complexity of building a game-like UI on the web. |

---

## 3. Design Philosophy

### 3.1 Theme: "Isekai / Fantasy RPG"
An immersive fantasy game interface. Think of iconic JRPGs, Elden Ring, or classic Zelda, but modernized with high-fidelity web tech.

- **Primary Background**: Deep enchanted forest, ancient stone ruins, or a starry magical night sky. Uses parallax scrolling.
- **Surface Colors**: Translucent parchment, dark slate with gold trims, floating holographic magic runes.
- **Typography**: A highly stylized fantasy display font for headings (e.g., 'Cinzel', 'MedievalSharp', or 'Press Start 2P' for a retro vibe), paired with a readable sans-serif for body text (like an in-game lore book).
- **Decorations**: Ornate borders, glowing particles (magic dust), mana/health bars for stats.

### 3.2 Game-Like Interactions
- **Hover Effects**: Elements glow like enchanted items.
- **Scroll**: Parallax layers make it feel like walking through a 2D/2.5D world.
- **Sound (Optional/Visuals)**: Visual cues that mimic game menus opening (pop-up scale animations).

---

## 4. Information Architecture & Thematic Mapping

| Standard Section | Fantasy RPG Equivalent |
|------------------|------------------------|
| **Hero** | **The Summoning / Title Screen** ("Press Start") |
| **About** | **Character Stats & Lore** (Class: AI Architect) |
| **Projects** | **Epic Quests & Crafted Artifacts** |
| **Experience** | **The Adventurer's Log** (Timeline of Guilds) |
| **Skills** | **Magic Grimoire / Skill Tree** |
| **Education** | **Arcane Academies & Trials** |
| **Testimonials** | **Bards' Tales / NPC Dialogue** |
| **Contact** | **Send a Raven / Join the Party** |

---

## 5. Section Specifications

### 5.1 The Summoning (Hero)
- **Visuals**: A magical portal or an ancient glowing altar.
- **Content**: "Level 99 AI Architect & Neuro-Artificer".
- **CTA**: "Begin Quest" (Scroll down indicator looking like a glowing arrow).
- **Note**: NO PHOTO of Anshay. Keep it mysterious/avatar-based.

### 5.2 Character Lore (About)
- **Layout**: RPG Status Menu.
- **Content**: Accurate lore of Anshay's journey.
- **Stats**: INT, WIS, DEX (Mapped to real-world attributes creatively).
- **Removed**: LeetCode link.

### 5.3 Epic Quests (Projects)
- **Visuals**: Quest boards or Inventory slots.
- **Cards**: Designed like item cards or quest scrolls with "Rarity" levels (Legendary, Epic, Rare).
- **Hover**: Flips or expands with a magical glow.

### 5.4 The Adventurer's Log (Experience)
- **Visuals**: A winding path on a map, or a glowing skill tree.
- **Data to Fix**: 
  - Ensure correct timings and content for all experiences.
  - DRDO: Fix title and project.
  - NDPL: Add missing internship.
  - Fix overall timeline mess.

### 5.5 Magic Grimoire (Skills)
- **Visuals**: An open spellbook or a constellation skill tree.
- **Data to Fix**: Remove all fake/fluff items. Strictly accurate technical arsenal.

### 5.6 Arcane Academies & Trials (Education)
- **Visuals**: Banners of the academies (IITD, IIT Mandi).
- **Data to Fix**: 
  - IITD: Correct stream, dates, thesis.
  - IIT Mandi: Correct stream, dates.
  - Achievements: Correct GRE score, add GATE percentile, add JEE percentile & fix title.

### 5.7 Bards' Tales (Testimonials)
- **Visuals**: Dialogue boxes like in an RPG (NPC speaking).
- **Data to Fix**: Ensure all missing testimonials are added and displayed correctly.

### 5.8 Join the Party (Contact)
- **Visuals**: A tavern notice board or a mystical summoning circle.
- **Data to Fix**: Correct Gmail ID.
- NO Phone number.

---

## 6. Technical Architecture

- **Stack**: React, Vite, Framer Motion.
- **Styling**: CSS Modules with deep customization for the fantasy UI (border-image for ornate borders, custom cursors like a gauntlet or magic wand).
- **Assets**: Will need generated or open-source fantasy UI assets (parchment textures, gold borders).

---

## 7. SEO & Performance
- Standard SEO rules apply.
- Must ensure high-res fantasy assets are optimized (WebP).
- Lazy loading for parallax background layers.

---

## 8. Data Integrity Constraints (CRITICAL)
All factual data MUST be rigorously checked against the provided knowledge graph and user instructions. Formatting should use standard hyphens or specific formatting requested (fix "em dashes" issue). 
