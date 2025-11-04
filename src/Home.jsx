import React, { useState, useMemo } from "react";
import "./site.css";

export default function Home() {
  const [tab, setTab] = useState("leadTypes");

  // Map a different background image per tab
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
      {/* HEADER */}
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
            className={tab === "leadTypes" ? "slm-tab active" : "slm-tab"}
            onClick={() => setTab("leadTypes")}
          >
            Lead Types
          </button>
          <button
            className={tab === "pricing" ? "slm-tab active" : "slm-tab"}
            onClick={() => setTab("pricing")}
          >
            Pricing
          </button>
          <button
            className={tab === "rules" ? "slm-tab active" : "slm-tab"}
            onClick={() => setTab("rules")}
          >
            Rules
          </button>
          <button
            className={tab === "contact" ? "slm-tab active" : "slm-tab"}
            onClick={() => setTab("contact")}
          >
            Get Leads Now
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Dominate Storm Markets. On-Demand.</h1>
          <p>
            Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast routing. 
            We get you on the roof in front of the owner. <strong>You close it.</strong>
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Get Leads Now
            </a>
            <a href="#pricing" className="btn-secondary">
              View Pricing
            </a>
            <a href="#leadtypes" className="btn-secondary">
              See Lead Types
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main>
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
            <img
              src="/tornado-damage.jpg"
              alt="Tornado/Hurricane damage"
              className="card-img"
            />
            <div className="card-body">
              <h3>Tornado / Hurricanes</h3>
              <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
            </div>
          </article>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="slm-footer">
        <p>
          © 2025 Storm Lead Machine —{" "}
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>{" "}
          — 833-9MACHIN
        </p>
      </footer>
    </div>
  );
}
