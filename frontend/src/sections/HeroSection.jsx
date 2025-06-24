import React from 'react'
import heroImage from "../assets/HeroImage.svg"
import Rent from "../assets/rent.svg"
export const HeroSection = () => {
  return (
    <div className='w-screen h-[100vh] bg-center bg-no-repeat bg-cover relative pt-12 flex items-center flex-col text-white font-[Petrona]' style={{backgroundImage:`url(${heroImage})`}}>
       <div className="w-full h-full bg-no-repeat absolute left-[11%] top-[18%] z-10" style={{backgroundImage:`url(${Rent})`}}></div>
        <div className='w-screen h-[100vh] top-0 bg-[#24242477] absolute '>
        </div>
        <div className='z-10 flex items-center flex-col '>
            <h1 className='text-[4rem] w-[70%] text-center font-bold'>Smart Living Starts with Smart Renting</h1>
            <h4>
            Rent anything from cameras to couches. No clutter. No commitment
            </h4>
        </div>
    </div>
  )
}
export default HeroSection