import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { skillClusters } from '../../data/skills';
import styles from './Skills.module.css';

const clusterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <SectionHeader
          label="Expertise"
          title="Technical Arsenal"
          subtitle="A decade of accumulated tools, languages, and frameworks."
        />

        <div className={styles.clusters}>
          {skillClusters.map((cluster, i) => (
            <motion.div
              key={cluster.id}
              className={styles.cluster}
              custom={i}
              variants={clusterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
            >
              <h3 className={styles.cluster__title}>
                <span
                  className={`${styles.cluster__dot} ${
                    styles[`cluster__dot--${cluster.color}`]
                  }`}
                />
                {cluster.title}
              </h3>
              <div className={styles.cluster__skills}>
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${styles.skill} ${
                      styles[`skill--${cluster.color}`]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
