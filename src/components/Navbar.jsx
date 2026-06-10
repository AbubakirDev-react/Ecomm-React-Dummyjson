import React from 'react'
import '../css/Navbar.css'
import Products from '../data/products'
import { Link } from 'react-router-dom'


const Navbar = ({}) => {
  

  return (
    <div className='Navbar'>
      <nav className='navbar'>
        <div className="container">
        <Link to='/' className='navbar-brand'>Shopify</Link>
        <ul className='navbar-menu'>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-house-fill'></i>Home</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-person-circle'></i> Login</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-heart'></i> Liked</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-cart'></i> Cart</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-box'></i> Deliveries</a></li>
            <button className='theme-btn'><i class="bi bi-brightness-high"></i></button>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
