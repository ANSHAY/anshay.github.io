import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { featuredProjects } from '../../data/projects';
import styles from './FeaturedProjects.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <SectionHeader
          label="Featured Work"
          title="Projects That Define Me"
          subtitle="High-impact research and engineering projects spanning neuroscience, healthcare, and AI agents."
        />

        <div className={styles.featured}>
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.card}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <span className={styles.card__company}>{project.company}</span>
              <p className={styles.card__subtitle}>{project.subtitle}</p>
              <h3 className={styles.card__title}>{project.title}</h3>
              <p className={styles.card__desc}>{project.description}</p>
              <p className={styles.card__metrics}>{project.metrics}</p>
              <div className={styles.card__stack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.card__tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
