"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { MacbookScroll } from "./ui/macbook-scroll";

function Maorledet2025() {
  return (
    <div
      id="nextyear"
      className="flex flex-col justify-center items-center min-h-screen text-white py-12"
      style={{
        background: "linear-gradient(to bottom, #6a0dad, #4b0082, #0000ff)", // רקע מותאם אישית לחלק זה
      }}
    >
      <div className="relative w-full max-w-screen-md h-[500px]">
        <MacbookScroll src="/maorledet2025.jpg" title="מעורלדת 2025" />
      </div>

      {/* מנורה */}
      <LampContainer className="mb-8">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-center bg-gradient-to-br from-yellow-400 to-red-600 py-6 px-12 text-7xl font-extrabold tracking-tight text-transparent bg-clip-text md:text-8xl"
        >
          מעורלדת 2025
        </motion.h1>
      </LampContainer>

      {/* פסקה עם HeroHighlight */}
      <HeroHighlight>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="bg-gradient-to-t from-purple-800 via-purple-700 to-purple-600 shadow-xl rounded-xl p-8 w-full max-w-4xl mt-4 mx-4 sm:mx-8"
        >
          <p className="text-lg mb-6 text-center leading-relaxed sm:text-xl">
            השנה, מעורלדת תעשה היסטוריה. זה לא יהיה רק לילה – זה יהיה אירוע שישנה את חוקי המשחק. חוויות שיטריפו את החושים, רגעים שיגרמו ללב לפעום בקצב מסחרר, וכוסות שיתמלאו שוב ושוב עד שכוח המשיכה יזכיר לכולנו מי באמת שולט.
            <br />
            <br />
            ב-2025, אנחנו שוברים כל גבול, שוברים כל שיא, ושוברים… אולי גם קצת את עצמנו.
          </p>

          {/* Highlight בפסקה */}
          <p className="text-lg mb-6 text-center leading-relaxed sm:text-xl">
            השנה, מעורלדת תעשה היסטוריה. זה לא יהיה רק לילה – זה יהיה אירוע שישנה את חוקי המשחק. חוויות שיטריפו את החושים, רגעים שיגרמו ללב לפעום בקצב מסחרר, וכוסות שיתמלאו שוב ושוב עד שכוח המשיכה יזכיר לכולנו מי באמת שולט.
            <br />
            <br />
            ב-2025, אנחנו שוברים כל גבול, שוברים כל שיא, ושוברים… אולי גם קצת את עצמנו.
            <Highlight className="text-black dark:text-white">
              זאת לא תהיה סתם מסיבה, זו תהיה חוויה שכולנו נזכור לעד.
            </Highlight>
          </p>
        </motion.div>
      </HeroHighlight>

      {/* כפתור לפרטים נוספים */}
      <div className="flex justify-center mt-8">
        <a
          href="mailto:contact@maorledet.com"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-md hover:scale-105 transition-transform"
        >
          לפרטים נוספים
        </a>
      </div>
    </div>
  );
}

export default Maorledet2025;