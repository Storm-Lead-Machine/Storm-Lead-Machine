import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("hail");

  // Your Stripe payment link (10-lead trial)
  const stripeLink = "https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00";

  const sectionClass = `slm-section slm-section-${activeTab}`;

  const tabs = [
    { id: "hail", label: "Hail Leads" },
    { id: "wind", label: "Wind Leads" },
    { id: "tornado", label: "Tornado / Hurricanes" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="slm-page">
      {/* HEADER + TABS */}
      <header className="slm-header">
        <div className="slm-header-inner">
          <div className="slm-brand">
            <img
              src="/Logo.png"
              alt="Storm Lead Machine"
              className="slm-logo slm-hero-pulse"
            />
            <div>
              <div className="slm-title">Storm Lead Machine</div>
              <div className="slm-tagline">Can’t Stop The Machine.</div>
            </div>
          </div>

          <nav className="slm-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={
                  activeTab === tab.id
                    ? "slm-nav-pill slm-nav-pill-active"
                    : "slm-nav-pill"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="slm-hero slm-fade-in">
        <h1 className="slm-hero-title">Storm Lead Machine</h1>
        <p className="slm-hero-sub">
          We deliver homeowner storm damage leads directly to your business.
        </p>
        <a
          href={stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="slm-btn slm-btn-main slm-hero-pulse"
        >
          Get Leads Now
        </a>
      </section>

      {/* TAB CONTENT */}
      <main className={sectionClass}>
        {activeTab === "hail" && (
          <div className="slm-card slm-card-fade">
            <img
              src="/hail-damage.jpg"
              alt="Hail damage"
              className="slm-card-img"
            />
            <h2 className="slm-section-title">Hail Damage Leads</h2>
            <p className="slm-text">
              Homeowners in confirmed hail swaths with visible or suspected roof
              damage. Filter by roof age and ZIP codes to match your ideal
              storm-recovery targets.
            </p>
          </div>
        )}

        {activeTab === "wind" && (
          <div className="slm-card slm-card-fade">
            <img
              src="/wind-damage.jpg"
              alt="Wind damage"
              className="slm-card-img"
            />
            <h2 className="slm-section-title">Wind Damage Leads</h2>
            <p className="slm-text">
              High-wind events causing missing shingles, creased tabs, and
              siding damage. Perfect for repair and full replacement plays.
            </p>
          </div>
        )}

        {activeTab === "tornado" && (
          <div className="slm-card slm-card-fade">
            <img
              src="/tornado-damage.jpg"
              alt="Tornado & hurricane damage"
              className="slm-card-img"
            />
            <h2 className="slm-section-title">Tornado & Hurricane Leads</h2>
            <p className="slm-text">
              Severe storm impact zones with heavy roof and structure damage.
              High-close-rate markets for hungry storm teams.
            </p>
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="slm-pricing">
            {/* TRIAL CARD */}
            <div className="slm-card slm-card-fade slm-pricing-trial">
              <h2 className="slm-section-title">10 Lead Trial Package</h2>
              <h3 className="slm-trial-subtitle">
                10 Residential Leads – Trial
              </h3>
              <div className="slm-trial-price">$1,000</div>
              <p className="slm-text">
                We get you in front of qualified homeowners in active storm
                zones. You close the deals – we keep the machine running.
              </p>
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="slm-btn slm-btn-main"
              >
                Pay &amp; Start Trial
              </a>
            </div>

            {/* FULL PRICING TABLES */}
            <div className="slm-card slm-fade-in-slow">
              <h3 className="slm-table-title">Residential Leads</h3>
              <table className="slm-table">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Price / Lead</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25 leads</td>
                    <td>$120</td>
                    <td>$3,000</td>
                  </tr>
                  <tr>
                    <td>50 leads</td>
                    <td>$115</td>
                    <td>$5,750</td>
                  </tr>
                  <tr>
                    <td>100 leads</td>
                    <td>$110</td>
                    <td>$11,000</td>
                  </tr>
                  <tr>
                    <td>200 leads</td>
                    <td>$105</td>
                    <td>$21,000</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="slm-table-title">Commercial Leads</h3>
              <table className="slm-table">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Price / Lead</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5 leads</td>
                    <td>$300</td>
                    <td>$1,500</td>
                  </tr>
                  <tr>
                    <td>20 leads</td>
                    <td>$290</td>
                    <td>$5,800</td>
                  </tr>
                  <tr>
                    <td>30 leads</td>
                    <td>$285</td>
                    <td>$8,550</td>
                  </tr>
                  <tr>
                    <td>50 leads</td>
                    <td>$275</td>
                    <td>$13,750</td>
                  </tr>
                </tbody>
              </table>

              <div className="slm-how">
                <h3 className="slm-table-title">How Our Leads Work</h3>
                <ul className="slm-list">
                  <li>
                    We get you face-to-face with homeowners in storm-affected
                    ZIP codes.
                  </li>
                  <li>Do not call the leads ahead of time before you go.</li>
                  <li>Bad leads must be returned within 2 days for credit.</li>
                  <li>
                    If leads are not returned within 2 days, we automatically
                    give you <strong>20% extra leads</strong> to help make up
                    for any bad data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="slm-card slm-card-fade">
            <h2 className="slm-section-title">Contact Us</h2>
            <p className="slm-text slm-text-center">
              Ready to load your storm pipeline? Reach out to the Machine.
            </p>
            <p className="slm-text slm-text-center">
              <strong>Phone:</strong> 833-9MACHIN (622-446)
              <br />
              <strong>Email:</strong> stormleadmachine@gmail.com
            </p>

            <h3 className="slm-table-title">Lead Rules</h3>
            <ul className="slm-list">
              <li>
                We get you face-to-face with homeowners in storm-affected ZIP
                codes.
              </li>
              <li>Do not call the leads ahead of time before you go.</li>
              <li>Bad leads must be returned within 2 days for credit.</li>
              <li>
                After 2 days, we automatically give you{" "}
                <strong>20% extra leads</strong> to help make up for any bad
                data.
              </li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

