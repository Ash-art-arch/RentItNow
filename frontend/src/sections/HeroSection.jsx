import React from 'react'
import heroImage from "../assets/HeroImage.svg"
import Rent from "../assets/rent.svg"
import Button from '../components/Button'
export const HeroSection = () => {
    const firstStyle={
        width:"20rem",
        height:"5rem",
        border:"1px solid #FFE500",
        color:"#FFE500",
        backgroundColor:"rgba(255,255,255,0.3)",
        borderRadius:"1.2rem",
        fontSize:"1.2rem",
        boxShadow:"0 14px 10px rgba(0,0,0,0.3)"
    }
    const secondStyle={
        width:"20rem",
        height:"5rem",
        color:"black",
        fontWeight:"500",
        backgroundColor:"rgba(255,255,255)",
        borderRadius:"1.2rem",
        fontSize:"1.2rem",
        boxShadow:"0 14px 10px rgba(0,0,0,0.3)"
    }
  return (
    <div className='w-screen h-[100vh] bg-center bg-no-repeat bg-cover relative pt-12 flex items-center flex-col text-white font-[Petrona]' style={{backgroundImage:`url(${heroImage})`}}>
       <div className="w-30 h-30 bg-no-repeat absolute left-[11%] top-[18%] z-10" style={{backgroundImage:`url(${Rent})`}}></div>
       <div className="w-30 h-30 bg-no-repeat absolute left-[59%] bottom-[11%] z-10" style={{backgroundImage:`url(${Rent})`}}></div>
       <div className="w-30 h-30 bg-no-repeat absolute left-[30%] bottom-[38%] z-10 scale-[1.3]" style={{backgroundImage:`url(${Rent})`}}></div>
        <div className='w-screen h-[100vh] top-0 bg-[#24242477] absolute '>
        </div>
        <div className='z-10 flex items-center flex-col '>
            <h1 className='text-[4rem] w-[70%] text-center font-bold text-shadow-lg'>Smart Living Starts with Smart Renting</h1>
            <h4 className='text-shadow-sm text-xl'>
            Rent anything from cameras to couches. No clutter. No commitment
            </h4>
            <div className='mt-5 flex gap-[4rem]'>
                <Button text={"Browse Items"} style={firstStyle} />
                <Button text={"List Items"} style={secondStyle} />
            </div>

        </div>
        <i className="ri-arrow-down-line w-[2rem] h-[2rem] text-5xl absolute bottom-10 animate-bounce" ></i>
    </div>
  )
}
export default HeroSection