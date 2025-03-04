import Divisi from "@/components/Divisi";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Divisi />
    </div>
  );
}
