import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Editproduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ price: 'All', status: 'All', sort: 'Default' });
  const [showModal, setShowModal] = useState(false);

 useEffect(() => {
  const fetchSellerItems = async () => {
    try {
      const res = await axios.get('/api/items/my-items', {
  withCredentials: true,
});


      console.log("Fetched items from backend:", res.data);
        if (!Array.isArray(res.data)) {
        console.error("Expected an array, but got:", res.data);
        return;
      }

      const formattedItems = res.data.map((item) => ({
        id: item._id,
        name: item.name,
        price: `$${item.price}`,
        likes: item.likes || '0',
        status: item.status || 'Active',
        image: item.images[0] || 'src/assets/cam.png',
      }));

      setProducts(formattedItems);
    } catch (error) {
      console.error('Error fetching seller items:', error);
    }
  };

  fetchSellerItems();
}, []);

  const toggleSelection = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleDeleteConfirmed = () => {
    setProducts((prev) => prev.filter((prod) => !selectedIds.includes(prod.id)));
    setSelectedIds([]);
    setShowModal(false);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const getFilteredProducts = () => {
    let filtered = [...products];
    const parsePrice = (p) => parseFloat(p.replace(/[^0-9.]/g, ''));

    if (filters.price !== 'All') {
      if (filters.price === '0-400') filtered = filtered.filter((p) => parsePrice(p.price) <= 400);
      else if (filters.price === '400-800') filtered = filtered.filter((p) => parsePrice(p.price) > 400 && parsePrice(p.price) <= 800);
      else if (filters.price === '800-1200') filtered = filtered.filter((p) => parsePrice(p.price) > 800 && parsePrice(p.price) <= 1200);
      else if (filters.price === '1200+') filtered = filtered.filter((p) => parsePrice(p.price) > 1200);
    }

    if (filters.status !== 'All') {
      filtered = filtered.filter((p) => p.status === filters.status);
    }

    if (filters.sort === 'low-high') {
      filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (filters.sort === 'high-low') {
      filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      <div className="bg-white rounded-lg p-4 flex flex-wrap gap-4 items-center justify-between text-black">
        <input
          type="text"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-4 py-2 rounded w-60"
        />

        <select name="price" onChange={handleFilterChange} className="border px-6 py-2 rounded">
          <option value="All">All Prices</option>
          <option value="0-400">$0 - $400</option>
          <option value="400-800">$400 - $800</option>
          <option value="800-1200">$800 - $1200</option>
          <option value="1200+">$1200+</option>
        </select>

        <select name="status" onChange={handleFilterChange} className="border px-6 py-2 rounded">
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select name="sort" onChange={handleFilterChange} className="border px-6 py-2 rounded">
          <option value="Default">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>

        <Link
          to="/productupload"
          className="bg-black text-white px-4 py-2 rounded cursor-pointer"
        >
          + Add Product
        </Link>
      </div>

      {selectedIds.length > 1 && (
        <div className="flex justify-end mt-2">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => setShowModal(true)}
          >
            Delete All ({selectedIds.length})
          </button>
        </div>
      )}

      <div className="bg-white rounded-lg mt-4 text-black">
        <table className="w-full text-left table-auto">
          <thead className="border-b">
            <tr className="text-gray-600">
              <th className="p-3"></th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Likes</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((prod) => (
              <tr key={prod.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(prod.id)}
                    onChange={() => toggleSelection(prod.id)}
                  />
                </td>
                <td className="p-3 flex items-center gap-4">
                  <img src={prod.image} alt="product" className="w-16 h-16 object-cover" />
                  <span className="font-semibold">{prod.name}</span>
                </td>
                <td className="p-3 font-bold">{prod.price}</td>
                <td className="p-3">{prod.likes}</td>
                <td className="p-3">
                  <select className="border px-2 py-1 rounded text-sm text-green-600 bg-green-50">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </td>
                <td className="p-3 text-center">
                  <div className="inline-flex gap-2">
                    <Link
                      to={`/productupload/${prod.id}`}
                      className="bg-yellow-300 text-black px-3 py-1 rounded flex items-center gap-1 text-sm"
                    >
                      <FaEdit /> Edit
                    </Link>
                    <button
                      className="text-red-600 hover:text-red-800 text-lg"
                      onClick={() => {
                        const confirmDelete = window.confirm('Delete this product?');
                        if (confirmDelete) {
                          setProducts(products.filter((p) => p.id !== prod.id));
                          setSelectedIds(selectedIds.filter((id) => id !== prod.id));
                        }
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl w-[90%] max-w-sm text-center text-black">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete these products?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirmed}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editproduct;
