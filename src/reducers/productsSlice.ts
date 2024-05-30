import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { CartItems } from "global/types";
import { RootState } from "store";

export type ProductsState = {
    products: CartItems,
    status: 'idle' | 'loading',
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<CartItems>) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProductsInCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsInCategory.fulfilled, (state, action: PayloadAction<CartItems>) => {
                state.status = 'idle';
                state.products = action.payload;
            })
    }
})

export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    return json;
})

export const fetchProductsInCategory = createAsyncThunk('products/fetchProductsInCategory', async (category: string | undefined) => {
    const response = await fetch('https://fakestoreapi.com/products/category/' + category);
    const json = await response.json();
    return json;
})

export const selectProducts = createSelector(
    (state: RootState) => state.products.products,
    products => products
)

export const selectLoadingStatus = createSelector(
    (state: RootState) => state.products.status,
    status => status
)

