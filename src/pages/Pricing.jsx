import React from "react";

export default function Pricing() {
  return (
    <section className="pricing">
      <h2>Residential Leads</h2>
      <div className="price-grid">
        <PriceCard qty="25" price="$120" total="$3,000" />
        <PriceCard qty="50" price="$115" total="$5,750" />
        <PriceCard qty="100" price="$110" total="$11,000" />
        <PriceCard qty="200" price="$105" total="$21,000" />
      </div>

      <h2>Commercial Leads</h2>
      <div className="price-grid">
        <PriceCard qty="5" price="$300" total="$1,500" />
        <PriceCard qty="20" price="$290" total="$5,800" />
        <PriceCard qty="30" price="$285" total="$8,550" />
        <PriceCard qty="50" price="$275" total="$13,750" />
      </div>

      <h2>Filters</h2>
      <ul className="filters">
        <li>5+ yr old roofs: <strong>+ $10</strong> per lead</li>
        <li>8+ yr old roofs: <strong>+ $25</strong> per lead</li>
      </ul>

      <div className="pricing-cta">
        <a className="slm-cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
          Get Leads Now
        </a>
      </div>
    </section>
  );
}

function PriceCard({ qty, price, total }) {
  return (
    <div className="price-card">
      <div className="price-qty">{qty} Leads</div>
      <div className="price-each">{price} / lead</div>
      <div className="price-total">{total}</div>
    </div>
  );
}
