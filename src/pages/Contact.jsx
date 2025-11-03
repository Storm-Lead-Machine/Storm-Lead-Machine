import React from "react";

export default function Contact() {
  return (
    <section className="contact reveal">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We’ll get you on the roof in front of the owner — you close it.</p>

        <div className="contact-grid">
          <div>
            <h4>Email</h4>
            <p><a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a></p>
          </div>
          <div>
            <h4>Phone</h4>
            <p><a href="tel:+183369622446">833-9MACHIN (622446)</a></p>
          </div>
        </div>

        <a className="btn cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
          Get Leads Now
        </a>
      </div>
    </section>
  );
}
