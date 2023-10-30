import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Time from "./Time";
import Heroflex from "./Heroflex";

const Hero = () => {
  return (
    <>
      <section className="lg:h-screen overflow-hidden h-[500px] bg-heroBg bg-cover bg-center">
        <div className="h-full bg-overlay overflow-hidden relative">
          <Time />
          <Navbar />
          <Heroflex />
        </div>
      </section>
    </>
  );
};

export default Hero;
