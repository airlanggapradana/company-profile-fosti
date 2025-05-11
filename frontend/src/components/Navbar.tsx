"use client";
import React from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import logoDark from "../../public/LOGO FOSTI PUTIH.png";
import { useTheme } from "next-themes";
import { FaCubes } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrCube } from "react-icons/gr";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background py-3 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src={
                theme === "dark"
                  ? logoDark
                  : "https://blog.fostiums.org/wp-content/uploads/2021/04/logo.png"
              }
              alt="Logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <NavigationMenu className="hidden items-center gap-10 md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                legacyBehavior
                passHref
                className="flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10"
                href="#divisi"
              >
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1`}
                >
                  <FaCubes />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    Our Divisions
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#about"
                legacyBehavior
                passHref
                className="flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10"
              >
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1`}
                >
                  <AiOutlineQuestionCircle />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    About Us
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="#proker"
                legacyBehavior
                passHref
                className="flex items-center gap-1 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10"
              >
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} flex items-center gap-1`}
                >
                  <GrCube />
                  <span className="text-sm font-semibold hover:text-primary/80">
                    Our Programs
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
