import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import categoryImage from "../assets/category.svg"
import Sidebar from './Sidebar'
import CategoryCard from '../components/CategoryCard'
import Loader from '../components/Loader'

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
    return (
      <div className='w-screen h-screen flex items-center justify-center bg-black'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='w-full h-full'>
      <Navbar />
      <div
        className='w-full h-[40vh] bg-cover bg-no-repeat bg-center flex items-center justify-center relative object-top'
        style={{ backgroundImage: `url(${category?.headerImage || categoryImage})` }}
      >
        <div className='absolute inset-0 bg-[rgba(0,0,0,0.67)] z-10'></div>
        <h1 className='text-3xl md:text-7xl text-white z-10 font-bold font-[Outfit] text-center px-4'>
          {category ? category.name : "All Products"}
        </h1>
      </div>

      <div className='w-full flex flex-col sm:flex-row'>
        <div className='hidden sm:w-1/3 md:block  md:w-1/5 w-full'>
          <Sidebar />
        </div>

        <div className='sm:w-2/3 md:w-3/4 w-full min-h-[70vh] p-4 md:p-8'>
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 mb-6'>
            <span className='text-sm md:text-base'>Showing {filteredItems.length} items</span>
            <select
              className='bg-gray-200 p-2 md:p-4 pr-4 md:pr-6 rounded text-sm md:text-base'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="az">Sorting A-Z</option>
              <option value="high">Sorting high prices first</option>
              <option value="low">Sorting low prices first</option>
            </select>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10'>
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
