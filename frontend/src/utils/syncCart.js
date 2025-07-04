import axios from "axios"
export const syncCartToBackend = async (userId, reduxCartItems) => {
  try {
    const cartPayload = reduxCartItems.map(item => ({
      item: item.id, 
      quantity: item.quantity
    }));

    await axios.post(`/api/cart/${userId}`, { cart: cartPayload });
  } catch (error) {
    console.error("Failed to sync cart to backend", error);
  }
};