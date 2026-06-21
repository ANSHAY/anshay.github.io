/**
 * Profile and contact information.
 * Verified against knowledge graph (2026-06-21).
 *
 * NO photo (avatar/lore approach).
 * NO phone number.
 * NO LeetCode link.
 */
export const profile = {
  name: 'Anshay Agarwal',
  title: 'AI R&D Engineer | Founder',
  rpgTitle: 'Grand Magus of the Arcane Sciences',
  rpgClass: 'Level 99 AI Architect & Neuro-Artificer',
  tagline: 'Founding AI Engineer',
  mbti: 'INTJ-T (The Architect)',

  summary:
    '10+ years of experience specializing in zero-to-one product builds, rapid prototyping, and architecting autonomous agentic workflows (LangGraph/LLMs). Passionate about taking complex problems and building end-to-end AI products.',

  rpgLore:
    'A wanderer who emerged from the ancient halls of the Twin Towers of Knowledge (IIT Delhi & IIT Mandi), trained in the arcane arts of Neural Sorcery, Neuro-Alchemy, and Machine Conjuration. Having served in the Royal Defense Forge (DRDO), the Green Lightning Guild (Nvidia), and the Silicon Citadel (Qualcomm), the Grand Magus now commands Xern AI — a guild of artificers crafting legendary artifacts across healthcare, neuroscience, and consumer realms.',

  stats: {
    INT: { value: 99, label: 'Intelligence', detail: 'AI/ML, Deep Learning, LLMs' },
    WIS: { value: 95, label: 'Wisdom', detail: 'Architecture, System Design' },
    DEX: { value: 92, label: 'Dexterity', detail: 'Full-Stack, Rapid Prototyping' },
    STR: { value: 88, label: 'Strength', detail: 'C++, GPU, Embedded Systems' },
    CHA: { value: 85, label: 'Charisma', detail: 'Leadership, Founding Teams' },
    CON: { value: 90, label: 'Constitution', detail: '10+ years, 50+ features/week' },
  },
};

export const contact = {
  email: 'anshayagr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anshayagarwal',
  github: 'https://github.com/anshay',
};

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', url: contact.linkedin },
  { id: 'github', label: 'GitHub', url: contact.github },
  { id: 'email', label: 'Email', url: `mailto:${contact.email}` },
];

export default { profile, contact, socials };
