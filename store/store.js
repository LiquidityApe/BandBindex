import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducers/AppReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import Theme from "./reducers/Theme";
// import { useDispatch, useSelector } from 'react-redux'

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["App"],
};

const allReducers = combineReducers({
  App: AppReducer,
  Theme: Theme,
});

// const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: allReducers,
  // reducer: persistedReducer,
  middleware: [thunk],
  // devTools: process.env.NODE_ENV !== "production",
});
// export const persistor = persistStore(store);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
