import { Linkedin, Github, Mail, Code2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <SectionHeader
          label="About"
          title="The Engineer Behind the Code"
          subtitle="R&D-focused engineer at the intersection of signal processing, AI, and product engineering."
        />

        <ScrollReveal>
          <div className={styles.about}>
            <div className={styles['about__photo-wrapper']}>
              <div className={styles['about__photo-glow']} />
              <img
                src="/images/pic.jpg"
                alt="Anshay Agarwal"
                className={styles.about__photo}
                loading="lazy"
                width="280"
                height="280"
              />
            </div>

            <div className={styles.about__content}>
              <p className={styles.about__text}>
                I&apos;m an <strong>AI R&D Engineer</strong> and the founder of{' '}
                <strong>Xern AI</strong>, a product studio building at the bleeding edge of
                artificial intelligence. With an <strong>M.Tech from IIT Delhi</strong> and a
                career spanning <strong>Nvidia, Qualcomm, and DRDO</strong>, I&apos;ve worked
                across the entire technology stack — from GPU kernel code to production
                Flutter apps.
              </p>

              <p className={styles.about__text}>
                My deepest passion lies in <strong>brain-computer interfaces</strong> and{' '}
                <strong>healthcare AI</strong>. I&apos;ve built systems that reconstruct
                visual imagery from EEG signals, discover drug candidates from venoms, and
                screen patients using multi-modal AI models — all shipped as real products.
              </p>

              <p className={styles.about__text}>
                I&apos;m what you&apos;d call an <strong>expert generalist</strong>: equally
                comfortable architecting a voice AI agent pipeline, training a medical
                imaging model, or designing a pixel-perfect mobile experience. I believe the
                best technology is invisible — it just works.
              </p>

              <div className={styles.about__identity}>
                <span className="chip">🧠 Neuroscience</span>
                <span className="chip chip--cyan">🤖 AI / Agents</span>
                <span className="chip chip--emerald">🏥 Health-Tech</span>
                <span className="chip chip--amber">🚀 Founder</span>
                <span className="chip chip--rose">⚡ Full-Stack</span>
              </div>

              <div className={styles.about__socials}>
                <a
                  href="https://linkedin.com/in/anshayagarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.about__social}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/anshay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.about__social}
                  aria-label="GitHub profile"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="mailto:anshayagarwal@gmail.com"
                  className={styles.about__social}
                  aria-label="Email"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://leetcode.com/u/Xarc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.about__social}
                  aria-label="LeetCode profile"
                >
                  <Code2 size={16} />
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
