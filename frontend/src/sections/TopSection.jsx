import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

const TopSection = () => {
  const firstStyle={
    border:"1px solid rgba(0,0,0,0.5)",
    padding:"1.2rem",
    borderRadius:"1.2rem"
  }
  return (
    <div className='w-full h-[80vh] p-20 font-[Outfit] select-none '>
       <div className='flex w-full justify-between'>
       <h1 className='text-[2.42rem] font-bold'>Top category</h1> 
       <Button text={"All Categories"} style={firstStyle}/>
       </div> 
       <div className='text-xl w-[45%] mt-8 color-[rgba(0,0,0,0.59)]'>
       Our top course categories include Technology & Software Development, Business & Entrepreneurship, Data Science & Analytics, Creative Arts & Design, and Personal Development & Well-Being.
       </div>
       <div className='mt-20'>
        <Card/>
       </div>
    </div>
  )
}

export default TopSection