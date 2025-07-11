import React from 'react';
import user from '../assets/stats/user.svg';
import Map from '../assets/stats/map.svg';
import box from '../assets/stats/box.svg';

const StatsSection = () => {
  return (

   <div className="bg-[#121212] text-white py-12 px-4 md:px-16 h-[600px]">
    <h1 className='text-3xl md:text-4xl text-white font-bold font-[Outfit] tracking-widest text-center mb-10'>Services</h1>
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
  
    {/* Right Side Cards */}
    
      {/* Card 1 - Highlighted */}
      <div className="bg-[#1a1a1a] p-5 rounded-xl border border-transparent hover:border-gray-600 transition-all duration-300">
        <div className="text-3xl mb-4">🚛</div>
        <h3 className="font-semibold mb-2 text-white text-lg uppercase tracking-wide">
          Land Freight
        </h3>
        <p className="text-sm text-gray-400">
          Flexible and freight services to meet all your transportation needs, 
          getting your freight from end to end to its final destination.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#1a1a1a] p-5 rounded-xl border border-transparent hover:border-gray-600 transition-all duration-300">
        <div className="text-3xl mb-4">🚢</div>
        <h3 className="font-semibold mb-2 text-white text-lg uppercase tracking-wide">
          Sea Freight
        </h3>
        <p className="text-sm text-gray-400">
          Secure sea freight solutions for long-haul shipments 
          with real-time tracking and affordable pricing.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1a1a1a] p-5 rounded-xl border border-transparent hover:border-gray-600 transition-all duration-300">
        <div className="text-3xl mb-4">✈️</div>
        <h3 className="font-semibold mb-2 text-white text-lg uppercase tracking-wide">
          Air Freight
        </h3>
        <p className="text-sm text-gray-400">
          Swift air freight services for time-sensitive deliveries, 
          ensuring global reach with fast clearance.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#1a1a1a] p-5 rounded-xl border border-transparent hover:border-gray-600 transition-all duration-300">
        <div className="text-3xl mb-4">📦</div>
        <h3 className="font-semibold mb-2 text-white text-lg uppercase tracking-wide">
          Project Cargo
        </h3>
        <p className="text-sm text-gray-400">
          Specialized handling for oversized or heavy cargo 
          tailored to your unique logistics demands.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-[#1a1a1a] p-5 rounded-xl border border-transparent hover:border-gray-600 transition-all duration-300">
        <div className="text-3xl mb-4">🛳️</div>
        <h3 className="font-semibold mb-2 text-white text-lg uppercase tracking-wide">
          Shipping Agency
        </h3>
        <p className="text-sm text-gray-400">
          Complete support for shipping processes, 
          port clearances, and logistics coordination.
        </p>
      </div>
      
    
  </div>
</div>

  );
};

export default StatsSection;
