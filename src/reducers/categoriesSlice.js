import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

let initialState = {
    categories: [],
    status: 'idle',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    }
})

export default categoriesSlice.reducer;

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    return json
})

export const selectCategories = createSelector(
    state => state.categories.categories,
    categories => categories
)

