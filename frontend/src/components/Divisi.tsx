import {
  BarChart3,
  Code2,
  Globe,
  Lightbulb,
  LineChart,
  Users,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { TextAnimate } from "./magicui/text-animate";

const divisi = [
  {
    icon: <BarChart3 className="mb-4 h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with our powerful analytics tools. Track performance and make data-driven decisions.",
  },
  {
    icon: <Globe className="mb-4 h-10 w-10 text-primary" />,
    title: "Global Reach",
    description:
      "Expand your business globally with our international payment processing and multi-language support.",
  },
  {
    icon: <Users className="mb-4 h-10 w-10 text-primary" />,
    title: "Team Collaboration",
    description:
      "Foster teamwork with real-time collaboration tools. Share projects and communicate effectively.",
  },
  {
    icon: <Lightbulb className="mb-4 h-10 w-10 text-primary" />,
    title: "Innovative Solutions",
    description:
      "Stay ahead of the curve with our cutting-edge technology and innovative business solutions.",
  },
  {
    icon: <LineChart className="mb-4 h-10 w-10 text-primary" />,
    title: "Growth Strategies",
    description:
      "Implement proven growth strategies with our comprehensive suite of business development tools.",
  },
  {
    icon: <Code2 className="mb-4 h-10 w-10 text-primary" />,
    title: "Developer API",
    description:
      "Integrate our platform with your existing systems using our robust and well-documented API.",
  },
];

const Divisi = () => {
  return (
    <section id="features" className="mx-auto max-w-screen-2xl py-20">
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
          <Card
            key={index}
            className="gradient-card border border-border/40 transition-colors hover:border-primary/50"
          >
            <CardContent className="pt-6">
              {feature.icon}
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Divisi;
