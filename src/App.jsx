import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar"; // השתמש ב-navbar שלך
import Home from "./components/Home";
import Alchohol from "./components/Alchohol";
import Maorledet2025 from "./components/Nextyear";
import Gallery from "./components/Gallery";
import { TracingBeam } from "./components/ui/tracing-beam";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import './index.css'; // ייבוא קובץ ה-CSS שהגדרת בו את Tailwind

function App() {
  return (
<div className="relative bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-900 bg-[length:400%_400%] animate-gradient-xy">
      {/* Navbar מקובע */}
      <Navbar />
      {/* החלת האפקט רק על התוכן הפנימי */}
      <TracingBeam>
        <div className="relative z-10">
          {/* התוכן עם הפסקי זמן */}
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