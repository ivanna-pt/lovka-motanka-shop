import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productsSlice from "./features/products/productsSlice";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsSlice,
    }
})

export default store;