import {
  BarChart3,
  ChartNoAxesCombinedIcon,
  Code2,
  Globe,
  Lightbulb,
  LineChart,
  MonitorCog,
  Users,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { TextAnimate } from "./magicui/text-animate";
import AnimatedContent from "./AnimatedContent/AnimatedContent";

const divisi = [
  {
    icon: <Users className="mb-4 h-10 w-10 text-primary" />,
    title: "Keorganisasian",
    delay: 100,
    description:
      "Divisi yang menjalin hubungan antar anggota dan mempersiapkan calon anggota baru FOSTI UMS.",
  },
  {
    icon: <MonitorCog className="mb-4 h-10 w-10 text-primary" />,
    title: "Riset dan Teknologi",
    delay: 250,
    description:
      "Divisi yang melakukan penelitian dan pengembangan teknologi open source untuk FOSTI dan masyarakat.",
  },
  {
    icon: <ChartNoAxesCombinedIcon className="mb-4 h-10 w-10 text-primary" />,
    title: "Hubungan Publik",
    delay: 350,
    description:
      "Divisi yang menjalin hubungan dan kerja sama dengan berbagai pihak untuk memperluas jaringan FOSTI UMS.",
  },
];

const Divisi = () => {
  return (
    <section id="features" className="mx-auto max-w-screen-2xl py-28">
      <div className="mb-16 text-center">
        <h1 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
          Divisi di FOSTI UMS
        </h1>
        <TextAnimate
          animation="slideUp"
          by="word"
          once
          className="mx-auto max-w-2xl text-muted-foreground"
        >
          Kami memiliki 3 divisi aktif yang masing-masing memiliki peran dan
          tanggung jawabnya sendiri.
        </TextAnimate>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {divisi.map((feature, index) => (
          <AnimatedContent
            delay={feature.delay}
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
            <Card className="gradient-card h-full border border-border/40 transition-colors hover:border-primary/50">
              <CardContent className="pt-6">
                {feature.icon}
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Divisi;
