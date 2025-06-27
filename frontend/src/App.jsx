import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'

import SignUpUser from './components/SignupUser'

import Login from './components/Login'

import Cart from './pages/Cart'
import CategoriesPAge from './pages/CategoriesPAge'
import PaymentPage from './pages/PaymentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>} />
      
      <Route path='/signupUser' element={<SignUpUser/>} />
      

      <Route path='/' element={<LandingPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/categories' element={<CategoriesPAge/>}/>

      <Route path='/Cart/Payment' element={<PaymentPage/>}/>
     </Routes>
    </>
  )
}

export default App
