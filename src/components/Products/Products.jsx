import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography } from '@mui/material';
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
            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ marginBottom: '25px' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
                <Button variant='text'>
                    <SortIcon />
                    Фильтр
                </Button>
            </Box>
            <Grid container columnSpacing={3} rowSpacing={3}>
                {products.map(product =>
                    <Product key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image} />
                )}
            </Grid>
        </Container>
    )
}
