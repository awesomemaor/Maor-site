"use client";

import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FlipWords } from "./ui/flip-words"; // importing FlipWords component

const words=["incredible", "amazing", "mind-blowing", "unbelievable"];

function Home() {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh+100px)] bg-black text-white p-6 overflow-hidden"
    >
      {/* רקע סרטון */}
      <div className="absolute inset-0 z-0">
        <video
          src="/background.mp4" // סרטון לרקע
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* אפקט רקע מהפנט */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-purple-500 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-72 h-72 bg-fuchsia-600 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-pink-500 opacity-20 blur-[12rem]"></div>
      </div>

      {/* טקסט ראשי - מעורלדת */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="h-[16rem] flex items-center justify-center">
          <TextHoverEffect text=" מעורלדת " />
        </div>
      </motion.div>

      {/* הוספת המילים המתחלפות */}
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
      Welcome To The Most</span>
      <FlipWords words={words}
        className="font-bold text-5xl font-bold text-violet-500 outline-black drop-shadow-xl" // צבעים אלו ישתמשו במילים המתחלפות
        /> <br /> 
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
Event In Your Life</span>
    </div>

      {/* אפקטי תאורה נוספים */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* הוספת InfiniteMovingCards */}
      <div className="mt-16 w-full flex justify-center">
        <InfiniteMovingCards
          items={[
            { name: "משתמש 1", quote: "זה היה מדהים!", title: "שחקן" },
            { name: "משתמש 2", quote: "החוויה הכי טובה!", title: "מוזיקאי" },
            { name: "משתמש 3", quote: "אני לא מאמין כמה נהנתי!", title: "מעצב" },
          ]}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}

export default Home;