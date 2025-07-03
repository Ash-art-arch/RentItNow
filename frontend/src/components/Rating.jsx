import React from "react";
import { Star, StarHalf, StarOff } from "lucide-react";

const Rating = ({ rating, size = 4 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const full = index + 1 <= Math.floor(rating);
        const half = index + 0.5 === rating;
        const sizeClass = `w-${size} h-${size}`;

        return full ? (
          <Star key={index} className={`text-yellow-400 fill-yellow-400 ${sizeClass}`} />
        ) : half ? (
          <StarHalf key={index} className={`text-yellow-400 fill-yellow-400 ${sizeClass}`} />
        ) : (
          <StarOff key={index} className={`text-gray-300 ${sizeClass}`} />
        );
      })}
      <span className="ml-1 text-sm text-gray-600">({rating})</span>
    </div>
  );
};
export default Rating;
