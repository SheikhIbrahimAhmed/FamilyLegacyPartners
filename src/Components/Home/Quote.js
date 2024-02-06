import React from "react";
import "../Home/Quote.css";
const Quote = () => {
  return (
    <div className="mt-4 relative">
      <img
        src="https://www.raymondjames.com/-/media/rj/advisor-sites/global/banner-images/journey/journey-17.jpg?h=1150&w=1920&la=en&hash=9716155B631E13F2C826E12B69B1E65B"
        alt="img not loaded"
        className="w-full "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-brownish-overlay absolute inset-0"></div>
        <div className="flex flex-col items-center justify-center h-full relative z-10 mt-32">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-8 font-sans text-white  text-center">
            FAMILY IS NOT AN IMPORTANT THING. IT'S
          </h1>
          <span className="block  leading-10 font-sans text-white  text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            EVERYTHING
          </span>
          <h4 className="text-white mt-16 text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            MICHAEL J FOX
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Quote;
