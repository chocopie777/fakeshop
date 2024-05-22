import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCheckoutSnackbar: false,
}

const checkoutSnackbarSlice = createSlice({
    name: 'checkoutSnackbar',
    initialState,
    reducers: {
        checkoutSnackbarUpdate(state, action) {
            state.isCheckoutSnackbar = action.payload;
        }
    }
});

export const { checkoutSnackbarUpdate } = checkoutSnackbarSlice.actions;

export default checkoutSnackbarSlice.reducer;

export const selectIsCheckoutSnackbar = createSelector(
    state => state.checkoutSnackbar.isCheckoutSnackbar,
    isCheckoutSnackbar => isCheckoutSnackbar
)