import { Alert, Snackbar } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function CheckoutSnackbar() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    // @ts-ignore
    const isCheckoutSnackbar = useSelector(state => state.checkoutSnackbar.isCheckoutSnackbar);

    useEffect(() => {
        if (isCheckoutSnackbar) {
            setOpen(true);
            dispatch({type: 'checkoutSnackbar/checkoutSnackbarUpdate', payload: false})
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
