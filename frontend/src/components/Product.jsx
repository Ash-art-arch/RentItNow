import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Star, StarHalf, StarOff } from "lucide-react";
import box from "/src/assets/product/box.png";
import coupon from "/src/assets/product/coupon.png";
import calendar from "/src/assets/product/calendar.png";
import delivery from "/src/assets/product/delivery-truck.png";
import Rating from "../components/Rating";
import Footer from "./Footer";
import Loader from "./Loader";import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cartReducer"; 

const Product = () => {
  const [mainImage, setMainImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const rating = 5;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    const id = window.location.search.split("=")[1];
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:5000/api/items/${id}`);
      const data = await response.json();
      setItem(data);
      setMainImage(data.images[0]);
      setLoading(false);
    };
    fetchItems();
  }, []);

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

  if (loading) {
    return (
      <div className='w-screen h-screen flex items-center justify-center bg-black'>
      <Loader/>

    </div>
    );
  }

  function showPopup(message) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = "fixed top-100 right-160 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 transition-all duration-300 transform -translate-y-2 z-[9999]";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.remove("opacity-0", "-translate-y-2");
    popup.classList.add("opacity-100", "translate-y-0");
  }, 10);

  setTimeout(() => {
    popup.classList.remove("opacity-100", "translate-y-0");
    popup.classList.add("opacity-0", "-translate-y-2");
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}
const handleAddToCart = async () => {
  if (!item) return;
    
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const startDate = dateInputs[0].value;
  const endDate = dateInputs[1].value;
   if (!startDate || !endDate) {
    alert("Please select both start and end dates.");
    return;
  }

  try {
    const res = await fetch(`http://localhost:5000/api/items/availability?itemId=${item._id}&startDate=${startDate}&endDate=${endDate}`);
    const data = await res.json();

    if (!data.available) {
      showPopup(`Sorry! Only ${data.availableQty} unit(s) available during the selected dates.`);
      return;
    }
  dispatch(addToCart({
    id: item._id,
    title: item.name,
    price: item.price,
    image: item.images[0],
    color: "Color: Default", 
    size: "Size: Default", 
     quantity: 1, // default quantity
      startDate,
      endDate  
}));
 alert("Item added to cart!");
  } catch (err) {
    console.error("Error checking availability:", err.message);
    alert("Something went wrong while checking availability.");
  }
};
  return (
    <>
    <div className="mt-12">
      {/* Product Images and Details */}
      <div className="min-h-screen bg-white p-8 flex flex-col lg:flex-row gap-10">
        <div>
          <div className="mt-5 ml-10 rounded-2xl overflow-hidden shadow-md">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-[700px] object-cover"
            />
          </div>

          <div className="flex gap-3 mt-2 ml-10">
            {item.images &&
              item.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setMainImage(img)}
                  className={`w-35 h-35 object-cover rounded-xl border-2 cursor-pointer transition duration-200 ${
                    mainImage === img ? "border-none" : "border-gray-300"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">{item.category?.name}</p>
          <h1 className="text-3xl font-semibold mb-4 uppercase">{item.name}</h1>
          <p className="text-xl font-bold text-gray-800 mb-2">Rs{item.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            Order in 02h 30m 25s to get next day delivery
          </p>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => {
              const full = index + 1 <= Math.floor(rating);
              const half = index + 0.5 === rating;
              return full ? (
                <Star
                  key={index}
                  className="text-yellow-400 fill-yellow-400 w-5 h-5"
                />
              ) : half ? (
                <StarHalf
                  key={index}
                  className="text-yellow-400 fill-yellow-400 w-5 h-5"
                />
              ) : (
                <StarOff key={index} className="text-gray-300 w-5 h-5" />
              );
            })}
            <span className="ml-2 text-sm text-gray-600">({rating})</span>
          </div>

          <div className="flex justify-around rounded-2xl py-9 border">
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
            <button onClick={handleAddToCart} className="mt-6 bg-black text-white px-6 py-3 rounded-full font-medium w-full hover:bg-gray-800">
              Add to Cart
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="mt-6 p-3 border border-gray-300 rounded-full hover:bg-gray-100"
              title="Add to Wishlist"
            >
              <Heart
                className={liked ? "text-red-500 fill-red-500" : "text-gray-500"}
              />
            </button>
          </div>

          <div className="mt-8 py-9 rounded-2xl border">
            <h3 className="font-semibold text-lg mb-2 ml-4">
              Description & Fit
            </h3>
            <p className="text-gray-600 ml-4">{item.description}</p>
          </div>

          <div className="mt-6 border py-7 rounded-2xl">
            <h2 className="font-bold text-lg ml-10 mb-5">Shipping</h2>
            <div className="flex justify-around">
              <ul className="text-gray-600 space-y-10 text-sm">
                <li className="flex items-center gap-2">
                  <img src={coupon} alt="Discount" className="h-10 w-10" />
                  <span className="font-semibold">Disc 50%</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={box} alt="Package" className="h-10 w-10" />
                  <span className="font-semibold">Regular Package</span>
                </li>
              </ul>
              <ul className="text-gray-600 space-y-10 text-sm">
                <li className="flex items-center gap-2">
                  <img src={calendar} alt="Time" className="h-10 w-10" />
                  <span className="font-semibold">3-4 working days</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={delivery} alt="Expected Date" className="h-10 w-10" />
                  <div>
                    <p className="text-[10px] text-gray-500">Expected Date</p>
                    <p className="font-semibold">12–13 October</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <div className="mt-12 w-full rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-6">Rating & Reviews</h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1 text-center">
            <div className="flex justify-center">
              <span className="text-6xl font-bold text-black">4.5</span>
              <p className="text-sm text-gray-500 mt-10">/ 5</p>
            </div>
            <p className="text-xs text-gray-400">(50 New Reviews)</p>

            <div className="mt-4 space-y-1 text-sm text-gray-500">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div key={i} className="flex flex-row items-center">
                  <p>⭐ {star}</p>
                  <div className="ml-3 w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-black h-2.5 rounded-full"
                      style={{ width: `${star * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-4">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="reviewer"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Alex Mathio</p>
                      <Rating rating={5} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">13 Oct 2024</p>
                </div>
                <p className="text-gray-600 text-sm">
                  "NextGen's dedication to sustainability and ethical practices
                  resonates strongly with today’s consumers, positioning the
                  brand as a responsible choice in the fashion world."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-16 mb-10 ml-10 mr-10">
        <h2 className="text-2xl font-semibold mb-6">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendations.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition"
            >
              <div className="h-60 flex items-center justify-center bg-white rounded-xl overflow-hidden mb-4">
                <img src={item.img} alt={item.name} className="h-[500px] w-full" />
              </div>
              <h3 className="font-medium text-base text-gray-800">{item.name}</h3>
              <Rating rating={item.rating} />
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
    <Footer/>
    </>
  );
};

export default Product;
