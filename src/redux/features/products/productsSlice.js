import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {onValue, ref, get, child} from "firebase/database";
import {fireData} from "../../../utils/firebase";

const initialState = {
    productsItems: [],
    isLoading: false,
    bestSaleProducts: [],
    trendingProducts: [],
}

export const getProductsItems = createAsyncThunk('products/getProductsItems',
    async (name, thunkAPI) => {
        try{
            const dbRef = ref(fireData)
            return await get(child(dbRef, "products")).then((snapshot) => {
                const data = snapshot.val();
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    return data;
                } else {
                    console.log("No data available");
                }})
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
    );

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        displayTrendingProducts: (state) => {
            state.trendingProducts = state.productsItems.filter(item => item.category === 'ukraine').slice(0,4);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsItems.pending, (state) => {
            state.isLoading = true;
            })
            .addCase(getProductsItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productsItems = action.payload;
                console.log(state.productsItems);
                state.trendingProducts = state.productsItems.filter(item => item.category === 'ukraine').slice(0,4);
                state.bestSaleProducts = state.productsItems.filter(item => item.avgRating > 4.7).slice(0,4);
                console.log(state.trendingProducts);
            })
            .addCase(getProductsItems.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action)
            })
    }
})

export const {getItems } = productsSlice.actions;

export default productsSlice.reducer;