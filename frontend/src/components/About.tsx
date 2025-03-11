import React from "react";
import { Marquee } from "./magicui/marquee";
import Image, { StaticImageData } from "next/image";
import { Card } from "./ui/card";
import img from "@/utils/constant";

const About = () => {
  const about = img.carouselAbout;
  return (
    <>
      <section id="about" className="mx-auto max-w-screen-2xl py-28">
        <div className="text-center">
          <h1 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
            Tentang Kami
          </h1>
          <p className="mx-auto max-w-6xl leading-relaxed text-muted-foreground">
            Tidak banyak organisasi yang mampu menyediakan wadah bagi
            pengembangan teknologi yang komprehensif. FOSTI (Forum Open Source
            Teknik Informatika) UMS hadir sebagai Unit Kegiatan Mahasiswa yang
            berada di bawah naungan Fakultas Komunikasi dan Informatika UMS,
            menjadi tempat bagi mahasiswa untuk mendalami, memperluas, dan
            menyebarluaskan Open Source, serta berkontribusi dalam pengembangan
            diri di bidang teknologi.
          </p>
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
    </>
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
