import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Basket from '../pages/basket/Basket'
import Signupform from '../pages/home/component/signupform/Signupform'
import Home from '../pages/home/Home'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/formik' element={<Signupform/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router