import { Link } from "react-router-dom";

export default function Wind() {
  return (
    <div className="page wind-bg">
      <Header />
      <h2>Wind Damage Leads</h2>
      <img src="/wind-damage.jpg" className="hero-img" />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/hail">Hail</Link>
        <Link to="/tornado">Tornado</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
