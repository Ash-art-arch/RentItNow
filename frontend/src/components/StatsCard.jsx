const StatsCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <div className="text-sm text-green-600 font-semibold">+2.3%</div>
      <div className="text-sm text-gray-700 font-semibold">Total Sales</div>
      <div className="text-3xl font-bold text-gray-900 mt-1">$123,456</div>
    </div>
    <div className="bg-gray-200 p-5 rounded-2xl shadow-md">
      <div className="text-sm text-red-600 font-semibold ">-1.3%</div>
      <div className="text-sm text-gray-700 font-bold">Total Users</div>
      <div className="text-3xl font-bold text-gray-900 mt-1">234561</div>
    </div>
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <div className="text-sm text-gray-600 font-bold">Total Profit</div>
      <div className="text-3xl font-bold text-black mt-1">+3201.98</div>
      <p className="text-sm text-yellow-400 font-semibold">+56.7% from last month</p>
    </div>
  </div>
);

export default StatsCard;