import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: [],
        totalPrice: 0,
    },
    reducers : {
        addToCart : (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeItem : (state, action) => {

        },
        clearCart : (state) => {
            state.items = [],
            state.totalPrice = 0
        }
    }
});

export const {addToCart, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
