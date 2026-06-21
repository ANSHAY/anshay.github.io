# Implementation Plan: Portfolio Website Overhaul (Isekai RPG Edition)

> **Status**: 🟢 Implementation Complete  
> **Depends on**: PRD v2.0 (Isekai Fantasy Theme)  
> **Branch**: `fantasy_build`

---

## Phase 1: Data Integrity & Corrections (CRITICAL)
Before any UI work, the foundational data files must be completely audited and corrected based on the user's latest feedback.

### 1.1 Update `data/education.js`
- [x] **IIT Delhi**: Fix stream, to/from dates, and thesis details. *(Commit: 3dabc98)*
- [x] **IIT Mandi**: Fix stream, to/from dates. *(Commit: 3dabc98)*
- [x] **Achievements**: Fix GRE score. *(Commit: 3dabc98)*
- [x] **Achievements**: Add GATE percentile. *(Commit: 3dabc98)*
- [x] **Achievements**: Add JEE percentile and fix its title. *(Commit: 3dabc98)*
- [x] **Formatting**: Fix em dashes usage. *(Commit: 3dabc98)*

### 1.2 Update `data/experience.js`
- [x] **DRDO**: Fix incorrect title and incorrect project details. *(Commit: 3dabc98)*
- [x] **NDPL**: Add missing internship. *(Commit: 3dabc98)*
- [x] **Global Audit**: Fix timeline and content for ALL experiences ensuring correct timings. *(Commit: 3dabc98)*
- [x] **Formatting**: Fix em dashes usage. *(Commit: 3dabc98)*

### 1.3 Update `data/skills.js`
- [x] **Technical Arsenal**: Purge all "fake" or padded items. Keep only the strict, accurate technical stack. *(Commit: 3dabc98)*

### 1.4 Update `data/testimonials.js`
- [x] **Missing Testimonials**: Verified — all 4 testimonials present and correct. *(Commit: 3dabc98)*

### 1.5 Update Contact & About Data
- [x] **Email**: Fix incorrect Gmail ID. *(Commit: 3dabc98)*
- [x] **Photo**: Remove photo references (avatar/lore approach instead). *(Commit: 3dabc98)*
- [x] **Socials**: Remove LeetCode link. *(Commit: 3dabc98)*

---

## Phase 2: Design System Redux (The Fantasy UI)

### 2.1 Global CSS & Tokens (`index.css`)
- [x] Define RPG color palette (Parchment, Gold trims, Midnight Blue, Mana Cyan, Health Red). *(Commit: dc89517)*
- [x] Import fantasy-appropriate fonts (Cinzel Decorative, Cinzel, MedievalSharp). *(Commit: dc89517)*
- [x] Define global classes for RPG UI elements (`.rpg-panel`, `.rpg-btn`, `.stat-bar`, `.rarity-badge`). *(Commit: dc89517)*

### 2.2 Shared RPG Components (`components/common/`)
- [x] Create `RPGPanel.jsx` (container with ornate borders). *(Commit: dc89517)*
- [x] Create `SectionHeader.jsx` (fantasy-themed section headers). *(Commit: dc89517)*
- [x] Create `ScrollReveal.jsx` (directional scroll reveal). *(Commit: dc89517)*

---

## Phase 3: Section Re-Implementation

### 3.1 The Summoning (Hero)
- [x] Build a dramatic title screen. *(Commit: 8681426)*
- [x] "Begin Quest" pulsing animation. *(Commit: 8681426)*
- [x] Fantasy/magical background effect (rotating rune circle portal). *(Commit: 8681426)*

### 3.2 Character Lore (About)
- [x] Design as a Character Status Screen. *(Commit: 26299b5)*
- [x] Display attributes/stats in an RPG format (Level, Class, Attributes). *(Commit: 26299b5)*

### 3.3 Epic Quests (Projects)
- [x] Redesign grid to look like a quest board. *(Commit: ca857ff)*
- [x] Add rarity colors (Legendary/Epic/Rare/Common) to project cards. *(Commit: ca857ff)*

### 3.4 The Adventurer's Log (Experience Timeline)
- [x] Redesign timeline as a fantasy quest log. *(Commit: 499115f)*
- [x] Ensure corrected data populates accurately. *(Commit: 499115f)*

### 3.5 Magic Grimoire (Skills)
- [x] Redesign as a spellbook with spell schools. *(Commit: 142e4c9)*

### 3.6 Arcane Academies & Trials (Education)
- [x] Redesign as guild banners and trial completion panels. *(Commit: 6557587)*
- [x] Highlight the corrected exam scores (GRE, GATE, JEE) prominently. *(Commit: 6557587)*

### 3.7 Bards' Tales (Testimonials)
- [x] Implement RPG-style dialogue boxes. *(Commit: 49ca748)*

### 3.8 Join the Party (Contact)
- [x] Redesign as a Tavern Notice Board. *(Commit: a7ec806)*
- [x] Integrate corrected Gmail ID. *(Commit: a7ec806)*

---

## Phase 4: Polish & Integration

### 4.1 App Integration & Navbar
- [x] Rewire App.jsx with all new Fantasy RPG components. *(Commit: 34018be)*
- [x] RPG-themed Navbar with fantasy labels. *(Commit: 34018be)*
- [x] Remove all old Neural Cosmos components. *(Commit: 34018be)*
- [x] Gold gradient scroll progress bar. *(Commit: 34018be)*

### 4.2 Code Quality
- [x] ESLint passes with 0 errors. *(Commit: d35cda1)*
- [x] Vite production build passes clean (287ms). *(Commit: d35cda1)*
- [x] Vite config updated for v8 compatibility. *(Commit: 34018be)*

### 4.3 Review against Checklist
- [x] All user-reported bugs from v1 addressed.
- [ ] Visual QA in browser (browser environment unavailable — needs manual verification).
