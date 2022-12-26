import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../hooks/useLocalStorage";

const initialState = {
  cartItems: getLocalStorage("cartItems")
    ? JSON.parse(getLocalStorage("cartItems"))
    : [],
  totalAmount: getLocalStorage("totalAmount")
    ? JSON.parse(getLocalStorage("totalAmount"))
    : 0,
  totalQuantity: getLocalStorage("totalQuantity")
    ? JSON.parse(getLocalStorage("totalQuantity"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          category: newItem.category,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setLocalStorage("cartItems", state.cartItems);
      setLocalStorage("totalAmount", state.totalAmount);
      setLocalStorage("totalQuantity", state.totalQuantity);
    },

    // increaseQty
    increaseQty: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (
        state.cartItems[itemIndex].quantity >= 0 &&
        state.cartItems[itemIndex].quantity < 10
      ) {
        state.cartItems[itemIndex].quantity += 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setLocalStorage("cartItems", state.cartItems);
      setLocalStorage("totalAmount", state.totalAmount);
    },
    // decreaseQty
    decreaseQty: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        setLocalStorage("cartItems", state.cartItems);
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const cartItemsFiltered = state.cartItems.filter(
          (item) => item.id !== payload.id
        );

        state.cartItems = cartItemsFiltered;
        setLocalStorage("cartItems", state.cartItems);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setLocalStorage("totalAmount", state.totalAmount);
    },
    removeFromCart: (state, { payload }) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== payload.id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        setLocalStorage("cartItems", state.cartItems);
        setLocalStorage("totalQuantity", state.totalQuantity);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setLocalStorage("totalAmount", state.totalAmount);
    },
    // clearCart
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("totalAmount");
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
