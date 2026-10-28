import { useState } from 'react'

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = 'kushalmr.cs25@rvce.edu.in'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="project-section contact-section">
      <div className="project-header">
        <div className="project-badge-row">
          <span className="hud-tag">06 // TRANSMISSION & DIRECT DISPATCH</span>
          <span className="release-pill">CHANNELS OPEN</span>
        </div>
        <div className="title-row">
          <div>
            <h2 className="project-title">Initiate Contact</h2>
            <p className="project-tagline">
              Open to systems engineering roles, high-leverage research collaborations, and hardware/wearable initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card primary-contact">
          <span className="contact-type">DIRECT ACADEMIC / PROFESSIONAL DISPATCH</span>
          <div className="contact-email-row">
            <span className="email-text">{email}</span>
            <button onClick={copyEmail} className="btn btn-primary">
              <span>{copied ? '✓ Copied to Clipboard' : 'Copy Dispatch Address'}</span>
            </button>
          </div>
          <p className="contact-subtext">
            Monitored daily. Ideal for technical interviews, open-source discussion, and paper collaboration inquiries.
          </p>
        </div>

        <div className="contact-card">
          <span className="contact-type">CODEBASE REPOSITORIES</span>
          <div className="social-row">
            <a
              href="https://github.com/Kushal-MR"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-btn"
            >
              <span>GitHub · @Kushal-MR</span>
              <span className="link-arrow">↗</span>
            </a>
            <a
              href="https://cueseek.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-btn"
            >
              <span>CueSeek Production · Live</span>
              <span className="link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
