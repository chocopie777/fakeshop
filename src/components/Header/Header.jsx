import React, { useState } from 'react'
import { AppBar, Box, Button, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider  sx={{margin: '0 15px'}}/>
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <header>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingBagIcon sx={{ marginRight: 1 }} />
                Fake Shop
                <Button onClick={toggleDrawer(true)} variant="outlined" sx={{
                  marginLeft: '20px', border: '1px solid #fff', color: '#fff', ":hover": {
                    background: '#000', border: '1px solid #000',
                  }
                }}>
                  <MenuIcon sx={{ marginRight: '10px' }} />
                  Категории
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                  {DrawerList}
                </Drawer>
              </Box>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}
