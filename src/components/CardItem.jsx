import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function CardItem() {
    return (
        <>
            <Card sx={{ maxWidth: 'auto' }} elevation={4}>
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
