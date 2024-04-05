let initialState = [];

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'products/getAll':
            return action.payload;
        default:
            return state;
    }
}

export async function fetchProducts(dispatch) {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    dispatch({type: 'products/getAll', payload: json});
}