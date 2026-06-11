import React from 'react'


const Sidebar = ({products, setResults}) => {
  const categories = ['beauty','fragrances','furniture','groceries']
  const categoryHandler = (category) =>{
    const filtered = products.filter((product)=>product.category==category)
    console.log(filtered)
    setResults(filtered)
  }
  return (
    <div className='sidebar'>
      <ul className='sidebar-menu'>
        <h2>Categories</h2>
        {categories.map((category)=>(
          <button onClick={()=>categoryHandler(category)}>{category}</button>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
