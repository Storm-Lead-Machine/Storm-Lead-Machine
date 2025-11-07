import React, { useMemo, useState } from "react";

/* ✅ Use the images you already have in /src (per your repo screenshot) */
import hailImg from "./hail-damage.jpg";
import windImg from "./wind-damage.jpg";
import tornadoImg from "./tornado-damage.jpg";
/* Your logo (file has spaces; this import works fine) */
import logo from "./Storm Lead Machine Logo.png";

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");

  const bgMap = useMemo(
    () => ({
      "Lead Types":
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1920&auto=format&fit=crop",
      Pricing:
        "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1920&auto=format&fit=crop",
      Rules:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
      Contact:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1920&auto=format&fit=crop",
    }),
    []
  );
  const bgUrl = bgMap[active];

  return (
    <div className="app" style={{ backgroundImage: `url('${bgUrl}')` }}>
      <header className={`site-header ${active === "Lead Types" ? "site-header--home" : ""}`}>
        <div className="brand">
          <img src={logo} alt="Storm Lead Machine" className="brand__logo" />
          <span className="brand__title">Storm Lead Machine</span>
        </div>

        <nav className="nav">
          {TABS.map((t) => (
            <button
              key={t}
              className={`nav__tab ${active === t ? "is-active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
          <a
            className="cta"
            href="#lead-now"
            onClick={(e) => {
              e.preventDefault();
              setActive("Pricing");
              document.getElementById("pricingTop")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Leads Now
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Dominate Storm Markets. On-Demand.</h1>
          <p>
            Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast
            routing. We get you on the roof in front of the owner. <strong>You close it.</strong>
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="#lead-now"
              onClick={(e) => {
                e.preventDefault();
                setActive("Pricing");
              }}
            >
              Get Leads Now
            </a>
            <button className="btn" onClick={() => setActive("Pricing")}>View Pricing</button>
            <button className="btn" onClick={() => setActive("Lead Types")}>See Lead Types</button>
          </div>
        </div>
      </section>

      <main className="page">
        {active === "Lead Types" && <LeadTypes />}
        {active === "Pricing" && <Pricing />}
        {active === "Rules" && <Rules />}
        {active === "Contact" && <Contact />}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Storm Lead Machine. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* -------- Sections -------- */

function LeadTypes() {
  return (
    <section className="section">
      <h2>Storm Lead Types</h2>
      <p className="muted">Target exactly where you want to sell.</p>

      <div className="cards">
        <Card img={hailImg} title="Hail" text="Targeted hail zones by ZIP with roof-age filters." />
        <Card img={windImg} title="Wind" text="Fresh wind swaths with high-intent homeowners." />
        <Card img={tornadoImg} title="Tornado / Hurricanes" text="ZIP-precise disaster coverage for fast deployment and scale." />
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricingTop">
      <h2>Pricing</h2>
      <p className="muted">Transparent. Scalable. Built for closers.</p>

      <div className="grid pricing">
        <div className="pricing__col">
          <h3>Residential Leads</h3>
          <ul className="list">
            <li>25 leads — <strong>$120</strong>/lead — $3,000</li>
            <li>50 leads — <strong>$115</strong>/lead — $5,750</li>
            <li>100 leads — <strong>$110</strong>/lead — $11,000</li>
            <li>200 leads — <strong>$105</strong>/lead — $21,000</li>
          </ul>
        </div>
        <div className="pricing__col">
          <h3>Commercial Leads</h3>
          <ul className="list">
            <li>5 leads — <strong>$300</strong>/lead — $1,500</li>
            <li>20 leads — <strong>$290</strong>/lead — $5,800</li>
            <li>30 leads — <strong>$285</strong>/lead — $8,550</li>
            <li>50 leads — <strong>$275</strong>/lead — $13,750</li>
          </ul>
        </div>
        <div className="pricing__col">
          <h3>Filters</h3>
          <ul className="list">
            <li>5+ yr roofs: +$10/lead</li>
            <li>8+ yr roofs: +$25/lead</li>
          </ul>
          <a id="lead-now" className="btn btn--primary btn--block" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
            Checkout — Get Leads Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Rules() {
  return (
    <section className="section">
      <h2>Rules</h2>
      <ul className="list">
        <li><strong>Don’t pre-call the lead.</strong> You’re booked to show up and get on the roof.</li>
        <li><strong>Bad leads must be returned within 2 days</strong> to receive credit.</li>
        <li>If not returned in time, we <strong>automatically add 20% extra leads</strong> to make up for it.</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <h2>Contact Us</h2>
      <p className="muted">We usually reply the same day.</p>
      <div className="contact">
        <div className="contact__card">
          <p><strong>Phone:</strong> 833-9MACHIN (622-446)</p>
          <p><strong>Email:</strong> <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a></p>
        </div>
        <form
          className="contact__form"
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.currentTarget.name.value;
            const email = e.currentTarget.email.value;
            const msg = encodeURIComponent(e.currentTarget.message.value);
            window.location.href = `mailto:stormleadmachine@gmail.com?subject=Lead%20Inquiry%20from%20${encodeURIComponent(
              name || "Website"
            )}&body=From:%20${encodeURIComponent(email)}%0D%0A%0D%0A${msg}`;
          }}
        >
          <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>Message<textarea name="message" rows={4} required placeholder="Tell us what markets you want…" /></label>
          <button className="btn btn--primary" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

function Card({ img, title, text }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card__img" />
      <div className="card__body">
        <h3>{title}</h3>
        <p className="muted">{text}</p>
      </div>
    </div>
  );
}
