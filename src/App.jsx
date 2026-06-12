import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './data/products'
import { Routes,Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Favourites from './pages/Favourites'
import FavouriteProvider from './context/favouriteContext'
import CartProvider from './context/cartContext'
import Checkout from './pages/checkout'

function App() {
  const [ favourites,setFavourites ] = useState([]);
  return (
    <>
    <CartProvider>
      <FavouriteProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home setFavourites={setFavourites} />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/favourites/' element={<Favourites favourites={favourites} /> } />
          <Route path='/checkout/' element={<Checkout />} />
        </Routes>
        <Footer/>
      </FavouriteProvider>
    </CartProvider>
    </>
  )
}

export default App
