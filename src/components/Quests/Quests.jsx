import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Quests.module.css';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { projects, categoryLabels } from '../../data/projects';

/**
 * Epic Quests (Projects) — Quest Board.
 *
 * Displays all projects as quest cards with rarity colors,
 * filterable by category. Cards have enchanted hover effects
 * and rarity-specific border glows.
 */

const RARITY_LABELS = {
  legendary: '★ Legendary',
  epic: '◆ Epic',
  rare: '● Rare',
  common: '○ Common',
};

function QuestCard({ project, index }) {
  const rarityClass = styles[`quest-card--${project.rarity || 'common'}`] || '';

  return (
    <motion.article
      className={`${styles['quest-card']} ${rarityClass}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Header */}
      <div className={styles['quest-card__header']}>
        <div>
          <h3 className={styles['quest-card__title']}>{project.title}</h3>
          <p className={styles['quest-card__subtitle']}>{project.subtitle}</p>
        </div>
        <span className={`rarity-badge rarity-badge--${project.rarity || 'common'}`}>
          {RARITY_LABELS[project.rarity] || 'Common'}
        </span>
      </div>

      {/* Description */}
      <p className={styles['quest-card__desc']}>{project.description}</p>

      {/* Metrics */}
      {project.metrics && (
        <p className={styles['quest-card__metrics']}>{project.metrics}</p>
      )}

      {/* Tech Stack */}
      <div className={styles['quest-card__stack']}>
        {project.stack.map((tech) => (
          <span key={tech} className={styles['quest-card__tag']}>
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className={styles['quest-card__footer']}>
        <span className={styles['quest-card__guild']}>{project.company}</span>
        {project.link && (
          <a
            href={project.link}
            className={styles['quest-card__link']}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
          >
            View Quest →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Quests() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = Object.keys(categoryLabels);

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className={`section ${styles.quests}`} id="projects" aria-label="Projects section">
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="⚔"
            label="Chapter II"
            title="Epic Quests & Crafted Artifacts"
            subtitle="A chronicle of battles fought and treasures forged"
            runeSymbol="✦"
          />
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div className={styles.quests__filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles['quests__filter-btn']} ${
                  activeCategory === cat ? styles['quests__filter-btn--active'] : ''
                }`}
                onClick={() => setActiveCategory(cat)}
                aria-label={`Filter by ${categoryLabels[cat]}`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Quest Grid */}
        <motion.div className={styles.quests__grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <QuestCard key={project.id} project={project} index={i} />
              ))
            ) : (
              <motion.p
                className={styles.quests__empty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No quests found in this realm...
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
