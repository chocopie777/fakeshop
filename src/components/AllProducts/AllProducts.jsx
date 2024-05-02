import { Box, Breadcrumbs, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'reducers/productsSlice';
import Filter from 'components/Filter/Filter';

export default function AllProducts() {
    const [filterIndex, setFilterIndex] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProducts);
    }, []);


    return (
        <>
            <Box display='flex' justifyContent={{xs: 'flex-start', sm: 'space-between'}} sx={{ marginBottom: '25px' }} flexDirection={{xs: 'column', sm: 'row'}}>
                <Breadcrumbs aria-label="breadcrumb" sx={{overflowX: 'auto', '& .MuiBreadcrumbs-ol': {flexWrap: 'nowrap'}}}>
                    <Typography color="text.primary">Главная</Typography>
                </Breadcrumbs>
                <Filter onClickItem={setFilterIndex} filterIndex={filterIndex}/>
            </Box>
            <Products filterIndex={filterIndex}/>
        </>
    )
}
