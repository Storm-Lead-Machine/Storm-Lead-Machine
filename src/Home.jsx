import React, { useEffect, useMemo, useRef, useState } from "react";

// --- assets (match names exactly) ---
import logo from "./assets/Logo.png";
import hailImg from "./assets/hail.jpg";
import windImg from "./assets/wind.jpg";
import tornadoImg from "./assets/tornado.jpg";
import sky1 from "./assets/sky1.jpg";
import sky2 from "./assets/sky2.jpg";
import sky3 from "./assets/sky3.jpg";
import sky4 from "./assets/sky4.jpg";
import sky5 from "./assets/sky5.jpg";

const SQUARE_LINK = "https://square.link/u/RSfgAZHS";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "lead-types", label: "Storm Lead Types" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState("overview");

  // pool of sky backgrounds
  const skies = useMemo(() => [sky1, sky2, sky3, sky4, sky5], []);
  const pickSky = () => skies[Math.floor(Math.random() * skies.length)];

  // crossfade background: two layers we swap between
  const [bgA, setBgA] = useState(pickSky());
  const [bgB, setBgB] = useState(pickSky());
  const [showA, setShowA] = useState(true);
  const firstRun = useRef(true);

  useEffect(() => {
    // on tab change, choose a new background and toggle layers (fade)
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const next = pickSky();
    if (showA) setBgB(next);
    else setBgA(next);
    const t = setTimeout(() => setShowA((s) => !s), 30);
    return () => clearTimeout(t);
  }, [active]); // eslint-disable-line

  // reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <>
      <style>{`
        :root{
          --ink:#f1f4ff; --dim:#cdd5f5; --line:#ffffff1f; --glass:#0b1022cc;
          --brand:#ff2d55; --gold:#ffd166;
        }
        html, body { background:#05070f; }
        .page { min-height:100dvh; color:var(--ink); font-family:ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; position:relative; }

        /* --- background crossfade layers --- */
        .bg-layer {
          position: fixed; inset: 0;
          background-size: cover; background-position: center;
          background-attachment: fi
