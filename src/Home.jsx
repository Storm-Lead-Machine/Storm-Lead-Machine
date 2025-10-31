import React, { useState, useEffect, useMemo, useRef } from "react";
import logo from "./assets/Storm Lead Machine Logo.png";
import hailImg from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";

import sky1 from "./assets/sky1.jpg";
import sky2 from "./assets/sky2.jpg";
import sky3 from "./assets/sky3.jpg";
import sky4 from "./assets/sky4.jpg";
import sky5 from "./assets/sky5.jpg";

const SQUARE_LINK = "https://square.link/u/RSfgAZHS";

export default function Home() {
  const skies = useMemo(() => [sky1, sky2, sky3, sky4, sky5], []);
  const [bgA, setBgA] = useState(skies[0]);
  const [bgB, setBgB] = useState(skies[1]);
  const [showA, setShowA] = useState(true);

  // Switch backgrounds every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowA((prev) => !prev);
      setBgA(skies[Math.floor(Math.random() * skies.length)]);
      setBgB(skies[Math.floor(Math.random() * skies.length)]);
    }, 20000);
    return () => clearInterval(interval);
  }, [skies]);

  return (
    <>
      {/* Background layers */}
      <div
        className={`bg-layer vignette ${showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgA})` }}
      />
      <div
        className={`bg-layer vignette ${!showA ? "show" : ""}`}
        style={{ backgroundImage: `url(${bgB})` }}
      />

      {/* Header */}
      <header className="header">
        <div className="brand">
          <img src={logo} alt="Storm Lead Machine" className="logo" />
          <div>
            <h1 className="title">Storm Lead Machine</h1>
            <div className="tag">Can’t Stop the Machine</div>
          </div>
        </div>
        <a href={SQUARE_LINK} className="cta">
          Get Leads Now
        </a>
      </header>

      {/* Main content */}
      <main className="main">
        <section className="panel reveal">
          <h2>Storm Lead Types</h2>

          <div className="card">
            <img src={hailImg} className="img" alt="Hail damage" />
            <div className="body">
              <h3>Hail</h3>
              <p>
                Targeted hail zones by ZIP with optional roof-age filters for
                precise lead targeting.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={windImg} className="img" alt="Wind damage" />
            <div className="body">
              <h3>Wind</h3>
              <p>
                Active storm footprints and verified damage paths across
                counties and cities.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={tornadoImg} className="img" alt="Tornado & Hurricanes" />
            <div className="body">
              <h3>Tornado & Hurricanes</h3>
              <p>
                Lead generation focused on catastrophic storm zones for rapid
                response roofing contractors.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="panel reveal">
          <h2>Lead Packages & Pricing</h2>

          <div className="trial">
            <h3>Residential Leads</h3>
            <ul className="price">
              <li>
                25 leads <span>$120 per lead</span> <span>$3,000</span>
              </li>
              <li>
                50 leads <span>$115 per lead</span> <span>$5,750</span>
              </li>
              <li>
                100 leads <span>$110 per lead</span> <span>$11,000</span>
              </li>
              <li>
                200 leads <span>$105 per lead</span> <span>$21,000</span>
              </li>
            </ul>
            <p className="small dim">
              5+ yr roofs +$10/lead — 8+ yr roofs +$25/lead
            </p>
          </div>

          <div className="trial">
            <h3>Commercial Leads</h3>
            <ul className="price">
              <li>
                5 leads <span>$300 per lead</span> <span>$1,500</span>
              </li>
              <li>
                20 leads <span>$290 per lead</span> <span>$5,800</span>
              </li>
              <li>
                30 leads <span>$285 per lead</span> <span>$8,550</span>
              </li>
              <li>
                50 leads <span>$275 per lead</span> <span>$13,750</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Rules & Why */}
        <section className="panel reveal">
          <div className="grid">
            <div className="col">
              <h3>Rules to Running Appointments</h3>
              <ul>
                <li>
                  Do not call the leads ahead of time before you go.
                </li>
                <li>
                  Bad leads must be returned within 2 days.
                </li>
                <li>
                  We get you on the roof, in front of the owner—you close it from there.
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Why Storm Lead Machine?</h3>
              <ul>
                <li>Event-driven targeting across hail, wind, tornado & hurricane zones.</li>
                <li>ZIP-level control with optional roof-age filters.</li>
                <li>Transparent pricing — no gimmicks, no resold leads.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="panel reveal" style={{ textAlign: "center" }}>
          <h2>Ready to turn storms into installs?</h2>
          <a href={SQUARE_LINK} className="cta">
            View Packages
          </a>
        </section>
      </main>
    </>
  );
}
