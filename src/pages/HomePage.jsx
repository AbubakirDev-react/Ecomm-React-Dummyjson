import React from 'react'
import Slider from '../components/Slider'
import Products from '../components/products/Products'

export default function HomePage() {
  return (
    <div className='w-full h-screen'>
      <MobileHeaderMenu/>
      <Slider />
      <Products />
    </div>
  )
}
