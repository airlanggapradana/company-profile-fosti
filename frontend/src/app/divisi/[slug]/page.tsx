import Hubpub from "@/components/Divisi/Hubpub";
import Keor from "@/components/Divisi/Keor";
import Ristek from "@/components/Divisi/Ristek";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  if (slug === "ristek") {
    return {
      title: "RISTEK",
      description: "Divisi Riset dan Teknologi FOSTI UMS",
    };
  }
  if (slug === "hubpub") {
    return {
      title: "HUBPUB",
      description: "Divisi Hubungan Publik FOSTI UMS",
    };
  }
  if (slug === "keor") {
    return {
      title: "KEOR",
      description: "Divisi Keorganisasian FOSTI UMS",
    };
  }
  return null;
}

export default async function DivisiPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <div className="mx-auto max-w-screen-2xl pb-28 pt-20 md:pt-32">
      {slug === "ristek" && <Ristek />}
      {slug === "hubpub" && <Hubpub />}
      {slug === "keor" && <Keor />}
    </div>
  );
}
