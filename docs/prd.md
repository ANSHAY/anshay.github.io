# PRD: Anshay Agarwal — Portfolio Website Overhaul

> **Version**: 1.0  
> **Status**: 🟡 Awaiting Approval  
> **Author**: Antigravity (AI Architect)  
> **Date**: 2026-06-21

---

## 1. Executive Summary

### The Why
The current portfolio is a single-page Bootstrap 4.4.1 HTML file with no animations, no modern design, outdated content, and a flat presentation that fails to communicate the depth and caliber of Anshay's work across AI research, founding startups, and engineering at companies like Nvidia, Qualcomm, and DRDO. It reads like an online resume circa 2019 — not the personal brand of a world-class AI engineer and founder.

### The What
A complete ground-up rebuild into a **lustrous, scroll-animated, Framer Motion-powered single-page application** that positions Anshay as a top-tier research engineer, AI architect, and serial builder. The site must feel like it belongs to someone who builds at the intersection of **neuroscience, AI, healthcare, and consumer products** — because that's exactly what Anshay does.

### The Outcome
A portfolio that:
- Makes viewers say *"this person is world-class"* within 3 seconds
- Retains attention through scroll-driven storytelling and micro-animations
- Showcases 15+ projects across research, AI agents, health-tech, and consumer apps
- Functions as a living marketing asset for career opportunities, investor meetings, and collaborations

---

## 2. Target Audience

| Audience | What They Care About |
|----------|---------------------|
| **Recruiters / Hiring Managers** | Experience at brand-name companies, technical depth, breadth of skills |
| **VCs / Investors** | Founding experience, product thinking, market awareness, execution speed |
| **Collaborators / Co-Founders** | Technical versatility, project velocity, systems thinking |
| **Peers / Engineers** | Code quality, open-source contributions, research depth |
| **Potential Clients** | End-to-end delivery capability, domain expertise |

---

## 3. Design Philosophy

### 3.1 Theme: "Neural Cosmos"
A **dark lustrous theme** inspired by the intersection of neuroscience and deep space — representing the vast, interconnected nature of Anshay's work across disciplines.

- **Primary Background**: Deep space black (`#0a0a0f`) with subtle gradient shifts
- **Accent Colors**: Electric violet (`#8b5cf6`), cyan pulse (`#06b6d4`), warm amber (`#f59e0b`)
- **Surface Colors**: Frosted glass panels (`rgba(255,255,255,0.05)`) with backdrop blur
- **Typography**: Inter (headings) + JetBrains Mono (code/tech accents) from Google Fonts
- **Texture**: Subtle particle/constellation background that responds to scroll depth

### 3.2 Material Expressive Design Principles
- **Dynamic surfaces** with elevation changes on hover/scroll
- **Generous white space** — let content breathe
- **Motion as meaning** — every animation communicates hierarchy or state
- **Bold typography** — large section headers with gradient text effects
- **Glassmorphism** for cards and panels — frosted glass over dark backgrounds

### 3.3 Animation Strategy (Framer Motion)
| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero text | Staggered letter reveal + gradient shimmer | Page load |
| Section headers | Slide-up + fade-in | Scroll into viewport |
| Project cards | Scale-up + parallax tilt | Scroll + Hover |
| Timeline nodes | Sequential reveal left/right | Scroll into viewport |
| Skill orbs | Float animation + glow pulse | Always (ambient) |
| Stats counters | Count-up animation | Scroll into viewport |
| Navigation | Blur backdrop + slide transition | Scroll position |
| Background particles | Subtle parallax drift | Scroll depth |

---

## 4. Information Architecture

### 4.1 Section Flow (Single Page, Scroll-Driven)

