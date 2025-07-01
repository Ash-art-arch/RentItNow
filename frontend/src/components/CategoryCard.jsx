import React from 'react'
import Button from './Button'

const CategoryCard = () => {
const firstStyle = {
    padding:".75rem",
    backgroundColor:"#262626",
    color:"white",
    borderRadius:".5rem"
}
  return (
    <div className='w-[70%]'>
        <div className='w-full h-[20rem] border-2 border-[#ccc]'></div>
        <h1 className='text-2xl mt-4 pb-4 border-b-2 border-[#eee]'>Hammer</h1>
        <div className='flex items-center justify-between mt-2'>
            <p>Rs40/day</p>
            <Button text={"Add To Cart"}  style={firstStyle}/>
        </div>
    </div>
  )
}

export default CategoryCard