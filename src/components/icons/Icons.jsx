// Small stroke-style icon set used across the page. Kept as plain
// components (not an icon library) so the whole app has zero runtime
// dependencies beyond React.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PinIcon(props) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function IfoodIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9l1.5-4h15L21 9" />
      <path d="M4 9h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z" />
      <path d="M9 13a3 3 0 0 0 6 0" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1.3-4A8 8 0 1 1 9 19l-5 1Z" />
      <path d="M9 10c0 3 2.5 5 5 5" />
    </svg>
  )
}

export function MenuFileIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6M9 9h2" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function ChevronRightIcon(props) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

// Looks up a menu-card icon by the short key stored in data/units.js.
export function MenuCardIcon({ icon, ...rest }) {
  if (icon === 'clock') return <ClockIcon {...rest} />
  return <MenuFileIcon {...rest} />
}
