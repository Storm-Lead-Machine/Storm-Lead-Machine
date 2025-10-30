// src/Home.jsx
import { motion } from "framer-motion";
import hailImg from "./assets/hail-damage.jpg";
import windImg from "./assets/wind-damage.jpg";
import tornadoImg from "./assets/tornado-hurricane.jpg";

export default function Home() {
  return (
    <div className="text-center bg-gray-50 min-h-screen text-slate-800">
      <header className="py-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to Storm Lead Machine
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Generate high-quality storm restoration leads nationwide.
        </p>
      </header>

      {/* Storm Lead Types */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-3">
        {/* Hail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm"
        >
          <img src={hailImg} alt="Hail damage" className="h-48 w-full object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg">Hail</h3>
            <p className="text-sm text-slate-600 mt-1">
              Targeted hail zones by ZIP with roof-age filters.
            </p>
          </div>
        </motion.div>

        {/* Wind */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm"
        >
          <img src={windImg} alt="Wind damage" className="h-48 w-full object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg">Wind</h3>
            <p className="text-sm text-slate-600 mt-1">
              Roof uplift and shingle displacement targeting severe gust paths.
            </p>
          </div>
        </motion.div>

        {/* Tornado / Hurricane */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm"
        >
          <img src={tornadoImg} alt="Tornado and hurricane damage" className="h-48 w-full object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg">Tornado & Hurricanes</h3>
            <p className="text-sm text-slate-600 mt-1">
              Precision targeting for catastrophic damage zones.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-4 py-12 text-left">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <p className="text-slate-600 text-center mt-2">
          Exclusive storm-damage roofing leads — Residential & Commercial.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {/* Residential */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Residential Leads</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>25 leads — $120 per lead — $3,000</li>
              <li>50 leads — $115 per lead — $5,750</li>
              <li>100 leads — $110 per lead — $11,000</li>
              <li>200 leads — $105 per lead — $21,000</li>
            </ul>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Commercial Leads</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>5 leads — $300 per lead — $1,500</li>
              <li>20 leads — $290 per lead — $5,800</li>
              <li>30 leads — $285 per lead — $8,550</li>
              <li>50 leads — $275 per lead — $13,750</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="font-semibold">Filters</h4>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>5+ yr old roofs only: +$10/lead</li>
            <li>8+ yr old roofs only: +$25/lead</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://square.link/u/RSfgAZHS"
            className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white hover:opacity-90"
          >
            Start with $1,000 Trial (Square)
          </a>
        </div>
      </section>
    </div>
  );
}
