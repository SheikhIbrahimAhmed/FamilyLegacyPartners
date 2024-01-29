import React from "react";
import ImageComponent from "../ImageComponent";
const FamiliesPage = () => {
  return (
    <section className="h-full w-full  p-4 flex justify-center items-center">
      <div className="w-3/4 h-3/4 flex flex-col items-center">
        <img
          src="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/niche-tiles/families.jpg?la=en&hash=4C8CBA92D1E9EFE3ED2712B0C3699A27"
          alt="img not loaded"
          className="w-full h-full object-cover rounded hover:shadow-lg"
        />
        <div className="mt-6  flex flex-col items-center gap-4 group">
          <h1 className="text-stone-700 text-xl font-bold mt-6">Families</h1>
          <h3 className="text-stone-600 text-lg font-semibold mt-6 group-hover:opacity-0">
            Learn More
          </h3>
          <p className="opacity-0 transition-opacity group-hover:opacity-100 duration-1000 ease-in-out">
            A programmatic approach to wealth management
          </p>
        </div>

        <div className="flex gap-4">
          <ImageComponent
            imageUrl="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/niche-tiles/retirees2.jpg?la=en&hash=967B11E286425111233FD23314F0B070"
            title="RETIREES"
            subTitle={"LEARN MORE"}
            description="Nurturing wealth so you can live a longer, better life."
          />
          <ImageComponent
            imageUrl="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/niche-tiles/women.jpg?la=en&hash=F88D146A7A5FF115164477AB10414BC1"
            title="WOMEN INVESTORS"
            subTitle={"LEARN MORE"}
            description="Understanding the challenges women face and how to help."
          />
        </div>
      </div>
    </section>
  );
};

export default FamiliesPage;
