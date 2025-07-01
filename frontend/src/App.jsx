import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Cart from './pages/Cart'
import PaymentPage from './pages/PaymentPage'
import ProductPage from './pages/ProductPage'
import CategoriesPage from './pages/CategoriesPAge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
<Route path='/cart' element={<Cart />} />
<Route path='/cart/payment' element={<PaymentPage />} />
<Route path='/productpage' element={<ProductPage />} />
<Route path='/categories' element={<CategoriesPage />} />

     </Routes>
    </>
  )
}

export default App
