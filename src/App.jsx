import React, { useEffect, useMemo, useState } from "react";
import "./site.css";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Rules from "./pages/Rules.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const getRoute = () => {
    const raw = window.location.hash.replace("#/", "").trim();
    return raw || "types"; // default page
  };

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Per-page backgrounds (files live at /public root)
  const bgMap = useMemo(
    () => ({
      types: "/sky1.jpg",
      pricing: "/sky2.jpg",
      rules: "/sky3.jpg",
      contact: "/sky4.jpg",
    }),
    []
  );

  const bgUrl = bgMap[route] || "/sky5.jpg";

  return (
    <div className="slm-page" style={{ backgroundImage: `url('${bgUrl}')` }}>
      {/* Header */}
      <header className="slm-header">
        <div className="slm-header-left">
          {/* If you later rename the file to 'storm-lead-machine-logo.png', change the src accordingly */}
          <img
            src="/Storm%20Lead%20Machine%20Logo.png"
            alt="Storm Lead Machine"
            className="slm-logo"
          />
          <span className="slm-brand">Storm Lead Machine</span>
        </div>

        <nav className="slm-nav">
          <a className={`slm-tab ${route === "types" ? "active" : ""}`} href="#/types">Lead Types</a>
          <a className={`slm-tab ${route === "pricing" ? "active" : ""}`} href="#/pricing">Pricing</a>
          <a className={`slm-tab ${route === "rules" ? "active" : ""}`} href="#/rules">Rules</a>
          <a className={`slm-tab ${route === "contact" ? "active" : ""}`} href="#/contact">Contact</a>
          <a
            className="slm-cta sm-hide"
            href="https://square.link/u/RSfgAZHS"
            target="_blank"
            rel="noreferrer"
          >
            Get Leads Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="slm-hero">
        <h1>Dominate Storm Markets. On-Demand.</h1>
        <p>
          Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast routing.
          We get you on the roof in front of the owner. <strong>You close it.</strong>
        </p>
        <div className="slm-hero-ctas">
          <a className="slm-cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Get Leads Now</a>
          <a className="slm-ghost" href="#/pricing">View Pricing</a>
          <a className="slm-ghost" href="#/types">See Lead Types</a>
        </div>
        <div className="slm-ribbon">
          We automatically over-deliver by <strong>+20%</strong> on every order to cover returns/replacements.
        </div>
      </section>

      {/* Page content */}
      <main className="slm-content">
        {route === "types" && <Home />}
        {route === "pricing" && <Pricing />}
        {route === "rules" && <Rules />}
        {route === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <footer className="slm-footer">
        <div>© {new Date().getFullYear()} Storm Lead Machine</div>
        <div>
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
          {"  ·  "}
          <a href="tel:+183369622446">833-9MACHIN (622446)</a>
        </div>
      </footer>
    </div>
  );
}
