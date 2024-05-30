import { Box, Button, Checkbox, FormControlLabel, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { FC } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import DeleteCardItemDialog from 'components/DeleteCardItemDialog/DeleteCardItemDialog';
import { useState } from 'react';
import { CartItem, CartLocalStorage } from 'global/types';

type Props = {
    data: CartItem,
    cart: CartLocalStorage,
    onChangeCart: React.Dispatch<React.SetStateAction<CartLocalStorage>>,
}

const CartItem: FC<Props> = ({ data, cart, onChangeCart }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const theme = useTheme();
    const mediaQuerySM = useMediaQuery(theme.breakpoints.up('sm'));

    const handleClickPlus = () => {
        const nextCart: CartLocalStorage = cart.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                }
            }
            return item;
        });
        onChangeCart(nextCart);
    }

    const handleClickMinus = () => {
        let isStop = false;
        const nextCart: CartLocalStorage = cart.reduce((arr: CartLocalStorage, item) => {
            if (item.id === data.id) {
                if (item.quantity !== 1) {
                    arr.push({
                        ...item,
                        quantity: item.quantity - 1,
                    });
                } else {
                    isStop = true;
                    setOpenDialog(true);
                }
            } else {
                arr.push(item);
            }
            return arr;
        }, [])
        if (!isStop) {
            onChangeCart(nextCart);
        }
    }

    const handleClickDelete = () => {
        let nextCart: CartLocalStorage = cart.filter((item) => {
            return item.id !== data.id;
        })

        onChangeCart(nextCart);
    }

    const getCheckboxStatus = () => {
        const el = cart.find((item) => {
            return item.id === data.id;
        });
        return el !== undefined ? el.checked : true;
    }

    const handleClickCheckbox = () => {
        const nextCart: CartLocalStorage = cart.map((item) => {
            if (item.id === data.id) {
                return {
                    ...item,
                    checked: !item.checked,
                }
            }
            return item;
        });
        onChangeCart(nextCart);
    }

    const getProductQuantity = () => {
        let el = (cart.find((item) => item.id === data.id))
        return el !== undefined ? el.quantity : 1;
    }

    return (
        <Paper elevation={5} sx={{ display: 'flex', padding: { xs: '10px', sm: '25px' }, justifyContent: 'space-between', flexGrow: 1, overflow: 'hidden' }}>
            <Box display='flex'>
                <Box display='flex' alignItems='center'>
                    <FormControlLabel control={<Checkbox checked={getCheckboxStatus()} onClick={handleClickCheckbox} />} label={''} />
                </Box>
                <Link to={'/products/' + data.id} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src={data.image} width={mediaQuerySM ? '150px' : '60px'} height={mediaQuerySM ? '150px' : '60px'} style={{ objectFit: 'contain', marginRight: 5 }} />
                </Link>
                <Box>
                    <Link to={'/products/' + data.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography sx={{ typography: { xs: 'body2', sm: 'h6' }, wordBreak: 'break-word' }} component='h3'>
                            {data.title}
                        </Typography>
                    </Link>
                    {
                        !mediaQuerySM &&
                        <Box marginTop='5px'>
                            <Typography variant='h5' component='span' sx={{ fontWeight: 700 }}>
                                {data.price}$
                            </Typography>
                        </Box>
                    }
                    <Box display='flex' alignItems='flex-start' marginTop={{ xs: '5px', sm: '25px' }}>
                        <Button variant='outlined' sx={{ padding: 0, minWidth: 'auto' }} onClick={handleClickMinus}>
                            <RemoveIcon fontSize='large' />
                        </Button>
                        <Typography variant='h6' component='span' sx={{ padding: '0 15px' }}>
                            {
                                getProductQuantity()
                            }
                        </Typography>
                        <Button variant='outlined' sx={{ padding: 0, minWidth: 'auto' }} onClick={handleClickPlus}>
                            <AddIcon fontSize='large' />
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='flex-end'>
                <IconButton aria-label="delete" onClick={() => setOpenDialog(true)}>
                    <DeleteIcon />
                </IconButton>
                {
                    mediaQuerySM &&
                    <Typography variant='h5' component='span' sx={{ fontWeight: 700, marginTop: '15px' }}>
                        {data.price}$
                    </Typography>
                }
            </Box>
            {openDialog &&
                <DeleteCardItemDialog
                    onClickDialog={setOpenDialog}
                    openDialog={openDialog}
                    onClickDelete={handleClickDelete} />
            }
        </Paper>
    )
}

export default CartItem;
