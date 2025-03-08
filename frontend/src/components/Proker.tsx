"use client";
import {
  Building2,
  CheckCircle,
  ChevronRight,
  Layers,
  Users,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Proker = () => {
  const [activeTab, setActiveTab] = React.useState("about");
  return (
    <section id="solutions" className="gradient-bg-secondary py-20">
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

          <TabsContent value="internal" className="mt-0">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Startup Solutions</h3>
                <p className="mb-6 text-muted-foreground">
                  Designed specifically for early-stage companies looking to
                  scale quickly and efficiently.
                </p>
                <ul className="space-y-3">
                  {[
                    "Affordable pricing plans",
                    "Scalable infrastructure",
                    "Growth marketing tools",
                    "Investor reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 gap-2">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="gradient-card rounded-lg border border-border/40 p-6">
                <div className="gradient-accent flex aspect-video items-center justify-center rounded-md">
                  <Layers className="h-24 w-24 text-muted-foreground/40" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="eksternal" className="mt-0">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  Enterprise Solutions
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Robust and secure solutions for large organizations with
                  complex requirements.
                </p>
                <ul className="space-y-3">
                  {[
                    "Advanced security features",
                    "Dedicated account manager",
                    "Custom integrations",
                    "SLA guarantees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 gap-2">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="gradient-card rounded-lg border border-border/40 p-6">
                <div className="gradient-accent flex aspect-video items-center justify-center rounded-md">
                  <Building2 className="h-24 w-24 text-muted-foreground/40" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Proker;
