import React from "react";

const TestimonialCard = () => {
  return (
    <div className="w-[16rem] md:w-[25rem] p-4 md:p-6 bg-white flex flex-col rounded-3xl shadow-xl">
      <p className="text-xs md:text-lg mb-4">
        "Enigma has completely transformed the way I learn! The personalized
        learning paths and interactive courses keep me engaged, and the
        real-world projects help me apply what I learn instantly."
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#eee]"></div>
        <h1 className="text-sm md:text-base font-medium">Joshua Weissman</h1>
      </div>
    </div>
  );
};

export default TestimonialCard;
