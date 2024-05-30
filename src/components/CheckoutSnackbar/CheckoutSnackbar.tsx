import { Alert, Snackbar } from '@mui/material';
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkoutSnackbarUpdate, selectIsCheckoutSnackbar } from 'reducers/checkoutSnackbarSlice';

const CheckoutSnackbar: FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    const isCheckoutSnackbar = useSelector(selectIsCheckoutSnackbar);

    useEffect(() => {
        if (isCheckoutSnackbar) {
            setOpen(true);
            dispatch(checkoutSnackbarUpdate(false))
        }
    }, [isCheckoutSnackbar]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="success"
                    variant="filled" >
                    Спасибо за покупку!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CheckoutSnackbar;
