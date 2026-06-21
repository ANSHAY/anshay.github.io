import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { experience } from '../../data/experience';
import styles from './Timeline.module.css';

const nodeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

function getDotClass(type) {
  const map = {
    founder: styles['node__dot--founder'],
    academic: styles['node__dot--academic'],
    government: styles['node__dot--government'],
  };
  return map[type] || '';
}

export default function Timeline() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <SectionHeader
          label="Career"
          title="Experience Timeline"
          subtitle="From IIT labs to GPU kernels to founding an AI company."
        />

        <div className={styles.timeline}>
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              className={styles.node}
              custom={i}
              variants={nodeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className={`${styles.node__dot} ${getDotClass(entry.type)}`} />
              <div className={styles.node__card}>
                <p className={styles.card__period}>{entry.period}</p>
                <h3 className={styles.card__company}>{entry.company}</h3>
                <p className={styles.card__role}>{entry.role}</p>
                <div className={styles.card__highlights}>
                  {entry.highlights.map((h, idx) => (
                    <p key={idx} className={styles.card__highlight}>{h}</p>
                  ))}
                </div>
                <div className={styles.card__tech}>
                  {entry.tech.map((t) => (
                    <span key={t} className={styles['card__tech-tag']}>{t}</span>
                  ))}
                </div>
              </div>
              <span className={styles.node__spacer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
