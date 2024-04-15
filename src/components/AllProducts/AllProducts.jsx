import { Box, Breadcrumbs, Button, Container, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'reducers/products/productsSlice';
import SortIcon from '@mui/icons-material/Sort';

export default function AllProducts() {
    const dispatch = useDispatch();
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
            <Products />
        </Container>
    )
}
