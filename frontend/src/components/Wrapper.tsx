import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Divisi from "./Divisi";
import Proker from "./Proker";

const Wrapper = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Stats />
      <Divisi />
      <Proker />
    </div>
  );
};

export default Wrapper;
