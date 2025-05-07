"use client";
import React from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import logoDark from "../../public/LOGO FOSTI PUTIH.png";
import { useTheme } from "next-themes";

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
        <nav className="hidden items-center gap-12 md:flex">
          <Link
            href="#divisi"
            className="text-sm font-semibold hover:text-primary/80"
          >
            Our Divisions
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold hover:text-primary/80"
          >
            About Us
          </Link>
          <a
            href="#proker"
            className="text-sm font-semibold hover:text-primary/80"
          >
            Our Programs
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
