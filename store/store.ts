import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./numberSlice";
import userSlice from "./userSlice"


const Store = configureStore({
reducer: {
    number: numberSlice,
    username: userSlice,
    }
});

export default Store