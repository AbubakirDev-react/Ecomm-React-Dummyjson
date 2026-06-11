import React from 'react'
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
    <div className='container'>
        <nav className='navbar'>
                <button className='btn btn-primary' onClick={()=>setShowSidebar(!showSidebar)}><i class="bi bi-list"></i></button>
                <form action="" className='d-flex'>
                    <input type="text" className='form-control me-2' onChange={(e)=>ChangeHandler(e.target.value)} value={query} placeholder='Search in Shopify'/>
                    <button className='btn btn-primary' type='submit'>Search</button>
                </form>
        </nav>
    </div>
  )
}
