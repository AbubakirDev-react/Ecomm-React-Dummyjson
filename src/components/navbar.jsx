import { MenuItem } from '@headlessui/react'
import { HeartIcon, HomeIcon, LucideHeart, MenuIcon, MoonStar, SearchIcon, ShoppingCartIcon, Sun, UserCircle2 } from 'lucide-react'
import React, { act, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'


const menu_items = [
  {id:1,title:'Главная', page:'/',icon:<HomeIcon/>},
  {id:2,title:'Поиск', page:'/search',icon:<SearchIcon />},
  {id:3,title:'Wishlist', page:'/wishlist',icon:<HeartIcon />},
  {id:4,title:'Корзинка', page:'/checkout',icon:<ShoppingCartIcon />},
  {id:5,title:'Профиль', page:'/profile',icon:<UserCircle2 />}
]
 
export default function Navbar() {
  const [activeField,setActiveField] = useState(menu_items[0])
  const {theme,toggleTheme} = useTheme();
  return (
      <nav className='px-6 hidden mobile-menu sm:hidden md:flex items-center justify-between gap-2 w-full bg-primary'>
        <Link to="/" className='text-xl font-bold'>Shopify</Link>
      <ul className='flex'>
        {menu_items.map((item)=>(
        <Link to={item.page} key={item.id} className={`flex items-center flex-col p-3 justify-center ${item===activeField?'text-(--text)':'text-(--text-secondary)'}`} onClick={()=>setActiveField(item)}>{item.icon} <span>{item.title}</span></Link>
      ))} 
      <button className='' onClick={toggleTheme}> {theme==='light'?<MoonStar/>:<Sun/>}</button> 
      </ul>
    </nav>
  )
}
