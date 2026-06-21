import { motion, useScroll, useSpring } from 'framer-motion';
import MagicParticles from './components/ParticleBackground/ParticleBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Quests from './components/Quests/Quests';
import AdventurersLog from './components/AdventurersLog/AdventurersLog';
import Grimoire from './components/Grimoire/Grimoire';
import Academies from './components/Academies/Academies';
import BardsTales from './components/BardsTales/BardsTales';
import Tavern from './components/Tavern/Tavern';

/**
 * Root application component — Isekai Fantasy RPG Portfolio.
 *
 * Single-page layout with scroll-driven sections, magical particle
 * background, and a gold-themed progress bar at the top.
 */
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll progress bar — gold gradient */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #c9a84c, #ffd700, #c9a84c)',
          transformOrigin: '0%',
          zIndex: 200,
        }}
      />

      <MagicParticles />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Quests />
        <AdventurersLog />
        <Grimoire />
        <Academies />
        <BardsTales />
        <Tavern />
      </main>
    </>
  );
}
