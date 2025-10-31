import React, { useEffect, useMemo, useRef, useState } from "react";


// ── Assets (filenames must match exactly) ──────────────────────────────────────
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

// Tabs
const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lead-types", label: "Storm Lead Types" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState("overview");

  // pool of background images
  const skies = useMemo(() => [sky1, sky2, sky3, sky4, sky5], []);
  const pickSky = () => skies[Math.floor(Math.random() * skies.length)];

  // cross-fade background layers
  const [bgA, setBgA] = useState(pickSky());
  const [bgB, setBgB] = useState(pickSky());
  const [showA, setShowA] = useState(true);
  const firstRun = useRef(true);

  useEffect(() => {
    // when tab changes, flip background once so it feels alive
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      const next = pickSky();
      if (showA) setBgB(next);
      else setBgA(next);
      setShowA((s) => !s);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]); // eslint-disable-line

  useEffect(() => {
    // autonomous slow cross-fade every 10s
    const id = setInterval(() => {
      const next = pickSky();
      if (showA) setBgB(next);
      else setBgA(next);
      setShowA((s) => !s);
    }, 10000);
    return () => clearInterval(id);
  }, [showA, skies]); // eslint-disable-line

  return (
    <>
      {/* SKY BACKGROUND LAYERS (use site.css classes) */}
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
          background: "rgba(8,18,46,.5)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
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
                height: 84, // big logo
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
              <div
                style={{
                  marginTop: -2,
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                Can’t Stop the Machine
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={SQUARE_LINK}
            target="_blank"
            rel="noreferrer"
            className="cta"
            style={{
              background:
                "linear-gradient(180deg, #ff7ba6 0%, #ff558a 100%)",
              color: "#fff",
              fontWeight: 800,
              padding: "12px 18px",
              borderRadius: 12,
              boxShadow: "0 8px 24px rgba(255,85,138,.35)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Get Leads Now
          </a>
        </div>

        {/* NAV TABS */}
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
                  active === t.id
                    ? "rgba(255,255,255,.10)"
                    : "rgba(8,18,46,.35)",
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

      {/* PAGE BODY */}
      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "18px" }}>
        {/* ───────── Overview ───────── */}
        {active === "overview" && (
          <section className="panel reveal">
            <h1 style={{ marginTop: 6 }}>Dominate storm markets. On-demand.</h1>
            <p style={{ marginTop: 8 }}>
              Exclusive storm leads where you want them — <em>targeted by ZIP</em>,
              optional roof-age filters, and fast routing. We get you on the roof
              in front of the owner. <strong>You close it from there.</strong>
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 16,
                flexWrap: "wrap",
              }}
            >
              <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
                Get Leads Now
              </a>
              <button
                className="cta ghost"
                onClick={() => setActive("pricing")}
                style={{ background: "transparent" }}
              >
                View Pricing
              </button>
              <button
                className="cta ghost"
                onClick={() => setActive("lead-types")}
                style={{ background: "transparent" }}
              >
                See Lead Types
              </button>
            </div>

            <div className="panel" style={{ marginTop: 22 }}>
              <h3>Rules to Running the Appointments</h3>
              <ul style={{ marginTop: 8 }}>
                <li>Do not call the leads ahead of time before you go.</li>
                <li>
                  Give us ZIP codes you know were hit with a storm and let us
                  know how many appointments you can handle per day.
                </li>
                <li>
                  Bad leads must be returned within 2 days —{" "}
                  <strong>otherwise you will receive 20% extra only.</strong>
                </li>
                <li>
                  We get you on the roof, in front of the owner — you close it
                  from there.
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* ───────── Lead Types ───────── */}
        {active === "lead-types" && (
          <section className="grid reveal">
            <div className="card">
              <img
                src={hailImg}
                alt="Hail damage"
                className="card-img"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h3>Hail</h3>
                <p>ZIP-targeted hail events with optional roof-age filters.</p>
              </div>
            </div>

            <div className="card">
              <img
                src={windImg}
                alt="Wind damage"
                className="card-img"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h3>Wind</h3>
                <p>High-wind swaths and address-precision appointment routing.</p>
              </div>
            </div>

            <div className="card">
              <img
                src={tornadoImg}
                alt="Tornado & Hurricanes"
                className="card-img"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h3>Tornado / Hurricanes</h3>
                <p>Severe storm footprints with owner-present visits.</p>
              </div>
            </div>
          </section>
        )}

        {/* ───────── Pricing (trial first, no commercial) ───────── */}
        {active === "pricing" && (
          <>
            <section className="panel reveal">
              <h2>1st-Time Customer Trial Package</h2>
              <p style={{ marginTop: 6 }}>
                <strong>10 Lead Trial — $1,000</strong>
              </p>
              <p style={{ marginTop: 6 }}>Try us once and scale from there.</p>
              <a
                className="cta"
                href={SQUARE_LINK}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 12, display: "inline-block" }}
              >
                Start Trial
              </a>
            </section>

            <section className="panel reveal">
              <h2>Residential Lead Packages</h2>
              <div className="rows" style={{ marginTop: 10 }}>
                <Row label="25 leads" price="$120/lead — $3,000" />
                <Row label="50 leads" price="$115/lead — $5,750" />
                <Row label="100 leads" price="$110/lead — $11,000" />
                <Row label="200 leads" price="$105/lead — $21,000" />
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

        {/* ───────── Testimonials ───────── */}
        {active === "testimonials" && (
          <section className="grid reveal">
            <div className="card">
              <div className="card-body">
                <p style={{ fontStyle: "italic" }}>
                  “No fluff. Real storm homeowners, and the roof-age filter saved
                  us time on site.”
                </p>
                <span className="muted">— A. M., Project Manager</span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p style={{ fontStyle: "italic" }}>
                  “ZIP-level targeting helped us load crews exactly where we
                  needed them.”
                </p>
                <span className="muted">— D. S., Owner</span>
              </div>
            </div>
          </section>
        )}

        {/* ───────── Contact ───────── */}
        {active === "contact" && (
          <section className="panel reveal">
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
                <a
                  className="cta"
                  href={SQUARE_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Leads Now
                </a>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER / tiny build tag for quick verification */}
        <footer className="footer">
          <div className="muted" style={{ fontSize: 12, opacity: 0.7 }}>
            build: SKY-TABS • {new Date().toISOString()}
          </div>
          <div style={{ marginTop: 4 }}>
            <strong>Storm Lead Machine</strong> — Exclusive Hail/Wind/Tornado/Hurricane
            Roofing Leads • 833-9MACHIN (622-446) •{" "}
            <a href="mailto:stormleadmachine@gmail.com">
              stormleadmachine@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

/* simple row helper for pricing */
function Row({ label, price }) {
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
