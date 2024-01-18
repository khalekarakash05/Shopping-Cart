import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./Slices/cartSlice";
import cartReducer from '../redux/Slices/cartSlice';


export const store= configureStore({
    reducer:{
        cart:cartReducer,
    }
});