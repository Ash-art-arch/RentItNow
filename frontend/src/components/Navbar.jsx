import React, { useState } from 'react';
import searchIcon from '../assets/Navbar/search.png';
import cartIcon from '../assets/Navbar/Cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 text-white bg-transparent absolute top-0 z-50 w-full">
      <div className="text-2xl font-bold">RentItNow</div>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>

      <div className="flex items-center space-x-4">
        {showSearch && (
          <input
            type="text"
            className="border border-gray-300 rounded-3xl px-4 py-1 w-32 sm:w-48 md:w-auto text-black"
            placeholder="Search"
          />
        )}
        <img
          src={searchIcon}
          alt="Search"
          className="w-5 h-5 cursor-pointer"
          onClick={toggleSearch}
        />

<Link to="/cart">
  <img
    src={cartIcon}
    alt="Cart"
    className="w-6 h-6"
  />
</Link>


</div>
    </nav>
  );
};

export default Navbar;
