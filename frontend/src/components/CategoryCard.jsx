import React from 'react'
import Button from './Button'

const CategoryCard = ({item}) => {
const firstStyle = {
    padding:".75rem",
    backgroundColor:"#262626",
    color:"white",
    borderRadius:".5rem"
}
  return (
    <div className='w-[60%]'>
        <div className='w-[100%] h-[20rem] border-2 p-4 border-[#ccc] object-contain flex items-center justify-center'>
          <img src={item.images[0]} alt="" className='w-full h-[100%] object-contain' />
        </div>
        <h1 className='text-2xl mt-4 pb-4 border-b-2 border-[#eee] capitalize'>{item.name}</h1>
        <div className='flex items-center justify-between mt-2'>
            <p>Rs{item.price}</p>
            <Button text={"Add To Cart"}  style={firstStyle}/>
        </div>
    </div>
  )
}

export default CategoryCard