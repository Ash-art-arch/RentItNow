import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { userContext } from "../providers/userProviders";
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../Features/cartReducer";
const Success = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const {user} = useContext(userContext)
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  const userId = user.id
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const verifyPayment =async ()=>{
   try{
    const response = await fetch("http://localhost:5000/api/order/verifyStripe",{
      method:"post",
      body:JSON.stringify({
        userId,
        success,
        orderId
      }),
      headers:{
        'content-type':'application/json'
      },
      credentials:"include"
    })
    const data = await response.json()
    if(data.success){
      dispatch(clearCart())
      navigate('/')
    }else{
      navigate('/cart')
    }
   }
   catch(e){
    alert(e)
   }
 }
 useEffect(()=>{
  verifyPayment()

 },[])
  const order = {
    id: "123456",
    paymentStatus: "Paid",
    deliveryStatus: "Out for Delivery",
    products: [
      {
        name: "Wireless Headphones",
        quantity: 1,
        price: "₹2,999",
        image: "/src/assets/product/headphones2.avif",
      },
      {
        name: "headphones2",
        quantity: 2,
        price: "₹1,999",
        image: "/src/assets/product/headphones4.avif",
      },
      {
        name: "Headphones 3",
        quantity: 1,
        price: "₹899",
        image: "/src/assets/product/headphones3.avif",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mt-20">
        <img
          src="/src/assets/Success/Success.png"
          alt="Success Icon"
          className="h-[200px] w-[200px]"
        />
      </div>

      <div className="mt-10">
        <h1 className="text-3xl text-center font-bold text-black">Success</h1>
        <p className="text-xl text-center text-black">
          Your order has been placed successfully
        </p>
      </div>

      <div className="mt-10 rounded-2xl w-[600px] mb-10 shadow-[0_3px_8px_rgba(0,0,0,0.24)] p-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Order Summary
        </h2>

        
        <div className="space-y-6">
          {order.products.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-gray-800 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-6 space-y-3 text-lg text-gray-700">
          <div className="flex justify-between">
            <span>Order ID:</span>
            <span>#{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span>Payment Status:</span>
            <span className="text-green-600 font-medium">
              {order.paymentStatus}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Status:</span>
            <span className="text-blue-600 font-medium">
              {order.deliveryStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
