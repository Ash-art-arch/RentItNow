import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const RevenueChart = ({totalRevenue}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [revenueData, setRevenueData] = useState([]);

  const toggleDropdown = () => {
    setShowOptions((prev) => !prev);
  };


const data = [
  { name: "Jan", revenue: totalRevenue * 0.05 },
  { name: "Feb", revenue: totalRevenue * 0.07 },
  { name: "Mar", revenue: totalRevenue * 0.08 },
  { name: "Apr", revenue: totalRevenue * 0.1 },
  { name: "May", revenue: totalRevenue * 0.1 },
  { name: "Jun", revenue: totalRevenue * 0.15 },
  { name: "Jul", revenue: totalRevenue * 0.13 },
  { name: "Aug", revenue: totalRevenue * 0.1 },
  { name: "Sep", revenue: totalRevenue * 0.22 },
];


  return (
    <div className="bg-white p-5 rounded-2xl shadow-md relative h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">$ ₹{(totalRevenue || NaN).toLocaleString()}</h2>
          <p className="text-sm text-black">Overall Revenue</p>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-sm bg-white border rounded-md px-3 py-1 hover:bg-gray-300 transition cursor-pointer"
          >
            Monthly ▼
          </button>
          {showOptions && (
            <ul className="absolute right-0 mt-1 bg-white border rounded-md shadow-md z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Monthly
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Yearly
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#FFE500"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
