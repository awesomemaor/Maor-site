import React, { useRef } from "react";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import { SparklesText } from "./ui/sparkles-text";
import { ShineBorder } from "./ui/shine-border"; 
import CoolMode from './ui/cool-mode'; // ייבוא CoolMode
import { Confetti } from './ui/confetti'; // ייבוא ה-Confetti
import './styles/clockStyles.css'; // ייבוא קובץ ה-CSS

export default function Maorledet2025() {
  const confettiRef = useRef(null); // יוצרים הפניה ל-Confetti

  const handleClick = () => {
    console.log("הכפתור נלחץ!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-8 text-center relative">
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({}); // הפעלת אפקט קונפטי כאשר האחוזה מעל הכותרת
        }}
      />

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <ShineBorder
          borderRadius={12}
          borderWidth={3}
          duration={2}
          color="#ff00ff"
          className="relative z-10"
        >
          <SparklesText
            text="מעורלדת 2025"
            className="text-6xl md:text-8xl font-extrabold text-gradient bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text animate-pulse cursor-pointer"
          />
        </ShineBorder>
      </div>

      {/* פסקה */}
      <p className="text-lg md:text-2xl max-w-3xl mb-12 text-white/90 drop-shadow-lg leading-relaxed z-10">
        זה הולך להיות הלילה שלא תשכחו! כל הכוכבים מתקבצים מול העיניים שלנו, האנרגיות בשמיים, והמוזיקה לא עוצרת לרגע.
        שתייה ללא תחתית, אנשים שלא נשכח (וכנראה כן נשכח בבוקר), ורגעים שנזכור לנצח. מסיבה שתשבור את כל החוקים, 
        כי מעורלדת 2025 היא לא סתם חגיגה – היא חוויה שאין לה תחליף!
      </p>

      {/* טקסט שזז עם גלילה */}
      <VelocityScroll 
        defaultVelocity={5} 
        numRows={3} 
        className="text-3xl md:text-4xl font-semibold tracking-wide mb-12 z-10 bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 backdrop-blur-lg bg-opacity-40 text-white shadow-xl"
      >
        אתם מוכנים לזה? זה מתקרב! הולך להיות מטורף! מעורלדת 2025! משהו שלא ראיתם בחיים! זה הזמן לא לפספס את האירוע!
      </VelocityScroll>

      {/* כפתור עם CoolMode */}
      <div className="relative mb-12 z-20">
        <CoolMode>
          <button 
            onClick={handleClick} 
            className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl text-white hover:scale-105 transition-transform duration-300"
            style={{ pointerEvents: "auto" }}
          >
            ! כרטיסים בקרוב אבל בינתיים תלחצו עליי
          </button>
        </CoolMode>
      </div>

      {/* שעון */}
      <div className="clock-container mt-12">
        <div className="clock">
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
        </div>
      </div>
    </div>
  );
}