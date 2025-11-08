import React from "react";

/* === Hosted storm-damage photos (royalty-free Unsplash) === */
const HAIL_IMG =
  "https://images.unsplash.com/photo-1611092189773-1fcb44c0e28a?q=80&w=1600&auto=format&fit=crop";       // hail dents / damage
const WIND_IMG =
  "https://images.unsplash.com/photo-1501185945330-c5b2b8280c49?q=80&w=1600&auto=format&fit=crop";       // wind-damaged roof/siding vibe
const TORNADO_IMG =
  "https://images.unsplash.com/photo-1478826160983-e6db8fa0df3a?q=80&w=1600&auto=format&fit=crop";       // tornado / supercell skyline

export default function Home() {
  return (
    <div className="app">
      {/* ===== Header (appears on every tab/anchor) ===== */}
      <header className="site-header">
        <div className="brand">
          {/* Your file already lives at /public or /src root as named below */}
          <img
            src="/Storm Lead Machine Logo.png"
            alt="Storm Lead Machine Logo"
          />
          <div className="site-title">Storm Lead Machine</div>
        </div>

        <nav className="site-nav">
          <a href="#lead-types">Lead Types</a>
          <a href="#pricing">Pricing</a>
          <a href="#rules">Rules</a>
          <a href="#contact">Contact</a>
          <a className="cta" href="#get-leads">Get Leads Now</a>
        </nav>
      </header>

      {/* ===== Hero (keeps your cloudy vibe) ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dominate Storm Markets. On Demand.</h1>
          <p>
            Exclusive storm leads where you want them — targeted by ZIP, roof-age filters,
            and fast routing. We get you on the roof in front of the owner. <strong>You close it.</strong>
          </p>
          <div className="hero-actions">
            <a className="cta" href="#get-leads">Get Leads Now</a>
            <a className="ghost" href="#pricing">View Pricing</a>
            <a className="ghost" href="#lead-types">See Lead Types</a>
          </div>
        </div>
      </section>

      {/* ===== Lead Types ===== */}
      <section id="lead-types" className="lead-types section">
        <div className="section-head">
          <h2>Storm Lead Types</h2>
          <p>Target exactly where you want to sell.</p>
        </div>

        <div className="grid">
          {/* Hail */}
          <article className="lead-card">
            <img src={HAIL_IMG} alt="Hail damage" className="card-photo" />
            <div className="card-body">
              <h3>Hail</h3>
              <p>Targeted hail zones by ZIP with roof-age filters.</p>
            </div>
          </article>

          {/* Wind */}
          <article className="lead-card">
            <img src={WIND_IMG} alt="Wind damage" className="card-photo" />
            <div className="card-body">
              <h3>Wind</h3>
              <p>Fresh wind swaths with high-intent homeowners.</p>
            </div>
          </article>

          {/* Tornado / Hurricanes */}
          <article className="lead-card">
            <img
              src={TORNADO_IMG}
              alt="Tornado / hurricane damage"
              className="card-photo"
            />
            <div className="card-body">
              <h3>Tornado / Hurricanes</h3>
              <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== Pricing (placeholder keeps anchors working) ===== */}
      <section id="pricing" className="section">
        <div className="section-head">
          <h2>Pricing</h2>
          <p>Your existing pricing block can live here.</p>
        </div>
      </section>

      {/* ===== Rules ===== */}
      <section id="rules" className="section">
        <div className="section-head">
          <h2>Rules</h2>
          <ul className="rules">
            <li><strong>Do not</strong> call the leads ahead of time before you go.</li>
            <li>Bad leads must be returned within <strong>2 days</strong>.</li>
            <li>We get you on the roof, in front of the owner. <strong>You close it.</strong></li>
            <li>Outside the return window, we automatically add <strong>20% extra</strong> to help make up for bad leads.</li>
          </ul>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="section">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Phone: 833-9MACHIN (622-446) • Email: stormleadmachine@gmail.com</p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Storm Lead Machine. All rights reserved.
      </footer>

      {/* invisible anchor target for CTA */}
      <div id="get-leads" />
    </div>
  );
}

