import React, { useMemo, useState } from "react";


/* Hosted images so the build never fails on local assets */
const HAIL_IMG =
  "https://images.unsplash.com/photo-1611902197376-d8a9a9886f2b?q=80&w=1600&auto=format&fit=crop";
const WIND_IMG =
  "https://images.unsplash.com/photo-1540438438080-c894fcc6538d?q=80&w=1600&auto=format&fit=crop";
const TORNADO_IMG =
  "https://images.unsplash.com/photo-1465544712438-e9952c39345a?q=80&w=1600&auto=format&fit=crop";

/* Sky backgrounds for tabs (also hosted) */
const SKY = {
  "Lead Types":
    "https://images.unsplash.com/photo-1508838555687-99ac94a95522?q=80&w=1920&auto=format&fit=crop",
  Pricing:
    "https://images.unsplash.com/photo-1499364039626-9a72adace663?q=80&w=1920&auto=format&fit=crop",
  Rules:
    "https://images.unsplash.com/photo-1504384380890-c894fcc6538d?q=80&w=1920&auto=format&fit=crop",
  Contact:
    "https://images.unsplash.com/photo-154231483481-06cdd1eebe1f?q=80&w=1920&auto=format&fit=crop",
};

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");
  const bgUrl = useMemo(() => SKY[active], [active]);

  return (
    <div className="app" style={{ backgroundImage: `url('${bgUrl}')` }}>
      {/* Header with 2-inch logo and 2-inch title */}
      <header className={`site-header ${active === "Lead Types" ? "site-header--home" : ""}`}>
        <div className="brand">
          <img
            src="/Storm-Lead-Machine-Logo.png"
            alt="Storm Lead Machine Logo"
            onError={(e) => {
              // Fallback if someone didn’t rename the logo
              e.currentTarget.src = "/Storm%20Lead%20Machine%20Logo.png";
            }}
          />
          <div className="site-title">Storm Lead Machine</div>
        </div>

        <nav className="pill-nav">
          {TABS.map((t) => (
            <button
              key={t}
              className={`pill ${active === t ? "active" : ""}`}
              onClick={() => setActive(t)}
              type="button"
            >
              {t}
            </button>
          ))}
          <a className="cta" href="#get-leads">Get Leads Now</a>
        </nav>
      </header>

      {/* Lead Types */}
      {active === "Lead Types" && (
        <section id="lead-types" className="card-grid">
          {/* Hail */}
          <div className="card">
            <img src={HAIL_IMG} alt="Hail damage" className="card-img" />
            <div className="card-body">
              <h3>Hail</h3>
              <p>Targeted hail zones by ZIP with roof-age filters.</p>
            </div>
          </div>

          {/* Wind */}
          <div className="card">
            <img src={WIND_IMG} alt="Wind damage" className="card-img" />
            <div className="card-body">
              <h3>Wind</h3>
              <p>Fresh wind swaths with high-intent homeowners.</p>
            </div>
          </div>

          {/* Tornado / Hurricanes */}
          <div className="card">
            <img src={TORNADO_IMG} alt="Tornado / supercell" className="card-img" />
            <div className="card-body">
              <h3>Tornado / Hurricanes</h3>
              <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {active === "Pricing" && (
        <section className="slab">
          <h2>Pricing</h2>
          <p>Same tiers as before—drop in your exact table here.</p>
        </section>
      )}

      {/* Rules */}
      {active === "Rules" && (
        <section className="slab">
          <h2>Rules</h2>
          <ul>
            <li>Do not call the lead ahead of time before you go.</li>
            <li>Bad leads must be returned within 2 days.</li>
            <li>If not returned in 2 days, we automatically give 20% extra to make up for bad leads.</li>
          </ul>
        </section>
      )}

      {/* Contact */}
      {active === "Contact" && (
        <section className="slab">
          <h2>Contact</h2>
          <p>Phone: 833-9MACHIN (622446)</p>
          <p>Email: stormleadmachine@gmail.com</p>
        </section>
      )}

      <footer className="site-footer">
        © 2025 Storm Lead Machine. All rights reserved.
      </footer>
    </div>
  );
}
