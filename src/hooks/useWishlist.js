import { useContext } from "react"
import { WishList } from "../context/wishlist.context"

export const useWishlist=()=>{
  const context = useContext(WishList)
  return context
}