import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk();

export const initialState = {
  User: "",
  balance: 0,
  points:0,
  Claimed: false,
  token: "0x1Fa171C036AB2A37Ece104AF47c4c32fc5e67CC4",
  dailyClaim: 5,
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
    setPoint(state,action) {
      state.points = action.payload
    
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
  setPoint,
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
