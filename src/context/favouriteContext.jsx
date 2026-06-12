import { createContext, useContext, useState } from "react";
import { getProductById } from "../data/products";



export const FavouriteContext = createContext(null)

const FavouriteProvider = ({children}) => {
    const [favouritedItems,setFavouritedItems] = useState(()=>{
        const saved = localStorage.getItem('favouritedItems');
        return saved ? JSON.parse(saved): []
})

    function addToFavourites(productId){
        if(favouritedItems.find((item)=>item.id===productId)) return
        setFavouritedItems([...favouritedItems, {id:productId}])
        localStorage.setItem('favouritedItems',JSON.stringify([...favouritedItems, {id:productId}]))
    }

    function getFIWP(){
        const fItems = JSON.parse(localStorage.getItem('favouritedItems') || '[]')
        console.log(fItems)
        return fItems.map((item)=>({
            ...item,product:getProductById(item.id)
        })).filter((item)=>item.product)
    }

    function rmFromFavourites(productId){
        const newItems = favouritedItems.filter((item)=>item.id!==productId);
        setFavouritedItems(newItems);
        localStorage.setItem('favouritedItems',JSON.stringify(newItems));
    }

    return (<FavouriteContext.Provider value={{ 
        addToFavourites,
        getFIWP,
        rmFromFavourites
    }}>{children}</FavouriteContext.Provider>)
}

export const useFavourite=()=>{
    const context = useContext(FavouriteContext);
    return context
}

export default FavouriteProvider

