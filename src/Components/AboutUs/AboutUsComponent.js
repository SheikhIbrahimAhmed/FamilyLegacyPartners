import React from "react";

const AboutUsComponent = ({
  image,
  imagetitle,
  list1,
  list2,
  list3,
  icon1,
  icon2,
  heading1,
  paragraph1,
  heading2,
  paragraph2,
  heading3,
  paragraph3,
}) => {
  return (
    <div className="flex justify-center p-10 gap-5 shadow-lg mt-32">
      {" "}
      <div className="flex flex-col items-center w-1/4 flex-shrink-0">
        {" "}
        <img src={image} alt="img not loaded" />
        <h1 className="mt-6 pb-2 text-685b44 font-sans text-xl font-bold border-b border-custom-color">
          {imagetitle}
        </h1>
        <ul className="mt-4 ">
          <li className="text-custom-color">{list1}</li>
          <li className="text-custom-color">{list2}</li>
          <li className="text-custom-color">{list3}</li>
        </ul>
        <div className="text-685b44 space-x-2">
          {icon1}
          {icon2}
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-y-6  p-2 ">
        {" "}
        <h1 className="text-gray-700 font-bold text-lg">{heading1}</h1>
        <p className="text-gray-600 font-sans">{paragraph1}</p>
        <h1 className="text-gray-700 font-bold text-lg">{heading2}</h1>
        <p className="text-gray-600 font-sans">{paragraph2}</p>
        <h1 className="text-gray-700 font-bold text-lg">{heading3}</h1>
        <p className="text-gray-600 font-sans">{paragraph3}</p>
      </div>
    </div>
  );
};

export default AboutUsComponent;
