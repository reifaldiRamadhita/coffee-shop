import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import checkoutReducer from "./checkout/checkoutSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

// store.subscribe(() => {
//   console.log("store change", store.getState());
// });

export default store;
