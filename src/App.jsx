import Background from './components/Background/Background'
import Header from './components/Header/Header'
import UnitSection from './components/UnitSection/UnitSection'
import MenuModal from './components/MenuModal/MenuModal'
import { units } from './data/units'
import { useMenuModal } from './hooks/useMenuModal'
import './App.css'

export default function App() {
  const { openMenuItem, openMenu, closeMenu } = useMenuModal()

  return (
    <>
      <Background />
      <div className="page">
        <Header />
        <div className="panels">
          {units.map((unit) => (
            <UnitSection key={unit.id} unit={unit} onOpenMenu={openMenu} />
          ))}
        </div>
      </div>
      <MenuModal key={openMenuItem?.image} menuItem={openMenuItem} onClose={closeMenu} />
    </>
  )
}
