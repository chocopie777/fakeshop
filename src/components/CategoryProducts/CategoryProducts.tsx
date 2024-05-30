import { Box, Breadcrumbs, Link as LinkMUI, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProductsInCategory } from 'reducers/productsSlice';
import Filter from 'components/Filter/Filter';
import { FilterState } from 'global/types';

const CategoryProducts: FC = () => {
    const [filterIndex, setFilterIndex] = useState<FilterState>(0);
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(fetchProductsInCategory(categoryId));
    }, [categoryId]);

    return (
        <>
            <Box display='flex'
                justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
                flexDirection={{ xs: 'column', sm: 'row' }}
                sx={{ marginBottom: '25px' }}>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{ overflowX: 'auto', '& .MuiBreadcrumbs-ol': { flexWrap: 'nowrap' } }}>
                    <LinkMUI underline="hover" color="inherit" component='div'>
                        <Link to={'/products'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Главная
                        </Link>
                    </LinkMUI>
                    <LinkMUI underline="hover" color="inherit" component='div'>
                        <Link to={'/products/categories/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Каталог
                        </Link>
                    </LinkMUI>
                    <Typography color="text.primary">{categoryId}</Typography>
                </Breadcrumbs>
                <Filter onClickItem={setFilterIndex} filterIndex={filterIndex} />
            </Box>
            <Typography variant='h4' sx={{ marginBottom: '35px', fontWeight: '700', textTransform: 'capitalize' }}>
                {categoryId}
            </Typography>
            <Products filterIndex={filterIndex} />
        </>
    )
}

export default CategoryProducts;
