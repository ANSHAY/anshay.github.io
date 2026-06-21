/**
 * Skills grouped by domain cluster.
 * Audited against knowledge graph (2026-06-21).
 */
export const skillClusters = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    color: 'violet',
    skills: [
      'Deep Learning', 'PyTorch', 'TensorFlow', 'LLMs',
      'Computer Vision', 'NLP', 'Reinforcement Learning',
      'GANs', 'Diffusion Models', 'Signal Processing',
      'EEG / BCI', 'Medical AI', 'Agentic AI',
      'LangChain', 'LangGraph', 'RAG',
      'Gemini', 'MedGemma', 'HeAR',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    color: 'cyan',
    skills: ['Python', 'Dart', 'JavaScript', 'C/C++', 'MATLAB', 'SQL', 'HTML/CSS'],
  },
  {
    id: 'mobile-frontend',
    title: 'Mobile & Frontend',
    color: 'amber',
    skills: [
      'Flutter', 'React', 'React Native',
      'Framer Motion', 'Responsive Design',
      'Android', 'iOS', 'Play Store Publishing',
    ],
  },
  {
    id: 'backend-infra',
    title: 'Backend & Infrastructure',
    color: 'emerald',
    skills: [
      'FastAPI', 'Node.js', 'Supabase', 'Firebase',
      'PostgreSQL', 'SQLite', 'Vector DBs', 'REST APIs',
      'Docker', 'Linux', 'Git', 'CI/CD',
      'GitHub Actions',
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Hardware',
    color: 'rose',
    skills: [
      'GPU Programming', 'CUDA', 'OpenGL',
      'Embedded Systems', 'Arduino', 'ROS',
      'PCB Design', 'KiCAD', 'SoC',
      'Linux Kernel', 'Camera ISP',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Creative',
    color: 'cyan',
    skills: ['Obsidian', 'Blender', 'Unity', 'Figma', 'Qt', 'CMake'],
  },
];

export default skillClusters;
