import React from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import HowTo from "../components/HowTo";
import Popular from "../components/Popular";
import SpecialMenu from "../components/SpecialMenu";

function Homepage() {
  return (
    <>
      <Hero />
      <Popular />
      <HowTo />
      <AboutUs />
      <SpecialMenu />
    </>
  );
}

export default Homepage;
