import { accentTokens } from '../../data/units'
import AddressPill from '../AddressPill/AddressPill'
import { CtaButton, CtaRow } from '../CtaButton/CtaButton'
import { MenuCard, MenuCardList } from '../MenuCard/MenuCard'
import LocationMap from '../LocationMap/LocationMap'
import './UnitSection.css'

// One full unit block: title, address pill, "order now" buttons and the
// menu card list. Colored by the accent token from data/units.js — orange
// for Vista Mar, blue for Golden Shopping — via CSS custom properties so
// every child component (buttons, icons, pin) inherits the right color.
export default function UnitSection({ unit, onOpenMenu }) {
  const { accent, accentDeep } = accentTokens[unit.accent]
  const whatsappIcon = unit.accent === 'blue' ? '/icons8-whatsapp-100.png' : '/whatsapp (1).png'
  const ifoodLogo =
    unit.accent === 'blue'
      ? '/logo_ifood_azul_transparente-removebg-preview.png'
      : '/logo_ifood_laranja-removebg-preview.png'

  return (
    <section className="panel" style={{ '--accent': accent, '--accent-deep': accentDeep }}>
      <div className="unitTitle">
        <span className="dot" />
        <h2>{unit.name}</h2>
      </div>

      <AddressPill label={unit.address.label} mapsUrl={unit.address.mapsUrl} />

      <div className="section">
        <p className="sectionLabel">Peça agora</p>
        <CtaRow>
          <CtaButton
            href={unit.ifoodUrl}
            icon={<img src={ifoodLogo} alt="iFood" className="ctaLogo" />}
            variant="secondary"
          />
          <CtaButton
            href={unit.whatsappUrl}
            icon={<img src={whatsappIcon} alt="WhatsApp" className="ctaIcon" />}
            variant="secondary"
          />
        </CtaRow>
      </div>

      <div className="section">
        <p className="sectionLabel">Localização</p>
        <LocationMap
          label={unit.address.label}
          mapsUrl={unit.address.mapsUrl}
          mapsEmbedUrl={unit.address.mapsEmbedUrl}
          hours={unit.hours}
        />
      </div>

      <div className="section">
        <p className="sectionLabel">Cardápios</p>
        <MenuCardList>
          {unit.menus.map((menu) => (
            <MenuCard key={menu.title} menu={menu} onOpen={onOpenMenu} />
          ))}
        </MenuCardList>
      </div>
    </section>
  )
}
