import React from 'react'
import Electronic from "../assets/cards/electronics.svg"
import { useNavigate } from 'react-router-dom'
const Card = ({item}) => {
  const navigate=useNavigate()
  const handleClick = ()=>{
    navigate(`/categories?itemId=${item._id}`)
  }
  return (
    <div className='w-[15rem] h-[18rem] shadow-2xl p-6 z-10 cursor-pointer bg-[#FBFBFB] rounded-xl items-center flex flex-col gap-[3rem] font-[Roboto] font-bold' onClick={handleClick}>
        <img src={item.thumbnailImage} alt=""  className='h-[60%] '/>
        <h1 className='text-[1.55rem] text-[rgba(0,0,0,0.64)]'>
          {item.name}
        </h1>
    </div>
  )
}

export default Card