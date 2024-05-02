import { Box, Breadcrumbs, Button, Link as LinkMUI, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const [loadingStatus, setLoadingStatus] = useState('idle');
  const params = useParams();
  const [cart, setCart] = useLocalStorage('cartItems', []);
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    async function fetchSingleProduct() {
      setLoadingStatus('loading');
      const response = await fetch('https://fakestoreapi.com/products/' + params.productId);
      const json = await response.json();
      setProduct(json);
      setLoadingStatus('idle');
    }
    fetchSingleProduct();
  }, []);

  useEffect(() => {
    dispatch({ type: 'cart/cartUpdate', payload: cart });

    for (let item of cart) {
      if (item.id == params.productId) {
        setIsInCart(true);
      }
    }
  }, [cart]);

  const handleClickOnCart = () => {
    // @ts-ignore
    setCart([...cart, { id: product.id, quantity: 1, checked: true }]);
  }

  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ marginBottom: '25px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{overflowX: 'auto', '& .MuiBreadcrumbs-ol': {flexWrap: 'nowrap'}}}>
          <LinkMUI underline="hover" color="inherit" component='div'>
            <Link to='/products' style={{ textDecoration: 'none', color: 'inherit', textWrap: 'nowrap', whiteSpace: 'nowrap' }}>
              {
                loadingStatus === 'loading'
                  ?
                  <Skeleton width={100} />
                  :
                  'Главная'
              }
            </Link>
          </LinkMUI>
          <LinkMUI underline="hover" color="inherit" component='div'>
            <Link to={'/products/categories/'} style={{ textDecoration: 'none', color: 'inherit', textWrap: 'nowrap', whiteSpace: 'nowrap' }}>
              {
                loadingStatus === 'loading'
                  ?
                  <Skeleton width={100} />
                  :
                  'Каталог'
              }
            </Link>
          </LinkMUI>
          <LinkMUI underline="hover" color="inherit" component='div'>
            <Link to={'/products/categories/' + product.category} style={{ textDecoration: 'none', color: 'inherit', textWrap: 'nowrap', whiteSpace: 'nowrap' }}>
              {
                loadingStatus === 'loading'
                  ?
                  <Skeleton width={100} />
                  :
                  product.category
              }
            </Link>
          </LinkMUI>
          <Typography color="text.primary" sx={{textWrap: 'nowrap', whiteSpace: 'nowrap'}}>
            {
              loadingStatus === 'loading'
                ?
                <Skeleton width={100} />
                :
                product.title
            }
          </Typography>
        </Breadcrumbs>
      </Box>
      <Stack direction={{xs: 'column', md: 'row'}} spacing={10} alignItems={{xs: 'center', md: 'flex-start'}} justifyContent='space-between'>
        <Box sx={{ maxWidth: '400px', height: '400px' }}>
          {
            loadingStatus === 'loading'
              ?
              <Skeleton width='100%' height='100%' />
              :
              <img src={product.image}
                alt=""
                width='100%'
                height='100%'
                style={{ objectFit: 'contain', objectPosition: 'top' }}
              />
          }
        </Box>
        <Box width={{xs: '100%', md: '50%'}}> 
          <Typography variant='h4' sx={{ fontWeight: 700, overflowX: 'auto' }} component='h3' marginBottom={2}>
            {
              loadingStatus === 'loading'
                ?
                <Skeleton />
                :
                product.title
            }
          </Typography>
          <Typography marginBottom={2}>
            {
              loadingStatus === 'loading'
                ?
                <Skeleton />
                :
                product.description
            }
          </Typography>
          <Stack direction={{xs: 'column', sm: 'row'}} width='100%' justifyContent='space-between' spacing={3}>
            <Paper elevation={10} sx={{ padding: 1, flexGrow: 1 }}>
              <Typography variant='h3' fontWeight={700}>
                {
                  loadingStatus === 'loading'
                    ?
                    <Skeleton />
                    :
                    product.price + '$'
                }
              </Typography>
            </Paper>
            <Box>
              {
                loadingStatus === 'loading'
                  ?
                  <Skeleton width={200} height={100}/>
                  :
                  isInCart
                    ?
                    <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                      <Button
                        component='div'
                        variant='outlined'
                        sx={{ height: '100%', width: '100%', paddingLeft: 5, paddingRight: 5, textTransform: 'capitalize' }}>
                        В Корзине
                      </Button>
                    </Link>
                    :
                    <Button
                      component='div'
                      variant='contained'
                      sx={{ height: '100%', width: '100%', paddingLeft: 5, paddingRight: 5, textTransform: 'capitalize' }}
                      onClick={handleClickOnCart}>
                      В Корзину
                    </Button>
              }
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
