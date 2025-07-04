import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
