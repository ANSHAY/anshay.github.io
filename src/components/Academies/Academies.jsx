import styles from './Academies.module.css';
import RPGPanel from '../common/RPGPanel';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { degrees, certifications, achievements } from '../../data/education';

/**
 * Arcane Academies & Trials (Education).
 *
 * Layout:
 *   - Top: Two academy cards (IIT Delhi, IIT Mandi) with crest icons
 *   - Right: Trials panel (achievements — GATE, JEE, GRE, XII Board)
 *   - Bottom: Certifications grid (scrolls of mastery)
 */

const TRIAL_ICONS = {
  GATE: '🏛',
  'IIT JEE': '⚡',
  GRE: '🌐',
  'XII Board (AISSCE)': '📜',
  'Merit Cum Means Scholarship': '🏅',
};

const ACADEMY_CRESTS = {
  iitd: '🏛',
  iitm: '⛰',
};

export default function Academies() {
  return (
    <section
      className={`section ${styles.academies}`}
      id="education"
      aria-label="Education section"
    >
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="🎓"
            label="Chapter V"
            title="Arcane Academies & Trials"
            subtitle="The hallowed halls where the arcane arts were first learned"
            runeSymbol="❖"
          />
        </ScrollReveal>

        <div className={styles.academies__layout}>
          {/* Left: Academy Cards */}
          <div>
            {degrees.map((deg, i) => (
              <ScrollReveal key={deg.id} delay={i * 0.1}>
                <RPGPanel
                  ornate
                  className={styles['academy-card']}
                  style={{ marginBottom: 'var(--space-lg)' }}
                >
                  <div className={styles['academy-card__banner']}>
                    <div className={styles['academy-card__crest']}>
                      {ACADEMY_CRESTS[deg.id] || '🏛'}
                    </div>
                    <div className={styles['academy-card__info']}>
                      <h3 className={styles['academy-card__name']}>
                        {deg.institution}
                      </h3>
                      <p className={styles['academy-card__degree']}>
                        {deg.degree}
                      </p>
                    </div>
                    <span className={styles['academy-card__period']}>
                      {deg.period}
                    </span>
                  </div>

                  {/* Thesis/Dissertation */}
                  {deg.dissertation && (
                    <div className={styles['academy-card__thesis']}>
                      <span className={styles['academy-card__thesis-label']}>
                        Dissertation
                      </span>
                      {deg.dissertation}
                    </div>
                  )}
                  {deg.thesis && (
                    <div className={styles['academy-card__thesis']}>
                      <span className={styles['academy-card__thesis-label']}>
                        Thesis
                      </span>
                      {deg.thesis}
                    </div>
                  )}

                  {/* Projects */}
                  {deg.projects && (
                    <div className={styles['academy-card__achievements']}>
                      {deg.projects.map((p, j) => (
                        <p key={j} className={styles['academy-card__achievement']}>
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Achievements */}
                  {deg.achievements && (
                    <div className={styles['academy-card__achievements']}>
                      {deg.achievements.map((a, j) => (
                        <p key={j} className={styles['academy-card__achievement']}>
                          {a}
                        </p>
                      ))}
                    </div>
                  )}
                </RPGPanel>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Trials (Achievements) */}
          <ScrollReveal delay={0.2} direction="right">
            <RPGPanel ornate className={styles.trials}>
              <h3 className={styles.trials__title}>⚔ Trials Conquered ⚔</h3>
              <div className={styles.trials__list}>
                {achievements.map((ach) => (
                  <div key={ach.label} className={styles['trial-item']}>
                    <div className={styles['trial-item__icon']}>
                      {TRIAL_ICONS[ach.label] || '✦'}
                    </div>
                    <div className={styles['trial-item__content']}>
                      <div className={styles['trial-item__label']}>
                        {ach.label}
                      </div>
                      <div className={styles['trial-item__detail']}>
                        {ach.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RPGPanel>
          </ScrollReveal>
        </div>

        {/* Certifications Grid */}
        <ScrollReveal delay={0.1}>
          <div className={styles.certifications}>
            <h3 className={styles.certifications__title}>
              Scrolls of Mastery
            </h3>
            <div className={styles['certs-grid']}>
              {certifications.map((cert) => (
                <RPGPanel
                  key={cert.title}
                  className={styles['cert-card']}
                >
                  <div className={styles['cert-card__title']}>
                    {cert.title}
                  </div>
                  <div className={styles['cert-card__issuer']}>
                    {cert.issuer}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      className={styles['cert-card__link']}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify credential →
                    </a>
                  )}
                </RPGPanel>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
