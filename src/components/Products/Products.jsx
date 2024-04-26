import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import { useLocalStorage } from 'hooks/useLocalStorage';

// eslint-disable-next-line react/prop-types
export default function Products({ filterIndex }) {

    const [cart, setCart] = useLocalStorage('cartItems', []);
    // @ts-ignore
    const loadingStatus = useSelector(state => state.products.status);
    // @ts-ignore
    let products = useSelector(state => state.products.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'cart/cartUpdate', payload: cart });
    }, [cart]);

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
                {
                    loadingStatus === 'loading'
                        ?
                        [...Array(8)].map((item, index) =>
                            <Product key={index}
                                id=''
                                title=''
                                price=''
                                image=''
                                onAddInCart=''
                                cart=''
                                loading={true} />
                        )
                        :
                        products.map(product =>
                            <Product key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                onAddInCart={setCart}
                                cart={cart}
                                loading={false} />
                        )

                }
            </Grid>
        </>
    )
}
