import { Box, Breadcrumbs, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'reducers/products/productsSlice';
import SortIcon from '@mui/icons-material/Sort';
import Product from './Product/Product';

export default function Products() {
    const dispatch = useDispatch();

    // @ts-ignore
    const products = useSelector(state => state.products.products);
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProducts);
    }, []);

    return (
        <Container maxWidth='lg' sx={{ paddingTop: '25px', paddingBottom: '25px' }}>
            <Box display='flex' justifyContent='space-between' sx={{ marginBottom: '25px' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="text.primary">Главная</Typography>
                </Breadcrumbs>
                <Button variant='text'>
                    <SortIcon />
                    Фильтр
                </Button>
            </Box>
            <Grid container columnSpacing={3} rowSpacing={3}>
                {products.map(product =>
                    <Product key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image} />
                )}
            </Grid>
        </Container>
    )
}
