import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartUpdate(state, action) {
            state.cartItems = action.payload;
        }
    }
});

export const { cartUpdate } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = createSelector(
    state => state.cart.cartItems,
    cartItems => cartItems
)