import React from "react";

function CardProduct({ item }) {
  return (
    <div className="w-[22.188rem] h-[24.063rem] bg-white drop-shadow-lg rounded-lg p-5 relative hover:drop-shadow-xl mb-20">
      <div className="absolute bg-white rounded-full px-2 py-1 top-7 left-7">
        {item.rating} <span className="text-[#FF902A]">☆</span>
      </div>
      <div className="w-[19.5rem] h-[14.5rem] rounded-xl mb-5">
        <img className="w-[100%]" src={item.image} alt="" />
      </div>
      <div className="flex item-center justify-between mb-3 text-2xl font-semibold">
        <div className="">{item.title}</div>
        <div>{item.amount} K</div>
      </div>
      <div className="flex item-center justify-between">
        {item.desc ? (
          <div className="text-[#7E7D7A] w-[10rem]">{item.desc}</div>
        ) : (
          <div className="flex item-center text-[#FF902A] gap-3">
            {item.variant.map((item, idx) => {
              return (
                <div
                  className={`border-2 border-[#FF902A] rounded-md py-1 px-3 ${
                    !item.isStill && "opacity-50"
                  }`}
                  key={idx}
                >
                  {item.type}
                </div>
              );
            })}
            {/* <div className="border-2 border-[#FF902A] rounded-md py-1 px-3 opacity-50">
              Cold
            </div> */}
          </div>
        )}
        <div className="bg-[#FF902A] rounded-full p-2 w-[2rem] h-[2rem]">
          <img src="/icons/icons_cart.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
