import React from "react";
import { popular } from "../data/popular";

function Popular() {
  return (
    <div className="container mx-auto px-6 py-2 mt-[-20rem]">
      <div className="text-[#000000] text-3xl font-semibold mb-10">
        Popular <span className="border-b-2 border-[#FF902A]">Now</span>
      </div>
      <div className="flex justify-evenly">
        {popular.map((item, idx) => (
          <div
            key={idx}
            className="w-[22.188rem] h-[24.063rem] bg-white drop-shadow-lg rounded-lg p-5 relative hover:drop-shadow-xl" 
          >
            <div className="absolute bg-white rounded-full px-2 py-1 top-7 left-7">
              {item.rating} ☆
            </div>
            <div className="w-[19.5rem] h-[14.5rem] rounded-xl mb-5">
              <img className="w-[100%]" src="/images/img_product.png" alt="" />
            </div>
            <div className="flex item-center justify-between mb-3 text-2xl font-semibold">
              <div className="">{item.title}</div>
              <div>{item.amount} K</div>
            </div>
            <div className="flex item-center justify-between">
              <div className="flex item-center text-[#FF902A] gap-3">
                <div className="border-2 border-[#FF902A] rounded-md py-1 px-3">
                  Hot
                </div>
                <div className="border-2 border-[#FF902A] rounded-md py-1 px-3 opacity-50">
                  Cold
                </div>
              </div>
              <div className="bg-[#FF902A] rounded-full p-2 w-[2rem] h-[2rem]">
                <img src="/icons/icons_cart.svg" alt="" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[22.938rem] bg-[#F9D9AA] rounded-3xl bottom-0 top-10 z-10 mt-[-16rem]"></div>
    </div>
  );
}

export default Popular;
