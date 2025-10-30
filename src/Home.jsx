// src/Home.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      {/* TOP CONTACT STRIP */}
      <div className="w-full border-b bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+18339622446" className="font-semibold hover:underline">
              📞 833-9MACHIN (962-2446)
            </a>
            <span className="hidden text-slate-400 sm:inline">•</span>
            <a href="mailto:stormleadmachine@gmail.com" className="hover:underline">
              ✉️ stormleadmachine@gmail.com
            </a>
          </div>
          <a
            href="#pricing"
            className="hidden rounded-md bg-blue-600 px-3 py-1.5 text-white shadow hover:bg-blue-700 sm:block"
          >
            Get Leads Now
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:20px_20px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          {/* LOGO */}
          <motion.img
            src="/storm-lead-machine-logo.png"
            alt="Storm Lead Machine logo"
            className="mx-auto mb-6 h-16 w-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Storm Lead Machine
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 text-center text-lg text-blue-100"
          >
            Can’t Stop the Machine.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-7 flex justify-center gap-4"
          >
            <a
              href="#pricing"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:shadow-lg transition"
            >
              Get Leads Now
            </a>
            <a
              href="#lead-types"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Lead Types
            </a>
          </motion.div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-3">
          {[
            "Exclusive storm restoration leads",
            "Targeted by ZIP with roof-age filters",
            "Flexible packages — scale up fast",
          ].map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-700 shadow-sm"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEAD TYPES */}
      <section id="lead-types" className="mx-auto max-w-6xl px-6 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Storm Lead Types
        </motion.h2>
        <p className="mt-3 text-center text-slate-600">
          Dial in your campaigns by event type and geography.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {/* HAIL — now with your new image */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <img
              src="/hail-leads.jpg"
              alt="Hail storm roof damage"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold">Hail</h3>
              <p className="mt-1 text-sm text-slate-600">
                ZIP-focused hail zones with optional roof-age filters.
              </p>
            </div>
          </motion.div>

          {/* WIND */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <img
              src="/wind-damage.jpg"
              alt="Wind damage"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold">Wind</h3>
              <p className="mt-1 text-sm text-slate-600">
                Uplift & shingle displacement targeting severe gust paths.
              </p>
            </div>
          </motion.div>

          {/* TORNADO / HURRICANE */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <img
              src="/tornado-damage.jpg"
              alt="Tornado and hurricane damage"
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold">Tornado & Hurricanes</h3>
              <p className="mt-1 text-sm text-slate-600">
                Precision targeting for catastrophic damage corridors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-t bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Pricing & Packages
          </motion.h2>
          <p className="mt-3 text-center text-slate-600">
            Scale from trials to volume—keep it simple and profitable.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Residential */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">Residential Leads</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex justify-between border-b py-2">
                  <span>25 leads</span> <span>$120 per lead — $3,000</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>50 leads</span> <span>$115 per lead — $5,750</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>100 leads</span> <span>$110 per lead — $11,000</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>200 leads</span> <span>$105 per lead — $21,000</span>
                </li>
              </ul>

              <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-medium">Filters</div>
                <div className="mt-1">
                  5+ yr roofs +$10/lead &nbsp;•&nbsp; 8+ yr roofs +$25/lead
                </div>
              </div>
            </motion.div>

            {/* Commercial */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">Commercial Leads</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex justify-between border-b py-2">
                  <span>5 leads</span> <span>$300 per lead — $1,500</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>20 leads</span> <span>$290 per lead — $5,800</span>
                </li>
                <li className="flex justify-between border-b py-2">
                  <span>30 leads</span> <span>$285 per lead — $8,550</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>50 leads</span> <span>$275 per lead — $13,750</span>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition"
                >
                  Get Leads Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div>
                <span className="font-medium">Phone: </span>
                <a href="tel:+18339622446" className="hover:underline">
                  833-9MACHIN (962-2446)
                </a>
              </div>
              <div>
                <span className="font-medium">Email: </span>
                <a href="mailto:stormleadmachine@gmail.com" className="hover:underline">
                  stormleadmachine@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Ready to Start?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Click below to launch with our $1,000 trial or jump straight into a package.
            </p>
            <a
              href="#pricing"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Get Leads Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
