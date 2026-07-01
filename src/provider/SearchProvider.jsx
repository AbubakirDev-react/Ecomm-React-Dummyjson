import { Profiler, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

export default function SearchProvider({children}){
  const [query,setQuery] = useState('');
  const [result,setResult] = useState(()=>{
    const saved = localStorage.getItem('result')
    return saved?JSON.parse(saved):[]
  })
  const navigate = useNavigate()
  useEffect(()=>{
    search(query)
  },[query])
  const search=(searchQuery)=>{
    if(searchQuery.trim()==='') return setResult([])
    navigate('/search')
    const filteredByTitle = products.filter((product)=>product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setResult([...filteredByTitle])
    localStorage.setItem('result',JSON.stringify([...filteredByTitle]))
  }
  return(
    <SearchContext.Provider value={{search,query,setQuery,result}}>{children}</SearchContext.Provider>
  );
}