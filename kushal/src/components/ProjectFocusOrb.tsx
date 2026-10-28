import { useState } from 'react'

export function ProjectFocusOrb() {
  const [activeTab, setActiveTab] = useState<'mechanics' | 'canvas' | 'gallery'>('mechanics')
  const [activeWatchImg, setActiveWatchImg] = useState<string>('images/focusorb/watch-running.png')

  const watchProgression = [
    {
      src: 'images/focusorb/watch-running.png',
      step: '01',
      title: 'Active Orb',
      desc: 'Breathing radial gradient canvas with ambient mode wrist support (Ongoing Activity API).',
    },
    {
      src: 'images/focusorb/watch-damage-1.png',
      step: '02',
      title: 'Distraction Impact',
      desc: 'First hit fractures the crystalline surface; directional screen-shake and heavy haptics trigger.',
    },
    {
      src: 'images/focusorb/watch-shattered.png',
      step: '03',
      title: 'Orb Shattered',
      desc: 'Poison ticks every 5s deplete the 3 HP budget. Focus lost; energy dissipates.',
    },
    {
      src: 'images/focusorb/watch-supernova.png',
      step: '04',
      title: 'Supernova Collapse',
      desc: 'Successful session triggers an explosive implosion-burst, forging a collectible star.',
    },
    {
      src: 'images/focusorb/watch-galaxy.png',
      step: '05',
      title: 'Hex-Spiral Galaxy',
      desc: 'Fling-scrollable 2D hex grid with fish-eye lens magnification displaying lifetime stars.',
    },
  ]

  return (
    <section id="focusorb" className="project-section">
      <div className="project-header">
        <div className="project-badge-row">
          <span className="hud-tag">02 // DUAL-DEVICE WEARABLES & SENSORS</span>
          <span className="release-pill">WEAR OS 3+ · ANDROID 9+</span>
          <span className="license-pill">KOTLIN · JETPACK COMPOSE</span>
        </div>
        <div className="title-row">
          <div>
            <h2 className="project-title">FocusOrb</h2>
            <p className="project-tagline">
              An anti-distraction system for Wear OS + Android with physicalized consequence mechanics and hex-spiral star galaxies.
            </p>
          </div>
          <div className="project-links">
            <span className="status-badge-inline">
              <span className="status-dot ok" /> WEARABLE DATA LAYER MESH
            </span>
          </div>
        </div>
      </div>

      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === 'mechanics' ? 'active' : ''}`}
          onClick={() => setActiveTab('mechanics')}
        >
          [01] SYSTEM MECHANICS & DATA LAYER
        </button>
        <button
          className={`tab-btn ${activeTab === 'canvas' ? 'active' : ''}`}
          onClick={() => setActiveTab('canvas')}
        >
          [02] 2D HEX CANVAS & GALAXY PHYSICS
        </button>
        <button
          className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          [03] WRIST & PHONE SCREENSHOTS
        </button>
      </div>

      <div className="project-tab-content">
        {activeTab === 'mechanics' && (
          <div className="architecture-grid">
            <div className="arch-text">
              <h3>The Referee & The Orb: Split Responsibility Architecture</h3>
              <p>
                FocusOrb turns your smartphone into a referee and your watch into a vulnerable digital organ.
                Traditional focus timers fail because they live on the phone itself where temptations exist.
                FocusOrb splits the loop: the session is initiated on your wrist, and the phone silently polices app transitions in the background.
              </p>

              <div className="sequence-box">
                <div className="seq-step">
                  <span className="seq-badge">01</span>
                  <div className="seq-body">
                    <strong>Wrist Session Start:</strong> <code>FocusViewModel</code> sends <code>/session_started</code> payload (session ID, duration, expiry) over the Google Play Services Wearable Data Layer.
                  </div>
                </div>
                <div className="seq-step">
                  <span className="seq-badge">02</span>
                  <div className="seq-body">
                    <strong>Privacy-First Shield:</strong> Phone's <code>FocusShieldService</code> queries <code>UsageStatsManager</code> every 1 second. It checks only the top-resumed package against a user blocklist—zero screen capture or invasive Accessibility API permissions required.
                  </div>
                </div>
                <div className="seq-step">
                  <span className="seq-badge">03</span>
                  <div className="seq-body">
                    <strong>Haptic & Visual Repercussion:</strong> Opening an app like YouTube or Instagram instantly dispatches <code>/distraction_triggered</code>. The watch takes 1 HP damage, fractures physically, shakes, and pulses intense haptic vibration.
                  </div>
                </div>
                <div className="seq-step">
                  <span className="seq-badge">04</span>
                  <div className="seq-body">
                    <strong>Poison Tick:</strong> Staying in the blocked app incurs a poison tick every 5 seconds. Lose all 3 HP, and the orb disintegrates.
                  </div>
                </div>
              </div>

              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>COMPONENT</th>
                      <th>STACK</th>
                      <th>FEATURE HIGHLIGHT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Watch Runtime</td>
                      <td>Wear OS (SDK 30+), Jetpack Compose for Wear</td>
                      <td>Ambient mode persistence via Ongoing Activity API; custom canvas shader rendering</td>
                    </tr>
                    <tr>
                      <td>Phone Service</td>
                      <td>Android (SDK 28+), Foreground Service</td>
                      <td><code>UsageStatsManager</code> delta polling; automatic timeout & session expiry reconciliation</td>
                    </tr>
                    <tr>
                      <td>IPC Bridge</td>
                      <td>Wearable Data Layer (MessageClient)</td>
                      <td>Sub-second low-latency message passing between watch & phone bluetooth/WiFi link</td>
                    </tr>
                    <tr>
                      <td>Galaxy Engine</td>
                      <td>Android Canvas 2D, Custom Touch Handler</td>
                      <td>Axial hex coordinate geometry, procedural spiral layout, fish-eye distortion on drag</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="arch-visual">
              <div className="watch-visual-container">
                <div className="watch-bezel">
                  <img src={activeWatchImg} alt="Watch Focus State" className="watch-display" />
                </div>
                <div className="watch-selector-row">
                  {watchProgression.map((item) => (
                    <button
                      key={item.step}
                      className={`watch-pill-btn ${activeWatchImg === item.src ? 'active' : ''}`}
                      onClick={() => setActiveWatchImg(item.src)}
                    >
                      <span className="pill-step">{item.step}</span>
                      <span className="pill-title">{item.title}</span>
                    </button>
                  ))}
                </div>
                <p className="watch-caption">
                  {watchProgression.find((w) => w.src === activeWatchImg)?.desc}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'canvas' && (
          <div className="canvas-deepdive">
            <div className="deepdive-col">
              <h3>Procedural Hex-Spiral Galaxy Canvas</h3>
              <p>
                When a user completes a focus session (20, 30, 40, or 60 minutes), the orb detonates into a supernova
                and condenses into a persistent star:
              </p>
              <ul className="custom-bullet-list">
                <li><strong>20 min:</strong> Small Star · <strong>30 min:</strong> Medium Star</li>
                <li><strong>40 min:</strong> Large Star · <strong>60 min:</strong> Epic Pulsing Star</li>
              </ul>
              <p>
                Rather than a standard flat list or calendar heat map, stars are indexed onto a custom <strong>hexagonal spiral grid</strong>.
                Each star computes its axial coordinate <code>(q, r, s)</code> on a ring-based expansion algorithm.
              </p>
              <div className="code-snippet-box">
                <div className="code-header">
                  <span className="code-lang">Kotlin · Hex Math</span>
                  <span className="code-file">HexGalaxyCanvas.kt</span>
                </div>
                <pre>
{`// Axial coordinates to screen space with fish-eye magnification
fun hexToPixel(q: Int, r: Int, radius: Float, center: Offset): Offset {
    val x = radius * (sqrt(3.0) * q + sqrt(3.0)/2.0 * r)
    val y = radius * (3.0/2.0 * r)
    val dist = hypot(x - focalX, y - focalY)
    val fishEyeScale = 1.0f + (magnification * exp(-dist / sigma))
    return Offset(center.x + x * fishEyeScale, center.y + y * fishEyeScale)
}`}
                </pre>
              </div>
            </div>

            <div className="deepdive-col">
              <div className="screen-frame">
                <div className="screen-topbar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="screen-title">FocusOrb — Galaxy Canvas & Phone Shield</span>
                </div>
                <img
                  src="images/focusorb/watch-galaxy.png"
                  alt="FocusOrb Star Galaxy Canvas"
                  className="screen-img galaxy-preview"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="screenshots-wall">
            <div className="wall-item">
              <img src="images/focusorb/hero.png" alt="FocusOrb Dual-Device Hero" />
              <span>Dual-Device System: Watch Orb & Phone Shield</span>
            </div>
            <div className="wall-item">
              <img src="images/focusorb/phone-dashboard.png" alt="Phone Dashboard" />
              <span>Session History & Weekly Analytics</span>
            </div>
            <div className="wall-item">
              <img src="images/focusorb/phone-picker.png" alt="App Picker" />
              <span>Searchable App Picker & One-Tap Blocklist</span>
            </div>
            <div className="wall-item">
              <img src="images/focusorb/watch-voyage.png" alt="Star Voyage" />
              <span>Star Voyage Animation into Hex Grid</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
