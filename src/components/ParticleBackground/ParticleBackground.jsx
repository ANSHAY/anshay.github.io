import { useMemo } from 'react';
import styles from './ParticleBackground.module.css';

/**
 * CSS-only particle constellation background.
 * Lightweight — no canvas or heavy JS library.
 */
export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 25}s`,
        delay: `${Math.random() * 15}s`,
        size: Math.random() > 0.7 ? 3 : 2,
      })),
    []
  );

  return (
    <>
      <div className={styles.particles} aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
      <div className={`${styles['glow-orb']} ${styles['glow-orb--violet']}`} aria-hidden="true" />
      <div className={`${styles['glow-orb']} ${styles['glow-orb--cyan']}`} aria-hidden="true" />
    </>
  );
}
