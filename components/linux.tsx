"use client";

import { motion } from "framer-motion";

const drawIcon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(23, 147, 209, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(23, 147, 209, 0)"
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
        <motion.path d="M31.994-.006c-2.85 6.985-4.568 11.554-7.74 18.332 1.945 2.062 4.332 4.462 8.2 7.174-4.168-1.715-7-3.437-9.136-5.224-4.06 8.47-10.42 20.538-23.327 43.73C10.145 58.15 18 54.54 25.338 53.16c-.315-1.354-.494-2.818-.48-4.345l.012-.325c.16-6.5 3.542-11.498 7.547-11.158s7.118 5.886 6.957 12.386a18.36 18.36 0 0 1-.409 3.491c7.25 1.418 15.03 5.02 25.037 10.797l-5.42-10.026c-2.65-2.053-5.413-4.726-11.05-7.62 3.875 1.007 6.65 2.168 8.8 3.467-17.1-31.84-18.486-36.07-24.35-49.833z"
          variants={drawIcon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 5 }}/>
      </svg>
    </div>
  );
}
