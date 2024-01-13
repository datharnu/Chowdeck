import React from "react";
import plate from "../../public/plate.png";
import Image from "next/image";
import Phone from "./phone";
import phone1 from "../../public/phone1.png";
import phone2 from "../../public/phone2.png";
import phone3 from "../../public/phone3.png";
import phone4 from "../../public/phone4.png";
import Carousel from "./carousel";

export default function Order() {
  return (
    <section className="bg-emerald-900 py-20">
      <Carousel />
      <div>
        <article className="flex justify-center">
          <div className=" -mt-36 text-white lg:flex gap-14 md:flex-col md:space-y-10 sm:space-y-10 justify-between mx-14">
            <div className="flex  ">
              <div className="lg:text-6xl font-bold space-y-4 md:text-5xl sm:text-2xl  ">
                <p>Chowdeck has</p> <p> you covered</p>
              </div>
              {/* plate image */}
              <div className="relative lg:top-12 lg:right-20 md:right-10 sm:top-5">
                <Image src={plate} alt="" width={200} />
              </div>
            </div>

            <div className="lg:text-2xl">
              <p>Hungry? Too tired to cook? Have friends over, or </p>
              <p>do you simplyneed to chop life? Download</p>
              <p>Chowdeck, and let’s deliver happiness to your</p>{" "}
              <p> doorstep in minutes.</p>
            </div>
          </div>
        </article>
        <Phone
          image={phone1}
          image2={phone2}
          image3={phone3}
          image4={phone4}
          image5={phone1}
          image6={phone2}
          image7={phone3}
          image8={phone4}
          image9={phone1}
          image10={phone2}
          image11={phone3}
        />
      </div>
    </section>
  );
}
