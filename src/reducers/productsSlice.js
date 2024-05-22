import { createSelector, createSlice } from "@reduxjs/toolkit";

let initialState = {
    products: [],
    status: 'idle',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsLoading(state) {
            state.status = 'loading';
        },
        productsLoaded(state, action) {
            state.status = 'idle';
            state.products = action.payload;
        }
    }
})

export const { productsLoaded, productsLoading } = productsSlice.actions;

export default productsSlice.reducer;

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

