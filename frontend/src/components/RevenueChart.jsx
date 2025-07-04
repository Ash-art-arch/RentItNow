import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 1398 },
  { name: "Mar", revenue: 9800 },
  { name: "Apr", revenue: 3908 },
  { name: "May", revenue: 4800 },
  { name: "Jun", revenue: 3800 },
  { name: "Jul", revenue: 4300 },
  { name: "Aug", revenue: 4900 },
  { name: "Sep", revenue: 6700 },
];

const RevenueChart = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleDropdown = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md relative h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">$35.8K</h2>
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
          <LineChart data={data}>
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
