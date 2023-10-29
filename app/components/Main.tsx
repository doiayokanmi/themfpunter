import { tabs } from "@/util";
import { Tab } from "@headlessui/react";
import React from "react";

const Main = () => {
  const [tabIndex, setTabIndex] = React.useState(1);

  return (
    <>
      <section className="lg:px-24 lg:py-6 p-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="basis-2/3 flex-1">
            <p className="p-2 bg-slate-700 text-white italic mb-2">
              NB: This prediction is free and will be updated every 24 hours.
              It&apos;s based on latest data and not 100% accurate but 95%
              guaranteed.
            </p>

            <Tab.Group
              as={"div"}
              defaultIndex={1}
              className="w-full"
              onChange={(index: number) => setTabIndex(index)}
            >
              <Tab.List
                as="div"
                className={"flex justify-between border-primary border-b-2"}
              >
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    className={
                      `p-2 text-start even:text-center even:px-6 last:text-end lg:min-w-[300px] ${tabIndex == index ? "bg-primary text-white" : "text-black"}`
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="basis-1/3 flex-1 lg:ps-4">
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
