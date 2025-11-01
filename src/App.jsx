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
import Contact from './pages/Contact'
import About from './pages/About'
function App() {

  return (
    <>
    <BrowserRouter>
    <div className="mb-25">
      <Navbar classname=''/>
    </div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/canvas' element={<Canvas />}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
