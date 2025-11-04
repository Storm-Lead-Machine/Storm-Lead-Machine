import React, { useState, useMemo } from "react";
import "./site.css";


export default function Home() {
  // Tabs: leadTypes, pricing, rules, contact
  const [tab, setTab] = useState("leadTypes");

  // Map a different background image per page
  const bgMap = useMemo(
    () => ({
      leadTypes: "/images/sky1.jpg",
      pricing: "/images/sky2.jpg",
      rules: "/images/sky3.jpg",
      contact: "/images/sky4.jpg",
    }),
    []
  );

  const bgUrl = bgMap[tab] || "/images/sky5.jpg";

  return (
    <div className="slm-page" style={{ backgroundImage: `url('${bgUrl}')` }}>
      {/* Header */}
      <header className="slm-header">
        <div className="slm-header-left">
          <img
            src="/images/storm-lead-machine-logo.png"
            alt="Storm Lead Machine"
            className="slm-logo"
          />
          <span className="slm-brand">Storm Lead Machine</span>
        </div>

        <nav className="slm-nav">
          <button
            className={`slm-tab ${tab === "leadTypes" ? "active" : ""}`}
            onClick={() => setTab("leadTypes")}
          >
            Lead Types
          </button>
          <button
            className={`slm-tab ${tab === "pricing" ? "active" : ""}`}
            onClick={() => setTab("pricing")}
          >
            Pricing
          </button>
          <button
            className={`slm-tab ${tab === "rules" ? "active" : ""}`}
            onClick={() => setTab("rules")}
          >
            Rules
          </button>
          <button
            className={`slm-tab ${tab === "contact" ? "active" : ""}`}
            onClick={() => setTab("contact")}
          >
            Contact
          </button>

          <a
            className="slm-cta sm-hide"
            href="https://square.link/u/RSfgAZHS"
            target="_blank"
            rel="noreferrer"
          >
            Get Leads Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="slm-hero">
        <h1>Dominate Storm Markets. On-Demand.</h1>
        <p>
          Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast routing.
          We get you on the roof in front of the owner. <strong>You close it.</strong>
        </p>

        <div className="slm-hero-ctas">
          <a
            className="slm-cta"
            href="https://square.link/u/RSfgAZHS"
            target="_blank"
            rel="noreferrer"
          >
            Get Leads Now
          </a>
          <button className="slm-ghost" onClick={() => setTab("pricing")}>
            View Pricing
          </button>
          <button className="slm-ghost" onClick={() => setTab("leadTypes")}>
            See Lead Types
          </button>
        </div>

        {/* 20% over-delivery banner */}
        <div className="slm-ribbon">
          We automatically over-deliver by <strong>+20%</strong> on every order to cover returns/replacements.
        </div>
      </section>

      {/* Page content */}
      <main className="slm-content">
        {tab === "leadTypes" && <LeadTypes />}
        {tab === "pricing" && <Pricing />}
        {tab === "rules" && <Rules />}
        {tab === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <footer className="slm-footer">
        <div>© {new Date().getFullYear()} Storm Lead Machine</div>
        <div>
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
          {"  ·  "}
          <a href="tel:+183369622446">833-9MACHIN (622446)</a>
        </div>
      </footer>
    </div>
  );
}

/* ==== Sections ==== */

function LeadTypes() {
  return (
    <section className="grid-cards">
      {/* Hail */}
      <article className="card">
        <img src="/images/hail.jpg" alt="Hail damage" className="card-img" />
        <div className="card-body">
          <h3>Hail</h3>
          <p>Targeted hail zones by ZIP with roof-age filters.</p>
        </div>
      </article>

      {/* Wind */}
      <article className="card">
        <img src="/images/wind.jpg" alt="Wind damage" className="card-img" />
        <div className="card-body">
          <h3>Wind</h3>
          <p>Fresh wind swaths with high-intent homeowners.</p>
        </div>
      </article>

      {/* Tornado / Hurricanes */}
      <article className="card">
        <img
          src="/images/tornado.jpg"
          alt="Tornado and hurricane damage"
          className="card-img"
        />
        <div className="card-body">
          <h3>Tornado / Hurricanes</h3>
          <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
        </div>
      </article>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing">
      <h2>Residential Leads</h2>
      <div className="price-grid">
        <PriceCard qty="25" price="$120" total="$3,000" />
        <PriceCard qty="50" price="$115" total="$5,750" />
        <PriceCard qty="100" price="$110" total="$11,000" />
        <PriceCard qty="200" price="$105" total="$21,000" />
      </div>

      <h2>Commercial Leads</h2>
      <div className="price-grid">
        <PriceCard qty="5" price="$300" total="$1,500" />
        <PriceCard qty="20" price="$290" total="$5,800" />
        <PriceCard qty="30" price="$285" total="$8,550" />
        <PriceCard qty="50" price="$275" total="$13,750" />
      </div>

      <h2>Filters</h2>
      <ul className="filters">
        <li>5+ yr old roofs: <strong>+ $10</strong> per lead</li>
        <li>8+ yr old roofs: <strong>+ $25</strong> per lead</li>
      </ul>

      <div className="pricing-cta">
        <a
          className="slm-cta"
          href="https://square.link/u/RSfgAZHS"
          target="_blank"
          rel="noreferrer"
        >
          Get Leads Now
        </a>
      </div>
    </section>
  );
}

function PriceCard({ qty, price, total }) {
  return (
    <div className="price-card">
      <div className="price-qty">{qty} Leads</div>
      <div className="price-each">{price} / lead</div>
      <div className="price-total">{total}</div>
    </div>
  );
}

function Rules() {
  return (
    <section className="rules">
      <h2>Rules to Run the Appointments</h2>
      <ol>
        <li><strong>Do not call leads ahead of time</strong> before you go.</li>
        <li><strong>Bad leads must be returned within 2 days.</strong></li>
        <li>We get you on the roof in the ZIPs you choose. <strong>You close it.</strong></li>
        <li>Every order includes an automatic <strong>+20% over-delivery</strong> to cover returns.</li>
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        Questions or custom targeting? Reach out and we’ll get you deployed fast.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+183369622446">833-9MACHIN (622446)</a>
        </div>
        <div className="contact-card">
          <h3>Order Leads</h3>
          <a
            className="slm-cta"
            href="https://square.link/u/RSfgAZHS"
            target="_blank"
            rel="noreferrer"
          >
            Get Leads Now
          </a>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We’ll reach out shortly.");
        }}
      >
        <label>
          Name
          <input type="text" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" required placeholder="you@company.com" />
        </label>
        <label>
          Message
          <textarea rows="4" placeholder="Tell us your target ZIPs, roof-age filters, and volume." />
        </label>
        <button className="slm-cta" type="submit">Send</button>
      </form>
    </section>
  );
}
