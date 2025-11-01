// src/Home.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

// brand + section images
import logo from "./assets/Logo.png";
import hailImg from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";

// sky backgrounds (must exist in /src/assets exactly as named)
import sky1 from "./assets/sky1.jpg";
import sky2 from "./assets/sky2.jpg";
import sky3 from "./assets/sky3.jpg";
import sky4 from "./assets/sky4.jpg";
import sky5 from "./assets/sky5.jpg";

// Optional: your Square link (use the one you shared before)
const SQUARE_LINK = "https://square.link/u/RSfgAZHS";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lead-types", label: "Storm Lead Types" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState("overview");

  // rotating sky backgrounds
  const skies = useMemo(() => [sky1, sky2, sky3, sky4, sky5], []);
  const [idx, setIdx] = useState(0);
  const [showA, setShowA] = useState(true);
  const [bgA, setBgA] = useState(skies[0]);
  const [bgB, setBgB] = useState(skies[1]);

  // rotate every 8s
  useEffect(() => {
    const id = setInterval(() => setShowA((s) => !s), 8000);
    return () => clearInterval(id);
  }, []);

  // when we flip, advance the image that will fade in next
  useEffect(() => {
    setIdx((p) => (p + 1) % skies.length);
    if (showA) setBgB(skies[(idx + 1) % skies.length]);
    else setBgA(skies[(idx + 1) % skies.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showA]);

  return (
    <>
      {/* SKY BACKGROUND LAYERS (styled by src/site.css) */}
      <div
        className={`bg-layer vignette ${showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgA})` }}
      />
      <div
        className={`bg-layer vignette ${!showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgB})` }}
      />

      <main className="page">
        {/* HEADER */}
        <header className="header" style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <div className="brand">
            <img
              src={logo}
              alt="Storm Lead Machine"
              className="logo"
              style={{ width: 140, height: "auto", borderRadius: 8 }}
            />
            <div>
              <h1 style={{ margin: 0, fontSize: 38, lineHeight: 1.1 }}>Storm Lead Machine</h1>
              <div style={{ marginTop: 2, opacity: 0.9 }}>Can’t Stop the Machine</div>
            </div>
          </div>

          <nav className="tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={active === t.id ? "tab active" : "tab"}
              >
                {t.label}
              </button>
            ))}

            <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
              Get Leads Now
            </a>
          </nav>
        </header>

        {/* HERO / INTRO */}
        <section className="panel" style={{ marginTop: 24 }}>
          <h2 style={{ marginTop: 0 }}>Dominate storm markets. On-demand.</h2>
          <p>
            Exclusive storm leads where you want them — <em>targeted by ZIP</em>, roof-age filters,
            and fast routing. We get you on the roof in front of the owner. <strong>You close it from there.</strong>
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
              Get Leads Now
            </a>
            <button className="ghost" onClick={() => setActive("pricing")}>
              View Pricing
            </button>
            <button className="ghost" onClick={() => setActive("lead-types")}>
              See Lead Types
            </button>
          </div>
        </section>

        {/* CONTENT SWITCHER */}
        {active === "overview" && (
          <>
           <section className="panel">
  <h3>Rules to Running the Appointments</h3>
  <ul>
    <li>Do not call the leads ahead of time before you go.</li>
    <li>
      Bad leads must be returned within 2 days — <strong>otherwise you will receive 20% extra only.</strong>
    </li>
    <li>
      We get you on the roof in the ZIP codes you want — <strong>you close the deal.</strong>
    </li>
    <li>
      Give us ZIP codes you know were hit with a storm and let us know how many appointments you can handle per day.
    </li>
  </ul>
</section>
            <section className="panel grid">
              <div className="card">
                <img src={hailImg} alt="Hail damage" className="cover" />
                <div className="pad">
                  <h4>Hail</h4>
                  <p>ZIP-level targeting with roof-age filters for hail-hit neighborhoods.</p>
                </div>
              </div>

              <div className="card">
                <img src={windImg} alt="Wind damage" className="cover" />
                <div className="pad">
                  <h4>Wind</h4>
                  <p>Find wind-swath corridors where roof damage is most likely.</p>
                </div>
              </div>

              <div className="card">
                <img src={tornadoImg} alt="Tornado / Hurricane" className="cover" />
                <div className="pad">
                  <h4>Tornado / Hurricanes</h4>
                  <p>Route to verified zones with homeowner availability.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {active === "lead-types" && (
          <section className="panel">
            <h3>Storm Lead Types</h3>
            <ul>
              <li>Hail — event-driven, map-aligned, ZIP filtered</li>
              <li>Wind — swath corridors & verified reports</li>
              <li>Tornado / Hurricanes — rapid response routing</li>
            </ul>
          </section>
        )}

        {active === "pricing" && (
          <>
            <section className="panel">
              <h3>1st-Time Customer Trial Package</h3>
              <p>
                <strong>10 Lead Trial — $1,000</strong>
              </p>
              <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
                Start Trial
              </a>
            </section>

            <section className="panel">
              <h3>Residential Lead Packages</h3>
              <div className="list">
                <div className="row">
                  <span>25 leads</span>
                  <span>$120/lead — $3,000</span>
                </div>
                <div className="row">
                  <span>50 leads</span>
                  <span>$115/lead — $5,750</span>
                </div>
                <div className="row">
                  <span>100 leads</span>
                  <span>$110/lead — $11,000</span>
                </div>
                <div className="row">
                  <span>200 leads</span>
                  <span>$105/lead — $21,000</span>
                </div>
              </div>

              <div className="note">
                Filters: 5+ yr roofs +$10/lead • 8+ yr roofs +$25/lead
              </div>
            </section>
          </>
        )}

        {active === "testimonials" && (
          <section className="panel">
            <h3>Testimonials</h3>
            <p style={{ opacity: 0.9 }}>
              “No fluff. Real storm homeowners, and the roof-age filter saved us time on site.” — A. M.,
              Project Manager
            </p>
          </section>
        )}

        {active === "contact" && (
          <section className="panel">
            <h3>Contact</h3>
            <p>
              <strong>Phone:</strong> 833-9MACHIN (622-446)
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
            </p>
            <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
              Get Leads Now
            </a>
          </section>
        )}

        {/* FOOTER + build tag */}
        <footer className="footer">
          <div className="muted">
            build: SKYBG-v6 • {new Date().toISOString()}
          </div>
          <div>
            <strong>Storm Lead Machine</strong> — Exclusive Hail/Wind/Tornado/Hurricane Roofing Leads
          </div>
          <div>📞 833-9MACHIN (622-446) • ✉️ stormleadmachine@gmail.com</div>
          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>
            © {new Date().getFullYear()} Storm Lead Machine. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
