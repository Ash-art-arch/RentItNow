import React from 'react';

const Sidebar = () => {
  return (
    <aside className='w-full sm:w-[16rem] md:w-[20rem] min-h-[70vh] bg-[rgba(217,217,217,0.39)] shadow-inner shadow-[rgba(0,0,0,0.79)] p-4 sm:p-6 font-[Poppins]'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4 font-[Outfit] uppercase'>Filter by price</h2>
      <hr className='w-10 h-1 my-2' />
      <div className='flex flex-col gap-4'>

        <div className='my-4'>
          <input type="range" className='w-full accent-[#FFD901] rounded-xl outline-none border-amber-400 cursor-pointer' />
          <div className='flex justify-between text-gray-600 text-sm sm:text-lg items-center gap-2 sm:gap-5'>
            <span>Price: $0 - $37</span>
          </div>
        </div>

        <div>
          <h2 className='font-bold mb-2 sm:mb-4 text-xl sm:text-2xl uppercase'>Filter by condition</h2>
          <hr className='w-10 h-1 my-4 sm:my-6' />
          <select className='w-full p-2 bg-gray-200 shadow-[rgba(0,0,0,0.67)] outline-none rounded mb-4 sm:mb-6'>
            <option>All</option>
            <option>New</option>
            <option>Used</option>
          </select>
        </div>

        <div>
          <h2 className='font-bold mb-2 sm:mb-4 text-xl sm:text-2xl uppercase'>Filter by brand</h2>
          <hr className='w-10 h-1 my-4 sm:my-6' />
          <select className='w-full p-2 rounded mb-4 sm:mb-6 bg-gray-200'>
            <option>All</option>
            <option>Canon</option>
            <option>Sony</option>
            <option>Nikon</option>
          </select>
        </div>

        <div>
          <h2 className='font-bold mb-2 sm:mb-4 text-xl sm:text-2xl uppercase'>Categories</h2>
          <hr className='w-10 h-1 my-4 sm:my-6' />
          {['Electronics', 'Clothing', 'Furniture', 'Books'].map((cat, index) => (
            <div key={index} className='text-lg sm:text-xl pb-2 border-b border-[#0000001a] mb-2 cursor-pointer hover:text-blue-700'>
              {cat}
            </div>
          ))}
        </div>

        <button className='mt-4 bg-[#0A3B87] text-white p-3 rounded-xl font-semibold hover:bg-[#072a63] transition'>
          Apply Filters
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
