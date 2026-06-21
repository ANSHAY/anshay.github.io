import { Mail, Download, Linkedin, Github, Code2 } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <ScrollReveal>
          <div className={styles.contact}>
            <h2 className={styles.contact__cta}>
              Let&apos;s Build Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className={styles.contact__desc}>
              Whether you&apos;re looking for a technical co-founder, an AI
              architect, or just want to talk about brain-computer interfaces —
              I&apos;d love to hear from you.
            </p>

            <div className={styles.contact__actions}>
              <a
                href="mailto:anshayagarwal@gmail.com"
                className={`${styles.contact__btn} ${styles['contact__btn--primary']}`}
              >
                <Mail size={18} />
                Send me an Email
              </a>
              <a
                href="/assets/download/Resume_Anshay.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contact__btn} ${styles['contact__btn--secondary']}`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className={styles.contact__socials}>
              <a
                href="https://linkedin.com/in/anshayagarwal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contact__social}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/anshay"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contact__social}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/Xarc/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contact__social}
                aria-label="LeetCode"
              >
                <Code2 size={20} />
              </a>
              <a
                href="mailto:anshayagarwal@gmail.com"
                className={styles.contact__social}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <footer className={styles.footer}>
              <p className={styles.footer__text}>
                © {new Date().getFullYear()} Anshay Agarwal · Built with React &
                Framer Motion
              </p>
            </footer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
