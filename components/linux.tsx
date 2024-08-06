"use client";

import { motion } from "framer-motion";
import { Arch } from "@/components/icons";

export default function Linux() {
  return(
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Arch size={200} className="m-auto"/>
    </motion.div>
  );
}
