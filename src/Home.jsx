import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center bg-gray-50 min-h-screen text-slate-800">
      <header className="py-10">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to Storm Lead Machine</h1>
        <p className="mt-3 text-lg text-slate-600">
          Generate high-quality storm restoration leads nationwide.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-3">
        {["Hail", "Wind", "Tornado & Hurricanes"].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm p-5"
          >
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-slate-600 mt-1">
              Targeted zones by ZIP with precise filters.
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
