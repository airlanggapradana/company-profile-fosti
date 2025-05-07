import Hubpub from "@/components/Divisi/Hubpub";
import Keor from "@/components/Divisi/Keor";
import Ristek from "@/components/Divisi/Ristek";
import React from "react";

export default async function DivisiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-screen-2xl pb-28 pt-20 md:pt-32">
      {slug === "ristek" && <Ristek />}
      {slug === "hubpub" && <Hubpub />}
      {slug === "keor" && <Keor />}
    </div>
  );
}
