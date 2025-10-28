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
        Fuel Your Roofing Business with <span className="text-blue-
