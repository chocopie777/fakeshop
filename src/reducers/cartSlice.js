const initialState = {
    cartItems: []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/cartUpdate':
            return {
                cartItems: action.payload
            }
        default:
            return state;
    }
}