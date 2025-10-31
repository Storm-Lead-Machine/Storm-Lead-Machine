import React, { useEffect, useMemo, useRef, useState } from "react";

// --- assets (match names exactly) ---
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
    // on tab change, choose a new background and toggle layers (fade)
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const next = pickSky();
    if (showA) setBgB(next);
    else setBgA(next);
    const t = setTimeout(() => setShowA((s) => !s), 30);
    return () => clearTimeout(t);
  }, [active]); // eslint-disable-line

  // reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <>
      <style>{`
        :root{
          --ink:#f1f4ff; --dim:#cdd5f5; --line:#ffffff1f; --glass:#0b1022cc;
          --brand:#ff2d55; --gold:#ffd166;
        }
        html, body { background:#05070f; }
        .page { min-height:100dvh; color:var(--ink); font-family:ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; position:relative; }

        /* --- background crossfade layers --- */
        .bg-layer {
          position: fixed; inset: 0;
          background-size: cover; background-position: center;
          background-attachment: fixed;
          opacity: 0; transition: opacity 1.6s ease;
          z-index:-2;
          animation: kenburns 30s ease-in-out infinite alternate;
          filter: saturate(1.05) contrast(1.05);
        }
        .bg-layer.show { opacity: 1; }
        .vignette::after{
          content:""; position:absolute; inset:0;
          background: radial-gradient(1200px 700px at 100% -10%, #08122ebb 0%, #050916ee 45%, #04060cff 85%);
          pointer-events:none;
        }
        @keyframes kenburns {
          0%   { transform: scale(1) translateY(0px); }
          100% { transform: scale(1.08) translateY(-6px); }
        }

        /* --- header --- */
        .header {
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          padding: 18px 24px; border-bottom: 1px solid var(--line);
          background: rgba(9,14,28,.55); backdrop-filter: blur(10px);
        }
        .brand { display:flex; align-items:center; gap:18px }
        /* ~10x larger than typical header logos; responsive below */
        .logo { height: 260px; width: auto; object-fit: contain; }
        .title { margin:0; font-size: 58px; letter-spacing:.6px; line-height:1; text-shadow:0 4px 22px #000a; }
        .tag { margin:6px 0 0; color: var(--gold); font-weight:700; font-size: 18px; text-shadow:0 2px 14px #0008; }

        .cta { display:inline-flex; align-items:center; justify-content:center; padding:16px 22px;
          border-radius:999px; text-decoration:none; font-weight:900; letter-spacing:.2px;
          background: linear-gradient(135deg, var(--brand), #ff5e7a);
          color:#fff; border:1px solid #ff5e7a33; box-shadow:0 10px 36px #ff2d5533; transition: transform .15s, box-shadow .2s;
        }
        .cta:hover { transform: translateY(-2px); box-shadow:0 16px 44px #ff2d5550; }
        .cta.big { padding:18px 26px; font-size:20px; }

        /* --- tabs --- */
        .tabs { display:flex; gap:10px; padding:12px 24px; border-bottom:1px solid var(--line);
          background: linear-gradient(180deg, rgba(8,12,22,.65) 0%, rgba(8,12,22,0) 100%); backdrop-filter: blur(6px);
        }
        .tab { background:#0f1530dd; color:#e9edff; border:1px solid #ffffff2a; border-radius:999px; padding:10px 16px; cursor:pointer; font-weight:800; text-shadow:0 1px 5px #000; }
        .tab.active { background:#1a2146dd; border-color:#ffffff66; }

        /* --- main panels --- */
        .main { max-width: 1200px; margin: 0 auto; padding: 28px 22px 70px; }
        .panel { background: var(--glass); border:1px solid var(--line); border-radius: 18px; padding: 26px; box-shadow:0 12px 48px #0008; position:relative; overflow:hidden; }
        .panel .section-logo { position:absolute; right:18px; top:18px; height:56px; opacity:.9; filter: drop-shadow(0 6px 24px #0006); } /* logo on each tab */

        /* --- reveal / motion --- */
        .reveal { opacity:0; transform: translateY(14px); transition: opacity .55s ease, transform .55s ease; }
        .reveal.in { opacity:1; transform: translateY(0); }
        .float { animation: float 6s ease-in-out infinite alternate; }
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        .fadein { animation: fadein .9s ease both; }
        @keyframes fadein { from { opacity:0; transform: translateY(10px);} to {opacity:1; transform:none;} }

        /* --- cards & content --- */
        .hero h2{ margin:0 0 12px; font-size:42px; text-shadow:0 2px 18px #0007; }
        .hero p{ margin:0 0 18px; color:var(--dim); font-size:18px; line-height:1.7; }
        .actions{ display:flex; flex-wrap:wrap; gap:12px; }

        .card{ display:grid; grid-template-columns: 320px 1fr; gap:18px; background:#0c122ce6; border:1px solid #ffffff22; border-radius:16px; overflow:hidden; margin:18px 0; box-shadow:0 10px 40px #0008; transition: transform .35s ease, box-shadow .35s ease; }
        .card:hover{ transform: translateY(-2px); box-shadow:0 16px 48px #000b; }
        .img{ width:100%; height:240px; object-fit:cover; }
        .body{ padding:18px; }
        .body h3{ margin:0 0 6px; font-size:22px; }
        .body p{ margin:0; color:#dfe5ff; }

        /* pricing */
        .trial{ border:2px solid var(--gold); background:linear-gradient(180deg,#1a2146f0,#0f1536f0); border-radius:16px; padding:20px; margin-bottom:18px; box-shadow:0 14px 50px #000b; }
        .trial h3{ margin:0 0 8px; color:var(--gold); font-size:22px; }
        .trial p{ margin:0 0 12px; font-weight:800; font-size:22px; }
        .grid{ display:grid; grid-template-columns: 1fr; gap:18px; }
        .col{ border:1px solid #ffffff1f; border-radius:16px; background:#0d1438f0; padding:18px; }
        .col h3{ margin:0 0 12px; }
        .price{ list-style:none; margin:0; padding:0; }
        .price li{ display:grid; grid-template-columns: 1fr auto auto; gap:12px; align-items:center; padding:12px 0; border-bottom:1px dashed #2c3560; color:#dfe5ff; }
        .price li:last-child{ border-bottom:none; }
        .price strong{ color:#fff; }

        .rules{ margin-top:20px; border:1px solid #ffffff1f; border-radius:16px; padding:18px; background:#0e1434f0; }
        .rules h3{ margin:0 0 10px; }

        .footer{ margin-top:42px; border-top:1px solid var(--line); padding:18px 22px; text-align:center; color:#dfe5ff; background: rgba(8,12,24,.55); backdrop-filter: blur(6px); }

        /* responsive */
        @media (max-width: 1100px) {
          .logo { height: 200px; }
          .title { font-size: 44px; }
        }
        @media (max-width: 760px) {
          .header { padding: 14px 16px; }
          .logo { height: 130px; }
          .title { font-size: 32px; }
          .hero h2 { font-size: 30px; }
          .card { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* background layers */}
      <div
        className={`bg-layer vignette ${showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgA})` }}
        aria-hidden="true"
      />
      <div
        className={`bg-layer vignette ${!showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgB})` }}
        aria-hidden="true"
      />

      <div className="page">
        {/* HEADER */}
        <header className="header">
          <div className="brand">
            <img className="logo" src={logo} alt="Storm Lead Machine logo" />
            <div>
              <h1 className="title">Storm Lead Machine</h1>
              <div className="tag">Can’t Stop the Machine</div>
            </div>
          </div>
          <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
        </header>

        {/* TABS */}
        <nav className="tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`tab ${active === t.id ? "active" : ""}`}
              aria-pressed={active === t.id}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* MAIN */}
        <main className="main">
          {active === "overview" && (
            <section className="panel reveal in">
              <img className="section-logo" src={logo} alt="" />
              <div className="hero">
                <h2>Dominate Storm Markets. On-Demand.</h2>
                <p>
                  Exclusive storm leads where you want them — <em>targeted by ZIP</em>, roof-age filters, and fast
                  routing. We get you on the roof in front of the owner. <strong>You close it from there.</strong>
                </p>
                <div className="actions">
                  <a className="cta big" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
                  <button className="cta" style={{ background: "transparent", border: "1px solid #ffffff44" }} onClick={() => setActive("pricing")}>View Pricing</button>
                  <button className="cta" style={{ background: "transparent", border: "1px solid #ffffff44" }} onClick={() => setActive("lead-types")}>See Lead Types</button>
                </div>
              </div>

              <div className="rules reveal">
                <h3>Rules to Running the Appointments</h3>
                <ul>
                  <li><strong>Do not call the leads ahead of time</strong> before you go.</li>
                  <li><strong>Bad leads must be returned within 2 days.</strong></li>
                  <li>We get you on the roof in the ZIP codes you want — <strong>you close the deal.</strong></li>
                </ul>
              </div>
            </section>
          )}

          {active === "lead-types" && (
            <section className="panel reveal">
              <img className="section-logo" src={logo} alt="" />
              <h2 className="fadein">Storm Lead Types</h2>

              <div className="card reveal">
                <img className="img" src={hailImg} alt="Hail damage" />
                <div className="body">
                  <h3>Hail</h3>
                  <p>Target hail zones by ZIP with optional <strong>roof-age filters</strong> for deeper qualification.</p>
                </div>
              </div>

              <div className="card reveal">
                <img className="img" src={windImg} alt="Wind damage" />
                <div className="body">
                  <h3>Wind</h3>
                  <p>High-intent homeowners impacted by wind events. Verified areas so you maximize each trip.</p>
                </div>
              </div>

              <div className="card reveal">
                <img className="img" src={tornadoImg} alt="Tornado / hurricane damage" />
                <div className="body">
                  <h3>Tornadoes / Hurricanes</h3>
                  <p>Rapid response campaigns across major swaths. Exclusive opportunities routed to your crews.</p>
                </div>
              </div>
            </section>
          )}

          {active === "pricing" && (
            <section className="panel reveal">
              <img className="section-logo" src={logo} alt="" />
              <h2 className="fadein">Pricing</h2>

              {/* Trial on top */}
              <div className="trial reveal">
                <h3>1st-time customer — 10 lead trial package</h3>
                <p>$1,000</p>
                <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Start Trial</a>
              </div>

              <div className="grid">
                <div className="col reveal">
                  <h3>Residential Leads</h3>
                  <ul className="price">
                    <li><span>25 leads</span><span>$120 / lead</span><strong>$3,000</strong></li>
                    <li><span>50 leads</span><span>$115 / lead</span><strong>$5,750</strong></li>
                    <li><span>100 leads</span><span>$110 / lead</span><strong>$11,000</strong></li>
                    <li><span>200 leads</span><span>$105 / lead</span><strong>$21,000</strong></li>
                  </ul>
                </div>
              </div>

              <div className="rules reveal" style={{ marginTop: 18 }}>
                <h3>Filters</h3>
                <ul>
                  <li>5+ yr old roofs only: <strong>$10 more per lead</strong></li>
                  <li>8+ yr old roofs only: <strong>$25 more per lead</strong></li>
                </ul>
              </div>

              <a className="cta big reveal" href={SQUARE_LINK} target="_blank" rel="noreferrer" style={{ marginTop: 16 }}>
                Get Leads Now
              </a>
            </section>
          )}

          {active === "testimonials" && (
            <section className="panel reveal">
              <img className="section-logo" src={logo} alt="" />
              <h2 className="fadein">Testimonials</h2>

              <div className="reveal" style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 18, background: "#0e1434f0", margin: "14px 0" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  “We closed our first roof within 48 hours. The ZIP targeting is on point and appointments actually show.”
                </p>
                <span style={{ color: "var(--gold)", fontSize: 14 }}>— R. Roofing Exteriors</span>
              </div>

              <div className="reveal" style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 18, background: "#0e1434f0", margin: "14px 0" }}>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  “No fluff. Real storm homeowners, and the roof-age filter saved us time on site.”
                </p>
                <span style={{ color: "var(--gold)", fontSize: 14 }}>— A. M., Project Manager</span>
              </div>
            </section>
          )}

          {active === "contact" && (
            <section className="panel reveal">
              <img className="section-logo" src={logo} alt="" />
              <h2 className="fadein">Contact</h2>
              <div className="reveal" style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
                <p><strong>Phone:</strong> 833-9MACHIN (622-446)</p>
                <p><strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a></p>
                <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
              </div>
              <p style={{ color: "#dfe5ff", fontSize: 12, marginTop: 8 }}>
                After checkout, we confirm your ZIP filters and launch your campaign.
              </p>
            </section>
          )}

          <footer className="footer">
            <div style={{marginTop:8, fontSize:12, opacity:.7}}>build: {new Date().toISOString()}</div>
            <div><strong>Storm Lead Machine</strong> — Exclusive Hail/Wind/Tornado/Hurricane Roofing Leads</div>
            <div>📞 833-9MACHIN (622-446) • 📧 stormleadmachine@gmail.com</div>
            <div style={{ fontSize: 12 }}>© {new Date().getFullYear()} Storm Lead Machine. All rights reserved.</div>
          </footer>
        </main>
      </div>
    </>
  );
}
