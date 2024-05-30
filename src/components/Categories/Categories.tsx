import { Box, Breadcrumbs, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkMUI } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCategories } from 'reducers/categoriesSlice';

const Categories: FC = () => {
    const categories = useSelector(selectCategories);

    return (
        <>
            <Box>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{ overflowX: 'auto', '& .MuiBreadcrumbs-ol': { flexWrap: 'nowrap' } }}>
                    <LinkMUI underline="hover" color="inherit" component='div'>
                        <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
                            Главная
                        </Link>
                    </LinkMUI>
                    <Typography color="text.primary">Каталог</Typography>
                </Breadcrumbs>
                <Typography variant='h4' marginTop='25px' sx={{ fontWeight: '700' }}>
                    Каталог товаров
                </Typography>
                <Box display='flex' justifyContent='center' marginTop='25px'>
                    <Grid container spacing={2}>
                        {categories.map((category) => (
                            <Grid item lg={3} md={4} xs={6} key={category}>
                                <Card variant="outlined" sx={{ ":hover": { transform: 'scale(1.06)', transition: '.1s' } }}>
                                    <Box position='relative'>
                                        <Link to={'/products/categories/' + category} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <Typography>
                                                {category}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Categories;
