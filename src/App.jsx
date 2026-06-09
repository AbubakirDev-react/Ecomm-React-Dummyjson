import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './data/products'

function App() {
  const products = Products()
  const [showSidebar, setShowSidebar] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(products);
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} query={query} setQuery={setQuery} setResults={setResults} results={setResults}/> 
      <Home showSidebar={showSidebar} query={query} results={results} setResults={setResults}/>
      <Footer/>
    </>
  )
}

export default App
