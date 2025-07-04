import React, { useState } from 'react';
import Button from './Button';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';
import {FaHeart,FaRegHeart} from 'react-icons/fa'
const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const [isWishlisted,setIsWishlisted] = useState(false)
  const handleCardClick = () => {
    navigate(`/productpage?id=${item._id}`);
  };
  const toggleWishlist=()=>{
    setIsWishlisted(!isWishlisted)
  }
  const firstStyle = {
    border: "1px solid #0A3B87",
    padding: ".5rem 1.2rem",
    borderRadius: "1.2rem",
    color: "#0A3B87",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500"
  };

  return (
    <div className='w-xs mx-auto bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03]'>
      <div
        className='relative overflow-hidden cursor-pointer'
      >
        <img
          src={item.images[0]}
          alt={item.name}
          className='w-full h-64 object-cover transition-transform duration-300 hover:scale-110'
        />
        <div>
        <button
            onClick={toggleWishlist}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? (
              <FaHeart className="w-5 h-5 text-red-500" />
            ) : (
              <FaRegHeart className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div className='flex items-center w-full justify-between md:pb-5 px-2 mt-2'>
        <div className='flex items-center gap-2'>
          <div className='w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#b8b6b6]'></div>
          <p className='text-sm md:text-sm'>{item.owner.name}</p>
        </div>
        <Rating rating={item.ratings} size={".4rem"}/>
      
      </div>

      <div className='w-full text-left text-2xl px-4 flex items-center justify-between border-b pb-4 border-[#ccc]'>
        <h1 className='text-lg md:font-bold uppercase truncate'>{item.name}</h1>
      </div>
      <p className="text-sm px-2 text-gray-600 mb-4 line-clamp-3">
            {item.description}
      </p>
      <div className='w-full mt-4 flex flex-row md:flex-row  justify-between items-center gap-2 md:gap-4 p-2'>
        <Button text={"Rent It"} style={firstStyle} />
        <Button text={"Add to Cart"} style={firstStyle} />
      </div>
    </div>
  );
};

export default ItemCard;
