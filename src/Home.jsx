import React from "react";


export default function Home() {
  const stripeLink = "https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00";

  const pageStyle = {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, system-ui, Segoe UI, sans-serif",
    backgroundColor: "#020617",
    color: "#f9fafb",
    minHeight: "100vh",
    margin: 0,
  };

  const sectionBase = {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const sectionWithBg = (image) => ({
    ...sectionBase,
    backgroundImage: `linear-gradient(rgba(15,23,42,0.9), rgba(15,23,42,0.95)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "30px",
    marginTop: "30px",
    marginBottom: "30px",
  });

  const cardRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginTop: "30px",
  };

  const cardStyle = {
    background: "#020617",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 18px 45px rgba(0,0,0,0.5)",
    border: "1px solid rgba(148,163,184,0.5)",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 32px",
    borderRadius: "9999px",
    backgroundColor: "#fbbf24",
    color: "#020617",
    fontWeight: 700,
    fontSize: "18px",
    textDecoration: "none",
    boxShadow: "0 12px 30px rgba(251,191,36,0.45)",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: 800,
    marginBottom: "12px",
  };

  const subHeadingStyle = {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "8px",
  };

  const textMuted = {
    color: "#cbd5f5",
    lineHeight: 1.6,
  };

  const heroWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const heroTop = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
  };

  const logoStyle = {
    height: "90px",
    width: "90px",
    objectFit: "contain",
  };

  const imageStyle = {
    width: "100%",
    maxHeight: "220px",
    objectFit: "cover",
    borderRadius: "16px",
    border: "1px solid rgba(148,163,184,0.6)",
  };

  const sectionTitle = {
    fontSize: "32px",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "10px",
  };

  const navBar = {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(2,6,23,0.96)",
    borderBottom: "1px solid rgba(148,163,184,0.5)",
    backdropFilter: "blur(10px)",
  };

  const navInner = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  };

  const navLinks = {
    display: "flex",
    gap: "14px",
    fontSize: "14px",
  };

  const navLink = {
    color: "#e5e7eb",
    textDecoration: "none",
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid transparent",
  };

  const navLinkEmphasis = {
    ...navLink,
    borderColor: "rgba(148,163,184,0.7)",
    backgroundColor: "rgba(15,23,42,0.9)",
  };

  return (
    <div style={pageStyle}>
      {/* NAV BAR */}
      <header style={navBar}>
        <div style={navInner}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/Logo.png" alt="Storm Lead Machine" style={{ height: "40px" }} />
            <span style={{ fontWeight: 700 }}>Storm Lead Machine</span>
          </div>
          <nav style={navLinks}>
            <a href="#lead-types" style={navLinkEmphasis}>
              Lead Types
            </a>
            <a href="#pricing" style={navLink}>
              Pricing
            </a>
            <a href="#contact" style={navLink}>
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* HERO – sky1 background */}
      <section style={sectionWithBg("/sky1.jpg")}>
        <div style={heroWrapper}>
          <div style={heroTop}>
            <img src="/Logo.png" alt="Storm Lead Machine" style={logoStyle} />
            <div>
              <h1 style={headingStyle}>Storm Lead Machine</h1>
              <p style={textMuted}>
                Can’t Stop The Machine. We deliver homeowner storm damage leads directly
                to your business.
              </p>
            </div>
          </div>

          <div>
            <a
              href={stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
            >
              Get Leads Now
            </a>
          </div>
        </div>
      </section>

      {/* STORM LEAD TYPES – sky2 background */}
      <section id="lead-types" style={sectionWithBg("/sky2.jpg")}>
        <h2 style={sectionTitle}>Storm Lead Types</h2>
        <p
          style={{
            ...textMuted,
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Dialed-in storm damage appointments in the exact ZIP codes you want –
          you close, we fill the pipeline.
        </p>

        <div style={cardRowStyle}>
          {/* Hail */}
          <div style={cardStyle}>
            <img src="/hail-damage.jpg" alt="Hail damage" style={imageStyle} />
            <h3 style={subHeadingStyle}>Hail Damage Leads</h3>
            <p style={textMuted}>
              Homeowners in confirmed hail swaths with visible or suspected roof damage.
              Filter by roof age and ZIP codes.
            </p>
          </div>

          {/* Wind */}
          <div style={cardStyle}>
            <img src="/wind-damage.jpg" alt="Wind damage" style={imageStyle} />
            <h3 style={subHeadingStyle}>Wind Damage Leads</h3>
            <p style={textMuted}>
              High wind events causing missing shingles, creased tabs, and siding damage.
              Perfect for repair and full replacement plays.
            </p>
          </div>

          {/* Tornado */}
          <div style={cardStyle}>
            <img
              src="/tornado-damage.jpg"
              alt="Tornado and hurricane damage"
              style={imageStyle}
            />
            <h3 style={subHeadingStyle}>Tornado &amp; Hurricane Leads</h3>
            <p style={textMuted}>
              Severe storm impact zones with heavy roof and structure damage – high
              opportunity and high close rates.
            </p>
          </div>
        </div>
      </section>

      {/* TRIAL PACKAGE / PRICING – sky3 background */}
      <section id="pricing" style={sectionWithBg("/sky3.jpg")}>
        <h2 style={sectionTitle}>10 Lead Trial Package</h2>
        <div
          style={{
            ...cardStyle,
            maxWidth: "520px",
            margin: "0 auto",
            textAlign: "center",
            background: "rgba(2,6,23,0.96)",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              fontWeight: 800,
              marginBottom: "10px",
            }}
          >
            10 Residential Leads – Trial
          </h3>

          <p
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#fbbf24",
              marginBottom: "14px",
            }}
          >
            $1,000
          </p>

          <p style={textMuted}>
            We get you in front of qualified homeowners in active storm zones. You close
            the deals – we keep the machine running.
          </p>

          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            Pay &amp; Start Trial
          </a>
        </div>
      </section>

      {/* RULES / HOW IT WORKS – keep dark background */}
      <section style={sectionBase}>
        <h2 style={sectionTitle}>How Our Leads Work</h2>
        <div
          style={{
            ...cardStyle,
            maxWidth: "700px",
            margin: "0 auto",
            background: "rgba(15,23,42,0.96)",
          }}
        >
          <ul
            style={{
              ...textMuted,
              listStyle: "disc",
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>We get you face-to-face with homeowners in storm-affected ZIP codes.</li>
            <li>Do not call the leads ahead of time before you go.</li>
            <li>Bad leads must be returned within 2 days for credit.</li>
            <li>
              If leads are not returned within 2 days, we automatically give you{" "}
              <strong>20% extra leads</strong> to help make up for any bad data.
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT – sky1 again */}
      <section
        id="contact"
        style={sectionWithBg("/sky1.jpg")}
      >
        <h2 style={sectionTitle}>Contact</h2>
        <p style={{ ...textMuted, textAlign: "center" }}>
          Phone: 833-9MACHIN (622-446)
          <br />
          Email: stormleadmachine@gmail.com
        </p>
      </section>
    </div>
  );
}

