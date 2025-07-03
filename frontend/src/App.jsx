import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpUser from "./components/SignupUser";
import Login from "./components/Login";
import Cart from "./pages/Cart";
import CategoriesPage from "./pages/CategoriesPAge";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payment" element={<PaymentPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
