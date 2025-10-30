import React, { useEffect, useState } from "react";

// ✅ Make sure these files exist with the exact names/casing:
import logo from "./assets/logo.png";          // your existing logo
import hailImg from "./assets/hail.jpg";       // add this image
import windImg from "./assets/wind.jpg";       // add this image
import tornadoImg from "./assets/tornado.jpg"; // add this image

const SQUARE_LINK = "https://square.link/u/RSfgAZHS";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lead-types", label: "Storm Lead Types" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("overview");

  // Simple scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <img src={logo} alt="Storm Lead Machine" className="logo" />
          <div className="brand-text">
            <h1>Storm Lead Machine</h1>
            <p className="tagline">Can’t Stop the Machine</p>
          </div>
        </div>

        <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
          Get Leads Now
        </a>
      </header>

      {/* Tabs */}
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

      {/* Content */}
      <main className="content">
        {active === "overview" && <Overview setActive={setActive} />}
        {active === "lead-types" && <LeadTypes />}
        {active === "pricing" && <Pricing />}
        {active === "testimonials" && <Testimonials />}
        {active === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <strong>Storm Lead Machine</strong> — Exclusive Hail/Wind/Tornado/Hurricane Roofing Leads
        </div>
        <div>📞 833-9MACHIN (622-446) • 📧 stormleadmachine@gmail.com</div>
        <div className="small">© {new Date().getFullYear()} Storm Lead Machine. All rights reserved.</div>
      </footer>
    </div>
  );
}

/* ----------------- Sections ----------------- */

function Overview({ setActive }) {
  return (
    <section className="panel reveal">
      <div className="hero">
        <h2>Dominate Storm Markets. On-Demand.</h2>
        <p>
          We deliver exclusive storm leads where you want them — <em>targeted by ZIP</em>, filtered by roof age, and
          tuned for speed. We get you on the roof in front of the owner. <strong>You close it from there.</strong>
        </p>
        <div className="hero-actions">
          <a className="cta big" href={SQUARE_LINK} target="_blank" rel="noreferrer">
            Get Leads Now
          </a>
          <button className="ghost" onClick={() => setActive("pricing")}>
            View Pricing
          </button>
          <button className="ghost" onClick={() => setActive("lead-types")}>
            See Lead Types
          </button>
        </div>
      </div>

      <div className="rules">
        <h3>Rules to Running the Appointments</h3>
        <ul>
          <li><strong>Do not call the leads ahead of time</strong> before you go.</li>
          <li><strong>Bad leads must be returned within 2 days.</strong></li>
          <li>We get you on the roof in the ZIP codes you want — <strong>you close the deal.</strong></li>
        </ul>
      </div>
    </section>
  );
}

function LeadTypes() {
  return (
    <section className="panel reveal">
      <h2>Storm Lead Types</h2>

      {/* Hail */}
      <div className="card">
        <img src={hailImg} alt="Hail damage on residential roof" className="card-img" />
        <div className="card-body">
          <h3>Hail</h3>
          <p>
            Target hail zones by ZIP with optional <strong>roof-age filters</strong> for deeper qualification. Fast
            turnaround to keep you in the field closing deals.
          </p>
        </div>
      </div>

      {/* Wind */}
      <div className="card">
        <img src={windImg} alt="Wind damage on residential roof" className="card-img" />
        <div className="card-body">
          <h3>Wind</h3>
          <p>
            High-intent homeowners impacted by wind events. We focus on areas with verifiable reports so you maximize
            every trip.
          </p>
        </div>
      </div>

      {/* Tornado / Hurricanes */}
      <div className="card">
        <img src={tornadoImg} alt="Tornado / hurricane storm damage" className="card-img" />
        <div className="card-body">
          <h3>Tornadoes / Hurricanes</h3>
          <p>
            Rapid response campaigns in major swaths. We route exclusive opportunities to your crews where work is
            hottest.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="panel reveal">
      <h2>Pricing</h2>

      <div className="grid">
        <div className="pricing-col">
          <h3>Residential Leads</h3>
          <ul className="price-list">
            <li><span>25 leads</span><span>$120 / lead</span><strong>$3,000</strong></li>
            <li><span>50 leads</span><span>$115 / lead</span><strong>$5,750</strong></li>
            <li><span>100 leads</span><span>$110 / lead</span><strong>$11,000</strong></li>
            <li><span>200 leads</span><span>$105 / lead</span><strong>$21,000</strong></li>
          </ul>
        </div>

        <div className="pricing-col">
          <h3>Commercial Leads</h3>
          <ul className="price-list">
            <li><span>5 leads</span><span>$300 / lead</span><strong>$1,500</strong></li>
            <li><span>20 leads</span><span>$290 / lead</span><strong>$5,800</strong></li>
            <li><span>30 leads</span><span>$285 / lead</span><strong>$8,550</strong></li>
            <li><span>50 leads</span><span>$275 / lead</span><strong>$13,750</strong></li>
          </ul>
        </div>
      </div>

      <div className="filters">
        <h4>Filters</h4>
        <ul>
          <li>5+ yr old roofs only: <strong>$10 more per lead</strong></li>
          <li>8+ yr old roofs only: <strong>$25 more per lead</strong></li>
        </ul>
      </div>

      <a className="cta big" href={SQUARE_LINK} target="_blank" rel="noreferrer">
        Get Leads Now
      </a>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="panel reveal">
      <h2>Testimonials</h2>
      <div className="quote">
        <p>
          “We closed our first roof within 48 hours. The ZIP targeting is on point and appointments actually show.”
        </p>
        <span>— R. Roofing Exteriors</span>
      </div>
      <div className="quote">
        <p>
          “No fluff. Real storm homeowners, and the roof-age filter saved us time on site.”
        </p>
        <span>— A. M., Project Manager</span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="panel reveal">
      <h2>Contact</h2>
      <div className="contact-card">
        <p><strong>Phone:</strong> 833-9MACHIN (622-446)</p>
        <p><strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a></p>
        <a className="cta" href={SQUARE_LINK} target="_blank" rel="noreferrer">
          Get Leads Now
        </a>
      </div>
      <p className="small dim">After checkout, we confirm your ZIP filters and launch your campaign.</p>
    </section>
  );
}
