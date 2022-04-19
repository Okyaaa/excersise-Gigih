/* eslint-disable*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface searchQuery {
  value: string;
}

const initialState: searchQuery = {
  value: ""
};

export const querySlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    addToken: (state: searchQuery, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { addToken } = querySlice.actions;
export const selectQuery = (state: RootState) => state.query.value;
export default querySlice.reducer;
