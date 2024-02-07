import React from "react";

const ImageComponent = ({ imageUrl, title, subTitle, description }) => {
  return (
    <div className="mt-6 shadow-md flex flex-col items-center gap-4 group relative overflow-hidden p-3">
      <div className="relative overflow-hidden group-hover:shadow-lg">
        <img
          src={imageUrl}
          alt="img not loaded"
          className="w-full h-64 object-cover rounded transition-transform"
        />
        <div className="bg-brownish-overlay absolute inset-0 opacity-0 transition-opacity group-hover:opacity-70"></div>
      </div>
      <h1 className="text-stone-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mt-6 relative z-10">
        {title}
      </h1>
      <h2 className="transition-opacity  sm:text-sm md:text-base lg:text-base   opacity-100 group-hover:opacity-0 duration-1000 ease-in-out relative z-10">
        {subTitle}
      </h2>
      <p className="opacity-0 text-xs sm:text-sm md:text-sm lg:text-sm transition-opacity group-hover:opacity-100 duration-1000 ease-in-out relative z-10">
        {description}
      </p>
    </div>
  );
};

export default ImageComponent;
