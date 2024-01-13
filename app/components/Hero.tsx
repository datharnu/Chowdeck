import React from "react";
import Badge from "./Badge";
import logo from "../../public/logo.svg";
import select from "../../public/select.svg";
import Icon from "./Icon";
import Image from "next/image";
import playstore from "../../public/playstore.svg";
import appleicon from "../../public/apple-icon1.svg";
import store from "../../public/store-icon.svg";
import { AlignJustify } from "lucide-react";

export default function Hero() {
  return (
    <section className=" bg-bgImg  bg-contain sm:bg-inherit   lg:w-full lg:h-[1035px] md:h-[800px]  bg-no-repeat py-10">
      {/* Large Screen Nav */}

      <article className="flex justify-center">
        <div className=" fixed w-[80%] z-10 flex justify-between mx-10 my-4 sm:hidden md:hidden ">
          {/* logo */}
          <div className="sm:hidden md:hidden">
            <Badge clx="bg-primary mt-4 py-6 px-7 text-[17px] space-x-2 border-none cursor-pointer">
              <Image src={logo} alt="Logo" width={25} height={25} />
              <span className="text-white font-bold">Chowdeck</span>
            </Badge>
          </div>

          {/* features */}
          <div className="mt-4  lg:ml-10 ">
            <Badge clx="lg:gap-10  text-[17px] py-6 px-7 font-bold">
              <p>Company</p>
              <p>FAQs</p>
              <p>Blog</p>
              <p>Contact</p>
            </Badge>
          </div>

          <div className="flex gap-2">
            {/* customers */}
            <div className="tool tool-down cursor-pointer" data-tip="Vendors">
              <div
                className="tool2 tool2-down cursor-pointer "
                data-tip="Riders"
              >
                <Badge clx="py-6 px-7 mt-4 space-x-2 cursor-pointer ">
                  <span className="font-bold text-[17px]">Customers</span>
                  <Image src={select} alt="Logo" width={20} height={20} />
                </Badge>
              </div>
            </div>

            {/* Store */}
            <div className="bg-white rounded-full py-1 px-1 cursor-pointer mt-3 ">
              <Image src={store} alt="store-icon" className="m-4" />
            </div>
          </div>
        </div>
      </article>
      {/* Small Screen Nav */}
      <div className="flex z-10 justify-between lg:hidden overflow-hidden fixed w-[98%]">
        <div className="bg-primary rounded-full py-3 px-3 ml-5">
          <Image src={logo} alt="logo" width={25} />
        </div>
        <div className="flex gap-2">
          <div className="bg-white rounded-full py-3 px-3">
            <Image src={store} alt="store" />
          </div>
          <div className="bg-primary rounded-full px-3 py-2 text-white ">
            <AlignJustify className="relative top-1" />
          </div>
        </div>
      </div>

      <Icon />

      <div className="flex gap-5 justify-center lg:my-56 sm:my-36 text-sm sm:grid md:my-28">
        {/* playstore app download */}
        <Badge clx="bg-primary text-white p-8 sm:p-6 rounded-lg border-0 font-bold space-x-2 cursor-pointer">
          <Image
            src={playstore}
            alt="playstore-download"
            width={20}
            height={20}
          />
          <span>Download on GooglePlay</span>
        </Badge>
        {/* App store app download */}
        <Badge clx="bg-primary text-white p-8 sm:p-6 sm:ml-1 rounded-lg border-0 font-bold space-x-2 cursor-pointer">
          <Image
            src={appleicon}
            alt="appstore-download"
            width={20}
            height={20}
          />
          <span>Download on App Store</span>
        </Badge>
      </div>
    </section>
  );
}
