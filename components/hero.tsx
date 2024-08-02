"use client";

import { motion, useMotionValue, useTransform, useAnimate, animate} from "framer-motion";
import { useEffect } from "react";

import clsx from "clsx";
import { fontMono } from "@/config/fonts";

export default function Hero() {
  const text = "whoami";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    "$ " + text.slice(0, latest)
  );

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [count, text.length, { duration: 1, delay: 1.5, ease: "easeInOut" }],
      [".cursor", { opacity: [1, 0] }, { duration: 0, at: "+0.8" }],
      [".username", { opacity: [0, 1], y: [10, 0] }, { duration: 1 }]
    ]);

  }, []);

  return (
    <div>
      <div ref={scope}>
        <motion.span className={clsx(
          "text-2xl sm:text-6xl text-blue-600 font-mono",
          fontMono.variable
        )}>
          {displayText}
        </motion.span>

        <span className="cursor">
          <CursorBlinker/>
        </span>

        <motion.div className={clsx(
          "username text-2xl sm:text-5xl font-mono",
          fontMono.variable
        )}>
          SemicolonUnexpected
        </motion.div>
      </div>

    </div>
  );
}

function CursorBlinker() {
  return (
    <motion.div
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }}
      className="inline-block translate-x-1 translate-y-1 h-[1.6rem] w-3 sm:h-8 sm:w-4 bg-blue-600"
    />
  );
}
