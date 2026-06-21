import { motion, useScroll, useSpring } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

/**
 * Root application component.
 * Single-page layout with scroll-driven sections and a top progress bar.
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
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
          transformOrigin: '0%',
          zIndex: 200,
        }}
      />

      <ParticleBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <ProjectGrid />
        <Timeline />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
