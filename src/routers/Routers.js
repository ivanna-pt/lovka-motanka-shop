import React from "react";

import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Contact from "../pages/Contact";


const Routers = () => {
    return <Routes>
        <Route path='lovka-motanka-shop' element={<Navigate to='home' />}/>
        <Route path='lovka-motanka-shop/home' element={<Home/>} />
        <Route path='lovka-motanka-shop/about' element={<About/>}/>
        <Route path='lovka-motanka-shop/contact' element={<Contact/>}/>
        <Route path='lovka-motanka-shop/shop' element={<Shop/>} />
        <Route path='lovka-motanka-shop/shop/:id' element={<ProductDetails/>} />
        <Route path='lovka-motanka-shop/cart' element={<Cart/>} />
        <Route path='lovka-motanka-shop/checkout' element={<Checkout/>} />
        <Route path='lovka-motanka-shop/login' element={<Login/>} />
        <Route path='lovka-motanka-shop/signup' element={<Signup/>} />
    </Routes>
};
export default Routers;