"use client";

import React from "react";
import LayoutPages from "../components/LayoutPages";

const page = () => {
  return (
    <>
      <LayoutPages>
        <h1 className="font-bold uppercase text-2xl lg:text-8xl">
          the mf punter @ 2023
        </h1>
        <p className="text-lg lg:text-2xl my-4 text-center">
          We are the MF Punter, a group of people who want to help you find your
          next winning games in the betting space.
        </p>
      </LayoutPages>
    </>
  );
};

export default page;
