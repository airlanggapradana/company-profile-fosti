import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Divisi from "./Divisi";
import Proker from "./Proker";
import About from "./About";

const Wrapper = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Stats />
      <About />
      <Divisi />
      <Proker />
    </div>
  );
};

export default Wrapper;
