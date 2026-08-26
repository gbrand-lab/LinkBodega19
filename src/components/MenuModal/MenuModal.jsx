import { CloseIcon } from '../icons/Icons'
import './MenuModal.css'

// Full menu preview shown over the page: the menu art is a plain image
// served from /public, so people never leave the Linktree to read it.
// Renders nothing while no menu is open.
export default function MenuModal({ menuItem, onClose }) {
  if (!menuItem) return null

  return (
    <div
      className="overlay"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="menuModalTitle">
        <div className="head">
          <h2 id="menuModalTitle">{menuItem.title}</h2>
          <button type="button" className="close" onClick={onClose} aria-label="Fechar">
            <CloseIcon />
          </button>
        </div>
        <div className="frame">
          <img src={menuItem.image} alt={menuItem.title} />
        </div>
        <div className="foot">
          <a href={menuItem.image} target="_blank" rel="noopener noreferrer">
            Abrir em nova guia
          </a>
        </div>
      </div>
    </div>
  )
}
