import { useState } from 'react'
import './App.css'
import MobileMenu from './components/MobileMenu'
import MobileHeaderMenu from './components/MobileHeaderMenu'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'
import Wishlist from './pages/Wishlist'
function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <MobileMenu />
    </div>
  )
}

export default App
