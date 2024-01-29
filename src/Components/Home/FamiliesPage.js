import React from 'react';


const FamiliesPage = () => {

  return (
    <section className='h-full w-full border border-solid border-gray-500 p-4 flex justify-center items-center'>
   <div className='w-3/4 h-3/4 flex flex-col items-center'>
  <img
    src="https://www.raymondjames.com/-/media/rj/advisor-sites/global/components/niche-tiles/families.jpg?la=en&hash=4C8CBA92D1E9EFE3ED2712B0C3699A27"
    alt='img not loaded'
    className='w-full h-full object-cover rounded hover:shadow-lg'
  />
  <h2 className="text-stone-700 text-xl font-bold mt-6">Families</h2>
  <h3 className='text-stone-600 text-lg font-semibold mt-6'>Learn More</h3>
</div>

    <div></div>
    <div></div>
  </section>
  
  );
};

export default FamiliesPage;
