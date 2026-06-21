/**
 * Project data module.
 * Categories: research | agents | healthtech | consumer
 * Priority: 1 (featured spotlight) → 2 (grid highlight) → 3 (standard)
 */

const CATEGORIES = {
  RESEARCH: 'research',
  AGENTS: 'agents',
  HEALTHTECH: 'healthtech',
  CONSUMER: 'consumer',
};

export const categoryLabels = {
  all: 'All Projects',
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
      'Multi-modal AI medical screening app using Google MedGemma, HeAR, and MedSigLIP. Analyzes 8 vital signs from smartphone sensors with <500ms inference.',
    category: CATEGORIES.HEALTHTECH,
    priority: 1,
    stack: ['Flutter', 'FastAPI', 'MedGemma', 'HeAR', 'MedSigLIP', 'Gemini 2.5'],
    metrics: '8 vital signs · <500ms latency · 3 AI models',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'agent-on-call',
    title: 'Agent on Call',
    subtitle: 'Real-Time Voice AI Agent System',
    description:
      'Voice-first AI agent platform with real-time speech-to-speech pipeline. Handles appointment booking, triage, and customer service with <2s response time.',
    category: CATEGORIES.AGENTS,
    priority: 1,
    stack: ['Python', 'LangGraph', 'Gemini', 'Twilio', 'WebRTC', 'FastAPI'],
    metrics: '<2s voice response · Multi-agent orchestration',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'eeg-to-image',
    title: 'EEG-to-Image Reconstruction',
    subtitle: 'Brain Signal Visual Reconstruction',
    description:
      'Reconstructing visual imagery from EEG brain signals using deep generative models. Bridging neuroscience and computer vision for Brain-Computer Interfaces.',
    category: CATEGORIES.RESEARCH,
    priority: 1,
    stack: ['Python', 'PyTorch', 'EEG', 'Diffusion Models', 'Signal Processing'],
    metrics: 'Novel BCI research · EEG → visual reconstruction',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'venom-to-drug',
    title: 'Venom-to-Drug Discovery',
    subtitle: 'Computational Drug Design from Venoms',
    description:
      'AI pipeline for discovering therapeutic compounds from animal venoms. Combines molecular docking, ADMET prediction, and generative chemistry.',
    category: CATEGORIES.RESEARCH,
    priority: 1,
    stack: ['Python', 'RDKit', 'AlphaFold', 'Molecular Docking', 'GNNs'],
    metrics: 'Venom peptide analysis · Drug candidate generation',
    link: null,
    company: 'Xern AI',
  },

  /* ── Priority 2 ── */
  {
    id: 'cognitive-os',
    title: 'Cognitive OS Agent',
    subtitle: 'EEG-Driven Operating System',
    description:
      'Brain-computer interface agent that translates cognitive states from EEG into OS-level commands. Think-to-type, think-to-navigate paradigm.',
    category: CATEGORIES.RESEARCH,
    priority: 2,
    stack: ['Python', 'EEG', 'BCI', 'Signal Processing', 'ML'],
    metrics: 'Real-time EEG → OS commands',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'schoolbook-ai',
    title: 'SchoolBook.AI',
    subtitle: 'AI-First Education Platform',
    description:
      'Intelligent tutoring system generating personalized curricula, video lectures, and assessments. Built 44 medical lectures using NotebookLM pipeline.',
    category: CATEGORIES.AGENTS,
    priority: 2,
    stack: ['Flutter', 'NotebookLM', 'Gemini', 'Supabase'],
    metrics: '44 video lectures · AI-generated curriculum',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'praan',
    title: 'Praan',
    subtitle: 'Spiritual Wellness Companion',
    description:
      'Offline-first spiritual companion app with AI Guru chat, daily practices, audio meditations, and vedic content. Premium subscription model with 500+ shlokas.',
    category: CATEGORIES.CONSUMER,
    priority: 2,
    stack: ['Flutter', 'Supabase', 'SQLite', 'Hive', 'Gemini'],
    metrics: '500+ shlokas · Offline-first · AI Guru chat',
    link: 'https://tinyurl.com/PraanLinks',
    company: 'Xern AI',
  },
  {
    id: 'calox',
    title: 'Calox',
    subtitle: 'AI Calendar & Scheduling Agent',
    description:
      'Natural language calendar agent that understands context, resolves conflicts, and manages schedules through conversational interaction.',
    category: CATEGORIES.AGENTS,
    priority: 2,
    stack: ['Python', 'LangChain', 'Google Calendar API', 'NLP'],
    metrics: 'NL scheduling · Context-aware conflicts',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'pipemaster',
    title: 'PipeMaster',
    subtitle: 'Plumbing Reference & Calculator',
    description:
      'Professional plumbing utility app with pipe sizing calculators, reference charts, and material estimators. Published on Google Play Store.',
    category: CATEGORIES.CONSUMER,
    priority: 2,
    stack: ['Flutter', 'Dart', 'Material Design 3'],
    metrics: 'Play Store published · Pro tier',
    link: 'https://tinyurl.com/plumCode',
    company: 'Xern AI',
  },
  {
    id: 'bcbr',
    title: 'BCBR',
    subtitle: 'Biostatistics & Clinical Research',
    description:
      'Medical education app with 44 AI-generated video lectures, MCQ practice, AI infographics, and offline biostat calculators. Built for ICMR curriculum.',
    category: CATEGORIES.HEALTHTECH,
    priority: 2,
    stack: ['Flutter', 'NotebookLM', 'Gemini', 'Supabase'],
    metrics: '44 lectures · MCQ engine · Offline calculators',
    link: 'https://tinyurl.com/BCBRlinks',
    company: 'Xern AI',
  },
  {
    id: 'aipod',
    title: 'AIPod Summarizer',
    subtitle: 'Podcast Intelligence Agent',
    description:
      'AI agent that ingests podcast episodes and generates structured summaries, key insights, action items, and searchable transcripts.',
    category: CATEGORIES.AGENTS,
    priority: 2,
    stack: ['Python', 'Whisper', 'LLM', 'FastAPI'],
    metrics: 'Audio → structured insights',
    link: null,
    company: 'Xern AI',
  },

  /* ── Priority 3 ── */
  {
    id: 'bci-iitd',
    title: 'Motor Imagery BCI',
    subtitle: 'Brain-Computer Interface (IIT Delhi)',
    description:
      'EEG-based motor imagery classification system controlling virtual environments. Designed the EEG experiment paradigm and trained models using EEGLAB/BCILAB.',
    category: CATEGORIES.RESEARCH,
    priority: 3,
    stack: ['MATLAB', 'EEGLAB', 'BCILAB', 'Signal Processing', 'pygame'],
    metrics: 'IIT Delhi research · EEG motor imagery',
    link: null,
    company: 'IIT Delhi',
  },
  {
    id: 'cooknook',
    title: 'CookNook',
    subtitle: 'AI Recipe Discovery',
    description:
      'Smart recipe app with ingredient-based search, AI meal planning, and nutritional tracking.',
    category: CATEGORIES.CONSUMER,
    priority: 3,
    stack: ['Flutter', 'Gemini', 'Firebase'],
    metrics: 'AI-powered meal planning',
    link: null,
    company: 'Xern AI',
  },
  {
    id: 'thermal-stabilization',
    title: 'Thermal Video Stabilization',
    subtitle: 'M.Tech Dissertation (DRDO)',
    description:
      'Efficient motion estimation and correction for thermal video using Harris Corner detector and Lucas-Kanade optical flow.',
    category: CATEGORIES.RESEARCH,
    priority: 3,
    stack: ['MATLAB', 'OpenCV', 'Signal Processing', 'Harris Corner', 'LK Flow'],
    metrics: 'DRDO research · M.Tech thesis',
    link: null,
    company: 'DRDO / IIT Delhi',
  },
  {
    id: 'life-os',
    title: 'Life OS',
    subtitle: 'Personal Knowledge System',
    description:
      'Comprehensive personal operating system built in Obsidian for task management, goal tracking, journaling, and knowledge synthesis.',
    category: CATEGORIES.CONSUMER,
    priority: 3,
    stack: ['Obsidian', 'Markdown', 'Dataview', 'Templater'],
    metrics: 'Personal productivity system',
    link: null,
    company: 'Personal',
  },
];

export const featuredProjects = projects.filter((p) => p.priority === 1);

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

export default projects;
