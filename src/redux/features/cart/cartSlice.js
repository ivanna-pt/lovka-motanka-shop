import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    // isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) =>
                item.id === newItem.id
            );

            state.totalQuantity ++;

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    price: newItem.price,
                    image: newItem.imgName,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
            }

            console.log(state.totalQuantity);
            console.log(state.cartItems);
            console.log(newItem)
        },
        calculateTotal: (state) => {
            let quantity = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                quantity +=item.quantity;
                total += item.quantity * item.price;
            });
            state.totalQuantity = quantity;
            state.totalAmount = total;
        }
    }
});

export const {addItem, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;