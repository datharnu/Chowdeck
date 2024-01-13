import Image from "next/image";
import React from "react";
import location from "../../public/location.svg";
import Abuja from "../../public/Abuja.png";
import Egbeda from "../../public/Egbeda.png";
import Ojo from "../../public/Ojo.png";
import Gabgada from "../../public/Gbagada.png";
import Yaba from "../../public/Yaba.png";
import Lekki from "../../public/Lekki.png";
import Surulere from "../../public/Surulere.png";
import Festac from "../../public/Festac.png";
import Ogudu from "../../public/Ogudu.png";
import Ikeja from "../../public/Ikeja.png";
import Resturants from "./Resturants";
import Badge from "./Badge";
import { Twitter } from "lucide-react";
import pasta from "../../public/Pasta.svg";
import cardbg1 from "../../public/cardbg1.png";
import cardbg2 from "../../public/cardbg2.png";
import cardbg3 from "../../public/cardbg3.png";
import StoriesCard from "./Stories-Card";

export default function Stories() {
  return (
    <section className="py-10 lg:mx-16 ">
      <article className="story sm:flex sm:flex-col items-center my-20 lg:flex  border-4 mb-32 border-black mx-8   rounded-badge ">
        {/* Resturant Map div */}
        <div className="container h-[400px] md:h-[600px] lg:h-[800px] bg-center bg-mapBg bg-no-repeat  bg-cover rounded-badge lg:rounded-r-lg relative lg:border-black border-r-4">
          <div className="relative bottom-[5.5rem] right-[8rem]">
            <Image
              src={Abuja}
              alt="abuja-map"
              className=" w-14 md:w-[90px]  lg:w[90px] "
            />
          </div>
          {/* Ojo */}
          <div className="relative bottom-[rem] right-[7.5rem]">
            <Image
              src={Ojo}
              alt="abuja-map"
              className="w-16 md:w-[90px]  lg:w-[90px] "
            />
          </div>
          {/* click on any live location */}
          <div className=" lg:bg-yellow md:bg-yellow sm:bg-white border-4 border-white md:px-3 lg:px-3 relative top-[7rem]  py-3 flex text-center md:mx-32 md:rounded-full lg:rounded-full">
            <div className="relative top-1 left-2 lg:-left-1 pl-2">
              <Image src={location} alt="location" className="" />
            </div>
            <div>
              <p className="text-sm font-semibold text-center leading-7 ">
                Click on any live location to order from resturants near you
              </p>
            </div>
          </div>
        </div>

        <Resturants />
      </article>
      {/* Street Cred */}
      <div className=" flex flex-col gap-5 ">
        <div className="text-center">
          <Badge clx={" p-7 rounded-lg border-black border-[3.5px] bg-yellow"}>
            <p className="font-extrabold text-[20px]">Street Cred</p>
          </Badge>
        </div>
        {/* join our community */}
        <div className="text-center flex justify-center ">
          <Badge
            clx={
              "font-semibold py-6 px-[40px] rounded-lg  bg-blue-500 flex gap-3 "
            }
          >
            <Twitter className="text-white" />
            <p className="text-white text-[16px]">join our community</p>
          </Badge>
        </div>
      </div>
      {/* Stories*/}
      <article className="my-56">
        <div className="flex gap-2 relative lg:mx-40 sm:mx-3 md:mx-5">
          <p className="sm:text-3xl text-6xl font-extrabold tracking-tighter">
            Stories
          </p>
          <span>
            <Image
              src={pasta}
              className="sm:w-12 relative sm:bottom-1 bottom-7"
              alt={"pasta"}
            />
          </span>
        </div>
        {/* Stories Card */}
        <StoriesCard />
      </article>
    </section>
  );
}
