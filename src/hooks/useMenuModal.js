import { useCallback, useEffect, useState } from 'react'

// Controls the in-page menu viewer: which menu (if any) is open, and the
// open/close actions. Kept as a hook so App.jsx and MenuModal.jsx share
// one source of truth without prop-drilling a raw useState pair around.
export function useMenuModal() {
  const [openMenuItem, setOpenMenuItem] = useState(null)

  const openMenu = useCallback((menuItem) => {
    setOpenMenuItem(menuItem)
  }, [])

  const closeMenu = useCallback(() => {
    setOpenMenuItem(null)
  }, [])

  // Escape key closes the modal, and background scroll is locked while open.
  useEffect(() => {
    if (!openMenuItem) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [openMenuItem, closeMenu])

  return { openMenuItem, openMenu, closeMenu }
}
