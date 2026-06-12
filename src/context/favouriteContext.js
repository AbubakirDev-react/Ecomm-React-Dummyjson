import { createContext } from "react";



const FavouriteContext = createContext(null)

const FavouriteProvider = ({children}) => {
    return <FavouriteContext.Provider value={}>{children}</FavouriteContext.Provider>
}