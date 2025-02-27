import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar"; // השתמש ב-navbar שלך
import Home from "./components/Home";
import Alchohol from "./components/Alchohol";
import Maorledet2025 from "./components/Nextyear";
import Gallery from "./components/Gallery";
import { TracingBeam } from "./components/ui/tracing-beam";
import './index.css'; // ייבוא קובץ ה-CSS שהגדרת בו את Tailwind
import ParticleBackground from "./components/ui/particlebackground"; // ייבוא האנימציה

function App() {
  return (
    <div className="relative">
      {/* Navbar מקובע */}
      <ParticleBackground />

      <Navbar />

      <TracingBeam>
        <div className="relative z-10">

          <Element name="home">
            <Home />
          </Element>

          <Element name="nextyear">
            <Maorledet2025 />
          </Element>

          <Element name="gallery">
            <Gallery />
          </Element>

          <Element name="alchohol">
            <Alchohol />
          </Element>
        </div>
      </TracingBeam>
    </div>
  );
}

export default App;