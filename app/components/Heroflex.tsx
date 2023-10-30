import React from "react";
import Image from "next/image";

const Heroflex = () => {
  return (
    <>
      <div className="lg:h-[500px] h-[400px] lg:flex overflow-hidden items-center justify-between text-white lg:px-24 p-4">
        <div className="text-center lg:text-start">
          <h1 className="font-extrabold lg:text-6xl text-2xl lg:leading-[70px]">
            WELCOME TO THE MF PUNTER PREDICTION WEB APP
          </h1>
          <p className="mt-5">
            The best place to get prediction that is 99% well analyzed, The no.
            1 sport prediction website in Africa
          </p>
        </div>

        <Image
          src={"/image/banner-img-2.png"}
          width={500}
          height={500}
          alt="logo"
          className="-mt-6"
        />
      </div>
    </>
  );
};

export default Heroflex;
