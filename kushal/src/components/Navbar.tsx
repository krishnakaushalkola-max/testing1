import { useState } from 'react'
import { Knob } from '../theme/Knob.tsx'

interface NavbarProps {
  activeSection?: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#cueseek', label: 'CueSeek' },
    { href: '#focusorb', label: 'FocusOrb' },
    { href: '#ddsw', label: 'DDSW Paper' },
    { href: '#liverq', label: 'LiverQ' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="nav">
      <a className="brand" href="#top">
        <svg
          className="brand-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m10 15 5-3-5-3v6Z" />
        </svg>
        <span className="brand-name">Kushal M R</span>
      </a>

      <div className="status-badge" title="RV College of Engineering, Computer Science & Engineering">
        <span className="status-dot" aria-hidden="true" />
        <span>RVCE CSE · BENGALURU</span>
      </div>

      <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} aria-label="Sections">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={activeSection === link.href.substring(1) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/Kushal-MR"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-external"
        >
          GitHub ↗
        </a>
      </nav>

      <div className="nav-controls">
        <Knob />
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`bar ${mobileMenuOpen ? 'bar-top' : ''}`} />
          <span className={`bar ${mobileMenuOpen ? 'bar-mid' : ''}`} />
          <span className={`bar ${mobileMenuOpen ? 'bar-bot' : ''}`} />
        </button>
      </div>
    </header>
  )
}
