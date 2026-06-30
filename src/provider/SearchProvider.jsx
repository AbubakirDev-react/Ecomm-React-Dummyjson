import { Profiler, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { products } from "../data/products";

export default function SearchProvider({children}){
  const [query,setQuery] = useState('');
  const [result,setResult] = useState(()=>{
    const saved = localStorage.getItem('result')
    return saved?JSON.parse(saved):[]
  })
  const search=(searchQuery)=>{
    const filteredByTitle = products.filter((product)=>product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    const filteredByCategory = products.filter((product)=>product.category.toLowerCase().includes(searchQuery.toLowerCase()))
   const filteredByBrand = products.filter((product)=>product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    console.log(filteredByTitle,filteredByCategory,filteredByBrand)
  }
  useEffect(()=>{
    search(query)
  },[query])
  return(
    <SearchContext.Provider value={{search,setQuery}}>{children}</SearchContext.Provider>
  );
}