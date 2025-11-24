import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("leads");

  const stripeLink = "https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00";

  const basePageStyle = {
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Segoe UI, system-ui, -apple-system, sans-serif",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingBottom: "60px",
  };

  const skyBackgrounds = {
    leads: "/sky1.jpg",
    pricing: "/sky2.jpg",
    contact: "/sky3.jpg",
  };

  const pageStyle = {
    ...basePageStyle,
    backgroundImage: `url(${skyBackgrounds[activeTab]})`,
  };

  const box = {
    background: "rgba(2,6,23,0.92)",
    borderRadius: "18px",
    padding: "30px",
    maxWidth: "780px",
    margin: "0 auto",
    border: "1px solid rgba(148,163,184,0.45)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.65)",
  };

  const btn = {
    marginTop: "18px",
    padding: "14px 32px",
    borderRadius: "999px",
    background: "#fbbf24",
    color: "#000",
    fontWeight: 800,
    fontSize: "18px",
    textDecoration: "none",
    display: "inline-block",
  };

  const sectionTitle = {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 900,
    marginBottom: "18px",
  };

  const tabStyle = (tab) => ({
    padding: "10px 22px",
    borderRadius: "999px",
    background: activeTab === tab ? "#fbbf24" : "rgba(15,23,42,0.9)",
    color: activeTab === tab ? "#000" : "#fff",
    fontWeight: 700,
    cursor: "pointer",
    border: "1px solid rgba(148,163,184,0.6)",
    transition: "all 150ms ease-out",
    whiteSpace: "nowrap",
  });

  return (
    <div style={pageStyle} className="storm-page">
      {/* inline CSS for animations & effects */}
      <style>{`
        .storm-page {
          position: relative;
          overflow-x: hidden;
        }
        .storm-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 10% 0%, rgba(255,255,255,0.08), transparent 60%),
            radial-gradient(circle at 90% 100%, rgba(56,189,248,0.22), transparent 55%);
          mix-blend-mode: screen;
          opacity: 0.7;
          animation: drift 28s linear infinite alternate;
        }
        @keyframes drift {
          from { transform: translate3d(-30px, 0, 0); }
          to   { transform: translate3d(30px, 0, 0); }
        }
        .hero-glow {
          box-shadow: 0 0 22px rgba(251,191,36,0.55);
          animation: pulseGlow 4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 18px rgba(251,191,36,0.3); }
          50%      { box-shadow: 0 0 45px rgba(251,191,36,0.85); }
        }
        .lightning-text {
          text-shadow:
            0 0 18px rgba(248,250,252,0.9),
            0 0 40px rgba(96,165,250,0.9);
          animation: lightningFlicker 5s infinite;
        }
        @keyframes lightningFlicker {
          0%, 9%, 11%, 100% { opacity: 1; }
          10%, 12%         { opacity: 0.35; }
          55%              { opacity: 0.9; }
        }
        .card-fade {
          opacity: 0;
          transform: translateY(18px);
          animation: cardIn 0.8s ease-out forwards;
        }
        .card-fade.delay-1 { animation-delay: 0.1s; }
        .card-fade.delay-2 { animation-delay: 0.2s; }
        .card-fade.delay-3 { animation-delay: 0.3s; }
        @keyframes cardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nav-tabs {
          backdrop-filter: blur(12px);
          background: radial-gradient(circle at top, rgba(15,23,42,0.95), rgba(15,23,42,0.8));
          border-radius: 999px;
          padding: 6px;
          border: 1px solid rgba(148,163,184,0.6);
          box-shadow: 0 18px 45px rgba(15,23,42,0.95);
        }
      `}</style>

      {/* Animated cloud/lightning overlay */}
      <div className="storm-overlay" />

      {/* HEADER */}
      <div style={{ padding: "24px 20px 10px", textAlign: "center" }}>
        <img
          src="/Logo.png"
          alt="Storm Lead Machine"
          style={{ height: "140px", objectFit: "contain" }}
        />
        <h1
          className="lightning-text"
          style={{ fontSize: "44px", marginTop: "12px", fontWeight: 900 }}
        >
          Storm Lead Machine
        </h1>
        <p style={{ color: "#e5e7eb", marginTop: "4px", fontSize: "16px" }}>
          Can’t Stop The Machine – we keep your storm pipeline loaded.
        </p>
        <a
          href={stripeLink}
          target="_blank"
          rel="noreferrer"
          style={{ ...btn, marginTop: "18px" }}
          className="hero-glow"
        >
          Get Leads Now
        </a>
      </div>

      {/* TABS */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "26px" }}>
        <div className="nav-tabs" style={{ display: "flex", gap: "10px" }}>
          <div style={tabStyle("leads")} onClick={() => setActiveTab("leads")}>
            Lead Types
          </div>
          <div style={tabStyle("pricing")} onClick={() => setActiveTab("pricing")}>
            Pricing
          </div>
          <div style={tabStyle("contact")} onClick={() => setActiveTab("contact")}>
            Contact Us
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "60px 20px" }}>
        {activeTab === "leads" && (
          <div style={box} className="card-fade delay-1">
            <h2 style={sectionTitle}>Storm Lead Types</h2>
            <p style={{ textAlign: "center", color: "#cbd5f5", marginBottom: "20px" }}>
              Dialed-in storm damage appointments in the exact ZIP codes you want.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "16px",
              }}
            >
              <div>
                <img
                  src="/hail-damage.jpg"
                  alt="Hail damage"
                  style={{ width: "100%", borderRadius: "14px", marginBottom: "8px" }}
                />
                <h3 style={{ fontSize: "20px", fontWeight: 700 }}>Hail Damage Leads</h3>
                <p style={{ color: "#cbd5f5", fontSize: "14px" }}>
                  Confirmed hail swaths, roof impacts, and neighborhoods ready for inspections.
                </p>
              </div>

              <div>
                <img
                  src="/wind-damage.jpg"
                  alt="Wind damage"
                  style={{ width: "100%", borderRadius: "14px", marginBottom: "8px" }}
                />
                <h3 style={{ fontSize: "20px", fontWeight: 700 }}>Wind Damage Leads</h3>
                <p style={{ color: "#cbd5f5", fontSize: "14px" }}>
                  High-wind events with missing shingles, creased tabs, and siding damage.
                </p>
              </div>

              <div>
                <img
                  src="/tornado-damage.jpg"
                  alt="Tornado and hurricane damage"
                  style={{ width: "100%", borderRadius: "14px", marginBottom: "8px" }}
                />
                <h3 style={{ fontSize: "20px", fontWeight: 700 }}>Tornado &amp; Hurricane Leads</h3>
                <p style={{ color: "#cbd5f5", fontSize: "14px" }}>
                  Heavy-impact zones with major roof and structure damage – high close potential.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pricing" && (
          <div style={box} className="card-fade delay-2">
            <h2 style={sectionTitle}>10 Lead Trial Package</h2>

            <div style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "6px" }}>
                10 Residential Leads – Trial
              </h3>
              <p
                style={{
                  fontSize: "34px",
                  fontWeight: 900,
                  color: "#fbbf24",
                  marginBottom: "10px",
                }}
              >
                $1,000
              </p>
              <p style={{ color: "#cbd5f5", maxWidth: "520px", margin: "0 auto 14px" }}>
                We get you in front of qualified homeowners in active storm zones.
                You close the deals – the Machine keeps feeding your pipeline.
              </p>

              <a
                href={stripeLink}
                target="_blank"
                rel="noreferrer"
                style={btn}
                className="hero-glow"
              >
                Pay &amp; Start Trial
              </a>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div style={box} className="card-fade delay-3">
            <h2 style={sectionTitle}>Contact Us</h2>
            <p style={{ color: "#cbd5f5", textAlign: "center", marginBottom: "10px" }}>
              Ready to load your storm pipeline? Reach out to the Machine.
            </p>
            <p style={{ color: "#e5e7eb", textAlign: "center", fontSize: "18px" }}>
              <strong>Phone:</strong> 833-9MACHIN (622-446)
              <br />
              <strong>Email:</strong> stormleadmachine@gmail.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

