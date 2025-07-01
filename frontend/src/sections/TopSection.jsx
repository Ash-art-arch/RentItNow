import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const TopSection = () => {
  const firstStyle = {
    border: "1px solid rgba(0,0,0,0.5)",
    padding: "1.2rem",
    borderRadius: "1.2rem",
    cursor: "pointer",
  };

  return (
    <div className="w-full py-10 px-4 md:px-20 font-[Outfit] select-none">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl md:text-3xl font-bold">Top Categories</h1>
        <Button text={"All Categories"} style={firstStyle} />
      </div>

      <p className="text-sm md:text-xl w-full md:w-1/2 mt-8 text-[rgba(0,0,0,0.59)]">
        Explore our top rental categories, including Cameras & Photography, Electronics & Gadgets, Home Appliances, Furniture, and Vehicles to meet all your needs with flexibility and affordability.
      </p>

      <div className="mt-10 md:mt-20 w-full flex flex-wrap gap-20 justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TopSection;
