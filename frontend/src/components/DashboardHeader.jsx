import { useState } from "react";
import { Menu, X, Home, Package, MessageSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";
const DashboardHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="relative flex flex-col">
   
      <div
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      >
     
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="text-white cursor-pointer">
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-white">Hello user!</h1>
            <p className="text-sm text-gray-200">Welcome back to dashboard.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="bg-gray-100 p-2 rounded-lg">
              <img src="/src/assets/DashboardHeader/bell.png" alt="Bell" className="w-5 h-5" />
            </button>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-blue-500 text-white text-xs rounded-full px-1.5">4</span>
          </div>

          <button className="bg-gray-100 p-2 rounded-lg">
            <img src="/src/assets/DashboardHeader/email.png" alt="Mail" className="w-5 h-5" />
          </button>

          <div className="bg-gray-100 p-2 rounded-lg">
            <img src="/src/assets/DashboardHeader/country.png" alt="Language" className="w-5 h-5" />
          </div>

          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img src="/src/assets/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div> 
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-40 text-white shadow-md z-50 transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleSidebar} className="text-white cursor-pointer">
              <X size={24} />
            </button>
          </div>
          <ul className="p-6 space-y-6">
            <li className="flex items-center gap-3 hover:text-yellow-400 cursor-pointer">
              <Link to="/Dashboard" className="flex items-center gap-3">
              <Home size={20} />
              Dashboard
              </Link>
            </li>
          <li className="flex items-center gap-3 hover:text-yellow-400 cursor-pointer">
              <Link to="/ProductUpload" className="flex items-center gap-3">
              <Package size={20} />
              My Products
              </Link>
            </li>
            <li className="flex items-center gap-3 hover:text-yellow-400 cursor-pointer">
              <Link to='/customerresponse' className="flex item-center gap-3">
              <MessageSquare size={20} />
              Customer Responses
              </Link>
            </li>
            <li className="flex items-center gap-3 hover:text-yellow-400 cursor-pointer">
              <Link to='/settings' className="flex item-center gap-3">
              <Settings size={20} />
              Settings</Link>
              
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
