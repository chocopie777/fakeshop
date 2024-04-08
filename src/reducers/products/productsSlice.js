let initialState = {
    products: [],
    categories: [],
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'products/getProducts':
            return {
                ...state,
                products: action.payload,
            }
        case 'products/getCategories':
            return {
                ...state,
                categories: action.payload,
            }
        case 'products/getProductsInCategory':
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state;
    }
}

export async function fetchProducts(dispatch, getState) {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    dispatch({ type: 'products/getProducts', payload: json });
    console.log(getState());
}

export async function fetchCategories(dispatch, getState) {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    dispatch({type: 'products/getCategories', payload: json});
    console.log(getState());
}

export function fetchProductsInCategory(category) {
    return async function fetchProductsInCategoryThunk(dispatch, getState) {
        const response = await fetch('https://fakestoreapi.com/products/category/' + category);
        const json = await response.json();
        dispatch({type: 'products/getProductsInCategory', payload: json});
        console.log(getState());
    }
} 