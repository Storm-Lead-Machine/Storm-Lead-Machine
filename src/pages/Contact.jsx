import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Questions or custom targeting? Reach out and we’ll get you deployed fast.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:stormleadmachine@gmail.com">stormleadmachine@gmail.com</a>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+183369622446">833-9MACHIN (622446)</a>
        </div>
        <div className="contact-card">
          <h3>Order Leads</h3>
          <a className="slm-cta" href="https://square.link/u/RSfgAZHS" target="_blank" rel="noreferrer">
            Get Leads Now
          </a>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={(e) => { e.preventDefault(); alert("Thanks! We’ll reach out shortly."); }}
      >
        <label>
          Name
          <input type="text" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" required placeholder="you@company.com" />
        </label>
        <label>
          Message
          <textarea rows="4" placeholder="Tell us your target ZIPs, roof-age filters, and volume." />
        </label>
        <button className="slm-cta" type="submit">Send</button>
      </form>
    </section>
  );
}
