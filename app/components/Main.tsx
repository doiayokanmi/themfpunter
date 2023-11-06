
import React from "react";
import TabContainer from "./TabContainer";

const Main = () => {

  return (
    <>
      <section className="lg:px-24 lg:py-6 p-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="basis-2/3">
            <p className="p-2 bg-slate-400 text-white text-xs lg:text-base italic mb-2">
              NB: This prediction is free and will be updated every 24 hours.
              It&apos;s based on latest data and not 100% accurate but 95%
              guaranteed.
            </p>

            <TabContainer />
            
          </div>
          <div className="basis-1/3 text-xs lg:text-base lg:ps-4">
            <h1 className="font-extrabold p-2 bg-primary text-white text-3xl">
              Advertisement
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quis, nam nihil perferendis necessitatibus, ad quam eos assumenda
            enim hic sapiente culpa laudantium tempore eaque expedita atque,
            magnam eveniet? Ab. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo fugiat nobis totam amet neque id eius,
            voluptas possimus, labore libero animi fugit distinctio! Ex
            inventore magnam perspiciatis, incidunt culpa possimus.
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
