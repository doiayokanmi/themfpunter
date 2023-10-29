import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <section className="lg:h-[530px] overflow-hidden h-[400px] bg-heroBg bg-cover bg-center">
        <div className="h-full bg-overlay overflow-hidden relative">
          <Navbar />
          <div className="lg:h-[430px] h-[320px] lg:flex overflow-hidden items-center justify-between text-white lg:px-24 p-4">
            <div className="text-center lg:text-start">
              <h1 className="font-extrabold lg:text-6xl text-2xl lg:leading-[70px]">
                WELCOME TO THE MF PUNTER PREDICTION WEB APP
              </h1>
              <p className="mt-5">The best place to get prediction that is 99% well analyzed, The no. 1 sport prediction website in Africa</p>
            </div>

            <Image
              src={"/image/banner-img-2.png"}
              width={500}
              height={500}
              alt="logo"
              className="-mt-6"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
