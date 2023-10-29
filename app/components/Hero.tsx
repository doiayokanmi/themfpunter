import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <section className="lg:h-[530px] overflow-hidden h-[400px] bg-heroBg bg-cover bg-center">
        <div className="h-full bg-overlay overflow-hidden relative">
          <nav className="sticky top-0 flex items-center text-white justify-between bg-black lg:px-24 p-4">
            <Image src={"/image/logo.PNG"} width={40} height={10} alt="logo" />

            <div
              className={`flex overflow-hidden lg:flex-row flex-col lg:static bg-black absolute top-[90px] left-0 w-screen lg:w-auto lg:space-y-0 px-4 space-y-8 ${
                openMenu ? "h-[400px]" : "h-0"
              } lg:h-auto lg:space-x-16 transition-all ease-in-out duration-200`}
            >
              <Link href="">About Us</Link>
              <Link href="">About Us</Link>
              <Link href="">About Us</Link>
              <Link href="">About Us</Link>
            </div>

            <div className="flex items-center space-x-2" onClick={toggleMenu}>
              <Link href={"/"} className="bg-primary p-2 rounded">
                Subscribe
              </Link>
              <div className="cursor-pointer lg:hidden p-2 rounded-full bg-white text-primary">
                {openMenu ? <X size={16} /> : <AlignJustify size={16} />}
              </div>
            </div>
          </nav>

          <div className="lg:h-[430px] h-[320px] lg:flex overflow-hidden items-center justify-between text-white lg:px-24 p-4">
            <h1 className="font-bold lg:text-6xl text-2xl flex-1 text-center lg:text-start basis-1/2 lg:leading-[70px]">
              WELCOME TO THE MF PUNTER PREDICTION WEB APP
            </h1>

            <Image
              src={"/image/banner-img-2.png"}
              width={500}
              height={500}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
