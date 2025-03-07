import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";
import image from "../../public/image1_blrfxf.webp";

const Hero = () => {
  return (
    <section
      className="mx-auto min-h-screen max-w-screen-2xl py-20 md:py-28"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text py-2 text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl">
            Halo! Selamat Datang di FOSTI UMS
          </h1>
          <p className="mb-8 max-w-4xl text-center text-lg text-muted-foreground">
            Bergabunglah dengan kami untuk menjadi bagian dari komunitas
            teknologi yang berperan aktif dalam memajukan dunia IT dan
            pengembangan diri!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={"https://oprec-fosti.vercel.app/"}
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white dark:bg-gradient-to-tr dark:from-indigo-500 dark:to-cyan-300"
              target="_blank"
            >
              Daftar OPREC 2025{" "}
              <ArrowRight className="h-4 w-4" color="#ffffff" />
            </Link>
          </div>
        </div>
        <Card className="relative overflow-hidden p-2 shadow-md">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={3}
          />
          <Image src={image} alt="Image" className="w-full rounded-sm" />
        </Card>
      </div>
    </section>
  );
};

export default Hero;
