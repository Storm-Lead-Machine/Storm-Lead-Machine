import React from "react";
import { motion } from "framer-motion";

// Swap the three placeholder image URLs below with your actual photos:
const IMG_HAIL = "https://images.unsplash.com/photo-1596995804697-6a4b80a3b2fa?q=80&w=1200&auto=format&fit=crop"; // ← replace with your hail damage photo
const IMG_WIND = "https://images.unsplash.com/photo-1600573472591-42d6c7c8c3aa?q=80&w=1200&auto=format&fit=crop"; // ← replace with your wind damage photo
const IMG_TORNADO = "https://images.unsplash.com/photo-1597196589171-9a4e84219f7f?q=80&w=1200&auto=format&fit=crop"; // ← replace with your tornado/hurricane photo

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

/* ========================== HEADER ========================== */
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-black text-xl tracking-tight">Storm Lead Machine</div>
            <div
              className="text-xs text-white/60"
              style={{ fontFamily: "Calligrapher, ui-sans-serif" }}
            >
              Precision storm leads. You close. We fuel.
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#pricing" className="hover:text-teal-300">Pricing</a>
          <a href="#storm-types" className="hover:text-teal-300">Storm lead types</a>
          <a href="#rules" className="hover:text-teal-300">Rules</a>
          <a href="#contact" className="hover:text-teal-300">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://square.link/u/RSfgAZHS"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold shadow-lg shadow-teal-500/20"
          >
            Start Trial
          </a>
        </div>
      </div>
    </header>
  );
}

/* ========================== HERO ========================== */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-black leading-tight">
            Get on the roof with{" "}
            <span className="text-teal-400">ready-to-close</span> homeowners in the ZIP codes you want.
          </h1>
          <p className="text-white/70 text-lg">
            No live transfers. We book storm-damage appointments so you can do what you do best—inspect, present, and close.
          </p>
          <ul className="text-white/70 text-sm space-y-2">
            <li>✔ Targeted by storm type (hail, wind, tornado/hurricanes)</li>
            <li>✔ Optional roof-age filters for higher intent</li>
            <li>✔ "Bad leads" can be returned within 2 days</li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a
              href="#pricing"
              className="rounded-2xl px-5 py-3 bg-white text-slate-900 font-semibold hover:bg-white/90 shadow"
            >
              See Pricing
            </a>
            <a
              href="#storm-types"
              className="rounded-2xl px-5 py-3 border border-white/20 hover:border-teal-400/60"
            >
              Storm Lead Types
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-2xl">
            <div className="h-full w-full rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,.25),transparent_35%)] flex items-center justify-center">
              <div className="text-center p-8">
                <Logo className="mx-auto h-16 w-16" />
                <div className="mt-4 font-black text-2xl">Storm Lead Machine</div>
                <div className="text-white/60">Lightning-fast demand. Gear-level precision.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================== TRUST BAR ========================== */
function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/60">
        <div className="rounded-xl border border-white/10 p-3 text-center">ZIP-code targeting</div>
        <div className="rounded-xl border border-white/10 p-3 text-center">Storm-type segmentation</div>
        <div className="rounded-xl border border-white/10 p-3 text-center">Roof-age filters</div>
        <div className="rounded-xl border border-white/10 p-3 text-center">2-day bad-lead return</div>
      </div>
    </motion.div>
  );
}

/* ========================== PRICING ========================== */
function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-black mb-8"
      >
        Pricing
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* RESIDENTIAL */}
        <div className="rounded-3xl border border-white/10 bg-slate-900 shadow-xl">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Residential Leads</h3>
            <span className="text-xs text-white/50">Page 1 primary</span>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-white/90">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>25 leads</span><span>$120/lead — <b>$3,000</b></span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>50 leads</span><span>$115/lead — <b>$5,750</b></span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>100 leads</span><span>$110/lead — <b>$11,000</b></span>
              </li>
              <li className="flex justify-between">
                <span>200 leads</span><span>$105/lead — <b>$21,000</b></span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-800/60 p-4 text-sm">
              <div className="font-semibold mb-2">Filters (optional add-ons)</div>
              <ul className="space-y-1 text-white/80">
                <li>5+ yr old roofs: <b>+$10 per lead</b></li>
                <li>8+ yr old roofs: <b>+$25 per lead</b></li>
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://square.link/u/RSfgAZHS" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-5 py-3 bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 shadow">Buy Now via Square</a>
              <a href="#contact" className="rounded-2xl px-5 py-3 border border-white/20 hover:border-teal-400/60">Talk to Sales</a>
            </div>
          </div>
        </div>

        {/* COMMERCIAL */}
        <div className="rounded-3xl border border-white/10 bg-slate-900 shadow-xl">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Commercial Leads</h3>
            <span className="text-xs text-white/50">Page 1 primary</span>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-white/90">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>5 leads</span><span>$300/lead — <b>$1,500</b></span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>20 leads</span><span>$290/lead — <b>$5,800</b></span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>30 leads</span><span>$285/lead — <b>$8,550</b></span>
              </li>
              <li className="flex justify-between">
                <span>50 leads</span><span>$275/lead — <b>$13,750</b></span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://square.link/u/RSfgAZHS" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-5 py-3 bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 shadow">Buy Now via Square</a>
              <a href="#contact" className="rounded-2xl px-5 py-3 border border-white/20 hover:border-teal-400/60">Talk to Sales</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ========================== STORM TYPES ========================== */
function StormTypes() {
  return (
    <section id="storm-types" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-black mb-8"
      >
        Storm lead types
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        <StormCard title="Hail" img={IMG_HAIL} description="Appointments from homeowners with verified hail impact in your chosen ZIP codes." />
        <StormCard title="Wind" img={IMG_WIND} description="Wind-driven damage leads including missing shingles, lifted tabs, and creased slopes." />
        <StormCard title="Tornado / Hurricanes" img={IMG_TORNADO} description="Cat-response ready demand focused around declared events and corridors." />
      </div>
    </section>
  );
}

function StormCard({ title, img, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-xl"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={img} alt={title + ' damage'} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/75 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

/* ========================== RULES ========================== */
function Rules() {
  return (
    <section id="rules" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-black mb-6"
      >
        Rules to running the appointments
      </motion.h2>
      <motion.ol
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="list-decimal pl-6 space-y-3 text-white/85"
      >
        <li>Do <b>not</b> call the leads ahead of time before you go.</li>
        <li>"Bad leads" must be returned within <b>2 days</b>.</li>
        <li>We get you on the roof in front of the owner in the ZIP codes you want—you close it from there.</li>
      </motion.ol>
    </section>
  );
}

/* ========================== CTA ========================== */
function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-teal-400/20 bg-gradient-to-br from-teal-500/10 to-slate-900 p-8 text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-black mb-3">Ready to fill your calendar?</h3>
        <p className="text-white/70 max-w-2xl mx-auto mb-6">
          Kick off with a package that fits your goals. Use our Square checkout to get rolling immediately.
        </p>
        <a
          href="https://square.link/u/RSfgAZHS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl px-6 py-3 bg-white text-slate-900 font-semibold hover:bg-white/90 shadow"
        >
          Buy via Square
        </a>
      </motion.div>
    </section>
  );
}

/* ========================== FOOTER ========================== */
function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
        <div className="space-y-1">
          <div className="font-black text-xl">Storm Lead Machine</div>
          <div className="text-white/60 text-sm">stormleadmachine@gmail.com</div>
          <div className

