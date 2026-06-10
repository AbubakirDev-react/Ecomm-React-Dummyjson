import React from 'react'
import '../css/Navbar.css'
import Products from '../data/products'

export default function SearchBar({showSidebar,setShowSidebar,query, setQuery, setResults}) {
    const products = Products()
  
  const ChangeHandler = (event) => {
    const filteredByTitle = products.filter((product)=>
      product.title.toLowerCase().includes(event.toLowerCase()))
    const filteredByCategory=products.filter((product)=>
      product.category.toLowerCase().includes(event.toLowerCase())
    )
    
    setResults(filteredByTitle)
    setQuery(event)
  }
  return (
    <div className='searchBar'>
        <nav className='navbar'>
                <form action="" className='search-form'>
                    <button className='catalog-btn' onClick={()=>setShowSidebar(!showSidebar)}><i class="bi bi-list"></i></button>
                    <input type="text" className='search-input' onChange={(e)=>ChangeHandler(e.target.value)} value={query} placeholder='Search in Shopify'/>
                    <button className='search-btn' type='submit'>Search</button>
                </form>
                
        </nav>
    </div>
  )
}
