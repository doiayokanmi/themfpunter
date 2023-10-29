import Link from "next/link";
import React, { useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const curTime = currentTime.toLocaleString("en-US", options);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="flex bg-primary justify-between lg:px-24 p-2 text-white">
        {isClient && <div>{curTime}</div>}

        <Link href={"#"} className="underline">
          Donate
        </Link>
      </div>
    </>
  );
};

export default Time;
