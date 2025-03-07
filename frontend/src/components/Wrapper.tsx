import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Divisi from "./Divisi";

const Wrapper = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Stats />
      <Divisi />
    </div>
  );
};

export default Wrapper;
