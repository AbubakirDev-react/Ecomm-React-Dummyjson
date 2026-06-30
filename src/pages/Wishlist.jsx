import React from 'react'
import { useWishlist } from '../hooks/useWishlist'
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import FavouritedProductCard from '../components/products/FavouritedProductCard';
import { Heart } from 'lucide-react';


export default function Wishlist() {
  const {wishlistItems} = useWishlist();
  const {currentEmail} = useAuth();
  const userWishlistItems = wishlistItems.filter(item=>item.user===currentEmail)
  console.log(userWishlistItems)
  if(userWishlistItems.length===0 || userWishlistItems=== null){
    return (
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-2xl flex flex-col justify-center items-center'><Heart fill='red'/><br />Ваш список желаний пуст.</h1>
        <h3 className='text-xl'>Добавьте товары, <br /> чтобы вернуться к ним позже.</h3>
        <Link to={'/'} className='p-3 border border-(--primary) rounded-2xl mt-3 text-(--text-secondary)'>Перейти к покупкам</Link>
      </div>
    )
  }
  return (
    <div className='w-full min-h-screen p-4 flex flex-col gap-2'>
      {userWishlistItems.map((item)=>(
        <FavouritedProductCard productId={item.product_id} />
      ))}
    </div>
  )
}
