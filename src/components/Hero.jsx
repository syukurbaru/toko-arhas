import React from 'react'

function Hero() {
  return (
    <div
      className="w-full h-[62rem] bg-cover mt-[-5rem] py-[11rem]"
      style={{ backgroundImage: 'url("/images/bg-image.png")' }}
    >
      {/* Hero */}
      <div className="container mx-auto flex justify-between">
        <div className="py-5 w-[30rem]">
          <div className="text-5xl leading-[1.5] mb-6">
            Enjoy your <span className="text-orange-500">coffee</span> before
            your activity
          </div>
          <div className="text-lg text-[#7E7D7A] w-[22rem] mb-5">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex item-center gap-5 rounded-full bg-[#2F2105] text-white p-3 cursor-pointer hover:bg-[#f3c05b] hover:text-[#2F2105] transition ease-in-out">
              <div>Order Now</div>
              <img src="/icons/order.svg" alt="" />
            </div>
            <div className="text-[#F4AE26] cursor-pointer hover:text-[#2F2105]">
              More menu
            </div>
          </div>
        </div>
        <div className="p-5 ">
          <div className="animate-bounce">
          <img
            src="/images/img-hero.png"
            alt=""
            className="w-[35rem] h-[26rem] object-cover"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero