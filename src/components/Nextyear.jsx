import React, { useRef } from "react";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import { SparklesText } from "./ui/sparkles-text";
import { Confetti } from "./ui/confetti";
import { ShineBorder } from "./ui/shine-border"; // import the ShineBorder component

export default function Maorledet2025() {
  const confettiRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-8 text-center relative overflow-hidden">
      {/* קונפטי שנשחרר על המעורלדת 2025 */}

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      
      {/* כותרת עם ShineBorder */}
      <ShineBorder
        borderRadius={12}
        borderWidth={3}
        duration={2}
        color="#ff00ff" // צבע של הקו
        className="mb-8"
      >
        <SparklesText
          text="מעורלדת 2025"
          className="text-6xl md:text-8xl font-extrabold mb-8 text-gradient bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text animate-pulse cursor-pointer"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
      </ShineBorder>

      {/* פסקה */}
      <p className="text-lg md:text-2xl max-w-3xl mb-12 text-white/90 drop-shadow-lg leading-relaxed">
        זה הולך להיות הלילה שלא תשכחו! כל הכוכבים מתקבצים מול העיניים שלנו, האנרגיות בשמיים, והמוזיקה לא עוצרת לרגע.
        שתייה ללא תחתית, אנשים שלא נשכח (וכנראה כן נשכח בבוקר), ורגעים שנזכור לנצח. מסיבה שתשבור את כל החוקים, 
        כי מעורלדת 2025 היא לא סתם חגיגה – היא חוויה שאין לה תחליף!
      </p>

      {/* טקסט שזז עם גלילה */}
      <VelocityScroll defaultVelocity={5} numRows={3} className="text-indigo-200 text-xl md:text-2xl font-semibold tracking-wide mb-12">
        אתם מוכנים לזה? זה מתקרב! הולך להיות מטורף! מעורלדת 2025! משהו שלא ראיתם בחיים!
      </VelocityScroll>

      {/* כפתור שוקל שיכנס לנושא */}
      <a
        href="#"
        className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl text-white hover:scale-105 transition-transform duration-300"
      >
        ✨ הצטרפו אלינו עכשיו! ✨
      </a>

    </div>
  );
}