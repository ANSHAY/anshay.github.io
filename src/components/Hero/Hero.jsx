import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const stats = [
  { value: '10+', label: 'Years' },
  { value: '15+', label: 'Projects' },
  { value: '5', label: 'Companies' },
  { value: 'IIT', label: 'Delhi' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <motion.div
        className={styles.hero__content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.hero__greeting} variants={itemVariants}>
          {'// Hello World'}
        </motion.p>

        <motion.h1 className={styles.hero__name} variants={itemVariants}>
          Anshay Agarwal
        </motion.h1>

        <motion.p className={styles.hero__tagline} variants={itemVariants}>
          <strong>AI R&D Engineer</strong> · Founder · <strong>Xern AI</strong>
        </motion.p>

        <motion.p className={styles.hero__subtitle} variants={itemVariants}>
          Building intelligent systems at the intersection of neuroscience,
          healthcare, and consumer technology. From brain signals to production
          AI — I architect the full stack.
        </motion.p>

        <motion.div className={styles.hero__actions} variants={itemVariants}>
          <a href="#projects" className={`${styles.hero__btn} ${styles['hero__btn--primary']}`}>
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="/assets/download/Resume_Anshay.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.hero__btn} ${styles['hero__btn--secondary']}`}
          >
            <Download size={16} />
            Resume
          </a>
          <a
            href="#contact"
            className={`${styles.hero__btn} ${styles['hero__btn--secondary']}`}
          >
            <Mail size={16} />
            Contact
          </a>
        </motion.div>

        <motion.div className={styles.hero__stats} variants={itemVariants}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.hero__stat}>
              <div className={styles['hero__stat-value']}>{stat.value}</div>
              <div className={styles['hero__stat-label']}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className={styles.hero__scroll}>
        <span>Scroll</span>
        <div className={styles['hero__scroll-line']} />
      </div>
    </section>
  );
}
