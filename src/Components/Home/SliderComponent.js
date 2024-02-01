import React from "react";

const SliderComponent = ({ image, heading, subheading, paragraph }) => {
  return (
    <div className="relative w-full h-full pt-16 pr-24 pl-24 pb-4 shadow-lg">
      <img
        src={image}
        alt="Slider img"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute top-0 left-0 flex items-center justify-start ml-32 mt-16 w-full h-full">
        <div className="bg-slate-100 bg-opacity-60 p-6 rounded-md shadow-lg text-center max-w-md">
          <div className="text-xl mb-4">
            {/* Separate div elements for different lines */}
            <div className="font-bold text-2xl leading-29 font-sans text-685b44">
              {heading}
            </div>
            <div className=" text-685b44">{subheading}</div>
          </div>
          <p className="text-sm leading-relaxed text-685b44">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
