import { useState } from 'react'

export interface AboutTemplate {
  id: string
  title: string
  tagline: string
  persona: string
  text: string
  highlights: string[]
}

export const ABOUT_TEMPLATES: AboutTemplate[] = [
  {
    id: 'systems',
    title: 'Template A · Systems & Wearables Engineer',
    tagline: 'Focus on low-privilege Linux daemons, tactile wearables, and local-first architecture.',
    persona: 'Best for: Systems engineering, Android/Wear OS roles, Infrastructure, Platform teams',
    text: `I am a Computer Science undergraduate at RV College of Engineering (USN: 1RV25CS091) with an obsession for mechanical precision in software. My work lives at the boundary of unprivileged operating system primitives and dual-device wearable interactions. Whether writing Go daemons that communicate with systemd and logind over D-Bus governed by explicit polkit rules (CueSeek), or building Wear OS canvas experiences with real-time fracture physics and low-latency Bluetooth sync (FocusOrb), I engineer systems that are lean, tactile, local-first, and respectful of human attention.`,
    highlights: [
      'Linux Privileges & IPC: Polkit rules, D-Bus, systemd units, unprivileged daemon architecture',
      'Wearable Systems: Wear OS 3+, Jetpack Compose, Ongoing Activity API, Wearable Data Layer',
      'Local-First & Zero Bloat: Tailscale mesh networking, Server-Sent Events, no unnecessary cloud hops',
    ],
  },
  {
    id: 'researcher',
    title: 'Template B · Applied ML & Systems Researcher',
    tagline: 'Focus on computer vision foundation models, few-shot micro-regimes, and quantum ML.',
    persona: 'Best for: AI/ML engineering, Research labs, Semiconductor/Hardware vision, Applied AI',
    text: `I bridge low-level systems engineering with empirical machine learning research at RV College of Engineering. My research centers on resource-constrained regimes: evaluating frozen vision foundation representations (DINOv2/v3) against task-specific CNNs for semiconductor surface defect inspection under extreme few-shot constraints (KLA Hackathon, IEEE/Scopus manuscript), and investigating hybrid quantum-classical classifiers (VQC & quantum kernels) to overcome minority-class recall failure in asymptomatic liver disease screening (LiverQ). I care about sample efficiency, out-of-distribution transfer, and mathematically verified explainability.`,
    highlights: [
      'Foundation Models & Vision: DINOv2/v3 frozen feature extraction, NAFNet optical restoration, few-shot curves',
      'Semiconductor Defect Inspection: Cross-wafer transfer validation across 2,855 microscopic defect patches',
      'Quantum ML: Variational Quantum Classifiers (VQC), angle encoding, and SHAP clinician explainability',
    ],
  },
  {
    id: 'craftsman',
    title: 'Template C · Minimalist Tool Craftsman',
    tagline: 'Focus on end-to-end craft, bespoke interaction design, and software that loads nothing but itself.',
    persona: 'Best for: Product engineering, Founding engineer roles, Full-stack craftsman opportunities',
    text: `I build end-to-end tools with uncompromising craftsmanship. From the physical 5-stop rotary knob and zero-dependency aesthetic of CueSeek, to the hex-spiral galaxy canvas and supernova reward animations of FocusOrb, I engineer software from first principles. I value restraint: unprivileged Linux daemons over bloated web services, offline-first architectures over fragile cloud dependencies, and interfaces that load nothing but themselves. Undergrad at RVCE, Bengaluru, writing Go, Kotlin, TypeScript, and Python.`,
    highlights: [
      'Zero-Bloat Philosophy: Software that loads nothing but itself and respects hardware limits',
      'Physicalized Interaction: Tactile rotary controls, haptic consequence feedback, custom 2D math',
      'End-to-End Ownership: From low-level Linux daemon scripts to wrist complications and design tokens',
    ],
  },
]

export function AboutSection() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('craftsman')
  const [copied, setCopied] = useState(false)

  const current = ABOUT_TEMPLATES.find((t) => t.id === selectedTemplate) || ABOUT_TEMPLATES[0]

  const copyTemplate = () => {
    navigator.clipboard.writeText(current.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="about" className="project-section about-section">
      <div className="project-header">
        <div className="project-badge-row">
          <span className="hud-tag">05 // OPERATOR PROFILE & ABOUT ME</span>
          <span className="release-pill">ROUGH TEMPLATE SELECTOR</span>
        </div>
        <div className="title-row">
          <div>
            <h2 className="project-title">About Kushal M R</h2>
            <p className="project-tagline">
              Select or review the rough template that best represents your focus, or use the interactive switch below.
            </p>
          </div>
          <button onClick={copyTemplate} className="btn btn-secondary">
            <span>{copied ? '✓ Copied Bio' : 'Copy Selected Bio Text'}</span>
          </button>
        </div>
      </div>

      <div className="template-selector-bar">
        {ABOUT_TEMPLATES.map((tmpl) => (
          <button
            key={tmpl.id}
            className={`template-tab-btn ${selectedTemplate === tmpl.id ? 'active' : ''}`}
            onClick={() => setSelectedTemplate(tmpl.id)}
          >
            <span className="tmpl-indicator" />
            <span className="tmpl-name">{tmpl.title.split('·')[1].trim()}</span>
          </button>
        ))}
      </div>

      <div className="about-card-container">
        <div className="about-main-card">
          <div className="about-meta-row">
            <span className="persona-tag">{current.persona}</span>
            <span className="template-tag">{current.title}</span>
          </div>

          <blockquote className="about-bio-text">"{current.text}"</blockquote>

          <div className="about-highlights-block">
            <span className="hud-tag">CORE COMPETENCIES & PROVEN CAPABILITIES</span>
            <ul className="highlight-pills">
              {current.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-telemetry-sidebar">
          <div className="spec-card">
            <div className="spec-title">Operator Specifications</div>
            <div className="spec-item">
              <span className="lbl">Full Name</span>
              <span className="val">Kushal M R</span>
            </div>
            <div className="spec-item">
              <span className="lbl">Institution</span>
              <span className="val">RV College of Engineering (RVCE)</span>
            </div>
            <div className="spec-item">
              <span className="lbl">Degree & Branch</span>
              <span className="val">B.E. Computer Science & Engineering</span>
            </div>
            <div className="spec-item">
              <span className="lbl">USN</span>
              <span className="val">1RV25CS091</span>
            </div>
            <div className="spec-item">
              <span className="lbl">Location</span>
              <span className="val">Bengaluru, Karnataka, India</span>
            </div>
            <div className="spec-item">
              <span className="lbl">Direct Dispatch</span>
              <span className="val mono">kushalmr.cs25@rvce.edu.in</span>
            </div>
            <div className="spec-item">
              <span className="lbl">Primary Stacks</span>
              <span className="val">Go · Kotlin · Python · TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
