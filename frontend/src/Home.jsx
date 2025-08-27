import "./home.css"
import { NavLink } from 'react-router-dom';
import { motion } from "motion/react"

export default function HomePage() {
  return (
    <div className="home">
    {/* Hero Section */}
    <section className="hero-section">
        <div className="hero-content">
            <div className="badge">
                <svg className="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                    />
                </svg>
                Fighter Database
            </div>

            <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                UFC:
                <br />
                InsightBREAKDOWN
            </motion.h1>

            <p className="hero-subtitle">Get in Depth with our detailed database.</p>

            <NavLink to="/name">
                <button className="cta-button">
                    Get Started
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </NavLink>
        </div>
    </section>

    {/* Search Capabilities */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-header">
            <motion.h2 className="search-title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            
            >Search Fighters by</motion.h2>
            <p className="search-description">Find any UFC fighter using our comprehensive search parameters</p>
          </div>

          <div className="search-grid">
            <div className="search-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="card-title">Name</h3>
              <p className="card-description">Search fighters by their name</p>
              <code className="code-snippet">GET /fighter?name=Conor</code>
            </div>

            <div className="search-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="card-title">Weight</h3>
              <p className="card-description">Find fighters by weight class</p>
              <code className="code-snippet">GET /fighter?weight=170</code>
            </div>

            <div className="search-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="card-title">Height</h3>
              <p className="card-description">Search by fighter height</p>
              <code className="code-snippet">GET /fighter?height=5' 9</code>
            </div>

            <div className="search-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="card-title">Date of Birth</h3>
              <p className="card-description">Find fighters by birth date</p>
              <code className="code-snippet">GET /fighter?dob=apr 07</code>
            </div>

            <div className="search-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="card-title">Stance</h3>
              <p className="card-description">Search by fighting stance</p>
              <code className="code-snippet">GET /fighter?stance=orthodox</code>
            </div>

            <div className="search-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="card-title">All Fighters</h3>
              <p className="card-description">Retrieve complete fighter database</p>
              <code className="code-snippet">GET /fighter</code>
            </div>
          </div>
        </div>
      </section>

    {/* CTA Section */}
    <section className="cta-section">
        <div className="cta-container">
            <motion.h2
                className="cta-title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Start Searching Now
            </motion.h2>
            <p className="cta-description">
                Access our comprehensive UFC fighter database with powerful search capabilities
            </p>
            <a target="_blank" href="https://github.com/Greco1899/scrape_ufc_stats">
                <button className="cta-button">
                    Explore Database
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </a>
        </div>
    </section>

    {/* Footer */}}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg className="footer-logo-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="footer-brand-text">UFC: Insight</span>
          </div>
          <p className="footer-text">© 2025 UFC: Insight. Your comprehensive fighter database.</p>
        </div>
      </footer>
    </div>
  )
}
