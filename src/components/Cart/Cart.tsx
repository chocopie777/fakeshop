import { Box, Button, Checkbox, CircularProgress, FormControlLabel, Paper, Stack, Typography } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { fetchProducts, selectLoadingStatus, selectProducts } from 'reducers/productsSlice';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Link } from "react-router-dom";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useNavigate } from "react-router-dom";
import DeleteCardItemDialog from 'components/DeleteCardItemDialog/DeleteCardItemDialog';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { cartUpdate } from 'reducers/cartSlice';
import { checkoutSnackbarUpdate } from 'reducers/checkoutSnackbarSlice';
import { CartItems, CartLocalStorage } from 'global/types';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import CartItem from './CartItem/CartItem';

const Cart: FC = () => {
    const [cartItems, setCartItem] = useState<CartItems>([]);
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const loadingStatus = useAppSelector(selectLoadingStatus);
    const [cart, setCart] = useLocalStorage<CartLocalStorage>('cartItems', []);
    const getInitState = () => {
        let checkboxStatus = true;
        for (const item of cart) {
            if (!item.checked) {
                checkboxStatus = false;
            }
        }
        return checkboxStatus;
    }
    const [isCheckboxSelectAll, setIsCheckboxSelectAll] = useState(getInitState());
    const navigate = useNavigate();
    const [isCheckout, setIsCheckout] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isDisplayMobileCheckout, setIsDisplayMobileCheckout] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        const nextCartItems = [];
        for (const cartItem of cart) {
            const productItem = products.find((product) => product.id === cartItem.id);
            if (productItem !== undefined) {
                nextCartItems.unshift(productItem);
            }
        }
        setCartItem(nextCartItems);
    }, [products, cart]);

    useEffect(() => {
        if (isCheckout) {
            navigate('/products');
        }
        setIsCheckboxSelectAll(getInitState());
        dispatch(cartUpdate(cart));
    }, [cart])

    const getTotalPrice = () => {
        return cartItems.reduce((sum, item) => {
            const el = cart.find((el) => {
                if (el.checked) {
                    return item.id === el.id;
                }
                return false;
            })
            const quantity = el !== undefined ? el.quantity : 0;
            return Number((sum + (item.price * quantity)).toFixed(2));
        }, 0)
    }

    const getTotalQuantity = () => {
        return cart.reduce((sum, item) => {
            if (item.checked) {
                return sum + item.quantity
            }
            return sum;
        }, 0)
    }

    const handleCheckboxSelectAll = () => {
        const nextCart = cart.map((item) => {
            return {
                ...item,
                checked: !isCheckboxSelectAll,
            }
        });
        setIsCheckboxSelectAll(!isCheckboxSelectAll);
        setCart(nextCart);
    }

    const handleClickCheckout = () => {
        const nextCart = cart.filter(item => !item.checked); 
        setCart(nextCart);
        setIsCheckout(true);
        dispatch(checkoutSnackbarUpdate(true));
    }

    const handleClickDelete = () => {
        const nextCart = cart.filter((item) => {
            if (item.checked) {
                return false;
            }
            return true;
        });
        setCart(nextCart);
        setOpenDialog(false);
    }

    const handleVisibilityChange = (isVisible: boolean) => {
        if (isVisible) {
            setIsDisplayMobileCheckout(true);
        } else {
            setIsDisplayMobileCheckout(false);
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '35px' }}>
                <Typography variant='h4'
                    sx={{ fontWeight: '700', textTransform: 'capitalize' }}>
                    Корзина
                </Typography>
                {cartItems.length > 0 &&
                    <Typography variant='h6' color='GrayText' sx={{ display: 'inline-block', marginLeft: 1 }}>
                        {getTotalQuantity()}
                    </Typography>}
            </Box>
            {
                loadingStatus !== 'loading' ?
                    cartItems.length > 0
                        ?
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems='flex-start'>
                            <Stack spacing={2} width='100%'>
                                <Paper elevation={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: { xs: '5px 10px', sm: '5px 25px' } }}>
                                    <FormControlLabel control={<Checkbox checked={isCheckboxSelectAll} onClick={handleCheckboxSelectAll} />} label="Выбрать все" />
                                    <Box>
                                        {getTotalQuantity() > 0 && <Button variant='text' onClick={() => setOpenDialog(true)}>Удалить выбранные</Button>}
                                    </Box>
                                </Paper>
                                {cartItems.map((cartItem) => {
                                    return <CartItem key={cartItem.id} data={cartItem} cart={cart} onChangeCart={setCart} />
                                })}
                            </Stack>
                            {
                                !isDisplayMobileCheckout &&
                                <Paper elevation={5} sx={{ padding: '15px', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
                                    {
                                        getTotalQuantity() > 0
                                            ?
                                            <>
                                                <Stack direction='row' alignItems='flex-end' justifyContent='space-between' marginBottom='15px'>
                                                    <Box display='flex' flexDirection='column'>
                                                        <Typography variant='h6' component='span'>
                                                            {
                                                                getTotalQuantity()
                                                            }

                                                            {
                                                                getTotalQuantity() > 1 ? ' товаров' : ' товар'
                                                            }
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant='h6' component='span'>
                                                        {
                                                            getTotalPrice()
                                                        }$
                                                    </Typography>
                                                </Stack>
                                                <Button variant='contained' sx={{ width: '100%' }} onClick={handleClickCheckout}>Перейти к оформлению</Button>
                                            </>
                                            :
                                            <>
                                                <Typography variant='body2' fontWeight={700} marginBottom='15px'>Выберите товары, чтобы перейти к оформлению</Typography>
                                                <Button variant='contained' sx={{ width: '100%' }} disabled>Перейти к оформлению</Button>
                                            </>
                                    }
                                </Paper>
                            }
                            <ReactVisibilitySensor onChange={handleVisibilityChange} partialVisibility={true}>
                                <Paper elevation={5} sx={{ maxWidth: { xs: 'auto', md: '300px' }, width: '100%', padding: '15px', position: 'sticky', top: 64 }}>
                                    {
                                        getTotalQuantity() > 0
                                            ?
                                            <>
                                                <Typography variant='h6' sx={{ marginBottom: '15px' }}>Детали заказа</Typography>
                                                <Stack direction='row' alignItems='flex-end' justifyContent='space-between' marginBottom='15px'>
                                                    <Box display='flex' flexDirection='column'>
                                                        <Typography variant='caption' component='span'>Итого:</Typography>
                                                        <Typography variant='h6' component='span'>
                                                            {
                                                                getTotalQuantity()
                                                            }

                                                            {
                                                                getTotalQuantity() > 1 ? ' товаров' : ' товар'
                                                            }
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant='h6' component='span'>
                                                        {
                                                            getTotalPrice()
                                                        }$
                                                    </Typography>
                                                </Stack>
                                                <Button variant='contained' sx={{ width: '100%' }} onClick={handleClickCheckout}>Перейти к оформлению</Button>
                                            </>
                                            :
                                            <>
                                                <Typography variant='body2' fontWeight={700} marginBottom='15px'>Выберите товары, чтобы перейти к оформлению</Typography>
                                                <Button variant='contained' sx={{ width: '100%' }} disabled>Перейти к оформлению</Button>
                                            </>
                                    }
                                </Paper>
                            </ReactVisibilitySensor>
                        </Stack>
                        :
                        <Box display='flex' justifyContent='center'>
                            <Stack justifyContent='center' textAlign='center'>
                                <Box marginBottom={3}>
                                    <ProductionQuantityLimitsIcon fontSize='large' />
                                </Box>
                                <Typography variant='h5' fontWeight={700} marginBottom={1}>
                                    Пока пусто
                                </Typography>
                                <Typography>
                                    Воспользуйтесь <Link to='/products/categories' style={{ textDecoration: 'none' }}>каталогом</Link>
                                </Typography>
                            </Stack>
                        </Box>
                    :
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <CircularProgress />
                    </Box>
            }
            {openDialog &&
                <DeleteCardItemDialog
                    onClickDialog={setOpenDialog}
                    openDialog={openDialog}
                    onClickDelete={handleClickDelete} />
            }
        </>
    )
}

export default Cart;
