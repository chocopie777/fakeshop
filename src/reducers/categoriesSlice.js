import { createSelector } from "reselect";

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

export const getCategories = data => {
    return { type: 'categories/getCategories', payload: data }
}

export async function fetchCategories(dispatch) {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const json = await response.json();
    dispatch(getCategories(json));
}

export const selectCategories = createSelector(
    state => state.categories.categories,
    categories => categories
)

