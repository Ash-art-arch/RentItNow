import React, { useState } from "react";
<<<<<<< HEAD
import upi from "/src/assets/Cart/UPI.webp";
import gpay from "/src/assets/Cart/G-pay.png";

const Payment = () => {
  const [State, setState] = useState(1);
  const [submit, setSubmit] = useState(false);

  const cartItems = [
    {
      id: 1,
      title: "Breathable skin sport vest",
      size: "Size S",
      color: "Color: Pink",
      price: 39.0,
      image: "/src/assets/Cart/camera.jpg",
    },
    {
      id: 2,
      title: "Breathable skin sport vest",
      size: "Size S",
      color: "Color: Red",
      price: 39.0,
      image: "/src/assets/Cart/camera.jpg",
    },
    {
      id: 3,
      title: "Breathable skin sport vest",
      size: "Size S",
      color: "Color: Black",
      price: 39.0,
      image: "/src/assets/Cart/camera.jpg",
    },
  ];

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
              <input type="text" required placeholder="First Name" className="w-full sm:w-1/2 border-b p-2 outline-none" />
              <input type="text" required placeholder="Last Name" className="w-full sm:w-1/2 border-b p-2 outline-none" />
            </div>

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
          <span>$117</span>
        </div>
        <div className="flex justify-between py-1 border-b pb-2">
          <span>International Shipping</span>
          <span>$10</span>
        </div>
        <div className="flex justify-between font-bold text-xl py-4">
          <span>Total</span>
          <span>$127</span>
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
                  {item.size} | Qty: 1
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
=======
import upi from "/src/assets/Cart/UPI.webp"
import gpay from "/src/assets/Cart/G-pay.png"


const Payment = () => {
    const[State,setState]=useState(1);
    const[submit,setSubmit]=useState(false);
    const cartItems = [
        {
            id: 1,
            title: "Breathable skin sport vest",
            size: "Size S",
            color: "Color: Pink",
            price: 39.0,
            image: "/src/assets/Cart/camera.jpg"
        },
        {
            id: 2,
            title: "Breathable skin sport vest",
            size: "Size S",
            color: "Color: Red",
            price: 39.0,
            image: "/src/assets/Cart/camera.jpg"
        },
        {
            id: 3,
            title: "Breathable skin sport vest",
            size: "Size S",
            color: "Color: Black",
            price: 39.0,
            image: "/src/assets/Cart/camera.jpg"
        }
    ];
    return (
        <div>
            <div className="min-h-screen flex bg-gray-100 text-gray-800 font-sans" >
                <div className="w-2/3 p-12 bg-stone-200">
                    <h2 className="text-xl font-bold mb-6" onClick={( ) => setState(1)}>01. SHIPPING</h2>
                    
                    {State ===1 &&(
                        <>
                    <form className="space-y-4" onSubmit={(e)=>{e.preventDefault();
                                setState(2);
                                setSubmit(true);
                            }
                                }>
                        
                        <div className="flex gap-95">
                            <label htmlFor="First-name" className="text-gray-500">first name</label>
                            <label htmlFor="Last-name" className="text-gray-500">last name</label>
                        </div>
                        <div className="flex gap-4">
                            <input type="text" required className="w-1/2 border-b-[1.5px] h-4 text-gray-500 outline-0" />
                            <input type="text" required className="w-1/2 border-b-[1.5px] h-4 text-gray-500 outline-0" />

                        </div>
                        <div className="flex gap-135">
                            <label htmlFor="Address"  className="text-gray-500">Address</label>
                            <label htmlFor="apt" className="text-gray-500">Apt, suite, etc. (optional)</label>
                        </div>
                        <div className="flex gap-4">
                            <input type="text" required className="w-2/3 border-b-[1.5px] h-4 text-gray-500 outline-0" />
                            <input type="text" className="w-1/3 border-b-[1.5px] h-4 text-gray-500 outline-0" />
                        </div>
                        <div className="flex gap-65">
                            <label htmlFor="city" className="text-gray-500">City</label>
                            <label htmlFor="country" className="text-gray-500">Country</label>
                            <label htmlFor="state" className="text-gray-500">State</label>


                        </div>
                        <div className="flex gap-4">
                            <input type="text" required className="w-1/3  border-b-[1.5px] h-4 text-gray-500 outline-0" />
                            <input type="text" required className="w-1/3  border-b-[1.5px] h-4 text-gray-500 outline-0" />
                            <input type="text" required className="w-1/3  border-b-[1.5px] h-4 text-gray-500 outline-0" />
                        </div>
                        <div className="flex gap-62">
                            <label htmlFor="Zip code" className="text-gray-500">Zip code</label>
                            <label htmlFor="email" className="text-gray-500">Email</label>
                            <label htmlFor="Phone" className="text-gray-500">Phone</label>
                        </div>
                        <div className="flex gap-4">
                            <input type="text" required className="w-1/3  border-b-[1.5px] h-4 text-gray-500 outline-0" />
                            <input type="email" required className="w-1/3  border-b-[1.5px] h-4 text-gray-500 outline-0" />
                            <input type="text" required className="w-1/3  border-b-[1.5px] h-4 text-gray-500 outline-0" />
                        </div>
                        <p className="text-sm text-gray-500 mt-10">
                            Your privacy is important to us. We will only contact you if there is an issue with your order.
                        </p>
                        <button type="submit"  className="bg-black text-white px-6 py-2 rounded-2xl mt-10 hover:bg-neutral-500">SAVE & CONTINUE</button>
                    </form>
                      </>
                    )}
                  
                    <h2 className="text-xl font-bold mt-12" onClick={( ) => setState(2)}>02. PAYMENT</h2>
                        {State === 2 && (
  <>
    <div className="mt-4 space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-2 text-sm font-medium">Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="w-1/2">
          <label className="block mb-2 text-sm font-medium">CVV</label>
          <input
            type="text"
            placeholder="CVV"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <div>
        <label className="block mb-3 text-sm font-semibold text-gray-700">Or choose UPI:</label>

        <div className="flex flex-col gap-4">
          <button className="border border-gray-300 h-[60px] rounded-xl flex justify-center items-center hover:bg-gray-100 transition">
            <img src={upi} alt="UPI" className="h-[50px] w-[50px]" />
          </button>

          <button className="border border-gray-300 h-[60px] rounded-xl flex justify-center items-center hover:bg-gray-100 transition">
            <img src={gpay} alt="GPay" className="h-[30px] w-[60px]" />
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl hover:bg-neutral-700 transition mt-6"
      >
        CONTINUE TO REVIEW
      </button>
    </div>
  </>
)}


                    <h2 className="text-xl font-bold mt-6">03. ORDER REVIEW</h2>
                </div>
                <div className="w-1/3 p-8 bg-white shadow-xl">
                    <h3 className="text-lg font-semibold mb-4">SUMMARY</h3>
                    <div className="flex justify-between py-1">
                        <span>Subtotal</span>
                        <span>$117</span>
                    </div>
                    <div className="flex justify-between py-1 border-b pb-2">
                        <span>International Shipping</span>
                        <span>$10</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl py-4">
                        <span>Total</span>
                        <span>$127</span>
                    </div>
                    <h4 className="text-md font-semibold mb-4 mt-6">IN YOUR CART</h4>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-10">
                
              <img src={item.image} alt={item.title} className="w-30 h-25 object-cover rounded" />
              <div>
                <h5 className="font-medium">{item.title}</h5>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <p className="text-sm text-gray-600">Size: {item.size} | Qty: {item.qty}</p>
                <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
              </div>
            </div>
            
          ))}
        </div>
                </div>
        
            </div>


        </div>
    );

};

export default Payment;
>>>>>>> 5172a9c ( Cart and payment)
