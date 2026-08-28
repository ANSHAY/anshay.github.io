import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

/**
 * RPG-themed navigation bar.
 *
 * Features:
 *  - Cinzel Decorative brand mark
 *  - MedievalSharp section links with RPG names
 *  - Glass backdrop effect on scroll
 *  - Mobile hamburger menu with animated drawer
 */

const NAV_ITEMS = [
  { id: 'about', label: 'Lore' },
  { id: 'projects', label: 'Quests' },
  { id: 'experience', label: 'Log' },
  { id: 'skills', label: 'Grimoire' },
  { id: 'education', label: 'Academies' },
  { id: 'testimonials', label: 'Bards' },
  { id: 'contact', label: 'Tavern' },
];

const XERN_AI_URL = 'https://xernai.lovable.app/';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles['nav--scrolled'] : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.nav__inner}>
        <a
          href="#hero"
          className={styles.nav__brand}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          ✦ Anshay
        </a>

        {/* Desktop Links */}
        <div className={styles.nav__links}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={styles.nav__link}
              onClick={() => scrollTo(item.id)}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={styles.nav__actions}>
          <a
            className={styles.nav__studio}
            href={XERN_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Xern AI, opens in a new tab"
          >
            <img
              className={styles['nav__studio-mark']}
              src="/images/xernai-mark.png"
              alt=""
              width="24"
              height="24"
            />
            <span className={styles['nav__studio-label']}>Xern AI</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className={styles.nav__toggle}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className={styles.nav__drawer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={styles.nav__link}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
