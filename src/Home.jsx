// src/Home.jsx
import { motion } from "framer-motion";

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
          className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
        >
          <h3 className="font-semibold text-lg">Hail</h3>
          <p className="text-sm text-slate-600 mt-1">
            Targeted hail zones by ZIP with roof-age filters.
          </p>
        </motion.div>

        {/* Wind */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
        >
          <h3 className="font-semibold text-lg">Wind</h3>
          <p className="text-sm text-slate-600 mt-1">
            Roof uplift and shingle displacement targeting severe gust paths.
          </p>
        </motion.div>

        {/* Tornado / Hurricanes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
        >
          <h3 className="font-semibold text-lg">Tornado & Hurricanes</h3>
          <p className="text-sm text-slate-600 mt-1">
            Precision targeting for catastrophic damage zones.
          </p>
        </motion.div>

      </section>
    </div>
  );
}
