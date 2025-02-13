"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({ text, duration = 5 }) => {
  const svgRef = useRef(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    // מפעיל את האנימציה כל פעם שנטען העמוד או שגוללים
    const handleScroll = () => {
      setTriggerAnimation(false);
      setTimeout(() => setTriggerAnimation(true), 100); // מפעיל מחדש אחרי השהייה
    };

    handleScroll(); // מפעיל פעם ראשונה
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <defs>
        {/* גרדיאנט צבעוני שמתאים לאתר המעורלדת */}
        <linearGradient id="textGradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#8A2BE2" /> {/* סגול בוהק */}
          <stop offset="50%" stopColor="#00BFFF" /> {/* כחול בהיר ניאון */}
          <stop offset="100%" stopColor="#8A2BE2" />
        </linearGradient>
      </defs>

      {/* טקסט שקוף עם קווים שמתמלאים */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="2"
        fill="transparent"
        className="font-[helvetica] font-bold text-7xl"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={triggerAnimation ? { strokeDashoffset: 0 } : {}}
        transition={{
          duration: duration,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* טקסט מלא שמופיע אחרי האנימציה */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        className="font-[helvetica] font-bold text-7xl"
        initial={{ opacity: 0 }}
        animate={triggerAnimation ? { opacity: 1 } : {}}
        transition={{
          duration: duration,
          delay: duration * 0.6, // גורם לאפקט של הופעה חלקה
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};