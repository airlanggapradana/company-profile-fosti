import React from "react";

export default function DivisiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen w-full">{children}</main>;
}
