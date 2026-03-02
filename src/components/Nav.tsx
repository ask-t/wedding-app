import { useState, useEffect } from 'react'

const links = [
  { label: 'Our Story', href: '#story' },
  { label: 'Ceremony', href: '#ceremony' },
  { label: 'Reception', href: '#reception' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Registry', href: '#registry' },
  { label: 'RSVP', href: '#rsvp' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a className="nav__logo" href="#top" onClick={(e) => handleClick(e, '#top')}>
        A &amp; J
      </a>
      <button
        className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={(e) => handleClick(e, href)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
