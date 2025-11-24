import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hail from "./Hail";
import Wind from "./Wind";
import Tornado from "./Tornado";
import Pricing from "./Pricing";
import Contact from "./Contact";
import "./site.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hail" element={<Hail />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/tornado" element={<Tornado />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
