import { useState } from 'react'
import './App.css'
import MobileMenu from './components/MobileMenu'
import MobileHeaderMenu from './components/MobileHeaderMenu'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <MobileMenu />
    </div>
  )
}

export default App
