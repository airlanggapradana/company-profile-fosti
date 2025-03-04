import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/image1_blrfxf.webp";
import { Ripple } from "@/components/magicui/ripple";

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-screen-2xl py-20 md:py-32" id="home">
        <div className="z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
              Halo! Selamat Datang di FOSTI UMS
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
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
          <div className="gradient-card rounded-lg border border-border/40 p-1 shadow-md">
            <Image src={image} alt="Image" className="w-full rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
}
