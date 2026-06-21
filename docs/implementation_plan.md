# Implementation Plan: Portfolio Website Overhaul

> **Status**: 🟡 Awaiting Approval  
> **Depends on**: PRD v1.0 (Approved with feedback)

---

## Phase 0: Project Scaffolding (~15 min)

### 0.1 Initialize Vite + React
```bash
# In anshay.github.io root
npx -y create-vite@latest ./ --template react
npm install
npm install framer-motion lucide-react
```

### 0.2 Clean up old files
- Move existing `index.html`, `css/`, `js/` to a `_legacy/` backup folder
- Keep `images/pic.jpg`, `assets/download/` (resume PDF), `docs/`
- Keep `LICENSE`, `.gitignore`, `.gitattributes`

### 0.3 Configure for GitHub Pages
- Install `gh-pages`: `npm install --save-dev gh-pages`
- Add to `vite.config.js`: `base: '/'`
- Add deploy scripts to `package.json`
- Add GitHub Actions workflow for auto-deploy on push

### 0.4 File Structure
```
anshay.github.io/
├── _legacy/                 # Backup of old site
├── public/
│   ├── images/pic.jpg       # Profile photo
│   ├── assets/download/     # Resume PDFs
│   └── favicon.svg
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Root component with all sections
│   ├── App.module.css       # App-level styles
│   ├── index.css            # Global design tokens + resets
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── FeaturedProjects/
│   │   ├── ProjectGrid/
│   │   ├── Timeline/
│   │   ├── Skills/
│   │   ├── Education/
│   │   ├── Testimonials/
│   │   ├── Writing/
│   │   ├── Contact/
│   │   ├── ParticleBackground/
│   │   └── common/           # Shared components
│   │       ├── SectionHeader.jsx
│   │       ├── GlassCard.jsx
│   │       ├── AnimatedCounter.jsx
│   │       └── ScrollReveal.jsx
│   └── data/
│       ├── projects.js       # All project data
│       ├── experience.js     # Career timeline data
│       ├── skills.js         # Skills by category
│       ├── education.js      # Education + certs
│       └── testimonials.js   # LinkedIn recommendations
├── docs/knowledge_graph.md
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Phase 1: Design System (`index.css`) (~20 min)

### 1.1 CSS Custom Properties (Design Tokens)
```css
:root {
  /* Colors - Neural Cosmos Theme */
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-tertiary: #1a1a2e;
  --surface-glass: rgba(255, 255, 255, 0.04);
  --surface-glass-hover: rgba(255, 255, 255, 0.08);
  --border-glass: rgba(255, 255, 255, 0.08);
  
  --text-primary: #f0f0f5;
  --text-secondary: #a0a0b5;
  --text-muted: #6b6b80;
  
  --accent-violet: #8b5cf6;
  --accent-cyan: #06b6d4;
  --accent-amber: #f59e0b;
  --accent-rose: #f43f5e;
  --accent-emerald: #10b981;
  
  --gradient-hero: linear-gradient(135deg, #8b5cf6, #06b6d4);
  --gradient-card: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(6,182,212,0.1));
  
  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-3xl: 8rem;
  
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
  
  /* Breakpoints (for reference, used in media queries) */
  /* mobile: 0-767px, tablet: 768-1199px, desktop: 1200px+ */
}
```

### 1.2 Global Resets & Base Styles
- CSS reset (box-sizing, margin/padding)
- Smooth scroll behavior
- Body with dark background and font stack
- Selection highlight color
- Scrollbar styling for dark theme
- Focus-visible outlines for accessibility

### 1.3 Utility Classes
- `.glass-card` — frosted glass panel
- `.gradient-text` — gradient text effect
- `.section-container` — max-width + padding
- `.chip` / `.badge` — tag/label styles

---

## Phase 2: Core Layout (~45 min)

### 2.1 Navbar (`components/Navbar/`)
**Files**: `Navbar.jsx`, `Navbar.module.css`

- Fixed top position with backdrop blur
- Logo/name on left
- Section links: Projects, Experience, Skills, Education, Contact
- Resume download button (CTA)
- Mobile: hamburger → slide-in drawer
- Scroll-spy: highlight active section based on scroll position
- Glass morphism background that intensifies on scroll

### 2.2 Hero (`components/Hero/`)
**Files**: `Hero.jsx`, `Hero.module.css`

- Full viewport height (100vh)
- Particle/constellation background (custom CSS animation — lightweight)
- Staggered text reveal with Framer Motion:
  1. Name: "Anshay Agarwal" — large gradient text
  2. Subtitle: "AI R&D Engineer · Founder · Xern AI"
  3. Tagline: "Building AI systems at the intersection of neuroscience, healthcare, and consumer tech"
- Three CTA buttons with glass styling
- Stats ribbon: `10+ Years` · `15+ Projects` · `5 Companies` · `IIT Delhi`
- Animated count-up for stats
- Scroll-down indicator (animated bouncing chevron)

### 2.3 ParticleBackground (`components/ParticleBackground/`)
**Files**: `ParticleBackground.jsx`, `ParticleBackground.module.css`

- CSS-only constellation effect (no heavy JS library)
- Subtle floating dots with connecting lines via pseudo-elements
- Parallax response to scroll position
- Performance: uses `will-change: transform`, `transform: translateZ(0)`

### 2.4 About (`components/About/`)
**Files**: `About.jsx`, `About.module.css`

- Two-column layout (photo + narrative)
- Profile photo with subtle glow border animation
- Narrative: 3-4 paragraphs covering "expert generalist" identity
- Identity markers: INTJ-T Architect, Founder, Research Engineer
- Social links row: LinkedIn, GitHub, LeetCode, Email
- Framer Motion: fade-in + slide-up on scroll

---

## Phase 3: Projects Showcase (~60 min)

### 3.1 Data Module (`data/projects.js`)
Each project object:
```js
{
  id: 'vitalis',
  title: 'Vitalis',
  subtitle: 'AI-Powered Health Screening',
  description: '...',
  longDescription: '...',
  category: 'research',       // research | agents | healthtech | consumer
  priority: 1,                // 1 = featured, 2 = highlight, 3 = standard
  stack: ['Flutter', 'FastAPI', 'HeAR', 'MedSigLIP', 'Gemini'],
  metrics: '8 vital signs · <500ms latency',
  link: null,                 // tinyurl or external link
  company: 'Xern AI',
  featured: true,
}
```

### 3.2 Featured Projects (`components/FeaturedProjects/`)
**Files**: `FeaturedProjects.jsx`, `FeaturedProjects.module.css`, `ProjectSpotlight.jsx`

- Section header with gradient text
- 4 featured projects as large immersive cards:
  1. **Vitalis** — Health-Tech / Competition
  2. **Agent on Call** — Real-time Voice AI  
  3. **EEG-to-Image** — Brain Signal Reconstruction
  4. **Venom-to-Drug** — Computational Drug Discovery
- Each card: glass panel, gradient border, tech badges, metric highlight
- Hover: 3D perspective tilt (Framer Motion `useMotionValue`)
- Staggered scroll reveal

### 3.3 Project Grid (`components/ProjectGrid/`)
**Files**: `ProjectGrid.jsx`, `ProjectGrid.module.css`, `ProjectCard.jsx`, `FilterBar.jsx`

- Category filter bar: `All` | `Research` | `AI Agents` | `Health-Tech` | `Consumer Apps`
- Filter with smooth layout animation (Framer Motion `AnimatePresence` + `layout`)
- Responsive grid: 3-col → 2-col → 1-col
- Each card: title, description, stack badges, optional link
- Cards sorted by priority within each category

**Project List (by priority)**:

| Priority | Category | Project |
|----------|----------|---------|
| 1 | Research | EEG-to-Image Reconstruction |
| 1 | Research | Cognitive OS Agent (EEG) |
| 1 | Research | Venom-to-Drug Discovery |
| 1 | Research | BCI (IIT Delhi) |
| 1 | Health-Tech | Vitalis (MedGemma) |
| 1 | AI Agents | Agent on Call |
| 1 | AI Agents | SchoolBook.AI |
| 2 | Consumer Apps | Praan |
| 2 | AI Agents | Calox |
| 2 | Consumer Apps | PipeMaster |
| 2 | Consumer Apps | BCBR |
| 2 | AI Agents | AIPod Summarizer |
| 3 | Systems | Life OS (Obsidian) |
| 3 | Consumer Apps | CookNook |
| 3 | Consumer Apps | Eevolve (2048 Game) |
| 3 | Research | Thermal Video Stabilization |

---

## Phase 4: Experience, Skills & Education (~45 min)

### 4.1 Timeline (`components/Timeline/`)
**Files**: `Timeline.jsx`, `Timeline.module.css`, `TimelineNode.jsx`

- Vertical timeline with center line
- Alternating left/right cards on desktop
- Single column on mobile
- Each node: company, role, dates, 2-3 bullet highlights
- Sequential reveal animation on scroll
- Subtle connecting line animation
- Color-coded by company type

**Data (`data/experience.js`)**: 8 entries from Stealth AI → DRDO

### 4.2 Skills (`components/Skills/`)
**Files**: `Skills.jsx`, `Skills.module.css`, `SkillCluster.jsx`

- Grouped skill clusters (NOT progress bars)
- Each cluster: heading + pill/chip badges
- 6 clusters:
  - AI & ML (primary — largest visual weight)
  - Languages
  - Mobile & Frontend
  - Backend & Infrastructure
  - Systems & Hardware
  - Creative Tools
- Chips have category-specific accent colors
- Subtle glow/pulse animation on hover
- Responsive: wrapping grid layout

### 4.3 Education (`components/Education/`)
**Files**: `Education.jsx`, `Education.module.css`

- Two sub-sections:
  1. **Degrees** — IIT Delhi M.Tech + IIT Mandi B.Tech (glass cards)
  2. **Certifications** — Badge/chip list of completed certifications
- Achievements panel: GATE, JEE, GRE scores with visual emphasis
- Specialization to include: Entrepreneurship (Wharton), TensorFlow, Deep Learning, Google Gen AI, Neuroscience courses
- EXCLUDE: Self Driving Cars, Robotics specializations (per user feedback)

---

## Phase 5: Testimonials, Writing, Contact (~40 min)

### 5.1 Testimonials (`components/Testimonials/`)
**Files**: `Testimonials.jsx`, `Testimonials.module.css`

- Quote cards with glass styling
- Two visible recommendations:
  - Hansa Kary (GreyscaleAI)
  - Daniel Cannistraci (GreyscaleAI)
- Each: quote text, author name, role/company, LinkedIn link
- Subtle quote icon decoration

### 5.2 Writing (`components/Writing/`)
**Files**: `Writing.jsx`, `Writing.module.css`

- Section for creative/writing work
- Novel "The Compromise" — card with description
- LinkedIn article: "AI Guru - Google-Kaggle Gen-AI Capstone" — card with link
- LinkedIn post highlights (thought leadership on #HealthcareAI)
- Clean card layout with glass styling

### 5.3 Contact (`components/Contact/`)
**Files**: `Contact.jsx`, `Contact.module.css`

- Large CTA: "Let's build something extraordinary"
- Contact form (Formspree or similar — no backend needed)
  - Name, Email, Message fields
  - Submit button with loading state
- Social links row: LinkedIn, GitHub, LeetCode, Email (mailto)
- Resume download button
- NO phone number (per user feedback)

### 5.4 Footer
- Minimal footer within Contact section
- Copyright + "Built with React & Framer Motion"
- Year: 2026

---

## Phase 6: Polish & Optimization (~30 min)

### 6.1 Responsive Design
- Test and fix all breakpoints: 320px, 480px, 768px, 1024px, 1200px, 1440px
- Mobile nav: hamburger menu with slide-in drawer
- Touch-friendly tap targets (min 44px)
- Responsive typography scaling

### 6.2 SEO
- `<title>`: "Anshay Agarwal — AI R&D Engineer | Founder"
- `<meta description>`: Professional summary
- Open Graph tags for social sharing
- JSON-LD structured data (Person schema)
- Semantic HTML throughout
- Single `<h1>` in Hero

### 6.3 Performance
- Lazy load below-fold images
- Code-split sections with `React.lazy()` if bundle grows
- Optimize `pic.jpg` → WebP
- Preload Inter and JetBrains Mono fonts
- Minimize Framer Motion re-renders with `React.memo`

### 6.4 Accessibility
- WCAG 4.5:1 contrast ratios verified
- Keyboard navigation for all interactive elements
- ARIA labels on icons and buttons
- Screen reader friendly section landmarks
- Reduced motion support via `prefers-reduced-motion`

### 6.5 Final Checks
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Lighthouse audit target: 90+ all categories
- Test GitHub Pages deployment
- Verify resume download works
- Verify all social links

---

## Animation Choreography (Framer Motion)

| Component | Animation | Props |
|-----------|-----------|-------|
| Hero Name | Staggered letter reveal | `variants`, `staggerChildren: 0.03` |
| Hero Stats | Count-up from 0 | Custom hook with `useInView` |
| Section Headers | Slide-up + fade | `initial={{y: 30, opacity: 0}}` `whileInView={{y: 0, opacity: 1}}` |
| Project Cards | Scale + fade on enter | `whileInView`, `viewport: {once: true}` |
| Project Cards Hover | 3D tilt | `whileHover`, perspective transform |
| Timeline Nodes | Sequential left/right slide | `variants` with `staggerChildren: 0.2` |
| Skill Chips | Fade-in cascade | `staggerChildren: 0.05` |
| Filter Change | Layout animation | `layout` prop + `AnimatePresence` |
| Glass Cards | Subtle lift on hover | `whileHover: {y: -4, shadow}` |
| Scroll Progress | Top progress bar | `useScroll` + `scaleX` |
| Navbar | Backdrop blur on scroll | `useScroll` + `useTransform` |

---

## Data Files Summary

### `data/projects.js`
- ~16 projects with full metadata
- Categories: research, agents, healthtech, consumer
- Priority levels: 1 (featured) → 3 (standard)

### `data/experience.js`
- 8 career entries in reverse chronological order
- Each: company, role, period, highlights[], tech[]

### `data/skills.js`
- 6 skill clusters with individual skill items
- Each skill: name, proficiency level (for optional visual weight)

### `data/education.js`
- 2 degrees (IIT Delhi, IIT Mandi)
- 8 certifications (filtered per user feedback)
- 5 achievements (GATE, JEE, GRE, etc.)

### `data/testimonials.js`
- 2 LinkedIn recommendations with author info

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 18.x | UI framework |
| `react-dom` | 18.x | DOM rendering |
| `framer-motion` | 11.x | Animations |
| `lucide-react` | latest | Icon set |
| `vite` | 6.x | Build tool |
| `gh-pages` | latest | GitHub Pages deploy |

**Total new dependencies**: 3 (framer-motion, lucide-react, gh-pages)  
**Estimated bundle**: ~150KB gzipped

---

## Open Items (Need from User Before/During Build)

1. **TinyURL links** for PipeMaster, BCBR, and Praan Play Store listings
2. **Contact form service** preference: Formspree (free tier, no backend) vs. alternative
3. Any **additional projects** to add that haven't been listed
4. **Novel "The Compromise"** — is it published anywhere? Want a link or just description?

---

> **Ready to implement upon your green light. 🚀**
