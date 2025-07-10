const CustomerResponsePage = () => {
  return (
    <div className="min-h-screen bg-gray-400 p-6 md:p-12 font-[Outfit]">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Support</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          />
          <input
            type="text"
            placeholder="Rental / Order ID (optional)"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          />
          <select className="border border-gray-300 p-3 rounded-md col-span-2">
            <option value="">Select Category</option>
            <option>Issue with Order</option>
            <option>Rental Return</option>
            <option>Payment Problem</option>
            <option>Suggestion</option>
            <option>Other</option>
          </select>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          ></textarea>
          <input
            type="file"
            className="col-span-2 text-md text-gray-600 p-6 border border-gray-300 "
          />
          <button
            type="submit"
            className=  "text-white px-6 py-3 rounded-md font-bold col-span-2 font-[Outfit] cursor-pointer"style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Q:</strong> How do I return a rented item?<br /><strong>A:</strong> Visit your orders page and click “Return Item.”</li>
          <li><strong>Q:</strong> What happens if I damage a product?<br /><strong>A:</strong> Damage fees apply as per our rental policy.</li>
          <li><strong>Q:</strong> How long does it take for support to respond?<br /><strong>A:</strong> We respond within 24 – 48 hours.</li>
        </ul>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-1">📞 Phone: +91-98765-43210</p>
        <p className="text-gray-700 mb-1">✉️ Email: support@rentitnow.com</p>
        <p className="text-gray-700">🕒 Hours: Mon - Sat, 9AM - 6PM</p>
      </div>
      <p className="text-center text-sm text-gray-500">
         We typically respond to all support requests within <strong>24 - 48 hours</strong>
      </p>
    </div>
  );
};

export default CustomerResponsePage;



