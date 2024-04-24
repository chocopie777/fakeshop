import { Box } from '@mui/material'
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
                <Outlet />
            </main>
            <CheckoutSnackbar />
            <Footer />
        </Box>
    )
}
