import { Box, Typography } from '@mui/material';
import Footer from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{flexGrow: 1}}>
                <Box display='flex' flexGrow={1} justifyContent='center' alignItems='center' flexDirection='column' marginTop='50px'>
                    <Typography variant='h6' marginBottom='20px'>
                        Извините, произошла непредвиденная ошибка..
                    </Typography>
                    <Typography variant='body1' sx={{ opacity: 0.8 }}>
                        <i>{error.
                            // @ts-ignore
                            statusText || error.message}</i>
                    </Typography>
                </Box >
            </main>
            <Footer />
        </Box>
    )
}
