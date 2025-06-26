import React from 'react'
import arrow from '../assets/arrow.svg'
import Card from '../components/Card'
const FeaturedSection = () => {
  return (
    <div className='w-screen h-screen bg-[rgba(0,0,0,0.69)] rounded-tr-[5rem] rounded-tl-[5rem] p-20 relative'>
        <p className='text-lg text-[#FFE500]'>
            Whats New! 
        </p>
        <img src={arrow} alt="" className='absolute left-0 top-0'/>
        <div className='p-4'>
            <h1 className='text-[2.42rem] text-white font-[Outfit] font-bold'>
                Featured Items
            </h1>
            <p className='w-[40%] text-lg'>
            Our top course categories include Technology & Software Development, Business & Entrepreneurship, Data Science & Analytics, Creative Arts & Design, and Personal Development & Well-Being.
            </p>
        </div>
        <Card/>
    </div>
  )
}

export default FeaturedSection