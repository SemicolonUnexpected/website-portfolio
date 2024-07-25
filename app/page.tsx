"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import CursorBlinker from "@/components/cursor-blinker";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
        <Hero justify="center"/>
    </div>
  );
}