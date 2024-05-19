const initialState = {
    isCheckoutSnackbar: false,
}

export default function checkoutSnackbarReducer(state = initialState, action) {
    switch (action.type) {
        case 'checkoutSnackbar/checkoutSnackbarUpdate':
            return {
                isCheckoutSnackbar: action.payload
            }
        default:
            return state;
    }
}

export const checkoutSnackbarUpdate = data => {
    return { type: 'checkoutSnackbar/checkoutSnackbarUpdate', payload: data }
}