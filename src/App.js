
import { Header } from 'components/Header/Header';
import './App.css';
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import CardItem from 'components/CardItem';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <Box sx={{minHeight: '100%', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <main style={{flexGrow: 1}}>
        <Container maxWidth='lg' sx={{ paddingTop: '25px', paddingBottom: '25px' }}>
          <Grid container columnSpacing={3} rowSpacing={3}>
            <Grid item lg={3} md={4} xs={6}>
              <CardItem />
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
              <CardItem />
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
              <CardItem />
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
              <CardItem />
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
              <CardItem />
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
              <CardItem />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </Box>
  );
}

export default App;
