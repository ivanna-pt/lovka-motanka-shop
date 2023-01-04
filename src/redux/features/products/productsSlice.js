import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {onValue, ref, get, child} from "firebase/database";
import {fireData} from "../../../utils/firebase";

const initialState = {
    productsItems: [],
    filteredProducts: [],
    isLoading: false,
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
        },
        filterProducts: (state, action) => {
            let filterValue = action.payload.value;

            switch (filterValue) {
                case "Beregynia":
                    state.filteredProducts = state.productsItems.filter((item) => item.category === "Beregynia");
                    filterValue = "";
                    break;
                case "bride":
                    state.filteredProducts = state.productsItems.filter((item) => item.category === "bride");
                    filterValue = "";
                    break;
                case "ukraine":
                    state.filteredProducts = state.productsItems.filter((item) => item.category === "ukraine");
                    filterValue = "";
                    break;
                case "all":
                    state.filteredProducts = state.productsItems;
                    filterValue = "";
                    break;
                default:
                    state.filteredProducts = state.productsItems;
            }


            // if (filterValue != "Sort By Category" && filterValue != "") {
            //     state.filteredProducts = state.productsItems.filter((item) => item.category === filterValue);
            //     filterValue = "";
            // }
            // if (filterValue == "all"){
            //     state.filteredProducts = state.productsItems
            // }

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
                state.filteredProducts = action.payload;
                console.log(state.productsItems);
            })
            .addCase(getProductsItems.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action)
            })
    }
})

export const {filterProducts } = productsSlice.actions;

export default productsSlice.reducer;