import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
  name: "",
  image: null,
  keywords: ["voski", "dizzle", "shalewa"],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fileinput(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    changeinput(state, action) {
      state.name = action.payload;
    },
    addtag(state, action) {
      state.keywords.push(action.payload);
    },
    removetag(state, action) {
      state.keywords = state.keywords.filter((el, i) => i !== action.payload);
    },
  },
});

export const { changeinput, addtag, removetag, fileinput } = formSlice.actions;

export default formSlice.reducer;
