import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Home.css'
import Navbar from '../components/Navbar'
import Products from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = ({showSidebar,query, results ,setResults}) => {
  
  const products = Products();
  

  return (
    <div className='container'>
        
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
