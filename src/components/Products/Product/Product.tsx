/* eslint-disable react/prop-types */
import { Box, Button, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import { CartLocalStorage } from 'global/types';
import React, { FC, useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

type Props = {
    id: number | null,
    title: string | null,
    price: number | null,
    image: string | null,
    onAddInCart: React.Dispatch<React.SetStateAction<CartLocalStorage>> | null,
    cart: CartLocalStorage | null,
    loading: boolean,
}

const Product: FC<Props> = ({ id, title, price, image, onAddInCart, cart, loading }) => {
    const [isInCart, setIsInCart] = useState<boolean>(false);

    const handleClickOnCart = () => {
        if (onAddInCart !== null) {
            if (cart !== null) {
                if (id !== null) {
                    onAddInCart([...cart, { id: id, quantity: 1, checked: true }]);
                }
            }
        }
    }

    useEffect(() => {
        if (cart !== null) {
            for (let item of cart) {
                if (item.id === id) {
                    setIsInCart(true);
                }
            }
        }
    }, [cart]);

    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card sx={{
                maxWidth: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                ":hover": {
                    transition: '.1s',
                    transform: 'scale(1.04)'
                }
            }} elevation={4}>
                <Link to={`/products/${id}`} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} />
                <Box>
                    {
                        loading
                            ?
                            <Skeleton variant="rectangular" width='100%' height={194} />
                            :
                            <CardMedia
                                component="img"
                                height="194"
                                image={image !== null ? image : ''}
                                alt={title !== null ? title : ''}
                                sx={{ objectFit: 'contain' }}
                            />
                    }
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body1' sx={{ position: 'relative', zIndex: 1 }}>
                            {
                                loading
                                    ?
                                    <Skeleton />
                                    :
                                    title
                            }
                        </Typography>
                        <Typography variant='h5' component={'span'} sx={{ fontWeight: '700' }}>
                            {
                                loading
                                    ?
                                    <Skeleton />
                                    :
                                    price + '$'
                            }
                        </Typography>
                    </CardContent>
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        loading
                            ?
                            <Skeleton height={64} />
                            :
                            isInCart
                                ?
                                <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                                    <Button
                                        component='div'
                                        variant='outlined'
                                        size='medium'
                                        sx={{ position: 'relative', zIndex: 1, display: 'flex' }}
                                        onClick={() => { handleClickOnCart() }}>
                                        В корзине
                                    </Button>
                                </Link>
                                :
                                <Button
                                    component='div'
                                    variant='contained'
                                    size='medium'
                                    sx={{ position: 'relative', zIndex: 1 }}
                                    onClick={() => { handleClickOnCart() }}>
                                    В корзину
                                </Button>
                    }
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Product;
