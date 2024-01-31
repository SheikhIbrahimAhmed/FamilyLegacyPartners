import React from "react";

const SliderComponent = ({ image, heading, paragraph }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={image}
        alt="Slider img"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute top-0 left-0 p-4">
        <div className="bg-white p-4 rounded-md shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">{heading}</h2>
          <p className="text-sm">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
