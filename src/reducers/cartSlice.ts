import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { CartLocalStorage } from "global/types";
import { RootState } from "store";

export type CartState = {
    cartItems: CartLocalStorage
}

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartUpdate(state, action: PayloadAction<CartLocalStorage>) {
            state.cartItems = action.payload;
        }
    }
});

export const { cartUpdate } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = createSelector(
    (state: RootState) => state.cart.cartItems,
    cartItems => cartItems
)