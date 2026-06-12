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
  const categories = ['beauty','fragrances','furniture','groceries']
  const categoryHandler = (category) =>{
    const filtered = products.filter((product)=>product.category==category)
    console.log(filtered)
    setResults(filtered)
  }
  return (
    <div className='container'>
        <nav className='navbar'>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCategory" aria-controls="offcanvasCategory"><i className="bi bi-list"></i></button>
                <form action="" className='d-flex'>
                    <input type="text" className='form-control me-2' onChange={(e)=>ChangeHandler(e.target.value)} value={query} placeholder='Search in Shopify'/>
                    <button className='btn btn-primary' type='submit'>Search</button>
                </form>
        </nav>
        

<div className="offcanvas offcanvas-start w-25" tabIndex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Offcanvas</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex flex-column">
    <nav className='navbar'>
      <ul className='navbar-nav'>
      
        {categories.map((category,index)=>(
          <li style={{width:'auto'}} className='nav-item' key={index} data-bs-dismiss="offcanvas">
            <a href="#" className='nav-link' onClick={(e)=>categoryHandler(category)}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</div>
    </div>
  )
}
