import { createSelector } from "@reduxjs/toolkit";

let initialState = {
    products: [],
    status: 'idle',
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'products/productsLoading':
            return {
                ...state,
                status: 'loading'
            }
        case 'products/productsLoaded':
            return {
                ...state,
                status: 'idle',
                products: action.payload,
            }
        default:
            return state;
    }
}

export const productsLoading = () => {
    return { type: 'products/productsLoading' }
}

export const productsLoaded = data => {
    return { type: 'products/productsLoaded', payload: data }
}

export async function fetchProducts(dispatch) {
    dispatch(productsLoading());
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    dispatch(productsLoaded(json));
}

export function fetchProductsInCategory(category) {
    return async function fetchProductsInCategoryThunk(dispatch) {
        dispatch(productsLoading());
        const response = await fetch('https://fakestoreapi.com/products/category/' + category);
        const json = await response.json();
        dispatch(productsLoaded(json));
    }
}

export const selectProducts = createSelector(
    state => state.products.products,
    products => products
)

export const selectLoadingStatus = createSelector(
    state => state.products.status,
    status => status
)

