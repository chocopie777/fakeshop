import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
export default function CardItem() {
    return (
        <>
            <Card sx={{ maxWidth: 'auto' }} elevation={4}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://img.freepik.com/free-vector/modern-hosting-concept-with-flat-design_23-2147985997.jpg?w=740&t=st=1712128359~exp=1712128959~hmac=7112243f3f40934d080dc854854b778e300803e12509e2b126cbab405643d79d"
                    alt="Paella dish"
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body1'>
                        Title
                    </Typography>
                    <Typography variant='h6' component={'span'}>
                        Price
                    </Typography>
                    <Button variant='contained' size='medium'>
                            В корзину
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}
