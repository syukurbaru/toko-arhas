import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function MoveTo() {
  const [isShow, setIsShow] = useState(false);

  //   Handle show
  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      if (scroll > 200) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   Handle Move TO
  const moveTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShow ? (
        <div
          onClick={moveTo}
          className="w-[3rem] h-[3rem] bg-[#FF902A]  rounded-lg cursor-pointer flex justify-center items-center hover:drop-shadow-lg"
        >
          <div className="text-3xl p-2 text-white">&uarr;</div>
        </div>
      ) : null}
    </>
  );
}

export default MoveTo;
