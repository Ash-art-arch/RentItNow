import { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
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
function App() {
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        console.log("Token invalid or expired. Logging out.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } else {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
    };

    if (!user) {
      fetchProfile();
    }
  }, [user, setUser]);

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
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/productupload' element={<ProductUpload />} />
          <Route path='/customerresponse' element={<CustomerResponse/>} />
          <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </>
  );
}

export default App;
