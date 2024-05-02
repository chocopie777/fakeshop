import { Box, Container } from '@mui/material'
import CheckoutSnackbar from 'components/CheckoutSnackbar/CheckoutSnackbar'
import Footer from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flexGrow: 1, display: 'flex' }}>
                <Container maxWidth='lg' sx={{marginTop: 3, marginBottom: 3}}>
                    <Outlet />
                </Container>
            </main>
            <CheckoutSnackbar />
            <Footer />
        </Box>
    )
}
