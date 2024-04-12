
import { Header } from 'components/Header/Header';
import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import Footer from 'components/Footer/Footer';
import Products from 'components/Products/Products';
// import ErrorPage from 'components/ErrorPage/ErrorPage';
import SingleProduct from 'components/SingleProduct/SingleProduct';
import { Navigate, Route, Routes } from 'react-router-dom';
import Categories from 'components/Categories/Categories';

function App() {

  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1, display: 'flex' }}>
        <Routes>
          <Route path='/' element={<Navigate to='/products' replace={true}/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<SingleProduct />} />
          <Route path='/products/categories' element={<Categories />} />
          <Route path='/products/categories/:categoryId' element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </Box>
  );
}

export default App;
