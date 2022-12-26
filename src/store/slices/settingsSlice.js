import { createSlice } from "@reduxjs/toolkit";

//rxslice => to createSlice
export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    settings: {
      language: "en",
      theme: "light",
      themeColor: "white",
      themeFont: "sans-serif",
    },
  },
});

export default settingsSlice.reducer;
