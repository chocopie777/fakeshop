import { createSelector } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/cartUpdate':
            return {
                cartItems: action.payload
            }
        default:
            return state;
    }
}

export const cartUpdate = data => {
    return { type: 'cart/cartUpdate', payload: data }
}

export const selectCartItems = createSelector(
    state => state.cart.cartItems,
    cartItems => cartItems
)