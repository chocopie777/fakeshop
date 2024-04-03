import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <Paper variant='outlined' square={true}>
                <Box sx={{ height: 100, display: 'flex', alignItems: 'center' }}>
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='h6' component='span'>
                            Copyright Fake Shop - 2024
                        </Typography>
                    </Container>
                </Box>
            </Paper>
        </footer>
    )
}
