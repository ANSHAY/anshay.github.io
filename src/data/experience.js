/**
 * Career timeline data in reverse chronological order.
 */
export const experience = [
  {
    id: 'xernai',
    company: 'Xern AI',
    role: 'Founder & CEO',
    period: 'Nov 2024 – Present',
    type: 'founder',
    highlights: [
      'Founded AI product studio building across healthcare, consumer apps, and AI agent platforms',
      'Shipped 5+ apps to production including Vitalis (health screening), Praan (spiritual companion), and PipeMaster',
      'Architected multi-modal AI pipelines using MedGemma, HeAR, Gemini 2.5, and LangGraph',
    ],
    tech: ['Flutter', 'Python', 'Gemini', 'LangGraph', 'FastAPI', 'Supabase'],
  },
  {
    id: 'stealth',
    company: 'Stealth AI Startup',
    role: 'Founding AI Engineer',
    period: '2024',
    type: 'startup',
    highlights: [
      'Early-stage AI startup building real-time voice agent systems',
      'Designed speech-to-speech pipeline with <2s latency',
    ],
    tech: ['Python', 'LLMs', 'Voice AI', 'WebRTC'],
  },
  {
    id: 'greyscale',
    company: 'Greyscale AI',
    role: 'Full-Stack Engineer',
    period: '2022 – 2023',
    type: 'corporate',
    highlights: [
      'Led UI/UX development for IoT device management platform',
      'Bridged hardware-software integration for microcontroller interfaces',
      'Received 4 LinkedIn recommendations from team leads and principal engineers',
    ],
    tech: ['React', 'Node.js', 'IoT', 'Microcontrollers', 'Full-Stack'],
  },
  {
    id: 'nvidia',
    company: 'Nvidia',
    role: 'System Software Engineer',
    period: '2020 – 2022',
    type: 'corporate',
    highlights: [
      'Worked on GPU driver development and system software',
      'Contributed to display and graphics pipeline optimization',
      'Deep experience with GPU architecture and low-level systems programming',
    ],
    tech: ['C/C++', 'CUDA', 'GPU Drivers', 'Linux Kernel', 'OpenGL'],
  },
  {
    id: 'qualcomm',
    company: 'Qualcomm',
    role: 'Engineer',
    period: '2018 – 2020',
    type: 'corporate',
    highlights: [
      'Embedded systems and SoC software development',
      'Worked on mobile platform optimization and signal processing',
    ],
    tech: ['C/C++', 'Embedded Systems', 'SoC', 'Signal Processing'],
  },
  {
    id: 'iitd-research',
    company: 'IIT Delhi',
    role: 'M.Tech Research (BCI)',
    period: '2016 – 2018',
    type: 'academic',
    highlights: [
      'Brain-Computer Interface research using EEG motor imagery classification',
      'Designed EEG experiment paradigms, recruited subjects, and built real-time classification pipeline',
      'Thermal video stabilization research for DRDO collaboration',
    ],
    tech: ['MATLAB', 'EEGLAB', 'Python', 'Signal Processing', 'OpenCV'],
  },
  {
    id: 'drdo',
    company: 'DRDO',
    role: 'Research Intern',
    period: '2017',
    type: 'government',
    highlights: [
      'Thermal video stabilization using Harris Corner detector and Lucas-Kanade method',
      'Defence research lab internship contributing to imaging systems',
    ],
    tech: ['MATLAB', 'OpenCV', 'Image Processing'],
  },
  {
    id: 'iitm',
    company: 'IIT Mandi',
    role: 'B.Tech (ECE)',
    period: '2012 – 2016',
    type: 'academic',
    highlights: [
      'Electronics & Communication Engineering with focus on signal processing and embedded systems',
      'TI MCU Design Contest participant — built alcohol detector ignition control system',
      'Automatic collision prevention system as capstone project',
    ],
    tech: ['C/C++', 'MATLAB', 'Arduino', 'Embedded Systems', 'PCB Design'],
  },
];

export default experience;
