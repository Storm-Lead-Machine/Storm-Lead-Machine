import React, { useEffect, useMemo, useRef, useState } from "react";

// ---- assets (filenames must match exactly) ----
import logo from "./assets/Logo.png";
import hailImg from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";

import sky1 from "./assets/sky1.jpg";
import sky2 from "./assets/sky2.jpg";
import sky3 from "./assets/sky3.jpg";
import sky4 from "./assets/sky4.jpg";
import sky5 from "./assets/sky5.jpg";

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

  // pool of sky backgrounds
  const skies = useMemo(() => [sky1, sky2, sky3, sky4, sky5], []);
  const pickSky = () => skies[Math.floor(Math.random() * skies.length)];

  // crossfade background: two layers we swap between
  const [bgA, setBgA] = useState(pickSky());
  const [bgB, setBgB] = useState(pickSky());
  const [showA, setShowA] = useState(true);
  const firstRun = useRef(true);

  useEffect(() => {
    // ensure the first render immediately shows a layer
    if (firstRun.current) {
      firstRun.current = false;
      setShowA(true);
    }
    const id = setInterval(() => {
      setShowA((prev) => !prev);
      // when we flip to A, refresh B (and vice-versa)
      setBgA((prev) => (showA ? prev : pickSky()));
      setBgB((prev) => (!showA ? prev : pickSky()));
    }, 9000); // 9s per crossfade
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skies, showA]);

  return (
    <div className="page">
      {/* === SKY BACKGROUND LAYERS (must render first) === */}
      <div
        className={`bg-layer vignette ${showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgA})` }}
      />
      <div
        className={`bg-layer vignette ${!showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgB})` }}
      />

      {/* === HEADER === */}
      <header className="header">
        <div className="container logo">
          <img src={logo} alt="Storm Lead Machine" />
          <div>
            <div className="brand">Storm Lead Machine</div>
            <div className="tagline">Can’t Stop the Machine</div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a className="btn" href={SQUARE_LINK} target="_blank" rel="noreferrer">
              Get Leads Now
            </a>
          </div>
        </div>
      </header>

      {/* === NAV TABS === */}
      <div className="container">
        <nav className="tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab ${active === t.id ? "active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      {/* === PANELS === */}
      <main className="container">

        {/* Overview */}
        {active === "overview" && (
          <section className="panel">
            <h2>Dominate storm markets. On-demand.</h2>
            <p style={{ marginTop: 8 }}>
              Exclusive storm leads where you want them — <em>targeted by ZIP</em>,
              roof-age filters, and fast routing. We get you on the roof in front of the owner.
              <br />
              <strong>You close it from there.</strong>
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <a className="btn" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
              <a className="btn" href="#pricing" onClick={(e)=>{e.preventDefault(); setActive("pricing");}}>
                View Pricing
              </a>
              <a className="btn" href="#leadtypes" onClick={(e)=>{e.preventDefault(); setActive("lead-types");}}>
                See Lead Types
              </a>
            </div>

            {/* Rules box (includes 20% line) */}
            <div className="card" style={{ marginTop: 22 }}>
              <h3>Rules to Running the Appointments</h3>
              <ul style={{ marginTop: 10 }}>
                <li>Do not call the leads ahead of time before you go.</li>
                <li>
                  Bad leads must be returned within 2 days — <strong>otherwise you will receive
                  20% extra only</strong>.
                </li>
                <li>
                  Give us ZIP codes you know were hit with a storm and let us know how many
                  appointments you can handle per day.
                </li>
                <li>We get you on the roof in the ZIP codes you want — <strong>you close the deal.</strong></li>
              </ul>
            </div>
          </section>
        )}

        {/* Lead Types */}
        {active === "lead-types" && (
          <section className="panel" id="leadtypes">
            <h2>Storm Lead Types</h2>
            <div className="grid" style={{ marginTop: 12 }}>
              <div className="col-4">
                <div className="card">
                  <img src={hailImg} alt="Hail" style={{ width: "100%", borderRadius: 12, marginBottom: 10 }} />
                  <h3>Hail</h3>
                  <p>Targeted hail zones by ZIP with optional roof-age filters and routing.</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src={windImg} alt="Wind" style={{ width: "100%", borderRadius: 12, marginBottom: 10 }} />
                  <h3>Wind</h3>
                  <p>Wind-event targeting with ZIP focus and fast appointment setting.</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src={tornadoImg} alt="Tornado/Hurricanes" style={{ width: "100%", borderRadius: 12, marginBottom: 10 }} />
                  <h3>Tornado / Hurricanes</h3>
                  <p>Major-event areas with owner-present routing and no-resold leads.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing */}
        {active === "pricing" && (
          <section className="panel" id="pricing">
            <h2>1st-Time Customer Trial Package</h2>
            <div className="card" style={{ marginTop: 12, marginBottom: 18 }}>
              <p style={{ fontSize: 18 }}>
                <strong>10 Lead Trial — $1,000</strong>
              </p>
              <p style={{ marginTop: 6 }}>Try us once and scale from there.</p>
              <div style={{ marginTop: 12 }}>
                <a className="btn" href={SQUARE_LINK} target="_blank" rel="noreferrer">Start Trial</a>
              </div>
            </div>

            <h2>Residential Lead Packages</h2>
            <div className="card" style={{ marginTop: 12 }}>
              <div className="price-row"><span>25 leads</span>  <span className="price-muted">$120/lead — $3,000</span></div>
              <div className="price-row"><span>50 leads</span>  <span className="price-muted">$115/lead — $5,750</span></div>
              <div className="price-row"><span>100 leads</span> <span className="price-muted">$110/lead — $11,000</span></div>
              <div className="price-row"><span>200 leads</span> <span className="price-muted">$105/lead — $21,000</span></div>
              <div style={{ marginTop: 10, color: "#9fb3ff" }}>
                Filters: 5+ yr roofs +$10/lead • 8+ yr roofs +$25/lead
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {active === "testimonials" && (
          <section className="panel">
            <h2>Testimonials</h2>
            <div className="card" style={{ marginTop: 12 }}>
              <p>
                “Real storm homeowners, and the roof-age filter saved us time on site.”
                <br /><span style={{ color: "#ffd166" }}>— A. M., Project Manager</span>
              </p>
            </div>
          </section>
        )}

        {/* Contact */}
        {active === "contact" && (
          <section className="panel">
            <h2>Contact / Next Steps</h2>
            <div className="grid" style={{ marginTop: 12 }}>
              <div className="col-6">
                <div className="card">
                  <strong>Phone:</strong> 833-9MACHIN (622-446)
                  <br />
                  <strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
                  <br />
                  <a className="btn" href={SQUARE_LINK} target="_blank" rel="noreferrer" style={{ marginTop: 10 }}>
                    Get Leads Now
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <ul style={{ margin: 0 }}>
                    <li>ZIP-level control with optional roof-age filters.</li>
                    <li>No gimmicks, no resold leads.</li>
                    <li>Event-driven targeting across hail, wind, tornado & hurricane zones.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* build tag so we can confirm the live version */}
      <div className="build-tag">
        build: SKYBG-v7 • {new Date().toISOString()}
      </div>
    </div>
  );
}
<div className={`bg-layer vignette ${showA ? "show" : ""}`} style={{ backgroundImage: `url(${bgA})` }} />
<div className={`bg-layer vignette ${!showA ? "show" : ""}`} style={{ backgroundImage: `url(${bgB})` }} />
