/* eslint-disable react/prop-types */
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Product({ id, title, price, image, onAddInCart, cart }) {
    const [isInCart, setIsInCart] = useState(false);

    const handleClickOnCart = () => {
        onAddInCart([...cart, { id: id, quantity: 1, checked: true }]);
    }

    useEffect(() => {
        for (let item of cart) {
            if (item.id === id) {
                setIsInCart(true);
            }
        }
    }, [cart]);

    return (
        <Grid item lg={3} md={4} xs={6}>
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
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt={title}
                        sx={{ objectFit: 'contain' }}
                    />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body1' sx={{ position: 'relative', zIndex: 1 }}>
                            {title}
                        </Typography>
                        <Typography variant='h5' component={'span'} sx={{ fontWeight: '700' }}>
                            {price}$
                        </Typography>
                    </CardContent>
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        isInCart
                            ?
                            <Link to={'/cart'} style={{textDecoration: 'none'}}>
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