```
┌─────────────────────────────────────┐
│  1. HERO                            │
│  "I build AI systems that matter."  │
│  Name, Role, CTA buttons, Particles│
├─────────────────────────────────────┤
│  2. ABOUT / IDENTITY                │
│  Photo, narrative, key stats strip  │
│  (10+ yrs, 15+ projects, 5 cos)    │
├─────────────────────────────────────┤
│  3. FEATURED PROJECTS (Spotlight)   │
│  3-4 flagship projects as          │
│  immersive showcase cards           │
├─────────────────────────────────────┤
│  4. ALL PROJECTS (Grid)             │
│  Filterable grid of all projects   │
│  with category tags                 │
├─────────────────────────────────────┤
│  5. EXPERIENCE TIMELINE             │
│  Interactive vertical timeline      │
│  with company logos & highlights    │
├─────────────────────────────────────┤
│  6. SKILLS & EXPERTISE              │
│  Visual skill map / tech radar     │
│  grouped by domain                  │
├─────────────────────────────────────┤
│  7. EDUCATION & ACHIEVEMENTS        │
│  Academic pedigree + test scores   │
│  + specializations                  │
├─────────────────────────────────────┤
│  8. CONTACT / CTA                   │
│  Email, LinkedIn, GitHub, Resume   │
│  "Let's build something together"   │
└─────────────────────────────────────┘
```

### 4.2 Navigation
- **Fixed top navbar** with glassmorphism blur effect
- Section links with scroll-spy active state indicator
- Hamburger menu on mobile → slide-in drawer
- Resume download button always visible in nav

---

## 5. Section Specifications

### 5.1 Hero Section
- **Full viewport height** (100vh)
- Animated particle/constellation background (Canvas or CSS)
- Large gradient text: Name + title
- Subtitle: *"Building AI systems at the intersection of neuroscience, healthcare, and consumer tech"*
- Three CTA buttons: `View Projects` | `Download Resume` | `Contact Me`
- Subtle scroll-down indicator (animated chevron)
- Stats ribbon at bottom: `10+ Years` · `15+ Projects` · `5 Companies` · `IIT Delhi`

### 5.2 About Section
- **Layout**: Two columns — photo (left) + narrative (right)
- Photo with subtle glow/border animation
- Brief narrative (3-4 paragraphs) covering the "expert generalist" story
- Key identity markers: INTJ-T Architect, Founder DNA, Research Engineer
- Social links row (LinkedIn, GitHub, LeetCode)

### 5.3 Featured Projects (Spotlight)
The **crown jewel** of the site. 3-4 projects displayed as large immersive cards:

1. **Vitalis** — AI Health Screening (MedGemma Challenge)
   - Medical imagery, 8 vital signs, HeAR + MedSigLIP
   - Tag: `Health-Tech` `AI` `Flutter` `Competition`

2. **Agent on Call** — Real-time AI Voice Agent
   - <500ms latency, Telegram integration, wake word detection
   - Tag: `Voice AI` `Real-time` `Python`

3. **Praan** — Spiritual Literature Platform
   - Full-stack app with AI Guru, Netflix-style UI, 1000s of scriptures
   - Tag: `Flutter` `Supabase` `AI` `Live Product`

4. **EEG-to-Image** — Brain Signal Reconstruction
   - CLIP embeddings, Kandinsky generation, neuroscience research
   - Tag: `Neuroscience` `Deep Learning` `Research`

Each card features:
- Project title + one-line description
- Tech stack badges
- Key metric/highlight
- Hover: expand with more details + link to GitHub
- Subtle parallax tilt on hover (3D perspective)

### 5.4 All Projects Grid
- Filterable by category: `Research` | `AI Agents` | `Health-Tech` | `Consumer Apps` | `All`
- Card grid (responsive: 3-col desktop, 2-col tablet, 1-col mobile)
- Each card: Title, description, tech badges, GitHub link
- Projects to include:

