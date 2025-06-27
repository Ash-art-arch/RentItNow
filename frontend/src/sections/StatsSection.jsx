import React from 'react';
import user from '../assets/stats/user.svg';
import Map from '../assets/stats/map.svg';
import box from '../assets/stats/box.svg';

const StatsSection = () => {
  return (
    <div className="w-full py-10 md:py-20 bg-white">
      <div className="border-y-2 border-[rgba(0,0,0,0.32)] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-10 md:px-48 py-10">
        
        <div className="flex items-center flex-col gap-2">
          <img src={user} alt="Active Users" className="h-16 md:h-40 aspect-square object-contain" />
          <h1 className="text-[#0A3B87] text-lg md:text-2xl font-bold font-[Outfit]">35,600+</h1>
          <h2 className="text-gray-600 text-sm md:text-xl font-[Outfit] font-semibold">Active Users</h2>
        </div>

        <div className="flex items-center flex-col gap-2">
          <img src={box} alt="Items Served" className="h-16 md:h-40 aspect-square object-contain" />
          <h1 className="text-[#0A3B87] text-lg md:text-2xl font-bold font-[Outfit]">3,500+</h1>
          <h2 className="text-gray-600 text-sm md:text-xl font-[Outfit] font-semibold">Items Served</h2>
        </div>

        <div className="flex items-center flex-col gap-2">
          <img src={Map} alt="Sites Covered" className="h-16 md:h-40 aspect-square object-contain" />
          <h1 className="text-[#0A3B87] text-lg md:text-2xl font-bold font-[Outfit]">300+</h1>
          <h2 className="text-gray-600 text-sm md:text-xl font-[Outfit] font-semibold">Sites Covered</h2>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
