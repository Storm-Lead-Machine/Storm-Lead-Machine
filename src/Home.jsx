import React, { useEffect, useMemo, useState } from "react";

// Images fingerprinted by Vite (no /public paths, no cache weirdness)
import smlLogo from "./assets/logo.png";
import hailImg from "./assets/hail-damage.jpg";
import windImg from "./assets/wind-damage.jpg";
import tornadoImg from "./assets/tornado-damage.jpg";

const TABS = [
  { key: "hail", label: "Hail Leads" },
  { key: "wind", label: "Wind Leads" },
  { key: "tornado", label: "Tornado / Hurricanes" },
  { key: "pricing", label: "Pricing" },
  { key: "contact", label: "Contact Us" },
];

export default function Home() {
  const [active, setActive] = useState("hail");
  const [boot, setBoot] = useState(false);

  useEffect(() => setBoot(true), []);

  const bgClass = useMemo(() => {
    switch (active) {
      case "hail":
        return "bg-hail";
      case "wind":
        return "bg-wind";
      case "tornado":
        return "bg-tornado";
      case "pricing":
        return "bg-pricing";
      case "contact":
        return "bg-contact";
      default:
        return "bg-hail";
    }
  }, [active]);

  const rules = (
    <div className="rules">
      <h3>Rules</h3>
      <ul>
        <li><strong>Do not call</strong> the appointment ahead of time — just go.</li>
        <li>Bad leads must be <strong>returned within 2 days</strong> to receive credit.</li>
        <li>If a credit isn’t applicable, we automatically add <strong>20% extra</strong> to help make up for bad leads.</li>
        <li>We get you on the roof in the ZIPs you want. <strong>You close it from there.</strong></li>
      </ul>
    </div>
  );

  return (
    <div className={`page ${bgClass} ${boot ? "fade-in" : "fade-start"}`}>
      {/* Header */}
      <header className="header">
        <div className="brand">
          <img src={smlLogo} alt="Storm Lead Machine logo" className="sml-logo" />
          <h1 className="site-title">Storm Lead Machine</h1>
        </div>

        <nav className="tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`tab ${active === t.key ? "active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

  {active === "hail" && (
  <SectionLead
    title="Hail Leads"
    img={hailimg}
    bullets={[
      "Targeted hail zones by ZIP with roof-age filters.",
      "Verified homeowner & inspection on calendar.",
      "Exclusive — never shared.",
    ]}
    rules={rules}
  />
)}

{active === "wind" && (
  <SectionLead
    title="Wind Leads"
    img={windimg}
    bullets={[
      "Fresh wind swaths with high-intent homeowners.",
      "Decision maker present.",
      "Fast routing to keep crews busy.",
    ]}
    rules={rules}
  />
)}

{active === "tornado" && (
  <SectionLead
    title="Tornado & Hurricane Leads"
    img={tornadoimg}
    bullets={[
      "CAT events nationwide.",
      "Appointments set in your chosen ZIPs.",
      "You close — we feed the roof.",
    ]}
    rules={rules}
  />
)}


        {active === "pricing" && <Pricing />}
        {active === "contact" && <Contact />}
      </main>
           {/* --- Footer --- */}
      <footer className="footer">
        <p>© 2025 Storm Lead Machine • "Can't Stop the Machine"</p>
      </footer>
    </div>
  );
}

/* ---------- Reusable Sections ---------- */

function SectionLead({ title, img, bullets, rules }) {
  return (
    <section className="lead-section">
      <img src={img} alt={title} className="lead-img" />
      <div className="lead-content">
        <h2>{title}</h2>
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {rules}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <ul>
        <li>25 Residential Leads – $3,000</li>
        <li>50 Residential Leads – $5,750</li>
        <li>100 Residential Leads – $11,000</li>
        <li>200 Residential Leads – $21,000</li>
        <li>5 Commercial Leads – $1,500</li>
        <li>20 Commercial Leads – $5,800</li>
        <li>30 Commercial Leads – $8,550</li>
        <li>50 Commercial Leads – $13,750</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        Call <strong>833-9MACHIN (622-446)</strong>
        <br />
        Email:{" "}
        <a href="mailto:stormleadmachine@gmail.com">
          stormleadmachine@gmail.com
        </a>
      </p>
    </section>
  );
}
