/* eslint-disable*/
import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import query from "./query-slice";
// import queryReducer from "./query-reducer";

const store: Store = configureStore({
  reducer: {
    query,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
