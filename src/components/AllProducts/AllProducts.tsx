import { Box, Breadcrumbs, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'reducers/productsSlice';
import Filter from 'components/Filter/Filter';
import { FilterState } from 'global/types';

const AllProducts: FC = () => {
    const [filterIndex, setFilterIndex] = useState<FilterState>(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


    return (
        <>
            <Box display='flex' justifyContent={{ xs: 'flex-start', sm: 'space-between' }} sx={{ marginBottom: '25px' }} flexDirection={{ xs: 'column', sm: 'row' }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ overflowX: 'auto', '& .MuiBreadcrumbs-ol': { flexWrap: 'nowrap' } }}>
                    <Typography color="text.primary">Главная</Typography>
                </Breadcrumbs>
                <Filter onClickItem={setFilterIndex} filterIndex={filterIndex} />
            </Box>
            <Products filterIndex={filterIndex} />
        </>
    )
}

export default AllProducts;
