"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import HubpubPrograms from "./HubpubPrograms";
import HubpubTeam from "./HubpubTeam";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Hubpub = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("about");
  return (
    <div className="flex flex-col items-start gap-7">
      <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
        <ArrowLeft />
      </Button>
      <div className="space-y-4">
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-red-500 md:text-5xl">
          Public <br />
          and Relations
        </h1>
        <p className="max-w-2xl text-base font-medium text-muted-foreground">
          Builds relationships and collaborations with various parties to expand
          FOSTI UMS's network.
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
          <TabsContent className="flex flex-col gap-5" value="about">
            <h3 className="max-w-2xl text-xl font-bold tracking-tight text-red-500 md:text-3xl">
              About
            </h3>
            <p className="max-w-4xl text-base font-semibold text-muted-foreground">
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
