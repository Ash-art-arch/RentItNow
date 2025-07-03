import React, { useState } from "react";
import head1 from "/src/assets/product/headphone.avif";
import head2 from "/src/assets/product/headphones2.avif";
import head3 from "/src/assets/product/headphones3.avif";
import head4 from "/src/assets/product/headphones4.avif";
import { Heart, HeartOff } from "lucide-react";
import { Star, StarHalf, StarOff } from "lucide-react";
import box from "/src/assets/product/box.png"
import coupon from "/src/assets/product/coupon.png"
import calendar from "/src/assets/product/calendar.png"
import delivery from "/src/assets/product/delivery-truck.png"
<<<<<<< HEAD
import Rating from "../components/Rating"
=======
>>>>>>> 0284b99 ( productPage submit)


const Product = () => {
  const images = [head1, head2, head3, head4];
  const [mainImage, setMainImage] = useState(images[0]);
  const [liked, setLiked] = useState(false);
<<<<<<< HEAD
=======
  const rating = 5;
>>>>>>> 0284b99 ( productPage submit)

  return (
    <div>
      <div className=" min-h-screen bg-white p-8 flex flex-col lg:flex-row gap-10">
        <div>
          <div className=" mt-5 ml-10 rounded-2xl overflow-hidden shadow-md">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-[700px] object-cover"
            />
          </div>


          <div className="flex gap-3 mt-2 ml-10 ">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setMainImage(img)}
                className={`w-35 h-35 object-cover rounded-xl border-2 cursor-pointer transition duration-200 ${mainImage === img ? "border-none" : "border-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">Electronics</p>
          <h1 className="text-3xl font-semibold mb-4">Boat-Hedphones</h1>
          <p className="text-xl font-bold text-gray-800 mb-2">$24.99</p>
          <p className="text-sm text-gray-500 mb-4">Order in 02h 30m 25s to get next day delivery</p>


<<<<<<< HEAD
          <div className="mb-4">
            <Rating rating={4.5} />
          </div>

=======
          <div className="flex items-center gap-1 mb-4 ">

            {[...Array(5)].map((_, index) => {
              const full = index + 1 <= Math.floor(rating);
              const half = index + 0.5 === rating;

              return full ? (
                <Star key={index} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
              ) : half ? (
                <StarHalf key={index} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
              ) : (
                <StarOff key={index} className="text-gray-300 w-5 h-5" />
              );
            })}
            <span className="ml-2 text-sm text-gray-600">({rating})</span>
          </div>
>>>>>>> 0284b99 ( productPage submit)

          <div className="flex justify-around border-1 rounded-2xl py-9">

            <div>
              <h5 className="font-semibold">Start Date</h5>
              <input type="date" className="border-1 rounded-2xl py-2 px-2" />
            </div>
            <div>
              <h5 className="font-semibold">End Date</h5>
              <input type="date" className="border-1 rounded-2xl py-2 px-2" />
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
              {liked ? (
                <Heart className="text-red-500 fill-red-500" />
              ) : (
                <Heart className="text-gray-500" />
              )}
            </button>

          </div>

          <div className="mt-8 h-auto w-full py-9 rounded-2xl border-1 "  >
            <h3 className="font-semibold text-lg mb-2 ml-4">Description & Fit</h3>
            <p className="text-gray-600 ml-4">
              Loose-fit sweatshirt hoodie in medium-weight cotton-blend fabric with a generous,
              but not oversized silhouette. Jersey-lined drawstring hood, dropped shoulders,
              long sleeves, and a kangaroo pocket.
            </p>
          </div>


          <div className="mt-6 border-1 py-7 rounded-2xl ">
            <h2 className="font-bold  text-lg ml-10 mb-5">Shipping</h2>
            <div className="flex justify-around">
              <ul className="text-gray-600 space-y-10 text-sm">
                <div className="flex"><div className="h-10 w-10 flex gap-2 text-[10px] text-gray-500 "><img src={coupon} alt="box" />Discount</div>
                  <div className="mt-3 ml-2 font-semibold">Disc 50%</div></div>
                <div className="flex"><div className="h-10 w-10 flex gap-2 text-[10px] text-gray-500 "><img src={box} alt="box" />Package</div>
                  <div className="mt-3 ml-2 font-semibold">Regular Pacakage</div></div>
              </ul>
              <ul className="text-gray-600 space-y-10 text-sm">
                <div className="flex"><div className="h-10 w-10 flex gap-2 text-[10px] text-gray-500 "><img src={calendar} alt="box" />Time</div>
                  <div className="mt-3 ml-2 font-semibold">3-4 working days</div></div>
                <div className="flex items-center gap-3">
                  <img src={delivery} alt="Expected Date" className="h-10 w-10" />
                  <div>
                    <p className="text-[10px] text-gray-500">Expected Date</p>
                    <p className="font-semibold">12–13 October</p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className="mt-12 w-full  rounded-2xl p-6 mb-10 ">
=======
      <div className="mt-12 w-full border rounded-2xl p-6 mb-10">
>>>>>>> 0284b99 ( productPage submit)
=======
      <div className="mt-12 w-full  rounded-2xl p-6 mb-10 ">
>>>>>>> 9c5f0c4 ( productPage submit)
        <h2 className="text-2xl font-semibold mb-6">Rating & Reviews</h2>
        <div className="flex  lg:flex-row items-start lg:items-center gap-10 ">

          <div className="flex-1 flex-row items-center text-center">
            <div className="flex justify-center">
              <span className="text-6xl font-bold text-black">4.5</span>
              <p className="text-sm text-gray-500  mt-10">/ 5</p>
            </div>
            <p className="text-xs text-gray-400">(50 New Reviews)</p>
            <div className="mt-4 space-y-1 text-sm text-gray-500">
              <div className="flex flex-row">
                <p>⭐</p>
                <p>5</p>
                <div className=" ml-3 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-40 mt-1">
                  <div className="bg-black h-2.5 rounded-full dark:bg-black" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="flex flex-row">
                <p>⭐</p>
                <p>4</p>
                <div className=" ml-3 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-40 mt-1">
                  <div className="bg-black h-2.5 rounded-full dark:bg-black" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="flex flex-row">
                <p>⭐</p>
                <p>3</p>
                <div className=" ml-3 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-40 mt-1">
                  <div className="bg-black h-2.5 rounded-full dark:bg-black" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div className="flex flex-row">
                <p>⭐</p>
                <p>2</p>
                <div className=" ml-3 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-40 mt-1">
                  <div className="bg-black h-2.5 rounded-full dark:bg-black" style={{ width: "10%" }}></div>
                </div>
              </div>
              <div className="flex flex-row">
                <p>⭐</p>
                <p>1</p>
                <div className=" ml-3 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-40 mt-1">
                  <div className="bg-black h-2.5 rounded-full dark:bg-black" style={{ width: "1%" }}></div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col flex-1/12 gap-4">
            <div className="flex-1/12  rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="reviewer"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">Alex Mathio</p>
<<<<<<< HEAD
                    <div className="mt-1">
                      <Rating rating={5} />
                    </div>

=======
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
>>>>>>> 0284b99 ( productPage submit)
                  </div>
                </div>
                <p className="text-xs text-gray-400">13 Oct 2024</p>
              </div>
              <p className="text-gray-600 text-sm">
                "NextGen's dedication to sustainability and ethical practices resonates
                strongly with today’s consumers, positioning the brand as a responsible choice
                in the fashion world."
              </p>
            </div>
            <div className="flex-1/12  rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="reviewer"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">Alex Mathio</p>
<<<<<<< HEAD
                    <div className="mt-1">
                      <Rating rating={5} />
                    </div>

=======
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
>>>>>>> 0284b99 ( productPage submit)
                  </div>
                </div>
                <p className="text-xs text-gray-400">13 Oct 2024</p>
              </div>
              <p className="text-gray-600 text-sm">
                "NextGen's dedication to sustainability and ethical practices resonates
                strongly with today’s consumers, positioning the brand as a responsible choice
                in the fashion world."
              </p>
            </div>
          </div>
        </div>
      </div>


<<<<<<< HEAD
      <div className="mt-16 mb-10 ml-10 mr-10">
        <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {[
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
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition">
              <div className="h-60 flex items-center justify-center bg-white rounded-xl overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[500px w-full]"
                />


              </div>

              <h3 className="font-medium text-base text-gray-800">{item.name}</h3>

              <div className="mt-1">
                <Rating rating={item.rating} />
              </div>

              <div className="mt-2">
                <span className="font-bold text-black">{item.price}</span>
                {item.old && (
                  <>
                    <span className="line-through text-sm ml-2 text-gray-400">
                      {item.old}
                    </span>
                    <span className="ml-2 text-red-500 text-sm font-semibold">
                      -{item.discount}
                    </span>
                  </>
                )}
              </div>
            </div>

          ))}
        </div>
      </div>
=======
<div className="mt-16 mb-10 ml-10 mr-10">
  <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
    {[
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
    ].map((item, i) => (
    <div key={i} className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition">
 <div className="h-60 flex items-center justify-center bg-white rounded-xl overflow-hidden mb-4">
  <img
    src={item.img}
    alt={item.name}
    className="h-[500px w-full]"
  />


  </div>

  <h3 className="font-medium text-base text-gray-800">{item.name}</h3>

  <div className="flex items-center gap-1 mt-1">
    {[...Array(5)].map((_, j) =>
      j + 1 <= Math.floor(item.rating) ? (
        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ) : item.rating % 1 !== 0 && j < item.rating ? (
        <StarHalf key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ) : (
        <StarOff key={j} className="w-4 h-4 text-gray-300" />
      )
    )}
    <span className="text-sm text-gray-500 ml-1">({item.rating})</span>
  </div>

  <div className="mt-2">
    <span className="font-bold text-black">{item.price}</span>
    {item.old && (
      <>
        <span className="line-through text-sm ml-2 text-gray-400">
          {item.old}
        </span>
        <span className="ml-2 text-red-500 text-sm font-semibold">
          -{item.discount}
        </span>
      </>
    )}
  </div>
</div>

    ))}
  </div>
</div>
>>>>>>> 0284b99 ( productPage submit)


    </div>

  );
};

export default Product;