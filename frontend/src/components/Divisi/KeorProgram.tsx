import React from "react";
import { TabsContent } from "../ui/tabs";
import { keorPrograms } from "@/data/KeorPrograms";
import Image from "next/image";

const KeorProgram = () => {
  return (
    <TabsContent className="flex flex-col gap-5" value="programs">
      <h3 className="max-w-2xl text-xl font-bold tracking-tight text-red-500 md:text-3xl">
        Programs
      </h3>
      <p className="max-w-4xl text-base font-semibold text-muted-foreground">
        Discover the diverse programs and initiatives organized by the
        Organizational division. These programs are designed to enhance
        teamwork, leadership, and the overall growth of the community.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {keorPrograms.map((program, index) => (
          <div className="flex flex-col items-start gap-2" key={index}>
            <Image
              src={program.src}
              alt={program.alt}
              width={program.width}
              height={program.height}
              className="w-full rounded-lg object-cover"
            />
            <h4 className="text-lg font-bold text-red-500">{program.title}</h4>
            <p className="text-sm text-muted-foreground">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default KeorProgram;
