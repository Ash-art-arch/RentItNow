import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UploadCloud, X } from "lucide-react";

const UploadComp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [about, setAbout] = useState("");
  const [photos, setPhotos] = useState([]);
  const [existingPhotos, setExistingPhotos] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/items/${id}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setProductName(data.name);
          setCategory(data.category?._id || "");
          setDescription(data.description);
          setPrice(data.price);
          setDiscount(data.discount || "");
          setAbout(data.about || "");
         const urls = data.images || []; 
        const formatted = urls.map((img) =>
          img.startsWith("http") ? img : `http://localhost:5000/${img}`
        );
        setExistingPhotos(formatted);
      })
      .catch((err) => console.error("Error loading item:", err));
  }
  }, [id]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).filter(
      (file) => file.size <= 1024 * 1024
    );
    setPhotos((prev) => [...prev, ...files]);
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingPhoto = (index) => {
    setExistingPhotos((prev) => prev.filter((_, i) => i !== index));
  };

    const handleSubmit = async () => {
      if (!termsAccepted) {
        alert("Please accept the terms and conditions.");
        return;
      }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("available", "true");
    formData.append("ratings", "0");
     formData.append("quantity", quantity);
    formData.append("discount", discount);
    formData.append("about", about);


    existingPhotos.forEach((url) => {
      const relativePath = url.replace("http://localhost:5000/", "");
      formData.append("existingImages", relativePath);
    });


    photos.forEach((photo) => formData.append("items", photo));

    try {
      const res = await fetch(
        `http://localhost:5000/api/items/${id ? id : "add"}`,
        {
          method: id ? "PUT" : "POST",
          credentials: "include",
          body: formData,
        }
      );
      const data = await res.json();
      if (res.ok) {
        alert(id ? "Product updated successfully!" : "Product uploaded successfully!");
        navigate("/editproduct");
      } else {
        alert(data.message || "Failed to save");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Upload Product</h1>
      <div className="border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-1">Create Product</h2>
        <p className="text-gray-500 mb-6">
          Design and launch your product with ease and efficiency
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
                <option value="6863c2e45c31a23b5f926ec2">Furniture</option>
                <option value="6863c25c5c31a23b5f926ebc">Tools</option>
                <option value="6863c1bc5c31a23b5f926eb4">Electronics</option>
                <option value="6863c2195c31a23b5f926eb8">Clothes</option>
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
              <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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

  
              <div className="flex gap-2 mt-2 flex-wrap">
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

         
              <div className="flex gap-2 mt-2 flex-wrap">
                {existingPhotos.map((url, index) => (
                  <div key={index} className="relative w-16 h-16">
                    <img
                      src={url}
                      className="rounded object-cover w-full h-full"
                      alt="Existing"
                    />
                    <button
                      onClick={() => removeExistingPhoto(index)}
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
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-full"
                onClick={() => navigate("/editproduct")}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-400 text-black px-6 py-2 rounded-full"
                onClick={handleSubmit}
              >
                {id ? "Update Product" : "Upload Product"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadComp;
