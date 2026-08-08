import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Psicología',   href: '#psicologia' },
  { label: 'Odontología',  href: '#odontologia' },
  { label: 'Fisioterapia', href: '#fisioterapia' },
  { label: 'Conoce a los profesionales', href: '#profesionales' }, 
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#" aria-label="Inicio – Grupo de Gestión Zapopan">
          <div className="logo-mark" aria-hidden="true">
          <img src={logo} alt="Logo Grupo de Gestión Zapopan" width={40} height={40} />
          </div>
          <span className="logo-text">Grupo de Gestión Zapopan</span>
        </a>

        <button
          className={`navbar-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="navbar-links"
          className={`navbar-links${menuOpen ? ' is-open' : ''}`}
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar-link" onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
