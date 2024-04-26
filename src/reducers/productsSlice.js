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

export async function fetchProducts(dispatch) {
    dispatch({ type: 'products/productsLoading' });
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    dispatch({ type: 'products/productsLoaded', payload: json });
}

export function fetchProductsInCategory(category) {
    return async function fetchProductsInCategoryThunk(dispatch) {
        dispatch({ type: 'products/productsLoading' });
        const response = await fetch('https://fakestoreapi.com/products/category/' + category);
        const json = await response.json();
        dispatch({ type: 'products/productsLoaded', payload: json });
    }
}