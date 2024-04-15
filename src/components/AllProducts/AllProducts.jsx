import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'reducers/products/productsSlice';
import Filter from 'components/Filter/Filter';

export default function AllProducts() {
    const [filterIndex, setFilterIndex] = useState(0);
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
                <Filter onClickItem={setFilterIndex} filterIndex={filterIndex}/>
            </Box>
            <Products filterIndex={filterIndex}/>
        </Container>
    )
}
