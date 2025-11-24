import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page home-bg">
      <header className="header">
        <img src="/logo.png" className="logo" />
        <nav>
          <Link to="/hail">Hail Leads</Link>
          <Link to="/wind">Wind Leads</Link>
          <Link to="/tornado">Tornado / Hurricanes</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      <div className="hero">
        <h1>Storm Lead Machine</h1>
        <p>Can’t Stop The Machine</p>
        <a
          href="https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00"
          className="cta"
        >
          Get Leads Now
        </a>
      </div>
    </div>
  );
}
