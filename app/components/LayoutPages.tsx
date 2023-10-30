import React from "react";
import Navbar from "../components/Navbar";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import Footer from "../components/Footer";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatedWrapper>
        <div className="overflow-hidden h-screen flex flex-col justify-between">
          <Navbar />
          <div className="flex items-center justify-center flex-col lg:px-24 p-4">
            {children}
          </div>
          <Footer />
        </div>
      </AnimatedWrapper>
    </>
  );
};

export default LayoutPages;
