import React from "react";
import handOnPhone from "../../public/handOnPhone.webp";
import promo from "../../public/Promo-code.svg";
import drink from "../../public/drink.svg";
import playstore from "../../public/playstore.svg";
import appstore from "../../public/apple-icon.svg";
import promoCode from "../../public/Promo-code.svg";
import cool from "../../public/cool.gif";
import Image from "next/image";
import Badge from "./Badge";
import Pack from "../../public/Pack.svg";
export default function BotttomContainer() {
  return (
    <section>
      <div className="lg:flex md:flex md:justify-center lg:justify-center gap-5 md:px-3  sm:px-1">
        {/* first green card */}
        <article className="bg-primary w-[550px] sm:w-full  md:h-[440px] lg:h-[700px]  rounded-lg py-8 px-5 flex flex-col bg-chow-green p-5 h-full lg:p-10  lg:rounded-xl mb-5 lg:mb-0 relative ">
          {/* place your order */}
          <div className="text-[32px] lg:text-6xl text-white leading-9 lg:leading-[1.2] mb-4 lg:mb-8 tracking-tighter font-extrabold">
            <h4>Place your </h4>
            <h4> order in seconds</h4>
          </div>
          {/* download icon small screen */}
          <div className="flex  gap-2 lg:hidden ">
            <div className="bg-white text-white p-3 rounded-full border-0 font-bold space-x-2">
              <Image src={playstore} alt="playstore-download" width={25} />
            </div>
            {/* Appstore */}
            <div className="bg-white p-3 rounded-full border-0 font-bold space-x-2">
              <Image
                src={appstore}
                alt="playstore-download"
                width={25}
                className="text-primary"
              />
            </div>
          </div>

          {/* Download icon large screen */}
          <div className=" flex flex-col sm:hidden md:hidden space-y-4 ">
            {/* playstore app download */}
            <Badge clx="bg-white text-primary p-6 sm:p-6 rounded-lg border-0 font-bold space-x-2 cursor-pointer">
              <Image
                src={playstore}
                alt="playstore-download"
                width={20}
                height={20}
              />
              <span>Download on GooglePlay</span>
            </Badge>
            {/* App store app download */}
            <Badge clx="bg-white text-primary py-6 px-4 px sm:p-6 sm:ml-1 rounded-lg border-0 font-bold space-x-2 cursor-pointer">
              <Image
                src={appstore}
                alt="appstore-download"
                width={20}
                height={20}
              />
              <span>Download on App Store</span>
            </Badge>
          </div>
          {/* promo code */}
          <article className="">
            <div className=" space-y-2">
              <div className="w-[70px] lg:w-32 mt-4">
                <Image
                  src={promoCode}
                  alt="playstore-download"
                  className="text-primary"
                />
              </div>
              {/* code */}
              <div className="bg-yellow border-4 rounded-lg text-center border-black w-[50%] py-3 space-x-3 relative">
                <span className="h-[18px] w-[18px] border-4 border-black rounded-[50%] bg-primary inline-block relative top-[2px]"></span>
                <span className="font-extrabold text-lg">CDNWEB</span>
              </div>
              {/* Get 300 */}
              <p className="text-white w-3/4 lg:w-2/3 mt-2 pr-7">
                Get <span className="text-yellow font-bold">₦300 off</span> your
                first order when you use this promo code!
              </p>
            </div>
            <div className="">
              <Image
                src={drink}
                alt="drink"
                className=" w-[100px] lg:w-[210px] absolute right-2 bottom-5"
              />
            </div>
          </article>
        </article>
        {/* image of someone using the phone */}
        <article>
          <div className="">
            <Image
              src={handOnPhone}
              alt="hand on phone picture"
              className="sm:hidden w-[550px] md:h-[440px] lg:h-[700px] "
            />
          </div>
        </article>
      </div>
      {/* Cool Stuff Only */}
      <div className="flex lg:flex lg:justify-between py-20 relative">
        <article className="flex  gap-3 ml-2 ">
          <div>
            <Image src={cool} alt="cool" width={50} />
          </div>

          <div className="lg:flex">
            <p className="block text-3xl lg:text-5xl text-white font-bold tracking-tighter">
              Cool Stuff Only
            </p>
            <p className="block text-yellow lg:ml-4 lg:relative top-6 ">
              Subscribe to our newsletter
            </p>
          </div>
        </article>
        <div className="md:hidden sm:hidden z-20">
          <Image src={Pack} width={100} alt={"Pack"} />
        </div>
      </div>
    </section>
  );
}
