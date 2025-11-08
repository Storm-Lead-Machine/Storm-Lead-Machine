// src/Home.NEW.jsx
import React, { useMemo, useState } from "react";


export default function Home() {
  // Hosted images (no local imports)
  const HAIL_IMG =
    "https://images.unsplash.com/photo-1611902197736-d849a9086f2b?q=80&w=1600&auto=format&fit=crop";
  const WIND_IMG =
    "https://images.unsplash.com/photo-1508434830890-c894fcc6538d?q=80&w=1600&auto=format&fit=crop";
  const TORNADO_IMG =
    "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop";

  // Section background images
  const bgUrl = useMemo(
    () => ({
      "Lead Types":
        "https://images.unsplash.com/photo-1508835556837-99ac94a94552?q=80&w=1920&auto=format&fit=crop",
      Pricing:
        "https://images.unsplash.com/photo-1499364306926-9a27daace663?q=80&w=1920&auto=format&fit=crop",
      Rules:
        "https://images.unsplash.com/photo-1504384308890-c894fcc6538d?q=80&w=1920&auto=format&fit=crop",
      Contact:
        "https://images.unsplash.com/photo-154231483481-068cd1deebfe?q=80&w=1920&auto=format&fit=crop",
    }),
    []
  );

  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");
  const heroBg = bgUrl[active];

  return (
    <div
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "18px 28px",
          color: "white",
        }}
      >
        <div style={{ fontWeight: 700 }}>Storm Lead Machine</div>

        <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.2)",
                background:
                  active === tab ? "rgba(0,0,0,.45)" : "rgba(0,0,0,.25)",
                color: "white",
                cursor: "pointer",
                backdropFilter: "blur(6px)",
              }}
            >
              {tab}
            </button>
          ))}
          <a
            href="#get-leads"
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              background: "#ff8a00",
              color: "#111",
              fontWeight: 700,
              textDecoration: "none",
              marginLeft: 8,
            }}
          >
            Get Leads Now
          </a>
        </nav>
      </header>

      {/* Subhead / CTA line */}
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px 16px 36px",
          textShadow: "0 2px 10px rgba(0,0,0,.5)",
          fontWeight: 600,
        }}
      >
        Exclusive storm leads where you want them — targeted by ZIP, roof-age
        filters, and fast routing. We get you on the roof in front of the owner.
        <br />
        <em>You close it.</em>
      </div>

      {/* Lead Types */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px 64px" }}>
        <div
          style={{
            background: "rgba(0,0,0,.25)",
            border: "1px solid rgba(255,255,255,.15)",
            borderRadius: 18,
            padding: 22,
            color: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,.25)",
          }}
        >
          <h2 style={{ fontSize: 32, margin: "4px 0 12px", fontWeight: 800 }}>
            Storm Lead Types
          </h2>
          <p style={{ opacity: 0.85, marginBottom: 18 }}>
            Target exactly where you want to sell.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {/* Hail */}
            <article
              style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.3)",
                overflow: "hidden",
              }}
            >
              <img
                src={HAIL_IMG}
                alt="Hail damage"
                style={{
                  display: "block",
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  filter: "contrast(1.05)",
                }}
              />
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700 }}>Hail</h3>
                <p style={{ marginTop: 8, opacity: 0.9 }}>
                  Targeted hail zones by ZIP with roof-age filters.
                </p>
              </div>
            </article>

            {/* Wind */}
            <article
              style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.3)",
                overflow: "hidden",
              }}
            >
              <img
                src={WIND_IMG}
                alt="Wind damage"
                style={{
                  display: "block",
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  filter: "contrast(1.05)",
                }}
              />
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700 }}>Wind</h3>
                <p style={{ marginTop: 8, opacity: 0.9 }}>
                  Fresh wind swaths with high-intent homeowners.
                </p>
              </div>
            </article>

            {/* Tornado / Hurricanes */}
            <article
              style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.3)",
                overflow: "hidden",
              }}
            >
              <img
                src={TORNADO_IMG}
                alt="Tornado / supercell"
                style={{
                  display: "block",
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  filter: "contrast(1.05)",
                }}
              />
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700 }}>
                  Tornado / Hurricanes
                </h3>
                <p style={{ marginTop: 8, opacity: 0.9 }}>
                  ZIP-precise disaster coverage for fast deployment and scale.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "white",
            opacity: 0.85,
            padding: 18,
          }}
        >
          © 2025 Storm Lead Machine. All rights reserved.
        </div>
      </section>
    </div>
  );
}
