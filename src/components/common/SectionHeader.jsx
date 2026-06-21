/**
 * RPG-themed section header with icon, decorative label, title, and ornate divider.
 * Replaces the old monospace-label header with fantasy typography.
 *
 * @param {object} props
 * @param {string} props.icon - Emoji or symbol for the section
 * @param {string} props.label - Fantasy category label (e.g., "Chapter III")
 * @param {string} props.title - Main section title in Cinzel
 * @param {string} [props.subtitle] - Optional description below title
 * @param {string} [props.runeSymbol='◆'] - Center rune in divider
 */
export default function SectionHeader({
  icon,
  label,
  title,
  subtitle,
  runeSymbol = '◆',
}) {
  return (
    <header className="section-header">
      {icon && <span className="section-header__icon">{icon}</span>}
      <span className="section-header__label">{label}</span>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      <div className="section-header__divider">
        <span className="section-header__divider-rune">{runeSymbol}</span>
      </div>
    </header>
  );
}
