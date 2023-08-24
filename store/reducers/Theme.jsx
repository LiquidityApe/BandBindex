import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  theme: true,
};

const AppSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { clearState, setTheme } = AppSlice.actions;
export default AppSlice.reducer;
