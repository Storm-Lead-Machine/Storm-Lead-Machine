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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500" />
        {/* subtle grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:20px_20px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-32">
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
            className="mt-4 text-center text-xl text-blue-100"
          >
            Can’t Stop the Machine.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="#pricing"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:shadow-lg transition"
            >
              See Pricing
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
          {/* HAIL (no image to avoid build errors) */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex items-center justify-center h-40 bg-slate-50">
              {/* hail icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 4a5 5 0 0 1 9.584 2H17a4 4 0 1 1 0 8H6a4 4 0 1 1 .584-7.999A5 5 0 0 1 7 4Z" />
              </svg>
            </div>
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
      <section
        id="pricing"
        className="relative border-t bg-slate-50 py-16 sm:py-20"
      >
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
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RULES / NOTES */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Rules to Running Appointments</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
              <li>Do not call the leads ahead of time before you go.</li>
              <li>Bad leads must be returned within 2 days.</li>
              <li>
                We get you on the roof, in front of the owner—close it from there.
              </li>
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Why Storm Lead Machine?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
              <li>Event-driven targeting across hail, wind, tornado & hurricane.</li>
              <li>ZIP-level control with optional roof-age filters.</li>
              <li>Transparent pricing—no gimmicks, no resold leads.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* STICKY CTA */}
      <section className="border-t bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            Ready to turn storms into installs?
          </motion.h3>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5 flex justify-center"
          >
            <a
              href="#pricing"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              View Packages
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
