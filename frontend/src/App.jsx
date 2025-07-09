import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUpUser from './components/SignupUser';
import Login from './components/Login';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPAge';
import { userContext } from './providers/userProviders';
import Dashboard from './pages/Dashboard.jsx';
import ProductUpload from'./pages/ProductUpload.jsx';
import CustomerResponse from './pages/CustomerResponse.jsx'
import Settings from './pages/Settings.jsx'
import Loader from './components/Loader';
import Success from './pages/SuccessPage.jsx';
function App() {
  const { user, setUser } = useContext(userContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching user profile...");
        const response = await fetch("http://localhost:5000/api/user/profile", {
          method: "get",
          headers: { "Content-Type": "application/json" },
          credentials: "include"
        });
        const data = await response.json();
        console.log(data);
  
        if (!response.ok) {
          console.log("Token invalid or expired. Logging out.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        } else {
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      } catch (error) {
        console.log("Profile fetch failed:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, [setUser]);
  
  if(loading){
    return(
      <Loader/>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUpUser />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/payment' element={<PaymentPage />} />
        <Route path='/productpage' element={<ProductPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/dashboard' element={user?.role=="Seller"?<Dashboard />:<Navigate to={'/signup?role=Seller'}/>} />
        <Route path='/productupload' element={user?.role=="Seller"?<ProductUpload />:<Navigate to={'/signup?role=Seller'}/>} />
        <Route path='/customerresponse' element={user?.role=="Seller"?<CustomerResponse/>:<Navigate to={'/signup?role=Seller'}/>} />
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/Success' element={<Success/>}/>
      </Routes>
    </>
  );
}

export default App;
