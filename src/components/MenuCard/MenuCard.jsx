import './MenuCard.css'

// One menu entry. Clicking it opens the in-page viewer (see MenuModal)
// instead of navigating away to Google Drive.
export function MenuCard({ menu, onOpen }) {
  return (
    <button
      type="button"
      className="card"
      style={menu.image ? { backgroundImage: `url(${menu.image})` } : undefined}
      onClick={() => onOpen(menu)}
    >
      <span className="cardGlow" aria-hidden="true" />
      <span className="cardText">
        <p className="cardKicker">{menu.subtitle}</p>
        <p className="cardTitle">{menu.title}</p>
        <span className="cardCta">Clique aqui e veja o cardápio!</span>
      </span>
    </button>
  )
}

export function MenuCardList({ children }) {
  return <div className="cardList">{children}</div>
}
