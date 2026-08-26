import { PinIcon, ClockIcon } from '../icons/Icons'
import './LocationMap.css'

// Embedded Google Maps preview for a unit's address, plus opening hours
// and a link to open it in Maps directly — mirrors the "Localização"
// section from hopsnbeer.
export default function LocationMap({ label, mapsUrl, mapsEmbedUrl, hours }) {
  return (
    <div className="mapBlock">
      <div className="mapViewer">
        <iframe
          title={`Mapa ${label}`}
          src={mapsEmbedUrl}
          className="mapFrame"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {hours?.length > 0 && (
        <ul className="mapHours">
          {hours.map((h) => (
            <li key={h.day}>
              <ClockIcon />
              <span className="mapHoursDay">{h.day}</span>
              <span className="mapHoursTime">{h.time}</span>
            </li>
          ))}
        </ul>
      )}

      <a className="mapOpen" href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <PinIcon />
        <span>Abrir no Google Maps</span>
      </a>
    </div>
  )
}