| Project | Category | Stack |
|---------|----------|-------|
| Vitalis | Health-Tech | Flutter, FastAPI, HeAR, MedSigLIP |
| Agent on Call | AI Agents | Python, Gemini, WebSockets |
| Praan | Consumer Apps | Flutter, Supabase, AI |
| EEG-to-Image | Research | Python, CLIP, Kandinsky |
| Cognitive OS Agent | Research | Python, EEG, BCI |
| Venom-to-Drug | Research | Python, RFDiffusion, ProteinMPNN |
| SchoolBook.AI | AI Agents | Python, LangGraph, Gemini Pro |
| PipeMaster | Consumer Apps | Flutter, RevenueCat |
| BCBR | Consumer Apps | Flutter |
| Calox | AI Agents | Flutter, Hive, Gemini |
| CookNook | Consumer Apps | Flutter |
| AIPod Summarizer | AI Agents | React Native, LangChain |
| Life OS (Obsidian) | Systems | Obsidian, AI, GitHub Sync |
| BCI (IIT Delhi) | Research | EEG, Deep Learning |
| Thermal Video Stabilization | Research | C++, OpenCV |

### 5.5 Experience Timeline
- **Vertical timeline** with alternating left/right cards
- Each node: Company name, role, dates, 2-3 bullet highlights
- Company brand colors or logos where available
- Animated sequential reveal on scroll
- Companies: Stealth AI → SchoolBook.AI → Qualcomm → Calpion → GreyscaleAI → Canairy → Xern AI → Nvidia → DRDO

### 5.6 Skills & Expertise
- **Grouped skill clusters** (not progress bars — those are outdated)
- Visual groupings:
  - **AI & ML**: LangGraph, LLMs, RAG, Deep Learning, Computer Vision, ASR, BCI
  - **Languages**: Python, C++, JavaScript, Dart
  - **Mobile**: Flutter, React Native
  - **Backend**: FastAPI, Supabase, Firebase, Docker, Cloud Run
  - **Systems**: Git, Linux, ROS, Embedded, CUDA, OpenGL
  - **Creative**: Blender, Unity
- Each skill shown as a glowing pill/chip with category color coding
- Potential: Interactive hover tooltips showing experience context

### 5.7 Education & Achievements
- **Two-column**: Education (left) + Achievements (right)
- Education: IIT Delhi M.Tech + IIT Mandi B.Tech + Specializations
- Achievements: GATE, JEE, GRE scores with visual emphasis
- Specialization badges: Wharton, U of Toronto, Northwestern, DeepLearning.AI

### 5.8 Contact / Footer
- Large CTA: *"Let's build something extraordinary"*
- Email, LinkedIn, GitHub icons
- Resume download button
- Copyright + "Built with React & Framer Motion"

---

## 6. Technical Architecture

### 6.1 Stack Decision

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Build Tool** | Vite | Fast HMR, optimized builds, tree-shaking |
| **Framework** | React 18 | Component-driven, massive ecosystem |
| **Animations** | Framer Motion | User-requested, best-in-class React animation lib |
| **Styling** | Vanilla CSS (CSS Modules) | Per user rules — no Tailwind unless requested |
| **Fonts** | Google Fonts (Inter + JetBrains Mono) | Clean, modern typography |
| **Icons** | Lucide React | Lightweight, consistent icon set |
| **Deployment** | GitHub Pages | Existing repo, free hosting |
| **Particles** | CSS/Canvas (custom) | Lightweight background effect |

