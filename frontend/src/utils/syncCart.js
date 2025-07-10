import axios from "axios"
export const syncCartToBackend = async (userId, reduxCartItems) => {
  try {
    
    const cartPayload = reduxCartItems.map(item => ({
      item: item.item, 
      quantity: item.quantity
    }));
    console.log(cartPayload)
   const response =  await fetch(`http://localhost:5000/api/cart/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cart: cartPayload })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
  } catch (error) {
    console.error("Failed to sync cart to backend", error.message);
  }
};