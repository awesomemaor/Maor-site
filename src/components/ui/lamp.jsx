"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function LampDemo() {
  return (
    LampContainer(
      null,
      React.createElement(motion.h1, {
        initial: { opacity: 0.5, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        transition: {
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        },
        className: "mt-8 bg-gradient-to-br from-purple-400 to-fuchsia-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl",
      }, 
      "Build lamps <br /> the right way")
    )
  );
}

export const LampContainer = (props) => {
  return (
    React.createElement("div", {
      className: cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-indigo-950 w-full rounded-md z-0",
        props.className
      ),
    },
      React.createElement("div", {
        className: "relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0",
      },
        React.createElement(motion.div, {
          initial: { opacity: 0.5, width: "15rem" },
          whileInView: { opacity: 1, width: "30rem" },
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          },
          style: {
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          },
          className: "absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white",
        },
          React.createElement("div", {
            className: "absolute w-[100%] left-0 bg-indigo-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
          }),
          React.createElement("div", {
            className: "absolute w-40 h-[100%] left-0 bg-indigo-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
          })
        ),
        React.createElement(motion.div, {
          initial: { opacity: 0.5, width: "15rem" },
          whileInView: { opacity: 1, width: "30rem" },
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          },
          style: {
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          },
          className: "absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-violet-500 text-white",
        },
          React.createElement("div", {
            className: "absolute w-40 h-[100%] right-0 bg-indigo-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
          }),
          React.createElement("div", {
            className: "absolute w-[100%] right-0 bg-indigo-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
          })
        ),
        React.createElement("div", {
          className: "absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-indigo-950 blur-2xl"
        }),
        React.createElement("div", {
          className: "absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"
        }),
        React.createElement("div", {
          className: "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-fuchsia-500 opacity-50 blur-3xl"
        }),
        React.createElement(motion.div, {
          initial: { width: "8rem" },
          whileInView: { width: "16rem" },
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          },
          className: "absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-violet-400 blur-2xl"
        }),
        React.createElement(motion.div, {
          initial: { width: "15rem" },
          whileInView: { width: "30rem" },
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          },
          className: "absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-indigo-400"
        }),
        React.createElement("div", {
          className: "absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-indigo-950"
        })
      ),
      React.createElement("div", {
        className: "relative z-50 flex -translate-y-80 flex-col items-center px-5"
      },
        props.children
      )
    )
  );
};