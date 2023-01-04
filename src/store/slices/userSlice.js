import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../hooks/useLocalStorage";

const initialState = {
  user: getLocalStorage("user") ? JSON.parse(getLocalStorage("user")) : [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      setLocalStorage("user", state.user);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    addShippingAddress: (state, action) => {
      state.user.addresses.push(action.payload);

      // /state.user.address = { ...state.user.address, ...action.payload };
    },
  },
});

export const { login, logout, addShippingAddress } = userSlice.actions;

export default userSlice.reducer;
