/**
 * Project data module.
 * Categories: research | agents | healthtech | consumer
 * Priority: 1 (featured spotlight) → 2 (grid highlight) → 3 (standard)
 *
 * Rarity system for RPG theme:
 *  - legendary: groundbreaking, novel research
 *  - epic: significant products/ventures
 *  - rare: notable projects
 *  - common: smaller projects
 *
 * Audited against knowledge graph (2026-06-21).
 */

const CATEGORIES = {
  RESEARCH: 'research',
  AGENTS: 'agents',
  HEALTHTECH: 'healthtech',
  CONSUMER: 'consumer',
};

export const categoryLabels = {
  all: 'All Quests',
  research: 'Research',
  agents: 'AI Agents',
  healthtech: 'Health-Tech',
  consumer: 'Consumer Apps',
};

export const projects = [
  /* ── Featured (Priority 1) ── */
  {
    id: 'vitalis',
    title: 'Vitalis',
    subtitle: 'AI-Powered Health Screening Platform',
    description:
      'Multi-modal AI medical screening app using Google MedGemma, HeAR, and MedSigLIP. Screens 8 vital signs: Neuro-Tremor (Parkinson\'s), Anemia-Eye, Jaundice-Cam, Oral-Cancer, Cough-Check (TB), Cardio-Vision (rPPG), Alzheimer-Voice, and Neuro-Chat triage.',
    category: CATEGORIES.HEALTHTECH,
    priority: 1,
    rarity: 'legendary',
    stack: ['Flutter', 'FastAPI', 'MedGemma', 'HeAR', 'MedSigLIP', 'Gemini'],
    metrics: '8 vital signs · 3 AI models · MedGemma Impact Challenge',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'agent-on-call',
    title: 'Agent on Call',
    subtitle: 'Telegram AI Voice Agent',
    description:
      'Real-time voice AI agent for Telegram with auto-join calls, real-time transcription, wake word detection, and meeting summaries. Sub-500ms latency voice pipeline with WebSocket audio streaming.',
    category: CATEGORIES.AGENTS,
    priority: 1,
    rarity: 'legendary',
    stack: ['Python', 'Gemini 2.5 Flash', 'faster-whisper', 'edge-tts', 'openwakeword', 'FFMPEG'],
    metrics: '<500ms latency · Wake word detection · Meeting summaries',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'eeg-to-image',
    title: 'EEG-to-Image Reconstruction',
    subtitle: 'Brain Signal Visual Reconstruction',
    description:
      'Reconstructing visual imagery from EEG brain signals using CLIP embeddings and Kandinsky 2.1 diffusion model. 768-dimensional encoders bridging neuroscience and generative AI.',
    category: CATEGORIES.RESEARCH,
    priority: 1,
    rarity: 'legendary',
    stack: ['Python', 'CLIP', 'Kandinsky 2.1', 'EEG', '768-dim Encoders'],
    metrics: 'Novel BCI research · EEG → visual reconstruction',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'venom-to-drug',
    title: 'Venom-to-Drug Discovery',
    subtitle: 'Computational Drug Design from Venoms',
    description:
      'AI pipeline converting venom compounds to therapeutic drugs. Phases: venom analysis, backbone generation via RFDiffusion, protein sequence design via ProteinMPNN. Ran 100-design pipelines.',
    category: CATEGORIES.RESEARCH,
    priority: 1,
    rarity: 'legendary',
    stack: ['Python', 'RFDiffusion', 'ProteinMPNN', 'Molecular Docking'],
    metrics: '1000-design pipeline · Venom → therapeutic drugs',
    link: null,
    company: 'Xern AI',
  },

  /* ── Priority 2 ── */
  {
    id: 'cognitive-os',
    title: 'Cognitive OS Agent',
    subtitle: 'EEG-Driven Operating System',
    description:
      'Brain-computer interface agent translating cognitive states from EEG into OS-level commands using MOABB benchmarks. Think-to-type, think-to-navigate paradigm.',
    category: CATEGORIES.RESEARCH,
    priority: 2,
    rarity: 'epic',
    stack: ['Python', 'EEG', 'BCI', 'MOABB', 'Signal Processing'],
    metrics: 'Real-time EEG → OS commands',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'schoolbook-ai',
    title: 'SchoolBook.AI',
    subtitle: 'AI-First Education Platform',
    description:
      'Co-founded intelligent tutoring system with multimodal RAG for NCERT textbooks. Built LangGraph autonomous agents and full-stack GenAI deployment with vector database integration.',
    category: CATEGORIES.AGENTS,
    priority: 2,
    rarity: 'epic',
    stack: ['Python', 'LangGraph', 'Gemini Pro', 'Vector DBs', 'LangChain'],
    metrics: 'Multimodal RAG · Autonomous agents · NCERT curriculum',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'praan',
    title: 'Praan',
    subtitle: 'Spiritual Wellness Companion',
    description:
      'Full-featured spiritual app: Netflix-style scripture library, AI Guru chatbot, Kundli/astrology, Panchang, Japa Mala, Meditation Timer, Live Pooja, Horoscope, Festival Calendar, Wallpapers. 500+ shlokas, premium subscription model.',
    category: CATEGORIES.CONSUMER,
    priority: 2,
    rarity: 'epic',
    stack: ['Flutter', 'Riverpod', 'GoRouter', 'Supabase', 'SQLite', 'Hive', 'Gemini'],
    metrics: '500+ shlokas · 40+ festivals · AI Guru · Subscription model',
    link: 'https://tinyurl.com/PraanLinks',
    company: 'Xern AI',
  },
  {
    id: 'calox',
    title: 'Calox',
    subtitle: 'AI Personal Analytics',
    description:
      'Offline-first AI platform serving as an autonomous analyst for unstructured personal logs. Trend visualization and insight generation powered by Gemini.',
    category: CATEGORIES.AGENTS,
    priority: 2,
    rarity: 'rare',
    stack: ['Flutter', 'Hive', 'Gemini'],
    metrics: 'Offline-first · Unstructured log analysis',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'pipemaster',
    title: 'PipeMaster',
    subtitle: 'Plumbing Code Exam Prep',
    description:
      'Niche exam prep app for plumbing professionals with practice exams, tools, cheat sheets, and video content. Published on Play Store with subscription monetization.',
    category: CATEGORIES.CONSUMER,
    priority: 2,
    rarity: 'rare',
    stack: ['Flutter', 'Dart', 'RevenueCat'],
    metrics: 'Play Store published · Subscription tiers',
    link: 'https://tinyurl.com/plumCode',
    company: 'Xern AI',
  },
  {
    id: 'bcbr',
    title: 'BCBR',
    subtitle: 'Basic Course in Biomedical Research',
    description:
      'Medical education app with 50 topics, notes with LaTeX, AI infographics, and video links. Built for ICMR curriculum with offline calculators.',
    category: CATEGORIES.HEALTHTECH,
    priority: 2,
    rarity: 'rare',
    stack: ['Flutter', 'NotebookLM', 'Gemini', 'Supabase'],
    metrics: '50 topics · AI infographics · ICMR curriculum',
    link: 'https://tinyurl.com/BCBRlinks',
    company: 'Xern AI',
  },
  {
    id: 'aipod',
    title: 'AIPod Summarizer',
    subtitle: 'YouTube Video Summarizer',
    description:
      'AI-powered podcast and video summarization with semantic search. Generates structured summaries, key insights, and searchable transcripts.',
    category: CATEGORIES.AGENTS,
    priority: 2,
    rarity: 'rare',
    stack: ['React Native', 'Expo', 'LangChain', 'Vector DB'],
    metrics: 'Audio → structured insights · Semantic search',
    link: null,
    company: 'Xern AI',
  },

  /* ── Priority 3 ── */
  {
    id: 'bci-iitd',
    title: 'Motor Imagery BCI',
    subtitle: 'Brain-Computer Interface (IIT Delhi)',
    description:
      'EEG-based motor imagery classification for cursor control. Designed EEG experiment paradigms, recruited subjects, built real-time classification pipeline using EEGLAB/BCILAB.',
    category: CATEGORIES.RESEARCH,
    priority: 3,
    rarity: 'rare',
    stack: ['MATLAB', 'EEGLAB', 'BCILAB', 'Signal Processing', 'pygame'],
    metrics: 'IIT Delhi research · EEG motor imagery cursor control',
    link: null,
    company: 'IIT Delhi',
  },
  {
    id: 'autodub',
    title: 'Autodub',
    subtitle: 'Automatic Video Dubbing with Lip Sync',
    description:
      'AI-powered automatic video dubbing system with lip synchronization for cross-language content.',
    category: CATEGORIES.RESEARCH,
    priority: 3,
    rarity: 'rare',
    stack: ['Python', 'Deep Learning', 'Audio Processing', 'Computer Vision'],
    metrics: 'Cross-language dubbing · Lip sync',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'thermal-stabilization',
    title: 'Thermal Video Stabilization',
    subtitle: 'M.Tech Dissertation (DRDO)',
    description:
      'Efficient motion estimation and correction for thermal video using Harris Corner detector and Lucas-Kanade optical flow. M.Tech dissertation at IIT Delhi.',
    category: CATEGORIES.RESEARCH,
    priority: 3,
    rarity: 'rare',
    stack: ['MATLAB', 'OpenCV', 'Signal Processing', 'Harris Corner', 'LK Flow'],
    metrics: 'DRDO research · M.Tech dissertation',
    link: null,
    company: 'DRDO / IIT Delhi',
  },
  {
    id: 'cooknook',
    title: 'CookNook',
    subtitle: 'Meal Planning with Tinder-Swipe UI',
    description:
      'Smart recipe app with Tinder-style swipe interface for meal discovery and planning.',
    category: CATEGORIES.CONSUMER,
    priority: 3,
    rarity: 'common',
    stack: ['Flutter', 'Gemini', 'Firebase'],
    metrics: 'Swipe-based meal planning',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'eevolve',
    title: 'Eevolve (2048)',
    subtitle: '2048 Game with Eevee Theme',
    description:
      'Custom 2048 puzzle game themed with Pokemon Eevee evolutions. Published as a fun side project.',
    category: CATEGORIES.CONSUMER,
    priority: 3,
    rarity: 'common',
    stack: ['Flutter'],
    metrics: 'Pokemon-themed puzzle game',
    link: null,
    company: 'Xern AI',
  }
];

export const featuredProjects = projects.filter((p) => p.priority === 1);

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

export default projects;
