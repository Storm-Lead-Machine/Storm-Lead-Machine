import React from "react";
import "./site.css"; // lowercase (Vercel is case-sensitive)

export default function Home() {
  return (
    <main className="slm-root">
      {/* HERO — inline background so it cannot be lost */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url("/hail-leads.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero__overlay">
          <header className="nav">
            <div className="brand">
              <img
                src="/Storm Lead Machine Logo.png"
                alt="Storm Lead Machine"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <span>Storm Lead Machine</span>
            </div>
            <div className="contact">
              <a href="tel:+183369622446">833-9MACHIN (622446)</a>
              <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
            </div>
          </header>

          <div className="hero__content">
            <h1>Dominate Storm Markets. On-Demand.</h1>
            <p>
              Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast routing.
              We get you on the roof in front of the owner. <b>You close it.</b>
            </p>
            <div className="hero__buttons">
              <a className="btn cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
                Get Leads Now
              </a>
              <a className="btn outline" href="#pricing">View Pricing</a>
              <a className="btn outline" href="#types">See Lead Types</a>
            </div>
          </div>
        </div>
      </section>

      {/* STORM LEAD TYPES — inline backgrounds on each card */}
      <section id="types" className="panel panel--types">
        <div
          className="card bg-hail"
          style={{
            backgroundImage: 'url("/hail-damage.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="card__body" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.65) 100%)" }}>
            <h3>Hail</h3>
            <p>Targeted hail zones by ZIP with roof-age filters.</p>
          </div>
        </div>

        <div
          className="card bg-wind"
          style={{
            backgroundImage: 'url("/wind-damage.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="card__body" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.65) 100%)" }}>
            <h3>Wind</h3>
            <p>Fresh wind swaths with high-intent homeowners.</p>
          </div>
        </div>

        <div
          className="card bg-tornado"
          style={{
            backgroundImage: 'url("/tornado-damage.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="card__body" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.65) 100%)" }}>
            <h3>Tornado / Hurricanes</h3>
            <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="panel panel--pricing">
        <div className="price-col">
          <h4>Residential Leads</h4>
          <ul>
            <li><b>25</b> leads — <b>$120</b>/lead — $3,000</li>
            <li><b>50</b> leads — <b>$115</b>/lead — $5,750</li>
            <li><b>100</b> leads — <b>$110</b>/lead — $11,000</li>
            <li><b>200</b> leads — <b>$105</b>/lead — $21,000</li>
          </ul>
        </div>
        <div className="price-col">
          <h4>Commercial Leads</h4>
          <ul>
            <li><b>5</b> leads — <b>$300</b>/lead — $1,500</li>
            <li><b>20</b> leads — <b>$290</b>/lead — $5,800</li>
            <li><b>30</b> leads — <b>$285</b>/lead — $8,550</li>
            <li><b>50</b> leads — <b>$275</b>/lead — $13,750</li>
          </ul>
        </div>
        <div className="price-col">
          <h4>Filters</h4>
          <ul>
            <li>5+ yr roofs: <b>$10</b> more per lead</li>
            <li>8+ yr roofs: <b>$25</b> more per lead</li>
          </ul>
          <a className="btn outline" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
            Start with Trial Package
          </a>
        </div>
      </section>

      {/* RULES — includes 20% note */}
      <section id="rules" className="panel panel--rules">
        <h4>Rules to Running the Appointments</h4>
        <ol>
          <li><b>Do not call the leads ahead of time</b> before you go.</li>
          <li><b>Bad leads must be returned within 2 days.</b></li>
          <li>We get you on the roof in front of the owner in the ZIP codes you want — <b>you close the deal</b>.</li>
          <li><b>Up to 20% of leads may be returns/exchanges</b> as part of normal performance variability.</li>
        </ol>
        <div className="rules-cta">
          <a className="btn cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Get Leads Now</a>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Storm Lead Machine •{" "}
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a> •{" "}
          <a href="tel:+183369622446">833-9MACHIN</a>
        </p>
      </footer>
    </main>
  );
}
