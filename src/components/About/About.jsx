import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';
import RPGPanel from '../common/RPGPanel';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { profile, socials } from '../../data/profile';

/**
 * Character Lore (About) — RPG Status Menu.
 *
 * Two-column layout:
 *   Left: Character sheet with avatar, identity, and lore text.
 *   Right: Attribute stats panel with animated stat bars.
 */

const STAT_COLORS = {
  INT: 'gold',
  WIS: 'cyan',
  DEX: 'green',
  STR: 'red',
  CHA: 'violet',
  CON: 'gold',
};

function StatBar({ stat, value, detail, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className={styles['lore__stat-row']} ref={ref}>
      <span className={styles['lore__stat-label']}>{stat}</span>
      <div className={styles['lore__stat-bar-wrap']}>
        <div className={`stat-bar stat-bar--${color}`}>
          <motion.div
            className="stat-bar__fill"
            initial={{ width: 0 }}
            animate={inView ? { width: `${value}%` } : {}}
            transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
        <div className={styles['lore__stat-detail']}>{detail}</div>
      </div>
      <span className={styles['lore__stat-value']}>{value}</span>
    </div>
  );
}

export default function About() {
  const statEntries = Object.entries(profile.stats);

  return (
    <section className={`section ${styles.lore}`} id="about" aria-label="About section">
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="📜"
            label="Chapter I"
            title="Character Lore"
            subtitle="The tale of a wanderer through the realms of intelligence"
          />
        </ScrollReveal>

        <div className={styles.lore__grid}>
          {/* Left: Character Sheet */}
          <ScrollReveal delay={0.1} direction="left">
            <RPGPanel ornate className={styles.lore__sheet}>
              <div className={styles['lore__sheet-header']}>
                <div className={styles.lore__avatar}>🧙</div>
                <div className={styles.lore__identity}>
                  <div className={styles.lore__name}>{profile.name}</div>
                  <div className={styles.lore__class}>{profile.rpgTitle}</div>
                </div>
                <span className={styles.lore__level}>Lv. 99</span>
              </div>

              <p className={styles.lore__text}>{profile.rpgLore}</p>

              <div className={styles.lore__socials}>
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    className={styles['lore__social-link']}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${s.label}`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </RPGPanel>
          </ScrollReveal>

          {/* Right: Stats Panel */}
          <ScrollReveal delay={0.2} direction="right">
            <RPGPanel ornate className={styles['lore__stats-panel']}>
              <h3 className={styles['lore__stats-title']}>⚔ Attributes ⚔</h3>

              {statEntries.map(([key, stat], i) => (
                <StatBar
                  key={key}
                  stat={key}
                  value={stat.value}
                  detail={stat.detail}
                  color={STAT_COLORS[key] || 'gold'}
                  delay={i * 0.1}
                />
              ))}

              <div className={styles.lore__mbti}>
                <span className={styles['lore__mbti-badge']}>{profile.mbti.split(' ')[0]}</span>
                <span className={styles['lore__mbti-text']}>
                  {profile.mbti.match(/\(.*\)/)?.[0]}
                </span>
              </div>
            </RPGPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
