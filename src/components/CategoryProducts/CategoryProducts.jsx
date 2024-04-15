import { Box, Breadcrumbs, Button, Container, Link as LinkMUI, Typography } from '@mui/material';
import Products from 'components/Products/Products'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProductsInCategory } from 'reducers/products/productsSlice';
import SortIcon from '@mui/icons-material/Sort';

export default function CategoryProducts() {
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
                <Button variant='text'>
                    <SortIcon />
                    Фильтр
                </Button>
            </Box>
            <Typography variant='h4' sx={{ marginBottom: '35px', fontWeight: '700', textTransform: 'capitalize' }}>
                {categoryId}
            </Typography>
            <Products />
        </Container>
    )
}
