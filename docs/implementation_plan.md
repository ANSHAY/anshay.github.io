# Implementation Plan: Portfolio Website Overhaul (Isekai RPG Edition)

> **Status**: 🟡 Planning Phase  
> **Depends on**: PRD v2.0 (Isekai Fantasy Theme)

---

## Phase 1: Data Integrity & Corrections (CRITICAL)
Before any UI work, the foundational data files must be completely audited and corrected based on the user's latest feedback.

### 1.1 Update `data/education.js`
- [ ] **IIT Delhi**: Fix stream, to/from dates, and thesis details.
- [ ] **IIT Mandi**: Fix stream, to/from dates.
- [ ] **Achievements**: Fix GRE score.
- [ ] **Achievements**: Add GATE percentile.
- [ ] **Achievements**: Add JEE percentile and fix its title.
- [ ] **Formatting**: Fix em dashes usage.

### 1.2 Update `data/experience.js`
- [ ] **DRDO**: Fix incorrect title and incorrect project details.
- [ ] **NDPL**: Add missing internship.
- [ ] **Global Audit**: Fix timeline and content for ALL experiences ensuring correct timings.
- [ ] **Formatting**: Fix em dashes usage.

### 1.3 Update `data/skills.js`
- [ ] **Technical Arsenal**: Purge all "fake" or padded items. Keep only the strict, accurate technical stack.

### 1.4 Update `data/testimonials.js`
- [ ] **Missing Testimonials**: Add the missing testimonials that were dropped in the previous iteration.

### 1.5 Update Contact & About Data
- [ ] **Email**: Fix incorrect Gmail ID.
- [ ] **Photo**: Remove photo references (avatar/lore approach instead).
- [ ] **Socials**: Remove LeetCode link.

---

## Phase 2: Design System Redux (The Fantasy UI)

### 2.1 Global CSS & Tokens (`index.css`)
- [ ] Define RPG color palette (Parchment, Gold trims, Midnight Blue, Mana Cyan, Health Red).
- [ ] Import fantasy-appropriate fonts (e.g., 'Cinzel', 'MedievalSharp', or pixel fonts).
- [ ] Create custom cursors (e.g., a gauntlet or magic wand).
- [ ] Define global classes for RPG UI elements (e.g., `.rpg-panel`, `.parchment-bg`, `.gold-border`).

### 2.2 Shared RPG Components (`components/common/`)
- [ ] Create `RPGPanel.jsx` (container with ornate borders).
- [ ] Create `DialogueBox.jsx` (for testimonials and lore).
- [ ] Create `QuestItem.jsx` (for skills/stats).

---

## Phase 3: Section Re-Implementation

### 3.1 The Summoning (Hero)
- [ ] Build a dramatic title screen.
- [ ] "Press Start" / "Begin Quest" pulsing animation.
- [ ] Fantasy/magical background effect (e.g., glowing portal or mystical forest using CSS/Canvas).

### 3.2 Character Lore (About)
- [ ] Design as a Character Status Screen.
- [ ] Display attributes/stats in an RPG format (Level, Class, Attributes).

### 3.3 Epic Quests (Projects)
- [ ] Redesign grid to look like an inventory system or quest board.
- [ ] Add rarity colors (Legendary/Epic) to project cards.

### 3.4 The Adventurer's Log (Experience Timeline)
- [ ] Redesign timeline as a fantasy map path or quest log.
- [ ] Ensure corrected data populates accurately.

### 3.5 Magic Grimoire (Skills)
- [ ] Redesign as a spellbook or constellation skill tree.

### 3.6 Arcane Academies & Trials (Education)
- [ ] Redesign as guild banners or trial completion scrolls.
- [ ] Highlight the corrected exam scores (GRE, GATE, JEE) prominently.

### 3.7 Bards' Tales (Testimonials)
- [ ] Implement RPG-style dialogue boxes.

### 3.8 Join the Party (Contact)
- [ ] Redesign as a Tavern Notice Board.
- [ ] Integrate corrected Gmail ID.

---

## Phase 4: Polish & Integration

### 4.1 Audio & Micro-interactions (Optional/Visuals)
- [ ] Add subtle hover sounds (if requested) or highly reactive hover states mimicking game menus.
- [ ] Smooth parallax scrolling to give depth to the "world".

### 4.2 Review against Checklist
- [ ] Final check against all user-reported bugs from v1.
