import React from "react";
import { tabs } from "@/util";
import { Tab } from "@headlessui/react";

const TabContainer = () => {
  const [tabIndex, setTabIndex] = React.useState(1);
  return (
    <>
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
              className={`p-2 outline-none text-start even:text-center even:px-6 last:text-end lg:min-w-[300px] ${
                tabIndex == index ? "bg-primary text-white" : "text-black"
              }`}
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className={`py-4`}>Content 1</Tab.Panel>
          <Tab.Panel className={`py-4`}>Content 2</Tab.Panel>
          <Tab.Panel className={`py-4`}>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default TabContainer;
