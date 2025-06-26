import React, { useState } from 'react';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}>
      <div className="text-2xl font-bold">RentIt</div>

      <div className="space-x-6">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>

      <div className="flex items-center space-x-4">
        {showSearch && (
          <input
            type="text"
            className="border border-gray-300 rounded-3xl px-4 py-1 "
            placeholder="Search"
          />
        )}
        <img
          src="./src/assets/Navbar/search.png"
          alt="search"
          className="w-5 h-5 cursor-pointer"
          onClick={toggleSearch}
        />
        <img
          src="./src/assets/Navbar/Cart.png"
          alt="Cart"
          className="w-6 h-6"
        />
      </div>
    </nav>
  );
};

export default Navbar