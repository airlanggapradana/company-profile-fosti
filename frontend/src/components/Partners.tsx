import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section
      id="partners"
      className="mx-auto max-w-screen-2xl px-5 py-14 md:py-20 lg:py-28"
    >
      <div className="mb-5 text-center md:mb-7">
        <h1 className="mb-2 bg-gradient-to-br from-indigo-500 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent md:mb-4 md:text-3xl lg:text-4xl">
          Supported by
        </h1>
        <p className="px-2 text-sm text-muted-foreground md:text-base">
          Kami mendapat dukungan penuh dari berbagai pihak dalam menjalankan
          program kerja kami.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-7">
        <Image
          src={
            "https://news.ums.ac.id/id/wp-content/uploads/sites/2/2022/12/Resmi_Logo_UMS_Color_FullText.png"
          }
          alt="UMS"
          width={200}
          height={200}
          className="h-auto w-40 md:w-[180px] lg:w-[200px]"
        />
        <Image
          src={
            "https://teknikinformatika.ums.ac.id/wp-content/uploads/sites/57/2022/10/logo-informatika.svg"
          }
          alt="prodi"
          width={300}
          height={300}
          className="h-auto w-60 invert dark:invert-0 md:w-[250px] lg:w-[300px]"
        />
      </div>
    </section>
  );
};

export default Partners;
