import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;