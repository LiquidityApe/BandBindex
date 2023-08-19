import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk();

export const initialState = {
  User: "",
  balance: 0,
  Claimed: false,
  token: "0xFaaBD9b1E4FDE7C42BF10a8165b21D9Eb19141a4",
  dailyClaim: 10,
};

const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    clearState(state) {
      state = undefined;
    },
    claimPoints(state) {
      state.Points = state.Points + state.dailyClaim;
      state.dailyClaim >= 100 ? (state.dailyClaim = 10) : null;
    },
    setDailyClaim(state, action) {
      state.dailyClaim = action.payload ? action.payload : 10;
    },
    progressClaim(state) {
      state.dailyClaim =
        state.dailyClaim < 60
          ? state.dailyClaim + 10
          : state.dailyClaim >= 60
          ? state.dailyClaim + 40
          : state.dailyClaim >= 100
          ? 10
          : null;
    },
    setClaimed(state, action) {
      state.lastClaim = new Date();
      state.Claimed = action.payload;
      // console.log(state.lastClaim[2]);
    },
    updateAddress(state, action) {
      state.User = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const {
  progressClaim,
  claimPoints,
  setClaimed,
  setDailyClaim,
  clearState,
  updateAddress,
  setToken,
  setBalance,
} = AppSlice.actions;
export default AppSlice.reducer;

// initialState.lastClaim === undefined &&
//   persistor.pause() &
//     persistor.flush().then(() => {
//       return persistor.purge();
//     });
