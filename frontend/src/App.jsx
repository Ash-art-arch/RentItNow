import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Cart from './pages/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
     </Routes>
    </>
  )
}

export default App
