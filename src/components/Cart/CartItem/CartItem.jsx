/* eslint-disable react/prop-types */
import { Box, Button, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import DeleteCardItemDialog from 'components/DeleteCardItemDialog/DeleteCardItemDialog';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function CartItem({ data, cart, onChangeCart }) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickPlus = () => {
        const nextCart = cart.map((item) => {
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
        const nextCart = cart.reduce((arr, item) => {
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
        let nextCart = cart.filter((item) => {
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
        const nextCart = cart.map((item) => {
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
        <Paper elevation={5} sx={{ display: 'flex', padding: '25px', justifyContent: 'space-between' }}>
            <Box display='flex'>
                <Box display='flex' alignItems='center'>
                    <Checkbox checked={getCheckboxStatus()} onClick={handleClickCheckbox} />
                </Box>
                <Link to={'/products/' + data.id} style={{ display: 'inline-flex' }}>
                    <img src={data.image} width='150px' height='150px' style={{ objectFit: 'contain', marginRight: 5 }} />
                </Link>
                <Box>
                    <Link to={'/products/' + data.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant='h6' component='h3'>
                            {data.title}
                        </Typography>
                    </Link>
                    <Box display='flex' alignItems='flex-start' marginTop='25px'>
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
                <Typography variant='h5' component='span' sx={{ fontWeight: 700, marginTop: '15px' }}>
                    {data.price}$
                </Typography>
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
