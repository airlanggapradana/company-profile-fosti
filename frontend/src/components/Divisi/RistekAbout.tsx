import React from "react";
import { TabsContent } from "../ui/tabs";
import { motion } from "framer-motion";
import elemen1 from "../../../public/167147170_10655670.png";
import elemen2 from "../../../public/29119038_Blowing_rocket_3d_cartoon_style_icon-removebg-preview.png";
import Image from "next/image";
import AchievementCard from "../AchievementCard";
import RistekAchievements from "../RistekAchievements";

const achievements = [
  { count: "10+", label: "All Achievement" },
  { count: "10", label: "Competition Achievement" },
  { count: "1", label: "Research Achievement" },
];

const RistekAbout = () => {
  return (
    <TabsContent
      className="mt-9 flex flex-col gap-4 sm:gap-5 md:mt-3"
      value="about"
    >
      <h3 className="max-w-2xl text-center text-xl font-bold tracking-tight text-red-500 sm:text-start md:text-3xl">
        About
      </h3>
      <p className="max-w-4xl text-center text-sm font-semibold text-muted-foreground sm:text-start sm:text-base">
        The Research and Technology division focuses on exploring and developing
        innovative open-source technologies. It aims to empower FOSTI and the
        community through cutting-edge research and practical solutions.
      </p>

      <section className="w-full py-8 sm:py-10 md:py-14">
        <motion.div
          className="mb-6 text-center sm:mb-8 md:mb-16 md:text-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-3 max-w-3xl text-xl font-bold leading-tight text-gray-800 dark:text-white sm:mb-4 sm:text-2xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Here are some achievements that{" "}
            <span className="text-red-500">validate our prowess</span> in the
            field of technology.
          </motion.h2>
          <motion.p
            className="max-w-3xl text-sm font-semibold text-muted-foreground sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Over the years, our members have conquered many IT competitions
            across the nation. They've become our pride who will continue to
            astonish us!
          </motion.p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl bg-red-700 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute -right-12 -top-16 h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem] md:-right-16 md:-top-20 md:h-56 md:w-56">
            <Image
              src={elemen1}
              alt="Ristek"
              className="object-contain"
              fill
              priority
            />
          </div>
          <div className="absolute -bottom-10 -left-16 z-10 h-[10rem] w-[10rem] rotate-12 sm:h-[12rem] sm:w-[12rem] md:h-[15rem] md:w-[15rem]">
            <Image
              src={elemen2}
              alt="Ristek Roket"
              className="object-contain"
              fill
              priority
            />
          </div>
          <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16">
            <motion.div
              className="mb-6 text-center sm:mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
                Spotlight our Remarkable
              </h3>
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                <span className="text-white">Total </span>
                <span className="text-orange-300">Achievement</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  count={achievement.count}
                  label={achievement.label}
                  delay={1 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <RistekAchievements />
    </TabsContent>
  );
};

export default RistekAbout;
