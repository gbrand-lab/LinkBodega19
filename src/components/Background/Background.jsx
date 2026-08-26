import './Background.css'

// Fixed decorative layer behind the whole page: dot-grid texture plus
// three soft color blobs. Purely visual — aria-hidden and unclickable.
export default function Background() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <div className="glowBlue" aria-hidden="true" />
      <div className="glowWarm" aria-hidden="true" />
    </>
  )
}
