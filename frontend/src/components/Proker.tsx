"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Internal from "./Internal";
import Eksternal from "./Eksternal";

const Proker = () => {
  const [activeTab, setActiveTab] = React.useState("about");
  return (
    <section id="proker" className="gradient-bg-secondary px-5 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Program Kerja Kami</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Kami memiliki 10 program kerja yang bersifat internal dan eksternal.
          </p>
        </div>

        <Tabs
          defaultValue="internal"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="mb-8 flex justify-center">
            <TabsList className="gradient-accent grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="internal">Internal</TabsTrigger>
              <TabsTrigger value="eksternal">Eksternal</TabsTrigger>
            </TabsList>
          </div>

          <Internal />

          <Eksternal />
        </Tabs>
      </div>
    </section>
  );
};

export default Proker;
