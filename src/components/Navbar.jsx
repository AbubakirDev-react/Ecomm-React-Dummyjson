import React from 'react'
import Products from '../data/products'
import { Link } from 'react-router-dom'


const Navbar = ({}) => {
  

  return (
      <nav className='navbar sticky-top bg-body-tertiary navbar-expand-lg'>
        <div className="container">
        <Link to='/' className='navbar-brand'>Shopify</Link>
          <ul className='nav'>
            <li className='nav-item'><Link to="/" className='nav-link'><i className='bi bi-house-fill'></i><span> Home</span></Link></li>
            <li className='nav-item'><Link to="/favourites/" className='nav-link'><i className='bi bi-heart'></i> <span> Favourites</span></Link></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-cart'></i> <span> Cart</span></a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-box'></i> <span> Deliveries</span></a></li>
            <button className='btn text-primary fs-4'><i className="bi bi-moon-stars"></i></button>
        </ul>
        </div>
      </nav>
  )
}

export default Navbar
