import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUpUser from './components/SignupUser';
import Login from './components/Login';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import ProductPage from './pages/ProductPage';
import CategoriesPage from './pages/CategoriesPAge';
import Dashboard from './pages/Dashboard.jsx';
import ProductUpload from'./pages/ProductUpload.jsx';
import CustomerResponse from './pages/CustomerResponse.jsx'
import Settings from './pages/Settings.jsx'
import ProductEdit from './pages/ProductEdit.jsx';
import Loader from'./components/Loader.jsx';
import { userContext } from './providers/userProviders';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart } from './Features/cartReducer';
import { loadCartFromBackend } from './utils/loadCart';
import Success from './pages/SuccessPage.jsx';
import OrderHistory from './components/OrderHistory.jsx';
function App() {
  const { user, setUser } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);

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
          credentials: "include",
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
      if (!user || !user.id) return;

      try {
        const cartData = await loadCartFromBackend(user.id);
        console.log("cartdata", cartData);
        if (cartData?.length) {
          dispatch(clearCart())
          cartData.forEach((item) => {
            if (item && item.item) {
              console.log("🧩 Dispatching addToCart for item:", {
                id: item.item._id,
                title: item.item.name,
                quantity: item.quantity,
              });

              dispatch(
                addToCart({
                  id: item.item._id || item.item,
                  title: item.item.name || "Product",
                  size: "Default Size",
                  color: "Default Color",
                  price: item.item.price || 0,
                  image: item.item.images?.[0] || "",
                  quantity: item.quantity || 1,
                })
              );
            }
          });
        }
      } catch (err) {
        console.error("Failed to load cart on app start:", err.message);
      }
    };
    if (cartItem.length === 0) {
      loadUserCart();
    }
  }, [dispatch, user]);

  if(loading){
    return(
      <div className='w-screen h-screen bg-black grid place-content-center'>

        <Loader/>
      </div>
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
        <Route path="/productedit" element={<ProductEdit />} />
        <Route path="/productedit/productupload" element={<ProductUpload />} />
        <Route path="/productupload/:id" element={<ProductUpload />} />
        <Route
          path="/dashboard"
          element={
            user?.role == "Seller" ? (
              <Dashboard />
            ) : (
              <Navigate to={"/signup?role=Seller"} />
            )
          }
        />
        <Route
          path="/productupload"
          element={
            user?.role == "Seller" ? (
              <ProductUpload />
            ) : (
              <Navigate to={"/signup?role=Seller"} />
            )
          }
        />
        <Route
          path="/customerresponse"
          element={
            user?.role == "Seller" ? (
              <CustomerResponse />
            ) : (
              <Navigate to={"/signup?role=Seller"} />
            )
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
