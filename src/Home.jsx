import React, { useEffect, useState } from "react";

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
      {/* Local styles just for this component */}
      <style>{`
        :root{
          --bg:#0b0d12;--card:#0d1220;--ink:#e6e9f2;--dim:#aab1c6;--line:#1e2433;
          --brand:#ff2d55;--gold:#ffd166;
        }
        .slm-page{min-height:100dvh;background:radial-gradient(1200px 1200px at 100% -10%, #14203a 0%, var(--bg) 45%);color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;}
        .slm-header{position:sticky;top:0;z-index:10;display:flex;gap:16px;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--line);background:rgba(9,12,18,.75);backdrop-filter:blur(8px)}
        .slm-brand{display:flex;gap:12px;align-items:center}
        .slm-logo{height:44px;width:auto;object-fit:contain}
        .slm-h1{margin:0;font-size:20px;letter-spacing:.4px}
        .slm-tag{margin:2px 0 0;color:var(--gold);font-size:12px}
        .slm-cta{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:999px;text-decoration:none;font-weight:700;background:linear-gradient(135deg,var(--brand),#ff5e7a);color:#fff;border:1px solid #ff5e7a22;box-shadow:0 8px 30px #ff2d551e;transition:transform .15s ease, box-shadow .2s ease}
        .slm-cta:hover{transform:translateY(-1px);box-shadow:0 10px 36px #ff2d5530}
        .slm-cta.big{padding:14px 22px;font-size:16px}
        .slm-ghost{background:transparent;color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:10px 14px;font-weight:600;cursor:pointer}
        .slm-ghost:hover{border-color:#2a344c}

        .slm-tabs{display:flex;gap:8px;padding:10px 20px;border-bottom:1px solid var(--line);background:linear-gradient(180deg,#0f1320 0%, rgba(15,19,32,0) 100%)}
        .slm-tab{background:#0f1423;color:var(--dim);border:1px solid var(--line);border-radius:999px;padding:8px 14px;cursor:pointer;font-weight:600}
        .slm-tab.active{color:#fff;border-color:#2d3750;background:#141a2b}

        .slm-main{max-width:1100px;margin:0 auto;padding:28px 20px 60px}
        .slm-hero{background:radial-gradient(500px 300px at 0% 0%, #1a2541 0%, transparent 70%);
          border:1px solid var(--line);border-radius:16px;padding:28px}
        .slm-hero h2{margin:0 0 10px;font-size:34px}
        .slm-hero p{margin:0 0 16px;color:var(--dim);line-height:1.6}
        .slm-actions{display:flex;flex-wrap:wrap;gap:10px}

        .slm-rules{margin-top:24px;border:1px solid var(--line);border-radius:16px;padding:20px;background:var(--card)}
        .slm-rules h3{margin:0 0 10px}
        .slm-rules ul{margin:0;padding-left:18px;color:var(--dim)}

        .slm-card{display:grid;grid-template-columns:280px 1fr;gap:18px;background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden;margin:18px 0}
        .slm-img{width:100%;height:220px;object-fit:cover}
        .slm-body{padding:16px}
        .slm-body h3{margin:0 0 6px}
        .slm-body p{margin:0;color:var(--dim)}

        .slm-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
        .slm-col{border:1px solid var(--line);border-radius:16px;background:var(--card);padding:18px}
        .slm-col h3{margin:0 0 12px}
        .slm-price{list-style:none;margin:0;padding:0}
        .slm-price li{display:grid;grid-template-columns:1fr auto auto;gap:10px;align-items:center;padding:10px 0;border-bottom:1px dashed #1f273a;color:var(--dim)}
        .slm-price li:last-child{border-bottom:none}
        .slm-price strong{color:#fff}

        .slm-filters{margin:18px 0 10px}
        .slm-filters h4{margin:0 0 8px}
        .slm-filters ul{margin:0;padding-left:18px;color:var(--dim)}

        .slm-quote{border:1px solid var(--line);border-radius:16px;padding:18px;background:var(--card);margin:14px 0}
        .slm-quote p{margin:0 0 8px;font-style:italic}
        .slm-quote span{color:var(--gold);font-size:14px}

        .slm-contact{border:1px solid var(--line);border-radius:16px;background:var(--card);padding:18px;display:flex;gap:18px;align-items:center;flex-wrap:wrap}
        .slm-footer{margin-top:40px;border-top:1px solid var(--line);padding:18px 20px;text-align:center;color:var(--dim);background:#0b0f1c}

        .slm-reveal{opacity:0;transform:translateY(12px);transition:opacity .5s ease, transform .5s ease}
        .slm-reveal.in{opacity:1;transform:translateY(0)}

        @media(max-width:900px){
          .slm-card{grid-template-columns:1fr}
          .slm-grid{grid-template-columns:1fr}
          .slm-hero h2{font-size:28px}
        }
      `}</style>

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
          <a className="slm-cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
        </header>

        {/* Tabs */}
        <nav className="slm-tabs">
          {tabs.map(t => (
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
            <section className="slm-reveal">
              <div className="slm-hero">
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
            <section className="slm-reveal">
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
            <section className="slm-reveal">
              <h2>Pricing</h2>

              <div className="slm-grid">
                <div className="slm-col">
                  <h3>Residential Leads</h3>
                  <ul className="slm-price">
                    <li><span>25 leads</span><span>$120 / lead</span><strong>$3,000</strong></li>
                    <li><span>50 leads</span><span>$115 / lead</span><strong>$5,750</strong></li>
                    <li><span>100 leads</span><span>$110 / lead</span><strong>$11,000</strong></li>
                    <li><span>200 leads</span><span>$105 / lead</span><strong>$21,000</strong></li>
                  </ul>
                </div>
                <div className="slm-col">
                  <h3>Commercial Leads</h3>
                  <ul className="slm-price">
                    <li><span>5 leads</span><span>$300 / lead</span><strong>$1,500</strong></li>
                    <li><span>20 leads</span><span>$290 / lead</span><strong>$5,800</strong></li>
                    <li><span>30 leads</span><span>$285 / lead</span><strong>$8,550</strong></li>
                    <li><span>50 leads</span><span>$275 / lead</span><strong>$13,750</strong></li>
                  </ul>
                </div>
              </div>

              <div className="slm-filters">
                <h4>Filters</h4>
                <ul>
                  <li>5+ yr old roofs only: <strong>$10 more per lead</strong></li>
                  <li>8+ yr old roofs only: <strong>$25 more per lead</strong></li>
                </ul>
              </div>

              <a className="slm-cta big" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
            </section>
          )}

          {active === "testimonials" && (
            <section className="slm-reveal">
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
            <section className="slm-reveal">
              <h2>Contact</h2>
              <div className="slm-contact">
                <p><strong>Phone:</strong> 833-9MACHIN (622-446)</p>
                <p><strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a></p>
                <a className="slm-cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">Get Leads Now</a>
              </div>
              <p style={{ color: "var(--dim)", fontSize: 12, marginTop: 8 }}>
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
