const orders = [
  {
    customer: "Mayur sarmah",
    email: "mayur@gmail.com",
    product: "Macbook Pro M1",
    price: "$1299",
    orderNumber: "#WE234543",
    date: "25 Dec 2024",
    status: "Pending",
    confirmation: "Confirm",
  },
  {
    customer: "Ashrita Lahon",
    email: "Ash@gmail.com",
    product: "iPhone 13 Pro Max",
    price: "$999",
    orderNumber: "#WE234543",
    date: "25 Dec 2024",
    status: "Cancelled",
    confirmation: "Confirm",
  },
   {
    customer: "Harkhita Gogoi",
    email: "Harkhitag@gmail.com",
    product: "iPhone 13 Pro Max",
    price: "$999",
    orderNumber: "#WE234543",
    date: "25 Dec 2024",
    status: "Shipped",
    confirmation: "Confirm",
  }
];

const statusColors = {
  Pending: "text-yellow-600",
  Cancelled: "text-red-600",
  Shipped: "text-green-600",
};
const OrdersTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search here..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer">
          Filter
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-3 px-4 font-medium">Customer</th>
              <th className="text-left py-3 px-4 font-medium">Product</th>
              <th className="text-left py-3 px-4 font-medium">Order Number</th>
              <th className="text-left py-3 px-4 font-medium">Date</th>
              <th className="text-left py-3 px-4 font-medium">Status</th>
              <th className="text-left py-3 px-4 font-medium">Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="font-semibold text-gray-900">
                    {order.customer}
                  </div>
                  <div className="text-xs text-gray-500">{order.email}</div>
                </td>
                <td className="py-3 px-4">{order.product}</td>
                <td className="py-3 px-4">{order.orderNumber}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">
                  <span className={statusColors[order.status]}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {order.confirmation ? (
                    <button className="text-blue-600 text-sm hover:underline ">
                      {order.confirmation}
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersTable;