import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section id="partners" className="mx-auto max-w-screen-2xl py-28">
      <div className="mb-7 text-center">
        <h1 className="mb-4 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
          Supported by
        </h1>
        <p className="text-muted-foreground">
          Kami mendapat dukungan penuh dari berbagai pihak dalam menjalankan
          program kerja kami.
        </p>
      </div>

      <div className="flex items-center justify-center gap-7">
        <Image
          src={
            "https://news.ums.ac.id/id/wp-content/uploads/sites/2/2022/12/Resmi_Logo_UMS_Color_FullText.png"
          }
          alt="UMS"
          width={200}
          height={200}
        />
        <Image
          src={
            "https://teknikinformatika.ums.ac.id/wp-content/uploads/sites/57/2022/10/logo-informatika.svg"
          }
          alt="prodi"
          width={300}
          height={300}
          className="invert dark:invert-0"
        />
      </div>
    </section>
  );
};

export default Partners;
