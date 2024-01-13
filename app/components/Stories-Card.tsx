import React from "react";
import { storiesCard } from "../data";
import Image from "next/image";
export default function StoriesCard() {
  return (
    <section className="w-full">
      <div className="lg:grid-cols-3 md:grid-cols-2 lg:grid   md:grid md:mx-5 card-container">
        {storiesCard.map((stories) => {
          const { id, title, info, image, button } = stories;
          return (
            <article
              className="mx-3 my-8 shadow-lg border-4 border-black rounded-2xl"
              key={id}
            >
              <div className="relative">
                <Image
                  src={image}
                  alt={title}
                  className="tour-image border-b-4 border-black rounded-t-2xl"
                />
              </div>
              <div className="bg-servicecol px-5 py-5">
                <div className="py-3 space-y-3 text-center ">
                  <h1 className="font-extrabold">{title}</h1>
                  <p className=" text-lg mx-3 font-semibold">{info}</p>
                </div>
                <div className="text-bgcol flex gap-10 text-sm justify-center ">
                  <button className="btn  text-green-700 px-16">
                    {button}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
