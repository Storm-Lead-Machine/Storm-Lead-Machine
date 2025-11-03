import React from "react";

export default function Pricing() {
  return (
    <section className="grid-3 reveal">
      <div className="price-col fx-pop">
        <h4>Residential Leads</h4>
        <ul>
          <li><b>25</b> leads — <b>$120</b>/lead — $3,000</li>
          <li><b>50</b> leads — <b>$115</b>/lead — $5,750</li>
          <li><b>100</b> leads — <b>$110</b>/lead — $11,000</li>
          <li><b>200</b> leads — <b>$105</b>/lead — $21,000</li>
        </ul>
      </div>

      <div className="price-col fx-pop" style={{animationDelay:'0.07s'}}>
        <h4>Commercial Leads</h4>
        <ul>
          <li><b>5</b> leads — <b>$300</b>/lead — $1,500</li>
          <li><b>20</b> leads — <b>$290</b>/lead — $5,800</li>
          <li><b>30</b> leads — <b>$285</b>/lead — $8,550</li>
          <li><b>50</b> leads — <b>$275</b>/lead — $13,750</li>
        </ul>
      </div>

      <div className="price-col fx-pop" style={{animationDelay:'0.14s'}}>
        <h4>Filters</h4>
        <ul>
          <li>5+ yr roofs: <b>$10</b> more per lead</li>
          <li>8+ yr roofs: <b>$25</b> more per lead</li>
        </ul>
        <a className="btn outline" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
          Start with Trial Package
        </a>
      </div>
    </section>
  );
}
