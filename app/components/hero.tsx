"use client";

import { motion } from "framer-motion"; 
import TypingAnimation from "@/components/TypingAnimation";

export default function Hero() {
    return(
        <div>
            <TypingAnimation/>
            <motion.span>
                Semicolon Unexpected
            </motion.span>
        </div>
    );
}
