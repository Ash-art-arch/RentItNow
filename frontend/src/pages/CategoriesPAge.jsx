import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import categoryImage from "../assets/category.svg"
import Sidebar from './Sidebar'
import CategoryCard from '../components/CategoryCard'
import { data } from 'react-router-dom'
const CategoriesPAge = () => {
  const [category, setCategory] = useState(null)
  useEffect(() => {
    const id = window.location.search.split("=")[1];
    console.log(id)
    const fetchCategory=async () => {
      const response = await fetch(`http://localhost:5000/api/categories/${id}`,{
        method:'get',
        headers: {
          "Content-Type": "application/json",
        }
      })
       const data =await response.json()
    setCategory(data)
      }
      if(id){
        fetchCategory()
      }
  },[])
  console.log(category)
  return (

    <div className='w-full h-full'>
    <Navbar/>
    <div className='w-full h-[40vh] bg-cover bg-no-repeat bg-center  flex items-center justify-center relative object-top' style={{backgroundImage:`url(${category?.headerImage||categoryImage})`}}>
    <div className='absolute  inset-0 bg-[rgba(0,0,0,0.67)] z-10'></div>
    <h1 className='text-3xl md:text-7xl text-white z-10 font-bold font-[Outfit]'>
      {category?category.name:"All Products"}  
    </h1>
    </div>
    <div className='w-full flex'>
    <Sidebar/>
    <div className='min-h-[70vh] p-10 w-full'>
        <div className='flex items-center justify-between w-full'>
            <span>Showing 59 items</span>
            <select name="" id="" className='bg-gray-200 p-4 pr-6 rounded'>
                <option value="">Default Sorting</option>
                <option value="">Sorting A-Z</option>
                <option value="">Sorting high prices first</option>
                <option value="">Sorting low prices first</option>
            </select>
        </div>
        <div className='p-10 grid grid-cols-3 gap-10'>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CategoriesPAge