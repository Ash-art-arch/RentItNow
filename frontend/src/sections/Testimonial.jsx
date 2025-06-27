import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Testimonial = () => {
  return (
    <div className="w-full bg-[rgba(0,0,0,0.71)] py-10 px-4 md:px-10 flex flex-col items-center gap-10 md:gap-20">
      <h1 className="text-3xl md:text-4xl text-white font-bold font-[Outfit] tracking-widest text-center">
        Customer Reviews
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