### 6.2 Project Structure
```
anshay.github.io/
├── public/
│   ├── images/
│   │   └── pic.jpg (existing profile photo)
│   ├── assets/
│   │   └── download/
│   │       └── Resume_Anshay.pdf
│   └── favicon.ico
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              (global design tokens + resets)
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── FeaturedProjects/
│   │   ├── ProjectGrid/
│   │   ├── Timeline/
│   │   ├── Skills/
│   │   ├── Education/
│   │   ├── Contact/
│   │   ├── ParticleBackground/
│   │   └── common/
│   │       ├── SectionHeader.jsx
│   │       ├── GlassCard.jsx
│   │       ├── AnimatedCounter.jsx
│   │       └── ScrollReveal.jsx
│   └── data/
│       ├── projects.js
│       ├── experience.js
│       ├── skills.js
│       └── education.js
├── docs/
│   └── knowledge_graph.md
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### 6.3 Deployment Strategy
- **Build**: `npm run build` → outputs to `dist/`
- **Deploy**: GitHub Pages via GitHub Actions (or `gh-pages` package)
- The existing `index.html` at root will be replaced by the Vite build output
- Resume PDF preserved in `public/assets/download/`

---

## 7. Performance Requirements

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size (gzipped) | < 200KB (excl. images) |
| Lighthouse Score | 90+ (Performance, Accessibility, SEO) |

### Optimization Strategy
- Lazy-load below-fold sections
- Use `IntersectionObserver` for scroll animations (via Framer Motion `whileInView`)
- Optimize and compress images (WebP where possible)
- Code-split by section (dynamic imports)
- Preload critical fonts

---

## 8. SEO Requirements

- Proper `<title>` and `<meta description>`
- Single `<h1>` per page (hero name)
- Semantic HTML5: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Open Graph tags for social sharing
- Structured data (JSON-LD: Person schema)
- Canonical URL
- Sitemap.xml generation
- Descriptive alt text on all images

---

## 9. Responsiveness

| Breakpoint | Layout |
|-----------|--------|
| **Desktop** (1200px+) | Full multi-column layouts, large hero, 3-col project grid |
| **Tablet** (768px - 1199px) | 2-col grids, condensed timeline |
| **Mobile** (< 768px) | Single column, hamburger nav, stacked cards, touch-optimized |

---

## 10. Content Strategy

### Narrative Arc (Top-to-Bottom)
1. **Hook**: "I build AI systems that matter" — immediate positioning
2. **Credibility**: About section — IIT pedigree, 10+ years, company names
3. **Proof**: Featured projects — show, don't tell
4. **Depth**: All projects + timeline — breadth of work
5. **Technical**: Skills — domain expertise visualization
6. **Foundation**: Education — academic rigor
7. **Action**: Contact — clear CTA

### Tone of Voice
- **Confident but not arrogant** — let the work speak
- **Technical but accessible** — a VC should understand it too
- **Forward-looking** — focus on what's being built, not just what was done

---

## 11. Open Questions for User

> [!IMPORTANT]
> Please review and respond to these before implementation begins:

1. **Profile Photo**: Should we keep the current `pic.jpg` or do you have a newer professional photo?
2. **GitHub Repos**: Which projects should link to public GitHub repos vs. be listed as private/stealth?
3. **Phone Number**: The current site lists your phone number publicly. Should we keep, remove, or hide it behind a contact form?
4. **Blog/Writing**: You wrote a novel "The Compromise." Want a writing/blog section?
5. **Xern AI Branding**: Should the site reference Xern AI as a company brand or fold its projects under your personal brand?
6. **Live App Links**: Should we link to Play Store for PipeMaster, BCBR, and Praan?
7. **Testimonials**: Do you have any quotes/recommendations from colleagues at Qualcomm, Nvidia, etc.?
8. **Domain**: Will this stay on `anshay.github.io` or are you planning a custom domain?
9. **Analytics**: Want Google Analytics / Plausible integrated?
10. **Any projects you want EXCLUDED from the site?**

---

## 12. Success Metrics

| Metric | Target |
|--------|--------|
| Average time on site | > 2 minutes |
| Scroll depth | > 75% of users reach projects section |
| Resume downloads | Trackable via analytics |
| Contact link clicks | Trackable via analytics |
| LinkedIn referral traffic | Measurable increase post-launch |
| Lighthouse scores | 90+ across all categories |

---

## 13. Timeline Estimate

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Design & Planning | ✅ Complete | PRD + Implementation Plan |
| Foundation (Vite + React + Design Tokens) | ~30 min | Scaffolding + global styles |
| Hero + Navbar + Particles | ~45 min | First visual section |
| About + Stats | ~30 min | Identity section |
| Featured Projects + Grid | ~60 min | Core showcase |
| Timeline + Skills | ~45 min | Experience & expertise |
| Education + Contact + Footer | ~30 min | Remaining sections |
| Polish, Animations, Responsive | ~45 min | Final refinement |
| **Total** | **~5 hours** | **Production-ready site** |
