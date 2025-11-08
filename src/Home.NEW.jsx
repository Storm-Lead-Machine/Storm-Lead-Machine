// src/Home.NEW.jsx
import React, { useMemo, useState } from "react";

/* Card images — hosted (no local imports) */
const HAIL_IMG =
  "https://images.unsplash.com/photo-1611902197736-d8a9b986f2fb?q=80&w=1600&auto=format&fit=crop";       // hail on shingles
const WIND_IMG =
  "https://images.unsplash.com/photo-1508434380890-c894fcc6538d?q=80&w=1600&auto=format&fit=crop";      // wind-stressed roof/siding vibe
const TORNADO_IMG =
  "https://images.unsplash.com/photo-1465447124348-e9952c393450?q=80&w=1600&auto=format&fit=crop";      // tornado/supercell

/* Sky backgrounds per tab — also hosted */
const SKY_BG = {
  "Lead Types":
    "https://images.unsplash.com/photo-1508835054689-7d0f58a0d6d0?q=80&w=1920&auto=format&fit=crop",
  Pricing:
    "https://images.unsplash.com/photo-1499346030926-9a72daac663c?q=80&w=1920&auto=format&fit=crop",
  Rules:
    "https://images.unsplash.com/photo-1504384308090-c894fcc6538d?q=80&w=1920&auto=format&fit=crop",
  Contact:
    "https://images.unsplash.com/photo-154231483481-068cd1deebfe?q=80&w=1920&auto=format&fit=crop",
};

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");
  const bgUrl = useMemo(() => SKY_BG[active], [active]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className={`site-header ${active === "Lead Types" ? "site-header--home" : ""}`}>
        <div className="container">
          <div className="brand">Storm Lead Machine</div>
          <nav className="nav">
            {TABS.map((t) => (
              <button
                key={t}
                className={`pill ${t === active ? "is-active" : ""}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
            <a className="cta" href="#get-leads">Get Leads Now</a>
          </nav>
        </div>
      </header>

      {active === "Lead Types" && <LeadTypes />}
      {active === "Pricing" && <Pricing />}
      {active === "Rules" && <Rules />}
      {active === "Contact" && <Contact />}

      <footer className="site-footer">
        © {new Date().getFullYear()} Storm Lead Machine. All rights reserved.
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
        {/* Hail */}
        <Card
          img={HAIL_IMG}
          title="Hail"
          text="Targeted hail zones by ZIP with roof-age filters."
        />

        {/* Wind */}
        <Card
          img={WIND_IMG}
          title="Wind"
          text="Fresh wind swaths with high-intent homeowners."
        />

        {/* Tornado / Hurricanes */}
        <Card
          img={TORNADO_IMG}
          title="Tornado / Hurricanes"
          text="ZIP-precise disaster coverage for fast deployment and scale."
        />
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-grid">
        <div className="price-card">
          <h3>Residential</h3>
          <ul>
            <li>25 leads — $120/lead — $3,000</li>
            <li>50 leads — $115/lead — $5,750</li>
            <li>100 leads — $110/lead — $11,000</li>
            <li>200 leads — $105/lead — $21,000</li>
          </ul>
          <p className="muted">Roof-age filters: +$10 (5+ yrs), +$25 (8+ yrs)</p>
        </div>
        <div className="price-card">
          <h3>Commercial</h3>
          <ul>
            <li>5 leads — $300/lead — $1,500</li>
            <li>20 leads — $290/lead — $5,800</li>
            <li>30 leads — $285/lead — $8,550</li>
            <li>50 leads — $275/lead — $13,750</li>
          </ul>
        </div>
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
        <li>
          Bad leads must be returned within <strong>2 days</strong>. Otherwise, we
          automatically give <strong>20% extra</strong> to help make up for bad leads.
        </li>
        <li>We get you on the roof in the ZIP codes you want—you close it.</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>
      <p>
        Phone: <strong>833-9MACHIN (622-446)</strong> &nbsp;•&nbsp; Email:{" "}
        <strong>stormleadmachine@gmail.com</strong>
      </p>
    </section>
  );
}

/* ---------- Reusable ---------- */

function Card({ img, title, text }) {
  return (
    <div className="card">
      <img
        src={img}
        alt={title}
        className="card-img"
        loading="lazy"
        width="1280"
        height="720"
      />
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{text}</p>
      </div>
    </div>
  );
}
