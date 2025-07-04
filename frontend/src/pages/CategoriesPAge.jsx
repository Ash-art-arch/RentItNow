import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import categoryImage from "../assets/category.svg"
import Sidebar from './Sidebar'
import CategoryCard from '../components/CategoryCard'

const CategoriesPage = () => {
  const [category, setCategory] = useState(null)
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [sortOption, setSortOption] = useState("default")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = window.location.search.split("=")[1];
    const fetchCategory = async () => {
      const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()
      setCategory(data)
    }
    if (id) fetchCategory()
  }, [])

  useEffect(() => {
    const fetchItems = async () => {
      if (!category && window.location.search.split("=")[1]) return 
      setLoading(true)
      const response = await fetch("http://localhost:5000/api/items")
      const data = await response.json()
      const filtered = category
        ? data.filter(item => item.category?.name === category.name)
        : data
      setItems(filtered)
      setFilteredItems(filtered)
      setLoading(false)
    }
    fetchItems()
  }, [category])

  useEffect(() => {
    let sorted = [...items]
    if (sortOption === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortOption === "high") {
      sorted.sort((a, b) => Number(b.price) - Number(a.price))
    } else if (sortOption === "low") {
      sorted.sort((a, b) => Number(a.price) - Number(b.price))
    }
    setFilteredItems(sorted)
  }, [sortOption, items])

  if (loading) {
    return <div className='text-center text-xl p-20'>Loading...</div>
  }

  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='w-full h-[40vh] bg-cover bg-no-repeat bg-center flex items-center justify-center relative object-top'
        style={{ backgroundImage: `url(${category?.headerImage || categoryImage})` }}>
        <div className='absolute inset-0 bg-[rgba(0,0,0,0.67)] z-10'></div>
        <h1 className='text-3xl md:text-7xl text-white z-10 font-bold font-[Outfit]'>
          {category ? category.name : "All Products"}
        </h1>
      </div>

      <div className='w-full flex'>
        <Sidebar />
        <div className='min-h-[70vh] p-10 w-full'>
          <div className='flex items-center justify-between w-full'>
            <span>Showing {filteredItems.length} items</span>
            <select
              className='bg-gray-200 p-4 pr-6 rounded'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="az">Sorting A-Z</option>
              <option value="high">Sorting high prices first</option>
              <option value="low">Sorting low prices first</option>
            </select>
          </div>

          <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {filteredItems.map((item) => (
              <CategoryCard item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage
