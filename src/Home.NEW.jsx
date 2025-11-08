import React, { useMemo, useState } from "react";


const HAIL_IMG =
  "https://images.unsplash.com/photo-1611902197736-68d9a9086f2b?q=80&w=1600&auto=format&fit=crop"; // hail on shingles

const WIND_IMG =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"; // damaged roof/wind

const TORNADO_IMG =
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop"; // tornado/supercell

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");

  // Cloudy sky backgrounds per tab (also hosted)
  const bgUrl = useMemo(() => {
    const map = {
      "Lead Types":
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1920&auto=format&fit=crop",
      Pricing:
        "https://images.unsplash.com/photo-1499346030926-9a72daac6c3a?q=80&w=1920&auto=format&fit=crop",
      Rules:
        "https://images.unsplash.com/photo-1504384308090-c894fac6938d?q=80&w=1920&auto=format&fit=crop",
      Contact:
        "https://images.unsplash.com/photo-154231483481-068cdd1eebef?q=80&w=1920&auto=format&fit=crop",
    };
    return map[active];
  }, [active]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url("${bgUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className={`site-header ${active === "Lead Types" ? "home" : ""}`}>
        <div className="brand">
          <span className="brand_logo" aria-hidden="true">⚡</span>
          <span className="brand_title">Storm Lead Machine</span>
        </div>

        <nav className="nav">
          {TABS.map((t) => (
            <button
              key={t}
              className={`nav_btn ${t === active ? "is-active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
          <a className="cta" href="#pricingTop">Get Leads Now</a>
        </nav>
      </header>

      {active === "Lead Types" && <LeadTypes />}
      {active === "Pricing" && <Pricing />}
      {active === "Rules" && <Rules />}
      {active === "Contact" && <Contact />}
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Storm Lead Machine. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ---------- Sections ---------- */

function LeadTypes() {
  return (
    <section className="section">
      <h2>Storm Lead Types</h2>
      <p className="muted">Target exactly where you want to sell.</p>

      <div className="cards">
        <Card img={HAIL_IMG} title="Hail"
              text="Targeted hail zones by ZIP with roof-age filters." />
        <Card img={WIND_IMG} title="Wind"
              text="Fresh wind swaths with high-intent homeowners." />
        <Card img={TORNADO_IMG} title="Tornado / Hurricanes"
              text="ZIP-precise disaster coverage for fast deployment and scale." />
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricingTop">
      <h2>Pricing</h2>

      <div className="pricing">
        <div className="col">
          <h3>Residential Leads</h3>
          <ul>
            <li>25 leads — $120/lead — $3,000</li>
            <li>50 leads — $115/lead — $5,750</li>
            <li>100 leads — $110/lead — $11,000</li>
            <li>200 leads — $105/lead — $21,000</li>
          </ul>
        </div>
        <div className="col">
          <h3>Commercial Leads</h3>
          <ul>
            <li>5 leads — $300/lead — $1,500</li>
            <li>20 leads — $290/lead — $5,800</li>
            <li>30 leads — $285/lead — $8,550</li>
            <li>50 leads — $275/lead — $13,750</li>
          </ul>
        </div>
      </div>

      <div className="filters">
        <p><strong>Filters</strong></p>
        <ul>
          <li>5+ yr old roofs only — +$10/lead</li>
          <li>8+ yr old roofs only — +$25/lead</li>
        </ul>
      </div>
    </section>
  );
}

function Rules() {
  return (
    <section className="section">
      <h2>Rules</h2>
      <ul className="rules">
        <li>Do not call the leads ahead of time before you go.</li>
        <li>Bad leads must be returned within 2 days to receive credit.</li>
        <li>If not returned in 2 days, we automatically give 20% extra leads to help make up for bad ones.</li>
        <li>We get you on the roof in front of the owner in the ZIP codes you want; you close it from there.</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>
      <p>Phone: 833-9MACHIN (622-446)</p>
      <p>Email: stormleadmachine@gmail.com</p>
    </section>
  );
}

/* ---------- Small Card component ---------- */
function Card({ img, title, text }) {
  return (
    <article className="card">
      <img className="card_img" src={img} alt={title} loading="lazy" />
      <div className="card_body">
        <h3>{title}</h3>
        <p className="muted">{text}</p>
      </div>
    </article>
  );
}

