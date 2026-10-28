import { useState } from 'react'

export function ProjectCueSeek() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'adr' | 'gallery'>('architecture')
  const [activeImage, setActiveImage] = useState<string>('/images/cueseek/dashboard.png')

  const galleryImages = [
    {
      src: '/images/cueseek/dashboard.png',
      caption: 'Operations Dashboard: Live status, CPU, memory, disk, and individual service health',
      label: 'Main Dashboard',
    },
    {
      src: '/images/cueseek/phone-jellyfin.png',
      caption: "Jellyfin Service Detail: Health checks, container state, and current streaming activity",
      label: 'Jellyfin Sheet',
    },
    {
      src: '/images/cueseek/phone-restart.png',
      caption: 'Destructive Safeguards: Press-and-hold action with active workload warnings',
      label: 'Safety Press-Hold',
    },
    {
      src: '/images/cueseek/watch.png',
      caption: 'Wear OS Tile: Immediate wrist operational verdict and core system telemetry',
      label: 'Wear OS Watch',
    },
  ]

  return (
    <section id="cueseek" className="project-section">
      <div className="project-header">
        <div className="project-badge-row">
          <span className="hud-tag">01 // DISTRIBUTED SYSTEMS & OPERATIONS</span>
          <span className="release-pill">v0.1.4 PRODUCTION RELEASE</span>
          <span className="license-pill">APACHE-2.0</span>
        </div>
        <div className="title-row">
          <div>
            <h2 className="project-title">CueSeek</h2>
            <p className="project-tagline">
              An operations console for self-hosted home servers, running on your phone and your watch.
            </p>
          </div>
          <div className="project-links">
            <a
              href="https://cueseek.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>cueseek.vercel.app ↗</span>
            </a>
            <a
              href="https://github.com/Kushal-MR/CueSeek"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>GitHub Repository ↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          [01] SYSTEM ARCHITECTURE
        </button>
        <button
          className={`tab-btn ${activeTab === 'adr' ? 'active' : ''}`}
          onClick={() => setActiveTab('adr')}
        >
          [02] ARCHITECTURAL DECISIONS (ADRs)
        </button>
        <button
          className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          [03] VISUAL INTERFACES ({galleryImages.length})
        </button>
      </div>

      <div className="project-tab-content">
        {activeTab === 'architecture' && (
          <div className="architecture-grid">
            <div className="arch-text">
              <h3>Zero-Root Principle & Private Mesh Networking</h3>
              <p>
                CueSeek was architected to eliminate the attack surface common to home server dashboards.
                Instead of running a web server with root permissions or exposing ports to the internet,
                CueSeek deploys a compact Go agent (<code>cueseekd</code>) as an unprivileged Linux user.
              </p>
              <div className="arch-flow-diagram">
                <div className="arch-node">
                  <span className="node-title">CLIENT DEVICES</span>
                  <span className="node-desc">Android (Jetpack Compose) · Wear OS (Tiles/Complications)</span>
                </div>
                <div className="arch-pipe">
                  <span className="pipe-label">Tailscale / WireGuard / LAN (Encrypted, Zero Open WAN Ports)</span>
                  <span className="pipe-arrow">↓ SSE & OpenAPI Contract</span>
                </div>
                <div className="arch-node highlight">
                  <span className="node-title">cueseekd DAEMON (Go)</span>
                  <span className="node-desc">Unprivileged daemon (`cueseek` user) · Token-scoped device pairing</span>
                </div>
                <div className="arch-pipe">
                  <span className="pipe-label">D-Bus IPC governed by scoped Polkit Rule (10-cueseek.rules)</span>
                  <span className="pipe-arrow">↓ Least-Privilege Action Handlers</span>
                </div>
                <div className="arch-node sub">
                  <span className="node-title">HOST SUBSYSTEMS & APIS</span>
                  <span className="node-desc">systemd & logind (Units, Reboot) · Jellyfin HTTP API · qBittorrent API</span>
                </div>
              </div>

              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>LAYER</th>
                      <th>TECHNOLOGY</th>
                      <th>RESPONSIBILITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Agent Daemon</td>
                      <td>Go (linux/amd64), systemd unit</td>
                      <td>Runs unprivileged, polls services, emits SSE, executes authenticated actions</td>
                    </tr>
                    <tr>
                      <td>Host IPC</td>
                      <td>D-Bus, polkit 0.106+</td>
                      <td>Unit control without sudo; grants only designated service starts/stops</td>
                    </tr>
                    <tr>
                      <td>Mobile App</td>
                      <td>Android 8+, Kotlin, Jetpack Compose</td>
                      <td>Real-time SSE state, press-and-hold destructive safety, capability-based cards</td>
                    </tr>
                    <tr>
                      <td>Wrist App</td>
                      <td>Wear OS 3+, Tiles, Complications</td>
                      <td>One-glance status, scoped tokens (restart services but cannot reboot host)</td>
                    </tr>
                    <tr>
                      <td>Network</td>
                      <td>Tailscale, WireGuard, private LAN</td>
                      <td>VPN-only transport; never exposed to public internet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="arch-visual">
              <div className="screen-frame">
                <div className="screen-topbar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="screen-title">CueSeek Dashboard — v0.1.4</span>
                </div>
                <img
                  src="/images/cueseek/dashboard.png"
                  alt="CueSeek Dashboard"
                  className="screen-img"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'adr' && (
          <div className="adr-grid">
            <div className="adr-card">
              <div className="adr-id">ADR-0001</div>
              <div className="adr-title">VPN-Only Remote Access</div>
              <p className="adr-summary">
                Rejecting public domain binding and SSL reverse proxies in favor of private mesh overlays (Tailscale / WireGuard).
                Zero exposure to automated bot scans; simplifies client authentication to token handshakes.
              </p>
            </div>
            <div className="adr-card">
              <div className="adr-id">ADR-0002</div>
              <div className="adr-title">Host Privilege via D-Bus & Polkit</div>
              <p className="adr-summary">
                The agent runs without root. A single polkit rule explicitly authorizes <code>cueseekd</code> to manage
                only whitelisted systemd units, reboot, and power-off. Even a full agent compromise cannot execute arbitrary root commands.
              </p>
            </div>
            <div className="adr-card">
              <div className="adr-id">ADR-0004</div>
              <div className="adr-title">Real-Time State via OpenAPI & SSE</div>
              <p className="adr-summary">
                Server-Sent Events deliver instantaneous status transitions without heavy WebSocket overhead or stale HTTP polling.
                The frontend operates on unidirectional stream state.
              </p>
            </div>
            <div className="adr-card">
              <div className="adr-id">ADR-0006</div>
              <div className="adr-title">Device Pairing & Scoped Permissions</div>
              <p className="adr-summary">
                Mobile and Wear OS devices generate unique authorization tokens during local QR/passcode pairing.
                Wrist clients default to observation and lightweight restart permissions, blocking power-down commands.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="gallery-layout">
            <div className="gallery-main-view">
              <img src={activeImage} alt="CueSeek screenshot" className="gallery-main-img" />
              <div className="gallery-caption">
                {galleryImages.find((img) => img.src === activeImage)?.caption}
              </div>
            </div>
            <div className="gallery-thumbnails">
              {galleryImages.map((img) => (
                <button
                  key={img.src}
                  className={`thumb-btn ${activeImage === img.src ? 'active' : ''}`}
                  onClick={() => setActiveImage(img.src)}
                >
                  <img src={img.src} alt={img.label} />
                  <span>{img.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
