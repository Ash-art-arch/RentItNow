import React, { useContext, useState } from "react";
import searchIcon from "../assets/Navbar/search.png";
import cartIcon from "../assets/Navbar/Cart.png";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../providers/userProviders";
import Button from "./Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [showSearch, setShowSearch] = useState(false);
  const { user ,setUser} = useContext(userContext);
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
  const handleLogout=async()=>{
    const response = await fetch("http://localhost:5000/api/user/logout",{
      method:"post",
      credentials:"include"
    })
    if(response.ok){
      setUser(null)
      localStorage.removeItem("user")
    }
  }
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 text-white bg-[rgba(0,0,0,0.3)] absolute top-0 z-50 w-full">
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
        {
          user?.role==="Seller"?<a href="/dashboard">Dashboard</a>:""
        }
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
          {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {totalItems}
    </span>
  )}
        </Link>
        {
          user?<div className="w-10 h-10 rounded-full bg-[#ffffff]"></div>:<Button text={"Login"} style={firstStyle} Click={CLick}/>
} {
  user&&<Button text={"Logout"} style={firstStyle} Click={handleLogout}/>
}
      </div>

    </nav>
  );
};

export default Navbar;
