import React, { useState } from "react";

const SettingsComp = () => {
  const [formData, setFormData] = useState({
    name: "Dorothy",
    email: "dg@example.com",
    phone: "9876548964",
  });
  const [profilePic, setProfilePic] = useState(null);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");

  };

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleLogout = () => {
    alert("You have been logged out.");
  };

  

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src={profilePic ||"src/assets/profile.png" }
              className="w-24 h-24 rounded-full object-cover border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="text-sm text-gray-600"
            />      
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold cursor-pointer"
          >
            Save Changes
          </button>
        </form>
      <div className="pt-8 border-t space-y-4">
          <button
            onClick={handleLogout}
            className="w-full bg-yellow-300 hover:bg-yellow-500 text-gray-500 py-3 rounded-md font-semibold"
          >
            Logout
          </button> 
        </div>
      </div>
    </div>
  );
};
export default SettingsComp;