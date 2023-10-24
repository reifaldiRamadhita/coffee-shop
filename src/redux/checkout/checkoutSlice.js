import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [],
  reducers: {
    addCoffeeToCheckout: (state, action) => {
      state[0] = action.payload;
    },
    deleteCoffeeCheckout: (state) => {
      state.pop();
    },
  },
});

export const { addCoffeeToCheckout, deleteCoffeeCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
