import { Box, Typography } from '@mui/material';
import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <Box display='flex' flexGrow={1} justifyContent='center' alignItems='center' flexDirection='column'>
            <Typography variant='h6' marginBottom='20px'>
                Извините, произошла непредвиденная ошибка..
            </Typography>
            <Typography variant='body1' sx={{opacity: 0.8}}>
                <i>{error.
                    // @ts-ignore
                    statusText || error.message}</i>
            </Typography>
        </Box >
    )
}
