import { AlignJustify, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/util";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className="sticky top-0 flex items-center text-white justify-between bg-black lg:px-24 p-4">
        <Image src={"/image/logo.PNG"} width={40} height={10} alt="logo" />

        <div
          className={`flex overflow-hidden lg:flex-row flex-col lg:static bg-black absolute top-[90px] left-0 w-screen lg:w-auto lg:space-y-0 px-4 space-y-8 ${
            openMenu ? "h-[400px]" : "h-0"
          } lg:h-auto lg:space-x-16 transition-all ease-in-out duration-200`}
        >
            {
                links.map((link, index) => (
                    <Link href={link.linkto} className={`uppercase hover:text-primary ${currentPath === link.linkto && 'text-primary'}`} key={index}>{link.title}</Link>
                ))
            }
          
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
    </>
  );
};

export default Navbar;
