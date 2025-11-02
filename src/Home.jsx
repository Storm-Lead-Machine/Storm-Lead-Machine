import React, { useEffect, useMemo, useRef, useState } from "react";

// ---- assets (filenames must match exactly) ----
import logo from "./assets/Logo.png";
import hailing from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";
import sky1 from "./assets/sky1.jpg";
import sky2 from "./assets/sky2.jpg";
import sky3 from "./assets/sky3.jpg";
import sky4 from "./assets/sky4.jpg";
import sky5 from "./assets/sky5.jpg";


const SQUARE_LINK = "https://square.link/u/RSfgAZHS";
const TABS = [
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
    // on tab change, choose a new background and toggle layers (fade)
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      const next = pickSky();
      if (showA) setBgB(next);
      else setBgA(next);
      setShowA(!showA);
    }
  }, [active]); // changes when tab changes

  // slow automatic motion
  useEffect(() => {
    const t = setInterval(() => {
      const next = pickSky();
      if (showA) setBgB(next);
      else setBgA(next);
      setShowA((s) => !s);
    }, 12000);
    return () => clearInterval(t);
  }, [showA, skies]);

  return (
    <div>
      {/* === SKY BACKGROUND LAYERS (must be first in DOM) === */}
      <div
        className={`bg-layer vignette ${showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgA})` }}
      />
      <div
        className={`bg-layer vignette ${!showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgB})` }}
      />

      {/* HEADER */}
      <header
        className="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background:
            "linear-gradient(180deg, rgba(5,10,20,.85) 0%, rgba(5,10,20,.65) 100%)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img
            src={logo}
            alt="Storm Lead Machine"
            style={{ height: 92, width: 92, objectFit: "contain" }}
          />
          <div style={{ lineHeight: 1.05 }}>
            <h1 style={{ margin: 0, fontSize: 44, letterSpacing: 0.2 }}>Storm Lead Machine</h1>
            <div style={{ marginTop: 6, fontWeight: 600, color: "var(--gold)" }}>
              Can’t Stop the Machine
            </div>
          </div>

          <a
            href={SQUARE_LINK}
            target="_blank"
            rel="noreferrer"
            className="cta"
            style={{ marginLeft: "auto" }}
          >
            Get Leads Now
          </a>
        </div>

        {/* TABS */}
        <nav className="tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab ${active === t.id ? "active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="container">
        {/* OVERVIEW */}
        {active === "overview" && (
          <section className="panel reveal">
            <h2>Dominate storm markets. On-demand.</h2>
            <p>
              Exclusive storm leads where you want them — <em>targeted by ZIP</em>, roof-age filters,
              and fast routing. We get you on the roof in front of the owner. <strong>You close it from there.</strong>
            </p>

            <div className="btn-row">
              <a href={SQUARE_LINK} target="_blank" rel="noreferrer" className="cta">
                Get Leads Now
              </a>
              <button className="ghost" onClick={() => setActive("pricing")}>
                View Pricing
              </button>
              <button className="ghost" onClick={() => setActive("lead-types")}>
                See Lead Types
              </button>
            </div>

            {/* RULES (with your new lines) */}
            <div className="card" style={{ marginTop: 22 }}>
              <h3>Rules to Running the Appointments</h3>
              <ul>
                <li>Do not call the leads ahead of time before you go.</li>
                <li>
                  Bad leads must be returned within 2 days — <strong>otherwise you will receive 20% extra only.</strong>
                </li>
                <li>
                  Give us ZIP codes you know were hit with a storm and let us know how many appointments you can handle per day.
                </li>
                <li>
                  We get you on the roof, in front of the owner — <strong>you close the deal.</strong>
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* LEAD TYPES */}
        {active === "lead-types" && (
          <section className="panel grid reveal">
            <div className="col">
              <img src={hailing} alt="Hail" className="section-logo" />
              <h3>Hail</h3>
              <p>Targeted hail zones by ZIP with optional roof-age filters.</p>
            </div>
            <div className="col">
              <img src={windImg} alt="Wind" className="section-logo" />
              <h3>Wind</h3>
              <p>High-wind corridors and swaths routed to your team.</p>
            </div>
            <div className="col">
              <img src={tornadoImg} alt="Tornado/Hurricane" className="section-logo" />
              <h3>Tornado / Hurricane</h3>
              <p>Surge zones post-event with fast appointment windows.</p>
            </div>
          </section>
        )}

        {/* PRICING */}
        {active === "pricing" && (
          <section className="panel reveal">
            <div className="card">
              <h3>1st-Time Customer Trial Package</h3>
              <p><strong>10 Lead Trial — $1,000</strong></p>
              <a href={SQUARE_LINK} target="_blank" rel="noreferrer" className="cta">Start Trial</a>
            </div>

            <div className="grid" style={{ marginTop: 16 }}>
              <div className="col">
                <h3>Residential Lead Packages</h3>
                <ul className="price-list">
                  <li><span>25 leads</span><span>$120/lead — $3,000</span></li>
                  <li><span>50 leads</span><span>$115/lead — $5,750</span></li>
                  <li><span>100 leads</span><span>$110/lead — $11,000</span></li>
                  <li><span>200 leads</span><span>$105/lead — $21,000</span></li>
                </ul>
                <div className="muted">Filters: 5+ yr roofs +$10/lead • 8+ yr roofs +$25/lead</div>
              </div>
            </div>
          </section>
        )}

        {/* TESTIMONIALS */}
        {active === "testimonials" && (
          <section className="panel reveal">
            <h3>Real results, real roofs.</h3>
            <p>“No fluff. Real storm homeowners, and the roof-age filter saved us time on site.”</p>
            <span className="muted">— A. M., Project Manager</span>
          </section>
        )}

        {/* CONTACT */}
        {active === "contact" && (
          <section className="panel reveal">
            <img className="section-logo" src={logo} alt="" />
            <div className="frow">
              <div>
                <strong>Phone:</strong> 833-9MACHIN (622-446)
              </div>
              <div>
                <strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
              </div>
            </div>
            <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
            <p className="muted" style={{ marginTop: 8 }}>
              After checkout, we confirm your ZIP filters and launch your campaign.
            </p>
          </section>
        )}
      </main>

      {/* tiny build tag so we can confirm the live version */}
      <div
        style={{
          position: "fixed",
          bottom: 8,
          right: 10,
          fontSize: 11,
          opacity: 0.8,
          color: "#b6c0ff",
          padding: "4px 8px",
          borderRadius: 8,
          border: "1px solid #ffffff22",
          zIndex: 20,
          background: "rgba(12,18,40,.6)",
        }}
      >
        build: SKYBG-v8 • {new Date().toISOString()}
      </div>
    </div>
  );
}
