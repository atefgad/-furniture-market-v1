import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productsData from "../../assets/data/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      //const response = await fetch(API_URL);
      //const data = await response.json();
      const data = productsData;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// products [actions - reducers]
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    errors: null,
    isLoading: false,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // getProduct
    // [getProduct.pending]: () => {

    // }
  },
});

export default productSlice.reducer;
