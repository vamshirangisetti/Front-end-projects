import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  numberofItems: 0,
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.numberofItems += 1;
      state.subtotal += action.payload.cost;
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.index
      );

      state.numberofItems -= 1;
      state.subtotal -= action.payload.cost;
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
