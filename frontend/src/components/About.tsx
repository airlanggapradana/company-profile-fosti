import React from "react";
import { Marquee } from "./magicui/marquee";
import Image, { StaticImageData } from "next/image";
import { Card } from "./ui/card";
import img from "@/utils/constant";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import thumbnail from "../../public/image1_blrfxf.webp";

const About = () => {
  const about = img.carouselAbout;
  return (
    <div>
      <section id="about" className="mx-auto max-w-screen-2xl px-5 py-28">
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Tentang Kami
          </h1>
          <p className="mx-auto max-w-6xl text-sm leading-relaxed text-muted-foreground md:text-lg">
            Tidak banyak organisasi yang mampu menyediakan wadah bagi
            pengembangan teknologi yang komprehensif. FOSTI (Forum Open Source
            Teknik Informatika) UMS hadir sebagai Unit Kegiatan Mahasiswa yang
            berada di bawah naungan Fakultas Komunikasi dan Informatika UMS,
            menjadi tempat bagi mahasiswa untuk mendalami, memperluas, dan
            menyebarluaskan Open Source, serta berkontribusi dalam pengembangan
            diri di bidang teknologi.
          </p>
        </div>
        <div className="relative mx-auto w-full">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/Mh4lx5Yl3bs?si=R9kkAxdM1imp-1Ld"
            thumbnailSrc={thumbnail.src}
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/Mh4lx5Yl3bs?si=R9kkAxdM1imp-1Ld"
            thumbnailSrc={thumbnail.src}
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover>
          {about.map((item, i) => (
            <MarqueeItem
              key={i}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse>
          {about.map((item, i) => (
            <MarqueeItem
              key={i}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

function MarqueeItem({
  src,
  alt,
  width,
  height,
}: {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Card className="h-[250px] w-[25rem] p-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full rounded-lg object-cover"
      />
    </Card>
  );
}

export default About;
