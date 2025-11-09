import React, { useMemo, useState } from "react";

/* Use reliable hosted images + no-referrer to avoid any hotlink blocks */
const HAIL_IMG =
  "https://images.unsplash.com/photo-1611902197376-d8a9a9886f2b?auto=format&fit=crop&w=1600&q=80";
const WIND_IMG =
  "https://images.unsplash.com/photo-1540438438080-c894fcc6538d?auto=format&fit=crop&w=1600&q=80";
const TORNADO_IMG =
  "https://images.unsplash.com/photo-1465544712438-e9952c39345a?auto=format&fit=crop&w=1600&q=80";

/* Sky backgrounds for tabs (also hosted) */
const SKY = {
  "Lead Types":
    "https://images.unsplash.com/photo-1508838555687-99ac94a95522?auto=format&fit=crop&w=1920&q=80",
  Pricing:
    "https://images.unsplash.com/photo-1499364039626-9a72adace663?auto=format&fit=crop&w=1920&q=80",
  Rules:
    "https://images.unsplash.com/photo-1504384380890-c894fcc6538d?auto=format&fit=crop&w=1920&q=80",
  Contact:
    "https://images.unsplash.com/photo-154231483481-06cdd1eebe1f?auto=format&fit=crop&w=1920&q=80",
};
const SKY_FALLBACK =
  "https://images.unsplash.com/photo-1499364039626-9a72adace663?auto=format&fit=crop&w=1920&q=80";

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");

  const bgUrl = useMemo(() => SKY[active] || SKY_FALLBACK, [active]);

  return (
    <div className="app" style={{ backgroundImage: `url('${bgUrl}')` }}>
      {/* Header */}
      <header className="site-header">
        <div className="brand">
          <img
            src="/Storm-Lead-Machine-Logo.png"
            alt="Storm Lead Machine Logo"
            onError={(e) => (e.currentTarget.src = "/Storm%20Lead%20Machine%20Logo.png")}
          />
          <div className="site-title">Storm Lead Machine</div>
        </div>

        <nav className="pill-nav" aria-label="Primary">
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
          <div className="card">
            <img
              src={HAIL_IMG}
              referrerPolicy="no-referrer"
              alt="Hail damage"
              className="card-img"
            />
            <div className="card-body">
              <h3>Hail</h3>
              <p>Targeted hail zones by ZIP with roof-age filters.</p>
            </div>
          </div>

          <div className="card">
            <img
              src={WIND_IMG}
              referrerPolicy="no-referrer"
              alt="Wind damage"
              className="card-img"
            />
            <div className="card-body">
              <h3>Wind</h3>
              <p>Fresh wind swaths with high-intent homeowners.</p>
            </div>
          </div>

          <div className="card">
            <img
              src={TORNADO_IMG}
              referrerPolicy="no-referrer"
              alt="Tornado / supercell"
              className="card-img"
            />
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
          <p>Drop your tiered pricing here.</p>
        </section>
      )}

      {/* Rules */}
      {active === "Rules" && (
        <section className="slab">
          <h2>Rules</h2>
          <ul>
            <li>Do not call the lead ahead of time before you go.</li>
            <li>Bad leads must be returned within 2 days.</li>
            <li>If not returned in 2 days, we automatically provide 20% extra to offset bad leads.</li>
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
