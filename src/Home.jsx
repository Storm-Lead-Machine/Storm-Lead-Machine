import React, { useEffect, useMemo, useState } from "react";
import logo from "./assets/Logo.png";
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

  // rotate every 18s
  useEffect(() => {
    const id = setInterval(() => {
      setShowA((s) => !s);
      setBgA(skies[Math.floor(Math.random() * skies.length)]);
      setBgB(skies[Math.floor(Math.random() * skies.length)]);
    }, 18000);
    return () => clearInterval(id);
  }, [skies]);

  return (
    <>
      {/* SKY BACKGROUND LAYERS (must be first in DOM) */}
      <div
        className={`bg-layer vignette ${showA ? "show" : ""}`}
        style={{
          backgroundImage: `url(${bgA})`,
        }}
      />
      <div
        className={`bg-layer vignette ${!showA ? "show" : ""}`}
        style={{
          backgroundImage: `url(${bgB})`,
        }}
      />

      {/* HEADER */}
      <header className="header">
        <div className="brand">
          <img src={logo} alt="Storm Lead Machine" className="logo" />
          <div>
            <h1 className="title">Storm Lead Machine</h1>
            <div className="tag">Can’t Stop the Machine</div>
          </div>
        </div>
        <a className="cta" href={SQUARE_LINK}>Get Leads Now</a>
      </header>

      {/* MAIN */}
      <main className="main">
        {/* TRIAL FIRST */}
        <section className="panel">
          <h2>1st-Time Customer Trial Package</h2>
          <div className="trial">
            <h3>10 Lead Trial — <span style={{color:"#ffd166"}}>$1,000</span></h3>
            <p className="small dim">Try us once and scale from there.</p>
            <a className="cta" href={SQUARE_LINK}>Start Trial</a>
          </div>
        </section>

        {/* PRICING (Residential only) */}
        <section className="panel">
          <h2>Residential Lead Packages</h2>
          <ul className="price">
            <li>25 leads <span>$120/lead</span> <span>$3,000</span></li>
            <li>50 leads <span>$115/lead</span> <span>$5,750</span></li>
            <li>100 leads <span>$110/lead</span> <span>$11,000</span></li>
            <li>200 leads <span>$105/lead</span> <span>$21,000</span></li>
          </ul>
          <p className="small dim">Filters: 5+ yr roofs +$10/lead • 8+ yr roofs +$25/lead</p>
        </section>

        {/* STORM LEAD TYPES */}
        <section className="panel">
          <h2>Storm Lead Types</h2>

          <div className="card">
            <img className="img" src={hailImg} alt="Hail" />
            <div className="body">
              <h3>Hail</h3>
              <p>ZIP-level hail footprints with roof-age filters for precision targeting.</p>
            </div>
          </div>

          <div className="card">
            <img className="img" src={windImg} alt="Wind" />
            <div className="body">
              <h3>Wind</h3>
              <p>Active wind damage paths verified across cities and counties.</p>
            </div>
          </div>

          <div className="card">
            <img className="img" src={tornadoImg} alt="Tornado & Hurricanes" />
            <div className="body">
              <h3>Tornado & Hurricanes</h3>
              <p>High-intent appointments in catastrophic-zone footprints.</p>
            </div>
          </div>
        </section>

        {/* RULES + WHY */}
        <section className="panel">
          <div className="grid">
            <div className="col">
              <h3>Rules to Running Appointments</h3>
              <ul>
                <li>Do not call the leads ahead of time before you go.</li>
                <li>
                  Bad leads must be returned within 2 days — otherwise you will receive
                  <strong> 20% extra only</strong>.
                </li>
                <li>
                  Give us ZIP codes you know were hit with a storm and let us know how many
                  appointments you can handle per day.
                </li>
                <li>We get you on the roof, in front of the owner — you close it from there.</li>
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

        {/* CTA */}
        <section className="panel" style={{textAlign:"center"}}>
          <h2>Ready to turn storms into installs?</h2>
          <a className="cta" href={SQUARE_LINK}>View Packages</a>
        </section>
      </main>

      {/* Build tag so we can confirm the live version */}
      <div style={{
        position:"fixed", bottom:8, right:10, fontSize:11, color:"#b6c0ff", opacity:.8,
        background:"rgba(12,18,40,.6)", padding:"4px 8px", borderRadius:8, border:"1px solid #ffffff2a", zIndex:20
      }}>
        build: SKYBG-v4 • {new Date().toISOString()}
      </div>
    </>
  );
}
