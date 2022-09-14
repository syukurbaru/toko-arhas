import React from "react";
import { popular } from "../data/popular";
import CardProduct from "./CardProduct";

function Popular() {
  return (
    <div className="container mx-auto py-2 mt-[-20rem]">
      <div className="text-[#000000] text-3xl font-semibold mb-10">
        Popular <span className="border-b-4 border-[#FF902A]">Now</span>
      </div>
      <div className="flex justify-evenly">
        {popular.map((item, idx) => (
          <CardProduct key={idx} item={item} />
        ))}
      </div>
      <div className="h-[22.938rem] bg-[#F9D9AA] rounded-3xl bottom-0 top-10 z-10 mt-[-16rem]"></div>
    </div>
  );
}

export default Popular;
