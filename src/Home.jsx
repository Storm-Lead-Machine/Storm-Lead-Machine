import React, { useEffect, useMemo, useRef, useState } from "react";

// ── Assets (filenames must match exactly in /src/assets) ───────────────────────
import logo from "./assets/Logo.png";
import hailImg from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";

import sky1 from "./assets/sky1.jpg";
import sky2 from "./assets/sky2.jpg";
import sky3 from "./assets/sky3.jpg";
import sky4 from "./assets/sky4.jpg";
import sky5 from "./assets/sky5.jpg";

// Square checkout
const SQUARE_LINK = "https://square.link/u/RSfgAZHS";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lead-types", label: "Storm Lead Types" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  // Inline CSS to guarantee backgrounds + motion show
  const criticalCSS = `
    :root { --gold:#ffd668; --ink:#eaf0ff; }
    html, body { margin:0; height:100%; background:#000; color:var(--ink); font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
    * { box-sizing:border-box; }
    .page { position:relative; z-index:2; }
    .header { border-bottom:1px solid rgba(255,255,255,.06); }
    .muted { color:#a7b3d3; }
    .panel {
      background: rgba(0,0,0,.30);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 16px;
      padding: 18px;
      backdrop-filter: blur(4px);
      box-shadow: 0 10px 40px rgba(0,0,0,.25);
      margin-top: 16px;
    }
    .grid {
      display:grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 14px;
    }
    @media (max-width: 980px){ .grid{ grid-template-columns: 1fr; } }
    .card {
      background: rgba(0,0,0,.30);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 16px;
      overflow: hidden;
      backdrop-filter: blur(4px);
    }
    .card-img { width:100%; height:220px; display:block; }
    .card-body { padding: 14px; }
    .rows { display:grid; gap:10px; }
    .cta {
      display:inline-block;
      padding: 12px 18px;
      border-radius: 12px;
      font-weight: 800;
      color:#fff;
      text-decoration:none;
      background: linear-gradient(180deg,#ff7ba6 0%,#ff558a 100%);
      box-shadow: 0 8px 24px rgba(255,85,138,.35);
    }
    .cta.ghost {
      border:1px solid rgba(255,255,255,.12);
      color:var(--ink);
      box-shadow:none;
    }
    .footer {
      margin: 28px 0 18px;
      padding-top: 8px;
      border-top: 1px dashed rgba(255,255,255,.12);
      text-align:center;
      color:#c9d2ef;
    }

    /* ── Cinematic sky background layers ───────────────────────────────────── */
    .bg-layer {
      position: fixed; inset: 0;
      background-size: cover; background-position: center;
      background-attachment: fixed;
      opacity: 0;
      transition: opacity 1.6s ease-in-out;
      animation: kenburns 26s ease-in-out infinite alternate;
      z-index: 0;
      filter: saturate(1.05) contrast(1.05) brightness(.92);
    }
    .bg-layer.show { opacity: 1; }
    .vignette::after{
      content:""; position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(1200px 720px at 100% 10%,
        rgba(8,18,46,.0) 0%,
        rgba(8,18,46,.55) 45%,
        rgba(4,6,12,.92) 85%);
    }
    @keyframes kenburns {
      0% { transform: scale(1.05) translateY(0px); }
      100% { transform: scale(1.10) translateY(-8px); }
    }
  `;

  const [active, setActive] = useState("overview");

  // background logic
  const skies = useMemo(() => [sky1, sky2, sky3, sky4, sky5], []);
  const pickSky = () => skies[Math.floor(Math.random() * skies.length)];

  const [bgA, setBgA] = useState(pickSky());
  const [bgB, setBgB] = useState(pickSky());
  const [showA, setShowA] = useState(true);
  const firstRun = useRef(true);

  useEffect(() => {
    // fade once on tab change so it feels alive
    if (firstRun.current) { firstRun.current = false; return; }
    const next = pickSky();
    if (showA) setBgB(next); else setBgA(next);
    setShowA((s) => !s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]); // eslint-disable-line

  useEffect(() => {
    // autonomous fading every 10s
    const id = setInterval(() => {
      const next = pickSky();
      if (showA) setBgB(next); else setBgA(next);
      setShowA((s) => !s);
    }, 10000);
    return () => clearInterval(id);
  }, [showA]); // eslint-disable-line

  return (
    <>
      {/* critical CSS so backgrounds always show */}
      <style>{criticalCSS}</style>

      {/* SKY LAYERS */}
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
          zIndex: 30,
          backdropFilter: "blur(6px)",
          background: "rgba(8,18,46,.55)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src={logo}
              alt="Storm Lead Machine"
              style={{
                height: 84,
                width: "auto",
                borderRadius: 10,
                boxShadow: "0 6px 20px rgba(0,0,0,.35)",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: 0.2,
                  color: "#fff",
                  textShadow: "0 2px 18px rgba(0,0,0,.45)",
                }}
              >
                Storm Lead Machine
              </div>
              <div style={{ marginTop: -2, color: "var(--gold)", fontWeight: 700 }}>
                Can’t Stop the Machine
              </div>
            </div>
          </div>

          <a href={SQUARE_LINK} target="_blank" rel="noreferrer" className="cta">
            Get Leads Now
          </a>
        </div>

        {/* Tabs */}
        <nav
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 12px 12px",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                border: "1px solid rgba(255,255,255,.12)",
                background:
                  active === t.id ? "rgba(255,255,255,.10)" : "rgba(8,18,46,.35)",
                color: "#eaf0ff",
                padding: "8px 12px",
                borderRadius: 10,
                fontWeight: 700,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {/* BODY */}
      <main className="page" style={{ maxWidth: 1180, margin: "0 auto", padding: 18 }}>
        {/* Overview */}
        {active === "overview" && (
          <section className="panel">
            <h1 style={{ marginTop: 6 }}>Dominate storm markets. On-demand.</h1>
            <p style={{ marginTop: 8 }}>
              Exclusive storm leads where you want them — <em>targeted by ZIP</em>,
              optional roof-age filters, and fast routing. We get you on the roof
              in front of the owner. <strong>You close it from there.</strong>
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
                Get Leads Now
              </a>
              <button className="cta ghost" onClick={() => setActive("pricing")}>
                View Pricing
              </button>
              <button className="cta ghost" onClick={() => setActive("lead-types")}>
                See Lead Types
              </button>
            </div>

            {/* RULES – includes your 20% line */}
            <div className="panel" style={{ marginTop: 22 }}>
              <h3>Rules to Running the Appointments</h3>
              <ul style={{ marginTop: 8 }}>
                <li>Do not call the leads ahead of time before you go.</li>
                <li>
                  Give us ZIP codes you know were hit with a storm and let us know
                  how many appointments you can handle per day.
                </li>
                <li>
                  Bad leads must be returned within 2 days —{" "}
                  <strong>otherwise you will receive 20% extra only.</strong>
                </li>
                <li>
                  We get you on the roof, in front of the owner — you close it from there.
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* Lead Types */}
        {active === "lead-types" && (
          <section className="grid">
            <div className="card">
              <img src={hailImg} alt="Hail damage" className="card-img" />
              <div className="card-body">
                <h3>Hail</h3>
                <p>ZIP-targeted hail events with optional roof-age filters.</p>
              </div>
            </div>

            <div className="card">
              <img src={windImg} alt="Wind damage" className="card-img" />
              <div className="card-body">
                <h3>Wind</h3>
                <p>High-wind swaths and address-precision appointment routing.</p>
              </div>
            </div>

            <div className="card">
              <img src={tornadoImg} alt="Tornado & Hurricanes" className="card-img" />
              <div className="card-body">
                <h3>Tornado / Hurricanes</h3>
                <p>Severe storm footprints with owner-present visits.</p>
              </div>
            </div>
          </section>
        )}

        {/* Pricing (Trial first; no commercial) */}
        {active === "pricing" && (
          <>
            <section className="panel">
              <h2>1st-Time Customer Trial Package</h2>
              <p style={{ marginTop: 6 }}>
                <strong>10 Lead Trial — $1,000</strong>
              </p>
              <p style={{ marginTop: 6 }}>Try us once and scale from there.</p>
              <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer" style={{ marginTop: 12, display:"inline-block" }}>
                Start Trial
              </a>
            </section>

            <section className="panel">
              <h2>Residential Lead Packages</h2>
              <div className="rows" style={{ marginTop: 10 }}>
                <PriceRow label="25 leads" price="$120/lead — $3,000" />
                <PriceRow label="50 leads" price="$115/lead — $5,750" />
                <PriceRow label="100 leads" price="$110/lead — $11,000" />
                <PriceRow label="200 leads" price="$105/lead — $21,000" />
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                <strong>Filters:</strong> 5+ yr roofs +$10/lead • 8+ yr roofs +$25/lead
              </div>
            </section>

            <section className="panel" style={{ textAlign: "center" }}>
              <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
                View Packages
              </a>
            </section>
          </>
        )}

        {/* Testimonials */}
        {active === "testimonials" && (
          <section className="grid">
            <div className="card">
              <div className="card-body">
                <p style={{ fontStyle: "italic" }}>
                  “No fluff. Real storm homeowners, and the roof-age filter saved us time on site.”
                </p>
                <span className="muted">— A. M., Project Manager</span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p style={{ fontStyle: "italic" }}>
                  “ZIP-level targeting helped us load crews exactly where we needed them.”
                </p>
                <span className="muted">— D. S., Owner</span>
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        {active === "contact" && (
          <section className="panel">
            <h2>Contact</h2>
            <div style={{ marginTop: 10, display: "grid", gap: 6 }}>
              <div>
                <strong>Phone:</strong> 833-9MACHIN (622-446)
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a href="mailto:stormleadmachine@gmail.com">
                  stormleadmachine@gmail.com
                </a>
              </div>
              <div style={{ marginTop: 10 }}>
                <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
                  Get Leads Now
                </a>
              </div>
            </div>
          </section>
        )}

        <footer className="footer">
          <div className="muted" style={{ fontSize: 12, opacity: 0.75 }}>
            build: SKY-INLINE • {new Date().toISOString()}
          </div>
          <div style={{ marginTop: 4 }}>
            <strong>Storm Lead Machine</strong> — Exclusive Hail/Wind/Tornado/Hurricane Roofing Leads •{" "}
            833-9MACHIN (622-446) •{" "}
            <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
          </div>
        </footer>
      </main>
    </>
  );
}

function PriceRow({ label, price }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 14px",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 12,
        background: "rgba(0,0,0,.25)",
      }}
    >
      <span>{label}</span>
      <span className="muted" style={{ fontWeight: 700 }}>
        {price}
      </span>
    </div>
  );
}
