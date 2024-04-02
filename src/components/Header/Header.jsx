import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingBagIcon sx={{ marginRight: 1 }} />
                Fake Shop
              </Box>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}
