import axios from "axios";

export const loadCartFromBackend = async (userId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
    
    if (!response.ok) {
      throw new Error("Failed to load cart");
    }

    const data = await response.json();
    console.log(" Parsed cart data:", data);

    return data.cart || [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
};
