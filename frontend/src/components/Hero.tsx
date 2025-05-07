import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";
import image from "../../public/image1_blrfxf.webp";
import { TextAnimate } from "./magicui/text-animate";
import ImageCollage from "./ImageCollage";
import RotatingText from "../components/RotatingText/RotatingText";

const Hero = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl pb-28 pt-20 md:pt-32"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-12 px-5 md:flex-row md:px-0">
        <div className="flex flex-col items-start justify-center md:w-1/2">
          <h1 className="mb-5 max-w-xl text-start text-3xl font-bold tracking-tighter md:text-6xl">
            We Help You <span className="text-red-500">Boost</span> {""}
            <div className="mt-3 flex items-center gap-3">
              <span>Your</span>
              <RotatingText
                texts={["Creativity", "Growth", "Network", "Skills"]}
                mainClassName="px-2 sm:px-2 md:px-5 bg-red-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"random"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </h1>
          <TextAnimate
            animation="slideUp"
            by="word"
            delay={2000}
            once
            className="mb-8 max-w-2xl text-start text-sm font-semibold text-muted-foreground md:text-lg"
          >
            Since 2008, FOSTI has been nurturing student's passion for science
            and technology, proudly standing as one of the best IT student
            organizations in the town.
          </TextAnimate>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={"https://oprec-fosti.vercel.app/"}
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white dark:bg-gradient-to-tr dark:from-red-500 dark:to-orange-500"
              target="_blank"
            >
              Join Now! <ArrowRight className="h-4 w-4" color="#ffffff" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <ImageCollage />
        </div>
        {/* <div className="md:w-1/2">
          <Card className="relative overflow-hidden p-2 shadow-md">
            <ShineBorder
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              borderWidth={3}
            />
            <Image src={image} alt="Image" className="w-full rounded-sm" />
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
