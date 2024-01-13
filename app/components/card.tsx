import React from "react";

import Image from "next/image";

import { ArrowRight } from "lucide-react";

type CardProps = {
  icon: string;
  title: string;
  description1?: string | JSX.Element;
  description2?: string | JSX.Element;
  description3?: string | JSX.Element;
  more: string;
  image: string;
};

export default function CardComponent({
  icon,
  title,
  description1,
  more,
  image,
}: CardProps) {
  return (
    <section className="">
      <div className="card my-10 md:w-[96%] shadow-xl border-4 border-black sm:mx-4 ">
        <div className="card-body text-left ">
          <div className="">
            <Image src={icon} alt="icon" />
          </div>
          <h2 className="card-title font-bold lg:text-[30px] text-2xl my-5">
            {title}
          </h2>
          <p>{description1}</p>
        </div>
        <div className="flex mx-10 mb-10">
          <p className="font-bold">{more}</p>
          <ArrowRight />
        </div>
        <figure>
          <Image src={image} alt="frame" />
        </figure>
      </div>
    </section>
  );
}
