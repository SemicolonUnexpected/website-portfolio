"use client"

import { CSharp, Typescript, Python } from "@/components/icons";
import { motion } from "framer-motion";

export default function ProgrammingLanguages() {
  return(
    <div>
      <ProgrammingLanguagesDesktop/>
    </div>
  );
}

const ProgrammingLanguagesMobile = () => {
  return(
    <div>
    </div>
  );
}

const ProgrammingLanguagesDesktop = () => {
  return(
    <div className="flex gap-8">
      <motion.div whileHover={{ scale : 1.1 }}>
        <CSharp size={90}/>
      </motion.div>
      <motion.div whileHover={{ scale : 1.1 }}>
        <Typescript size={90}/>
      </motion.div>
      <motion.div whileHover={{ scale : 1.1 }}>
        <Python size={90}/>
      </motion.div>
    </div>
  );
}
