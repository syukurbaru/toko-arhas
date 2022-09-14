import React from "react";
import { howTo } from "../data/howTo";

function HowTo() {
  return (
    <div id="delivery" className="container mx-auto mt-24">
      <div className="text-black font-semibold text-3xl mb-8">
        How to use delivery{" "}
        <span className="border-b-4 border-[#FF902A]">service</span>
      </div>
      <div className="flex justify-evenly">
        {howTo?.contents.map((item, idx) => (
          <div
            className="flex items-center justify-center flex-col w-[22.188rem] h-[24.063rem] p-5"
            key={idx}
          >
            <div className="w-[159px] h-[159px] mb-4 hover:animate-pulse">
              <img src={item.image} alt="" />
            </div>
            <div className="font-semibold text-xl mb-1">{item.step}</div>
            <div className="text-lg">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowTo;
