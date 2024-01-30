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
          <h1 class="text-5xl leading-10 font-sans text-white mb-2 text-center">
            FAMILY IS NOT AN IMPORTANT THING. IT'S
          </h1>
          <span class="block text-5xl leading-10 font-sans text-white mb-2 text-center">
            EVERYTHING
          </span>
          <h4 class="text-white mt-16">MICHAEL J FOX</h4>
        </div>
      </div>
    </div>
  );
};

export default Quote;
