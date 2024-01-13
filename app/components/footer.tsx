"use client";
import React, { useState } from "react";
import Image from "next/image";
import submitArrow from "../../public/submit-arrow.gif";
import icon3 from "../../public/Icon3.svg";
import icon4 from "../../public/Icon4.svg";
import icon2 from "../../public/Icon2.svg";

import Footerlinks from "./Footerlinks";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Do something with the input value, e.g., submit it or perform an action
    console.log("Submitted value:", inputValue);
  };
  return (
    <section className="bg-black lg:px-16 sm:px-3 md:px-8 ">
      <article className="">
        {/* Form submission */}
        <form onSubmit={handleSubmit} className="flex lg:hidden  ">
          <label className="border-y-[1px] border-r-[1px] items-center md:pr-60  relative ">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="yourname@email.com"
              className=" relative sm:top-9 md:top-5 pl-4 bg-transparent w-full pr-10 text-xl  text-black-14 font-bold focus:outline-none placeholder:text-black-14"
            />
          </label>

          <button type="submit" className="border-y-[1px] md:pr-28  ">
            <Image
              src={submitArrow}
              alt={"submit arrow"}
              className="sm:w-[100px] sm:pr-2 md:w-[80px] lg:w-[70px]  "
            />
          </button>
        </form>
        {/* Social handles */}
        <div className="lg:hidden">
          <ul className="grid grid-cols-2">
            {/* Twitter */}
            <li className="h-24 font-bold  text-xl flex items-center justify-center border-white-20 border-r border-b">
              <a
                href="https://twitter.com/chowdeck"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <div className="flex gap-2">
                  <Image src={icon3} width={20} alt="icon3" />
                  Twitter
                </div>
              </a>
            </li>
            {/* Instagram */}
            <li className="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-b">
              <a
                href="https://www.instagram.com/chowdeck/"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <div className="flex gap-2">
                  <Image src={icon2} width={20} alt="icon3" />
                  Instagram
                </div>
              </a>
            </li>
            {/* Facebook */}
            <li className="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-r">
              <a
                href="https://facebook.com/chowdeck"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <div className="flex gap-2">
                  <Image src={icon4} width={20} alt="icon3" />
                  Facebook
                </div>
              </a>
            </li>
            <li className="h-24 font-bold text-xl flex items-center justify-center border-white-20">
              <a
                href="https://www.linkedin.com/company/chowdeck/"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <span className="w-5 h-5 border-4 bg-red-400 border-white border-opacity-40 rounded-full mr-2"></span>{" "}
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Large Screen size */}
        <section className="sm:hidden md:hidden ">
          <div className="flex justify-center relative bottom-28 ">
            <label className="border-y-[1px] pr-[40rem]">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="yourname@email.com"
                className=" pl-4 bg-transparent w-full relative text-xl  text-black-14 font-bold focus:outline-none placeholder:text-black-14 "
              />
            </label>
            <div className="border-l-[1px] border-y-[1px] pr-28 pl-10">
              <button type="submit">
                <Image
                  src={submitArrow}
                  alt={"submit arrow"}
                  className="  lg:w-[100px]  "
                />
              </button>
            </div>
          </div>

          <Footerlinks />
        </section>
        <div className="lg:hidden">
          <Footerlinks />
        </div>
      </article>
    </section>
  );
}
