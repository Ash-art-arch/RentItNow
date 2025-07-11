import { createSlice } from '@reduxjs/toolkit';
const getNumberOfDays = (startDate, endDate) => {
  if (!startDate || !endDate) return 1;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff);
};

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
  let numDays = getNumberOfDays(action.payload.startDate, action.payload.endDate);
  let itemTotal = pricePerItem * quantityToAdd * numDays;

  if (item) {
    const existingDays = getNumberOfDays(item.startDate, item.endDate);
    item.quantity += quantityToAdd;
     itemTotal = pricePerItem * quantityToAdd * existingDays;
  } else {
    state.items.push({
      ...action.payload,
      quantity: quantityToAdd   
    });
  }

  state.totalQuantity += quantityToAdd;
  state.totalPrice += itemTotal;
},

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
         const numDays = getNumberOfDays(item.startDate, item.endDate);
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price*numDays;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
         const numDays = getNumberOfDays(item.startDate, item.endDate);
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price*numDays;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
          const numDays = getNumberOfDays(item.startDate, item.endDate);
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity*numDays;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
     clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
