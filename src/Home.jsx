import React, { useEffect, useState, useMemo } from "react";

// ✅ Match your filenames exactly (case-sensitive on Vercel)
import logo from "./assets/Logo.png";
import hailImg from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";

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

  // Choose a background per tab (you can swap which image goes with which tab)
  const bgForTab = useMemo(
    () =>
      ({
        overview: hailImg,
        "lead-types": windImg,
        pricing: tornadoImg,
        testimonials: windImg,
        contact: hailImg,
      }[active]),
    [active]
  );

  // Simple scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".slm-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <>
      {/* Component-scoped styles */}
      <style>{`
        :root{
          --bg:#0b0d12;--card:#0d1220;--ink:#e6e9f2;--dim:#c5cbe0;--line:#1e2433;
          --brand:#ff2d55;--gold:#ffd166;
        }
        .slm-page{min-height:100dvh;position:relative;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;}
        /* Fixed background image layer */
        .slm-bg{position:fixed;inset:0;background-size:cover;background-position:center;background-attachment:fixed;z-index:-2;transform:scale(1.03)}
        .slm-bg::after{content:"";position:absolute;inset:0;background:radial-gradient(1200px 700px at 100% -10%, #0a1430aa 0%, #05070dbb 35%, #05070dee 70%, #05070ff5 100%);z-index:-1}
        /* Header */
        .slm-header{position:sticky;top:0;z-index:10;display:flex;gap:16px;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid #00000055;background:rgba(7,10,18,.6);backdrop-filter:blur(10px)}
        .slm-brand{display:flex;gap:14px;align-items:center}
        .slm-logo{height:72px;width:auto;object-fit:contain}     /* ⬅️ Bigger logo */
        .slm-h1{margin:0;font-size:22px;letter-spacing:.4px;text-shadow:0 2px 14px #0008}
        .slm-tag{margin:2px 0 0;color:var(--gold);font-size:12px}
        .slm-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:800;background:linear-gradient(135deg,var(--brand),#ff5e7a);color:#fff;border:1px solid #ff5e7a22;box-shadow:0 8px 30px #ff2d5525;transition:transform .15s ease, box-shadow .2s ease}
        .slm-cta:hover{transform:translateY(-1px);box-shadow:0 10px 36px #ff2d5538}
        .slm-cta.big{padding:14px 22px;font-size:16px}
        .slm-ghost{background:transparent;color:var(--ink);border:1px solid #ffffff3a;border-radius:10px;padding:10px 14px;font-weight:700;cursor:pointer;backdrop-filter:blur(2px)}
        .slm-ghost:hover{border-color:#ffffff66}

        /* Tabs */
        .slm-tabs{display:flex;gap:8px;padding:10px 20px;border-bottom:1px solid #00000040;background:linear-gradient(180deg, rgba(8,12,22,.7) 0%, rgba(8,12,22,0) 100%);backdrop-filter:blur(4px)}
        .slm-tab{background:#0f1423cc;color:#e7ebff; border:1px solid #ffffff22; border-radius:999px; padding:8px 14px; cursor:pointer; font-weight:700; text-shadow:0 1px 6px #000}
        .slm-tab.active{color:#fff;border-color:#ffffff66;background:#141a2bcc}

        /* Main content card spacing */
        .slm-main{max-width:1100px;margin:0 auto;padding:28px 20px 60px}
        .slm-panel{background:#0b1121aa;border:1px solid #ffffff14;border-radius:16px;padding:24px;box-shadow:0 10px 40px #0007}

        .slm-hero h2{margin:0 0 10px;font-size:34px}
        .slm-hero p{margin:0 0 16px;color:var(--dim);line-height:1.6}
        .slm-actions{display:flex;flex-wrap:wrap;gap:10px}

        .slm-rules{margin-top:24px;border:1px solid #ffffff1f;border-radius:16px;padding:20px;background:#0d1220e6}
        .slm-rules h3{margin:0 0 10px}
        .slm-rules ul{margin:0;padding-left:18px;color:#dee3fb}

        .slm-card{display:grid;grid-template-columns:280px 1fr;gap:18px;background:#0d1220e6;border:1px solid #ffffff1f;border-radius:16px;overflow:hidden;margin:18px 0}
        .slm-img{width:100%;height:220px;object-fit:cover}
        .slm-body{padding:16px}
        .slm-body h3{margin:0 0 6px}
        .slm-body p{margin:0;color:#d6dcf7}

        /* Pricing */
        .slm-trial{border:2px solid var(--gold);background:linear-gradient(180deg,#1a1f34ee, #101426ee);border-radius:16px;padding:18px;margin-bottom:18px;box-shadow:0 10px 40px #0009}
        .slm-trial h3{margin:0 0 6px;color:var(--gold)}
        .slm-trial p{margin:0 0 12px;color:#e9ecff}
        .slm-grid{display:grid;grid-template-columns:1fr;gap:20px}
        .slm-col{border:1px solid #ffffff1f;border-radius:16px;background:#0d1220e6;padding:18px}
        .slm-col h3{margin:0 0 12px}
        .slm-price{list-style:none;margin:0;padding:0}
        .slm-price li{display:grid;grid-template-columns:1fr auto auto;gap:10px;align-items:center;padding:10px 0;border-bottom:1px dashed #2b3554;color:#d6dcf7}
        .slm-price li:last-child{border-bottom:none}
        .slm-price strong{color:#fff}

        .slm-quote{border:1px solid #ffffff1f;border-radius:16px;padding:18px;background:#0d1220e6;margin:14px 0}
        .slm-quote p{margin:0 0 8px;font-style:italic}
        .slm-quote span{color:var(--gold);font-size:14px}

        .slm-contact{border:1px solid #ffffff1f;border-radius:16px;background:#0d1220e6;padding:18px;display:flex;gap:18px;align-items:center;flex-wrap:wrap}

        .slm-footer{margin-top:40px;border-top:1px solid #00000055;padding:18px 20px;text-align:center;color:#e1e6ff;background:rgba(7,10,18,.6);backdrop-filter:blur(6px)}

        /* Reveal */
        .slm-reveal{opacity:0;transform:translateY(12px);transition:opacity .5s ease, transform .5s ease}
        .slm-reveal.in{opacity:1;transform:translateY(0)}

        @media(max-width:900px){
          .slm-card{grid-template-columns:1fr}
          .slm-hero h2{font-size:28px}
          .slm-logo{height:56px}
        }
      `}</style>

      {/* Fixed storm background */}
      <div
        className="slm-bg"
        style={{ backgroundImage: `url(${bgForTab})` }}
        aria-hidden="true"
      />

      <div className="slm-page">
        {/* Header */}
        <header className="slm-header">
          <div className="slm-brand">
            <img src={logo} alt="Storm Lead Machine" className="slm-logo" />
            <div>
              <h1 className="slm-h1">Storm Lead Machine</h1>
              <p className="slm-tag">Can’t Stop the Machine</p>
            </div>
          </div>
          <a className="slm-cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
            Get Leads Now
          </a>
        </header>

        {/* Tabs */}
        <nav className="slm-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`slm-tab ${active === t.id ? "active" : ""}`}
              onClick={() => setActive(t.id)}
              aria-pressed={active === t.id}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="slm-main">
          {active === "overview" && (
            <section className="slm-panel slm-reveal slm-hero">
              <h2>Dominate Storm Markets. On-Demand.</h2>
              <p>
                We deliver exclusive storm leads where you want them — <em>targeted by ZIP</em>, filtered by roof age,
                and tuned for speed. We get you on the roof in front of the owner. <strong>You close it from there.</strong>
              </p>
              <div className="slm-actions">
                <a className="slm-cta big" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
                <button className="slm-ghost" onClick={() => setActive("pricing")}>View Pricing</button>
                <button className="slm-ghost" onClick={() => setActive("lead-types")}>See Lead Types</button>
              </div>

              <div className="slm-rules">
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
            <section className="slm-panel slm-reveal">
              <h2>Storm Lead Types</h2>

              <div className="slm-card">
                <img className="slm-img" src={hailImg} alt="Hail damage on residential roof" />
                <div className="slm-body">
                  <h3>Hail</h3>
                  <p>Target hail zones by ZIP with optional <strong>roof-age filters</strong> for deeper qualification.</p>
                </div>
              </div>

              <div className="slm-card">
                <img className="slm-img" src={windImg} alt="Wind damage on residential roof" />
                <div className="slm-body">
                  <h3>Wind</h3>
                  <p>High-intent homeowners impacted by wind events. Verified areas so you maximize each trip.</p>
                </div>
              </div>

              <div className="slm-card">
                <img className="slm-img" src={tornadoImg} alt="Tornado / hurricane storm damage" />
                <div className="slm-body">
                  <h3>Tornadoes / Hurricanes</h3>
                  <p>Rapid response campaigns across major swaths. Exclusive opportunities routed to your crews.</p>
                </div>
              </div>
            </section>
          )}

          {active === "pricing" && (
            <section className="slm-panel slm-reveal">
              <h2>Pricing</h2>

              {/* ⭐ Trial package first */}
              <div className="slm-trial">
                <h3>1st-time customer — 10 lead trial package</h3>
                <p style={{ fontSize: 18, fontWeight: 800 }}>$1,000</p>
                <a className="slm-cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Start Trial</a>
              </div>

              <div className="slm-grid">
                {/* Residential only (Commercial removed) */}
                <div className="slm-col">
                  <h3>Residential Leads</h3>
                  <ul className="slm-price">
                    <li><span>25 leads</span><span>$120 / lead</span><strong>$3,000</strong></li>
                    <li><span>50 leads</span><span>$115 / lead</span><strong>$5,750</strong></li>
                    <li><span>100 leads</span><span>$110 / lead</span><strong>$11,000</strong></li>
                    <li><span>200 leads</span><span>$105 / lead</span><strong>$21,000</strong></li>
                  </ul>
                </div>
              </div>

              <div className="slm-rules" style={{ marginTop: 18 }}>
                <h3>Filters</h3>
                <ul>
                  <li>5+ yr old roofs only: <strong>$10 more per lead</strong></li>
                  <li>8+ yr old roofs only: <strong>$25 more per lead</strong></li>
                </ul>
              </div>

              <a className="slm-cta big" href={SQUARE_LINK} target="_blank" rel="noreferrer" style={{ marginTop: 16 }}>
                Get Leads Now
              </a>
            </section>
          )}

          {active === "testimonials" && (
            <section className="slm-panel slm-reveal">
              <h2>Testimonials</h2>
              <div className="slm-quote">
                <p>“We closed our first roof within 48 hours. The ZIP targeting is on point and appointments actually show.”</p>
                <span>— R. Roofing Exteriors</span>
              </div>
              <div className="slm-quote">
                <p>“No fluff. Real storm homeowners, and the roof-age filter saved us time on site.”</p>
                <span>— A. M., Project Manager</span>
              </div>
            </section>
          )}

          {active === "contact" && (
            <section className="slm-panel slm-reveal">
              <h2>Contact</h2>
              <div className="slm-contact">
                <p><strong>Phone:</strong> 833-9MACHIN (622-446)</p>
                <p><strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a></p>
                <a className="slm-cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
              </div>
              <p style={{ color: "#e1e6ff", fontSize: 12, marginTop: 8 }}>
                After checkout, we confirm your ZIP filters and launch your campaign.
              </p>
            </section>
          )}

          <footer className="slm-footer">
            <div><strong>Storm Lead Machine</strong> — Exclusive Hail/Wind/Tornado/Hurricane Roofing Leads</div>
            <div>📞 833-9MACHIN (622-446) • 📧 stormleadmachine@gmail.com</div>
            <div style={{ fontSize: 12 }}>© {new Date().getFullYear()} Storm Lead Machine. All rights reserved.</div>
          </footer>
        </main>
      </div>
    </>
  );
}
