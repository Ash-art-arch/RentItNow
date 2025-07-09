import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.svg';
import ItemCard from '../components/ItemCard';

const FeaturedSection = () => {
  const [items,setItems]  = useState([])
  const [filteredItems,setFilteredItem] = useState([])
  useEffect(()=>{
    const fetchItems = async()=>{
      const response = await fetch("http://localhost:5000/api/items",{
        method:"GET",
        headers:{
          "content-type":"Application/json"
        }
      })
      const data =await response.json()
      setItems(data)
      setFilteredItem(data.filter(it => it.ratings > 3))
    }
    
    fetchItems()
  },[])
 
  console.log("Items=>",filteredItems)
  return (
    <div className="w-full min-h-screen bg-[rgba(0,0,0,0.69)] rounded-t-3xl md:rounded-t-[5rem] px-4 md:px-20 py-10 md:py-20 relative">
      
      <p className="text-sm md:text-lg text-[#FFE500] mb-2">What's New!</p>
      <img src={arrow} alt="Arrow Icon" className="absolute left-4 top-4 w-6 md:w-10" />

      <div className="mb-10">
        <h1 className="text-2xl md:text-4xl text-white font-[Outfit] font-bold mb-4">
          Featured Items
        </h1>
        <p className="w-full md:w-2/5 text-sm md:text-lg text-white">
          Discover our top rental items – from professional cameras and audio gear to bikes, tools, and more for your daily needs and creative projects.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {
          filteredItems&&filteredItems.map((item)=>{
            return(<ItemCard item={item} key={item._id}/>)
          })
        }
      </div>
    </div>
  );
};

export default FeaturedSection;
