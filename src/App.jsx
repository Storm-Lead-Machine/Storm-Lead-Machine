import React from "react";
import { motion } from "framer-motion";

// Swap the three placeholder image URLs below with your actual photos:
const IMG_HAIL =
  "https://images.unsplash.com/photo-15996959804967-6a0b8aa30f2a?q=80&w=1200&auto=format&fit=crop";
const IMG_WIND =
  "https://images.unsplash.com/photo-16005734727591-42d7c8e3a32a?q=80&w=1200&auto=format&fit=crop";
const IMG_TORNADO =
  "https://images.unsplash.com/photo-1579196589171-9a4e842197f9?q=80&w=1200&auto=format&fit=crop";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <TrustBar />
      <Pricing />
      <StormTypes />
      <Rules />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="text-xl tracking-tight font-black">Storm Lead Machine</div>
        <div className="text-xs text-white/60" style={{ fontFamily: "Calligrapher, ui-sans-serif" }}>
          Precision storm leads. You close. We fuel.
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Fuel Your Roofing Business with <span className="text-blue-400">Storm Leads</span>
      </motion.h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        We find storm-damaged properties in your target zip codes. You focus on closing the deals.
      </p>
      <motion.a
        href="#pricing"
        whileHover={{ scale: 1.05 }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl"
      >
        View Pricing
      </motion.a>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-6 bg-slate-900 border-y border-white/10 text-center text-gray-300 text-sm">
      Trusted by roofers nationwide • 100% Exclusive Leads • High Intent Homeowners
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 text-center bg-slate-950">
      <h2 className="text-4xl font-bold mb-8">Pricing Packages</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 rounded-2xl border border-white/10 bg-slate-900">
          <h3 className="text-2xl mb-4 font-semibold text-blue-400">Residential Leads</h3>
          <ul className="text-gray-300 text-left space-y-2">
            <li>25 leads - $120 per lead - $3,000</li>
            <li>50 leads - $115 per lead - $5,750</li>
            <li>100 leads - $110 per lead - $11,000</li>
            <li>200 leads - $105 per lead - $21,000</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-white/10 bg-slate-900">
          <h3 className="text-2xl mb-4 font-semibold text-blue-400">Commercial Leads</h3>
          <ul className="text-gray-300 text-left space-y-2">
            <li>5 leads - $300 per lead - $1,500</li>
            <li>20 leads - $290 per lead - $5,800</li>
            <li>30 leads - $285 per lead - $8,550</li>
            <li>50 leads - $275 per lead - $13,750</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function StormTypes() {
  return (
    <section className="py-20 px-4 text-center bg-slate-900">
      <h2 className="text-4xl font-bold mb-8">Storm Lead Types</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <StormCard title="Hail Damage" img={IMG_HAIL} />
        <StormCard title="Wind Damage" img={IMG_WIND} />
        <StormCard title="Tornado / Hurricanes" img={IMG_TORNADO} />
      </div>
    </section>
  );
}

function StormCard({ title, img }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-slate-800"
    >
      <img src={img} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 font-semibold text-lg">{title}</div>
    </motion.div>
  );
}

function Rules() {
  return (
    <section className="py-20 px-4 bg-slate-950 text-center">
      <h2 className="text-4xl font-bold mb-8">Rules to Running the Appointments</h2>
      <div className="text-gray-300 max-w-2xl mx-auto space-y-4">
        <p>Do not call the leads ahead of time before you go.</p>
        <p>Bad leads must be returned within 2 days.</p>
        <p>We just get you on the roof in front of the owner — you close it from there.</p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-4 text-center bg-blue-600">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Ready to Supercharge Your Roofing Business?
      </h2>
      <a
        href="https://square.link/u/RSfgAZHS"
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl"
      >
        Order Now
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-400 bg-slate-900 border-t border-white/10">
      © {new Date().getFullYear()} Storm Lead Machine. All rights reserved.
    </footer>
  );
}
