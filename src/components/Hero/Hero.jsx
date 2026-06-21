import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { profile } from '../../data/profile';

/**
 * The Summoning — Hero / Title Screen.
 *
 * A dramatic, game-like title screen with a rotating rune circle portal,
 * the character's name in gold gradient, their RPG class, key stats,
 * and a "Begin Quest" CTA that scrolls to the next section.
 */

const STATS = [
  { value: '10+', label: 'Years' },
  { value: '5+', label: 'Products' },
  { value: '8', label: 'Guilds' },
];

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

export default function Hero() {
  const handleBeginQuest = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.summoning} id="hero" aria-label="Hero section">
      {/* Portal Background Effects */}
      <div className={styles.summoning__portal}>
        <motion.div
          className={styles['summoning__glow']}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.div
          className={styles['summoning__rune-circle']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span className={styles['summoning__rune-marker']} />
          <span className={styles['summoning__rune-marker']} />
          <span className={styles['summoning__rune-marker']} />
          <span className={styles['summoning__rune-marker']} />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className={styles.summoning__content}
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {/* Incantation text */}
        <motion.p className={styles.summoning__incantation} variants={fadeIn}>
          ✦ A New Challenger Appears ✦
        </motion.p>

        {/* Main Title */}
        <motion.h1 className={styles.summoning__title} variants={fadeUp}>
          <span className={styles['summoning__title-name']}>
            {profile.name}
          </span>
        </motion.h1>

        {/* Class / RPG Title */}
        <motion.p className={styles.summoning__class} variants={fadeUp}>
          <span className={styles['summoning__class-highlight']}>
            Level 99
          </span>{' '}
          AI Architect & Neuro-Artificer
        </motion.p>

        {/* Tagline */}
        <motion.p className={styles.summoning__tagline} variants={fadeUp}>
          {profile.summary}
        </motion.p>

        {/* Quick Stats */}
        <motion.div className={styles.summoning__stats} variants={fadeUp}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.summoning__stat}>
              <div className={styles['summoning__stat-value']}>{stat.value}</div>
              <div className={styles['summoning__stat-label']}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <button
            className={`rpg-btn rpg-btn--primary ${styles.summoning__cta}`}
            onClick={handleBeginQuest}
            aria-label="Scroll to about section"
          >
            Begin Quest
            <span className={styles['summoning__cta-arrow']}>⬇</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles['summoning__scroll-hint']}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className={styles['summoning__scroll-rune']}>⟡</span>
        Scroll to explore
      </motion.div>
    </section>
  );
}
