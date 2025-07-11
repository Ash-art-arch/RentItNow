import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartReducer';

const CategoryCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding to cart:", item);
    dispatch(addToCart({
      id: item._id,
      title: item.name,
      size: "Default Size",
      color: "Default Color",
      price: item.price,
      image: item.images[0],
    }));
  };

  const priceFormatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price);

  return (
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'>
      <Link to={`/productpage?id=${item._id}`} aria-label={`View details of ${item.name}`}>
        <div className='relative w-full overflow-hidden'>
          <img
            src={item.images[0] || '/fallback.png'}
            alt={item.name}
            className='object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-300 hover:scale-110'
          />
        </div>
      </Link>

      <Link
        to={`/productpage?id=${item._id}`}
        className='block text-base sm:text-lg my-2 line-clamp-2 px-4 font-semibold capitalize hover:text-blue-600 transition'
        aria-label={`View details of ${item.name}`}
      >
        {item.name}
      </Link>

      <div className='flex flex-col sm:flex-row sm:items-center justify-between mt-2 px-4 pb-4 gap-3'>
        <p className='text-gray-800 font-medium text-base sm:text-lg'>{priceFormatted}</p>
        <Button
          text="Add To Cart"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#262626",
            color: "white",
            borderRadius: ".5rem",
            fontSize: "0.875rem",
          }}
          Click={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
