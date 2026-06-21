import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-spy */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles['nav--scrolled'] : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.nav__inner}>
          <a href="#hero" className={styles.nav__logo}>
            Anshay Agarwal
          </a>

          <div className={styles.nav__links}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.nav__link} ${
                  activeSection === item.href.slice(1) ? styles['nav__link--active'] : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/assets/download/Resume_Anshay.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.nav__cta}
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            className={`${styles.nav__hamburger} ${
              drawerOpen ? styles['nav__hamburger--open'] : ''
            }`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={drawerOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.nav__drawer} ${
          drawerOpen ? styles['nav__drawer--open'] : ''
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.nav__link}
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
        <a
          href="/assets/download/Resume_Anshay.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.nav__cta}
          onClick={handleLinkClick}
        >
          <Download size={16} />
          Resume
        </a>
      </div>
    </>
  );
}
