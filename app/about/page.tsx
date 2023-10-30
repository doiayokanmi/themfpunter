"use client";

import React from "react";
import Navbar from "../components/Navbar";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <AnimatedWrapper>
        <div className="h-screen flex flex-col justify-between">
          <Navbar />
          <div className="flex items-center justify-center flex-col lg:px-24 p-4">
            <h1 className="font-bold uppercase text-2xl lg:text-8xl">the mf punter @ 2023</h1>
            <p className="text-lg lg:text-2xl my-4 text-center">
              We are the MF Punter, a group of people who want to help you find your next winning games in the betting space. 
            </p>
          </div>
          <Footer />
        </div>
      </AnimatedWrapper>
    </>
  );
};

export default page;
