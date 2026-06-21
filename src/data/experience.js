/**
 * Career timeline data in reverse chronological order.
 *
 * Verified against knowledge graph (2026-06-21).
 * Timeline has been completely rewritten to fix massive inaccuracies
 * in the previous version (wrong roles, wrong dates, wrong tech stacks).
 */
export const experience = [
  {
    id: 'stealth',
    company: 'Stealth AI Venture',
    role: 'Lead AI Systems Architect',
    period: 'Oct 2025 - Jan 2026',
    type: 'startup',
    highlights: [
      'Architected sub-500ms Voice-to-Action pipeline for real-time AI agent system',
      'Designed fault-tolerant state machine for multi-turn voice conversations',
      'Built containerized microservices achieving 99.9% uptime',
    ],
    tech: ['Python', 'Gemini 1.5 Flash', 'faster-whisper', 'edge-tts', 'WebSocket', 'Docker'],
  },
  {
    id: 'schoolbook',
    company: 'SchoolBook.AI',
    role: 'Co-Founder & Lead AI Architect',
    period: 'Jun 2025 - Sep 2025',
    type: 'founder',
    highlights: [
      'Co-founded AI-first education platform for NCERT curriculum',
      'Built multimodal RAG pipeline with LangGraph autonomous agents',
      'Architected full-stack GenAI deployment with vector database integration',
    ],
    tech: ['Python', 'LangGraph', 'Gemini Pro', 'Vector DBs', 'LangChain'],
  },
  {
    id: 'qualcomm',
    company: 'Qualcomm',
    role: 'Senior Lead Software Engineer',
    period: 'Apr 2023 - Mar 2025',
    type: 'corporate',
    highlights: [
      'Achieved 96% GPU latency reduction (35ms to 1.3ms) on camera processing pipeline',
      'Developed HDR flows for Premium Tier Snapdragon chipsets',
      'Led AI/ML integration initiatives for mobile imaging stack',
    ],
    tech: ['C++', 'Python', 'GPU Programming', 'Android', 'Camera ISP'],
  },
  {
    id: 'calpion',
    company: 'Calpion',
    role: 'Lead Software Engineer',
    period: 'Sep 2022 - Apr 2023',
    type: 'corporate',
    highlights: [
      'Built CT scan artery segmentation pipeline for medical imaging',
      'Developed protein mutation CNN models for biotech clients',
      'Achieved 30-50% speedup in AWS ML pipeline processing',
    ],
    tech: ['C++', 'Python', 'Medical Imaging', 'CNN', 'AWS'],
  },
  {
    id: 'greyscale',
    company: 'GreyscaleAI',
    role: 'Software Engineer',
    period: 'Feb 2021 - Mar 2023',
    type: 'corporate',
    highlights: [
      'Built multi-modal X-Ray + RGB inspection system for Nestle',
      'Led team of 8 engineers, shipping 50+ features per week',
      'Designed embedded UI and microcontroller-to-software interface',
    ],
    tech: ['C++', 'Python', 'OpenCV', 'Embedded Systems', 'Qt', 'React'],
  },
  {
    id: 'canairy',
    company: 'Canairy (High Alpha)',
    role: 'Consultant',
    period: 'Nov 2021 - Jan 2022',
    type: 'contract',
    highlights: [
      'Built cattle segmentation FPN model achieving 0.96 IOU accuracy',
      'Integrated LIDAR depth sensing with visual recognition pipeline',
      'Designed ROS communication channels for autonomous systems',
    ],
    tech: ['Python', 'OpenCV', 'ROS', 'FPN', 'LIDAR'],
  },
  {
    id: 'xernai',
    company: 'Xern AI',
    role: 'Founder',
    period: 'Aug 2018 - Present',
    type: 'founder',
    highlights: [
      'Founded AI product studio building across healthcare, neuroscience, and consumer tech',
      'Shipped 5+ apps to production: Vitalis (health screening), Praan (spiritual app), PipeMaster',
      'Pioneered BCI research, Autodub (video dubbing with lip sync), and multi-modal AI products',
    ],
    tech: ['Flutter', 'Python', 'Gemini', 'LangGraph', 'FastAPI', 'Supabase'],
  },
  {
    id: 'nvidia',
    company: 'Nvidia',
    role: 'System Software Engineer',
    period: 'Aug 2017 - Jul 2018',
    type: 'corporate',
    highlights: [
      'Worked on Tegra Camera imaging stack for autonomous and mobile platforms',
      'Implemented lens shading correction and Bayer demosaicing algorithms',
      'Contributed to camera driver architecture and ISP pipeline optimization',
    ],
    tech: ['C++', 'Python', 'Camera ISP', 'Tegra', 'Linux Kernel'],
  },
  {
    id: 'drdo',
    company: 'DRDO',
    role: 'Scientist',
    period: 'Aug 2013 - Jul 2015',
    type: 'government',
    highlights: [
      'Developed night vision thermal cameras with 40km range detection capability',
      'Implemented lens shading correction algorithms for defense imaging systems',
      'Built Raspberry Pi-based controller for thermal camera calibration',
    ],
    tech: ['C++', 'MATLAB', 'OpenCV', 'Raspberry Pi', 'Thermal Imaging'],
  },
  {
    id: 'ndpl',
    company: 'NDPL (North Delhi Power Limited)',
    role: 'Intern',
    period: 'May 2011 - Jul 2011',
    type: 'internship',
    highlights: [
      'Gained hands-on experience with grid operations and power distribution',
      'Worked with SCADA systems for industrial monitoring and control',
    ],
    tech: ['SCADA', 'Power Systems'],
  },
];

export default experience;
