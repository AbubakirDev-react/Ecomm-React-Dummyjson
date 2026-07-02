import { CheckCircle2, ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingBasketIcon, StarIcon, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useWishlist } from '../../hooks/useWishlist'
import { isAxiosError } from 'axios'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product}) {
  const images = product.images
  const [currentIndex,setCurrentIndex] = useState(()=>{
    const saved = localStorage.getItem('currentImageIndex')
    return saved?JSON.parse(saved):0
  })
  const {currentEmail} = useAuth();
  const prev = () => {
    const isFirstImage = currentIndex === 0
    setCurrentIndex(isFirstImage?images.length-1:currentIndex-1)
  }
  const next = () => {
    const isLastImage = currentIndex === images.length-1
    setCurrentIndex(isLastImage?0:currentIndex+1)
  }
  const {addProductToCart,deleteFromCart,isAddedtoCart,currentItemQuantity,minusQuantity} = useCart();

  const {add,isAdded} = useWishlist();
  const navigate = useNavigate();
  const addToCart = (id) => {
    if(!currentEmail){
      navigate('/signin')
      return;
    } else {
      addProductToCart(id)
    }
  }
  const isInCart = isAddedtoCart(product.id)
  const quantity = currentItemQuantity(product.id)
  return (
    <div className='w-full rounded-3xl duration-300 shadow hover:shadow-lg hover:bg-(--primary-hover)/20 hover:scale-105'>
      <div className='w-full py-4 relative h-70 m-auto '>
        {isInCart?
        
        <div className='absolute flex items-center gap-0.5 left-3 top-3 rounded-xl cursor-pointer text-(--text-secondary) border border-(--primary)'>
          <button onClick={()=>addToCart(product.id)} className='text-(--primary) px-2 py-1 rounded hover:text-(--primary-hover)'><Plus/></button>
          <span className='bg-transparent px-2 py-1 rounded text-(--primary)'>{quantity}</span>
          {quantity!==1?<button onClick={()=>minusQuantity(product.id)} className='text-(--primary) px-2 py-1 rounded hover:text-(--primary-hover)'><Minus/></button>:<button onClick={()=>deleteFromCart(product.id)} className='px-2 py-1 rounded hover:text-(--text)'><Trash2/></button>}
          
          </div>: <button onClick={()=>addToCart(product.id)} className='absolute left-3 top-3 bg-(--primary) p-1.5 rounded-xl cursor-pointer text-white/70 hover:text-white'><ShoppingBasketIcon/></button>
      }
        <button className='absolute top-3 right-3 cursor-pointer active:scale-110 duration-300' onClick={()=>add(product.id)}>{isAdded(product.id)?<Heart size={27} color='red' className='duration-300 hover:fill-red-600 ' fill='red'/>:<Heart size={27} color='red' className='duration-300' />}</button>
        <img className='duration-300' src={product.images[currentIndex]} alt={product.title} />
        {product.images.length>=2 && (
          <>
            <div className=' absolute left-2 bottom-2 bg-black/20 text-white rounded-full p-2 cursor-pointer ' onClick={prev}>
      <ChevronLeft />
    </div>

      
    <div className='absolute right-2 bottom-2 bg-black/20 text-white rounded-full p-2 cursor-pointer ' onClick={next}>
      <ChevronRight />
    </div>
          </>
        )}
      </div>
    <div className='flex flex-col px-3 py-2 relative'>
        <h3 className='text-lg'>${product.price}  <del className='text-(--text)/40 ms-2 text-sm'>${Math.floor(product.price+product.price/100*product.discountPercentage)+'.99'}</del></h3>
        {product.brand&&
        <h3 className='flex gap-1'>{product.brand} <CheckCircle2 color='blue' fill='transparent'/></h3>
        }
        <p className='text-sm w-full whitespace-nowrap overflow-hidden text-ellipsis'>{product.title}</p>
        <div className='flex items-center justify-start gap-1'>
          <StarIcon size={18} fill='orange' color='orange'/>{product.rating} • <span className='text-(--text)/60'>{product.reviews.length} reviews</span>
        </div>
      </div>
    </div>
  )
}
