import React, { useMemo, useState } from "react";
import logo from "./Storm Lead Machine Logo.png";

export default function Home() {
  const TABS = ["Lead Types", "Pricing", "Rules", "Contact"];
  const [active, setActive] = useState("Lead Types");

  // 🌤 Backgrounds for each tab
  const bgMap = useMemo(
    () => ({
      "Lead Types":
        "https://images.unsplash.com/photo-1509833903111-34ff57b0bbd3?q=80&w=1600&auto=format&fit=crop",
      Pricing:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
      Rules:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      Contact:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop",
    }),
    []
  );

  const bgUrl = bgMap[active];

  // 🧱 Section components
  const LeadTypes = () => (
    <div className="text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Storm Lead Types</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Hail */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/70 backdrop-blur-md p-4">
          <img
            src="https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=1600&auto=format&fit=crop"
            alt="Hail Damage"
            className="rounded-xl mb-3 h-48 w-full object-cover"
          />
          <h3 className="font-semibold text-xl">Hail Leads</h3>
          <p className="text-sm text-gray-300 mt-2">
            Targeted hail-affected zones by ZIP with roof-age filters for
            maximum accuracy.
          </p>
        </div>

        {/* Wind */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/70 backdrop-blur-md p-4">
          <img
            src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop"
            alt="Wind Damage"
            className="rounded-xl mb-3 h-48 w-full object-cover"
          />
          <h3 className="font-semibold text-xl">Wind Leads</h3>
          <p className="text-sm text-gray-300 mt-2">
            Roof and siding wind damage leads from verified storm zones.
          </p>
        </div>

        {/* Tornado */}
        <div className="rounded-2xl overflow-hidden bg-slate-900/70 backdrop-blur-md p-4">
          <img
            src="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop"
            alt="Tornado Damage"
            className="rounded-xl mb-3 h-48 w-full object-cover"
          />
          <h3 className="font-semibold text-xl">Tornado & Hurricane Leads</h3>
          <p className="text-sm text-gray-300 mt-2">
            High-intent storm zones where homeowners are ready to rebuild fast.
          </p>
        </div>
      </div>
    </div>
  );

  const Pricing = () => (
    <div className="text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Pricing Packages</h2>
      <p className="text-gray-300 mb-4">
        Residential & commercial leads — filtered for your ideal roofing zones.
      </p>

      <div className="grid md:grid-cols-2 gap-8 justify-center">
        {/* Residential */}
        <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-red-400">
            Residential Leads
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>25 leads – $120 each ($3,000)</li>
            <li>50 leads – $115 each ($5,750)</li>
            <li>100 leads – $110 each ($11,000)</li>
            <li>200 leads – $105 each ($21,000)</li>
          </ul>
        </div>

        {/* Commercial */}
        <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            Commercial Leads
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>5 leads – $300 each ($1,500)</li>
            <li>20 leads – $290 each ($5,800)</li>
            <li>30 leads – $285 each ($8,550)</li>
            <li>50 leads – $275 each ($13,750)</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-6">
        Filters: 5+ yr old roofs +$10/lead, 8+ yr old roofs +$25/lead.
      </p>
    </div>
  );

  const Rules = () => (
    <div className="text-white max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Rules & Policies</h2>
      <ul className="space-y-3 text-gray-300">
        <li>• Do not call the leads ahead of time before visiting.</li>
        <li>
          • Bad leads must be returned within 2 days to qualify for credit.
        </li>
        <li>
          • Otherwise, we automatically add 20% extra leads to make up for
          invalid ones.
        </li>
        <li>• We get you in front of homeowners — you close the deal.</li>
      </ul>
    </div>
  );

  const Contact = () => (
    <div className="text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg">📞 833-9MACHIN (622-446)</p>
      <p className="text-lg mt-2">✉️ stormleadmachine@gmail.com</p>
      <p className="text-gray-300 mt-4">
        Can’t Stop the Machine. Get leads now.
      </p>
    </div>
  );

  // Select active tab component
  const renderTab = () => {
    switch (active) {
      case "Lead Types":
        return <LeadTypes />;
      case "Pricing":
        return <Pricing />;
      case "Rules":
        return <Rules />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-black/60 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Storm Lead Machine Logo"
            className="w-16 h-16 rounded-lg"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            Storm Lead Machine
          </h1>
        </div>

        <nav className="space-x-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-xl font-semibold ${
                active === tab
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-8 bg-black/40">
        <div className="max-w-5xl w-full">{renderTab()}</div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-400 text-sm bg-black/60">
        © {new Date().getFullYear()} Storm Lead Machine. All rights reserved.
      </footer>
    </div>
  );
}


