import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Main working links (scroll to section on main page)
const mainLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Registry', href: '#registry' },
  { label: 'RSVP', href: '#rsvp' },
]

// Coming soon pages (placed at the right corner of the nav)
const secondaryLinks = [
  { label: 'Our Story', to: '/story' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Program', to: '/program' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setMenuOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link className="nav__logo" to="/">
        A &amp; E
      </Link>
      <button
        className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <div className={`nav__right${menuOpen ? ' nav__right--open' : ''}`}>
        <ul className="nav__links">
          {mainLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={pathname !== '/' ? `/${href}` : href}
                onClick={(e) => handleSectionClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__sep" aria-hidden="true" />
        <ul className="nav__links nav__links--secondary">
          {secondaryLinks.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} onClick={() => setMenuOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
