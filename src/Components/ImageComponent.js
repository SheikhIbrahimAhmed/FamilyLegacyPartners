import React from "react";

const ImageComponent = ({ imageUrl, title, subTitle, description }) => {
  return (
    <div className="mt-6 shadow-md flex flex-col items-center gap-4 group">
      <img
        src={imageUrl}
        alt="img not loaded"
        className="w-full h-64 object-cover rounded transition-transform group-hover:shadow-lg"
      />
      <h1 className="text-stone-700 text-xl font-bold mt-6">{title}</h1>
      <h2 className="transition-opacity opacity-100 group-hover:opacity-0 duration-1000 ease-in-out">
        {subTitle}
      </h2>
      <p className="opacity-0 transition-opacity group-hover:opacity-100 duration-1000 ease-in-out">
        {description}
      </p>
    </div>
  );
};

export default ImageComponent;
