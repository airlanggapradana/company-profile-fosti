import React from "react";
import { Marquee } from "./magicui/marquee";
import Image, { StaticImageData } from "next/image";
import { Card } from "./ui/card";
import img from "@/utils/constant";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import thumbnail from "../../public/image1_blrfxf.webp";
import elemen1 from "../../public/11.png";
import elemen2 from "../../public/6.png";

const About = () => {
  const about = img.carouselAbout;
  return (
    <div className="relative overflow-hidden">
      {/* <div className="h-full w-full overflow-hidden">
        <Image
          unoptimized
          src={elemen1}
          alt="elemen1"
          className="absolute -right-20 top-5 -z-10 hidden h-[30rem] w-[45rem] rotate-12 opacity-90 lg:block"
        />
      </div>
      <div className="h-full w-full overflow-hidden">
        <Image
          unoptimized
          src={elemen2}
          alt="elemen2"
          className="absolute -left-52 bottom-96 z-10 hidden h-[30rem] w-[50rem] opacity-90 lg:block"
        />
      </div> */}
      <section id="about" className="mx-auto max-w-screen-2xl px-5 py-28">
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            About Us
          </h1>
          <p className="mx-auto max-w-4xl text-sm font-medium leading-relaxed text-muted-foreground md:text-lg">
            FOSTI is an independent non-profit organization operated by the
            students of the Faculty of Communication and Informatics Universitas
            Muhammadiyah Surakarta that aims to cultivate students' interests in
            the fields of science and technology.
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
        <Marquee pauseOnHover className="z-30">
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
    <Card className="h-[200px] w-[90%] p-2 sm:h-[250px] sm:w-[25rem]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full rounded-lg object-cover"
      />
    </Card>
  );
}

export default About;
