import React from 'react'
import ProductCard from './ProductCard'

export default function Product({product}) {
  return (
    <div className='rounded-3xl'>
      <ProductCard product={product} />
    </div>
  )
}
