/* eslint-disable react/prop-types */
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
export default function CardItem({ title, price, image }) {
    return (
        <Grid item lg={3} md={4} xs={6}>
            <Card sx={{ maxWidth: 'auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={4}>
                <Box>
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                        alt={title}
                        sx={{ objectFit: 'contain' }}
                    />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body1'>
                            {title}
                        </Typography>
                        <Typography variant='h5' component={'span'} sx={{ fontWeight: '700' }}>
                            {price}$
                        </Typography>
                    </CardContent>
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button variant='contained' size='medium'>
                        В корзину
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
