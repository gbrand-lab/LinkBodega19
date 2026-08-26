import logo from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="mark">
        <img src={logo} alt="Bodega19 Gastro Bar" />
      </div>
      <p className="kicker">Gastro Bar &middot; Est. 2020</p>
      <h1 className="title">
        Bodega
        <span>19</span>
      </h1>
      <p className="bio">
        Duas casas, um mesmo clima: petiscos, chope e boa mesa em São Luís.
      </p>
    </header>
  )
}
