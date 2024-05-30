import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export type CheckoutSnackbarState = {
    isCheckoutSnackbar: boolean
}

const initialState: CheckoutSnackbarState = {
    isCheckoutSnackbar: false,
}

const checkoutSnackbarSlice = createSlice({
    name: 'checkoutSnackbar',
    initialState,
    reducers: {
        checkoutSnackbarUpdate(state, action: PayloadAction<boolean>) {
            state.isCheckoutSnackbar = action.payload;
        }
    }
});

export const { checkoutSnackbarUpdate } = checkoutSnackbarSlice.actions;

export default checkoutSnackbarSlice.reducer;

export const selectIsCheckoutSnackbar = createSelector(
    (state: RootState) => state.checkoutSnackbar.isCheckoutSnackbar,
    isCheckoutSnackbar => isCheckoutSnackbar
)