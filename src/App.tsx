import { ThemeProvider } from '@emotion/react';
import './App.css';
import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import { createTheme, responsiveFontSizes } from '@mui/material';

const App: FC = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )

}

export default App;
