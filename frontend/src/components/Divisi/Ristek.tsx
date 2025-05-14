"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import RistekPrograms from "./RistekPrograms";
import RistekTeam from "./RistekTeam";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import RistekAbout from "./RistekAbout";

const Ristek = () => {
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

      <div className="space-y-3 sm:space-y-4">
        <h1 className="max-w-2xl text-center text-2xl font-bold tracking-tight text-red-500 sm:text-3xl md:text-start lg:text-5xl">
          Research <span className="inline sm:hidden">& Technology</span>
          <span className="hidden sm:inline">
            <br />
            and Technology
          </span>
        </h1>
        <p className="max-w-2xl text-center text-sm font-medium text-muted-foreground sm:text-base md:text-start">
          Conducts research and development of open-source technology for FOSTI
          and the community.
        </p>
      </div>

      <div className="w-full">
        <Tabs
          defaultValue="about"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="mb-4 flex justify-start sm:mb-8">
            <TabsList className="gradient-accent grid w-full grid-cols-3 gap-1 sm:w-auto sm:min-w-[400px]">
              <TabsTrigger value="about" className="text-sm">
                About
              </TabsTrigger>
              <TabsTrigger value="programs" className="text-sm">
                Programs
              </TabsTrigger>
              <TabsTrigger value="team" className="whitespace-nowrap text-sm">
                Meet The Team
              </TabsTrigger>
            </TabsList>
          </div>

          {/* About */}
          <RistekAbout />

          {/* Programs */}
          <RistekPrograms />

          {/* Team */}
          <RistekTeam />
        </Tabs>
      </div>
    </div>
  );
};

export default Ristek;
