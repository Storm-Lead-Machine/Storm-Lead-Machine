import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="page pricing-bg">
      <Header />
      <h2>Pricing</h2>

      <div className="box">
        <h3>Residential Leads</h3>
        <p>25 leads – $120 per lead – $3,000</p>
        <p>50 leads – $115 per lead – $5,750</p>
        <p>100 leads – $110 per lead – $11,000</p>
        <p>200 leads – $105 per lead – $21,000</p>

        <h3>Commercial Leads</h3>
        <p>5 leads – $300 per lead – $1,500</p>
        <p>20 leads – $290 per lead – $5,800</p>
        <p>30 leads – $285 per lead – $8,550</p>
        <p>50 leads – $275 per lead – $13,750</p>

        <a
          href="https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00"
          className="cta"
        >
          Pay & Start
        </a>
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
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
