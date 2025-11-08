import React, { useMemo, useState } from "react";

// Your logo (file exists in /src)
import logo from "./Storm Lead Machine Logo.png";

/* Card images — use hosted URLs (no local imports) */
const hailImg =
  "https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1600&auto=format&fit=crop"; // hail on shingles
const windImg =
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop"; // wind-stressed roof/siding vibe
const tornadoImg =
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop"; // tornado/supercell

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");

  // Different sky backgrounds per tab (also hosted)
  const bgMap = useMemo(
    () => ({
      "Lead Types":
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1920&auto=format&fit=crop",
      Pricing:
        "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1920&auto=format&fit=crop",
      Rules:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
      Contact:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
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
        minHeight: "100vh"
      }}
    >
      {/* Header */}
      <header
        className={`site-header ${active === "Lead Types" ? "site-header--home" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "14px 18px",
          background: "linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.20))"
        }}
      >
        <img
          src={logo}
          alt="Storm Lead Machine logo"
          style={{
            height: "192px", // ~2 inches on typical displays
            width: "auto",
            filter: "drop-shadow(0 8px 18px rgba(0,0,0,.45))"
          }}
        />
        <div>
          <h1
            style={{
              margin: 0,
              color: "white",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 4vw, 3rem)", // large, responsive
              textShadow: "0 2px 4px rgba(0,0,0,.6)"
            }}
          >
            Storm Lead Machine
          </h1>

          {/* Tabs */}
          <nav style={{ marginTop: 14 }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  background: active === tab ? "#ff4d00" : "rgba(0,0,0,.65)",
                  color: "white",
                  padding: "10px 16px",
                  marginRight: 8,
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content surface */}
      <main
        style={{
          backgroundColor: "rgba(0,0,0,.55)",
          color: "white",
          padding: 32,
          margin: "32px auto",
          maxWidth: 1100,
          borderRadius: 14,
          boxShadow: "0 12px 30px rgba(0,0,0,.35)",
          backdropFilter: "blur(2px)"
        }}
      >
        {active === "Lead Types" && (
          <>
            <h2 style={{ marginTop: 0 }}>Storm Lead Types</h2>
            <p style={{ opacity: 0.9, marginTop: 8 }}>
              Target exactly where you want to sell.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
                marginTop: 20
              }}
            >
              {/* Hail */}
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "rgba(0,0,0,.35)",
                  border: "1px solid rgba(255,255,255,.08)"
                }}
              >
                <img
                  src={hailImg}
                  alt="Hail damage"
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ margin: "0 0 8px" }}>Hail</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>
                    Targeted hail zones by ZIP with roof-age filters.
                  </p>
                </div>
              </div>

              {/* Wind */}
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "rgba(0,0,0,.35)",
                  border: "1px solid rgba(255,255,255,.08)"
                }}
              >
                <img
                  src={windImg}
                  alt="Wind damage"
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ margin: "0 0 8px" }}>Wind</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>
                    Fresh wind swaths with high-intent homeowners.
                  </p>
                </div>
              </div>

              {/* Tornado / Hurricanes */}
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "rgba(0,0,0,.35)",
                  border: "1px solid rgba(255,255,255,.08)"
                }}
              >
                <img
                  src={tornadoImg}
                  alt="Tornado / Hurricanes"
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ margin: "0 0 8px" }}>Tornado / Hurricanes</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>
                    ZIP-precise disaster coverage for fast deployment and scale.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {active === "Pricing" && (
          <>
            <h2 style={{ marginTop: 0 }}>Pricing</h2>
            <p style={{ lineHeight: 1.6 }}>
              <strong>Residential Leads</strong><br />
              25 leads — $120 per lead — $3,000<br />
              50 leads — $115 per lead — $5,750<br />
              100 leads — $110 per lead — $11,000<br />
              200 leads — $105 per lead — $21,000<br /><br />
              <strong>Commercial Leads</strong><br />
              5 leads — $300 per lead — $1,500<br />
              20 leads — $290 per lead — $5,800<br />
              30 leads — $285 per lead — $8,550<br />
              50 leads — $275 per lead — $13,750
            </p>
          </>
        )}

        {active === "Rules" && (
          <>
            <h2 style={{ marginTop: 0 }}>Rules</h2>
            <p style={{ lineHeight: 1.6 }}>
              Bad leads must be returned within <strong>2 days</strong> to receive credit. If not,
              we automatically give <strong>20% extra</strong> to help make up for bad leads.
              Do not call leads ahead of time — we get you on the roof in front of the owner in the
              ZIP codes you want, and <strong>you close it</strong>.
            </p>
          </>
        )}

        {active === "Contact" && (
          <>
            <h2 style={{ marginTop: 0 }}>Contact Us</h2>
            <p style={{ lineHeight: 1.6 }}>
              📞 833-9MACHIN (622-446)<br />
              ✉️ stormleadmachine@gmail.com
            </p>
          </>
        )}
      </main>
    </div>
  );
}

