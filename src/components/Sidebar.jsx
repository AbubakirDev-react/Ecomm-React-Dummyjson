import React from 'react'
import '../css/sidebar.css'


const Sidebar = () => {
  const categories = ['beauty','fragrances','furniture','groceries']
  return (
    <div className='sidebar'>
      <ul className='sidebar-menu'>
        <h2>Categories</h2>
        {categories.map((category)=>(
          
          <li className='sidebar-menu-item'><a href="#" className='sidebar-menu-link'>{category}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
