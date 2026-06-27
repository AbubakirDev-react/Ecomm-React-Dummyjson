import { HeartIcon, HomeIcon, LucideHeart, MenuIcon, ShoppingCartIcon, UserCircle2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const menu_items = [
  {id:1, page:'/',icon:<HomeIcon/>},
  {id:2, page:'/catalog',icon:<MenuIcon />},
  {id:3, page:'/wishlist',icon:<HeartIcon />},
  {id:4, page:'/cart',icon:<ShoppingCartIcon />},
  {id:5, page:'profile',icon:<UserCircle2 />}
]
 
export default function MobileMenu() {
  
  return (
    <nav className='grid grid-cols-5 gap-2 w-full fixed bottom-0 left-0 p-3 bg-primary'>
      {menu_items.map((item)=>(
        <Link to={item.page} key={item.id} className={`flex items-center justify-center focus:text-gray-800`}>{item.icon}</Link>
      ))}  
    </nav>
  )
}
