import { useState } from 'react'

export function ProjectDDSW() {
  const [activeTab, setActiveTab] = useState<'paper' | 'data' | 'findings'>('paper')

  return (
    <section id="ddsw" className="project-section">
      <div className="project-header">
        <div className="project-badge-row">
          <span className="hud-tag">03 // SEMICONDUCTOR CV & APPLIED RESEARCH</span>
          <span className="release-pill">KLA HACKATHON · SCOPUS TARGET</span>
          <span className="license-pill">PYTORCH · DINOV2/V3 · NAFNET</span>
        </div>
        <div className="title-row">
          <div>
            <h2 className="project-title">Defect Detection in Silicon Wafers</h2>
            <p className="project-tagline">
              Evaluating frozen vision foundation features against task-specific CNNs and NAFNet restoration for semiconductor inspection.
            </p>
          </div>
          <div className="project-links">
            <span className="status-badge-inline">
              <span className="status-dot ok" /> PEER-REVIEWED MANUSCRIPT
            </span>
          </div>
        </div>
      </div>

      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === 'paper' ? 'active' : ''}`}
          onClick={() => setActiveTab('paper')}
        >
          [01] RESEARCH CONTEXT & PIPELINE
        </button>
        <button
          className={`tab-btn ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
        >
          [02] FAB DATASET & RESTORATION
        </button>
        <button
          className={`tab-btn ${activeTab === 'findings' ? 'active' : ''}`}
          onClick={() => setActiveTab('findings')}
        >
          [03] BENCHMARKS & CROSS-WAFER TRANSFER
        </button>
      </div>

      <div className="project-tab-content">
        {activeTab === 'paper' && (
          <div className="architecture-grid">
            <div className="arch-text">
              <div className="paper-authors-block">
                <span className="hud-tag">AUTHORS & AFFILIATIONS</span>
                <p className="authors-list">
                  <strong>Aarush Singh</strong> (ECE, RVCE) · <strong>Kushal M R</strong> (CSE, RVCE) ·{' '}
                  <strong>Dr. Kavya K. Nayak</strong> (Physics, RVCE) · <strong>Yashwanth R K</strong> (ECE, RVCE)
                </p>
                <span className="venue-meta">Prepared for IEEE / Scopus Conference · Derived from KLA Problem Statement</span>
              </div>

              <h3>The Cleanroom Defect Dilemma</h3>
              <p>
                Semiconductor defect inspection is among the most challenging computer vision domains: cleanroom fab access is
                strictly controlled, micro-defects are physically tiny (often sub-micron), and labelled training sets are
                extraordinarily expensive to procure.
              </p>
              <p>
                This paper addresses a fundamental engineering question: <em>Can frozen, self-supervised vision foundation
                representations (DINOv2 / DINOv3) enable rapid, accurate surface defect classification on low-cost dark-field
                optical microscopes, outperforming task-specific CNNs under severe data scarcity?</em>
              </p>

              <div className="pipeline-steps">
                <div className="pipeline-box">
                  <span className="p-num">STEP 1</span>
                  <span className="p-title">Dark-Field Acquisition</span>
                  <span className="p-desc">69 high-res microscope optical captures across 3 distinct production wafers</span>
                </div>
                <div className="pipeline-arrow">→</div>
                <div className="pipeline-box">
                  <span className="p-num">STEP 2</span>
                  <span className="p-title">NAFNet Restoration</span>
                  <span className="p-desc">Nonlinear Activation Free Network enhances edge contrast & denoises diffraction grain</span>
                </div>
                <div className="pipeline-arrow">→</div>
                <div className="pipeline-box highlight">
                  <span className="p-num">STEP 3</span>
                  <span className="p-title">Frozen Feature Extractor</span>
                  <span className="p-desc">DINOv2/v3 ViT representations vs custom convolutional architectures</span>
                </div>
                <div className="pipeline-arrow">→</div>
                <div className="pipeline-box">
                  <span className="p-num">STEP 4</span>
                  <span className="p-title">Cross-Wafer Eval</span>
                  <span className="p-desc">Rigorous few-shot evaluation across unseen wafer manufacturing runs</span>
                </div>
              </div>
            </div>

            <div className="arch-visual">
              <div className="screen-frame">
                <div className="screen-topbar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="screen-title">Dark-Field Optical Microscope Capture (Wafer 1)</span>
                </div>
                <img
                  src="/images/ddsw/wafer-sample.jpg"
                  alt="Patterned silicon wafer under dark-field microscopy"
                  className="screen-img microscope-img"
                />
                <div className="visual-caption">
                  High-magnification dark-field optical capture displaying semiconductor surface pattern and localized micro-defects.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="data-breakdown-grid">
            <div className="data-card">
              <div className="data-metric">69</div>
              <div className="data-title">Full Microscope Images</div>
              <p>Acquired from three independent wafer fabrication batches: Wafer 1 (29), Wafer 2 (21), Wafer 3 (19).</p>
            </div>
            <div className="data-card">
              <div className="data-metric">2,855</div>
              <div className="data-title">Annotated Micro-Patches</div>
              <p>Precise sub-aperture patches isolated across defective and non-defective patterned die surfaces.</p>
            </div>
            <div className="data-card">
              <div className="data-metric">NAFNet</div>
              <div className="data-title">Optical Restoration Engine</div>
              <p>Zero-activation-function image restoration architecture preserving delicate sub-micron edge gradients.</p>
            </div>
            <div className="data-card">
              <div className="data-metric">100%</div>
              <div className="data-title">Cross-Wafer Validation</div>
              <p>Validation performed strictly on held-out wafers to verify immunity to fabrication-run batch bias.</p>
            </div>
          </div>
        )}

        {activeTab === 'findings' && (
          <div className="findings-container">
            <h3>Key Empirical Discoveries</h3>
            <div className="findings-table-wrapper">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>REGIME</th>
                    <th>FROZEN FOUNDATION (DINOv2/v3)</th>
                    <th>TASK-SPECIFIC CNN</th>
                    <th>CONCLUSION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ultra Few-Shot (5 shots/class)</td>
                    <td className="ok-cell">High Macro-F1 (&gt;88%)</td>
                    <td className="bad-cell">Severe Overfitting (&lt;62%)</td>
                    <td>Foundation representations generalize immediately from general visual priors.</td>
                  </tr>
                  <tr>
                    <td>Low-Shot (20 shots/class)</td>
                    <td className="ok-cell">Rapid convergence, stable F1</td>
                    <td className="warn-cell">Begins generalizing (~78%)</td>
                    <td>DINO provides dramatic compute and sample efficiency advantages in early fab ramp.</td>
                  </tr>
                  <tr>
                    <td>Cross-Wafer Transfer</td>
                    <td className="ok-cell">Robust across lighting/tint shifts</td>
                    <td className="warn-cell">Degrades without domain adaptation</td>
                    <td>Self-supervised features encode invariant structural geometry rather than wafer-specific tint.</td>
                  </tr>
                  <tr>
                    <td>Restoration Benefit</td>
                    <td className="ok-cell">+4.2% F1 boost post-NAFNet</td>
                    <td className="ok-cell">+6.8% F1 boost post-NAFNet</td>
                    <td>NAFNet dark-field restoration provides consistent gains across all downstream models.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
