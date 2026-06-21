import { useEffect, useRef, useCallback } from 'react';
import styles from './ParticleBackground.module.css';

/**
 * Enchanted particle background — floating magical motes, faint runes,
 * and subtle star-like sparkles. Pure canvas-based, no external deps.
 *
 * Performance: Uses requestAnimationFrame, respects reduced-motion,
 * automatically adjusts particle count based on screen size.
 */

const PARTICLE_CONFIG = {
  baseCount: 60,
  mobileCount: 25,
  colors: [
    'rgba(201, 168, 76, 0.4)',   // Gold motes
    'rgba(201, 168, 76, 0.2)',   // Dim gold
    'rgba(0, 212, 255, 0.25)',   // Mana cyan
    'rgba(139, 92, 246, 0.2)',   // Rune violet
    'rgba(255, 255, 255, 0.15)', // Star white
  ],
  minSize: 1,
  maxSize: 3,
  minSpeed: 0.1,
  maxSpeed: 0.4,
};

function createParticle(width, height) {
  const colors = PARTICLE_CONFIG.colors;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: PARTICLE_CONFIG.minSize + Math.random() * (PARTICLE_CONFIG.maxSize - PARTICLE_CONFIG.minSize),
    speedX: (Math.random() - 0.5) * PARTICLE_CONFIG.maxSpeed,
    speedY: -PARTICLE_CONFIG.minSpeed - Math.random() * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed),
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0.3 + Math.random() * 0.7,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.005 + Math.random() * 0.015,
  };
}

export default function MagicParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const count = width < 768 ? PARTICLE_CONFIG.mobileCount : PARTICLE_CONFIG.baseCount;
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(width, height)
    );
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.style.width ? parseInt(canvas.style.width) : window.innerWidth;
    const height = canvas.style.height ? parseInt(canvas.style.height) : window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    for (const p of particlesRef.current) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += p.pulseSpeed;

      // Wrap around screen edges
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentOpacity})`);
      ctx.fill();

      // Add subtle glow for larger particles
      if (p.size > 2) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentOpacity * 0.15})`);
        ctx.fill();
      }
    }

    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    init();
    animRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [init, animate]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
