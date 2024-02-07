import React from "react";

const SliderComponent = ({ image, heading, subheading, paragraph }) => {
  return (
    <div className="relative w-full h-full mt-8 p-8 shadow-lg mb-6">
      <img
        src={image}
        alt="Slider img"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute top-0 flex items-center justify-start ml-8  w-full h-80">
        <div className="bg-slate-100 bg-opacity-70 p-4 rounded-md shadow-lg text-center max-w-xs w-full h-40 sm:w-full sm:h-48 md:w-full md:h-56 sm:mt-24 md:mt-64 lg:w-96 lg:h-64 lg:p-4 lg:mt-80 xl:w-full xl:h-72 ">
          <div className="text-sm mb-2">
            {/* Separate div elements for different lines */}
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl md:text- leading-20 font-sans text-685b44">
              {heading}
            </div>
            <div className=" text-685b44 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
              {subheading}
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-685b44">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
