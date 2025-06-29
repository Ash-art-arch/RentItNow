import React from 'react';
import heroImage from "../assets/HeroImage.svg";
import Button from '../components/Button';

export const HeroSection = () => {
  const firstStyle = {
    width: "16rem",
    height: "4rem",
    border: "1px solid #FFE500",
    color: "#FFE500",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "1.2rem",
    fontSize: "1rem",
    boxShadow: "0 14px 10px rgba(0,0,0,0.3)",
    cursor: "pointer",
  };
  const secondStyle = {
    width: "16rem",
    height: "4rem",
    color: "black",
    fontWeight: "500",
    backgroundColor: "rgba(255,255,255)",
    borderRadius: "1.2rem",
    fontSize: "1rem",
    boxShadow: "0 14px 10px rgba(0,0,0,0.3)",
    cursor: "pointer",
  };

  return (
    <div
      className="w-full h-screen bg-center bg-no-repeat bg-cover relative flex items-center justify-center md:items-start text-white font-[Petrona]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.53)]"></div>

      <div className="relative z-10 flex flex-col items-center mt-20 md:mt-30 px-4  text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
          Smart Living Starts with Smart Renting
        </h1>
        <h4 className="mt-4 text-md md:text-lg lg:text-xl max-w-xl">
          Rent anything from cameras to couches. No clutter. No commitment.
        </h4>

        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Button text={"Browse Items"} style={firstStyle} />
          <Button text={"List Items"} style={secondStyle} />
        </div>
      </div>

      <i className="ri-arrow-down-line text-4xl absolute bottom-10 animate-bounce"></i>
    </div>
  );
};

export default HeroSection;
