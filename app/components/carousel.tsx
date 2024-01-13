"use client";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AfricanMeal from "../../public/african-meals.svg";
import FastFood from "../../public/Fastfoodxsnacks.svg";
import FitFarm from "../../public/Fitfam.svg";
import Pack from "../../public/Pack.svg";
import Drink from "../../public/drink.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselImage {
  id: number;
  picture: StaticImageData;
  title: string;
  color: string;
}

const images: CarouselImage[] = [
  { id: 1, picture: AfricanMeal, title: "Get Started in 3", color: "#038B5C" },
  { id: 2, picture: FastFood, title: "Download the App", color: "#8C77EC" },
  { id: 3, picture: Drink, title: "Explore categories", color: "#FFC501" },
  { id: 4, picture: FitFarm, title: "Place your orders", color: "#FF884D" },
  { id: 5, picture: Pack, title: "Enjoy your meal", color: "#FFEDB3" },
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Make sure to run this effect only once by passing an empty dependency array

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="">
      <article className="carousel-container relative bottom-[12rem]">
        <div
          className="container rounded-2xl h-[450px] md:space-y-10 lg:space-y-10 lg:pt-10  md:h-[800px] lg:h-[800px]"
          style={{ backgroundColor: `${images[index].color}` }}
        >
          <h2 className="font-bold text-[32px] md:text-7xl lg:text-7xl mt-5 tracking-[-2px]">
            {images[index].title}
          </h2>
          <Image
            src={images[index].picture}
            alt={images[index].title}
            className="w-[50%] h-[50%] lg:h-[70%] lg:w-[85%]"
          />
          <div className="buttons-container ">
            {/* <button onClick={handlePrev} className="btn">
            Prev
          </button>
          <button onClick={handleNext} className="btn">
            Next
          </button> */}

            <div
              id="left"
              onClick={handlePrev}
              className="sm:p-2 lg:p-[15px] md:p-[12px]"
            >
              <ArrowLeft
                className="button rounded-2xl"
                style={{ color: `${images[index].color}` }}
              />
            </div>
            <div
              id="right"
              onClick={handleNext}
              className="sm:p-2 lg:p-[15px] md:p-[12px]"
            >
              <ArrowRight
                className="button rounded-2xl"
                style={{ color: `${images[index].color}` }}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Carousel;
