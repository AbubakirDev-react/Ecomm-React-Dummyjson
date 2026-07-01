import React from 'react'
import { products } from '../../data/products'
import Product from './Product'

export default function Products() {
  return (
    <div className='max-w-350 w-full mx-auto pb-16 px-4 my-2 relative grid grid-cols-2 gap-3'>
      {products.map(product=>(
        <Product product={product} key={product.id}/>
      ))}
    </div>
  )
}
