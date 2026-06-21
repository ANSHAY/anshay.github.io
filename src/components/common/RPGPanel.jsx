import { motion } from 'framer-motion';

/**
 * Ornate RPG-themed panel container with gold borders and corner decorations.
 * Used as the primary surface component throughout the fantasy UI.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Panel content
 * @param {boolean} [props.ornate=false] - Show corner ornaments
 * @param {string} [props.className] - Additional CSS classes
 * @param {object} [props.animate] - Framer Motion animation props
 */
export default function RPGPanel({
  children,
  ornate = false,
  className = '',
  animate,
  ...rest
}) {
  const panelClass = [
    'rpg-panel',
    ornate ? 'rpg-panel--ornate' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div className={panelClass} {...animate} {...rest}>
      {ornate && (
        <>
          <span className="corner-ornament corner-ornament--tl" />
          <span className="corner-ornament corner-ornament--tr" />
          <span className="corner-ornament corner-ornament--bl" />
          <span className="corner-ornament corner-ornament--br" />
        </>
      )}
      {children}
    </motion.div>
  );
}
