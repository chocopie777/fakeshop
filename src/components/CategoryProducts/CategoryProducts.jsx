// @ts-nocheck
import { Box, Breadcrumbs, Container, Link as LinkMUI, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProductsInCategory } from 'reducers/productsSlice';
import Filter from 'components/Filter/Filter';

export default function CategoryProducts() {
    const [filterIndex, setFilterIndex] = useState(0);
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProductsInCategory(categoryId));
    }, [categoryId]);

    return (
        <Container maxWidth='lg' sx={{ paddingTop: '25px', paddingBottom: '25px' }}>
            <Box display='flex' justifyContent='space-between' sx={{ marginBottom: '25px' }}>
                <Breadcrumbs aria-label="breadcrumb">
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
               <Filter onClickItem={setFilterIndex} filterIndex={filterIndex}/>
            </Box>
            <Typography variant='h4' sx={{ marginBottom: '35px', fontWeight: '700', textTransform: 'capitalize' }}>
                {categoryId}
            </Typography>
            <Products filterIndex={filterIndex}/>
        </Container>
    )
}
