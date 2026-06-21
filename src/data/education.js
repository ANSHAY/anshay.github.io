/**
 * Education, certifications, and academic achievements.
 *
 * Data verified against knowledge graph (2026-06-21).
 * IIT Delhi: M.Tech Computer Technology, 2015-2017
 * IIT Mandi: B.Tech Electrical Engineering, 2009-2013
 */
export const degrees = [
  {
    id: 'iitd',
    institution: 'Indian Institute of Technology, Delhi',
    degree: 'M.Tech - Computer Technology',
    specialization: null,
    period: '2015 - 2017',
    dissertation: 'Thermal Video Stabilization',
    projects: ['Brain-Computer Interface using EEG Motor Imagery'],
    gpa: null,
  },
  {
    id: 'iitm',
    institution: 'Indian Institute of Technology, Mandi',
    degree: 'B.Tech - Electrical Engineering',
    specialization: null,
    period: '2009 - 2013',
    thesis: 'Automobile Collision Prevention',
    achievements: [
      'Founded the Robotics Section of IIT Mandi',
      'Built the first robot of IIT Mandi',
    ],
    gpa: null,
  },
];

export const certifications = [
  {
    title: 'Google Gen AI Intensive Course',
    issuer: 'Google',
    credentialUrl: null,
  },
  {
    title: 'Entrepreneurship Specialization',
    issuer: 'The Wharton School',
    year: '2021-2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/certificate/9TYT6SL4Q6L3',
  },
  {
    title: 'Introduction to Self-Driving Cars',
    issuer: 'University of Toronto (Coursera)',
    year: '2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/ZY82R5BB8BM5',
  },
  {
    title: 'Modern Robotics',
    issuer: 'Northwestern University (Coursera)',
    year: '2020-2022',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/RN54ETE4E7PP',
  },
  {
    title: 'TensorFlow in Practice Specialization',
    issuer: 'DeepLearning.AI',
    year: '2019-2020',
    credentialUrl:
      'https://www.coursera.org/verify/specialization/YSJBPBYKH8ZD',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2018-2019',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/3Z3VEG5TTVQN',
  },
  {
    title: 'Synapses, Neurons and Brains',
    issuer: 'Hebrew University (Coursera)',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/C3SHTSX5WLJA',
  },
  {
    title: 'Introduction to Neurohacking In R',
    issuer: 'Johns Hopkins (Coursera)',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/TD5UWPN4BM93',
  },
  {
    title: 'The Brain and Space',
    issuer: 'Duke University (Coursera)',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/F8E82HQG656F',
  },
  {
    title: 'Fundamental Neuroscience for Neuroimaging',
    issuer: 'Johns Hopkins (Coursera)',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/47JS8JZK522H',
  },
];

/**
 * Academic achievements - verified against knowledge graph.
 *
 * GATE: AIR 423, 99.9% / 99.998 percentile in ECE
 * JEE: Rank 3547, Top 1% of ~400K students
 * GRE: 321/340, 170/170 Quantitative (perfect)
 * XII Board: Top 0.1%, Maths 100%, Computer 99%
 */
export const achievements = [
  {
    label: 'GATE',
    detail: 'AIR 423 - 99.998 percentile in ECE',
  },
  {
    label: 'IIT JEE',
    detail: 'Rank 3547 - Top 1% of 400,000+ students',
  },
  {
    label: 'GRE',
    detail: '321/340 - 170/170 Quantitative (perfect score)',
  },
  {
    label: 'XII Board (AISSCE)',
    detail: 'Top 0.1% - Mathematics 100%, Computer Science 99%',
  },
  {
    label: 'Merit Cum Means Scholarship',
    detail: 'Government of India merit scholarship recipient',
  },
];

export default { degrees, certifications, achievements };
