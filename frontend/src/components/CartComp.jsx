import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "../Features/cartReducer";
import { syncCartToBackend } from "../utils/syncCart";
import { loadCartFromBackend } from "../utils/loadCart";
import { userContext } from "../providers/userProviders";
import { useNavigate } from "react-router-dom";
const CartComp = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  

  const { user } = useContext(userContext);
  useEffect(() => {
    console.log(" Redux cart items in CartComp:", cartItems);
  }, [cartItems]);

  const userId = user.id;
  console.log(userId);
  console.log("UserID", userId);
  const [loadingCart, setLoadingCart] = useState(false);
  const [skipFetch, setSkipFetch] = useState(false);
const [cartFetchedOnce, setCartFetchedOnce] = useState(false);
const [initializing, setInitializing] = useState(true); 

  useEffect(() => {
    //if (userId && cartItems.length >= 0 && !initializing) {
     if (
    userId &&         
    cartItems.length > 0     
  ) {
      const formattedCart = cartItems.map((item) => ({
        item: item.id,
        quantity: item.quantity,
         startDate: item.startDate || "",
  endDate: item.endDate || ""

      }));
      console.log("sync to backend", formattedCart);
      syncCartToBackend(userId, formattedCart);
    }
  }, [cartItems, userId, initializing, skipFetch, cartFetchedOnce]);

  const navigate = useNavigate();
  const handleCheckout = () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const { startDate, endDate } = cartItems[0]; // assuming all items use the same rental period

  if (!startDate || !endDate) {
    alert("Start and End dates are missing.");
    return;
  }

  navigate("/cart/payment", {
    state: {
      startDate,
      endDate,
    },
  });
};

  return (
    <div
      className="min-h-screen  p-8"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="grid grid-cols-[3fr_1.3fr]  gap-8 bg-white rounded-md shadow p-6 mt-20 ">
        <div>
          <div className="grid grid-cols-[270px_1.5fr_1fr_1fr_40px] items-center text-gray-500 font-semibold text-sm border-b pb-4 mb-4">
            <h3>Image</h3>
            <h3>Product</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3>Remove</h3>
          </div>

          {cartItems &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[200px_1.5fr_1fr_1fr_40px] items-center gap-10 py-4 border-b "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-24 object-cover rounded-md"
                />

                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.color}</p>
                  <p className="text-xs text-gray-500">{item.size}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 bg-[#FFE500] text-black rounded-full text-sm font-bold flex items-center justify-center"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                  <span className="border px-4 py-[3px] rounded text-center">
                    {item.quantity}
                  </span>
                  <button
                    className="w-8 h-8 bg-black text-white rounded-full text-sm font-bold flex items-center justify-center"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>
                </div>

                <div className="font-medium"> ${(item.price * (item.quantity || 1)).toFixed(2)}</div>

                <button
                  className="text-red-500 text-xl hover:underline"
                  onClick={() => 
                   {  
  
                    dispatch(removeItem(item.id));
                    setSkipFetch(true); 
                      const updatedCart = cartItems
      .filter((i) => i.id !== item.id)
      .map((i) => ({
        item: i.id,
        quantity: i.quantity,
        startDate: i.startDate || "",
        endDate: i.endDate || "",
      }));
       syncCartToBackend(user.id, updatedCart); 
  }}

                >
                  ×
                </button>
              </div>
            ))}
        </div>

        <div className="bg-gray-50 p-6 rounded shadow-inner h-fit">
          <h2 className="text-lg font-semibold mb-4">SUMMARY</h2>

          <div className="text-sm text-gray-700 mb-2 space-y-1">
            <div className="flex justify-between">
              <span>Subtotal : </span>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>{(totalPrice + 5).toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 mb-2"
            onClick={handleCheckout}
          >
            CHECK OUT
          </button>

          <button className="w-full border border-black text-black py-2 rounded hover:bg-gray-100">
            Check out with 💳
          </button>

          <p className="text-xs text-gray-500 mt-4 leading-5">
            <strong>FREE SHIPPING</strong>
            <br />
            Your order qualifies for free shipping.
          </p>

          <p className="text-xs text-gray-500 mt-4">
            <strong>NEED HELP?</strong>
            <br />
            Contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
