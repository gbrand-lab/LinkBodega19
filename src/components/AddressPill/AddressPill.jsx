import { PinIcon } from '../icons/Icons'
import './AddressPill.css'

// Clickable pill that opens the address directly in Google Maps.
export default function AddressPill({ label, mapsUrl }) {
  return (
    <a className="addr" href={mapsUrl} target="_blank" rel="noopener noreferrer">
      <PinIcon />
      {label}
    </a>
  )
}
