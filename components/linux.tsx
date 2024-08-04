"use client";

import { motion } from "framer-motion";

const drawIcon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

export default function Linux() {
  return(
    <div>
    <svg
      height={100}
      width={100}
      viewBox="0 0 64 64"
    >
        <motion.circle
          cx="32"
          cy="32"
          r="10"
          stroke="#ff0055"
          variants={drawIcon}
          initial="hidden"
          animate="visible"
        />
    </svg>
    </div>
  );
}
