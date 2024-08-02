"use client"

// The Nextui stuff needed
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

// Site data
import { siteConfig } from "@/config/site";

// The icons
import {
    GithubIcon,
    Logo,
} from "@/components/icons";

import { useState } from "react";


export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
    <NextUINavbar maxWidth="md" position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}>
      <NavbarContent className="basis-1/5" justify="start">
        <Logo/>
        <p className="font-bold text-inherit"></p>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-3/5 items-center" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
      </NavbarContent>

      <NavbarContent className="basis-1/5 gap-4" justify="end">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <NavbarMenuToggle className="flex sm:hidden"/>
      </NavbarContent>

      <NavbarMenu >
        <div className="mx-4 mt-2 flex flex-col gap-2 items-center">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                size="lg"
                color="foreground"
                className="w-full"
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
    );
}
