import React, { useState } from "react";
import { UploadCloud, X } from "lucide-react";

const UploadComp = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [about, setAbout] = useState("");
  const [photos, setPhotos] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).filter((file) =>
      file.size <= 1024 * 1024
    );
    setPhotos((prev) => [...prev, ...files]);
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
   
    console.log({ productName, category, description, price, discount, about });
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Upload Product</h1>

      <div className="border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-1">Create Product</h2>
        <p className="text-gray-500 mb-6">
          design and launch your product with ease and efficiency
        </p>

        <div className="grid md:grid-cols-2 gap-6">
        
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Product Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Category</label>
              <select
                className="w-full border px-3 py-2 rounded text-black"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Furniture">Furniture</option>
                <option value="Tools">Tools</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                rows={4}
                maxLength={1000}
                className="w-full border px-3 py-2 rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <p className="text-xs text-right text-gray-400">
                {description.length}/1000
              </p>
            </div>

            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Discount</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>

     
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Product Photos</label>
              <div className="border border-yellow-400 border-dashed p-6 rounded-xl text-center">
                <label
                  htmlFor="upload"
                  className="flex flex-col items-center gap-2 text-gray-600 cursor-pointer"
                >
                  <UploadCloud size={30} />
                  <p>Click to add or drag and drop</p>
                  <p className="text-xs text-gray-400">
                    MAX 1mb file size, only png and jpeg files
                  </p>
                </label>
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleImageUpload}
                />
              </div>

       
              <div className="flex gap-2 mt-2">
                {photos.map((file, index) => (
                  <div key={index} className="relative w-16 h-16">
                    <img
                      src={URL.createObjectURL(file)}
                      className="rounded object-cover w-full h-full"
                      alt="Uploaded"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-0 right-0 bg-black bg-opacity-70 text-white rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">About (optional)</label>
              <textarea
                rows={3}
                className="w-full border px-3 py-2 rounded"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-start gap-2 text-sm mt-2">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mt-1 accent-yellow-500"
              />
              <label>
                I have read and accept the terms and conditions and personal data
                processing policy
              </label>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button className="bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer">
                Cancel
              </button>
              <button
                className="bg-yellow-400 text-black px-6 py-2 rounded-full cursor-pointer"
                onClick={handleSubmit}
              >
                Upload Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadComp;