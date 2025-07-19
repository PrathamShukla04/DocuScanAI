"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = ["#0f172a", "#000000", "#1c1917"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan → emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink → indigo
    "linear-gradient(to bottom right, #f97316, #facc15)", // orange → yellow
  ];

  return (
    <motion.div
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky visual gradient box */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          background: linearGradients[0],
        }}
        animate={{
          opacity: 1,
          scale: 1,
          background:
            linearGradients[activeCard % linearGradients.length],
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden shadow-2xl"
      />
    </motion.div>
  );
};