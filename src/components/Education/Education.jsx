import { ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import { degrees, certifications, achievements } from '../../data/education';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section__inner">
        <SectionHeader
          label="Academics"
          title="Education & Credentials"
          subtitle="IIT pedigree, world-class certifications, and competitive exam rankings."
        />

        {/* Degrees */}
        <ScrollReveal>
          <div className={styles.education}>
            {degrees.map((deg) => (
              <div key={deg.id} className={styles.degree}>
                <p className={styles.degree__period}>{deg.period}</p>
                <h3 className={styles.degree__institution}>{deg.institution}</h3>
                <p className={styles.degree__name}>
                  {deg.degree}
                  {deg.specialization && ` — ${deg.specialization}`}
                </p>
                {deg.thesis && (
                  <p className={styles.degree__thesis}>Thesis: {deg.thesis}</p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={0.1}>
          <h3 className={styles['certs-title']}>Certifications</h3>
          <div className={styles.certs}>
            {certifications.map((cert) => (
              <span key={cert.title} className={styles.cert}>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'contents' }}
                  >
                    {cert.title}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  cert.title
                )}
                <span className={styles.cert__issuer}>· {cert.issuer}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Achievements */}
        <ScrollReveal delay={0.2}>
          <h3 className={styles['achievements-title']}>Achievements</h3>
          <div className={styles.achievements}>
            {achievements.map((a) => (
              <div key={a.label} className={styles.achievement}>
                <div className={styles.achievement__label}>{a.label}</div>
                <p className={styles.achievement__detail}>{a.detail}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
