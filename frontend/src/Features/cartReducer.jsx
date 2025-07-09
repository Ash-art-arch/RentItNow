import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] ,
             
    totalQuantity: 0,      
    totalPrice: 0,         
  },
  reducers: {
    addToCart: (state, action) => {
  const item = state.items.find(i => i.id === action.payload.id);
  const quantityToAdd = action.payload.quantity || 1;
  const pricePerItem = action.payload.price || 0;

  if (item) {
    item.quantity += quantityToAdd;
  } else {
    state.items.push({
      ...action.payload,
      quantity: quantityToAdd   
    });
  }

  state.totalQuantity += quantityToAdd;
  state.totalPrice += pricePerItem * quantityToAdd;
},

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
     clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
