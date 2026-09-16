import { useState } from 'react'
import { CloseIcon } from '../icons/Icons'
import './MenuModal.css'

// Full menu preview shown over the page: the menu art is a plain image
// served from /public, so people never leave the Linktree to read it.
// Clicking the image toggles a zoomed-in view (scrollable via the
// surrounding .frame) for reading small print.
// Renders nothing while no menu is open.
export default function MenuModal({ menuItem, onClose }) {
  const [zoomed, setZoomed] = useState(false)

  if (!menuItem) return null

  const images = menuItem.images ?? [menuItem.image]

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
        <div className={`frame${zoomed ? ' zoomedFrame' : ''}`}>
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt={menuItem.title}
              className={zoomed ? 'zoomed' : undefined}
              onClick={() => setZoomed((value) => !value)}
            />
          ))}
        </div>
        <div className="foot">
          {images.map((src, index) => (
            <a key={src} href={src} target="_blank" rel="noopener noreferrer">
              {images.length > 1 ? `Abrir página ${index + 1} em nova guia` : 'Abrir em nova guia'}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
