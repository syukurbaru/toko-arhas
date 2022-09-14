import React from "react";
import { specialMenu } from "../data/specialMenu";
import CardProduct from "./CardProduct";

function SpecialMenu() {
  return (
    <div id="product" className="container mx-auto py-20">
      <div className="text-[#000000] text-3xl font-semibold mb-10">
        Special menu{" "}
        <span className="border-b-4 border-[#FF902A]">for you</span>
      </div>
      <div className="flex justify-between flex-wrap">
        {specialMenu.map((item, idx) => (
          <CardProduct key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SpecialMenu;
