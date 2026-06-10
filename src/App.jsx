import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './data/products'
import { Routes,Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
