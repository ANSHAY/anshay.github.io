import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projects, categoryLabels } from '../../data/projects';
import styles from './ProjectGrid.module.css';

const categories = Object.keys(categoryLabels);

export default function ProjectGrid() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? projects.filter((p) => p.priority > 1)
    : projects.filter((p) => p.category === active);

  const handleFilter = useCallback((cat) => setActive(cat), []);

  return (
    <section className="section">
      <div className="section__inner">
        <SectionHeader
          label="All Work"
          title="Project Portfolio"
          subtitle="Everything I've built — filtered by domain."
        />

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles['filter-btn']} ${
                active === cat ? styles['filter-btn--active'] : ''
              }`}
              onClick={() => handleFilter(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.card__header}>
                  <h3 className={styles.card__title}>{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card__link}
                    >
                      View <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <p className={styles.card__subtitle}>{project.subtitle}</p>
                <p className={styles.card__desc}>{project.description}</p>
                <div className={styles.card__footer}>
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className={styles.card__tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
