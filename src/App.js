
import { Header } from 'components/Header/Header';
import './App.css';
import React, { useEffect } from 'react';
import { Box, Breadcrumbs, Container, Grid, Link, Typography } from '@mui/material';
import CardItem from 'components/CardItem';
import Footer from 'components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'reducers/products/productsSlice';

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts);
  }, []);
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Container maxWidth='lg' sx={{ paddingTop: '25px', paddingBottom: '25px' }}>
          <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '25px' }}>
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </Box>
          <Grid container columnSpacing={3} rowSpacing={3}>
            {products.map(product =>
              <CardItem key={product.id}
                title={product.title}
                price={product.price}
                image={product.image} />
            )}
          </Grid>
        </Container>
      </main>
      <Footer />
    </Box>
  );
}

export default App;
