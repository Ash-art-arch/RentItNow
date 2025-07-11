import React from 'react';

const Footer = () => {
  return (
    <footer className="w-fulpx-6 py-10 md:px-20 md:py-20 font-[Outfit] bg-[#1a1a1a]   ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between pb-10 border-b border-gray-700 gap-8">
        
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">RentItNow</h2>
          <p className='text-white'>📞 +91 9876543210</p>
          <p className='text-white'>🏠 12 Street Name, Jorhat, India</p>
        </div>

        <div className="flex flex-col gap-2 text-white">
          <h3 className="font-semibold mb-2">About</h3>
          <a href="#" className="hover:text-yellow-400">About Us</a>
          <a href="#" className="hover:text-yellow-400">How It Works</a>
          <a href="#" className="hover:text-yellow-400">Pricing</a>
          <a href="#" className="hover:text-yellow-400">Careers</a>
        </div>

        <div className="flex flex-col gap-2 text-white">
          <h3 className="font-semibold mb-2">Support</h3>
          <a href="#" className="hover:text-yellow-400">Help Center</a>
          <a href="#" className="hover:text-yellow-400">FAQs</a>
          <a href="#" className="hover:text-yellow-400">Contact Us</a>
          <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 text-sm">
        © 2025 RentItNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
