import ScrollReveal from './ScrollReveal';

/**
 * Consistent section header with label, title, and optional subtitle.
 */
export default function SectionHeader({ label, title, subtitle, id }) {
  return (
    <ScrollReveal>
      <header className="section-header" id={id}>
        {label && <span className="section-header__label">{label}</span>}
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </header>
    </ScrollReveal>
  );
}
