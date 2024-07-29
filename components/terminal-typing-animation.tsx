"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "@/components/cursor-blinker";

import clsx from "clsx";
import { fontMono } from "@/config/fonts";

export default function TypingAnimation() {
    const text = "whoami";
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        "$ " + text.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, text.length, {
            delay: 1.5,
            duration: 1,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    return (
    <div>
      <div>
        <motion.span className={clsx(
          "text-4xl text-blue-600 font-sans",
          fontMono.variable
        )}>
          {displayText}
        </motion.span>
        <CursorBlinker/>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, repeat: Infinity }}>
        Hi there
      </motion.div>
    </div>
    );
}
