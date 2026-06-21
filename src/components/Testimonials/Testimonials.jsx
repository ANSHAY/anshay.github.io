import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section__inner">
        <SectionHeader
          label="Testimonials"
          title="What Colleagues Say"
          subtitle="Recommendations from engineers and product leaders I've worked with."
        />

        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              className={styles.card}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
            >
              <span className={styles['card__quote-icon']}>&ldquo;</span>
              <p className={styles.card__text}>{t.quote}</p>
              <div className={styles.card__author}>
                <span className={styles.card__name}>{t.name}</span>
                <span className={styles.card__role}>
                  {t.role} — {t.company}
                </span>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
