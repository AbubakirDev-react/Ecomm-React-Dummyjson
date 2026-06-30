
import { useEffect, useState } from 'react'
import {WishList} from '../context/wishlist.context'
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const WishlistProvider =({children})=>{
  const [wishlistItems,setWishlistItems] = useState(()=>{
    const saved = localStorage.getItem('wishlistItems')
    return saved?JSON.parse(saved):[]
  })
  const {currentEmail} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.setItem('wishlistItems',JSON.stringify(wishlistItems))
  },[wishlistItems])
  const add=(productId)=>{
    if(!currentEmail){
      navigate('/signin')
    } else {
      const exists = wishlistItems.find(item=>item.user===currentEmail&&item.product_id===productId)
      if(!exists){
        setWishlistItems(prev=>[...prev,{user:currentEmail,product_id:productId}])
      } else {
        remove(productId)
      }
    }
  }

  const remove=(productId)=>{
    const filtered=wishlistItems.filter(item=>!(item.user===currentEmail&&item.product_id===productId))
    setWishlistItems(filtered)
  }
  const isAdded  = (productId)=>{
    return wishlistItems.some(item=>item.product_id===productId&&item.user===currentEmail)
  }
  return(
    <WishList.Provider value={{add,remove,isAdded,wishlistItems}}>{children}</WishList.Provider>
  )
}

export default WishlistProvider