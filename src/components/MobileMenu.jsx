import { MenuItem } from '@headlessui/react'
import { HeartIcon, HomeIcon, LucideHeart, MenuIcon, ShoppingCartIcon, UserCircle2 } from 'lucide-react'
import React, { act, useState } from 'react'
import { Link } from 'react-router-dom'


const menu_items = [
  {id:1, page:'/',icon:<HomeIcon/>},
  {id:2, page:'/catalog',icon:<MenuIcon />},
  {id:3, page:'/wishlist',icon:<HeartIcon />},
  {id:4, page:'/cart',icon:<ShoppingCartIcon />},
  {id:5, page:'profile',icon:<UserCircle2 />}
]
 
export default function MobileMenu() {
  const [activeField,setActiveField] = useState(menu_items[0])
  return (
    <nav className='mobile-menu flex items-center justify-evenly gap-2 w-full fixed bottom-0 left-0 bg-primary'>
      {menu_items.map((item)=>(
        <Link to={item.page} key={item.id} className={`flex items-center p-3 justify-center ${item===activeField?'text-(--text)':'text-(--text-secondary)'}`} onClick={()=>setActiveField(item)}>{item.icon}</Link>
      ))}  
    </nav>
  )
}
