import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'

import SignUpUser from './components/SignupUser'

import Login from './components/Login'

import Cart from './pages/Cart'
import PaymentPage from './pages/PaymentPage'
import ProductPage from './pages/ProductPage'
import CategoriesPAge from './pages/CategoriesPAge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUpUser/>} />
      

      <Route path='/' element={<LandingPage/>}/>
<Route path='/cart' element={<Cart />} />
<Route path='/cart/payment' element={<PaymentPage />} />
<Route path='/productpage' element={<ProductPage />} />
<Route path='/categories' element={<CategoriesPAge />} />

     </Routes>
    </>
  )
}

export default App
