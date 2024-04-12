import Categories from "components/Categories/Categories";
import ErrorPage from "components/ErrorPage/ErrorPage";
import Layout from "components/Layout/Layout";
import Products from "components/Products/Products";
import SingleProduct from "components/SingleProduct/SingleProduct";
import React from "react";
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />} errorElement={<ErrorPage />}>
            <Route path='/' element={<Navigate to='/products' replace={true} />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<SingleProduct />} />
            <Route path='products/categories' element={<Categories />} />
            <Route path='products/categories/:categoryId' element={<Products />} />
        </Route>
    )
)

export default router;