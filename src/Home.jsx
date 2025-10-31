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

  useEffect(() => {
    const id = setInterval(() => {
      setShowA((s) => !s);
      setBgA(skies[Math.floor(Math.random() * skies.length)]);
      setBgB(skies[Math.floor(Math.random() * skies.length)]);
    }, 18000);
    return () => clearInterval(id);
  }, [skies]);

  // Inline style base for guaranteed background rendering
  const layerBase = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    pointerEvents: "none",
    zIndex: 0,
    transition: "opacity 1.6s ease-in-out",
    animation: "kenburns 30s ease-in-out infinite alternate",
    filter: "saturate(1.08) contrast(1.1) brightness(0.85)",
  };

  return (
    <>
      {/* SKY BACKGROUND LAYERS */}
      <div
        style={{
          ...layerBase,
          opacity: showA ? 1 : 0,
          backgroundImage: `url(${bgA})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1200px 700px at 100% -10%, rgba(8,18,46,.6) 0%, rgba(5,9,22,.85) 45%, rgba(4,6,12,.95) 85%)",
          }}
        />
      </div>
      <div
        style={{
          ...layerBase,
          opacity: showA ? 0 : 1,
          backgroundImage: `url(${bgB})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1200px 700px at 100% -10%, rgba(8,18,46,.6) 0%, rgba(5,9,22,.85) 45%, rgba(4,6,12,.95) 85%)",
          }}
        />
      </div>

      {/* HEADER */}
      <header
        className="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          display: "flex",
          gap: 20,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 22px",
          borderBottom: "1px solid #ffffff1a",
          background: "rgba(9,14,28,.70)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src={logo}
            alt="Storm Lead Machine"
            style={{ height: 200, width: "auto", filter: "drop-shadow(0 12px 24px #0008)" }}
          />
          <div>
            <h1 style={{ fontSize: 52, margin: 0, textShadow: "0 4px 22px #000a" }}>
              Storm Lead Machine
            </h1>
            <div style={{ color: "#ffd166", fontWeight: 800, marginTop: 4 }}>
              Can’t Stop the Machine
            </div>
          </div>
        </div>
        <a className="cta" href={SQUARE_LINK}>
          Get Leads Now
        </a>
      </header>

      {/* MAIN */}
      <main className="main" style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "30px 22px 100px" }}>
        {/* TRIAL */}
        <section className="panel" style={panelStyle}>
          <h2>1st-Time Customer Trial Package</h2>
          <div className="trial">
            <h3>
              10 Lead Trial — <span style={{ color: "#ffd166" }}>$1,000</span>
            </h3>
            <p className="small dim">Try us once and scale from there.</p>
            <a className="cta" href={SQUARE_LINK}>
              Start Trial
            </a>
          </div>
        </section>

        {/* PRICING */}
        <section className="panel" style={panelStyle}>
          <h2>Residential Lead Packages</h2>
          <ul className="price" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <PriceRow qty="25" per="$120/lead" total="$3,000" />
            <PriceRow qty="50" per="$115/lead" total="$5,750" />
            <PriceRow qty="100" per="$110/lead" total="$11,000" />
            <PriceRow qty="200" per="$105/lead" total="$21,000" />
          </ul>
          <p className="small dim" style={{ color: "#c6cde0", fontSize: 13, marginTop: 8 }}>
            Filters: 5+ yr roofs +$10/lead • 8+ yr roofs +$25/lead
          </p>
        </section>

        {/* LEAD TYPES */}
        <section className="panel" style={panelStyle}>
          <h2>Storm Lead Types</h2>

          <Card img={hailImg} title="Hail" text="ZIP-level hail footprints with roof-age filters for precision targeting." />
          <Card img={windImg} title="Wind" text="Active wind damage paths verified across cities and counties." />
          <Card img={tornadoImg} title="Tornado & Hurricanes" text="High-intent appointments in catastrophic-zone footprints." />
        </section>

        {/* RULES + WHY */}
        <section className="panel" style={panelStyle}>
          <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div className="col" style={colStyle}>
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
            <div className="col" style={colStyle}>
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
        <section className="panel" style={{ ...panelStyle, textAlign: "center" }}>
          <h2>Ready to turn storms into installs?</h2>
          <a className="cta" href={SQUARE_LINK}>
            View Packages
          </a>
        </section>
      </main>

      {/* Build tag to confirm live */}
      <div
        style={{
          position: "fixed",
          bottom: 8,
          right: 10,
          fontSize: 11,
          color: "#b6c0ff",
          opacity: 0.8,
          background: "rgba(12,18,40,.6)",
          padding: "4px 8px",
          borderRadius: 8,
          border: "1px solid #ffffff2a",
          zIndex: 20,
        }}
      >
        build: SKYBG-v5 • {new Date().toISOString()}
      </div>
    </>
  );
}

/* helpers */
function PriceRow({ qty, per, total }) {
  return (
    <li
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 12,
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px dashed #2c3560",
        color: "#dfe5ff",
      }}
    >
      <span>{qty} leads</span>
      <span>{per}</span>
      <span>{total}</span>
    </li>
  );
}

function Card({ img, title, text }) {
  return (
    <div
      className="card"
      style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: 18,
        background: "rgba(12,18,44,.9)",
        border: "1px solid #ffffff22",
        borderRadius: 16,
        overflow: "hidden",
        margin: "18px 0",
        boxShadow: "0 10px 40px #0008",
      }}
    >
      <img src={img} alt={title} style={{ width: "100%", height: 240, objectFit: "cover" }} />
      <div className="body" style={{ padding: 18 }}>
        <h3 style={{ margin: "0 0 6px", fontSize: 22 }}>{title}</h3>
        <p style={{ margin: 0, color: "#dfe5ff" }}>{text}</p>
      </div>
    </div>
  );
}

/* shared small style objects */
const panelStyle = {
  background: "rgba(12, 18, 40, 0.80)",
  border: "1px solid #ffffff1f",
  borderRadius: 18,
  padding: 24,
  boxShadow: "0 12px 48px #0008",
  marginBottom: 30,
  backdropFilter: "blur(8px)",
};

const colStyle = {
  border: "1px solid #ffffff1f",
  borderRadius: 16,
  background: "rgba(13, 20, 56, 0.95)",
  padding: 18,
};

