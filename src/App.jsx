import { useState } from 'react'
import './App.css'
import MobileMenu from './components/MobileMenu'
import MobileHeaderMenu from './components/MobileHeaderMenu'

function App() {

  return (
    <div className='app'>
      <MobileHeaderMenu/>
      <MobileMenu />
    </div>
  )
}

export default App
