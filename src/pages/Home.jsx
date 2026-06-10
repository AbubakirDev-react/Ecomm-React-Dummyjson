import React, { useEffect,useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Home.css'
import Navbar from '../components/Navbar'
import Products from '../data/products'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

const Home = () => {
  
  const products = Products();
  const [showSidebar, setShowSidebar] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(products);

  return (
    <div className='container'>
        <SearchBar  showSidebar={showSidebar} setShowSidebar={setShowSidebar} query={query} setQuery={setQuery} setResults={setResults} results={setResults} />
        <div className="home">
            {showSidebar &&  (
              <div className="left-side">
                <Sidebar products={products} setResults={setResults} />
              </div>
            )}
            <div className="right-side">
                {results.map((product)=>(
                  <div className="card" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home
