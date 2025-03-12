"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import logoputih from "../../public/LOGO FOSTI PUTIH.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="border-t bg-background py-12">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#" className="flex items-center space-x-2">
              <Image
                src={
                  theme === "dark"
                    ? logoputih
                    : "https://blog.fostiums.org/wp-content/uploads/2021/04/logo.png"
                }
                alt="Logo"
                width={200}
                height={200}
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Created by RISTEK Web Development Team.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FOSTI UMS, Org. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
