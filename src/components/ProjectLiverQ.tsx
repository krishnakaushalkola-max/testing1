import { useState } from 'react'

export function ProjectLiverQ() {
  const [activeTab, setActiveTab] = useState<'clinical' | 'quantum' | 'literature'>('clinical')

  return (
    <section id="liverq" className="project-section">
      <div className="project-header">
        <div className="project-badge-row">
          <span className="hud-tag">04 // QUANTUM ML & CLINICAL HEALTHCARE</span>
          <span className="release-pill">RVCE CSE EXPERIENTIAL LEARNING</span>
          <span className="license-pill">QISKIT · PENNYLANE · SHAP</span>
        </div>
        <div className="title-row">
          <div>
            <h2 className="project-title">LiverQ</h2>
            <p className="project-tagline">
              Explainable hybrid quantum-classical screening for early liver disease across a 3-stage clinical pathway.
            </p>
          </div>
          <div className="project-links">
            <span className="status-badge-inline">
              <span className="status-dot ok" /> ADVISOR: DR. MOHANA (RVCE CSE)
            </span>
          </div>
        </div>
      </div>

      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === 'clinical' ? 'active' : ''}`}
          onClick={() => setActiveTab('clinical')}
        >
          [01] 3-STAGE CLINICAL PATHWAY
        </button>
        <button
          className={`tab-btn ${activeTab === 'quantum' ? 'active' : ''}`}
          onClick={() => setActiveTab('quantum')}
        >
          [02] HYBRID QUANTUM-CLASSICAL (VQC)
        </button>
        <button
          className={`tab-btn ${activeTab === 'literature' ? 'active' : ''}`}
          onClick={() => setActiveTab('literature')}
        >
          [03] 28-PAPER LITERATURE BENCHMARK
        </button>
      </div>

      <div className="project-tab-content">
        {activeTab === 'clinical' && (
          <div className="architecture-grid">
            <div className="arch-text">
              <h3>Targeting the "Silent" Disease Before Permanent Damage</h3>
              <p>
                Liver disease causes over 2 million deaths globally every year. Because early stages are largely asymptomatic,
                patients typically discover damage only once irreversible cirrhosis sets in. Crucially, early hepatic inflammation
                and early fibrosis can be reversed if caught in routine checkups.
              </p>
              <p>
                Conventional ML models trained on blood tests optimize for raw accuracy, which leads to catastrophically low
                <strong>recall on minority sick classes</strong>—missing early-stage patients when intervention still works.
              </p>

              <div className="clinical-pathway-cards">
                <div className="stage-card">
                  <div className="stage-header">
                    <span className="stage-tag">STAGE 01</span>
                    <span className="stage-dataset">UCI ILPD Dataset (India, n=583)</span>
                  </div>
                  <h4>Routine Blood Screening</h4>
                  <p className="stage-q">"Does this patient exhibit early biochemical indicators of liver disease?"</p>
                  <div className="biomarker-pills">
                    <span>SGOT / AST</span>
                    <span>SGPT / ALT</span>
                    <span>Total Bilirubin</span>
                    <span>Direct Bilirubin</span>
                    <span>Albumin</span>
                    <span>A/G Ratio</span>
                  </div>
                </div>

                <div className="stage-card">
                  <div className="stage-header">
                    <span className="stage-tag">STAGE 02</span>
                    <span className="stage-dataset">UCI HCV (n=615) & LiveFbr (n=784)</span>
                  </div>
                  <h4>Disease Stage Discrimination</h4>
                  <p className="stage-q">"Is the pathology Hepatitis, Early Fibrosis (F0–F2), or Advanced Cirrhosis?"</p>
                  <p className="stage-note">
                    Distinguishes reversible hepatitis and intermediate fibrosis from irreversible end-stage cirrhosis
                    using expanded enzyme and platelet profiles.
                  </p>
                </div>

                <div className="stage-card">
                  <div className="stage-header">
                    <span className="stage-tag">STAGE 03</span>
                    <span className="stage-dataset">Ultrasound Cohort (n=6,323 images)</span>
                  </div>
                  <h4>Imaging Confirmation & Staging</h4>
                  <p className="stage-q">"Does abdominal ultrasound validate fibrosis staging (F0 to F4)?"</p>
                  <p className="stage-note">
                    Correlates non-invasive acoustic texture patterns with biopsy-verified pathology grades.
                  </p>
                </div>
              </div>
            </div>

            <div className="arch-visual">
              <div className="console-panel">
                <div className="console-header">
                  <span className="hud-tag">CLINICAL TELEMETRY // STAGE TRANSITION</span>
                </div>
                <div className="progression-diagram">
                  <div className="prog-step ok-border">
                    <span className="step-title">HEALTHY LIVER</span>
                    <span className="step-status">Baseline Biomarkers</span>
                  </div>
                  <div className="prog-arrow">↓ Viral / Metabolic Insult</div>
                  <div className="prog-step warn-border highlight-target">
                    <div className="target-badge">PRIMARY INTERVENTION ZONE</div>
                    <span className="step-title">HEPATITIS & EARLY FIBROSIS</span>
                    <span className="step-status">Reversible Damage · Low Sickness Symptoms</span>
                  </div>
                  <div className="prog-arrow">↓ Chronic Fibrogenesis</div>
                  <div className="prog-step bad-border">
                    <span className="step-title">CIRRHOSIS & END-STAGE</span>
                    <span className="step-status">Permanent Fibrotic Scarring</span>
                  </div>
                </div>
                <div className="explainability-box">
                  <span className="hud-tag">EXPLAINABILITY REQUIREMENT</span>
                  <p>
                    Every prediction outputs <strong>SHAP (Shapley Additive exPlanations)</strong> feature impact values,
                    ensuring attending physicians see exact enzyme contributions rather than black-box labels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quantum' && (
          <div className="quantum-grid">
            <div className="quantum-card">
              <h4>Variational Quantum Classifier (VQC)</h4>
              <p>
                Using parameterized quantum circuits (PQC) where classical LFT biomarker vectors are encoded via
                angle embedding into Hilbert state-space rotations.
              </p>
              <div className="quantum-spec">
                <span>SIMULATOR: Qiskit Aer / PennyLane</span>
                <span>CIRCUIT: Angle Encoding + Strongly Entangling Layers</span>
              </div>
            </div>
            <div className="quantum-card">
              <h4>Quantum Kernels & High-Order Feature Maps</h4>
              <p>
                Evaluating quantum support vector machines (QSVM) using ZZ-feature maps to test whether quantum entanglement
                discovers subtle non-linear biomarker correlations missed by standard linear SVMs.
              </p>
              <div className="quantum-spec">
                <span>TARGET: Minority Class Recall (Sensitivity)</span>
                <span>METRIC: Balanced F1 & Cost-Sensitive Loss</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'literature' && (
          <div className="lit-review-container">
            <h3>Systematic Analysis of 28 Clinical Papers</h3>
            <p>
              Before architecture finalization, our team surveyed 28 peer-reviewed clinical ML studies spanning
              2018–2025 across PubMed, IEEE Xplore, and ScienceDirect to pinpoint historical failure modes.
            </p>
            <div className="lit-stats-row">
              <div className="lit-stat">
                <span className="num">28</span>
                <span className="lbl">Papers Cataloged</span>
              </div>
              <div className="lit-stat">
                <span className="num">71%</span>
                <span className="lbl">Suffered Class Imbalance Bias</span>
              </div>
              <div className="lit-stat">
                <span className="num">14%</span>
                <span className="lbl">Provided Clinical Explainability</span>
              </div>
              <div className="lit-stat">
                <span className="num">0</span>
                <span className="lbl">Combined Blood + Imaging in Public Repos</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
