import { useState } from 'react'

import './App.css'
import './fonts.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/Product'
import Services from './pages/Services'
import Policy from './pages/Policy'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import Canvas from './pages/Canvas'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar outerWidthHeightColor='h-10 bg-black'/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='/canvas' element={<Canvas />}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
