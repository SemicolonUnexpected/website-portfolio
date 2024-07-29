"use client";

import { motion } from "framer-motion"; 
import TypingAnimation from "@/components/terminal-typing-animation";

export default function Hero() {
    return(
        <div className="max-w-screen-md flex self-center mx-auto">
            <div className="basis-1/2">
                <TypingAnimation/>
            </div>
        </div>
    );
}
