"use client"

import { CSharp, Typescript, Python } from "@/components/icons";
import { motion } from "framer-motion";
import { IconSvgProps } from "@/types";

export default function ProgrammingLanguages() {
  return(
    <div>
      <ProgrammingLanguagesDesktop/>
    </div>
  );
}

const ProgrammingLanguagesMobile = () => {
  const currentIcon: React.ComponentType<IconSvgProps> = CSharp;
  return(
    <div>
      <motion.div>

      </motion.div>
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
