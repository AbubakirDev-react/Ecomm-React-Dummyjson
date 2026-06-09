import React from 'react'
import '../css/Navbar.css'


const Navbar = ({showSidebar,setShowSidebar}) => {
    
  return (
    <div>
        <div className="container">
      <nav className='navbar'>
        <a href="" className='navbar-brand'>Shopify</a>
        <button className='catalog-btn' onClick={()=>setShowSidebar(!showSidebar)}><i class="bi bi-list"></i></button>
        <form action="" className='search-form'>
            <input type="text" className='search-input' placeholder='Search in Shopify'/>
            <button className='search-btn'>Search</button>
        </form>
        <ul className='navbar-menu'>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-person-circle'></i> Login</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-heart'></i> Liked</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-cart'></i> Cart</a></li>
            <li className='nav-item'><a href="#" className='nav-link'><i className='bi bi-box'></i> Deliveries</a></li>
            <button className='theme-btn'><i class="bi bi-brightness-high"></i></button>
        </ul>
      </nav>
        </div>
    </div>
  )
}

export default Navbar
