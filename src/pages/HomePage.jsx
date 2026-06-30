import React, { useState } from 'react'
import Slider from '../components/Slider'
import Products from '../components/products/Products'
import MobileHeaderMenu from '../components/MobileHeaderMenu'

export default function HomePage() {
  const [isActive,setIsActive] = useState(true)
  
  return (
    <div className='w-full h-screen'>
      <MobileHeaderMenu setIsActive={setIsActive}/>
      <Slider isActive={isActive} />
      <Products />
    </div>
  )
}
