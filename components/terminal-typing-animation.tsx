"use client";

import { motion, useMotionValue, useTransform, useAnimate, animate} from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "@/components/cursor-blinker";

import clsx from "clsx";
import { fontMono } from "@/config/fonts";

export default function TypingAnimation() {
  const text = "whoami";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    "$" + text.slice(0, latest)
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
          "text-4xl text-blue-600 font-mono",
          fontMono.variable
        )}>
          {displayText}
        </motion.span>

        <span className="cursor">
          <CursorBlinker/>
        </span>

        <motion.div className={clsx(
        "username text-4xl font-mono",
        fontMono.variable
        )}>
          SemicolonUnexpected
        </motion.div>
      </div>

    </div>
  );
}
