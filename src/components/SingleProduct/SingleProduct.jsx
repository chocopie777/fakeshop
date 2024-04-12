import { Box, Breadcrumbs, Button, Container, Link as LinkMUI, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      const response = await fetch('https://fakestoreapi.com/products/' + params.productId);
      const json = await response.json();
      setProduct(json);
    }
    fetchSingleProduct();
  }, []);

  return (
    <Container maxWidth='lg' sx={{ padding: '25px 0' }}>
      <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ marginBottom: '25px' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <LinkMUI underline="hover" color="inherit" component='div'>
            <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
              Главная
            </Link>
          </LinkMUI>
          <LinkMUI underline="hover" color="inherit" component='div'>
            <Link to={'/products/categories/'} style={{ textDecoration: 'none', color: 'inherit' }}>
              Каталог
            </Link>
          </LinkMUI>
          <LinkMUI underline="hover" color="inherit" component='div'>
            <Link to={'/products/categories/' + product.category} style={{ textDecoration: 'none', color: 'inherit' }}>
              {product.category}
            </Link>
          </LinkMUI>
          <Typography color="text.primary">{product.title}</Typography>
        </Breadcrumbs>
      </Box>
      <Stack direction='row' spacing={10}>
        <Box sx={{ width: '500px', height: '500px' }}>
          <img src={product.image}
            alt=""
            width='100%'
            height='100%'
            style={{ objectFit: 'contain', objectPosition: 'top' }}
          />
        </Box>
        <Box width='50%'>
          <Typography variant='h4' sx={{ fontWeight: 700 }} component='h3' marginBottom={2}>
            {product.title}
          </Typography>
          <Typography marginBottom={2}>
            {product.description}
          </Typography>
          <Stack direction='row' width='100%' justifyContent='space-between' spacing={3}>
            <Paper elevation={10} sx={{ padding: 1, flexGrow: 1 }}>
              <Typography variant='h3' fontWeight={700}>
                {product.price}$
              </Typography>
            </Paper>
            <Box>
              <Button variant='contained' sx={{ height: '100%', paddingLeft: 5, paddingRight: 5, textTransform: 'capitalize' }}>В Корзину</Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
