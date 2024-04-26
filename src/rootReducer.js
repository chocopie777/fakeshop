import { combineReducers } from 'redux';
import productsReducer from './reducers/productsSlice';
import cartReducer from 'reducers/cartSlice';
import checkoutSnackbarReducer from 'reducers/checkoutSnackbarSlice';
import categoriesReducer from 'reducers/categoriesSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    checkoutSnackbar: checkoutSnackbarReducer,
})

export default rootReducer;