"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useRouter } from "next/navigation";
import KeorProgram from "./KeorProgram";
import KeorTeam from "./KeorTeam";
import Image from "next/image";
import fotbar from "../../../public/DSC03608.webp";

const Keor = () => {
  const [activeTab, setActiveTab] = React.useState("about");
  const router = useRouter();
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
            Organizational
          </h1>
          <p className="max-w-2xl text-center text-sm font-medium text-muted-foreground sm:text-base md:text-start">
            Fosters relationships among members and prepares new prospective
            members of FOSTI UMS.
          </p>
        </div>

        <div className="mb-4 flex-shrink-0 sm:mb-0">
          <Image
            src={fotbar}
            alt="Keor Fotbar"
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
              The Organizational division is responsible for fostering strong
              relationships among members, ensuring effective communication, and
              preparing new prospective members to contribute actively to FOSTI
              UMS.
            </p>
          </TabsContent>

          {/* Programs */}
          <KeorProgram />

          {/* Team */}
          <KeorTeam />
        </Tabs>
      </div>
    </div>
  );
};

export default Keor;
