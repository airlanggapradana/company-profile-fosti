import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ristekTeam } from "@/data/RistekTeam";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

const RistekTeam = () => {
  return (
    <TabsContent className="flex flex-col gap-5" value="team">
      <h3 className="max-w-2xl text-xl font-bold tracking-tight text-red-500 md:text-3xl">
        Meet The Team
      </h3>
      <p className="max-w-4xl text-base font-semibold text-muted-foreground">
        Get to know the brilliant minds behind the Research and Technology
        division.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ristekTeam.map((member, index) => (
          <AnimatedContent
            delay={index * 100}
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
              className="flex flex-col items-center gap-3 rounded-lg border p-4 shadow-md"
            >
              <CardContent className="flex flex-col items-center gap-2">
                <div className="relative h-24 w-24">
                  <Image
                    unoptimized
                    src={member.src}
                    layout="fill"
                    objectFit="cover"
                    alt={member.name}
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-center text-base font-bold text-red-500">
                  {member.name}
                </h4>
                <p className="text-center text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
                <Button variant={"ghost"} size={"icon"}>
                  <Linkedin className="mr-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </TabsContent>
  );
};

export default RistekTeam;
