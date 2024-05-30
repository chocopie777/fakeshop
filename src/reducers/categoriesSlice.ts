import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export type CategoriesState = {
    categories: Array<string>,
    status: 'idle' | 'loading',
}

const initialState: CategoriesState = {
    categories: [],
    status: 'idle',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Array<string>>) => {
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
    (state: RootState) => state.categories.categories,
    categories => categories
)

