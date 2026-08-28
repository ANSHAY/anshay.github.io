import styles from './AdventurersLog.module.css';
import RPGPanel from '../common/RPGPanel';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { experience } from '../../data/experience';

/**
 * The Adventurer's Log (Experience Timeline).
 *
 * Vertical timeline with type-colored nodes, guild cards,
 * and scroll-revealed entries in reverse-chronological order.
 */

export default function AdventurersLog() {
  return (
    <section
      className={`section ${styles.log}`}
      id="experience"
      aria-label="Experience section"
    >
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="🗺"
            label="Chapter III"
            title="The Adventurer's Log"
            subtitle="Guilds served, quests completed, and wisdom gained"
            runeSymbol="◇"
          />
        </ScrollReveal>

        <div className={styles.log__timeline}>
          {experience.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.08}>
              <div className={styles.log__entry}>
                {/* Timeline Node */}
                <div
                  className={`${styles.log__node} ${
                    styles[`log__node--${exp.type}`] || ''
                  }`}
                />

                {/* Entry Card */}
                <RPGPanel className={styles.log__card}>
                  <div className={styles['log__card-header']}>
                    {exp.logo && (
                      <img
                        className={styles.log__logo}
                        src={exp.logo}
                        alt=""
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <h3 className={styles['log__guild-name']}>
                        {exp.company}
                      </h3>
                      <p className={styles.log__role}>{exp.role}</p>
                    </div>
                    <span className={styles.log__period}>{exp.period}</span>
                  </div>

                  <div className={styles.log__highlights}>
                    {exp.highlights.map((h, j) => (
                      <p key={j} className={styles.log__highlight}>
                        {h}
                      </p>
                    ))}
                  </div>

                  <div className={styles.log__tech}>
                    {exp.tech.map((t) => (
                      <span key={t} className={styles['log__tech-tag']}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.site && (
                    <a
                      className={styles.log__site}
                      href={exp.site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${exp.company} website`}
                    >
                      {exp.site.label} →
                    </a>
                  )}
                </RPGPanel>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
