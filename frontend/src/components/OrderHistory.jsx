import axios from "axios";
import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/order/get", {
          withCredentials: true,
        });
        setOrders(response.data.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Order History</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 items-center mb-6">
        <div className="flex gap-6 text-gray-600 font-medium">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">All Orders</span>
          <span className="cursor-pointer">Summary</span>
          <span className="cursor-pointer">Completed</span>
          <span className="cursor-pointer">Cancelled</span>
        </div>
        <div className="ml-auto flex gap-2 items-center">
          <input type="date" className="border px-3 py-1 rounded text-sm" />
          <span className="text-sm">To</span>
          <input type="date" className="border px-3 py-1 rounded text-sm" />
        </div>
      </div>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-6 mb-6">
            {/* Order Info */}
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <img src={order.itemImage} alt="" />
                <p className="text-gray-700">Order ID: <span className="font-semibold">{order.orderId}</span></p>
                <p className="text-gray-700">Order Date: <span className="font-semibold">{new Date(order.orderDate).toLocaleDateString()}</span></p>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button className="border px-4 py-1 rounded text-sm">Show Invoice</button>
                <button className="bg-indigo-600 text-white px-4 py-1 rounded text-sm">Buy NOW</button>
              </div>
            </div>

            
            <div className="flex flex-wrap border-t pt-4">
            
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold">{order.itemName}</h2>
                <p className="text-sm text-gray-600">Size: N/A &nbsp; | &nbsp; Qty: 1</p>
                <p className="text-sm font-semibold">Price: ₹{order.price}</p>
              </div>
              <div className="text-sm text-right">
                <p>Status:{" "}
                  <span className={
                    order.status === "Delivered"
                      ? "text-green-600 font-semibold"
                      : "text-red-500 font-semibold"
                  }>
                    {order.status}
                  </span>
                </p>
                <p className="text-gray-700">
                  Rental Period: <br />
                  <span className="font-semibold">
                    {new Date(order.startDate).toLocaleDateString()} - {new Date(order.endDate).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap justify-between items-center border-t pt-4 text-sm text-gray-600">
              <button className="text-black font-semibold">&times; cancel order</button>
              <span>Payment Status: Successful</span>
              <span className="font-semibold text-black">Total Price: ₹{order.price}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
