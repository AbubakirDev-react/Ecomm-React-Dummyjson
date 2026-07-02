import React from 'react'
import { getProductById } from '../data/products'
import { useCart } from '../hooks/useCart'
import { Star } from 'lucide-react';

export default function CartItemCard({id}) {
  const {getItemWithId, currentItemQuantity, minusQuantity, deleteFromCart, addProductToCart} = useCart();
  const item = getItemWithId(id);
  const quantity = currentItemQuantity(id);
  
  // Agar item topilmasa
  if (!item) {
    return <div className="p-3">Продукт не найден!</div>;
  }

  return (
    <div className='p-3 rounded-2xl bg-(--surface) duration-300 hover:bg-(--surface-hover) grid grid-cols-3'>
      <div>
        <img src={item.thumbnail || ''} alt={item.name || ''} />
      </div>
      <div className='col-span-2'>
        <h1 className="font-semibold">{item.title}</h1>
        <p className="text-sm text-gray-600">Цена: {item.price}$</p>
        <div className='flex gap-1'><Star fill='orange' color='orange'/> • <span className='font-bold'>{item.rating}</span> <span>{item.reviews.length} Отзывы</span></div>
        <div className="flex items-center gap-2 mt-2">
          <button 
            onClick={() => minusQuantity(id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button 
            onClick={() => addProductToCart(id)}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
          <button 
            onClick={() => deleteFromCart(id)}
            className="px-3 py-1 bg-gray-500 text-white rounded ml-2"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  )
}