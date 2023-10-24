import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.size =
          itemInCart.size === action.payload.size
            ? itemInCart.size
            : itemInCart.size.concat(action.payload.size);

        itemInCart.temperature =
          itemInCart.temperature === action.payload.temperature
            ? itemInCart.temperature
            : itemInCart.temperature.concat(action.payload.temperature);

        itemInCart.amount = itemInCart.amount.concat(action.payload.amount);

        itemInCart.price = itemInCart.price.concat(action.payload.price);
      } else {
        state.data.push(action.payload);
      }
    },

    removeItemInCart: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeItemInCart } = cartSlice.actions;
export default cartSlice.reducer;
