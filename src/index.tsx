import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ScopedCssBaseline sx={{ height: '100%' }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
