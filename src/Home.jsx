import React, { useMemo, useState } from "react";
import "./site.css";


export default function Home() {
  const [tab, setTab] = useState("leadTypes");

  // Public-root images: /sky1.jpg ... /sky5.jpg
  const bgMap = useMemo(
    () => ({
      leadTypes: "/sky1.jpg",
      pricing: "/sky2.jpg",
      rules: "/sky3.jpg",
      contact: "/sky4.jpg",
    }),
    []
  );
  const bgUrl = bgMap[tab] || "/sky5.jpg";

  return (
    <div className="slm-page" style={{ backgroundImage: `url(${bgUrl})` }}>
      {/* Header */}
      <header className="slm-header">
        <div className="slm-header-left">
          <img
            src="/Storm%20Lead%20Machine%20Logo.png"
            alt="Storm Lead Machine"
            className="slm-logo"
          />
          <span className="slm-brand">Storm Lead Machine</span>
        </div>

        <nav className="slm-nav">
          <button
            className={`slm-tab ${tab === "leadTypes" ? "active" : ""}`}
            onClick={() => setTab("leadTypes")}
          >
            Lead Types
          </button>
          <button
            className={`slm-tab ${tab === "pricing" ? "active" : ""}`}
            onClick={() => setTab("pricing")}
          >
            Pricing
          </button>
          <button
            className={`slm-tab ${tab === "rules" ? "active" : ""}`}
            onClick={() => setTab("rules")}
          >
            Rules
          </button>
          <button
            className={`slm-tab ${tab === "contact" ? "active" : ""}`}
            onClick={() => setTab("contact")}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="slm-hero">
        <h1>Dominate Storm Markets. On-Demand.</h1>
        <p>
          Exclusive storm leads where you want them — targeted by ZIP, roof-age
          filters, and fast routing. We get you on the roof in front of the
          owner. <strong>You close it.</strong>
        </p>
        <div className="slm-hero-ctas">
          <a className="slm-cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
            Get Leads Now
          </a>
          <button className="slm-ghost" onClick={() => setTab("pricing")}>
            View Pricing
          </button>
          <button className="slm-ghost" onClick={() => setTab("leadTypes")}>
            See Lead Types
          </button>
        </div>
        <div className="slm-ribbon">
          We automatically over-deliver by <strong>+20%</strong> on every order to cover returns/replacements.
        </div>
      </section>

      {/* Lead Types cards (kept same content) */}
      <main className="slm-content">
        <section className="grid-cards">
          <article className="card">
            <img src="/hail-damage.jpg" alt="Hail damage" className="card-img" />
            <div className="card-body">
              <h3>Hail</h3>
              <p>Targeted hail zones by ZIP with roof-age filters.</p>
            </div>
          </article>

          <article className="card">
            <img src="/wind-damage.jpg" alt="Wind damage" className="card-img" />
            <div className="card-body">
              <h3>Wind</h3>
              <p>Fresh wind swaths with high-intent homeowners.</p>
            </div>
          </article>

          <article className="card">
            <img src="/tornado-damage.jpg" alt="Tornado/Hurricane damage" className="card-img" />
            <div className="card-body">
              <h3>Tornado / Hurricanes</h3>
              <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
            </div>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="slm-footer">
        <div>© {new Date().getFullYear()} Storm Lead Machine</div>
        <div>
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
          {"  ·  "}
          <a href="tel:+183369622446">833-9MACHIN (622446)</a>
        </div>
      </footer>
    </div>
  );
}
