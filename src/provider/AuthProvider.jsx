import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({children}){
  const [usersList,setUsersList] = useState(()=>{
    const saved = localStorage.getItem('usersList')
    return saved?JSON.parse(saved):[]
  })
  const [errors,setErrors] = useState([])
  useEffect(()=>{
    localStorage.setItem('usersList',JSON.stringify(usersList))
  },[usersList])
  const signup=(data)=>{
    const emailExists = usersList.find(u=>u.email===data.email)
    if(!emailExists){
    setUsersList((prev)=>[...prev,{data}])
    } else {
      console.log('Email exists!')
      setErrors(prev=>[...prev,'Почта исползованная!'])
    }
  }

  return <AuthContext.Provider value={{ signup }}>{children}</AuthContext.Provider>
}