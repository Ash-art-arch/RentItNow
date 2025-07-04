import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const CategoryCard = ({ item }) => {
  const firstStyle = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#262626",
    color: "white",
    borderRadius: ".5rem",
  };

  const priceFormatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price);

  return (
    <div className='max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'>
      <Link to={`/productpage?id=${item._id}`} aria-label={`View details of ${item.name}`}>
        <div className='relative w-full overflow-hidden'>
          <img
            src={item.images[0] || '/fallback.png'}
            alt={item.name}
            className='object-cover w-full h-64 transition-transform duration-300 hover:scale-110'
          />
        </div>
      </Link>

      <Link
        to={`/productpage?id=${item._id}`}
        className='block text-lg  my-2 line-clamp-2 px-4 font-semibold capitalize hover:text-blue-600 transition'
        aria-label={`View details of ${item.name}`}
      >
        {item.name}
      </Link>

      <div className='flex items-center justify-between mt-2 px-4 pb-4 gap-10'>
        <p className='text-gray-800 font-medium'>{priceFormatted}</p>
        <Button text={"Add To Cart"} style={firstStyle} />
      </div>
    </div>
  );
};

export default CategoryCard;
