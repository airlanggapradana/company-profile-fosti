import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { hubpubTeam } from "@/data/HubpubTeam";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { ShineBorder } from "../magicui/shine-border";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

const HubpubTeam = () => {
  return (
    <TabsContent className="flex flex-col gap-4 sm:gap-5 md:gap-6" value="team">
      <h3 className="max-w-2xl text-center text-lg font-bold tracking-tight text-red-500 sm:text-xl md:text-start md:text-3xl">
        Meet The Team
      </h3>
      <p className="max-w-4xl text-center text-sm font-semibold text-muted-foreground sm:text-base md:text-start">
        Get to know the creative individuals behind the Public and Relations
        division.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:mt-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {hubpubTeam.map((member, index) => (
          <AnimatedContent
            delay={index * 10}
            distance={250}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            key={index}
          >
            <Card
              key={index}
              className="relative flex h-full flex-col items-center gap-1.5 overflow-hidden rounded-lg border p-2 shadow-md transition-shadow hover:shadow-lg xs:gap-2 xs:p-3 sm:gap-3 sm:p-4"
            >
              <ShineBorder
                duration={(index += 15)}
                shineColor={[
                  "oklch(63.7% 0.237 25.331)",
                  "oklch(75% 0.183 55.934)",
                  "oklch(87.9% 0.169 91.605)",
                ]}
                borderWidth={1.5}
              />
              <CardContent className="flex flex-col items-center gap-1.5 p-0 xs:gap-2">
                <div className="relative h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24">
                  <Image
                    src={member.src}
                    layout="fill"
                    objectFit="cover"
                    alt={member.name}
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-center text-xs font-bold text-red-500 sm:text-base">
                  {member.name}
                </h4>
                <p className="text-center text-xs font-medium text-muted-foreground sm:text-sm">
                  {member.role === "Hubungan Publik"
                    ? "Member of Public Relations"
                    : member.role}
                </p>
                <Link
                  href={
                    member.linkedin && member.linkedin !== "-"
                      ? member.linkedin
                      : "#"
                  }
                  className={`mt-1 transition-colors ${
                    member.linkedin && member.linkedin !== "-"
                      ? "hover:text-blue-600"
                      : "cursor-not-allowed text-gray-400"
                  } xs:mt-2 sm:mt-3`}
                  target={
                    member.linkedin && member.linkedin !== "-"
                      ? "_blank"
                      : "_self"
                  }
                  aria-disabled={!member.linkedin || member.linkedin === "-"}
                >
                  <AiFillLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </TabsContent>
  );
};

export default HubpubTeam;
