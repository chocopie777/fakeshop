import { combineReducers } from 'redux';
import productsReducer from './reducers/products/productsSlice';

const rootReducer = combineReducers({
    products: productsReducer
})

export default rootReducer;