import React from 'react'
import { useCart } from '../hooks/useCart'
import CartItemCard from '../components/CartItemCard';

export default function CheckoutPage() {
  const {userCart} = useCart();
  
  if (userCart.length === 0) {
    return <div className="p-4 text-center">Корзинка пусто</div>;
  }

  return (
    <div className='grid grid-cols-1 gap-2 p-4'>
      {userCart.map(item => (
        <CartItemCard key={item.id} id={item.id} />
      ))}
    </div>
  )
}