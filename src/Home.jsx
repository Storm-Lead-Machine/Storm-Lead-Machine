import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <img
          src="/Logo.png"
          alt="Storm Lead Machine Logo"
          className="h-24 mb-6"
        />

        <h1 className="text-5xl font-extrabold mb-4">
          Storm Lead Machine
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mb-8">
          Can’t Stop The Machine. We deliver homeowner storm damage leads directly to your business.
        </p>

        <a
          href="https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-10 py-4 text-lg font-bold text-slate-900 shadow-lg hover:bg-amber-300 transition"
        >
          Get Leads Now
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-slate-800">
        <h2 className="text-4xl font-bold text-center mb-16">
          Storm Lead Types
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* HAIL */}
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
            <img
              src="/hail-damage.jpg"
              className="h-48 w-full object-cover rounded-xl mb-6"
              alt="Hail Damage"
            />
            <h3 className="text-2xl font-bold mb-2">Hail Damage Leads</h3>
            <p className="text-slate-300">
              Targeted homeowners hit by confirmed hail events and damaged roofs.
            </p>
          </div>

          {/* WIND */}
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
            <img
              src="/wind-damage.jpg"
              className="h-48 w-full object-cover rounded-xl mb-6"
              alt="Wind Damage"
            />
            <h3 className="text-2xl font-bold mb-2">Wind Damage Leads</h3>
            <p className="text-slate-300">
              Verified homeowners impacted by high-wind roof and siding damage.
            </p>
          </div>

          {/* TORNADO */}
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg">
            <img
              src="/tornado-damage.jpg"
              className="h-48 w-full object-cover rounded-xl mb-6"
              alt="Tornado Damage"
            />
            <h3 className="text-2xl font-bold mb-2">Tornado & Hurricane Leads</h3>
            <p className="text-slate-300">
              Storm-hit homeowner appointments scheduled directly to your calendar.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 px-6 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trial Package
        </h2>

        <div className="max-w-xl mx-auto bg-slate-800 p-10 rounded-2xl text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            25 Residential Leads
          </h3>

          <p className="text-2xl font-bold text-amber-400 mb-6">
            $1,000 Trial
          </p>

          <a
            href="https://buy.stripe.com/14AfZh5sUapQ2hP9IH6Vq00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-10 py-4 text-lg font-bold text-slate-900 shadow-lg hover:bg-amber-300 transition"
          >
            Pay & Start Trial
          </a>
        </div>
      </section>

      {/* RULES SECTION */}
      <section className="py-20 px-6 bg-slate-800">
        <h2 className="text-4xl font-bold text-center mb-10">
          How Our Leads Work
        </h2>
        <div className="max-w-4xl mx-auto text-slate-300 text-lg space-y-4">
          <p>• We get you face-to-face with homeowners in storm-affected zip codes.</p>
          <p>• Do NOT call leads ahead of time before your appointment.</p>
          <p>• Bad leads must be returned within 2 days.</p>
          <p>• Leads not returned within 2 days automatically receive 20% extra to make up for any bad data.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-slate-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-slate-300">Phone: 833-9-MACHIN (622-446)</p>
        <p className="text-lg text-slate-300">Email: stormleadmachine@gmail.com</p>
      </section>

    </div>
  );
}
