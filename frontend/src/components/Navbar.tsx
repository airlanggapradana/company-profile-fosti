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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/5 py-3 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
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
        </div>
        <nav className="hidden items-center gap-10 tracking-wide md:flex">
          <Link
            href="#divisi"
            className="text-sm font-medium hover:text-primary/80"
          >
            Divisi
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary/80"
          >
            About
          </Link>
          <a
            href="#proker"
            className="text-sm font-medium hover:text-primary/80"
          >
            Proker
          </a>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary/80"
          >
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
