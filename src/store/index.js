import { configureStore } from "@reduxjs/toolkit";

// Reducers
import products from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    products,
    cart: cartReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

//store.dispatch(cartTotalPrice());

export default store;
