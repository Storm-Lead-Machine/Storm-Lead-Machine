import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="page contact-bg">
      <Header />
      <h2>Contact Us</h2>

      <div className="box">
        <p>Phone: 833-9MACHIN (622-446)</p>
        <p>Email: stormleadmachine@gmail.com</p>

        <h3>Lead Rules</h3>
        <ul>
          <li>No calling ahead of time</li>
          <li>Bad leads must be returned within 2 days</li>
          <li>After 2 days: 20% extra leads issued automatically</li>
        </ul>
      </div>
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
        <Link to="/wind">Wind</Link>
        <Link to="/tornado">Tornado</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
    </header>
  );
}
