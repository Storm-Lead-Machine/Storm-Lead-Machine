import { Link } from "react-router-dom";

export default function Hail() {
  return (
    <div className="page hail-bg">
      <Header />
      <h2>Hail Damage Leads</h2>
      <img src="/hail-damage.jpg" className="hero-img" />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wind">Wind</Link>
        <Link to="/tornado">Tornado</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
