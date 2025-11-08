import React, { useMemo, useState } from "react";
import logo from "./Storm Lead Machine Logo.png";

/* Use images from the public folder */
const hailImg = "/hail-damage.jpg";
const windImg = "/wind-damage.jpg";
const tornadoImg = "/tornado-damage.jpg";

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");

  // Background images for each tab
  const bgMap = useMemo(
    () => ({
      "Lead Types":
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1920&auto=format&fit=crop",
      Pricing:
        "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1920&auto=format&fit=crop",
      Rules:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
      Contact:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
    }),
    []
  );

  const bgUrl = bgMap[active];

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header
        className={`site-header ${
          active === "Lead Types" ? "site-header--home" : ""
        }`}
      >
        <img
          src={logo}
          alt="Storm Lead Machine Logo"
          style={{
            width: "120px",
            height: "120px",
            margin: "10px",
          }}
        />
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            textShadow: "2px 2px 4px black",
          }}
        >
          Storm Lead Machine
        </h1>

        <nav style={{ marginTop: "20px" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                background: active === tab ? "#ff0000" : "#00000099",
                color: "white",
                padding: "10px 20px",
                margin: "0 5px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
          padding: "40px",
          margin: "40px auto",
          maxWidth: "900px",
          borderRadius: "12px",
        }}
      >
        {active === "Lead Types" && (
          <>
            <h2>Storm Lead Types</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div>
                <img
                  src={hailImg}
                  alt="Hail damage"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3>Hail Leads</h3>
                <p>Targeted hail zones with verified roof damage data.</p>
              </div>
              <div>
                <img
                  src={windImg}
                  alt="Wind damage"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3>Wind Leads</h3>
                <p>High-quality windstorm opportunities ready to close.</p>
              </div>
              <div>
                <img
                  src={tornadoImg}
                  alt="Tornado damage"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3>Tornado & Hurricane Leads</h3>
                <p>Exclusive data from major storm events nationwide.</p>
              </div>
            </div>
          </>
        )}

        {active === "Pricing" && (
          <>
            <h2>Pricing</h2>
            <p>
              Residential Leads
              <br />
              25 leads - $120 per lead - $3,000
              <br />
              50 leads - $115 per lead - $5,750
              <br />
              100 leads - $110 per lead - $11,000
              <br />
              200 leads - $105 per lead - $21,000
              <br />
              <br />
              Commercial Leads
              <br />
              5 leads - $300 per lead - $1,500
              <br />
              20 leads - $290 per lead - $5,800
              <br />
              30 leads - $285 per lead - $8,550
              <br />
              50 leads - $275 per lead - $13,750
            </p>
          </>
        )}

        {active === "Rules" && (
          <>
            <h2>Rules</h2>
            <p>
              Leads must be returned within 2 days to receive credit.
              <br />
              If not returned within that window, we automatically give 20% extra
              to make up for potential bad leads.
              <br />
              Do not call leads ahead of time — we get you on the roof in front
              of the owner in your target ZIP codes.
            </p>
          </>
        )}

        {active === "Contact" && (
          <>
            <h2>Contact Us</h2>
            <p>
              📞 833-9MACHIN (622-446)
              <br />
              ✉️ stormleadmachine@gmail.com
            </p>
          </>
        )}
      </main>
    </div>
  );
}

