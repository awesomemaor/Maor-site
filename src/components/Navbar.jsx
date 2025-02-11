import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-purple-900 via-fuchsia-800 to-indigo-900 shadow-2xl py-4 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* לוגו מטורף */}
        <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          🔥 מעורלדת 🔥
        </div>

        {/* קישורים לנווט */}
        <div className="flex space-x-8">
          <NavItem to="home" text="דף הבית" />
          <NavItem to="nextyear" text="מעורלדת 2025" />
          <NavItem to="gallery" text="גלריית הזכרונות" />
          <NavItem to="alchohol" text="עולם האלכוהול" />
        </div>

        {/* כפתור 'Connect Us' */}
        <div>
          <Link
            to="connect-us"
            smooth={true}
            duration={500}
            className="inline-block px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:scale-110 hover:shadow-purple-500 transition-all duration-300"
          >
            ✨ Connect Us ✨
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, text }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="relative px-5 py-2 text-lg font-semibold text-white transition-all rounded-lg hover:text-yellow-400 hover:bg-opacity-30 bg-opacity-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
      {text}
      {/* אפקט זוהר */}
      <span className="absolute inset-0 bg-purple-600 opacity-0 hover:opacity-30 rounded-lg transition-opacity duration-300"></span>
    </Link>
  );
}

export default Navbar;