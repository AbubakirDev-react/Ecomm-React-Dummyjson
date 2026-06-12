import React from 'react'


const Sidebar = ({products, setResults}) => {
  const categories = ['beauty','fragrances','furniture','groceries']
  
  const categoryHandler = (category) =>{
    const filtered = products.filter((product)=>product.category==category)
    console.log(filtered)
    setResults(filtered)
  }
  return (
    <></>
  )
}

export default Sidebar
