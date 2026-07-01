import { useEffect, useState } from 'react';
import {cartContext} from '../context/CartContext';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CartProvider=({children})=>{
  const [cartItems,setCartItems] = useState(()=>{
    const saved = localStorage.getItems('cartItems')
    return saved?JSON.parse(saved):[]
  })
  const {currentEmail} = useAuth();
  const navigate = useNavigate();
  const addProductToCart=(currentEmail,productId)=>{
    if(!currentEmail){
      navigate('/login')
    }
    const exists = cartItems.find(item=>item.p_id===productId)
    if(!exists){
      const newCartItem = {
        user:currentEmail,
        p_id=productId,
        
      }
    }
  }
  return (
    <cartContext.Provider value={{  }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider