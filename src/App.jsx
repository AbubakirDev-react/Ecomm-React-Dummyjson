import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> 
      <Home showSidebar={showSidebar} />
      <Footer/>
    </>
  )
}

export default App
