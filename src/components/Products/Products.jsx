import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product/Product';

export default function Products() {
    // @ts-ignore
    const products = useSelector(state => state.products.products);

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
