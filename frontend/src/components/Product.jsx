import React, { useState } from "react";
import head1 from "/src/assets/product/headphone.avif";
import head2 from "/src/assets/product/headphones2.avif";
import head3 from "/src/assets/product/headphones3.avif";
import head4 from "/src/assets/product/headphones4.avif";
import { Heart, HeartOff, Star, StarHalf, StarOff } from "lucide-react";
import box from "/src/assets/product/box.png";
import coupon from "/src/assets/product/coupon.png";
import calendar from "/src/assets/product/calendar.png";
import delivery from "/src/assets/product/delivery-truck.png";

const Rating = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) =>
      i + 1 <= Math.floor(rating) ? (
        <Star key={i} className="w-4 h-4 fill-yellow-400" />
      ) : rating % 1 !== 0 && i < rating ? (
        <StarHalf key={i} className="w-4 h-4 fill-yellow-400" />
      ) : (
        <StarOff key={i} className="w-4 h-4 text-gray-300" />
      )
    )}
  </div>
);

const Product = () => {
  const images = [head1, head2, head3, head4];
  const [mainImage, setMainImage] = useState(images[0]);
  const [liked, setLiked] = useState(false);
  const rating = 4.5;

  const recommendations = [
    {
      name: "Polo with Contrast Trims",
      price: "$212",
      old: "$242",
      discount: "20%",
      img: "/src/assets/product/h-1.avif",
      rating: 4.0,
    },
    {
      name: "Gradient Graphic T-shirt",
      price: "$145",
      img: "/src/assets/product/h-2.avif",
      rating: 3.5,
    },
    {
      name: "Polo with Tipping Details",
      price: "$180",
      img: "/src/assets/product/h-4.avif",
      rating: 4.5,
    },
    {
      name: "Striped Jacket",
      price: "$120",
      old: "$240",
      discount: "50%",
      img: "/src/assets/product/h-5.avif",
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <div className="mt-5 ml-10 rounded-2xl overflow-hidden shadow-md">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-[700px] object-cover"
            />
          </div>
          <div className="flex gap-3 mt-2 ml-10">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-xl border-2 cursor-pointer transition duration-200 ${mainImage === img ? "border-black" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">Electronics</p>
          <h1 className="text-3xl font-semibold mb-4">Boat Headphones</h1>
          <p className="text-xl font-bold text-gray-800 mb-2">$24.99</p>
          <p className="text-sm text-gray-500 mb-4">Order in 02h 30m 25s to get next day delivery</p>

          <div className="flex items-center gap-1 mb-4">
            <Rating rating={rating} />
            <span className="ml-2 text-sm text-gray-600">({rating})</span>
          </div>

          <div className="flex justify-around border rounded-2xl py-9">
            <div>
              <h5 className="font-semibold">Start Date</h5>
              <input type="date" className="border rounded-2xl py-2 px-2" />
            </div>
            <div>
              <h5 className="font-semibold">End Date</h5>
              <input type="date" className="border rounded-2xl py-2 px-2" />
            </div>
          </div>

          <div className="flex gap-4">
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-medium w-full hover:bg-gray-800">
              Add to Cart
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="mt-6 p-3 border border-gray-300 rounded-full hover:bg-gray-100"
              title="Add to Wishlist"
            >
              {liked ? <Heart className="text-red-500 fill-red-500" /> : <Heart className="text-gray-500" />}
            </button>
          </div>

          <div className="mt-8 w-full py-9 rounded-2xl border px-4">
            <h3 className="font-semibold text-lg mb-2">Description & Fit</h3>
            <p className="text-gray-600">
              Loose-fit sweatshirt hoodie in medium-weight cotton-blend fabric with a generous,
              but not oversized silhouette. Jersey-lined drawstring hood, dropped shoulders,
              long sleeves, and a kangaroo pocket.
            </p>
          </div>

          <div className="mt-6 border py-7 rounded-2xl px-4">
            <h2 className="font-bold text-lg mb-5">Shipping</h2>
            <div className="flex justify-around">
              <ul className="text-gray-600 space-y-6 text-sm">
                <li className="flex items-center gap-2"><img src={coupon} className="w-6 h-6" />Disc 50%</li>
                <li className="flex items-center gap-2"><img src={box} className="w-6 h-6" />Regular Package</li>
              </ul>
              <ul className="text-gray-600 space-y-6 text-sm">
                <li className="flex items-center gap-2"><img src={calendar} className="w-6 h-6" />3-4 working days</li>
                <li className="flex items-center gap-2"><img src={delivery} className="w-6 h-6" />Expected: 12–13 October</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 mb-10 ml-10 mr-10">
        <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendations.map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
              <div className="h-60 flex items-center justify-center bg-white rounded-xl overflow-hidden mb-4">
                <img src={item.img} alt={item.name} className="h-60 w-full object-cover" />
              </div>
              <h3 className="font-medium text-base text-gray-800">{item.name}</h3>
              <div className="mt-1">
                <Rating rating={item.rating} />
              </div>
              <div className="mt-2">
                <span className="font-bold text-black">{item.price}</span>
                {item.old && (
                  <>
                    <span className="line-through text-sm ml-2 text-gray-400">{item.old}</span>
                    <span className="ml-2 text-red-500 text-sm font-semibold">-{item.discount}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
