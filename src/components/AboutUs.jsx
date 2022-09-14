import React from "react";

function AboutUs() {
  return (
    <div
      id="about"
      className="w-full h-[484px] mt-44 relative"
      style={{ backgroundImage: 'url("/images/bg-aboutus.png")' }}
    >
      <div className="container mx-auto flex">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[359.13px] h-[497.67px] border-8 border-white absolute top-[-7rem] rounded-2xl">
            <img src="/images/aboutus.png" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-1/2 py-44 px-5">
          <div className="text-black font-semibold text-3xl mb-7">
            About <span className="border-b-4 border-[#FF902A]">us</span>
          </div>
          <div className="text-black font-semibold text-xl mb-4">
            We provide quality coffee, and ready to deliver.
          </div>
          <div className="mb-4 text-black opacity-75">
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </div>
          <div className="bg-black rounded-full p-2 text-[#FF902A] w-40 flex items-center justify-center cursor-pointer hover:drop-shadow-xl">
            Get your coffee
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
