"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useRouter } from "next/navigation";
import KeorProgram from "./KeorProgram";
import KeorTeam from "./KeorTeam";

const Keor = () => {
  const [activeTab, setActiveTab] = React.useState("about");
  const router = useRouter();
  return (
    <div className="flex flex-col items-start gap-7">
      <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
        <ArrowLeft />
      </Button>
      <div className="space-y-4">
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-red-500 md:text-5xl">
          Organizational
        </h1>
        <p className="max-w-2xl text-base font-medium text-muted-foreground">
          Fosters relationships among members and prepares new prospective
          members of FOSTI UMS.
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
