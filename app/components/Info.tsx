import React from "react";
import Badge from "./Badge";
import playstore from "../../public/playstore.svg";
import Image from "next/image";
import appstore from "../../public/apple-icon1.svg";
import firstphone from "../../public/firstphone.jpg";
import pastry from "../../public/Pastry 1.svg";
import arrow from "../../public/arrow.svg";
import CardComponent from "./card";
import frame1 from "../../public/card 1.webp";
import Icon2 from "../../public/Icon2.svg";
import Icon1 from "../../public/Icon1.svg";
import frame2 from "../../public/card 2.webp";
import Icon3 from "../../public/Icon3.svg";
import frame3 from "../../public/card 3.webp";

export default function Info() {
  return (
    <section className="mb-48 lg:mx-16">
      <div className="flex flex-col text-center font-semibold ">
        {/* customer/vendor  */}
        <div className="flex justify-center">
          <Badge clx="bg-amber-100 space-x-10 text-[17px] my-10 pr-5 py-6 ">
            <p className="bg-yellow rounded-full p-2">Customers</p>
            <p>Vendors</p>
            <p>Riders</p>
          </Badge>
        </div>

        <div className="space-y-5">
          {/* Try the App */}
          <div>
            <h1 className="lg:text-6xl text-3xl font-bold">Try the App</h1>
          </div>
          <div className="lg:text-[20px] text-[13px] px-5  font-light">
            <p className="lg:mx-[3rem] md:mx-[6rem]">
              Have meals delivered to you within minutes from a wide variety of
              restaurants ranging from African to Continental cuisines to
              satisfy your cravings.
            </p>
          </div>
          {/* playstore */}
          <div className="flex justify-center gap-2">
            <div className="bg-primary text-white p-3 rounded-full border-0 font-bold space-x-2">
              <Image src={playstore} alt="playstore-download" width={20} />
            </div>
            {/* Appstore */}
            <div className="bg-primary text-white p-3 rounded-full border-0 font-bold space-x-2">
              <Image src={appstore} alt="playstore-download" width={20} />
            </div>
          </div>

          <div className="flex justify-center relative sm:hidden md:hidden ">
            {/* first phone Large Screen */}
            <Image
              src={firstphone}
              alt="first-phone"
              width={400}
              height={604}
              className="mt-10 left-10 relative"
            />
            <div>
              <Image
                src={pastry}
                alt="pastry1"
                width={130}
                height={100}
                className=" relative right-20 top-4"
              />
            </div>
          </div>

          {/* first phone Small Screen */}
          <div className="flex justify-center lg:hidden ">
            <Image
              src={firstphone}
              alt="first-phone"
              width={200}
              className="mt-10 left-10 relative "
            />
            <div className="">
              <Image
                src={pastry}
                alt="pastry1"
                width={80}
                height={100}
                className="relative right-7 top-4"
              />
            </div>
          </div>
          {/* Join our Network */}
          <div className="lg:flex lg:justify-center pt-16 flex text-left px-5 ">
            <h3 className="lg:text-[60px] text-[30px] text-gray-200">
              Join our growing network
            </h3>
            <Image
              src={arrow}
              alt="down arrow"
              width={50}
              height={25}
              className="text-gray-200"
            />
          </div>
        </div>
        {/* First Card */}
        <article className="">
          <div className="md:grid md:grid-cols-2 md:space-x-5 md:mx-5 lg:flex  lg:gap-4    lg:justify-center  ">
            <div>
              <CardComponent
                icon={Icon2}
                title="Start Selling"
                description1="Are you a restaurant owner looking to grow
          your business? Reach new customers when
        you join our network."
                more="SEE MORE"
                image={frame1}
              />
            </div>

            {/* Second Card */}
            <div>
              <CardComponent
                icon={Icon1}
                title="Deliver "
                description1="Are you a restaurant owner looking to grow your business? Reach new customers when you join our network."
                more="SEE MORE"
                image={frame2}
              />
            </div>

            {/* Third Card */}
            <div>
              <CardComponent
                icon={Icon3}
                title="Behind scenes"
                description1="Are you a restaurant owner looking to grow your business? Reach new customers when you join our network."
                more="SEE MORE"
                image={frame3}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
