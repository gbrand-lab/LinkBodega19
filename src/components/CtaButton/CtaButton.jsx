import './CtaButton.css'

// A single big call-to-action button. variant is 'primary' or 'secondary';
// the color itself comes from the --accent/--accent-deep custom properties
// set by the parent UnitSection (orange for Vista Mar, blue for Golden).
// image, when set, is shown as the button's background photo.
export function CtaButton({ href, icon, label, variant = 'primary', image }) {
  const variantClass = variant === 'secondary' ? 'secondary' : 'primary'
  return (
    <a
      className={`cta ${variantClass}${image ? ' hasImage' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {icon}
      {label && <span>{label}</span>}
    </a>
  )
}

export function CtaRow({ children }) {
  return <div className="ctaRow">{children}</div>
}
