import React, { useEffect, useState } from "react";
import "./site.css";

// Pages
import Types from "./pages/Types.jsx";
import Pricing from "./pages/Pricing.jsx";
import Rules from "./pages/Rules.jsx";
import Contact from "./pages/Contact.jsx";

function useHashRoute() {
  const getRoute = () => (window.location.hash.replace("#", "") || "/types");
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();

  // Page + background (first is your SKY photo, second is your current fallback)
  let Page = Types;
  let bg = 'url("/sky-types.jpg"), url("/hail-leads.jpg")';

  if (route.startsWith("/pricing")) {
    Page = Pricing;
    bg = 'url("/sky-pricing.jpg"), url("/wind-damage.jpg")';
  }
  if (route.startsWith("/rules")) {
    Page = Rules;
    bg = 'url("/sky-rules.jpg"), url("/tornado-damage.jpg")';
  }
  if (route.startsWith("/contact")) {
    Page = Contact;
    bg = 'url("/sky-contact.jpg"), url("/hail-leads.jpg")';
  }

  return (
    <div className="app" style={{ backgroundImage: bg }}>
      <header className="site-header">
        <a className="brand" href="#/types">
          <img
            src="/Storm Lead Machine Logo.png"
            alt="Storm Lead Machine"
            onError={(e)=>{e.currentTarget.style.display="none"}}
          />
          <span>Storm Lead Machine</span>
        </a>
        <nav className="main-nav">
          <a href="#/types"   className={route.startsWith("/types")   ? "active" : ""}>Lead Types</a>
          <a href="#/pricing" className={route.startsWith("/pricing") ? "active" : ""}>Pricing</a>
          <a href="#/rules"   className={route.startsWith("/rules")   ? "active" : ""}>Rules</a>
          <a href="#/contact" className={route.startsWith("/contact") ? "active" : ""}>Contact</a>
          <a className="btn cta small" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Get Leads Now</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="fx-rise">Dominate Storm Markets. On-Demand.</h1>
          <p className="fx-fade">
            Exclusive storm leads where you want them — targeted by ZIP, roof-age filters, and fast routing.
            We get you on the roof in front of the owner. <b>You close it.</b>
          </p>
          <div className="hero__buttons fx-pop">
            <a className="btn cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">Get Leads Now</a>
            <a className="btn outline" href="#/pricing">View Pricing</a>
            <a className="btn outline" href="#/types">See Lead Types</a>
          </div>
        </div>
      </section>

      <main className="page"><Page /></main>

      <footer className="footer">
        © {new Date().getFullYear()} Storm Lead Machine •{" "}
        <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a> •{" "}
        <a href="tel:+183369622446">833-9MACHIN</a>
      </footer>
    </div>
  );
}
