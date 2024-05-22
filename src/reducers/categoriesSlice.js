import { createSelector, createSlice } from "@reduxjs/toolkit";

let initialState = {
    categories: [],
    status: 'idle',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories(state, action) {
            state.categories = action.payload;
        }
    }
})

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export async function fetchCategories(dispatch) {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    dispatch(getCategories(json));
}

export const selectCategories = createSelector(
    state => state.categories.categories,
    categories => categories
)

