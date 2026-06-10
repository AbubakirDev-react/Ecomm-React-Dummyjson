import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './data/products'
import { Routes,Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

function App() {
  const products = Products()
  const [showSidebar, setShowSidebar] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(products);
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} query={query} setQuery={setQuery} setResults={setResults} results={setResults}/> 
        <Routes>
          <Route path='/' element={<Home showSidebar={showSidebar} query={query} results={results} setResults={setResults}/>} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
