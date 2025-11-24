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
  };

  const tabStyle = (tab) => ({
    padding: "12px 22px",
    borderRadius: "999px",
    background: activeTab === tab ? "#fbbf24" : "rgba(0,0,0,0.6)",
    color: activeTab === tab ? "#000" : "#fff",
    fontWeight: 700,
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.25)",
  });

  const box = {
    background: "rgba(2,6,23,0.9)",
    borderRadius: "18px",
    padding: "30px",
    maxWidth: "720px",
    margin: "0 auto",
    border: "1px solid rgba(148,163,184,0.35)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
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
    boxShadow: "0 10px 30px rgba(251,191,36,0.45)",
  };

  const sectionTitle = {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 900,
    marginBottom: "18px",
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

  return (
    <div style={pageStyle}>
      {/* HEADER */}
      <div style={{ padding: "30px 20px", textAlign: "center" }}>
        <img src="/Logo.png" style={{ height: "90px" }} alt="logo" />
        <h1 style={{ fontSize: "42px", marginTop: "10px" }}>
          Storm Lead Machine
        </h1>
        <p style={{ color: "#cbd5f5" }}>Can’t Stop The Machine</p>
      </div>

      {/* TABS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
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

      {/* CONTENT */}
      <div style={{ padding: "60px 20px" }}>

        {activeTab === "leads" && (
          <div style={box}>
            <h2 style={sectionTitle}>Storm Lead Types</h2>

            <p>✅ Hail Damage Leads</p>
            <p>✅ Wind Damage Leads</p>
            <p>✅ Tornado / Hurricane Leads</p>

            <div style={{ marginTop: "20px", display: "grid", gap: "15px" }}>
              <img src="/hail-damage.jpg" style={{ width: "100%", borderRadius: "12px" }} />
              <img src="/wind-damage.jpg" style={{ width: "100%", borderRadius: "12px" }} />
              <img src="/tornado-damage.jpg" style={{ width: "100%", borderRadius: "12px" }} />
            </div>
          </div>
        )}

        {activeTab === "pricing" && (
          <div style={box}>
            <h2 style={sectionTitle}>10 Lead Trial Package</h2>

            <div style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "26px" }}>10 Residential Leads - Trial</h3>
              <p style={{ fontSize: "32px", fontWeight: 900, color: "#fbbf24" }}>
                $1,000
              </p>

              <a href={stripeLink} target="_blank" rel="noreferrer" style={btn}>
                Pay & Start Trial
              </a>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div style={box}>
            <h2 style={sectionTitle}>Contact Us</h2>

            <p><strong>Phone:</strong> 833-9-MACHIN (622-446)</p>
            <p><strong>Email:</strong> stormleadmachine@gmail.com</p>
          </div>
        )}

      </div>
    </div>
  );
}
