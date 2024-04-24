import { combineReducers } from 'redux';
import productsReducer from './reducers/products/productsSlice';
import cartReducer from 'reducers/products/cartSlice';
import checkoutSnackbarReducer from 'reducers/products/checkoutSnackbarSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    checkoutSnackbar: checkoutSnackbarReducer,
})

export default rootReducer;