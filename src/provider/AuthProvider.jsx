import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {useWishlist} from "../hooks/useWishlist"

export default function AuthProvider({children}){
  const [usersList,setUsersList] = useState(()=>{
    const saved = localStorage.getItem('usersList')
    return saved?JSON.parse(saved):[]
  })
  const [currentEmail,setCurrentEmail] = useState(()=>{
    const email = localStorage.getItem('currentEmail')
    return email?email:null
  })
  const [error,setError] = useState([])
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
    console.log(user)
    console.log(data)
    if(user && user.password===data.password ){
      setCurrentEmail(user.email);
      navigate('/profile')
      console.log('SignIn Success!')
    } else {
      console.log('Email or Password invalid!')
    }
  }

  // signup

  const signup=(data)=>{
    const emailExists = usersList.find(u=>u.email===data.email)
    if(!emailExists){
    setUsersList((prev)=>[...prev,data])
    setCurrentEmail(data.email)
    navigate('/profile')
    console.log('Signup successfull!')
    } else {
      console.log('Email exists!')
      setError('Почта исползованная!')
    }
  }

  // signout

  const signout = () => {
    setCurrentEmail(null);
    localStorage.removeItem('currentEmail')
    navigate('/')
    console.log('Signout Successfull!')
  }
  const currentUser = usersList.find(user=>user.email===currentEmail)

  return <AuthContext.Provider value={{ signup,signin,signout,currentUser,currentEmail }}>{children}</AuthContext.Provider>
}