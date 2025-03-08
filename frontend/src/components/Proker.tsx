"use client";
import {
  Building2,
  CheckCircle,
  ChevronRight,
  CogIcon,
  CombineIcon,
  Computer,
  Layers,
  Users,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import { Card } from "./ui/card";
import { ShineBorder } from "./magicui/shine-border";
import { useRouter } from "next/navigation";

const lomba = [
  {
    icon: <Computer className="h-5 w-5 text-primary/50" />,
    title: "Competitive Programming",
  },
  {
    icon: <CogIcon className="h-5 w-5 text-primary/50" />,
    title: "Software Development",
  },
  {
    icon: <CombineIcon className="h-5 w-5 text-primary/50" />,
    title: "UI/UX Design",
  },
];

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

          <Internal />

          <Eksternal />
        </Tabs>
      </div>
    </section>
  );
};

function Internal() {
  return (
    <TabsContent value="internal" className="mt-0">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent">
            Musyawarah Kerja (MUSKER)
          </h3>
          <p className="mb-6 text-muted-foreground">
            Designed specifically for early-stage companies looking to scale
            quickly and efficiently.
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
        <div className="gradient-card rounded-lg border border-border/40 p-3">
          <div className="gradient-accent flex aspect-video items-center justify-center rounded-md">
            <Layers className="h-24 w-24 text-muted-foreground/40" />
          </div>
        </div>
      </div>
    </TabsContent>
  );
}

function Eksternal() {
  const router = useRouter();
  return (
    <TabsContent value="eksternal" className="mt-0">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent">
            FOSTIFEST
          </h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            FOSTIFEST adalah kegiatan tahunan yang diselenggarakan oleh Forum
            Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST{" "}
            {new Date().getFullYear()} mengusung tema "Designing the Future:
            Creative Tech for The Digital Age". Acara ini mencakup workshop
            tentang pembuatan aplikasi chat dengan Vue.js, serta Lomba pada
            kategori Competitive Programming, Software Development dan UI/UX
            Design. FOSTIFEST bertujuan meningkatkan keterampilan teknis,
            mendorong kreativitas, dan memperluas peluang karir di teknologi
            digital.
          </p>
          <ul className="space-y-3">
            {lomba.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <Button
            className="mt-6 gap-2"
            onClick={() => router.push("https://fostifest.fostiums.org/")}
          >
            Learn More <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Card className="relative overflow-hidden p-1 shadow-md">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={3}
          />
          <Image
            src={
              "https://fostifest.fostiums.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.2367bf88.webp&w=1920&q=75"
            }
            alt="FOSTIFEST"
            width={1920}
            height={1080}
            className="rounded-md"
          />
        </Card>
      </div>
    </TabsContent>
  );
}

export default Proker;
