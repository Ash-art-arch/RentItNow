import React, { useContext, useState } from "react";
import searchIcon from "../assets/Navbar/search.png";
import cartIcon from "../assets/Navbar/Cart.png";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../providers/userProviders";
import Button from "./Button";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const firstStyle ={
    padding:' 0.25rem .75rem',
    backgroundColor:"#FF9F00",
    color:"white",
    borderRadius:".15rem"
  }
  console.log(user)
  const CLick = ()=>{
    navigate('/login')
  }
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 text-white bg-transparent absolute top-0 z-50 w-full">
      <div className="text-2xl font-bold">RentItNow</div>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="#services" className="hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
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
          <img src={cartIcon} alt="Cart" className="w-6 h-6" />
        </Link>
        {
          user?<div className="w-10 h-10 rounded-full bg-[#ffffff]"></div>:<Button text={"Login"} style={firstStyle} Click={CLick}/>
}
      </div>

    </nav>
  );
};

export default Navbar;
