import React from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/5 py-3 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={
              "https://blog.fostiums.org/wp-content/uploads/2021/04/logo.png"
            }
            alt="Logo"
            width={70}
            height={70}
            className="dark:invert"
          />
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary/80"
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium hover:text-primary/80"
          >
            Solutions
          </a>
          <a href="#team" className="text-sm font-medium hover:text-primary/80">
            Team
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary/80"
          >
            Testimonials
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
