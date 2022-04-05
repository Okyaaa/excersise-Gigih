import { createSlice } from "@reduxjs/toolkit";


export const querySlice = createSlice({
    name: "query",
    initialState: {
        value: ""
    },
    reducers: {
        saving: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { saving } = querySlice.actions;

export default querySlice.reducer;