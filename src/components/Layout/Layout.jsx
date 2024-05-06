import { Box, Container, useMediaQuery } from '@mui/material'
import CheckoutSnackbar from 'components/CheckoutSnackbar/CheckoutSnackbar'
import Footer from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Layout() {
    const mediaQuerySM = useMediaQuery('(min-width: 600px)');
    const simpleBarHeight = mediaQuerySM ? 'calc(100vh - 64px)' : 'calc(100vh - 48px)';

    return (
        <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <SimpleBar style={{ maxHeight: simpleBarHeight, overflowY: 'auto' }}>
                <Box display='flex' flexDirection='column' height={simpleBarHeight}>
                    <main style={{ flexGrow: 1, display: 'flex' }}>
                        <Container maxWidth='lg' sx={{ marginTop: 3, marginBottom: 3 }}>
                            <Outlet />
                        </Container>
                    </main>
                    <CheckoutSnackbar />
                    <Footer />
                </Box>
            </SimpleBar>
        </Box>
    )
}
