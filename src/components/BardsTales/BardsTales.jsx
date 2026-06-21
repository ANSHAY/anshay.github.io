import styles from './BardsTales.module.css';
import RPGPanel from '../common/RPGPanel';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { testimonials } from '../../data/testimonials';

/**
 * Bards' Tales (Testimonials) — NPC Dialogue Boxes.
 *
 * Each testimonial is displayed as an RPG dialogue box with
 * the NPC's identity (name, role, guild) below the quote.
 */

const NPC_ICONS = ['🧙', '⚔', '🛡', '🏹', '📜', '🔮'];

export default function BardsTales() {
  return (
    <section
      className={`section ${styles.bards}`}
      id="testimonials"
      aria-label="Testimonials section"
    >
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="🎵"
            label="Chapter VI"
            title="Bards' Tales"
            subtitle="Words spoken by allies encountered along the journey"
            runeSymbol="♦"
          />
        </ScrollReveal>

        <div className={styles.bards__grid}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <RPGPanel className={styles.dialogue}>
                <p className={styles.dialogue__quote}>{t.quote}</p>

                <div className={styles.dialogue__npc}>
                  <div className={styles['dialogue__npc-icon']}>
                    {NPC_ICONS[i % NPC_ICONS.length]}
                  </div>
                  <div className={styles['dialogue__npc-info']}>
                    <div className={styles['dialogue__npc-name']}>
                      {t.name}
                    </div>
                    <div className={styles['dialogue__npc-role']}>
                      {t.role}
                    </div>
                    <div className={styles['dialogue__npc-guild']}>
                      {t.company}
                    </div>
                  </div>
                  <span className={styles.dialogue__date}>{t.date}</span>
                </div>
              </RPGPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
