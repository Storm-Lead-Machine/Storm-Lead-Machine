import React from "react";

export default function Types() {
  return (
    <section className="grid-3 reveal">
      <div className="card parallax-tilt" style={{backgroundImage:'url("/hail-damage.jpg")'}}>
        <div className="card__shade">
          <h3>Hail</h3>
          <p>Targeted hail zones by ZIP with roof-age filters.</p>
        </div>
      </div>

      <div className="card parallax-tilt" style={{backgroundImage:'url("/wind-damage.jpg")'}}>
        <div className="card__shade">
          <h3>Wind</h3>
          <p>Fresh wind swaths with high-intent homeowners.</p>
        </div>
      </div>

      <div className="card parallax-tilt" style={{backgroundImage:'url("/tornado-damage.jpg")'}}>
        <div className="card__shade">
          <h3>Tornado / Hurricanes</h3>
          <p>ZIP-precise disaster coverage for fast deployment and scale.</p>
        </div>
      </div>
    </section>
  );
}
