import styles from './Grimoire.module.css';
import RPGPanel from '../common/RPGPanel';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { skillClusters } from '../../data/skills';

/**
 * Magic Grimoire (Skills) — Spellbook.
 *
 * Each skill cluster is a "Spell School" with colored accents.
 * Individual skills are "spell tags" that glow on hover.
 */

const SCHOOL_ICONS = {
  'ai-ml': '🔮',
  'languages': '📜',
  'mobile-frontend': '📱',
  'backend-infra': '⚙',
  'systems': '🔧',
  'tools': '🎨',
};

const COLOR_MAP = {
  violet: 'violet',
  cyan: 'cyan',
  amber: 'amber',
  emerald: 'emerald',
  rose: 'rose',
};

export default function Grimoire() {
  return (
    <section
      className={`section ${styles.grimoire}`}
      id="skills"
      aria-label="Skills section"
    >
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="📖"
            label="Chapter IV"
            title="The Magic Grimoire"
            subtitle="Spells mastered across the schools of arcane knowledge"
            runeSymbol="⟡"
          />
        </ScrollReveal>

        <div className={styles.grimoire__grid}>
          {skillClusters.map((cluster, i) => (
            <ScrollReveal key={cluster.id} delay={i * 0.08}>
              <RPGPanel
                className={`${styles['spell-school']} ${
                  styles[`spell-school--${COLOR_MAP[cluster.color] || 'amber'}`] || ''
                }`}
              >
                <div className={styles['spell-school__header']}>
                  <div className={styles['spell-school__icon']}>
                    {SCHOOL_ICONS[cluster.id] || '✦'}
                  </div>
                  <h3 className={styles['spell-school__title']}>
                    {cluster.title}
                  </h3>
                  <span className={styles['spell-school__count']}>
                    {cluster.skills.length}
                  </span>
                </div>

                <div className={styles['spell-school__spells']}>
                  {cluster.skills.map((skill) => (
                    <span key={skill} className={styles['spell-tag']}>
                      {skill}
                    </span>
                  ))}
                </div>
              </RPGPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
