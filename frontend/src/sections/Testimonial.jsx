import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Testimonial = () => {
  return (
    <div className="w-full shadow-[inset_3px_3px_6px_0px_rgb(204,219,232),_inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5)] py-10 px-4 md:px-10 flex flex-col items-center gap-10 md:gap-20 mb-">
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
