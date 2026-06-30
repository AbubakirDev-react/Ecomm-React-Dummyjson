import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {useWishlist} from "../hooks/useWishlist"

export default function AuthProvider({children}){
  const [usersList,setUsersList] = useState(()=>{
    const saved = localStorage.getItem('usersList')
    return saved?JSON.parse(saved):[]
  })
  const [err,setError] = useState(null);
  const [currentEmail,setCurrentEmail] = useState(()=>{
    const email = localStorage.getItem('currentEmail')
    return email?email:null
  })
  const navigate = useNavigate();
  const {createWishlist} = useWishlist()
  // useEffect usersList

  useEffect(()=>{
    localStorage.setItem('usersList',JSON.stringify(usersList))
  },[usersList])

  // useEffect currentEmail

  useEffect(()=>{
    if(currentEmail){
    localStorage.setItem('currentEmail',currentEmail)
    } else{
      localStorage.removeItem('currentEmail')
    }
  },[currentEmail])



  // signin

  const signin=(data)=>{
    const user = usersList.find(u=>u.email===data.email)
    
    if(!user){
      setError('Почта не найдена!')
    }
    else{
      if(user && user.password===data.password ){
      setCurrentEmail(user.email);
      navigate('/profile')
    } else {
      setError('Почта или пароль неправильный!')
    }
    }
  }

  // signup

  const signup=(data)=>{
    const emailExists = usersList.find(u=>u.email===data.email)
    if(!emailExists){
    setUsersList((prev)=>[...prev,data])
    setCurrentEmail(data.email)
    navigate('/profile')
    } else {
      setError('Почта уже использована!')
    }
  }

  // signout

  const signout = () => {
    setCurrentEmail(null);
    localStorage.removeItem('currentEmail')
    navigate('/')
  }
  const currentUser = usersList.find(user=>user.email===currentEmail)

  return <AuthContext.Provider value={{ signup,signin,signout,currentUser,currentEmail,err }}>{children}</AuthContext.Provider>
}