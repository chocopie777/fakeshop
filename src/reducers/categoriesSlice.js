let initialState = {
    categories: [],
    status: 'idle',
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case 'categories/getCategories':
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
    }
}

export async function fetchCategories(dispatch) {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    dispatch({ type: 'categories/getCategories', payload: json });
}