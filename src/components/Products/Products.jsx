import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product/Product';

// eslint-disable-next-line react/prop-types
export default function Products({ filterIndex }) {
    // @ts-ignore
    let products = useSelector(state => state.products.products);

    switch (filterIndex) {
        case 0:
            products.sort((a, b) => {
                return a.price - b.price;
            })
            break;
        case 1:
            products.sort((a, b) => {
                return b.price - a.price;
            })
    }

    return (
        <>
            <Grid container columnSpacing={3} rowSpacing={3}>
                {products.map(product =>
                    <Product key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image} />
                )}
            </Grid>
        </>
    )
}
