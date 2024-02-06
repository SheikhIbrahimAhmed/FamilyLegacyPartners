import image from "../../../src/assets/Journey 03.jpg";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative mb-8">
      <div className="flex flex-col absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center sm:top-72 sm:left-1/2 md:top-80 md:left-1/2 lg:top-96 lg:left-1/2 xl:left-1/2">
        <h1 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          A Personalized Approach to Managing Wealth
        </h1>
        <p className="text-white text-xs sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
          We aim to be your personal CFO. Rely on us to help provide you with
          financial planning and advice that encompasses your whole life. We
          strive to create a deep and enduring relationship with you and make an
          emotional investment in your family across generations.
        </p>
      </div>
      <img
        src={image}
        alt="Family"
        className="w-full h-auto filter brightness-50"
      />
    </div>
  );
};

export default HeroSection;
