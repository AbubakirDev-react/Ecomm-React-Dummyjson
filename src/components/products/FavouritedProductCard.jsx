import React from 'react'
import { getProductById } from '../../data/products'
import { CheckCircle2, HeartMinus,  ShoppingBagIcon, ShoppingBasket, ShoppingBasketIcon, StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../hooks/useWishlist'

export default function FavouritedProductCard({productId}) {
  const {remove} = useWishlist();
  const product = getProductById(productId)
  return (
    
    <div key={product.id} className='w-full duration-300 grid grid-cols-4 rounded-2xl bg-(--surface) shadow'>
      <div className='p-2'>
        <Link to={'/'}>
          <img src={product.thumbnail} alt="" />
        </Link>
      </div>
      <Link to={'/'} className='col-span-2 p-2'>
      <div className=''>
        <h3 className='text-lg'>${product.price}  <del className='text-black/40 ms-2 text-sm'>${Math.floor(product.price+product.price/100*product.discountPercentage)+'.99'}</del></h3>
        {product.brand&&
        <h3 className='flex gap-1'>{product.brand}</h3>
        }
        <p className='text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis'>{product.title}</p>
        <div className='flex items-center justify-start gap-1'>
          <StarIcon size={18} fill='orange' color='orange'/>{product.rating} • <span className='text-black/60'>{product.reviews.length} reviews</span>
        </div>
      </div>
      </Link>
      <div className='flex flex-col p-3 gap-2 items-center justify-center'>
        <button onClick={()=>remove(product.id)} className='text-sm px-3 py-1.5 border border-(--danger) rounded-xl text-(--danger) flex gap-0.5 duration-300 hover:text-(--surface) hover:bg-(--danger)'>Удалить <HeartMinus/></button>
        <button className='p-2 border bg-(--primary) border-(--primary-hover) rounded-xl text-(--surface) flex gap-0.5 duration-300 hover:text-(--surface-hover) hover:bg-(--primary-hover)'><ShoppingBasketIcon/></button>
      </div>
    </div>
    
  )
}
