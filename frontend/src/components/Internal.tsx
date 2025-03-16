import React from "react";
import { TabsContent } from "./ui/tabs";
import { Carousel } from "antd";
import img from "@/utils/constant";
import Image from "next/image";

const Internal = () => {
  return (
    <TabsContent value="internal" className="mt-0 space-y-12">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-center text-2xl font-bold text-transparent md:text-start lg:text-3xl">
            Musyawarah Kerja (MUSKER)
          </h3>
          <p className="mb-6 text-center text-muted-foreground md:text-start">
            Kegiatan tahunan yang diadakan oleh FOSTI UMS untuk membahas program
            kerja dan evaluasi kepengurusan.
          </p>
        </div>
        <div className="gradient-card rounded-lg border border-border/40 p-2">
          <Carousel autoplay speed={500} dots={true}>
            {img.musker.map((item, i) => (
              <div key={i}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1920}
                  height={1080}
                  className="rounded-md"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="order-1 md:order-2">
          <h3 className="mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-center text-2xl font-bold text-transparent md:text-start lg:text-3xl">
            Training of Trainers (TOT)
          </h3>
          <p className="mb-6 text-center text-muted-foreground md:text-start">
            Pelatihan yang ditunjukkan kepada anggota FOSTI untuk meningkatkan
            skill kepemimpinan.
          </p>
        </div>
        <div className="gradient-card order-1 rounded-lg border border-border/40 p-2 md:order-2">
          <Carousel autoplay speed={500} dots={true}>
            {img.tot.map((item, i) => (
              <div
                key={i}
                className="aspect-video w-full overflow-hidden rounded-md"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </TabsContent>
  );
};

export default Internal;
