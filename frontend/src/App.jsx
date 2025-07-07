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
import Dashboard from './pages/Dashboard.jsx';
import ProductUpload from './pages/ProductUpload.jsx';
import CustomerResponse from './pages/CustomerResponse.jsx';
import Settings from './pages/Settings.jsx';
import Loader from'./components/Loader.jsx';
import { userContext } from './providers/userProviders';
import { useDispatch } from 'react-redux';
import { addToCart } from './Features/cartReducer';
import { loadCartFromBackend } from './utils/loadCart';


function App() {
  const { user, setUser } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

 
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            
          },
          credentials:"include"
        });

         if (!res.ok) {
          console.log("Token invalid or expired. Logging out.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        } else {
          const data = await res.json();
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
 

 
  useEffect(() => {
    const loadUserCart = async () => {
      console.log("user", user);
      if (!user || !user._id) return;

      try {
        const cartData = await loadCartFromBackend(user._id);
        console.log("cartdata", cartData);
        if (cartData?.length) {
          cartData.forEach(item => {
            if (item && item.item)  {
    console.log("🧩 Dispatching addToCart for item:", {
      id: item.item._id,
      title: item.item.name,
      quantity: item.quantity
    });
            
              dispatch(addToCart({
                id: item.item._id || item.item,
                title: item.item.name || "Product",
                size: "Default Size",
                color: "Default Color",
                price: item.item.price || 0,
                image: item.item.images?.[0] || "",
                quantity: item.quantity || 1
              
              }));
            }
          });
        }
      } catch (err) {
        console.error("Failed to load cart on app start:", err.message);
      }
    };

    loadUserCart();
  }, [dispatch, user]);

  if(loading){
    return(
     <Loader/>
    )
  }
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payment" element={<PaymentPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/dashboard" element={user?.role=="Seller"?<Dashboard />:<Navigate to={'/signup?role=Seller'}/>} />
        <Route path="/productupload" element={user?.role=="Seller"?<ProductUpload />:<Navigate to={'/signup?role=Seller'}/>} />
        <Route path="/customerresponse" element={user?.role=="Seller"?<CustomerResponse/>:<Navigate to={'/signup?role=Seller'} />} />
        <Route path="/settings" element={<Settings />} />
    
      </Routes>
    </>
  );
}

export default App;

