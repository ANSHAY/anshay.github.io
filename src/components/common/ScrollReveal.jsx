import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Scroll-triggered reveal animation wrapper.
 * Elements fade and rise into view with a magical entrance.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] - Animation delay in seconds
 * @param {string} [props.direction='up'] - Direction: 'up' | 'down' | 'left' | 'right'
 * @param {number} [props.distance=40] - Distance in pixels for the entrance
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initialOffset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
