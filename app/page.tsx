'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import './landing.css'

export default function Home() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/analyze?ticker=${encodeURIComponent(query.trim())}`)
    }
  }

  const quickSearch = (ticker: string) => {
    router.push(`/analyze?ticker=${encodeURIComponent(ticker)}`)
  }

  return (
    <div style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>

      {/* ═══ NAV ═══ */}
      <nav className="verdict-nav" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
        <a href="#" className="nav-logo">
          <div className="logo-mark" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>V</div>
          <span className="logo-text">Verdict</span>
        </a>
        <div className="nav-actions">
          <a href="#" className="btn-ghost">Login</a>
          <a href="#" className="btn-primary-landing">Request Access</a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-center">
          <div className="hero-label" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
            Institutional Research Platform
          </div>
          <h1 className="hero-headline" style={{ fontFamily: 'var(--font-headline), Georgia, serif' }}>
            A week of analysis.<br />
            <em>In minutes.</em>
          </h1>
          <p className="hero-sub">
            Investment banking frameworks and management consulting methodology applied automatically.<br />
            Built for analysts who need to think, not format.
          </p>
          <form onSubmit={handleSearch}>
            <div className="search-container">
              <span className="search-prefix" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>$&gt;</span>
              <input
                type="text"
                className="search-input-landing"
                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}
                placeholder="TICKER, ENTITY, OR ISIN..."
                value={query}
                onChange={(e) => setQuery(e.target.value.toUpperCase())}
              />
              <button type="submit" className="search-btn-landing" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                Analyze
              </button>
            </div>
          </form>
          <p className="search-hint" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
            Try{' '}
            <span onClick={() => quickSearch('TITAN')}>TITAN</span> ·{' '}
            <span onClick={() => quickSearch('RELIANCE')}>RELIANCE</span> ·{' '}
            <span onClick={() => quickSearch('HDFC')}>HDFC</span>
          </p>
          <div className="hero-stats" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
            <div className="stat">
              <span className="stat-num" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>7</span>
              <span className="stat-label">IB Frameworks</span>
            </div>
            <div className="stat">
              <span className="stat-num" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>8</span>
              <span className="stat-label">MC Frameworks</span>
            </div>
            <div className="stat">
              <span className="stat-num" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>5yr</span>
              <span className="stat-label">Financial Depth</span>
            </div>
            <div className="stat">
              <span className="stat-num" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>Live</span>
              <span className="stat-label">Market Data</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DUAL LENS ═══ */}
      <section className="landing-section">
        <div className="section-inner">
          <div className="section-label" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Dual-Lens Intelligence</div>
          <div className="dual-lens">
            <div className="lens-card">
              <div className="lens-num" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>01</div>
              <h3 className="lens-title" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>Investment Banking</h3>
              <p className="lens-body">
                Quality of earnings, capital structure stress testing, DuPont decomposition, variant perception — the frameworks an IB analyst runs before every IC meeting.
              </p>
              <div className="lens-tags" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                <span>Accruals</span>
                <span>Debt Capacity</span>
                <span>Stress Test</span>
                <span>Peer Bench</span>
              </div>
            </div>
            <div className="lens-divider" />
            <div className="lens-card">
              <div className="lens-num" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>02</div>
              <h3 className="lens-title" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>Management Consulting</h3>
              <p className="lens-body">
                Porter&apos;s Five Forces, Full Potential Gap, Three Horizons, MECE issue trees — the McKinsey and Bain frameworks that answer what IB analysis cannot.
              </p>
              <div className="lens-tags" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                <span>Five Forces</span>
                <span>Full Potential</span>
                <span>Value Chain</span>
                <span>Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FRAMEWORKS ═══ */}
      <section className="landing-section section-dark">
        <div className="section-inner">
          <div className="section-label" style={{ fontFamily: 'var(--font-ibm-mono), monospace', color: 'rgba(245,243,238,0.4)' }}>15 Analytical Frameworks</div>
          <div className="frameworks-grid">
            <div className="fw-col">
              <div className="fw-col-header" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Investment Banking</div>
              {[
                'Quality of Earnings',
                'Capital Structure & Debt Capacity',
                'Returns Analysis (DuPont)',
                'Variant Perception',
                'Peer Benchmarking',
                'Stress Testing',
                'Management Questions',
              ].map((fw, i) => (
                <div key={i} className="fw-row">
                  <span className="fw-num" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="fw-name">{fw}</span>
                </div>
              ))}
            </div>
            <div className="fw-col">
              <div className="fw-col-header" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Management Consulting</div>
              {[
                'MECE Problem Definition',
                "Porter's Five Forces",
                'Competitive Position',
                'Value Chain Analysis',
                'Full Potential Gap (Bain)',
                'Three Horizons (McKinsey)',
                'Strategic Options',
                'Board Recommendation (SCR)',
              ].map((fw, i) => (
                <div key={i} className="fw-row">
                  <span className="fw-num" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="fw-name">{fw}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="landing-section">
        <div className="section-inner">
          <div className="section-label" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>How It Works</div>
          <div className="workflow-steps">
            {[
              { n: '01', title: 'Input', desc: 'Enter any NSE/BSE ticker, company name, or ISIN.' },
              { n: '02', title: 'Data Pull', desc: '5 years of financial statements — income, balance sheet, cash flow.' },
              { n: '03', title: 'Intelligence', desc: 'Market data, competitor performance, sector trends overlaid.' },
              { n: '04', title: 'Audit', desc: 'Cross-statement reconciliation. Anomaly detection. Quality flags.' },
              { n: '05', title: 'Output', desc: 'IC-ready dual memo — IB and MC analysis for immediate use.' },
            ].map((step, i) => (
              <div key={i} className="wf-step">
                <span className="wf-num" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{step.n}</span>
                <div>
                  <div className="wf-title">{step.title}</div>
                  <p className="wf-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="landing-footer" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-mark" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>V</div>
            <p>Institutional-grade financial intelligence for investment banking and management consulting professionals.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>Intelligence Terminal</li>
                <li>IB Analysis</li>
                <li>MC Assessment</li>
                <li>API Access</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Coverage</h4>
              <ul>
                <li>NSE / BSE</li>
                <li>Global Equities</li>
                <li>Sector Reports</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Institutional</h4>
              <ul>
                <li>Enterprise Access</li>
                <li>Team Licensing</li>
                <li>Custom Coverage</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Verdict Intelligence. All rights reserved.</p>
          <p>For institutional and professional use only. Not investment advice.</p>
        </div>
      </footer>
    </div>
  )
}
