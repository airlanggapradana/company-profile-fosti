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
    <div className="flex flex-col items-start gap-7">
      <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
        <ArrowLeft />
      </Button>
      <div className="space-y-4">
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-red-500 md:text-5xl">
          Research <br />
          and Technology
        </h1>
        <p className="max-w-2xl text-base font-medium text-muted-foreground">
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
          <div className="mb-8 flex justify-start">
            <TabsList className="gradient-accent grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="team">Meet The Team</TabsTrigger>
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
