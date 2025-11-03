import React from "react";
import "./site.css";

export default function Home() {
  return (
    <main className="slm-root">
      {/* HERO */}
      <section className="hero">
        <div className="hero__overlay">
          <header className="nav">
            <div className="brand">
              {/* If you have a logo file, drop it in /public/images/logo.png */}
              <img src="/images/logo.png" alt="Storm Lead Machine" onError={(e)=>{e.currentTarget.style.display='none'}} />
              <span>Storm Lead Machine</span>
            </div>
            <div className="contact">
              <a href="tel:+183369622446">833-9MACHIN (622446)</a>
              <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
            </div>
          </header>

          <div className="hero__content">
            <h1>Can’t Stop the Machine</h1>
            <p>Exclusive storm-damage roofing leads. Hail • Wind • Tornado/Hurricane</p>
            <a className="btn cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Get leads now</a>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="tabs">
        <input type="radio" name="tab" id="tab1" defaultChecked />
        <input type="radio" name="tab" id="tab2" />
        <input type="radio" name="tab" id="tab3" />
        <div className="tab-labels">
          <label htmlFor="tab1">Storm Lead Types</label>
          <label htmlFor="tab2">Pricing</label>
          <label htmlFor="tab3">Rules</label>
        </div>

        {/* TAB: Storm Lead Types */}
        <div className="tab panel panel--types">
          <div className="card bg-hail">
            <div className="card__body">
              <h3>Hail</h3>
              <p>Targeted hail zones by ZIP with roof-age filters. We get you on the roof in front of the owner — you close it.</p>
            </div>
          </div>

          <div className="card bg-wind">
            <div className="card__body">
              <h3>Wind</h3>
              <p>High-intent homeowners in fresh wind swaths. Appointment set — you run the inspection and sign.</p>
            </div>
          </div>

          <div className="card bg-tornado">
            <div className="card__body">
              <h3>Tornado / Hurricanes</h3>
              <p>Disaster-area coverage with precise ZIP filters for fast deployment and scale.</p>
            </div>
          </div>
        </div>

        {/* TAB: Pricing */}
        <div className="tab panel panel--pricing">
          <div className="price-col">
            <h4>Residential Leads</h4>
            <ul>
              <li><b>25</b> leads — <b>$120</b> / lead — $3,000</li>
              <li><b>50</b> leads — <b>$115</b> / lead — $5,750</li>
              <li><b>100</b> leads — <b>$110</b> / lead — $11,000</li>
              <li><b>200</b> leads — <b>$105</b> / lead — $21,000</li>
            </ul>
          </div>
          <div className="price-col">
            <h4>Commercial Leads</h4>
            <ul>
              <li><b>5</b> leads — <b>$300</b> / lead — $1,500</li>
              <li><b>20</b> leads — <b>$290</b> / lead — $5,800</li>
              <li><b>30</b> leads — <b>$285</b> / lead — $8,550</li>
              <li><b>50</b> leads — <b>$275</b> / lead — $13,750</li>
            </ul>
          </div>
          <div className="price-col">
            <h4>Filters</h4>
            <ul>
              <li>5+ yr roofs: <b>$10</b> more per lead</li>
              <li>8+ yr roofs: <b>$25</b> more per lead</li>
            </ul>
            <a className="btn outline" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Start with trial package</a>
          </div>
        </div>

        {/* TAB: Rules */}
        <div className="tab panel panel--rules">
          <ol>
            <li><b>Do not call the leads ahead of time</b> before you go.</li>
            <li><b>Bad leads must be returned within 2 days.</b></li>
            <li>We get you on the roof in front of the owner in the ZIP codes you want — <b>you close it</b>.</li>
            <li><b>Up to 20% of leads may be returns/exchanges</b> as part of normal performance variability.</li>
          </ol>
          <div className="rules-cta">
            <a className="btn cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Get leads now</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Storm Lead Machine • <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a> • <a href="tel:+183369622446">833-9MACHIN</a></p>
      </footer>
    </main>
  );
}
