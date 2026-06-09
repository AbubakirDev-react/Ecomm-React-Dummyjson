import React from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Home.css'
import Navbar from '../components/Navbar'
import Products from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = ({showSidebar}) => {

  const products = Products()
  console.log(products[0])
  return (
    <div className='container'>
        
        <div className="home">
            {showSidebar &&  (
              <div className="left-side">
                <Sidebar />
              </div>
            )}
            <div className="right-side">
                {products.map((product)=>(
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
