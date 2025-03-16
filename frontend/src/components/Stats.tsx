import React from "react";
import { NumberTicker } from "./magicui/number-ticker";

const stats = [
  {
    title: "10",
    description: "Program Kerja",
  },
  {
    title: "100",
    description: "Anggota",
  },
  {
    title: "3",
    description: "Divisi Aktif",
  },
];

const Stats = () => {
  return (
    <section className="bg-neutral-100 py-16 dark:bg-neutral-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div className="text-center" key={index}>
              <div className="flex items-start justify-center">
                <NumberTicker
                  value={parseInt(stat.title)}
                  className="mb-2 text-4xl font-bold tracking-tighter"
                />
                <p className="text-2xl font-bold">+</p>
              </div>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
