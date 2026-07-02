import { useEffect, useState } from 'react';
import {cartContext} from '../context/CartContext';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';

const CartProvider=({children})=>{
  const [cartItems,setCartItems] = useState(()=>{
    const saved = localStorage.getItem('cartItems')
    return saved?JSON.parse(saved):[]
  })
  const {currentEmail} = useAuth();
  const navigate = useNavigate();
  // saving cartItems to localstorage
  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])

  // add
  const addProductToCart=(productId)=>{
    if(!currentEmail){
      navigate('/signin')
      return;
    }
    console.log('Product ID:', productId);
    console.log('Current User:', currentEmail);
    console.log('Current Cart:', cartItems);
    console.log(productId)
    const existing =  cartItems.find(item=>item.id===productId&&item.user===currentEmail)
    if(existing){
      const currentQuantity = existing.quantity
      setCartItems(prevItems=>{
        const updated = prevItems.map(item=>item.id===productId&&item.user===currentEmail?{...item,user:currentEmail,id:productId,quantity:currentQuantity+1}:item)
        console.log('Updated items:',updated)  
        return updated;  
      })
    }else{
      setCartItems(prev=>[...prev,{user:currentEmail,id:productId,quantity:1}])
    }
  }
  const isAddedtoCart = (productId) => {
    if(!currentEmail) return false
    const addedItem = cartItems.find(item=>item.id===productId&&item.user===currentEmail)
    return addedItem?true:false
  }
  const currentItemQuantity = (productId) => {
    if(!currentEmail) return 0
    const c_item = cartItems.find(
      item => item.id === productId && item.user === currentEmail
    );
    return c_item ? c_item.quantity : 0;
  }
  const minusQuantity = (id) => {
  if(!currentEmail) return
  const cart_item = cartItems.find(item => item.id === id && item.user === currentEmail)
  if(!cart_item) return;
  
  if (cart_item.quantity === 1) {
    deleteFromCart(id);
  } else {
    const currentQuantity = cart_item.quantity
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.user === currentEmail 
          ? {...item, quantity: currentQuantity - 1}
          : item
      )
    )
  }
}
  const userCart = cartItems.filter(item=>item.user===currentEmail)
  const deleteFromCart=(productId)=>{
    if(!currentEmail){
      navigate('/')
      return
    }
    const filtered = cartItems.filter(item=>!(item.user===currentEmail&&item.id===productId))
    setCartItems(filtered)  
  }
  const getItemWithId = (id) => {
  if(!currentEmail) return null;
  const found = cartItems.find(item => item.user === currentEmail && item.id === id);
  if (!found) return null;
  const product = getProductById(found.id);
  return product;
}
  return (
    <cartContext.Provider value={{ getItemWithId,addProductToCart,userCart ,minusQuantity,isAddedtoCart,currentItemQuantity,deleteFromCart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider