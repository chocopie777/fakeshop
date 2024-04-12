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

export async function fetchProducts(dispatch) {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    dispatch({ type: 'products/getProducts', payload: json });
}

export async function fetchCategories(dispatch) {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    dispatch({ type: 'products/getCategories', payload: json });
}

export function fetchProductsInCategory(category) {
    return async function fetchProductsInCategoryThunk(dispatch) {
        const response = await fetch('https://fakestoreapi.com/products/category/' + category);
        const json = await response.json();
        dispatch({ type: 'products/getProductsInCategory', payload: json });
    }
}