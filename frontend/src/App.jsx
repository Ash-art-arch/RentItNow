import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'

import SignUpUser from './components/SignupUser'
import SignUpSeller from './components/SignupSeller'
import Login from './components/Login'

import Cart from './pages/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signupSeller' element={<SignUpSeller/>} />
      <Route path='/signupUser' element={<SignUpUser/>} />
      

      <Route path='/' element={<LandingPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      

     </Routes>
    </>
  )
}

export default App
