import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-full md:w-[20rem] min-h-[70vh] bg-[rgba(217,217,217,0.39)] shadow-inner shadow-[rgba(0,0,0,0.79)]  p-6 font-[Poppins] '>
      <h2 className='text-2xl font-bold mb-4 font-[Outfit] uppercase'>Filter by price</h2>
      <hr className='w-10 h-1 my-2'/>
      <div className='flex flex-col gap-4'>

        <div className='my-4'>
          <input type="range" className='w-full accent-[#FFD901] rounded-xl outline-none border-amber-400' />
          <div className='flex justify-between w-full text-gray-600 text-lg items-center gap-5'>
            <span>Price:$0 - $37</span>
          </div>
        </div>

        <div>
          <h2 className='font-bold mb-4 text-2xl uppercase '>Filter By Condition</h2>
          <hr className='w-10 h-1 my-6'/>
          <select className='w-full p-2 bg-gray-200  shadow-[rgba(0,0,0,0.67)]  outline-none rounded mb-6'>
            <option>All</option>
            <option>New</option>
            <option>Used</option>
          </select>
        </div>

        <div>
          <h2 className='font-bold mb-4  text-2xl uppercase '>Filter By Brand</h2>
          <hr className='w-10 h-1 my-6'/>
          <select className='w-full p-2 rounded mb-6 bg-gray-200'>
            <option>All</option>
            <option>Canon</option>
            <option>Sony</option>
            <option>Nikon</option>
          </select>
        </div>
        <div>
        <h2 className='font-bold mb-4  text-2xl uppercase '>Categories</h2>
        <hr className='w-10 h-1 my-6'/>
        <div className='text-xl pb-2 border-b border-[#0000001a] mb-2'>Electronics</div>
        <div className='text-xl pb-2 border-b border-[#0000001a] mb-2'>Electronics</div>
        <div className='text-xl pb-2 border-b border-[#0000001a] mb-2'>Electronics</div>
        <div className='text-xl pb-2 border-b border-[#0000001a] mb-2'>Electronics</div>
      
        </div>
        <button className='mt-4 bg-[#0A3B87] text-white p-3 rounded-xl font-semibold'>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
