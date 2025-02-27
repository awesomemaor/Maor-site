"use client";
import React, { useEffect, useRef } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { AnimatedListDemo } from "./ui/animated-list-demo";
import { TextAnimate } from "./ui/blur-text";

const infiniteItems = [
  { name: "אופיר בן עמי", quote: "כשהגעתי למעורלדת, הרגשתי כאילו אני נכנס לתוך עולם חדש. כל פרט, כל שיר, כל אדם - הם חלק מהמקום המיוחד הזה. זה לא רק אירוע, זה הרגשה של משפחה, של חוויות משותפות, של לאהוב את החיים בכל מובן." },
  { name: "לינוי מוסקלינקו", quote: "הערב שהייתי בו במעורלדת לא היה דומה לשום דבר שראיתי לפני. האנרגיה באוויר הייתה חשמלית, אנשים מכל קצוות הארץ התמזגו לכדי רגעים שלא אשכח. המעורלדת היא סיפור שאין לו סוף, הוא כל הזמן מחדש את עצמו." },
  { name: "אופק גרסטן", quote: "מדי שנה, אני מרגיש איך המעורלדת הופכת להיות יותר ויותר בלתי נשכחת. כל פעם מחדש יש משהו חדש, אבל תמיד יש את אותה הרגשה של אחדות, שמחה וקסם. זו החוויה הכי מדהימה שאני יכול לחוות." },
];

function Home() {
  return (
    <div id="home" className="relative flex flex-col items-center justify-center min-h-screen text-white p-6 overflow-hidden">
      {/* כותרת */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center mt-20"
      >
        <div className="h-[16rem] flex items-center justify-center">
          <TextHoverEffect text="מעורלדת" />
        </div>
      </motion.div>

      {/* טקסט אנימציה */}
      <TextAnimate 
        animation="blurInUp" 
        by="character" 
        once 
        duration={1.5} 
        className="z-10 text-3xl font-extrabold text-white drop-shadow-lg"
      >
        ״For Memories We Will Forget The Next Day״
      </TextAnimate>

      {/* קונטיינר של הסרטון עם שימור גודל ושיפור ביצועים */}
      <div className="absolute right-10 top-35">
        <ContainerScroll>
          {/* וידאו נשאר בגודל המקורי עם ביצועים משופרים */}
          <div className="relative w-full h-full overflow-hidden bg-black">
            <video
              src="/background.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" object-cover w-auto h-auto object-left-top "
            />
          </div>
        </ContainerScroll>
      </div>

      {/* אפקט מעבר למטה */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* כרטיסים נעים (שיפרנו ביצועים עם React.memo) */}
      <div className="mt-72 w-full flex justify-center">
        <InfiniteMovingCards
          items={infiniteItems}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>

      {/* רשימה מונפשת */}
      <div className="absolute left-[-10vw] top-24 w-full max-w-4xl">
        <AnimatedListDemo />
      </div>
    </div>
  );
}

export default Home;