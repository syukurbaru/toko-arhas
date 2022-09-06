import React from "react";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between items-center h-10 mb-5">
      <div>
        <img src="/icons/logo_coffe.svg" alt="" />
      </div>
      <div>
        <ul className="flex gap-5">
          <li className="hover:text-orange-500"><a href="#about">About Us</a></li>
          <li className="hover:text-orange-500"><a href="#product">Our Product</a></li>
          <li className="hover:text-orange-500"><a href="#delivery">Delivery</a></li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="flex items-center bg-white rounded-full p-1 mr-3">
          <div className="mr-2">
            <img src="/icons/akar-icons_search.svg" alt="" />
          </div>
          <input type="text" placeholder="Search..." className="outline-none"/>
        </div>
        <div>
          <img src="/icons/icons_cart.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
