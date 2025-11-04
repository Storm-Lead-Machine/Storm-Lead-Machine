import React from "react";

export default function Home() {
  return (
    <section className="grid-cards">
      <article className="card">
        <img src="/hail.jpg" alt="Hail damage" className="card-img" />
        <div className="card-body">
          <h3>Hail</h3>
          <p>Targeted hail zones by ZIP with roof-age filters.</p>
        </div>
      </article>

      <article className="card">
        <img src="/wind.jpg" alt="Wind damage" className="card-img" />
        <div className="card-body">
          <h3>Wind</h3>
          <p>Fresh wind swaths with high-intent homeowners.</p>
        </div>
      </article>

      <article className="card">
        <img src="/tornado.jpg" alt="Tornado/Hurricane damage" className="card-img" />
        <div className="card-body">
          <h3>Tornado / Hurricanes</h3>
          <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
        </div>
      </article>
    </section>
  );
}
