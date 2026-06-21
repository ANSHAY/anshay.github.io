import styles from './Tavern.module.css';
import RPGPanel from '../common/RPGPanel';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { contact } from '../../data/profile';

/**
 * Join the Party (Contact) — Tavern Notice Board.
 *
 * Centered notice board with contact links, resume downloads,
 * and a closing flourish. No phone number exposed.
 */

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Send a Raven',
    url: `mailto:${contact.email}`,
    icon: '📧',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Guild',
    url: contact.linkedin,
    icon: '🔗',
  },
  {
    id: 'github',
    label: 'GitHub Forge',
    url: contact.github,
    icon: '⚙',
  },
];

export default function Tavern() {
  return (
    <section
      className={`section ${styles.tavern}`}
      id="contact"
      aria-label="Contact section"
    >
      <div className="section__inner">
        <ScrollReveal>
          <SectionHeader
            icon="🍺"
            label="Chapter VII"
            title="Join the Party"
            subtitle="Seeking allies for the next great quest"
            runeSymbol="✧"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <RPGPanel ornate className={styles.tavern__board}>
            <p className={styles.tavern__notice}>
              The Grand Magus is always seeking{' '}
              <span className={styles['tavern__notice-highlight']}>
                worthy allies
              </span>{' '}
              for collaborative quests in AI, neuroscience, and product
              engineering. Whether you seek to forge new artifacts, explore
              uncharted research domains, or build the next legendary product
              — the guild doors are open.
            </p>

            {/* Contact Links */}
            <div className={styles.tavern__links}>
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className={styles.tavern__link}
                  target={link.id === 'email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <span className={styles['tavern__link-icon']}>
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Resume Downloads */}
            <div className={styles.tavern__downloads}>
              <a
                href="/assets/download/Resume_Anshay.pdf"
                className="rpg-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📜 Resume Scroll
              </a>
              <a
                href="/assets/download/CV_Anshay.pdf"
                className="rpg-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📋 Full Chronicle (CV)
              </a>
            </div>

            {/* Closing Rune */}
            <p className={styles.tavern__rune}>
              ✦ May your code compile on the first try ✦
            </p>
          </RPGPanel>
        </ScrollReveal>

        {/* Footer */}
        <div className={styles.tavern__footer}>
          <p className={styles['tavern__footer-text']}>
            Crafted with arcane precision by{' '}
            <span className={styles['tavern__footer-name']}>Anshay Agarwal</span>
            {' '}· {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
