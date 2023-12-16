import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginPage from '../Authentication/LoginPage'
import SignupPage from '../Authentication/SignupPage'
import CartPage from '../Cart/CartPage'
import HomePage from '../Home/HomePage'
import MyOrderPage from '../MyOrder/MyOrderPage'
import ProductsPage from '../Products/ProductsPage'
import SingleProductPage from '../SingleProduct/SingleProductPage'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/1' element={<SingleProductPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/myorders' element={<MyOrderPage />} />
        </Routes>
    )
}

export default Routing