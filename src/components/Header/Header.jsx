import React, { useEffect, useState } from 'react'
import { AppBar, Badge, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'reducers/products/productsSlice';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const Header = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const categories = useSelector(state => state.products.categories);
  // @ts-ignore
  const cartItems = useSelector(state => state.cart.cartItems);
  const [cart] = useLocalStorage('cartItems', []);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategories);
    dispatch({type: 'cart/cartUpdate', payload: cart});
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6' component='span'>
              Каталог
            </Typography>
            <IconButton aria-label="delete">
              <CloseIcon />
            </IconButton>
          </Box>
        </ListItem>
        {categories.map((category) => (
          <div key={category}>
            <ListItem disablePadding>
              <Link to={'products/categories/' + category} style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText primary={category} />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider sx={{ margin: '0 15px' }} />
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <header style={{position: 'sticky', top: 0, zIndex: 999}}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to='/products' style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center' }}>
                  <ShoppingBagIcon sx={{ marginRight: 1 }} />
                  Fake Shop
                </Link>
                <Button onClick={toggleDrawer(true)} variant="outlined" sx={{
                  marginLeft: '20px', border: '1px solid #fff', color: '#fff', textTransform: 'capitalize', ":hover": {
                    background: '#000', border: '1px solid #000',
                  }
                }}>
                  <MenuIcon sx={{ marginRight: '10px' }} />
                  Каталог
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
              </Box>
            </Typography>
            <Link to='cart' style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon fontSize='medium' />
                </Badge>
                <Typography variant='body2'>Корзина</Typography>
              </Box>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}
