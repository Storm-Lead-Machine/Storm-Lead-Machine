// src/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">SL</span>
            <span className="font-semibold tracking-tight">Storm Lead Machine</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#types" className="hover:text-blue-700">Storm Lead Types</a>
            <a href="#rules" className="hover:text-blue-700">Rules</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a
              href="https://square.link/u/RSfgAZHS"
              className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Trial
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Get on more roofs in the <span className="text-blue-600">ZIP codes you choose</span>.
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Hyper-targeted storm restoration leads (hail, wind, tornado/hurricane) sent in real time. You close it from there.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://square.link/u/RSfgAZHS"
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Start 10-Lead Trial
              </a>
              <a href="#pricing" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-slate-400">
                See Pricing
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Fast setup · Nationwide · Real homeowners only</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200 p-6">
              <div className="h-full w-full rounded-xl border-2 border-dashed border-blue-200 grid place-items-center text-blue-700 font-semibold">
                Your hero graphic / collage goes here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-slate-600">
          <div>ZIP-Code Targeting</div>
          <div>Real-Time Delivery</div>
          <div>Roof Age Filters</div>
          <div>Return Bad Leads in 2 Days</div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pricing</h2>
        <p className="mt-2 text-slate-600">Simple, transparent pricing for residential and commercial leads.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Residential */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Residential Leads</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center justify-between"><span>25 leads</span><span className="font-semibold">$120 / lead — $3,000</span></li>
              <li className="flex items-center justify-between"><span>50 leads</span><span className="font-semibold">$115 / lead — $5,750</span></li>
              <li className="flex items-center justify-between"><span>100 leads</span><span className="font-semibold">$110 / lead — $11,000</span></li>
              <li className="flex items-center justify-between"><span>200 leads</span><span className="font-semibold">$105 / lead — $21,000</span></li>
            </ul>
            <a
              href="https://square.link/u/RSfgAZHS"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Get Residential Leads
            </a>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Commercial Leads</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center justify-between"><span>5 leads</span><span className="font-semibold">$300 / lead — $1,500</span></li>
              <li className="flex items-center justify-between"><span>20 leads</span><span className="font-semibold">$290 / lead — $5,800</span></li>
              <li className="flex items-center justify-between"><span>30 leads</span><span className="font-semibold">$285 / lead — $8,550</span></li>
              <li className="flex items-center justify-between"><span>50 leads</span><span className="font-semibold">$275 / lead — $13,750</span></li>
