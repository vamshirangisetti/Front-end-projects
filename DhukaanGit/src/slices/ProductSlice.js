import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  title: "",
  url: "",
  cost: 0,
  id: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productClick: (state, action) => {
      (state.items = [action.payload]),
        (state.title = state.items[0].title),
        (state.url = state.items[0].url),
        (state.cost = state.items[0].cost),
        (state.id = state.items[0].index)  
    },
  },
});

export const { productClick } = productSlice.actions;
export default productSlice.reducer;
