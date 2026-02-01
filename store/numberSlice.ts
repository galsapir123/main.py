import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: 'number',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1, 
        decrement: (state) => state - 1,
    }
});

export const {increment, decrement} = numberSlice.actions;

export default numberSlice.reducer;


