import { useState } from 'react'

export function Hero() {
  const [copied, setCopied] = useState(false)
  const email = 'kushalmr.cs25@rvce.edu.in'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="hero-section">
      <div className="hero-telemetry">
        <div className="telemetry-item">
          <span className="telemetry-label">OPERATOR</span>
          <span className="telemetry-val">KUSHAL M R</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">AFFILIATION</span>
          <span className="telemetry-val">RVCE COMPUTER SCIENCE (USN: 1RV25CS091)</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">DISPATCH</span>
          <span className="telemetry-val">{email}</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">STATUS</span>
          <span className="telemetry-val ok-text">● DEPLOYING & RESEARCHING</span>
        </div>
      </div>

      <div className="hero-content">
        <div className="hud-tag">00 // WHAT I BUILD</div>
        <h1 className="hero-title">
          I build Linux tools, smartwatch apps and AI research projects.
        </h1>
        <p className="hero-subtext">
          Computer Science student at RV College of Engineering, Bengaluru. I make fast, lightweight software:
          background services for Linux, phone and smartwatch apps in Kotlin, and machine learning research on
          chip defect detection and medical diagnosis.
        </p>

        <div className="hero-actions">
          <a href="#cueseek" className="btn btn-primary">
            <span>Explore Engineering Work</span>
            <span className="btn-arrow">↓</span>
          </a>
          <button onClick={copyEmail} className="btn btn-secondary" title="Click to copy email address">
            <span>{copied ? '✓ Email Copied' : 'Copy Email Dispatch'}</span>
          </button>
          <a
            href="https://github.com/Kushal-MR"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary"
          >
            <span>GitHub Profile ↗</span>
          </a>
        </div>
      </div>

      <div className="hero-specs-grid">
        <div className="spec-card">
          <div className="spec-num">01</div>
          <div className="spec-title">CueSeek Console</div>
          <div className="spec-desc">Unprivileged Go daemon + Android/Wear OS clients over Tailscale & SSE</div>
          <div className="spec-tag">SYSTEMS · D-BUS · JETPACK COMPOSE</div>
        </div>
        <div className="spec-card">
          <div className="spec-num">02</div>
          <div className="spec-title">FocusOrb</div>
          <div className="spec-desc">Dual-device anti-distraction system with fracture physics, haptics & hex galaxy</div>
          <div className="spec-tag">WEAR OS · KOTLIN · DATA LAYER</div>
        </div>
        <div className="spec-card">
          <div className="spec-num">03</div>
          <div className="spec-title">DDSW Paper (KLA)</div>
          <div className="spec-desc">Silicon wafer defect detection using frozen DINOv2/v3 foundation features & NAFNet</div>
          <div className="spec-tag">CV RESEARCH · FEW-SHOT · SCOPUS</div>
        </div>
        <div className="spec-card">
          <div className="spec-num">04</div>
          <div className="spec-title">LiverQ</div>
          <div className="spec-desc">Explainable hybrid quantum-classical pipeline across 3 clinical diagnostic stages</div>
          <div className="spec-tag">QUANTUM ML · SHAP · HEALTHCARE</div>
        </div>
      </div>
    </section>
  )
}
