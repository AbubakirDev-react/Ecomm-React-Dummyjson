import { useState } from 'react'
import './App.css'
import MobileMenu from './components/MobileMenu'
import MobileHeaderMenu from './components/MobileHeaderMenu'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='app'>
      <MobileHeaderMenu/>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <MobileMenu />
    </div>
  )
}

export default App
