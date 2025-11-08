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
          <ul classN

