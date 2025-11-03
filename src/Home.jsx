import React, { useState } from "react";
import "./site.css";

// === Image imports (keep these names; just drop files in src/assets) ===
import roofBg from "./assets/roof-bg.jpg";              // hero background (shingles)
import hailImg from "./assets/hail.jpg";                // hail card photo
import windImg from "./assets/wind.jpg";                // wind card photo
import tornadoImg from "./assets/tornado.jpg";          // tornado/hurricane card photo
import logo from "./assets/storm-lead-machine-logo.png";// your logo (renders at 2 inches)

// If you prefer using the public folder instead, comment the imports above and use:
// const roofBg = "/images/roof-bg.jpg";
// const hailImg = "/images/hail.jpg";
// const windImg = "/images/wind.jpg";
// const tornadoImg = "/images/tornado.jpg";
// const logo = "/images/storm-lead-machine-logo.png";

export default function Home() {
  const [tab, setTab] = useState("leadTypes");

  return (
    <div className="slm-page" style={{ backgroundImage: `url(${roofBg})` }}>
      {/* Top Nav / Header */}
      <header className="slm-header">
        <div className="slm-header-left">
          <img src={logo} alt="Storm Lead Machine" className="slm-logo" />
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
          <a
            className="slm-cta sm-hide"
            href="https://square.link/u/RSfgAZHS"
            target="_blank"
            rel="noreferrer"
          >
            Get Leads Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="slm-hero">
        <h1>Dominate Storm Markets. On-Demand.</h1>
        <p>
          Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast routing.
          We get you on the roof in front of the owner. <strong>You close it.</strong>
        </p>
        <div className="slm-hero-ctas">
          <a className="slm-cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
            Get Leads Now
          </a>
          <button className="slm-ghost" onClick={() => setTab("pricing")}>View Pricing</button>
          <button className="slm-ghost" onClick={() => setTab("leadTypes")}>See Lead Types</button>
        </div>

        {/* 20% over-delivery ribbon */}
        <div className="slm-ribbon">
          We automatically over-deliver by <strong>+20%</strong> on every order to cover returns/replacements.
        </div>
      </section>

      {/* Content Switcher */}
      <main className="slm-content">
        {tab === "leadTypes" && <LeadTypes />}
        {tab === "pricing" && <Pricing />}
        {tab === "rules" && <Rules />}
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

function LeadTypes() {
  return (
    <section className="grid-cards">
      {/* Hail */}
      <article className="card">
        <img src={hailImg} alt="Hail damage" className="card-img" />
        <div className="card-body">
          <h3>Hail</h3>
          <p>Targeted hail zones by ZIP with roof-age filters.</p>
        </div>
      </article>

      {/* Wind */}
      <article className="card">
        <img src={windImg} alt="Wind damage" className="card-img" />
        <div className="card-body">
          <h3>Wind</h3>
          <p>Fresh wind swaths with high-intent homeowners.</p>
        </div>
      </article>

      {/* Tornado / Hurricanes */}
      <article className="card">
        <img src={tornadoImg} alt="Tornado and hurricane damage" className="card-img" />
        <div className="card-body">
          <h3>Tornado / Hurricanes</h3>
          <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
        </div>
      </article>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing">
      <h2>Residential Leads</h2>
      <div className="price-grid">
        <PriceCard qty="25" price="$120" total="$3,000" />
        <PriceCard qty="50" price="$115" total="$5,750" />
        <PriceCard qty="100" price="$110" total="$11,000" />
        <PriceCard qty="200" price="$105" total="$21,000" />
      </div>

      <h2>Commercial Leads</h2>
      <div className="price-grid">
        <PriceCard qty="5" price="$300" total="$1,500" />
        <PriceCard qty="20" price="$290" total="$5,800" />
        <PriceCard qty="30" price="$285" total="$8,550" />
        <PriceCard qty="50" price="$275" total="$13,750" />
      </div>

      <h2>Filters</h2>
      <ul className="filters">
        <li>5+ yr old roofs: <strong>+ $10</strong> per lead</li>
        <li>8+ yr old roofs: <strong>+ $25</strong> per lead</li>
      </ul>

      <div className="pricing-cta">
        <a className="slm-cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
          Get Leads Now
        </a>
      </div>
    </section>
  );
}

function PriceCard({ qty, price, total }) {
  return (
    <div className="price-card">
      <div className="price-qty">{qty} Leads</div>
      <div className="price-each">{price} / lead</div>
      <div className="price-total">{total}</div>
    </div>
  );
}

function Rules() {
  return (
    <section className="rules">
      <h2>Rules to Run the Appointments</h2>
      <ol>
        <li><strong>Do not call leads ahead of time</strong> before you go.</li>
        <li><strong>Bad leads must be returned within 2 days.</strong></li>
        <li>We get you on the roof in the ZIPs you choose. <strong>You close it.</strong></li>
        <li>Every order includes an automatic <strong>+20% over-delivery</strong> to cover returns.</li>
      </ol>
    </section>
  );
}
