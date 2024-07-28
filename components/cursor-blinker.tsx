"use client";

import { motion } from "framer-motion";

export default function CursorBlinker() {
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
            className="inline-block translate-x-1 translate-y-1 h-8 w-4 bg-blue-600"
        />
    );
}
