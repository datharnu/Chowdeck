import React from "react";
import Image from "next/image";
import { resturants } from "../data";
type Props = {};

export default function Resturants({}: Props) {
  return (
    <div className="w-full text-left  relative lg:h-[800px]  ">
      <article className="bg-blue-300   py-4 sm:border-y-4 lg:border-b-4 border-black lg:rounded-tr-3xl">
        <h4 className="text-3xl font-bold ml-10 ">Resturants</h4>
      </article>
      <div className="overflow-y-auto max-h-[710px] ">
        <table className="table table-xs table-pin-rows table-pin-cols ">
          <tbody className="  md:mx-[19.5px]">
            <tr className="">
              {resturants.map((res) => {
                const { Name, icon, id } = res;
                return (
                  <td
                    key={id}
                    className="flex justify-between border-2 lg:border-chow-green-10 bg-white lg:bg-chow-green-5 mx-2 my-2 p-5 pt-6 rounded-lg items-center  capitalize hover:bg-chow-green-5"
                  >
                    <h2 className="text-lg font-semibold">{Name}</h2>
                    <span className="bg-green-100 rounded-full p-2 relative inline-block">
                      <Image src={icon} className="relative " />
                    </span>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
