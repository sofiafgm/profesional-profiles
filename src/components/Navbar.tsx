import { useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Psicología',   href: '#psicologia' },
  { label: 'Odontología',  href: '#odontologia' },
  { label: 'Fisioterapia', href: '#fisioterapia' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#" aria-label="Inicio – Grupo de Gestión Zapopan">
          <div className="logo-mark" aria-hidden="true">GGZ</div>
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
