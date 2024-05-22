import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'reducers/cartSlice';
import categoriesReducer from 'reducers/categoriesSlice';
import checkoutSnackbarReducer from 'reducers/checkoutSnackbarSlice';
import productsReducer from 'reducers/productsSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        checkoutSnackbar: checkoutSnackbarReducer,
    }
})

export default store;