"use client";
import Badge from "./Badge";
import React, { useEffect } from "react";
import location from "../../public/location.svg";
import Image, { StaticImageData } from "next/image";
import icon4 from "../../public/Icon4.svg";
import star from "../../public/star.svg";
import icon5 from "../../public/Icon5.svg";
import icon3 from "../../public/Icon3.svg";

type PhoneProps = {
  image: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
  image5: StaticImageData;
  image6: StaticImageData;
  image7: StaticImageData;
  image8: StaticImageData;
  image9: StaticImageData;
  image10: StaticImageData;
  image11: StaticImageData;
};

export default function Phone({
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
}: PhoneProps) {
  return (
    <section className="logos">
      <div className="my-20 space-y-20 logos-slide ">
        <div className="flex gap-5 w-max  ">
          {/* Riders scrolling */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={location} alt="Logo" />
              <span className="text-white font-bold">Highly rated riders</span>
            </Badge>
          </div>
          {/* 20/7 scrolling */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={icon4} alt="Logo" />
              <span className="text-white font-bold">
                20/7 support for customers and vendors
              </span>
            </Badge>
          </div>
          {/* Quick and Easy onboarding */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={star} alt="Logo" />
              <span className="text-white font-bold">
                Quick and easy onboarding
              </span>
            </Badge>
          </div>
          {/*   Quality meal choices */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={icon5} alt="Logo" />
              <span className="text-white font-bold">Quality meal choices</span>
            </Badge>
          </div>
          {/* Riders scrolling */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={location} alt="Logo" />
              <span className="text-white font-bold">Highly rated riders</span>
            </Badge>
          </div>
          {/* 20/7 scrolling */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={icon4} alt="Logo" />
              <span className="text-white font-bold">
                20/7 support for customers and vendors
              </span>
            </Badge>
          </div>
          {/* Quick and Easy onboarding */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={star} alt="Logo" />
              <span className="text-white font-bold">
                Quick and easy onboarding
              </span>
            </Badge>
          </div>
          {/*   Quality meal choices */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={icon5} alt="Logo" />
              <span className="text-white font-bold">Quality meal choices</span>
            </Badge>
          </div>
          {/* Riders scrolling */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={location} alt="Logo" />
              <span className="text-white font-bold">Highly rated riders</span>
            </Badge>
          </div>
          {/* 20/7 scrolling */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={icon4} alt="Logo" />
              <span className="text-white font-bold">
                20/7 support for customers and vendors
              </span>
            </Badge>
          </div>
          {/* Quick and Easy onboarding */}
          <div>
            <Badge clx="bg-primary py-6 px-7 text-[17px] rounded-lg space-x-2 border-white">
              <Image src={star} alt="Logo" />
              <span className="text-white font-bold">
                Quick and easy onboarding
              </span>
            </Badge>
          </div>
          {/* live updates on order */}
        </div>
        {/* Phones Scrolling */}
      </div>

      {/* <div className="scroller"> */}
      <ul className="flex gap-5 w-[300%] logos-slide ">
        <Image src={image} alt="phone one w-[200%]" />
        <Image src={image2} alt="phone two" className="mt-10" />
        <Image src={image3} alt="phone three" />
        <Image src={image4} alt="phone four" className="mt-10" />
        <Image src={image5} alt="phone one" />
        <Image src={image6} alt="phone two" className="mt-10" />
        <Image src={image7} alt="phone three" />
        <Image src={image8} alt="phone four" className="mt-10" />
        <Image src={image9} alt="phone one" />
        <Image src={image10} alt="phone two" className="mt-10" />
        <Image src={image11} alt="phone three" />
      </ul>
      {/* </div> */}
    </section>
  );
}
