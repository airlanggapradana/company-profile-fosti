import { ChartNoAxesCombinedIcon, MonitorCog, Users } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { TextAnimate } from "./magicui/text-animate";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import Link from "next/link";

const divisi = [
  {
    icon: <Users className="mb-4 h-10 w-10 text-primary" />,
    title: "Organizational",
    delay: 100,
    href: "/divisi/keor",
    description:
      "Fosters relationships among members and prepares new prospective members of FOSTI UMS.",
  },
  {
    icon: <MonitorCog className="mb-4 h-10 w-10 text-primary" />,
    title: "Research and Technology",
    delay: 250,
    href: "/divisi/ristek",
    description:
      "Conducts research and development of open-source technology for FOSTI and the community.",
  },
  {
    icon: <ChartNoAxesCombinedIcon className="mb-4 h-10 w-10 text-primary" />,
    title: "Public Relations",
    delay: 350,
    href: "/divisi/hubpub",
    description:
      "Builds relationships and collaborations with various parties to expand FOSTI UMS's network.",
  },
];

const Divisi = () => {
  return (
    <section id="divisi" className="mx-auto max-w-screen-2xl px-5 py-28">
      <div className="mb-16 text-center">
        <h1 className="mb-4 bg-gradient-to-br from-red-500 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Divisions
        </h1>
        <TextAnimate
          animation="slideUp"
          by="word"
          once
          className="mx-auto max-w-2xl text-base font-medium text-muted-foreground md:text-lg"
        >
          Our members are a part of diverse divisions that work together as one.
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
            <Link key={index} href={feature.href}>
              <Card className="gradient-card h-full border-2 border-border/40 transition-colors hover:border-red-500">
                <CardContent className="pt-6">
                  {feature.icon}
                  <h1 className="mb-2 text-xl font-semibold text-red-500">
                    {feature.title}
                  </h1>
                  <p className="font-medium text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Divisi;
