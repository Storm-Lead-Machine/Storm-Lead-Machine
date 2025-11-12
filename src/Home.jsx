import React, { useEffect, useMemo, useState } from "react";

const TABS = [
  { key: "hail", label: "Hail Leads" },
  { key: "wind", label: "Wind Leads" },
  { key: "tornado", label: "Tornado / Hurricanes" },
  { key: "pricing", label: "Pricing" },
  { key: "contact", label: "Contact Us" },
];

export default function Home() {
  const [active, setActive] = useState("hail");
  const [animKey, setAnimKey] = useState(0);
  const [boot, setBoot] = useState(false);

  useEffect(() => { setBoot(true); }, []);

  const bgClass = useMemo(() => {
    switch (active) {
      case "hail": return "bg-hail";
      case "wind": return "bg-wind";
      case "tornado": return "bg-tornado";
      case "pricing": return "bg-pricing";
      case "contact": return "bg-contact";
      default: return "bg-hail";
    }
  }, [active]);

  return (
    <div className={`page ${bgClass} ${boot ? "fade-in" : "fade-start"}`}>
      <header className="header">
        <div className="brand">
     <img src="/logo.png" alt="Storm Lead Machine logo" className="sml-logo" />

          <h1 className="site-title">Storm Lead Machine</h1>
        </div>

        <nav className="tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`tab ${active === t.key ? "active" : ""}`}
              onClick={() => { setActive(t.key); setAnimKey(k => k + 1); }}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="content">
        <div key={animKey} className="fade-swap">
          {active === "hail" && (
            <SectionLead
              title="Hail Leads"
              base="/hail-damage.jpg"     /* use HD by default */
              retina="/hail.jpg"
              bullets={[
                "Targeted hail zones by ZIP with roof-age filters.",
                "Verified homeowner & inspection on calendar.",
                "Exclusive — never shared.",
              ]}
              rules
            />
          )}

        {active === "wind" && (
  <SectionLead
    title="Wind Leads"
    base="/wind-damage.jpg"
    retina="/wind-damage.jpg"
    bullets={[
      "Fresh wind swaths with high-intent homeowners.",
      "Decision maker present.",
      "Fast routing to keep crews busy.",
    ]}
  />
)}

{active === "tornado" && (
  <SectionLead
    title="Tornado & Hurricane Leads"
    base="/tornado-damage.jpg"
    retina="/tornado-damage.jpg"
    bullets={[
      "CAT events nationwide.",
      "Appointments set in your chosen ZIPs.",
      "You close – we feed the roof.",
    ]}
  />
)}
          {active === "pricing" && <Pricing />}
          {active === "contact" && <Contact />}
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Storm Lead Machine • “Can’t Stop the Machine”</p>
      </footer>
    </div>
  );
}

function SectionLead({ title, base, retina, bullets, rules }) {
  return (
    <section className="card">
      <img
        src={base}
        srcSet={`${base} 1x, ${retina} 2x`}
        alt={`${title} damage`}
        className="card-hero"
        loading="eager"
        decoding="async"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <ul className="bullets">{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        {rules && (
          <div className="rules">
            <h3>Rules</h3>
            <ul>
              <li><strong>Do not call</strong> the appointment ahead of time—just go.</li>
              <li>Bad leads must be <strong>returned within 2 days</strong> to receive credit.</li>
              <li>If a credit isn’t applicable, we automatically add <strong>20% extra</strong> to help make up for bad leads.</li>
              <li>We get you on the roof in the ZIPs you want. <strong>You close it from there.</strong></li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="card pricing">
      <div className="card-body">
        <h2 className="card-title">Pricing</h2>

        <div className="trial-banner">
          Start today with a <strong>10 lead trial package for $1000</strong>.
        </div>

        <div className="grid">
          <div>
            <h3>Residential Leads</h3>
            <ul className="prices">
              <li>25 leads — $120 per lead — $3,000</li>
              <li>50 leads — $115 per lead — $5,750</li>
              <li>100 leads — $110 per lead — $11,000</li>
              <li>200 leads — $105 per lead — $21,000</li>
            </ul>
          </div>
          <div>
            <h3>Commercial Leads</h3>
            <ul className="prices">
              <li>5 leads — $300 per lead — $1,500</li>
              <li>20 leads — $290 per lead — $5,800</li>
              <li>30 leads — $285 per lead — $8,550</li>
              <li>50 leads — $275 per lead — $13,750</li>
            </ul>
          </div>
          <div>
            <h3>Filters</h3>
            <ul className="prices">
              <li>5+ yr old roofs only: +$10/lead</li>
              <li>8+ yr old roofs only: +$25/lead</li>
            </ul>
          </div>
        </div>

        <div className="cta-row">
          <a className="btn" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
            Get leads now
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="card">
      <div className="card-body">
        <h2 className="card-title">Contact Us</h2>
        <p className="contact-line">
          Phone: <a href="tel:+183369622446">833-9MACHIN (622446)</a>
        </p>
        <p className="contact-line">
          Email: <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
        </p>
        <p className="muted">Serving contractors nationwide with exclusive storm appointments.</p>
      </div>
    </section>
  );
}
