
import { Header } from 'components/Header/Header';
import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import Footer from 'components/Footer/Footer';
import Products from 'components/Products/Products';
// import SingleProduct from 'components/SingleProduct/SingleProduct';

function App() {

  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Products />
        {/* <SingleProduct /> */}
      </main>
      <Footer />
    </Box>
  );
}

export default App;
