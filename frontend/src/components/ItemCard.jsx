import React from 'react';
import camera from '../assets/cards/camera.svg';
import Button from './Button';

const ItemCard = () => {
  const firstStyle = {
    border: "1px solid #0A3B87",
    padding: ".5rem",
    borderRadius: "1.2rem",
    color: "#0A3B87",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500"
  };

  return (
    <div className='w-[15rem] h-[20rem] md:w-[22rem] md:h-[30rem] bg-[#fbfbfb] rounded-xl px-2 pt-4 flex shadow-lg flex-col mt-10 items-center'>
      <img src={camera} alt="camera item" className='w-[10rem] mb-6 md:w-[20rem] object-cover' />

      <div className='flex items-center w-full justify-between md:pb-5 px-2'>
        <div className='flex items-center gap-1.5'>
          <div className='w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#b8b6b6]'></div>
          <p className='text-sm md:text-xl'>Ashish Saikia</p>
        </div>
        <div>
          <i className="text-lg md:text-2xl text-red-400 ri-heart-line"></i>
        </div>
      </div>

      <div className='w-full text-left text-2xl px-4 flex items-center justify-between border-b pb-4 border-[#ccc]'>
        <h1 className='text-lg md:text-2xl'>Canon 213D</h1>
        <div className='flex items-center text-sm md:text-lg gap-1 text-[#F8C315]'>
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
        </div>
      </div>

      <div className='w-full mt-4 flex  md:flex-row justify-between items-center gap-2 md:gap-4 p-2'>
        <Button text={"Rent It"} style={firstStyle} />
        <Button text={"Add to Cart"} style={firstStyle} />
      </div>
    </div>
  );
};

export default ItemCard;
