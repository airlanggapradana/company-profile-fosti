"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import HubpubPrograms from "./HubpubPrograms";
import HubpubTeam from "./HubpubTeam";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import fotbar from "../../../public/DSC03648.webp";

const Hubpub = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("about");
  return (
    <div className="flex w-full flex-col items-start gap-4 px-4 py-4 sm:gap-7 sm:px-6 sm:py-6 lg:px-8">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => router.push("/")}
        className="hover:bg-red-100"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <div className="flex w-full flex-col-reverse items-center gap-6 sm:flex-row sm:gap-8">
        <div className="flex-1 space-y-3 sm:space-y-4">
          <h1 className="max-w-2xl text-center text-2xl font-bold tracking-tight text-red-500 sm:text-3xl md:text-start lg:text-5xl">
            Public <br />
            and Relations
          </h1>
          <p className="max-w-2xl text-center text-sm font-medium text-muted-foreground sm:text-base md:text-start">
            Builds relationships and collaborations with various parties to
            expand FOSTI UMS's network.
          </p>
        </div>
        <div className="mb-4 flex-shrink-0 sm:mb-0">
          <Image
            src={fotbar}
            alt="Hubpub Fotbar"
            className="h-44 w-80 rounded-xl object-cover shadow-md sm:h-56 sm:w-80 md:h-[18rem] md:w-[28rem] lg:h-[25rem] lg:w-[45rem]"
          />
        </div>
      </div>

      <div className="w-full">
        <Tabs
          defaultValue="about"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="mb-4 flex justify-start sm:mb-8">
            <TabsList className="gradient-accent grid w-full grid-cols-3 gap-1 sm:w-auto sm:min-w-[400px]">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="team">Meet The Team</TabsTrigger>
            </TabsList>
          </div>

          {/* About */}
          <TabsContent
            className="mt-9 flex flex-col gap-4 sm:gap-5 md:mt-3"
            value="about"
          >
            <h3 className="max-w-2xl text-center text-xl font-bold tracking-tight text-red-500 sm:text-start md:text-3xl">
              About
            </h3>
            <p className="max-w-4xl text-center text-sm font-semibold text-muted-foreground sm:text-start sm:text-base">
              The Public and Relations division is responsible for building and
              maintaining relationships with external organizations, fostering
              collaborations, and expanding the network of FOSTI UMS to create
              impactful partnerships and opportunities.
            </p>
          </TabsContent>

          {/* Programs */}
          <HubpubPrograms />

          {/* Team */}
          <HubpubTeam />
        </Tabs>
      </div>
    </div>
  );
};

export default Hubpub;
