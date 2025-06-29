import React from 'react'
import Electronic from "../assets/cards/electronics.svg"
const Card = () => {
  return (
    <div className='w-[15rem] h-[18rem] shadow-2xl p-6 z-10 bg-[#FBFBFB] rounded-xl items-center flex flex-col gap-[3rem] font-[Roboto] font-bold'>
        <img src={Electronic} alt=""  className='h-[60%] '/>
        <h1 className='text-[1.55rem] text-[rgba(0,0,0,0.64)]'>
          Electronics
        </h1>
    </div>
  )
}

export default Card