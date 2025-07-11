import React, { useState } from 'react';
import Button from './Button';
import Rating from './Rating';
import {useDispatch} from 'react-redux';
import { addToCart } from '../Features/cartReducer';
import { useNavigate } from 'react-router-dom';
import {FaHeart,FaRegHeart} from 'react-icons/fa'
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isWishlisted,setIsWishlisted] = useState(false)
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: item._id,                    
      title: item.name,
      size: "Default Size",              
      color: "Default Color",            
      price: item.price,
      image: item.images[0],
    }));
  };
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
    <div className="bg-white rounded-xl shadow-md w-[400px] overflow-hidden ">
    <div className='h-60 w-[350px] justify-center '>
  <img
          src={item.images[0]}
          alt={item.name}
          className='w-full h-60 object-cover transition-transform duration-300 hover:scale-110 ml-6 mt-3 rounded-2xl shadow-xl'
          onClick={handleCardClick}
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
  
  <div className="p-4">
    {/* Profile & Like */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div>
          <p className="text-sm font-semibold">{item.owner.name}</p>
        
        </div>
      </div>
     {/* Rating */}
    <div className="flex items-center gap-1 text-yellow-500 mb-3">
    <Rating rating={item.ratings} size={".4rem"} />
      
    </div>

    </div>

    {/* Title */}
    <h3 className="text-sm font-bold mb-2">
      {item.name}

    </h3>
    <div className='text-sm text-gray-500 mb-2'>
      {item.description.slice(0, 100)}
    </div>
    <hr className='mt-1'/>

    {/* Price */}
    <div className="flex items-center justify-between mb-3 mt-2">
      <span className="text-lg font-semibold">${item.price}</span>
      <span className="text-sm text-gray-500">per day</span>  
    </div>
  

   
    {/* Buy Button */}
     <div className="flex flex-col sm:flex-row justify-between mt-5 ">
    <Button text="Rent It"  style={firstStyle} />
    <Button text="Add to Cart" style={firstStyle} Click={handleAddToCart} />
  </div>
  </div>
</div>

  );
};

export default ItemCard;
