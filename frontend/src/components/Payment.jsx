import React, { useContext, useEffect, useState } from "react";

import upi from "/src/assets/Cart/UPI.webp";
import gpay from "/src/assets/Cart/G-pay.png";
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, clearCart, } from "../Features/cartReducer";
import {  userContext } from "../providers/userProviders";
import { loadCartFromBackend } from "../utils/loadCart";
const Payment = () => {
  const [State, setState] = useState(1);
  const [submit, setSubmit] = useState(false);
const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.cart.items)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  const { user } = useContext(userContext)
  const userId = user.id
  useEffect(() => {
    const fetchCart = async () => {
      if (userId) {
            
        try {
          const backendCart = await loadCartFromBackend(userId);
          
  console.log("Cart fetched from backend:", backendCart);
  dispatch(clearCart())
          backendCart.forEach(item => {
            if (item) {
              dispatch(addToCart({
                id: item.item._id || item.item,
                title: item.item.name || "Product",
                size: "Default Size",
                color: "Default Color",
                price: item.item.price || 0,
                image: item.item.images?.[0] || "",
                quantity: item.quantity || 1
              }));
              console.log(
                "Item Added"
              )
            }
          });
          
        } catch (e) {
          console.error("Cart loading failed:", e.message);
        }
      }
    };
    fetchCart();
  }, [userId, dispatch]);
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 text-gray-800 font-sans">
      <div className="w-full lg:w-2/3 p-6 sm:p-8 md:p-10 lg:p-12 bg-stone-200">
        <h2 className="text-xl font-bold mb-6 cursor-pointer" onClick={() => setState(1)}>
          01. SHIPPING
        </h2>

        {State === 1 && (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setState(2);
              setSubmit(true);
            }}
          >

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" required placeholder="Address" className="w-full sm:w-2/3 border-b p-2 outline-none" />
              <input type="text" placeholder="Apt, suite, etc. (optional)" className="w-full sm:w-1/3 border-b p-2 outline-none" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" required placeholder="City" className="w-full sm:w-1/3 border-b p-2 outline-none" />
              <input type="text" required placeholder="Country" className="w-full sm:w-1/3 border-b p-2 outline-none" />
              <input type="text" required placeholder="State" className="w-full sm:w-1/3 border-b p-2 outline-none" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" required placeholder="Zip Code" className="w-full sm:w-1/3 border-b p-2 outline-none" />
              <input type="email" required placeholder="Email" className="w-full sm:w-1/3 border-b p-2 outline-none" />
              <input type="text" required placeholder="Phone" className="w-full sm:w-1/3 border-b p-2 outline-none" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <label htmlFor="startDate">Start Date</label>
              <input type="date" required placeholder="Start Date" className="w-full sm:w-1/3 border-b p-2 outline-none" />
              <label htmlFor="startDate">End Date</label>
              <input type="date" required placeholder="End Date" className="w-full sm:w-1/3 border-b p-2 outline-none" />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Your privacy is important to us. We will only contact you if there is an issue with your order.
            </p>

            <button
              type="submit"
              className="bg-black text-white w-full sm:w-auto px-6 py-2 rounded-2xl mt-6 hover:bg-neutral-500"
            >
              SAVE & CONTINUE
            </button>
          </form>
        )}

        <h2 className="text-xl font-bold mt-12 cursor-pointer" onClick={() => setState(2)}>
          02. PAYMENT
        </h2>

        {State === 2 && submit && (
          <div className="mt-6 space-y-6">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full sm:w-1/2 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full sm:w-1/2 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Or pay with:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 border h-[60px] rounded-xl flex justify-center items-center hover:bg-gray-100 transition">
                  <img src={upi} alt="UPI" className="h-[40px] w-[40px]" />
                </button>
                <button className="flex-1 border h-[60px] rounded-xl flex justify-center items-center hover:bg-gray-100 transition">
                  <img src={gpay} alt="GPay" className="h-[30px] w-[60px]" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-neutral-700 transition mt-4"
            >
              CONTINUE TO REVIEW
            </button>
          </div>
        )}

        <h2 className="text-xl font-bold mt-12">03. ORDER REVIEW</h2>
      </div>

      <div className="w-full lg:w-1/3 p-6 sm:p-8 bg-white shadow-xl">
        <h3 className="text-lg font-semibold mb-4">SUMMARY</h3>
        <div className="flex justify-between py-1">
          <span>Subtotal</span>
          <span>{totalPrice}</span>
        </div>
        <div className="flex justify-between py-1 border-b pb-2">
          <span>Shipping</span>
          <span>$5</span>
        </div>
        <div className="flex justify-between font-bold text-xl py-4">
          <span>Total</span>
          <span>{totalPrice+5}</span>
        </div>
        <h4 className="text-md font-semibold mb-4 mt-15">IN YOUR CART</h4>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-50 h-30 object-cover rounded"
              />
              <div>
                <h5 className="font-medium text-sm sm:text-base">{item.title}</h5>
                <p className="text-xs sm:text-sm text-gray-600">{item.color}</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {`Qty:${item.quantity}`||"Qty:1"} 
                </p>
                <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;

